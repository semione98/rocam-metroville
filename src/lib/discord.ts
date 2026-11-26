import "server-only";

export interface DiscordGuildMember {
  roles: string[];
  nick?: string | null;
  user?: {
    id: string;
    username: string;
    avatar: string | null;
  };
}

/**
 * Looks up a Discord role id -> Rank map from the ROLE_ID_MAP env var.
 * Example: {"111...":"STAFF","222...":"GESTOR", ...}
 */
export function getRoleIdMap(): Record<string, string> {
  const raw = process.env.ROLE_ID_MAP;
  if (!raw) return {};
  try {
    const parsed = JSON.parse(raw);
    if (typeof parsed !== "object" || parsed === null) return {};
    return parsed as Record<string, string>;
  } catch {
    console.error(
      "[discord] Falha ao interpretar ROLE_ID_MAP como JSON. Verifique o formato em .env"
    );
    return {};
  }
}

/**
 * Fetches a member's roles in the configured guild using the Discord Bot
 * Token. Returns `null` if the user is not a member of the guild (404) or
 * the bot/guild is misconfigured.
 */
export async function fetchGuildMember(
  discordUserId: string
): Promise<DiscordGuildMember | null> {
  const botToken = process.env.DISCORD_BOT_TOKEN;
  const guildId = process.env.DISCORD_GUILD_ID;

  if (!botToken || !guildId) {
    console.error(
      "[discord] DISCORD_BOT_TOKEN ou DISCORD_GUILD_ID não configurados."
    );
    return null;
  }

  const res = await fetch(
    `https://discord.com/api/v10/guilds/${guildId}/members/${discordUserId}`,
    {
      headers: { Authorization: `Bot ${botToken}` },
      cache: "no-store",
    }
  );

  if (res.status === 404) {
    // User is authenticated with Discord but is not a member of the guild.
    return null;
  }

  if (!res.ok) {
    console.error(
      `[discord] Falha ao buscar membro da guild (status ${res.status}): ${await res
        .text()
        .catch(() => "")}`
    );
    return null;
  }

  return (await res.json()) as DiscordGuildMember;
}

/** Thrown when membership cannot be confirmed or a kick cannot be completed. */
export class DiscordMemberRemovalError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DiscordMemberRemovalError";
  }
}

function requireDiscordBotConfig(): { botToken: string; guildId: string } {
  const botToken = process.env.DISCORD_BOT_TOKEN;
  const guildId = process.env.DISCORD_GUILD_ID;
  if (!botToken || !guildId) {
    throw new DiscordMemberRemovalError(
      "Integração com o Discord não configurada (bot ou servidor da unidade)."
    );
  }
  return { botToken, guildId };
}

/**
 * Confirms the user is still in the unit guild and kicks them if so.
 * A 404 means they already left — that is not an error.
 * Any other Discord failure throws so the caller can abort the site deletion.
 */
export async function removeGuildMemberIfPresent(
  discordUserId: string
): Promise<"removed" | "absent"> {
  const { botToken, guildId } = requireDiscordBotConfig();
  const memberUrl = `https://discord.com/api/v10/guilds/${guildId}/members/${discordUserId}`;
  const headers = { Authorization: `Bot ${botToken}` };

  let memberRes: Response;
  try {
    memberRes = await fetch(memberUrl, { headers, cache: "no-store" });
  } catch (err) {
    console.error("[discord] Erro de rede ao verificar membro da guild.", err);
    throw new DiscordMemberRemovalError(
      "Não foi possível consultar o Discord da unidade. A conta não foi excluída."
    );
  }

  if (memberRes.status === 404) return "absent";

  if (!memberRes.ok) {
    console.error(
      `[discord] Falha ao verificar membro da guild (status ${memberRes.status}): ${await memberRes
        .text()
        .catch(() => "")}`
    );
    throw new DiscordMemberRemovalError(
      "Não foi possível confirmar se o usuário ainda está no Discord. A conta não foi excluída."
    );
  }

  let kickRes: Response;
  try {
    kickRes = await fetch(memberUrl, {
      method: "DELETE",
      headers: {
        ...headers,
        "X-Audit-Log-Reason": encodeURIComponent(
          "Removido do efetivo pelo painel ROCAM"
        ),
      },
      cache: "no-store",
    });
  } catch (err) {
    console.error("[discord] Erro de rede ao expulsar membro da guild.", err);
    throw new DiscordMemberRemovalError(
      "O usuário está no Discord, mas a expulsão falhou por erro de rede. A conta não foi excluída."
    );
  }

  if (kickRes.status === 204 || kickRes.status === 404) return "removed";

  const body = await kickRes.text().catch(() => "");
  console.error(
    `[discord] Falha ao expulsar membro da guild (status ${kickRes.status}): ${body}`
  );

  if (kickRes.status === 403) {
    throw new DiscordMemberRemovalError(
      "O bot não conseguiu expulsar esse membro. Ele precisa da permissão Expulsar Membros e de um cargo acima do cargo da pessoa. A conta não foi excluída."
    );
  }

  throw new DiscordMemberRemovalError(
    "O usuário está no Discord, mas não foi possível expulsá-lo. A conta não foi excluída."
  );
}

/**
 * Posts a plain text message to a channel using the Discord Bot Token.
 * Never throws — logs and returns `false` on failure so a Discord outage
 * never blocks the caller's primary action (e.g. sending a PTR reminder).
 */
export async function sendChannelMessage(
  channelId: string,
  content: string
): Promise<boolean> {
  const botToken = process.env.DISCORD_BOT_TOKEN;

  if (!botToken) {
    console.error("[discord] DISCORD_BOT_TOKEN não configurado.");
    return false;
  }

  try {
    const res = await fetch(
      `https://discord.com/api/v10/channels/${channelId}/messages`,
      {
        method: "POST",
        headers: {
          Authorization: `Bot ${botToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content }),
        cache: "no-store",
      }
    );

    if (!res.ok) {
      console.error(
        `[discord] Falha ao enviar mensagem no canal ${channelId} (status ${res.status}): ${await res
          .text()
          .catch(() => "")}`
      );
      return false;
    }

    return true;
  } catch (err) {
    console.error("[discord] Erro de rede ao enviar mensagem no canal.", err);
    return false;
  }
}
