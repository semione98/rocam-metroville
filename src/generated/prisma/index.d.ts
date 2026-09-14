
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * A logged-in application user, sourced from Discord OAuth + guild role sync.
 * `rank` is the source of truth for authorization (refreshed on every login,
 * stored here rather than only in the JWT so it survives token refreshes and
 * can be audited/revoked server-side). We use NextAuth's JWT session
 * strategy (no Account/Session tables needed) since this app has exactly
 * one identity provider (Discord) and no email-based features.
 * 
 * This model also doubles as the "Efetivo" roster entry (formerly a
 * separate `Officer` table) — every roster member must have logged in with
 * Discord at least once. `passport` is null until the person completes the
 * mandatory onboarding form on first login (see src/app/onboarding); until
 * then they're an authenticated account but not yet a full roster member.
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Arrest
 * 
 */
export type Arrest = $Result.DefaultSelection<Prisma.$ArrestPayload>
/**
 * Model ArrestOfficer
 * Join table: many-to-many between Arrest and User (participants).
 */
export type ArrestOfficer = $Result.DefaultSelection<Prisma.$ArrestOfficerPayload>
/**
 * Model EvalRequest
 * A pending request for a PTR (probationary officer evaluation).
 */
export type EvalRequest = $Result.DefaultSelection<Prisma.$EvalRequestPayload>
/**
 * Model CompletedEval
 * 
 */
export type CompletedEval = $Result.DefaultSelection<Prisma.$CompletedEvalPayload>
/**
 * Model EvalAnswer
 * 
 */
export type EvalAnswer = $Result.DefaultSelection<Prisma.$EvalAnswerPayload>
/**
 * Model Absence
 * 
 */
export type Absence = $Result.DefaultSelection<Prisma.$AbsencePayload>
/**
 * Model Promotion
 * 
 */
export type Promotion = $Result.DefaultSelection<Prisma.$PromotionPayload>
/**
 * Model Warning
 * 
 */
export type Warning = $Result.DefaultSelection<Prisma.$WarningPayload>
/**
 * Model Uniform
 * 
 */
export type Uniform = $Result.DefaultSelection<Prisma.$UniformPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model StaffMember
 * 
 */
export type StaffMember = $Result.DefaultSelection<Prisma.$StaffMemberPayload>
/**
 * Model ActivityLog
 * 
 */
export type ActivityLog = $Result.DefaultSelection<Prisma.$ActivityLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Rank: {
  STAFF: 'STAFF',
  GESTOR: 'GESTOR',
  SUBGESTOR: 'SUBGESTOR',
  SUPERVISOR: 'SUPERVISOR',
  ELITE: 'ELITE',
  GRADUADOS: 'GRADUADOS',
  PROBATORIOS: 'PROBATORIOS'
};

export type Rank = (typeof Rank)[keyof typeof Rank]


export const OfficerStatus: {
  ATIVO: 'ATIVO',
  LICENCA: 'LICENCA',
  INATIVO: 'INATIVO'
};

export type OfficerStatus = (typeof OfficerStatus)[keyof typeof OfficerStatus]


export const ArrestOutcome: {
  SUCESSO: 'SUCESSO',
  SEM_SUCESSO: 'SEM_SUCESSO'
};

export type ArrestOutcome = (typeof ArrestOutcome)[keyof typeof ArrestOutcome]


export const RequestStatus: {
  PENDENTE: 'PENDENTE',
  APROVADO: 'APROVADO',
  REJEITADO: 'REJEITADO'
};

export type RequestStatus = (typeof RequestStatus)[keyof typeof RequestStatus]


export const EvalRequestStatus: {
  PENDENTE: 'PENDENTE',
  CONCLUIDO: 'CONCLUIDO'
};

export type EvalRequestStatus = (typeof EvalRequestStatus)[keyof typeof EvalRequestStatus]


export const WarningLevel: {
  LEVE: 'LEVE',
  MEDIA: 'MEDIA',
  GRAVE: 'GRAVE'
};

export type WarningLevel = (typeof WarningLevel)[keyof typeof WarningLevel]


export const ActivityLogType: {
  SISTEMA: 'SISTEMA',
  STAFF: 'STAFF',
  EFETIVO: 'EFETIVO',
  PRISIONAL: 'PRISIONAL',
  AVALIACAO: 'AVALIACAO',
  AUSENCIA: 'AUSENCIA',
  PROMOCAO: 'PROMOCAO',
  PUNICAO: 'PUNICAO',
  FARDAMENTO: 'FARDAMENTO'
};

export type ActivityLogType = (typeof ActivityLogType)[keyof typeof ActivityLogType]

}

export type Rank = $Enums.Rank

export const Rank: typeof $Enums.Rank

export type OfficerStatus = $Enums.OfficerStatus

export const OfficerStatus: typeof $Enums.OfficerStatus

export type ArrestOutcome = $Enums.ArrestOutcome

export const ArrestOutcome: typeof $Enums.ArrestOutcome

export type RequestStatus = $Enums.RequestStatus

export const RequestStatus: typeof $Enums.RequestStatus

export type EvalRequestStatus = $Enums.EvalRequestStatus

export const EvalRequestStatus: typeof $Enums.EvalRequestStatus

export type WarningLevel = $Enums.WarningLevel

export const WarningLevel: typeof $Enums.WarningLevel

export type ActivityLogType = $Enums.ActivityLogType

export const ActivityLogType: typeof $Enums.ActivityLogType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.arrest`: Exposes CRUD operations for the **Arrest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Arrests
    * const arrests = await prisma.arrest.findMany()
    * ```
    */
  get arrest(): Prisma.ArrestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.arrestOfficer`: Exposes CRUD operations for the **ArrestOfficer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArrestOfficers
    * const arrestOfficers = await prisma.arrestOfficer.findMany()
    * ```
    */
  get arrestOfficer(): Prisma.ArrestOfficerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.evalRequest`: Exposes CRUD operations for the **EvalRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EvalRequests
    * const evalRequests = await prisma.evalRequest.findMany()
    * ```
    */
  get evalRequest(): Prisma.EvalRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.completedEval`: Exposes CRUD operations for the **CompletedEval** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompletedEvals
    * const completedEvals = await prisma.completedEval.findMany()
    * ```
    */
  get completedEval(): Prisma.CompletedEvalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.evalAnswer`: Exposes CRUD operations for the **EvalAnswer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EvalAnswers
    * const evalAnswers = await prisma.evalAnswer.findMany()
    * ```
    */
  get evalAnswer(): Prisma.EvalAnswerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.absence`: Exposes CRUD operations for the **Absence** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Absences
    * const absences = await prisma.absence.findMany()
    * ```
    */
  get absence(): Prisma.AbsenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.promotion`: Exposes CRUD operations for the **Promotion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Promotions
    * const promotions = await prisma.promotion.findMany()
    * ```
    */
  get promotion(): Prisma.PromotionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.warning`: Exposes CRUD operations for the **Warning** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Warnings
    * const warnings = await prisma.warning.findMany()
    * ```
    */
  get warning(): Prisma.WarningDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.uniform`: Exposes CRUD operations for the **Uniform** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Uniforms
    * const uniforms = await prisma.uniform.findMany()
    * ```
    */
  get uniform(): Prisma.UniformDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.staffMember`: Exposes CRUD operations for the **StaffMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StaffMembers
    * const staffMembers = await prisma.staffMember.findMany()
    * ```
    */
  get staffMember(): Prisma.StaffMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activityLog`: Exposes CRUD operations for the **ActivityLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActivityLogs
    * const activityLogs = await prisma.activityLog.findMany()
    * ```
    */
  get activityLog(): Prisma.ActivityLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.0
   * Query Engine version: 0edf323efd1d98336f3f0a68684b56f689b900d3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Arrest: 'Arrest',
    ArrestOfficer: 'ArrestOfficer',
    EvalRequest: 'EvalRequest',
    CompletedEval: 'CompletedEval',
    EvalAnswer: 'EvalAnswer',
    Absence: 'Absence',
    Promotion: 'Promotion',
    Warning: 'Warning',
    Uniform: 'Uniform',
    Question: 'Question',
    StaffMember: 'StaffMember',
    ActivityLog: 'ActivityLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "arrest" | "arrestOfficer" | "evalRequest" | "completedEval" | "evalAnswer" | "absence" | "promotion" | "warning" | "uniform" | "question" | "staffMember" | "activityLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Arrest: {
        payload: Prisma.$ArrestPayload<ExtArgs>
        fields: Prisma.ArrestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArrestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArrestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArrestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArrestPayload>
          }
          findFirst: {
            args: Prisma.ArrestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArrestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArrestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArrestPayload>
          }
          findMany: {
            args: Prisma.ArrestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArrestPayload>[]
          }
          create: {
            args: Prisma.ArrestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArrestPayload>
          }
          createMany: {
            args: Prisma.ArrestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArrestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArrestPayload>[]
          }
          delete: {
            args: Prisma.ArrestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArrestPayload>
          }
          update: {
            args: Prisma.ArrestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArrestPayload>
          }
          deleteMany: {
            args: Prisma.ArrestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArrestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArrestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArrestPayload>[]
          }
          upsert: {
            args: Prisma.ArrestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArrestPayload>
          }
          aggregate: {
            args: Prisma.ArrestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArrest>
          }
          groupBy: {
            args: Prisma.ArrestGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArrestGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArrestCountArgs<ExtArgs>
            result: $Utils.Optional<ArrestCountAggregateOutputType> | number
          }
        }
      }
      ArrestOfficer: {
        payload: Prisma.$ArrestOfficerPayload<ExtArgs>
        fields: Prisma.ArrestOfficerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArrestOfficerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArrestOfficerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArrestOfficerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArrestOfficerPayload>
          }
          findFirst: {
            args: Prisma.ArrestOfficerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArrestOfficerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArrestOfficerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArrestOfficerPayload>
          }
          findMany: {
            args: Prisma.ArrestOfficerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArrestOfficerPayload>[]
          }
          create: {
            args: Prisma.ArrestOfficerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArrestOfficerPayload>
          }
          createMany: {
            args: Prisma.ArrestOfficerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArrestOfficerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArrestOfficerPayload>[]
          }
          delete: {
            args: Prisma.ArrestOfficerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArrestOfficerPayload>
          }
          update: {
            args: Prisma.ArrestOfficerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArrestOfficerPayload>
          }
          deleteMany: {
            args: Prisma.ArrestOfficerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArrestOfficerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArrestOfficerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArrestOfficerPayload>[]
          }
          upsert: {
            args: Prisma.ArrestOfficerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArrestOfficerPayload>
          }
          aggregate: {
            args: Prisma.ArrestOfficerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArrestOfficer>
          }
          groupBy: {
            args: Prisma.ArrestOfficerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArrestOfficerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArrestOfficerCountArgs<ExtArgs>
            result: $Utils.Optional<ArrestOfficerCountAggregateOutputType> | number
          }
        }
      }
      EvalRequest: {
        payload: Prisma.$EvalRequestPayload<ExtArgs>
        fields: Prisma.EvalRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EvalRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvalRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EvalRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvalRequestPayload>
          }
          findFirst: {
            args: Prisma.EvalRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvalRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EvalRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvalRequestPayload>
          }
          findMany: {
            args: Prisma.EvalRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvalRequestPayload>[]
          }
          create: {
            args: Prisma.EvalRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvalRequestPayload>
          }
          createMany: {
            args: Prisma.EvalRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EvalRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvalRequestPayload>[]
          }
          delete: {
            args: Prisma.EvalRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvalRequestPayload>
          }
          update: {
            args: Prisma.EvalRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvalRequestPayload>
          }
          deleteMany: {
            args: Prisma.EvalRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EvalRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EvalRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvalRequestPayload>[]
          }
          upsert: {
            args: Prisma.EvalRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvalRequestPayload>
          }
          aggregate: {
            args: Prisma.EvalRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvalRequest>
          }
          groupBy: {
            args: Prisma.EvalRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<EvalRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.EvalRequestCountArgs<ExtArgs>
            result: $Utils.Optional<EvalRequestCountAggregateOutputType> | number
          }
        }
      }
      CompletedEval: {
        payload: Prisma.$CompletedEvalPayload<ExtArgs>
        fields: Prisma.CompletedEvalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompletedEvalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedEvalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompletedEvalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedEvalPayload>
          }
          findFirst: {
            args: Prisma.CompletedEvalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedEvalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompletedEvalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedEvalPayload>
          }
          findMany: {
            args: Prisma.CompletedEvalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedEvalPayload>[]
          }
          create: {
            args: Prisma.CompletedEvalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedEvalPayload>
          }
          createMany: {
            args: Prisma.CompletedEvalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompletedEvalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedEvalPayload>[]
          }
          delete: {
            args: Prisma.CompletedEvalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedEvalPayload>
          }
          update: {
            args: Prisma.CompletedEvalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedEvalPayload>
          }
          deleteMany: {
            args: Prisma.CompletedEvalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompletedEvalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompletedEvalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedEvalPayload>[]
          }
          upsert: {
            args: Prisma.CompletedEvalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedEvalPayload>
          }
          aggregate: {
            args: Prisma.CompletedEvalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompletedEval>
          }
          groupBy: {
            args: Prisma.CompletedEvalGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompletedEvalGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompletedEvalCountArgs<ExtArgs>
            result: $Utils.Optional<CompletedEvalCountAggregateOutputType> | number
          }
        }
      }
      EvalAnswer: {
        payload: Prisma.$EvalAnswerPayload<ExtArgs>
        fields: Prisma.EvalAnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EvalAnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvalAnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EvalAnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvalAnswerPayload>
          }
          findFirst: {
            args: Prisma.EvalAnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvalAnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EvalAnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvalAnswerPayload>
          }
          findMany: {
            args: Prisma.EvalAnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvalAnswerPayload>[]
          }
          create: {
            args: Prisma.EvalAnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvalAnswerPayload>
          }
          createMany: {
            args: Prisma.EvalAnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EvalAnswerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvalAnswerPayload>[]
          }
          delete: {
            args: Prisma.EvalAnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvalAnswerPayload>
          }
          update: {
            args: Prisma.EvalAnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvalAnswerPayload>
          }
          deleteMany: {
            args: Prisma.EvalAnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EvalAnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EvalAnswerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvalAnswerPayload>[]
          }
          upsert: {
            args: Prisma.EvalAnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvalAnswerPayload>
          }
          aggregate: {
            args: Prisma.EvalAnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvalAnswer>
          }
          groupBy: {
            args: Prisma.EvalAnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<EvalAnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.EvalAnswerCountArgs<ExtArgs>
            result: $Utils.Optional<EvalAnswerCountAggregateOutputType> | number
          }
        }
      }
      Absence: {
        payload: Prisma.$AbsencePayload<ExtArgs>
        fields: Prisma.AbsenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AbsenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AbsenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsencePayload>
          }
          findFirst: {
            args: Prisma.AbsenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AbsenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsencePayload>
          }
          findMany: {
            args: Prisma.AbsenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsencePayload>[]
          }
          create: {
            args: Prisma.AbsenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsencePayload>
          }
          createMany: {
            args: Prisma.AbsenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AbsenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsencePayload>[]
          }
          delete: {
            args: Prisma.AbsenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsencePayload>
          }
          update: {
            args: Prisma.AbsenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsencePayload>
          }
          deleteMany: {
            args: Prisma.AbsenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AbsenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AbsenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsencePayload>[]
          }
          upsert: {
            args: Prisma.AbsenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsencePayload>
          }
          aggregate: {
            args: Prisma.AbsenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAbsence>
          }
          groupBy: {
            args: Prisma.AbsenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AbsenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AbsenceCountArgs<ExtArgs>
            result: $Utils.Optional<AbsenceCountAggregateOutputType> | number
          }
        }
      }
      Promotion: {
        payload: Prisma.$PromotionPayload<ExtArgs>
        fields: Prisma.PromotionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromotionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromotionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          findFirst: {
            args: Prisma.PromotionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromotionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          findMany: {
            args: Prisma.PromotionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>[]
          }
          create: {
            args: Prisma.PromotionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          createMany: {
            args: Prisma.PromotionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PromotionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>[]
          }
          delete: {
            args: Prisma.PromotionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          update: {
            args: Prisma.PromotionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          deleteMany: {
            args: Prisma.PromotionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PromotionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PromotionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>[]
          }
          upsert: {
            args: Prisma.PromotionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          aggregate: {
            args: Prisma.PromotionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePromotion>
          }
          groupBy: {
            args: Prisma.PromotionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromotionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromotionCountArgs<ExtArgs>
            result: $Utils.Optional<PromotionCountAggregateOutputType> | number
          }
        }
      }
      Warning: {
        payload: Prisma.$WarningPayload<ExtArgs>
        fields: Prisma.WarningFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WarningFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarningPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WarningFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarningPayload>
          }
          findFirst: {
            args: Prisma.WarningFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarningPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WarningFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarningPayload>
          }
          findMany: {
            args: Prisma.WarningFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarningPayload>[]
          }
          create: {
            args: Prisma.WarningCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarningPayload>
          }
          createMany: {
            args: Prisma.WarningCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WarningCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarningPayload>[]
          }
          delete: {
            args: Prisma.WarningDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarningPayload>
          }
          update: {
            args: Prisma.WarningUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarningPayload>
          }
          deleteMany: {
            args: Prisma.WarningDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WarningUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WarningUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarningPayload>[]
          }
          upsert: {
            args: Prisma.WarningUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarningPayload>
          }
          aggregate: {
            args: Prisma.WarningAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWarning>
          }
          groupBy: {
            args: Prisma.WarningGroupByArgs<ExtArgs>
            result: $Utils.Optional<WarningGroupByOutputType>[]
          }
          count: {
            args: Prisma.WarningCountArgs<ExtArgs>
            result: $Utils.Optional<WarningCountAggregateOutputType> | number
          }
        }
      }
      Uniform: {
        payload: Prisma.$UniformPayload<ExtArgs>
        fields: Prisma.UniformFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UniformFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniformPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UniformFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniformPayload>
          }
          findFirst: {
            args: Prisma.UniformFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniformPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UniformFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniformPayload>
          }
          findMany: {
            args: Prisma.UniformFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniformPayload>[]
          }
          create: {
            args: Prisma.UniformCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniformPayload>
          }
          createMany: {
            args: Prisma.UniformCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UniformCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniformPayload>[]
          }
          delete: {
            args: Prisma.UniformDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniformPayload>
          }
          update: {
            args: Prisma.UniformUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniformPayload>
          }
          deleteMany: {
            args: Prisma.UniformDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UniformUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UniformUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniformPayload>[]
          }
          upsert: {
            args: Prisma.UniformUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniformPayload>
          }
          aggregate: {
            args: Prisma.UniformAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUniform>
          }
          groupBy: {
            args: Prisma.UniformGroupByArgs<ExtArgs>
            result: $Utils.Optional<UniformGroupByOutputType>[]
          }
          count: {
            args: Prisma.UniformCountArgs<ExtArgs>
            result: $Utils.Optional<UniformCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      StaffMember: {
        payload: Prisma.$StaffMemberPayload<ExtArgs>
        fields: Prisma.StaffMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StaffMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StaffMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffMemberPayload>
          }
          findFirst: {
            args: Prisma.StaffMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StaffMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffMemberPayload>
          }
          findMany: {
            args: Prisma.StaffMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffMemberPayload>[]
          }
          create: {
            args: Prisma.StaffMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffMemberPayload>
          }
          createMany: {
            args: Prisma.StaffMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StaffMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffMemberPayload>[]
          }
          delete: {
            args: Prisma.StaffMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffMemberPayload>
          }
          update: {
            args: Prisma.StaffMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffMemberPayload>
          }
          deleteMany: {
            args: Prisma.StaffMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StaffMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StaffMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffMemberPayload>[]
          }
          upsert: {
            args: Prisma.StaffMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffMemberPayload>
          }
          aggregate: {
            args: Prisma.StaffMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaffMember>
          }
          groupBy: {
            args: Prisma.StaffMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaffMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.StaffMemberCountArgs<ExtArgs>
            result: $Utils.Optional<StaffMemberCountAggregateOutputType> | number
          }
        }
      }
      ActivityLog: {
        payload: Prisma.$ActivityLogPayload<ExtArgs>
        fields: Prisma.ActivityLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findFirst: {
            args: Prisma.ActivityLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findMany: {
            args: Prisma.ActivityLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          create: {
            args: Prisma.ActivityLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          createMany: {
            args: Prisma.ActivityLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          delete: {
            args: Prisma.ActivityLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          update: {
            args: Prisma.ActivityLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          deleteMany: {
            args: Prisma.ActivityLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivityLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          upsert: {
            args: Prisma.ActivityLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          aggregate: {
            args: Prisma.ActivityLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivityLog>
          }
          groupBy: {
            args: Prisma.ActivityLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityLogCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    arrest?: ArrestOmit
    arrestOfficer?: ArrestOfficerOmit
    evalRequest?: EvalRequestOmit
    completedEval?: CompletedEvalOmit
    evalAnswer?: EvalAnswerOmit
    absence?: AbsenceOmit
    promotion?: PromotionOmit
    warning?: WarningOmit
    uniform?: UniformOmit
    question?: QuestionOmit
    staffMember?: StaffMemberOmit
    activityLog?: ActivityLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    activityLogs: number
    arrests: number
    promotions: number
    warnings: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activityLogs?: boolean | UserCountOutputTypeCountActivityLogsArgs
    arrests?: boolean | UserCountOutputTypeCountArrestsArgs
    promotions?: boolean | UserCountOutputTypeCountPromotionsArgs
    warnings?: boolean | UserCountOutputTypeCountWarningsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountActivityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountArrestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArrestOfficerWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPromotionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromotionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWarningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WarningWhereInput
  }


  /**
   * Count Type ArrestCountOutputType
   */

  export type ArrestCountOutputType = {
    officers: number
  }

  export type ArrestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    officers?: boolean | ArrestCountOutputTypeCountOfficersArgs
  }

  // Custom InputTypes
  /**
   * ArrestCountOutputType without action
   */
  export type ArrestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArrestCountOutputType
     */
    select?: ArrestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArrestCountOutputType without action
   */
  export type ArrestCountOutputTypeCountOfficersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArrestOfficerWhereInput
  }


  /**
   * Count Type CompletedEvalCountOutputType
   */

  export type CompletedEvalCountOutputType = {
    answers: number
  }

  export type CompletedEvalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | CompletedEvalCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * CompletedEvalCountOutputType without action
   */
  export type CompletedEvalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedEvalCountOutputType
     */
    select?: CompletedEvalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompletedEvalCountOutputType without action
   */
  export type CompletedEvalCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvalAnswerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    arrestsCount: number | null
    warningsCount: number | null
  }

  export type UserSumAggregateOutputType = {
    arrestsCount: number | null
    warningsCount: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    discordId: string | null
    username: string | null
    discordNick: string | null
    avatarUrl: string | null
    rank: $Enums.Rank | null
    isStaffMaster: boolean | null
    characterName: string | null
    passport: string | null
    badge: string | null
    status: $Enums.OfficerStatus | null
    arrestsCount: number | null
    warningsCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    discordId: string | null
    username: string | null
    discordNick: string | null
    avatarUrl: string | null
    rank: $Enums.Rank | null
    isStaffMaster: boolean | null
    characterName: string | null
    passport: string | null
    badge: string | null
    status: $Enums.OfficerStatus | null
    arrestsCount: number | null
    warningsCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    discordId: number
    username: number
    discordNick: number
    avatarUrl: number
    rank: number
    isStaffMaster: number
    characterName: number
    passport: number
    badge: number
    status: number
    arrestsCount: number
    warningsCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    arrestsCount?: true
    warningsCount?: true
  }

  export type UserSumAggregateInputType = {
    arrestsCount?: true
    warningsCount?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    discordId?: true
    username?: true
    discordNick?: true
    avatarUrl?: true
    rank?: true
    isStaffMaster?: true
    characterName?: true
    passport?: true
    badge?: true
    status?: true
    arrestsCount?: true
    warningsCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    discordId?: true
    username?: true
    discordNick?: true
    avatarUrl?: true
    rank?: true
    isStaffMaster?: true
    characterName?: true
    passport?: true
    badge?: true
    status?: true
    arrestsCount?: true
    warningsCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    discordId?: true
    username?: true
    discordNick?: true
    avatarUrl?: true
    rank?: true
    isStaffMaster?: true
    characterName?: true
    passport?: true
    badge?: true
    status?: true
    arrestsCount?: true
    warningsCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    discordId: string
    username: string
    discordNick: string | null
    avatarUrl: string | null
    rank: $Enums.Rank
    isStaffMaster: boolean
    characterName: string | null
    passport: string | null
    badge: string | null
    status: $Enums.OfficerStatus
    arrestsCount: number
    warningsCount: number
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    discordId?: boolean
    username?: boolean
    discordNick?: boolean
    avatarUrl?: boolean
    rank?: boolean
    isStaffMaster?: boolean
    characterName?: boolean
    passport?: boolean
    badge?: boolean
    status?: boolean
    arrestsCount?: boolean
    warningsCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    activityLogs?: boolean | User$activityLogsArgs<ExtArgs>
    arrests?: boolean | User$arrestsArgs<ExtArgs>
    promotions?: boolean | User$promotionsArgs<ExtArgs>
    warnings?: boolean | User$warningsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    discordId?: boolean
    username?: boolean
    discordNick?: boolean
    avatarUrl?: boolean
    rank?: boolean
    isStaffMaster?: boolean
    characterName?: boolean
    passport?: boolean
    badge?: boolean
    status?: boolean
    arrestsCount?: boolean
    warningsCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    discordId?: boolean
    username?: boolean
    discordNick?: boolean
    avatarUrl?: boolean
    rank?: boolean
    isStaffMaster?: boolean
    characterName?: boolean
    passport?: boolean
    badge?: boolean
    status?: boolean
    arrestsCount?: boolean
    warningsCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    discordId?: boolean
    username?: boolean
    discordNick?: boolean
    avatarUrl?: boolean
    rank?: boolean
    isStaffMaster?: boolean
    characterName?: boolean
    passport?: boolean
    badge?: boolean
    status?: boolean
    arrestsCount?: boolean
    warningsCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "discordId" | "username" | "discordNick" | "avatarUrl" | "rank" | "isStaffMaster" | "characterName" | "passport" | "badge" | "status" | "arrestsCount" | "warningsCount" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activityLogs?: boolean | User$activityLogsArgs<ExtArgs>
    arrests?: boolean | User$arrestsArgs<ExtArgs>
    promotions?: boolean | User$promotionsArgs<ExtArgs>
    warnings?: boolean | User$warningsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      activityLogs: Prisma.$ActivityLogPayload<ExtArgs>[]
      arrests: Prisma.$ArrestOfficerPayload<ExtArgs>[]
      promotions: Prisma.$PromotionPayload<ExtArgs>[]
      warnings: Prisma.$WarningPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      discordId: string
      /**
       * Discord global display name (OAuth `profile.username`/`global_name`).
       * Used only as a last-resort display fallback — see resolveDisplayName().
       */
      username: string
      /**
       * Guild-specific nickname ("apelido"), refreshed on every login via the
       * bot API. Preferred display name whenever it's set.
       */
      discordNick: string | null
      avatarUrl: string | null
      rank: $Enums.Rank
      isStaffMaster: boolean
      /**
       * In-game character name ("Nome IC"), collected during onboarding.
       */
      characterName: string | null
      /**
       * In-game passport/RG number. Null until onboarding is completed —
       * `passport IS NOT NULL` is how we tell "full roster member" apart from
       * "logged in, still onboarding".
       */
      passport: string | null
      badge: string | null
      status: $Enums.OfficerStatus
      arrestsCount: number
      warningsCount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    activityLogs<T extends User$activityLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$activityLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    arrests<T extends User$arrestsArgs<ExtArgs> = {}>(args?: Subset<T, User$arrestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArrestOfficerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    promotions<T extends User$promotionsArgs<ExtArgs> = {}>(args?: Subset<T, User$promotionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    warnings<T extends User$warningsArgs<ExtArgs> = {}>(args?: Subset<T, User$warningsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly discordId: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly discordNick: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly rank: FieldRef<"User", 'Rank'>
    readonly isStaffMaster: FieldRef<"User", 'Boolean'>
    readonly characterName: FieldRef<"User", 'String'>
    readonly passport: FieldRef<"User", 'String'>
    readonly badge: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'OfficerStatus'>
    readonly arrestsCount: FieldRef<"User", 'Int'>
    readonly warningsCount: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.activityLogs
   */
  export type User$activityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    cursor?: ActivityLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * User.arrests
   */
  export type User$arrestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArrestOfficer
     */
    select?: ArrestOfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArrestOfficer
     */
    omit?: ArrestOfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrestOfficerInclude<ExtArgs> | null
    where?: ArrestOfficerWhereInput
    orderBy?: ArrestOfficerOrderByWithRelationInput | ArrestOfficerOrderByWithRelationInput[]
    cursor?: ArrestOfficerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArrestOfficerScalarFieldEnum | ArrestOfficerScalarFieldEnum[]
  }

  /**
   * User.promotions
   */
  export type User$promotionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    where?: PromotionWhereInput
    orderBy?: PromotionOrderByWithRelationInput | PromotionOrderByWithRelationInput[]
    cursor?: PromotionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PromotionScalarFieldEnum | PromotionScalarFieldEnum[]
  }

  /**
   * User.warnings
   */
  export type User$warningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warning
     */
    select?: WarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warning
     */
    omit?: WarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarningInclude<ExtArgs> | null
    where?: WarningWhereInput
    orderBy?: WarningOrderByWithRelationInput | WarningOrderByWithRelationInput[]
    cursor?: WarningWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WarningScalarFieldEnum | WarningScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Arrest
   */

  export type AggregateArrest = {
    _count: ArrestCountAggregateOutputType | null
    _min: ArrestMinAggregateOutputType | null
    _max: ArrestMaxAggregateOutputType | null
  }

  export type ArrestMinAggregateOutputType = {
    id: string | null
    qru: string | null
    passport: string | null
    bo: string | null
    unidade: string | null
    outcome: $Enums.ArrestOutcome | null
    imageUrl: string | null
    date: Date | null
    createdAt: Date | null
  }

  export type ArrestMaxAggregateOutputType = {
    id: string | null
    qru: string | null
    passport: string | null
    bo: string | null
    unidade: string | null
    outcome: $Enums.ArrestOutcome | null
    imageUrl: string | null
    date: Date | null
    createdAt: Date | null
  }

  export type ArrestCountAggregateOutputType = {
    id: number
    qru: number
    passport: number
    bo: number
    unidade: number
    outcome: number
    imageUrl: number
    date: number
    createdAt: number
    _all: number
  }


  export type ArrestMinAggregateInputType = {
    id?: true
    qru?: true
    passport?: true
    bo?: true
    unidade?: true
    outcome?: true
    imageUrl?: true
    date?: true
    createdAt?: true
  }

  export type ArrestMaxAggregateInputType = {
    id?: true
    qru?: true
    passport?: true
    bo?: true
    unidade?: true
    outcome?: true
    imageUrl?: true
    date?: true
    createdAt?: true
  }

  export type ArrestCountAggregateInputType = {
    id?: true
    qru?: true
    passport?: true
    bo?: true
    unidade?: true
    outcome?: true
    imageUrl?: true
    date?: true
    createdAt?: true
    _all?: true
  }

  export type ArrestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Arrest to aggregate.
     */
    where?: ArrestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Arrests to fetch.
     */
    orderBy?: ArrestOrderByWithRelationInput | ArrestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArrestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Arrests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Arrests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Arrests
    **/
    _count?: true | ArrestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArrestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArrestMaxAggregateInputType
  }

  export type GetArrestAggregateType<T extends ArrestAggregateArgs> = {
        [P in keyof T & keyof AggregateArrest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArrest[P]>
      : GetScalarType<T[P], AggregateArrest[P]>
  }




  export type ArrestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArrestWhereInput
    orderBy?: ArrestOrderByWithAggregationInput | ArrestOrderByWithAggregationInput[]
    by: ArrestScalarFieldEnum[] | ArrestScalarFieldEnum
    having?: ArrestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArrestCountAggregateInputType | true
    _min?: ArrestMinAggregateInputType
    _max?: ArrestMaxAggregateInputType
  }

  export type ArrestGroupByOutputType = {
    id: string
    qru: string
    passport: string
    bo: string
    unidade: string
    outcome: $Enums.ArrestOutcome
    imageUrl: string | null
    date: Date
    createdAt: Date
    _count: ArrestCountAggregateOutputType | null
    _min: ArrestMinAggregateOutputType | null
    _max: ArrestMaxAggregateOutputType | null
  }

  type GetArrestGroupByPayload<T extends ArrestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArrestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArrestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArrestGroupByOutputType[P]>
            : GetScalarType<T[P], ArrestGroupByOutputType[P]>
        }
      >
    >


  export type ArrestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    qru?: boolean
    passport?: boolean
    bo?: boolean
    unidade?: boolean
    outcome?: boolean
    imageUrl?: boolean
    date?: boolean
    createdAt?: boolean
    officers?: boolean | Arrest$officersArgs<ExtArgs>
    _count?: boolean | ArrestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["arrest"]>

  export type ArrestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    qru?: boolean
    passport?: boolean
    bo?: boolean
    unidade?: boolean
    outcome?: boolean
    imageUrl?: boolean
    date?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["arrest"]>

  export type ArrestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    qru?: boolean
    passport?: boolean
    bo?: boolean
    unidade?: boolean
    outcome?: boolean
    imageUrl?: boolean
    date?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["arrest"]>

  export type ArrestSelectScalar = {
    id?: boolean
    qru?: boolean
    passport?: boolean
    bo?: boolean
    unidade?: boolean
    outcome?: boolean
    imageUrl?: boolean
    date?: boolean
    createdAt?: boolean
  }

  export type ArrestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "qru" | "passport" | "bo" | "unidade" | "outcome" | "imageUrl" | "date" | "createdAt", ExtArgs["result"]["arrest"]>
  export type ArrestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    officers?: boolean | Arrest$officersArgs<ExtArgs>
    _count?: boolean | ArrestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ArrestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ArrestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ArrestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Arrest"
    objects: {
      officers: Prisma.$ArrestOfficerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      qru: string
      passport: string
      bo: string
      unidade: string
      outcome: $Enums.ArrestOutcome
      imageUrl: string | null
      date: Date
      createdAt: Date
    }, ExtArgs["result"]["arrest"]>
    composites: {}
  }

  type ArrestGetPayload<S extends boolean | null | undefined | ArrestDefaultArgs> = $Result.GetResult<Prisma.$ArrestPayload, S>

  type ArrestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArrestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArrestCountAggregateInputType | true
    }

  export interface ArrestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Arrest'], meta: { name: 'Arrest' } }
    /**
     * Find zero or one Arrest that matches the filter.
     * @param {ArrestFindUniqueArgs} args - Arguments to find a Arrest
     * @example
     * // Get one Arrest
     * const arrest = await prisma.arrest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArrestFindUniqueArgs>(args: SelectSubset<T, ArrestFindUniqueArgs<ExtArgs>>): Prisma__ArrestClient<$Result.GetResult<Prisma.$ArrestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Arrest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArrestFindUniqueOrThrowArgs} args - Arguments to find a Arrest
     * @example
     * // Get one Arrest
     * const arrest = await prisma.arrest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArrestFindUniqueOrThrowArgs>(args: SelectSubset<T, ArrestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArrestClient<$Result.GetResult<Prisma.$ArrestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Arrest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArrestFindFirstArgs} args - Arguments to find a Arrest
     * @example
     * // Get one Arrest
     * const arrest = await prisma.arrest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArrestFindFirstArgs>(args?: SelectSubset<T, ArrestFindFirstArgs<ExtArgs>>): Prisma__ArrestClient<$Result.GetResult<Prisma.$ArrestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Arrest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArrestFindFirstOrThrowArgs} args - Arguments to find a Arrest
     * @example
     * // Get one Arrest
     * const arrest = await prisma.arrest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArrestFindFirstOrThrowArgs>(args?: SelectSubset<T, ArrestFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArrestClient<$Result.GetResult<Prisma.$ArrestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Arrests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArrestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Arrests
     * const arrests = await prisma.arrest.findMany()
     * 
     * // Get first 10 Arrests
     * const arrests = await prisma.arrest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const arrestWithIdOnly = await prisma.arrest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArrestFindManyArgs>(args?: SelectSubset<T, ArrestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArrestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Arrest.
     * @param {ArrestCreateArgs} args - Arguments to create a Arrest.
     * @example
     * // Create one Arrest
     * const Arrest = await prisma.arrest.create({
     *   data: {
     *     // ... data to create a Arrest
     *   }
     * })
     * 
     */
    create<T extends ArrestCreateArgs>(args: SelectSubset<T, ArrestCreateArgs<ExtArgs>>): Prisma__ArrestClient<$Result.GetResult<Prisma.$ArrestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Arrests.
     * @param {ArrestCreateManyArgs} args - Arguments to create many Arrests.
     * @example
     * // Create many Arrests
     * const arrest = await prisma.arrest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArrestCreateManyArgs>(args?: SelectSubset<T, ArrestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Arrests and returns the data saved in the database.
     * @param {ArrestCreateManyAndReturnArgs} args - Arguments to create many Arrests.
     * @example
     * // Create many Arrests
     * const arrest = await prisma.arrest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Arrests and only return the `id`
     * const arrestWithIdOnly = await prisma.arrest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArrestCreateManyAndReturnArgs>(args?: SelectSubset<T, ArrestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArrestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Arrest.
     * @param {ArrestDeleteArgs} args - Arguments to delete one Arrest.
     * @example
     * // Delete one Arrest
     * const Arrest = await prisma.arrest.delete({
     *   where: {
     *     // ... filter to delete one Arrest
     *   }
     * })
     * 
     */
    delete<T extends ArrestDeleteArgs>(args: SelectSubset<T, ArrestDeleteArgs<ExtArgs>>): Prisma__ArrestClient<$Result.GetResult<Prisma.$ArrestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Arrest.
     * @param {ArrestUpdateArgs} args - Arguments to update one Arrest.
     * @example
     * // Update one Arrest
     * const arrest = await prisma.arrest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArrestUpdateArgs>(args: SelectSubset<T, ArrestUpdateArgs<ExtArgs>>): Prisma__ArrestClient<$Result.GetResult<Prisma.$ArrestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Arrests.
     * @param {ArrestDeleteManyArgs} args - Arguments to filter Arrests to delete.
     * @example
     * // Delete a few Arrests
     * const { count } = await prisma.arrest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArrestDeleteManyArgs>(args?: SelectSubset<T, ArrestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Arrests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArrestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Arrests
     * const arrest = await prisma.arrest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArrestUpdateManyArgs>(args: SelectSubset<T, ArrestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Arrests and returns the data updated in the database.
     * @param {ArrestUpdateManyAndReturnArgs} args - Arguments to update many Arrests.
     * @example
     * // Update many Arrests
     * const arrest = await prisma.arrest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Arrests and only return the `id`
     * const arrestWithIdOnly = await prisma.arrest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArrestUpdateManyAndReturnArgs>(args: SelectSubset<T, ArrestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArrestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Arrest.
     * @param {ArrestUpsertArgs} args - Arguments to update or create a Arrest.
     * @example
     * // Update or create a Arrest
     * const arrest = await prisma.arrest.upsert({
     *   create: {
     *     // ... data to create a Arrest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Arrest we want to update
     *   }
     * })
     */
    upsert<T extends ArrestUpsertArgs>(args: SelectSubset<T, ArrestUpsertArgs<ExtArgs>>): Prisma__ArrestClient<$Result.GetResult<Prisma.$ArrestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Arrests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArrestCountArgs} args - Arguments to filter Arrests to count.
     * @example
     * // Count the number of Arrests
     * const count = await prisma.arrest.count({
     *   where: {
     *     // ... the filter for the Arrests we want to count
     *   }
     * })
    **/
    count<T extends ArrestCountArgs>(
      args?: Subset<T, ArrestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArrestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Arrest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArrestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArrestAggregateArgs>(args: Subset<T, ArrestAggregateArgs>): Prisma.PrismaPromise<GetArrestAggregateType<T>>

    /**
     * Group by Arrest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArrestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArrestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArrestGroupByArgs['orderBy'] }
        : { orderBy?: ArrestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArrestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArrestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Arrest model
   */
  readonly fields: ArrestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Arrest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArrestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    officers<T extends Arrest$officersArgs<ExtArgs> = {}>(args?: Subset<T, Arrest$officersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArrestOfficerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Arrest model
   */
  interface ArrestFieldRefs {
    readonly id: FieldRef<"Arrest", 'String'>
    readonly qru: FieldRef<"Arrest", 'String'>
    readonly passport: FieldRef<"Arrest", 'String'>
    readonly bo: FieldRef<"Arrest", 'String'>
    readonly unidade: FieldRef<"Arrest", 'String'>
    readonly outcome: FieldRef<"Arrest", 'ArrestOutcome'>
    readonly imageUrl: FieldRef<"Arrest", 'String'>
    readonly date: FieldRef<"Arrest", 'DateTime'>
    readonly createdAt: FieldRef<"Arrest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Arrest findUnique
   */
  export type ArrestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arrest
     */
    select?: ArrestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arrest
     */
    omit?: ArrestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrestInclude<ExtArgs> | null
    /**
     * Filter, which Arrest to fetch.
     */
    where: ArrestWhereUniqueInput
  }

  /**
   * Arrest findUniqueOrThrow
   */
  export type ArrestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arrest
     */
    select?: ArrestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arrest
     */
    omit?: ArrestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrestInclude<ExtArgs> | null
    /**
     * Filter, which Arrest to fetch.
     */
    where: ArrestWhereUniqueInput
  }

  /**
   * Arrest findFirst
   */
  export type ArrestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arrest
     */
    select?: ArrestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arrest
     */
    omit?: ArrestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrestInclude<ExtArgs> | null
    /**
     * Filter, which Arrest to fetch.
     */
    where?: ArrestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Arrests to fetch.
     */
    orderBy?: ArrestOrderByWithRelationInput | ArrestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Arrests.
     */
    cursor?: ArrestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Arrests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Arrests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Arrests.
     */
    distinct?: ArrestScalarFieldEnum | ArrestScalarFieldEnum[]
  }

  /**
   * Arrest findFirstOrThrow
   */
  export type ArrestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arrest
     */
    select?: ArrestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arrest
     */
    omit?: ArrestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrestInclude<ExtArgs> | null
    /**
     * Filter, which Arrest to fetch.
     */
    where?: ArrestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Arrests to fetch.
     */
    orderBy?: ArrestOrderByWithRelationInput | ArrestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Arrests.
     */
    cursor?: ArrestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Arrests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Arrests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Arrests.
     */
    distinct?: ArrestScalarFieldEnum | ArrestScalarFieldEnum[]
  }

  /**
   * Arrest findMany
   */
  export type ArrestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arrest
     */
    select?: ArrestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arrest
     */
    omit?: ArrestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrestInclude<ExtArgs> | null
    /**
     * Filter, which Arrests to fetch.
     */
    where?: ArrestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Arrests to fetch.
     */
    orderBy?: ArrestOrderByWithRelationInput | ArrestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Arrests.
     */
    cursor?: ArrestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Arrests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Arrests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Arrests.
     */
    distinct?: ArrestScalarFieldEnum | ArrestScalarFieldEnum[]
  }

  /**
   * Arrest create
   */
  export type ArrestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arrest
     */
    select?: ArrestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arrest
     */
    omit?: ArrestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrestInclude<ExtArgs> | null
    /**
     * The data needed to create a Arrest.
     */
    data: XOR<ArrestCreateInput, ArrestUncheckedCreateInput>
  }

  /**
   * Arrest createMany
   */
  export type ArrestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Arrests.
     */
    data: ArrestCreateManyInput | ArrestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Arrest createManyAndReturn
   */
  export type ArrestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arrest
     */
    select?: ArrestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Arrest
     */
    omit?: ArrestOmit<ExtArgs> | null
    /**
     * The data used to create many Arrests.
     */
    data: ArrestCreateManyInput | ArrestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Arrest update
   */
  export type ArrestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arrest
     */
    select?: ArrestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arrest
     */
    omit?: ArrestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrestInclude<ExtArgs> | null
    /**
     * The data needed to update a Arrest.
     */
    data: XOR<ArrestUpdateInput, ArrestUncheckedUpdateInput>
    /**
     * Choose, which Arrest to update.
     */
    where: ArrestWhereUniqueInput
  }

  /**
   * Arrest updateMany
   */
  export type ArrestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Arrests.
     */
    data: XOR<ArrestUpdateManyMutationInput, ArrestUncheckedUpdateManyInput>
    /**
     * Filter which Arrests to update
     */
    where?: ArrestWhereInput
    /**
     * Limit how many Arrests to update.
     */
    limit?: number
  }

  /**
   * Arrest updateManyAndReturn
   */
  export type ArrestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arrest
     */
    select?: ArrestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Arrest
     */
    omit?: ArrestOmit<ExtArgs> | null
    /**
     * The data used to update Arrests.
     */
    data: XOR<ArrestUpdateManyMutationInput, ArrestUncheckedUpdateManyInput>
    /**
     * Filter which Arrests to update
     */
    where?: ArrestWhereInput
    /**
     * Limit how many Arrests to update.
     */
    limit?: number
  }

  /**
   * Arrest upsert
   */
  export type ArrestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arrest
     */
    select?: ArrestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arrest
     */
    omit?: ArrestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrestInclude<ExtArgs> | null
    /**
     * The filter to search for the Arrest to update in case it exists.
     */
    where: ArrestWhereUniqueInput
    /**
     * In case the Arrest found by the `where` argument doesn't exist, create a new Arrest with this data.
     */
    create: XOR<ArrestCreateInput, ArrestUncheckedCreateInput>
    /**
     * In case the Arrest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArrestUpdateInput, ArrestUncheckedUpdateInput>
  }

  /**
   * Arrest delete
   */
  export type ArrestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arrest
     */
    select?: ArrestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arrest
     */
    omit?: ArrestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrestInclude<ExtArgs> | null
    /**
     * Filter which Arrest to delete.
     */
    where: ArrestWhereUniqueInput
  }

  /**
   * Arrest deleteMany
   */
  export type ArrestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Arrests to delete
     */
    where?: ArrestWhereInput
    /**
     * Limit how many Arrests to delete.
     */
    limit?: number
  }

  /**
   * Arrest.officers
   */
  export type Arrest$officersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArrestOfficer
     */
    select?: ArrestOfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArrestOfficer
     */
    omit?: ArrestOfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrestOfficerInclude<ExtArgs> | null
    where?: ArrestOfficerWhereInput
    orderBy?: ArrestOfficerOrderByWithRelationInput | ArrestOfficerOrderByWithRelationInput[]
    cursor?: ArrestOfficerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArrestOfficerScalarFieldEnum | ArrestOfficerScalarFieldEnum[]
  }

  /**
   * Arrest without action
   */
  export type ArrestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arrest
     */
    select?: ArrestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arrest
     */
    omit?: ArrestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrestInclude<ExtArgs> | null
  }


  /**
   * Model ArrestOfficer
   */

  export type AggregateArrestOfficer = {
    _count: ArrestOfficerCountAggregateOutputType | null
    _min: ArrestOfficerMinAggregateOutputType | null
    _max: ArrestOfficerMaxAggregateOutputType | null
  }

  export type ArrestOfficerMinAggregateOutputType = {
    arrestId: string | null
    userId: string | null
  }

  export type ArrestOfficerMaxAggregateOutputType = {
    arrestId: string | null
    userId: string | null
  }

  export type ArrestOfficerCountAggregateOutputType = {
    arrestId: number
    userId: number
    _all: number
  }


  export type ArrestOfficerMinAggregateInputType = {
    arrestId?: true
    userId?: true
  }

  export type ArrestOfficerMaxAggregateInputType = {
    arrestId?: true
    userId?: true
  }

  export type ArrestOfficerCountAggregateInputType = {
    arrestId?: true
    userId?: true
    _all?: true
  }

  export type ArrestOfficerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArrestOfficer to aggregate.
     */
    where?: ArrestOfficerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArrestOfficers to fetch.
     */
    orderBy?: ArrestOfficerOrderByWithRelationInput | ArrestOfficerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArrestOfficerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArrestOfficers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArrestOfficers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArrestOfficers
    **/
    _count?: true | ArrestOfficerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArrestOfficerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArrestOfficerMaxAggregateInputType
  }

  export type GetArrestOfficerAggregateType<T extends ArrestOfficerAggregateArgs> = {
        [P in keyof T & keyof AggregateArrestOfficer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArrestOfficer[P]>
      : GetScalarType<T[P], AggregateArrestOfficer[P]>
  }




  export type ArrestOfficerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArrestOfficerWhereInput
    orderBy?: ArrestOfficerOrderByWithAggregationInput | ArrestOfficerOrderByWithAggregationInput[]
    by: ArrestOfficerScalarFieldEnum[] | ArrestOfficerScalarFieldEnum
    having?: ArrestOfficerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArrestOfficerCountAggregateInputType | true
    _min?: ArrestOfficerMinAggregateInputType
    _max?: ArrestOfficerMaxAggregateInputType
  }

  export type ArrestOfficerGroupByOutputType = {
    arrestId: string
    userId: string
    _count: ArrestOfficerCountAggregateOutputType | null
    _min: ArrestOfficerMinAggregateOutputType | null
    _max: ArrestOfficerMaxAggregateOutputType | null
  }

  type GetArrestOfficerGroupByPayload<T extends ArrestOfficerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArrestOfficerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArrestOfficerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArrestOfficerGroupByOutputType[P]>
            : GetScalarType<T[P], ArrestOfficerGroupByOutputType[P]>
        }
      >
    >


  export type ArrestOfficerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    arrestId?: boolean
    userId?: boolean
    arrest?: boolean | ArrestDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["arrestOfficer"]>

  export type ArrestOfficerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    arrestId?: boolean
    userId?: boolean
    arrest?: boolean | ArrestDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["arrestOfficer"]>

  export type ArrestOfficerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    arrestId?: boolean
    userId?: boolean
    arrest?: boolean | ArrestDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["arrestOfficer"]>

  export type ArrestOfficerSelectScalar = {
    arrestId?: boolean
    userId?: boolean
  }

  export type ArrestOfficerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"arrestId" | "userId", ExtArgs["result"]["arrestOfficer"]>
  export type ArrestOfficerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    arrest?: boolean | ArrestDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ArrestOfficerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    arrest?: boolean | ArrestDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ArrestOfficerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    arrest?: boolean | ArrestDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ArrestOfficerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArrestOfficer"
    objects: {
      arrest: Prisma.$ArrestPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      arrestId: string
      userId: string
    }, ExtArgs["result"]["arrestOfficer"]>
    composites: {}
  }

  type ArrestOfficerGetPayload<S extends boolean | null | undefined | ArrestOfficerDefaultArgs> = $Result.GetResult<Prisma.$ArrestOfficerPayload, S>

  type ArrestOfficerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArrestOfficerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArrestOfficerCountAggregateInputType | true
    }

  export interface ArrestOfficerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArrestOfficer'], meta: { name: 'ArrestOfficer' } }
    /**
     * Find zero or one ArrestOfficer that matches the filter.
     * @param {ArrestOfficerFindUniqueArgs} args - Arguments to find a ArrestOfficer
     * @example
     * // Get one ArrestOfficer
     * const arrestOfficer = await prisma.arrestOfficer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArrestOfficerFindUniqueArgs>(args: SelectSubset<T, ArrestOfficerFindUniqueArgs<ExtArgs>>): Prisma__ArrestOfficerClient<$Result.GetResult<Prisma.$ArrestOfficerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArrestOfficer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArrestOfficerFindUniqueOrThrowArgs} args - Arguments to find a ArrestOfficer
     * @example
     * // Get one ArrestOfficer
     * const arrestOfficer = await prisma.arrestOfficer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArrestOfficerFindUniqueOrThrowArgs>(args: SelectSubset<T, ArrestOfficerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArrestOfficerClient<$Result.GetResult<Prisma.$ArrestOfficerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArrestOfficer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArrestOfficerFindFirstArgs} args - Arguments to find a ArrestOfficer
     * @example
     * // Get one ArrestOfficer
     * const arrestOfficer = await prisma.arrestOfficer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArrestOfficerFindFirstArgs>(args?: SelectSubset<T, ArrestOfficerFindFirstArgs<ExtArgs>>): Prisma__ArrestOfficerClient<$Result.GetResult<Prisma.$ArrestOfficerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArrestOfficer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArrestOfficerFindFirstOrThrowArgs} args - Arguments to find a ArrestOfficer
     * @example
     * // Get one ArrestOfficer
     * const arrestOfficer = await prisma.arrestOfficer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArrestOfficerFindFirstOrThrowArgs>(args?: SelectSubset<T, ArrestOfficerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArrestOfficerClient<$Result.GetResult<Prisma.$ArrestOfficerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArrestOfficers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArrestOfficerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArrestOfficers
     * const arrestOfficers = await prisma.arrestOfficer.findMany()
     * 
     * // Get first 10 ArrestOfficers
     * const arrestOfficers = await prisma.arrestOfficer.findMany({ take: 10 })
     * 
     * // Only select the `arrestId`
     * const arrestOfficerWithArrestIdOnly = await prisma.arrestOfficer.findMany({ select: { arrestId: true } })
     * 
     */
    findMany<T extends ArrestOfficerFindManyArgs>(args?: SelectSubset<T, ArrestOfficerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArrestOfficerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArrestOfficer.
     * @param {ArrestOfficerCreateArgs} args - Arguments to create a ArrestOfficer.
     * @example
     * // Create one ArrestOfficer
     * const ArrestOfficer = await prisma.arrestOfficer.create({
     *   data: {
     *     // ... data to create a ArrestOfficer
     *   }
     * })
     * 
     */
    create<T extends ArrestOfficerCreateArgs>(args: SelectSubset<T, ArrestOfficerCreateArgs<ExtArgs>>): Prisma__ArrestOfficerClient<$Result.GetResult<Prisma.$ArrestOfficerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArrestOfficers.
     * @param {ArrestOfficerCreateManyArgs} args - Arguments to create many ArrestOfficers.
     * @example
     * // Create many ArrestOfficers
     * const arrestOfficer = await prisma.arrestOfficer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArrestOfficerCreateManyArgs>(args?: SelectSubset<T, ArrestOfficerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ArrestOfficers and returns the data saved in the database.
     * @param {ArrestOfficerCreateManyAndReturnArgs} args - Arguments to create many ArrestOfficers.
     * @example
     * // Create many ArrestOfficers
     * const arrestOfficer = await prisma.arrestOfficer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ArrestOfficers and only return the `arrestId`
     * const arrestOfficerWithArrestIdOnly = await prisma.arrestOfficer.createManyAndReturn({
     *   select: { arrestId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArrestOfficerCreateManyAndReturnArgs>(args?: SelectSubset<T, ArrestOfficerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArrestOfficerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ArrestOfficer.
     * @param {ArrestOfficerDeleteArgs} args - Arguments to delete one ArrestOfficer.
     * @example
     * // Delete one ArrestOfficer
     * const ArrestOfficer = await prisma.arrestOfficer.delete({
     *   where: {
     *     // ... filter to delete one ArrestOfficer
     *   }
     * })
     * 
     */
    delete<T extends ArrestOfficerDeleteArgs>(args: SelectSubset<T, ArrestOfficerDeleteArgs<ExtArgs>>): Prisma__ArrestOfficerClient<$Result.GetResult<Prisma.$ArrestOfficerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArrestOfficer.
     * @param {ArrestOfficerUpdateArgs} args - Arguments to update one ArrestOfficer.
     * @example
     * // Update one ArrestOfficer
     * const arrestOfficer = await prisma.arrestOfficer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArrestOfficerUpdateArgs>(args: SelectSubset<T, ArrestOfficerUpdateArgs<ExtArgs>>): Prisma__ArrestOfficerClient<$Result.GetResult<Prisma.$ArrestOfficerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArrestOfficers.
     * @param {ArrestOfficerDeleteManyArgs} args - Arguments to filter ArrestOfficers to delete.
     * @example
     * // Delete a few ArrestOfficers
     * const { count } = await prisma.arrestOfficer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArrestOfficerDeleteManyArgs>(args?: SelectSubset<T, ArrestOfficerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArrestOfficers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArrestOfficerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArrestOfficers
     * const arrestOfficer = await prisma.arrestOfficer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArrestOfficerUpdateManyArgs>(args: SelectSubset<T, ArrestOfficerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArrestOfficers and returns the data updated in the database.
     * @param {ArrestOfficerUpdateManyAndReturnArgs} args - Arguments to update many ArrestOfficers.
     * @example
     * // Update many ArrestOfficers
     * const arrestOfficer = await prisma.arrestOfficer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ArrestOfficers and only return the `arrestId`
     * const arrestOfficerWithArrestIdOnly = await prisma.arrestOfficer.updateManyAndReturn({
     *   select: { arrestId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArrestOfficerUpdateManyAndReturnArgs>(args: SelectSubset<T, ArrestOfficerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArrestOfficerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ArrestOfficer.
     * @param {ArrestOfficerUpsertArgs} args - Arguments to update or create a ArrestOfficer.
     * @example
     * // Update or create a ArrestOfficer
     * const arrestOfficer = await prisma.arrestOfficer.upsert({
     *   create: {
     *     // ... data to create a ArrestOfficer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArrestOfficer we want to update
     *   }
     * })
     */
    upsert<T extends ArrestOfficerUpsertArgs>(args: SelectSubset<T, ArrestOfficerUpsertArgs<ExtArgs>>): Prisma__ArrestOfficerClient<$Result.GetResult<Prisma.$ArrestOfficerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArrestOfficers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArrestOfficerCountArgs} args - Arguments to filter ArrestOfficers to count.
     * @example
     * // Count the number of ArrestOfficers
     * const count = await prisma.arrestOfficer.count({
     *   where: {
     *     // ... the filter for the ArrestOfficers we want to count
     *   }
     * })
    **/
    count<T extends ArrestOfficerCountArgs>(
      args?: Subset<T, ArrestOfficerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArrestOfficerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArrestOfficer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArrestOfficerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArrestOfficerAggregateArgs>(args: Subset<T, ArrestOfficerAggregateArgs>): Prisma.PrismaPromise<GetArrestOfficerAggregateType<T>>

    /**
     * Group by ArrestOfficer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArrestOfficerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArrestOfficerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArrestOfficerGroupByArgs['orderBy'] }
        : { orderBy?: ArrestOfficerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArrestOfficerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArrestOfficerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArrestOfficer model
   */
  readonly fields: ArrestOfficerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArrestOfficer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArrestOfficerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    arrest<T extends ArrestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArrestDefaultArgs<ExtArgs>>): Prisma__ArrestClient<$Result.GetResult<Prisma.$ArrestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ArrestOfficer model
   */
  interface ArrestOfficerFieldRefs {
    readonly arrestId: FieldRef<"ArrestOfficer", 'String'>
    readonly userId: FieldRef<"ArrestOfficer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ArrestOfficer findUnique
   */
  export type ArrestOfficerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArrestOfficer
     */
    select?: ArrestOfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArrestOfficer
     */
    omit?: ArrestOfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrestOfficerInclude<ExtArgs> | null
    /**
     * Filter, which ArrestOfficer to fetch.
     */
    where: ArrestOfficerWhereUniqueInput
  }

  /**
   * ArrestOfficer findUniqueOrThrow
   */
  export type ArrestOfficerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArrestOfficer
     */
    select?: ArrestOfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArrestOfficer
     */
    omit?: ArrestOfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrestOfficerInclude<ExtArgs> | null
    /**
     * Filter, which ArrestOfficer to fetch.
     */
    where: ArrestOfficerWhereUniqueInput
  }

  /**
   * ArrestOfficer findFirst
   */
  export type ArrestOfficerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArrestOfficer
     */
    select?: ArrestOfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArrestOfficer
     */
    omit?: ArrestOfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrestOfficerInclude<ExtArgs> | null
    /**
     * Filter, which ArrestOfficer to fetch.
     */
    where?: ArrestOfficerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArrestOfficers to fetch.
     */
    orderBy?: ArrestOfficerOrderByWithRelationInput | ArrestOfficerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArrestOfficers.
     */
    cursor?: ArrestOfficerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArrestOfficers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArrestOfficers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArrestOfficers.
     */
    distinct?: ArrestOfficerScalarFieldEnum | ArrestOfficerScalarFieldEnum[]
  }

  /**
   * ArrestOfficer findFirstOrThrow
   */
  export type ArrestOfficerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArrestOfficer
     */
    select?: ArrestOfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArrestOfficer
     */
    omit?: ArrestOfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrestOfficerInclude<ExtArgs> | null
    /**
     * Filter, which ArrestOfficer to fetch.
     */
    where?: ArrestOfficerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArrestOfficers to fetch.
     */
    orderBy?: ArrestOfficerOrderByWithRelationInput | ArrestOfficerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArrestOfficers.
     */
    cursor?: ArrestOfficerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArrestOfficers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArrestOfficers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArrestOfficers.
     */
    distinct?: ArrestOfficerScalarFieldEnum | ArrestOfficerScalarFieldEnum[]
  }

  /**
   * ArrestOfficer findMany
   */
  export type ArrestOfficerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArrestOfficer
     */
    select?: ArrestOfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArrestOfficer
     */
    omit?: ArrestOfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrestOfficerInclude<ExtArgs> | null
    /**
     * Filter, which ArrestOfficers to fetch.
     */
    where?: ArrestOfficerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArrestOfficers to fetch.
     */
    orderBy?: ArrestOfficerOrderByWithRelationInput | ArrestOfficerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArrestOfficers.
     */
    cursor?: ArrestOfficerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArrestOfficers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArrestOfficers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArrestOfficers.
     */
    distinct?: ArrestOfficerScalarFieldEnum | ArrestOfficerScalarFieldEnum[]
  }

  /**
   * ArrestOfficer create
   */
  export type ArrestOfficerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArrestOfficer
     */
    select?: ArrestOfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArrestOfficer
     */
    omit?: ArrestOfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrestOfficerInclude<ExtArgs> | null
    /**
     * The data needed to create a ArrestOfficer.
     */
    data: XOR<ArrestOfficerCreateInput, ArrestOfficerUncheckedCreateInput>
  }

  /**
   * ArrestOfficer createMany
   */
  export type ArrestOfficerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArrestOfficers.
     */
    data: ArrestOfficerCreateManyInput | ArrestOfficerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArrestOfficer createManyAndReturn
   */
  export type ArrestOfficerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArrestOfficer
     */
    select?: ArrestOfficerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArrestOfficer
     */
    omit?: ArrestOfficerOmit<ExtArgs> | null
    /**
     * The data used to create many ArrestOfficers.
     */
    data: ArrestOfficerCreateManyInput | ArrestOfficerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrestOfficerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArrestOfficer update
   */
  export type ArrestOfficerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArrestOfficer
     */
    select?: ArrestOfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArrestOfficer
     */
    omit?: ArrestOfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrestOfficerInclude<ExtArgs> | null
    /**
     * The data needed to update a ArrestOfficer.
     */
    data: XOR<ArrestOfficerUpdateInput, ArrestOfficerUncheckedUpdateInput>
    /**
     * Choose, which ArrestOfficer to update.
     */
    where: ArrestOfficerWhereUniqueInput
  }

  /**
   * ArrestOfficer updateMany
   */
  export type ArrestOfficerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArrestOfficers.
     */
    data: XOR<ArrestOfficerUpdateManyMutationInput, ArrestOfficerUncheckedUpdateManyInput>
    /**
     * Filter which ArrestOfficers to update
     */
    where?: ArrestOfficerWhereInput
    /**
     * Limit how many ArrestOfficers to update.
     */
    limit?: number
  }

  /**
   * ArrestOfficer updateManyAndReturn
   */
  export type ArrestOfficerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArrestOfficer
     */
    select?: ArrestOfficerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArrestOfficer
     */
    omit?: ArrestOfficerOmit<ExtArgs> | null
    /**
     * The data used to update ArrestOfficers.
     */
    data: XOR<ArrestOfficerUpdateManyMutationInput, ArrestOfficerUncheckedUpdateManyInput>
    /**
     * Filter which ArrestOfficers to update
     */
    where?: ArrestOfficerWhereInput
    /**
     * Limit how many ArrestOfficers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrestOfficerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArrestOfficer upsert
   */
  export type ArrestOfficerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArrestOfficer
     */
    select?: ArrestOfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArrestOfficer
     */
    omit?: ArrestOfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrestOfficerInclude<ExtArgs> | null
    /**
     * The filter to search for the ArrestOfficer to update in case it exists.
     */
    where: ArrestOfficerWhereUniqueInput
    /**
     * In case the ArrestOfficer found by the `where` argument doesn't exist, create a new ArrestOfficer with this data.
     */
    create: XOR<ArrestOfficerCreateInput, ArrestOfficerUncheckedCreateInput>
    /**
     * In case the ArrestOfficer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArrestOfficerUpdateInput, ArrestOfficerUncheckedUpdateInput>
  }

  /**
   * ArrestOfficer delete
   */
  export type ArrestOfficerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArrestOfficer
     */
    select?: ArrestOfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArrestOfficer
     */
    omit?: ArrestOfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrestOfficerInclude<ExtArgs> | null
    /**
     * Filter which ArrestOfficer to delete.
     */
    where: ArrestOfficerWhereUniqueInput
  }

  /**
   * ArrestOfficer deleteMany
   */
  export type ArrestOfficerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArrestOfficers to delete
     */
    where?: ArrestOfficerWhereInput
    /**
     * Limit how many ArrestOfficers to delete.
     */
    limit?: number
  }

  /**
   * ArrestOfficer without action
   */
  export type ArrestOfficerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArrestOfficer
     */
    select?: ArrestOfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArrestOfficer
     */
    omit?: ArrestOfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArrestOfficerInclude<ExtArgs> | null
  }


  /**
   * Model EvalRequest
   */

  export type AggregateEvalRequest = {
    _count: EvalRequestCountAggregateOutputType | null
    _min: EvalRequestMinAggregateOutputType | null
    _max: EvalRequestMaxAggregateOutputType | null
  }

  export type EvalRequestMinAggregateOutputType = {
    id: string | null
    studentName: string | null
    studentPassport: string | null
    startTime: string | null
    endTime: string | null
    date: string | null
    dept: string | null
    evaluatorTarget: string | null
    status: $Enums.EvalRequestStatus | null
    createdAt: Date | null
  }

  export type EvalRequestMaxAggregateOutputType = {
    id: string | null
    studentName: string | null
    studentPassport: string | null
    startTime: string | null
    endTime: string | null
    date: string | null
    dept: string | null
    evaluatorTarget: string | null
    status: $Enums.EvalRequestStatus | null
    createdAt: Date | null
  }

  export type EvalRequestCountAggregateOutputType = {
    id: number
    studentName: number
    studentPassport: number
    startTime: number
    endTime: number
    date: number
    dept: number
    evaluatorTarget: number
    status: number
    createdAt: number
    _all: number
  }


  export type EvalRequestMinAggregateInputType = {
    id?: true
    studentName?: true
    studentPassport?: true
    startTime?: true
    endTime?: true
    date?: true
    dept?: true
    evaluatorTarget?: true
    status?: true
    createdAt?: true
  }

  export type EvalRequestMaxAggregateInputType = {
    id?: true
    studentName?: true
    studentPassport?: true
    startTime?: true
    endTime?: true
    date?: true
    dept?: true
    evaluatorTarget?: true
    status?: true
    createdAt?: true
  }

  export type EvalRequestCountAggregateInputType = {
    id?: true
    studentName?: true
    studentPassport?: true
    startTime?: true
    endTime?: true
    date?: true
    dept?: true
    evaluatorTarget?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type EvalRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EvalRequest to aggregate.
     */
    where?: EvalRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EvalRequests to fetch.
     */
    orderBy?: EvalRequestOrderByWithRelationInput | EvalRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EvalRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EvalRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EvalRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EvalRequests
    **/
    _count?: true | EvalRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EvalRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EvalRequestMaxAggregateInputType
  }

  export type GetEvalRequestAggregateType<T extends EvalRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateEvalRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvalRequest[P]>
      : GetScalarType<T[P], AggregateEvalRequest[P]>
  }




  export type EvalRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvalRequestWhereInput
    orderBy?: EvalRequestOrderByWithAggregationInput | EvalRequestOrderByWithAggregationInput[]
    by: EvalRequestScalarFieldEnum[] | EvalRequestScalarFieldEnum
    having?: EvalRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EvalRequestCountAggregateInputType | true
    _min?: EvalRequestMinAggregateInputType
    _max?: EvalRequestMaxAggregateInputType
  }

  export type EvalRequestGroupByOutputType = {
    id: string
    studentName: string
    studentPassport: string
    startTime: string
    endTime: string
    date: string
    dept: string
    evaluatorTarget: string
    status: $Enums.EvalRequestStatus
    createdAt: Date
    _count: EvalRequestCountAggregateOutputType | null
    _min: EvalRequestMinAggregateOutputType | null
    _max: EvalRequestMaxAggregateOutputType | null
  }

  type GetEvalRequestGroupByPayload<T extends EvalRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EvalRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EvalRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EvalRequestGroupByOutputType[P]>
            : GetScalarType<T[P], EvalRequestGroupByOutputType[P]>
        }
      >
    >


  export type EvalRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentName?: boolean
    studentPassport?: boolean
    startTime?: boolean
    endTime?: boolean
    date?: boolean
    dept?: boolean
    evaluatorTarget?: boolean
    status?: boolean
    createdAt?: boolean
    completedEval?: boolean | EvalRequest$completedEvalArgs<ExtArgs>
  }, ExtArgs["result"]["evalRequest"]>

  export type EvalRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentName?: boolean
    studentPassport?: boolean
    startTime?: boolean
    endTime?: boolean
    date?: boolean
    dept?: boolean
    evaluatorTarget?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["evalRequest"]>

  export type EvalRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentName?: boolean
    studentPassport?: boolean
    startTime?: boolean
    endTime?: boolean
    date?: boolean
    dept?: boolean
    evaluatorTarget?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["evalRequest"]>

  export type EvalRequestSelectScalar = {
    id?: boolean
    studentName?: boolean
    studentPassport?: boolean
    startTime?: boolean
    endTime?: boolean
    date?: boolean
    dept?: boolean
    evaluatorTarget?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type EvalRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentName" | "studentPassport" | "startTime" | "endTime" | "date" | "dept" | "evaluatorTarget" | "status" | "createdAt", ExtArgs["result"]["evalRequest"]>
  export type EvalRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    completedEval?: boolean | EvalRequest$completedEvalArgs<ExtArgs>
  }
  export type EvalRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EvalRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EvalRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EvalRequest"
    objects: {
      completedEval: Prisma.$CompletedEvalPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentName: string
      studentPassport: string
      startTime: string
      endTime: string
      date: string
      dept: string
      evaluatorTarget: string
      status: $Enums.EvalRequestStatus
      createdAt: Date
    }, ExtArgs["result"]["evalRequest"]>
    composites: {}
  }

  type EvalRequestGetPayload<S extends boolean | null | undefined | EvalRequestDefaultArgs> = $Result.GetResult<Prisma.$EvalRequestPayload, S>

  type EvalRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EvalRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EvalRequestCountAggregateInputType | true
    }

  export interface EvalRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EvalRequest'], meta: { name: 'EvalRequest' } }
    /**
     * Find zero or one EvalRequest that matches the filter.
     * @param {EvalRequestFindUniqueArgs} args - Arguments to find a EvalRequest
     * @example
     * // Get one EvalRequest
     * const evalRequest = await prisma.evalRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EvalRequestFindUniqueArgs>(args: SelectSubset<T, EvalRequestFindUniqueArgs<ExtArgs>>): Prisma__EvalRequestClient<$Result.GetResult<Prisma.$EvalRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EvalRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EvalRequestFindUniqueOrThrowArgs} args - Arguments to find a EvalRequest
     * @example
     * // Get one EvalRequest
     * const evalRequest = await prisma.evalRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EvalRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, EvalRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EvalRequestClient<$Result.GetResult<Prisma.$EvalRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EvalRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvalRequestFindFirstArgs} args - Arguments to find a EvalRequest
     * @example
     * // Get one EvalRequest
     * const evalRequest = await prisma.evalRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EvalRequestFindFirstArgs>(args?: SelectSubset<T, EvalRequestFindFirstArgs<ExtArgs>>): Prisma__EvalRequestClient<$Result.GetResult<Prisma.$EvalRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EvalRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvalRequestFindFirstOrThrowArgs} args - Arguments to find a EvalRequest
     * @example
     * // Get one EvalRequest
     * const evalRequest = await prisma.evalRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EvalRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, EvalRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__EvalRequestClient<$Result.GetResult<Prisma.$EvalRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EvalRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvalRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EvalRequests
     * const evalRequests = await prisma.evalRequest.findMany()
     * 
     * // Get first 10 EvalRequests
     * const evalRequests = await prisma.evalRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const evalRequestWithIdOnly = await prisma.evalRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EvalRequestFindManyArgs>(args?: SelectSubset<T, EvalRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvalRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EvalRequest.
     * @param {EvalRequestCreateArgs} args - Arguments to create a EvalRequest.
     * @example
     * // Create one EvalRequest
     * const EvalRequest = await prisma.evalRequest.create({
     *   data: {
     *     // ... data to create a EvalRequest
     *   }
     * })
     * 
     */
    create<T extends EvalRequestCreateArgs>(args: SelectSubset<T, EvalRequestCreateArgs<ExtArgs>>): Prisma__EvalRequestClient<$Result.GetResult<Prisma.$EvalRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EvalRequests.
     * @param {EvalRequestCreateManyArgs} args - Arguments to create many EvalRequests.
     * @example
     * // Create many EvalRequests
     * const evalRequest = await prisma.evalRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EvalRequestCreateManyArgs>(args?: SelectSubset<T, EvalRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EvalRequests and returns the data saved in the database.
     * @param {EvalRequestCreateManyAndReturnArgs} args - Arguments to create many EvalRequests.
     * @example
     * // Create many EvalRequests
     * const evalRequest = await prisma.evalRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EvalRequests and only return the `id`
     * const evalRequestWithIdOnly = await prisma.evalRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EvalRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, EvalRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvalRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EvalRequest.
     * @param {EvalRequestDeleteArgs} args - Arguments to delete one EvalRequest.
     * @example
     * // Delete one EvalRequest
     * const EvalRequest = await prisma.evalRequest.delete({
     *   where: {
     *     // ... filter to delete one EvalRequest
     *   }
     * })
     * 
     */
    delete<T extends EvalRequestDeleteArgs>(args: SelectSubset<T, EvalRequestDeleteArgs<ExtArgs>>): Prisma__EvalRequestClient<$Result.GetResult<Prisma.$EvalRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EvalRequest.
     * @param {EvalRequestUpdateArgs} args - Arguments to update one EvalRequest.
     * @example
     * // Update one EvalRequest
     * const evalRequest = await prisma.evalRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EvalRequestUpdateArgs>(args: SelectSubset<T, EvalRequestUpdateArgs<ExtArgs>>): Prisma__EvalRequestClient<$Result.GetResult<Prisma.$EvalRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EvalRequests.
     * @param {EvalRequestDeleteManyArgs} args - Arguments to filter EvalRequests to delete.
     * @example
     * // Delete a few EvalRequests
     * const { count } = await prisma.evalRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EvalRequestDeleteManyArgs>(args?: SelectSubset<T, EvalRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EvalRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvalRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EvalRequests
     * const evalRequest = await prisma.evalRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EvalRequestUpdateManyArgs>(args: SelectSubset<T, EvalRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EvalRequests and returns the data updated in the database.
     * @param {EvalRequestUpdateManyAndReturnArgs} args - Arguments to update many EvalRequests.
     * @example
     * // Update many EvalRequests
     * const evalRequest = await prisma.evalRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EvalRequests and only return the `id`
     * const evalRequestWithIdOnly = await prisma.evalRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EvalRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, EvalRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvalRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EvalRequest.
     * @param {EvalRequestUpsertArgs} args - Arguments to update or create a EvalRequest.
     * @example
     * // Update or create a EvalRequest
     * const evalRequest = await prisma.evalRequest.upsert({
     *   create: {
     *     // ... data to create a EvalRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EvalRequest we want to update
     *   }
     * })
     */
    upsert<T extends EvalRequestUpsertArgs>(args: SelectSubset<T, EvalRequestUpsertArgs<ExtArgs>>): Prisma__EvalRequestClient<$Result.GetResult<Prisma.$EvalRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EvalRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvalRequestCountArgs} args - Arguments to filter EvalRequests to count.
     * @example
     * // Count the number of EvalRequests
     * const count = await prisma.evalRequest.count({
     *   where: {
     *     // ... the filter for the EvalRequests we want to count
     *   }
     * })
    **/
    count<T extends EvalRequestCountArgs>(
      args?: Subset<T, EvalRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EvalRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EvalRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvalRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EvalRequestAggregateArgs>(args: Subset<T, EvalRequestAggregateArgs>): Prisma.PrismaPromise<GetEvalRequestAggregateType<T>>

    /**
     * Group by EvalRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvalRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EvalRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EvalRequestGroupByArgs['orderBy'] }
        : { orderBy?: EvalRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EvalRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvalRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EvalRequest model
   */
  readonly fields: EvalRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EvalRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EvalRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    completedEval<T extends EvalRequest$completedEvalArgs<ExtArgs> = {}>(args?: Subset<T, EvalRequest$completedEvalArgs<ExtArgs>>): Prisma__CompletedEvalClient<$Result.GetResult<Prisma.$CompletedEvalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EvalRequest model
   */
  interface EvalRequestFieldRefs {
    readonly id: FieldRef<"EvalRequest", 'String'>
    readonly studentName: FieldRef<"EvalRequest", 'String'>
    readonly studentPassport: FieldRef<"EvalRequest", 'String'>
    readonly startTime: FieldRef<"EvalRequest", 'String'>
    readonly endTime: FieldRef<"EvalRequest", 'String'>
    readonly date: FieldRef<"EvalRequest", 'String'>
    readonly dept: FieldRef<"EvalRequest", 'String'>
    readonly evaluatorTarget: FieldRef<"EvalRequest", 'String'>
    readonly status: FieldRef<"EvalRequest", 'EvalRequestStatus'>
    readonly createdAt: FieldRef<"EvalRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EvalRequest findUnique
   */
  export type EvalRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvalRequest
     */
    select?: EvalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvalRequest
     */
    omit?: EvalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvalRequestInclude<ExtArgs> | null
    /**
     * Filter, which EvalRequest to fetch.
     */
    where: EvalRequestWhereUniqueInput
  }

  /**
   * EvalRequest findUniqueOrThrow
   */
  export type EvalRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvalRequest
     */
    select?: EvalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvalRequest
     */
    omit?: EvalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvalRequestInclude<ExtArgs> | null
    /**
     * Filter, which EvalRequest to fetch.
     */
    where: EvalRequestWhereUniqueInput
  }

  /**
   * EvalRequest findFirst
   */
  export type EvalRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvalRequest
     */
    select?: EvalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvalRequest
     */
    omit?: EvalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvalRequestInclude<ExtArgs> | null
    /**
     * Filter, which EvalRequest to fetch.
     */
    where?: EvalRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EvalRequests to fetch.
     */
    orderBy?: EvalRequestOrderByWithRelationInput | EvalRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EvalRequests.
     */
    cursor?: EvalRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EvalRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EvalRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EvalRequests.
     */
    distinct?: EvalRequestScalarFieldEnum | EvalRequestScalarFieldEnum[]
  }

  /**
   * EvalRequest findFirstOrThrow
   */
  export type EvalRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvalRequest
     */
    select?: EvalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvalRequest
     */
    omit?: EvalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvalRequestInclude<ExtArgs> | null
    /**
     * Filter, which EvalRequest to fetch.
     */
    where?: EvalRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EvalRequests to fetch.
     */
    orderBy?: EvalRequestOrderByWithRelationInput | EvalRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EvalRequests.
     */
    cursor?: EvalRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EvalRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EvalRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EvalRequests.
     */
    distinct?: EvalRequestScalarFieldEnum | EvalRequestScalarFieldEnum[]
  }

  /**
   * EvalRequest findMany
   */
  export type EvalRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvalRequest
     */
    select?: EvalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvalRequest
     */
    omit?: EvalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvalRequestInclude<ExtArgs> | null
    /**
     * Filter, which EvalRequests to fetch.
     */
    where?: EvalRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EvalRequests to fetch.
     */
    orderBy?: EvalRequestOrderByWithRelationInput | EvalRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EvalRequests.
     */
    cursor?: EvalRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EvalRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EvalRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EvalRequests.
     */
    distinct?: EvalRequestScalarFieldEnum | EvalRequestScalarFieldEnum[]
  }

  /**
   * EvalRequest create
   */
  export type EvalRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvalRequest
     */
    select?: EvalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvalRequest
     */
    omit?: EvalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvalRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a EvalRequest.
     */
    data: XOR<EvalRequestCreateInput, EvalRequestUncheckedCreateInput>
  }

  /**
   * EvalRequest createMany
   */
  export type EvalRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EvalRequests.
     */
    data: EvalRequestCreateManyInput | EvalRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EvalRequest createManyAndReturn
   */
  export type EvalRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvalRequest
     */
    select?: EvalRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EvalRequest
     */
    omit?: EvalRequestOmit<ExtArgs> | null
    /**
     * The data used to create many EvalRequests.
     */
    data: EvalRequestCreateManyInput | EvalRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EvalRequest update
   */
  export type EvalRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvalRequest
     */
    select?: EvalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvalRequest
     */
    omit?: EvalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvalRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a EvalRequest.
     */
    data: XOR<EvalRequestUpdateInput, EvalRequestUncheckedUpdateInput>
    /**
     * Choose, which EvalRequest to update.
     */
    where: EvalRequestWhereUniqueInput
  }

  /**
   * EvalRequest updateMany
   */
  export type EvalRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EvalRequests.
     */
    data: XOR<EvalRequestUpdateManyMutationInput, EvalRequestUncheckedUpdateManyInput>
    /**
     * Filter which EvalRequests to update
     */
    where?: EvalRequestWhereInput
    /**
     * Limit how many EvalRequests to update.
     */
    limit?: number
  }

  /**
   * EvalRequest updateManyAndReturn
   */
  export type EvalRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvalRequest
     */
    select?: EvalRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EvalRequest
     */
    omit?: EvalRequestOmit<ExtArgs> | null
    /**
     * The data used to update EvalRequests.
     */
    data: XOR<EvalRequestUpdateManyMutationInput, EvalRequestUncheckedUpdateManyInput>
    /**
     * Filter which EvalRequests to update
     */
    where?: EvalRequestWhereInput
    /**
     * Limit how many EvalRequests to update.
     */
    limit?: number
  }

  /**
   * EvalRequest upsert
   */
  export type EvalRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvalRequest
     */
    select?: EvalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvalRequest
     */
    omit?: EvalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvalRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the EvalRequest to update in case it exists.
     */
    where: EvalRequestWhereUniqueInput
    /**
     * In case the EvalRequest found by the `where` argument doesn't exist, create a new EvalRequest with this data.
     */
    create: XOR<EvalRequestCreateInput, EvalRequestUncheckedCreateInput>
    /**
     * In case the EvalRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EvalRequestUpdateInput, EvalRequestUncheckedUpdateInput>
  }

  /**
   * EvalRequest delete
   */
  export type EvalRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvalRequest
     */
    select?: EvalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvalRequest
     */
    omit?: EvalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvalRequestInclude<ExtArgs> | null
    /**
     * Filter which EvalRequest to delete.
     */
    where: EvalRequestWhereUniqueInput
  }

  /**
   * EvalRequest deleteMany
   */
  export type EvalRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EvalRequests to delete
     */
    where?: EvalRequestWhereInput
    /**
     * Limit how many EvalRequests to delete.
     */
    limit?: number
  }

  /**
   * EvalRequest.completedEval
   */
  export type EvalRequest$completedEvalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedEval
     */
    select?: CompletedEvalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedEval
     */
    omit?: CompletedEvalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedEvalInclude<ExtArgs> | null
    where?: CompletedEvalWhereInput
  }

  /**
   * EvalRequest without action
   */
  export type EvalRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvalRequest
     */
    select?: EvalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvalRequest
     */
    omit?: EvalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvalRequestInclude<ExtArgs> | null
  }


  /**
   * Model CompletedEval
   */

  export type AggregateCompletedEval = {
    _count: CompletedEvalCountAggregateOutputType | null
    _min: CompletedEvalMinAggregateOutputType | null
    _max: CompletedEvalMaxAggregateOutputType | null
  }

  export type CompletedEvalMinAggregateOutputType = {
    id: string | null
    evalRequestId: string | null
    studentName: string | null
    studentPassport: string | null
    evaluator: string | null
    averageScore: string | null
    date: string | null
    createdAt: Date | null
  }

  export type CompletedEvalMaxAggregateOutputType = {
    id: string | null
    evalRequestId: string | null
    studentName: string | null
    studentPassport: string | null
    evaluator: string | null
    averageScore: string | null
    date: string | null
    createdAt: Date | null
  }

  export type CompletedEvalCountAggregateOutputType = {
    id: number
    evalRequestId: number
    studentName: number
    studentPassport: number
    evaluator: number
    averageScore: number
    date: number
    createdAt: number
    _all: number
  }


  export type CompletedEvalMinAggregateInputType = {
    id?: true
    evalRequestId?: true
    studentName?: true
    studentPassport?: true
    evaluator?: true
    averageScore?: true
    date?: true
    createdAt?: true
  }

  export type CompletedEvalMaxAggregateInputType = {
    id?: true
    evalRequestId?: true
    studentName?: true
    studentPassport?: true
    evaluator?: true
    averageScore?: true
    date?: true
    createdAt?: true
  }

  export type CompletedEvalCountAggregateInputType = {
    id?: true
    evalRequestId?: true
    studentName?: true
    studentPassport?: true
    evaluator?: true
    averageScore?: true
    date?: true
    createdAt?: true
    _all?: true
  }

  export type CompletedEvalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompletedEval to aggregate.
     */
    where?: CompletedEvalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedEvals to fetch.
     */
    orderBy?: CompletedEvalOrderByWithRelationInput | CompletedEvalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompletedEvalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedEvals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedEvals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompletedEvals
    **/
    _count?: true | CompletedEvalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompletedEvalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompletedEvalMaxAggregateInputType
  }

  export type GetCompletedEvalAggregateType<T extends CompletedEvalAggregateArgs> = {
        [P in keyof T & keyof AggregateCompletedEval]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompletedEval[P]>
      : GetScalarType<T[P], AggregateCompletedEval[P]>
  }




  export type CompletedEvalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompletedEvalWhereInput
    orderBy?: CompletedEvalOrderByWithAggregationInput | CompletedEvalOrderByWithAggregationInput[]
    by: CompletedEvalScalarFieldEnum[] | CompletedEvalScalarFieldEnum
    having?: CompletedEvalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompletedEvalCountAggregateInputType | true
    _min?: CompletedEvalMinAggregateInputType
    _max?: CompletedEvalMaxAggregateInputType
  }

  export type CompletedEvalGroupByOutputType = {
    id: string
    evalRequestId: string
    studentName: string
    studentPassport: string
    evaluator: string
    averageScore: string
    date: string
    createdAt: Date
    _count: CompletedEvalCountAggregateOutputType | null
    _min: CompletedEvalMinAggregateOutputType | null
    _max: CompletedEvalMaxAggregateOutputType | null
  }

  type GetCompletedEvalGroupByPayload<T extends CompletedEvalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompletedEvalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompletedEvalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompletedEvalGroupByOutputType[P]>
            : GetScalarType<T[P], CompletedEvalGroupByOutputType[P]>
        }
      >
    >


  export type CompletedEvalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    evalRequestId?: boolean
    studentName?: boolean
    studentPassport?: boolean
    evaluator?: boolean
    averageScore?: boolean
    date?: boolean
    createdAt?: boolean
    evalRequest?: boolean | EvalRequestDefaultArgs<ExtArgs>
    answers?: boolean | CompletedEval$answersArgs<ExtArgs>
    _count?: boolean | CompletedEvalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["completedEval"]>

  export type CompletedEvalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    evalRequestId?: boolean
    studentName?: boolean
    studentPassport?: boolean
    evaluator?: boolean
    averageScore?: boolean
    date?: boolean
    createdAt?: boolean
    evalRequest?: boolean | EvalRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["completedEval"]>

  export type CompletedEvalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    evalRequestId?: boolean
    studentName?: boolean
    studentPassport?: boolean
    evaluator?: boolean
    averageScore?: boolean
    date?: boolean
    createdAt?: boolean
    evalRequest?: boolean | EvalRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["completedEval"]>

  export type CompletedEvalSelectScalar = {
    id?: boolean
    evalRequestId?: boolean
    studentName?: boolean
    studentPassport?: boolean
    evaluator?: boolean
    averageScore?: boolean
    date?: boolean
    createdAt?: boolean
  }

  export type CompletedEvalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "evalRequestId" | "studentName" | "studentPassport" | "evaluator" | "averageScore" | "date" | "createdAt", ExtArgs["result"]["completedEval"]>
  export type CompletedEvalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evalRequest?: boolean | EvalRequestDefaultArgs<ExtArgs>
    answers?: boolean | CompletedEval$answersArgs<ExtArgs>
    _count?: boolean | CompletedEvalCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompletedEvalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evalRequest?: boolean | EvalRequestDefaultArgs<ExtArgs>
  }
  export type CompletedEvalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evalRequest?: boolean | EvalRequestDefaultArgs<ExtArgs>
  }

  export type $CompletedEvalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompletedEval"
    objects: {
      evalRequest: Prisma.$EvalRequestPayload<ExtArgs>
      answers: Prisma.$EvalAnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      evalRequestId: string
      studentName: string
      studentPassport: string
      evaluator: string
      averageScore: string
      date: string
      createdAt: Date
    }, ExtArgs["result"]["completedEval"]>
    composites: {}
  }

  type CompletedEvalGetPayload<S extends boolean | null | undefined | CompletedEvalDefaultArgs> = $Result.GetResult<Prisma.$CompletedEvalPayload, S>

  type CompletedEvalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompletedEvalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompletedEvalCountAggregateInputType | true
    }

  export interface CompletedEvalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompletedEval'], meta: { name: 'CompletedEval' } }
    /**
     * Find zero or one CompletedEval that matches the filter.
     * @param {CompletedEvalFindUniqueArgs} args - Arguments to find a CompletedEval
     * @example
     * // Get one CompletedEval
     * const completedEval = await prisma.completedEval.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompletedEvalFindUniqueArgs>(args: SelectSubset<T, CompletedEvalFindUniqueArgs<ExtArgs>>): Prisma__CompletedEvalClient<$Result.GetResult<Prisma.$CompletedEvalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompletedEval that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompletedEvalFindUniqueOrThrowArgs} args - Arguments to find a CompletedEval
     * @example
     * // Get one CompletedEval
     * const completedEval = await prisma.completedEval.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompletedEvalFindUniqueOrThrowArgs>(args: SelectSubset<T, CompletedEvalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompletedEvalClient<$Result.GetResult<Prisma.$CompletedEvalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompletedEval that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedEvalFindFirstArgs} args - Arguments to find a CompletedEval
     * @example
     * // Get one CompletedEval
     * const completedEval = await prisma.completedEval.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompletedEvalFindFirstArgs>(args?: SelectSubset<T, CompletedEvalFindFirstArgs<ExtArgs>>): Prisma__CompletedEvalClient<$Result.GetResult<Prisma.$CompletedEvalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompletedEval that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedEvalFindFirstOrThrowArgs} args - Arguments to find a CompletedEval
     * @example
     * // Get one CompletedEval
     * const completedEval = await prisma.completedEval.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompletedEvalFindFirstOrThrowArgs>(args?: SelectSubset<T, CompletedEvalFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompletedEvalClient<$Result.GetResult<Prisma.$CompletedEvalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompletedEvals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedEvalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompletedEvals
     * const completedEvals = await prisma.completedEval.findMany()
     * 
     * // Get first 10 CompletedEvals
     * const completedEvals = await prisma.completedEval.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const completedEvalWithIdOnly = await prisma.completedEval.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompletedEvalFindManyArgs>(args?: SelectSubset<T, CompletedEvalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedEvalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompletedEval.
     * @param {CompletedEvalCreateArgs} args - Arguments to create a CompletedEval.
     * @example
     * // Create one CompletedEval
     * const CompletedEval = await prisma.completedEval.create({
     *   data: {
     *     // ... data to create a CompletedEval
     *   }
     * })
     * 
     */
    create<T extends CompletedEvalCreateArgs>(args: SelectSubset<T, CompletedEvalCreateArgs<ExtArgs>>): Prisma__CompletedEvalClient<$Result.GetResult<Prisma.$CompletedEvalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompletedEvals.
     * @param {CompletedEvalCreateManyArgs} args - Arguments to create many CompletedEvals.
     * @example
     * // Create many CompletedEvals
     * const completedEval = await prisma.completedEval.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompletedEvalCreateManyArgs>(args?: SelectSubset<T, CompletedEvalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompletedEvals and returns the data saved in the database.
     * @param {CompletedEvalCreateManyAndReturnArgs} args - Arguments to create many CompletedEvals.
     * @example
     * // Create many CompletedEvals
     * const completedEval = await prisma.completedEval.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompletedEvals and only return the `id`
     * const completedEvalWithIdOnly = await prisma.completedEval.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompletedEvalCreateManyAndReturnArgs>(args?: SelectSubset<T, CompletedEvalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedEvalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CompletedEval.
     * @param {CompletedEvalDeleteArgs} args - Arguments to delete one CompletedEval.
     * @example
     * // Delete one CompletedEval
     * const CompletedEval = await prisma.completedEval.delete({
     *   where: {
     *     // ... filter to delete one CompletedEval
     *   }
     * })
     * 
     */
    delete<T extends CompletedEvalDeleteArgs>(args: SelectSubset<T, CompletedEvalDeleteArgs<ExtArgs>>): Prisma__CompletedEvalClient<$Result.GetResult<Prisma.$CompletedEvalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompletedEval.
     * @param {CompletedEvalUpdateArgs} args - Arguments to update one CompletedEval.
     * @example
     * // Update one CompletedEval
     * const completedEval = await prisma.completedEval.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompletedEvalUpdateArgs>(args: SelectSubset<T, CompletedEvalUpdateArgs<ExtArgs>>): Prisma__CompletedEvalClient<$Result.GetResult<Prisma.$CompletedEvalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompletedEvals.
     * @param {CompletedEvalDeleteManyArgs} args - Arguments to filter CompletedEvals to delete.
     * @example
     * // Delete a few CompletedEvals
     * const { count } = await prisma.completedEval.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompletedEvalDeleteManyArgs>(args?: SelectSubset<T, CompletedEvalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompletedEvals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedEvalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompletedEvals
     * const completedEval = await prisma.completedEval.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompletedEvalUpdateManyArgs>(args: SelectSubset<T, CompletedEvalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompletedEvals and returns the data updated in the database.
     * @param {CompletedEvalUpdateManyAndReturnArgs} args - Arguments to update many CompletedEvals.
     * @example
     * // Update many CompletedEvals
     * const completedEval = await prisma.completedEval.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CompletedEvals and only return the `id`
     * const completedEvalWithIdOnly = await prisma.completedEval.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompletedEvalUpdateManyAndReturnArgs>(args: SelectSubset<T, CompletedEvalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedEvalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CompletedEval.
     * @param {CompletedEvalUpsertArgs} args - Arguments to update or create a CompletedEval.
     * @example
     * // Update or create a CompletedEval
     * const completedEval = await prisma.completedEval.upsert({
     *   create: {
     *     // ... data to create a CompletedEval
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompletedEval we want to update
     *   }
     * })
     */
    upsert<T extends CompletedEvalUpsertArgs>(args: SelectSubset<T, CompletedEvalUpsertArgs<ExtArgs>>): Prisma__CompletedEvalClient<$Result.GetResult<Prisma.$CompletedEvalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompletedEvals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedEvalCountArgs} args - Arguments to filter CompletedEvals to count.
     * @example
     * // Count the number of CompletedEvals
     * const count = await prisma.completedEval.count({
     *   where: {
     *     // ... the filter for the CompletedEvals we want to count
     *   }
     * })
    **/
    count<T extends CompletedEvalCountArgs>(
      args?: Subset<T, CompletedEvalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompletedEvalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompletedEval.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedEvalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompletedEvalAggregateArgs>(args: Subset<T, CompletedEvalAggregateArgs>): Prisma.PrismaPromise<GetCompletedEvalAggregateType<T>>

    /**
     * Group by CompletedEval.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedEvalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompletedEvalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompletedEvalGroupByArgs['orderBy'] }
        : { orderBy?: CompletedEvalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompletedEvalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompletedEvalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompletedEval model
   */
  readonly fields: CompletedEvalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompletedEval.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompletedEvalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    evalRequest<T extends EvalRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EvalRequestDefaultArgs<ExtArgs>>): Prisma__EvalRequestClient<$Result.GetResult<Prisma.$EvalRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    answers<T extends CompletedEval$answersArgs<ExtArgs> = {}>(args?: Subset<T, CompletedEval$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvalAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CompletedEval model
   */
  interface CompletedEvalFieldRefs {
    readonly id: FieldRef<"CompletedEval", 'String'>
    readonly evalRequestId: FieldRef<"CompletedEval", 'String'>
    readonly studentName: FieldRef<"CompletedEval", 'String'>
    readonly studentPassport: FieldRef<"CompletedEval", 'String'>
    readonly evaluator: FieldRef<"CompletedEval", 'String'>
    readonly averageScore: FieldRef<"CompletedEval", 'String'>
    readonly date: FieldRef<"CompletedEval", 'String'>
    readonly createdAt: FieldRef<"CompletedEval", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CompletedEval findUnique
   */
  export type CompletedEvalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedEval
     */
    select?: CompletedEvalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedEval
     */
    omit?: CompletedEvalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedEvalInclude<ExtArgs> | null
    /**
     * Filter, which CompletedEval to fetch.
     */
    where: CompletedEvalWhereUniqueInput
  }

  /**
   * CompletedEval findUniqueOrThrow
   */
  export type CompletedEvalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedEval
     */
    select?: CompletedEvalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedEval
     */
    omit?: CompletedEvalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedEvalInclude<ExtArgs> | null
    /**
     * Filter, which CompletedEval to fetch.
     */
    where: CompletedEvalWhereUniqueInput
  }

  /**
   * CompletedEval findFirst
   */
  export type CompletedEvalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedEval
     */
    select?: CompletedEvalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedEval
     */
    omit?: CompletedEvalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedEvalInclude<ExtArgs> | null
    /**
     * Filter, which CompletedEval to fetch.
     */
    where?: CompletedEvalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedEvals to fetch.
     */
    orderBy?: CompletedEvalOrderByWithRelationInput | CompletedEvalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompletedEvals.
     */
    cursor?: CompletedEvalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedEvals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedEvals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompletedEvals.
     */
    distinct?: CompletedEvalScalarFieldEnum | CompletedEvalScalarFieldEnum[]
  }

  /**
   * CompletedEval findFirstOrThrow
   */
  export type CompletedEvalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedEval
     */
    select?: CompletedEvalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedEval
     */
    omit?: CompletedEvalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedEvalInclude<ExtArgs> | null
    /**
     * Filter, which CompletedEval to fetch.
     */
    where?: CompletedEvalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedEvals to fetch.
     */
    orderBy?: CompletedEvalOrderByWithRelationInput | CompletedEvalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompletedEvals.
     */
    cursor?: CompletedEvalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedEvals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedEvals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompletedEvals.
     */
    distinct?: CompletedEvalScalarFieldEnum | CompletedEvalScalarFieldEnum[]
  }

  /**
   * CompletedEval findMany
   */
  export type CompletedEvalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedEval
     */
    select?: CompletedEvalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedEval
     */
    omit?: CompletedEvalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedEvalInclude<ExtArgs> | null
    /**
     * Filter, which CompletedEvals to fetch.
     */
    where?: CompletedEvalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedEvals to fetch.
     */
    orderBy?: CompletedEvalOrderByWithRelationInput | CompletedEvalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompletedEvals.
     */
    cursor?: CompletedEvalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedEvals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedEvals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompletedEvals.
     */
    distinct?: CompletedEvalScalarFieldEnum | CompletedEvalScalarFieldEnum[]
  }

  /**
   * CompletedEval create
   */
  export type CompletedEvalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedEval
     */
    select?: CompletedEvalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedEval
     */
    omit?: CompletedEvalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedEvalInclude<ExtArgs> | null
    /**
     * The data needed to create a CompletedEval.
     */
    data: XOR<CompletedEvalCreateInput, CompletedEvalUncheckedCreateInput>
  }

  /**
   * CompletedEval createMany
   */
  export type CompletedEvalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompletedEvals.
     */
    data: CompletedEvalCreateManyInput | CompletedEvalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompletedEval createManyAndReturn
   */
  export type CompletedEvalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedEval
     */
    select?: CompletedEvalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedEval
     */
    omit?: CompletedEvalOmit<ExtArgs> | null
    /**
     * The data used to create many CompletedEvals.
     */
    data: CompletedEvalCreateManyInput | CompletedEvalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedEvalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompletedEval update
   */
  export type CompletedEvalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedEval
     */
    select?: CompletedEvalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedEval
     */
    omit?: CompletedEvalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedEvalInclude<ExtArgs> | null
    /**
     * The data needed to update a CompletedEval.
     */
    data: XOR<CompletedEvalUpdateInput, CompletedEvalUncheckedUpdateInput>
    /**
     * Choose, which CompletedEval to update.
     */
    where: CompletedEvalWhereUniqueInput
  }

  /**
   * CompletedEval updateMany
   */
  export type CompletedEvalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompletedEvals.
     */
    data: XOR<CompletedEvalUpdateManyMutationInput, CompletedEvalUncheckedUpdateManyInput>
    /**
     * Filter which CompletedEvals to update
     */
    where?: CompletedEvalWhereInput
    /**
     * Limit how many CompletedEvals to update.
     */
    limit?: number
  }

  /**
   * CompletedEval updateManyAndReturn
   */
  export type CompletedEvalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedEval
     */
    select?: CompletedEvalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedEval
     */
    omit?: CompletedEvalOmit<ExtArgs> | null
    /**
     * The data used to update CompletedEvals.
     */
    data: XOR<CompletedEvalUpdateManyMutationInput, CompletedEvalUncheckedUpdateManyInput>
    /**
     * Filter which CompletedEvals to update
     */
    where?: CompletedEvalWhereInput
    /**
     * Limit how many CompletedEvals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedEvalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompletedEval upsert
   */
  export type CompletedEvalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedEval
     */
    select?: CompletedEvalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedEval
     */
    omit?: CompletedEvalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedEvalInclude<ExtArgs> | null
    /**
     * The filter to search for the CompletedEval to update in case it exists.
     */
    where: CompletedEvalWhereUniqueInput
    /**
     * In case the CompletedEval found by the `where` argument doesn't exist, create a new CompletedEval with this data.
     */
    create: XOR<CompletedEvalCreateInput, CompletedEvalUncheckedCreateInput>
    /**
     * In case the CompletedEval was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompletedEvalUpdateInput, CompletedEvalUncheckedUpdateInput>
  }

  /**
   * CompletedEval delete
   */
  export type CompletedEvalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedEval
     */
    select?: CompletedEvalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedEval
     */
    omit?: CompletedEvalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedEvalInclude<ExtArgs> | null
    /**
     * Filter which CompletedEval to delete.
     */
    where: CompletedEvalWhereUniqueInput
  }

  /**
   * CompletedEval deleteMany
   */
  export type CompletedEvalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompletedEvals to delete
     */
    where?: CompletedEvalWhereInput
    /**
     * Limit how many CompletedEvals to delete.
     */
    limit?: number
  }

  /**
   * CompletedEval.answers
   */
  export type CompletedEval$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvalAnswer
     */
    select?: EvalAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvalAnswer
     */
    omit?: EvalAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvalAnswerInclude<ExtArgs> | null
    where?: EvalAnswerWhereInput
    orderBy?: EvalAnswerOrderByWithRelationInput | EvalAnswerOrderByWithRelationInput[]
    cursor?: EvalAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EvalAnswerScalarFieldEnum | EvalAnswerScalarFieldEnum[]
  }

  /**
   * CompletedEval without action
   */
  export type CompletedEvalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedEval
     */
    select?: CompletedEvalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedEval
     */
    omit?: CompletedEvalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedEvalInclude<ExtArgs> | null
  }


  /**
   * Model EvalAnswer
   */

  export type AggregateEvalAnswer = {
    _count: EvalAnswerCountAggregateOutputType | null
    _avg: EvalAnswerAvgAggregateOutputType | null
    _sum: EvalAnswerSumAggregateOutputType | null
    _min: EvalAnswerMinAggregateOutputType | null
    _max: EvalAnswerMaxAggregateOutputType | null
  }

  export type EvalAnswerAvgAggregateOutputType = {
    score: number | null
  }

  export type EvalAnswerSumAggregateOutputType = {
    score: number | null
  }

  export type EvalAnswerMinAggregateOutputType = {
    id: string | null
    completedEvalId: string | null
    questionText: string | null
    score: number | null
    comment: string | null
  }

  export type EvalAnswerMaxAggregateOutputType = {
    id: string | null
    completedEvalId: string | null
    questionText: string | null
    score: number | null
    comment: string | null
  }

  export type EvalAnswerCountAggregateOutputType = {
    id: number
    completedEvalId: number
    questionText: number
    score: number
    comment: number
    _all: number
  }


  export type EvalAnswerAvgAggregateInputType = {
    score?: true
  }

  export type EvalAnswerSumAggregateInputType = {
    score?: true
  }

  export type EvalAnswerMinAggregateInputType = {
    id?: true
    completedEvalId?: true
    questionText?: true
    score?: true
    comment?: true
  }

  export type EvalAnswerMaxAggregateInputType = {
    id?: true
    completedEvalId?: true
    questionText?: true
    score?: true
    comment?: true
  }

  export type EvalAnswerCountAggregateInputType = {
    id?: true
    completedEvalId?: true
    questionText?: true
    score?: true
    comment?: true
    _all?: true
  }

  export type EvalAnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EvalAnswer to aggregate.
     */
    where?: EvalAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EvalAnswers to fetch.
     */
    orderBy?: EvalAnswerOrderByWithRelationInput | EvalAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EvalAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EvalAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EvalAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EvalAnswers
    **/
    _count?: true | EvalAnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EvalAnswerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EvalAnswerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EvalAnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EvalAnswerMaxAggregateInputType
  }

  export type GetEvalAnswerAggregateType<T extends EvalAnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateEvalAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvalAnswer[P]>
      : GetScalarType<T[P], AggregateEvalAnswer[P]>
  }




  export type EvalAnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvalAnswerWhereInput
    orderBy?: EvalAnswerOrderByWithAggregationInput | EvalAnswerOrderByWithAggregationInput[]
    by: EvalAnswerScalarFieldEnum[] | EvalAnswerScalarFieldEnum
    having?: EvalAnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EvalAnswerCountAggregateInputType | true
    _avg?: EvalAnswerAvgAggregateInputType
    _sum?: EvalAnswerSumAggregateInputType
    _min?: EvalAnswerMinAggregateInputType
    _max?: EvalAnswerMaxAggregateInputType
  }

  export type EvalAnswerGroupByOutputType = {
    id: string
    completedEvalId: string
    questionText: string
    score: number
    comment: string | null
    _count: EvalAnswerCountAggregateOutputType | null
    _avg: EvalAnswerAvgAggregateOutputType | null
    _sum: EvalAnswerSumAggregateOutputType | null
    _min: EvalAnswerMinAggregateOutputType | null
    _max: EvalAnswerMaxAggregateOutputType | null
  }

  type GetEvalAnswerGroupByPayload<T extends EvalAnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EvalAnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EvalAnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EvalAnswerGroupByOutputType[P]>
            : GetScalarType<T[P], EvalAnswerGroupByOutputType[P]>
        }
      >
    >


  export type EvalAnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    completedEvalId?: boolean
    questionText?: boolean
    score?: boolean
    comment?: boolean
    completedEval?: boolean | CompletedEvalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evalAnswer"]>

  export type EvalAnswerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    completedEvalId?: boolean
    questionText?: boolean
    score?: boolean
    comment?: boolean
    completedEval?: boolean | CompletedEvalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evalAnswer"]>

  export type EvalAnswerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    completedEvalId?: boolean
    questionText?: boolean
    score?: boolean
    comment?: boolean
    completedEval?: boolean | CompletedEvalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evalAnswer"]>

  export type EvalAnswerSelectScalar = {
    id?: boolean
    completedEvalId?: boolean
    questionText?: boolean
    score?: boolean
    comment?: boolean
  }

  export type EvalAnswerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "completedEvalId" | "questionText" | "score" | "comment", ExtArgs["result"]["evalAnswer"]>
  export type EvalAnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    completedEval?: boolean | CompletedEvalDefaultArgs<ExtArgs>
  }
  export type EvalAnswerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    completedEval?: boolean | CompletedEvalDefaultArgs<ExtArgs>
  }
  export type EvalAnswerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    completedEval?: boolean | CompletedEvalDefaultArgs<ExtArgs>
  }

  export type $EvalAnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EvalAnswer"
    objects: {
      completedEval: Prisma.$CompletedEvalPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      completedEvalId: string
      questionText: string
      score: number
      comment: string | null
    }, ExtArgs["result"]["evalAnswer"]>
    composites: {}
  }

  type EvalAnswerGetPayload<S extends boolean | null | undefined | EvalAnswerDefaultArgs> = $Result.GetResult<Prisma.$EvalAnswerPayload, S>

  type EvalAnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EvalAnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EvalAnswerCountAggregateInputType | true
    }

  export interface EvalAnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EvalAnswer'], meta: { name: 'EvalAnswer' } }
    /**
     * Find zero or one EvalAnswer that matches the filter.
     * @param {EvalAnswerFindUniqueArgs} args - Arguments to find a EvalAnswer
     * @example
     * // Get one EvalAnswer
     * const evalAnswer = await prisma.evalAnswer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EvalAnswerFindUniqueArgs>(args: SelectSubset<T, EvalAnswerFindUniqueArgs<ExtArgs>>): Prisma__EvalAnswerClient<$Result.GetResult<Prisma.$EvalAnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EvalAnswer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EvalAnswerFindUniqueOrThrowArgs} args - Arguments to find a EvalAnswer
     * @example
     * // Get one EvalAnswer
     * const evalAnswer = await prisma.evalAnswer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EvalAnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, EvalAnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EvalAnswerClient<$Result.GetResult<Prisma.$EvalAnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EvalAnswer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvalAnswerFindFirstArgs} args - Arguments to find a EvalAnswer
     * @example
     * // Get one EvalAnswer
     * const evalAnswer = await prisma.evalAnswer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EvalAnswerFindFirstArgs>(args?: SelectSubset<T, EvalAnswerFindFirstArgs<ExtArgs>>): Prisma__EvalAnswerClient<$Result.GetResult<Prisma.$EvalAnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EvalAnswer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvalAnswerFindFirstOrThrowArgs} args - Arguments to find a EvalAnswer
     * @example
     * // Get one EvalAnswer
     * const evalAnswer = await prisma.evalAnswer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EvalAnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, EvalAnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__EvalAnswerClient<$Result.GetResult<Prisma.$EvalAnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EvalAnswers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvalAnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EvalAnswers
     * const evalAnswers = await prisma.evalAnswer.findMany()
     * 
     * // Get first 10 EvalAnswers
     * const evalAnswers = await prisma.evalAnswer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const evalAnswerWithIdOnly = await prisma.evalAnswer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EvalAnswerFindManyArgs>(args?: SelectSubset<T, EvalAnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvalAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EvalAnswer.
     * @param {EvalAnswerCreateArgs} args - Arguments to create a EvalAnswer.
     * @example
     * // Create one EvalAnswer
     * const EvalAnswer = await prisma.evalAnswer.create({
     *   data: {
     *     // ... data to create a EvalAnswer
     *   }
     * })
     * 
     */
    create<T extends EvalAnswerCreateArgs>(args: SelectSubset<T, EvalAnswerCreateArgs<ExtArgs>>): Prisma__EvalAnswerClient<$Result.GetResult<Prisma.$EvalAnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EvalAnswers.
     * @param {EvalAnswerCreateManyArgs} args - Arguments to create many EvalAnswers.
     * @example
     * // Create many EvalAnswers
     * const evalAnswer = await prisma.evalAnswer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EvalAnswerCreateManyArgs>(args?: SelectSubset<T, EvalAnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EvalAnswers and returns the data saved in the database.
     * @param {EvalAnswerCreateManyAndReturnArgs} args - Arguments to create many EvalAnswers.
     * @example
     * // Create many EvalAnswers
     * const evalAnswer = await prisma.evalAnswer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EvalAnswers and only return the `id`
     * const evalAnswerWithIdOnly = await prisma.evalAnswer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EvalAnswerCreateManyAndReturnArgs>(args?: SelectSubset<T, EvalAnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvalAnswerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EvalAnswer.
     * @param {EvalAnswerDeleteArgs} args - Arguments to delete one EvalAnswer.
     * @example
     * // Delete one EvalAnswer
     * const EvalAnswer = await prisma.evalAnswer.delete({
     *   where: {
     *     // ... filter to delete one EvalAnswer
     *   }
     * })
     * 
     */
    delete<T extends EvalAnswerDeleteArgs>(args: SelectSubset<T, EvalAnswerDeleteArgs<ExtArgs>>): Prisma__EvalAnswerClient<$Result.GetResult<Prisma.$EvalAnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EvalAnswer.
     * @param {EvalAnswerUpdateArgs} args - Arguments to update one EvalAnswer.
     * @example
     * // Update one EvalAnswer
     * const evalAnswer = await prisma.evalAnswer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EvalAnswerUpdateArgs>(args: SelectSubset<T, EvalAnswerUpdateArgs<ExtArgs>>): Prisma__EvalAnswerClient<$Result.GetResult<Prisma.$EvalAnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EvalAnswers.
     * @param {EvalAnswerDeleteManyArgs} args - Arguments to filter EvalAnswers to delete.
     * @example
     * // Delete a few EvalAnswers
     * const { count } = await prisma.evalAnswer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EvalAnswerDeleteManyArgs>(args?: SelectSubset<T, EvalAnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EvalAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvalAnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EvalAnswers
     * const evalAnswer = await prisma.evalAnswer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EvalAnswerUpdateManyArgs>(args: SelectSubset<T, EvalAnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EvalAnswers and returns the data updated in the database.
     * @param {EvalAnswerUpdateManyAndReturnArgs} args - Arguments to update many EvalAnswers.
     * @example
     * // Update many EvalAnswers
     * const evalAnswer = await prisma.evalAnswer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EvalAnswers and only return the `id`
     * const evalAnswerWithIdOnly = await prisma.evalAnswer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EvalAnswerUpdateManyAndReturnArgs>(args: SelectSubset<T, EvalAnswerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvalAnswerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EvalAnswer.
     * @param {EvalAnswerUpsertArgs} args - Arguments to update or create a EvalAnswer.
     * @example
     * // Update or create a EvalAnswer
     * const evalAnswer = await prisma.evalAnswer.upsert({
     *   create: {
     *     // ... data to create a EvalAnswer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EvalAnswer we want to update
     *   }
     * })
     */
    upsert<T extends EvalAnswerUpsertArgs>(args: SelectSubset<T, EvalAnswerUpsertArgs<ExtArgs>>): Prisma__EvalAnswerClient<$Result.GetResult<Prisma.$EvalAnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EvalAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvalAnswerCountArgs} args - Arguments to filter EvalAnswers to count.
     * @example
     * // Count the number of EvalAnswers
     * const count = await prisma.evalAnswer.count({
     *   where: {
     *     // ... the filter for the EvalAnswers we want to count
     *   }
     * })
    **/
    count<T extends EvalAnswerCountArgs>(
      args?: Subset<T, EvalAnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EvalAnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EvalAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvalAnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EvalAnswerAggregateArgs>(args: Subset<T, EvalAnswerAggregateArgs>): Prisma.PrismaPromise<GetEvalAnswerAggregateType<T>>

    /**
     * Group by EvalAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvalAnswerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EvalAnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EvalAnswerGroupByArgs['orderBy'] }
        : { orderBy?: EvalAnswerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EvalAnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvalAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EvalAnswer model
   */
  readonly fields: EvalAnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EvalAnswer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EvalAnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    completedEval<T extends CompletedEvalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompletedEvalDefaultArgs<ExtArgs>>): Prisma__CompletedEvalClient<$Result.GetResult<Prisma.$CompletedEvalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EvalAnswer model
   */
  interface EvalAnswerFieldRefs {
    readonly id: FieldRef<"EvalAnswer", 'String'>
    readonly completedEvalId: FieldRef<"EvalAnswer", 'String'>
    readonly questionText: FieldRef<"EvalAnswer", 'String'>
    readonly score: FieldRef<"EvalAnswer", 'Int'>
    readonly comment: FieldRef<"EvalAnswer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EvalAnswer findUnique
   */
  export type EvalAnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvalAnswer
     */
    select?: EvalAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvalAnswer
     */
    omit?: EvalAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvalAnswerInclude<ExtArgs> | null
    /**
     * Filter, which EvalAnswer to fetch.
     */
    where: EvalAnswerWhereUniqueInput
  }

  /**
   * EvalAnswer findUniqueOrThrow
   */
  export type EvalAnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvalAnswer
     */
    select?: EvalAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvalAnswer
     */
    omit?: EvalAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvalAnswerInclude<ExtArgs> | null
    /**
     * Filter, which EvalAnswer to fetch.
     */
    where: EvalAnswerWhereUniqueInput
  }

  /**
   * EvalAnswer findFirst
   */
  export type EvalAnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvalAnswer
     */
    select?: EvalAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvalAnswer
     */
    omit?: EvalAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvalAnswerInclude<ExtArgs> | null
    /**
     * Filter, which EvalAnswer to fetch.
     */
    where?: EvalAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EvalAnswers to fetch.
     */
    orderBy?: EvalAnswerOrderByWithRelationInput | EvalAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EvalAnswers.
     */
    cursor?: EvalAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EvalAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EvalAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EvalAnswers.
     */
    distinct?: EvalAnswerScalarFieldEnum | EvalAnswerScalarFieldEnum[]
  }

  /**
   * EvalAnswer findFirstOrThrow
   */
  export type EvalAnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvalAnswer
     */
    select?: EvalAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvalAnswer
     */
    omit?: EvalAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvalAnswerInclude<ExtArgs> | null
    /**
     * Filter, which EvalAnswer to fetch.
     */
    where?: EvalAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EvalAnswers to fetch.
     */
    orderBy?: EvalAnswerOrderByWithRelationInput | EvalAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EvalAnswers.
     */
    cursor?: EvalAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EvalAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EvalAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EvalAnswers.
     */
    distinct?: EvalAnswerScalarFieldEnum | EvalAnswerScalarFieldEnum[]
  }

  /**
   * EvalAnswer findMany
   */
  export type EvalAnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvalAnswer
     */
    select?: EvalAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvalAnswer
     */
    omit?: EvalAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvalAnswerInclude<ExtArgs> | null
    /**
     * Filter, which EvalAnswers to fetch.
     */
    where?: EvalAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EvalAnswers to fetch.
     */
    orderBy?: EvalAnswerOrderByWithRelationInput | EvalAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EvalAnswers.
     */
    cursor?: EvalAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EvalAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EvalAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EvalAnswers.
     */
    distinct?: EvalAnswerScalarFieldEnum | EvalAnswerScalarFieldEnum[]
  }

  /**
   * EvalAnswer create
   */
  export type EvalAnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvalAnswer
     */
    select?: EvalAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvalAnswer
     */
    omit?: EvalAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvalAnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a EvalAnswer.
     */
    data: XOR<EvalAnswerCreateInput, EvalAnswerUncheckedCreateInput>
  }

  /**
   * EvalAnswer createMany
   */
  export type EvalAnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EvalAnswers.
     */
    data: EvalAnswerCreateManyInput | EvalAnswerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EvalAnswer createManyAndReturn
   */
  export type EvalAnswerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvalAnswer
     */
    select?: EvalAnswerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EvalAnswer
     */
    omit?: EvalAnswerOmit<ExtArgs> | null
    /**
     * The data used to create many EvalAnswers.
     */
    data: EvalAnswerCreateManyInput | EvalAnswerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvalAnswerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EvalAnswer update
   */
  export type EvalAnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvalAnswer
     */
    select?: EvalAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvalAnswer
     */
    omit?: EvalAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvalAnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a EvalAnswer.
     */
    data: XOR<EvalAnswerUpdateInput, EvalAnswerUncheckedUpdateInput>
    /**
     * Choose, which EvalAnswer to update.
     */
    where: EvalAnswerWhereUniqueInput
  }

  /**
   * EvalAnswer updateMany
   */
  export type EvalAnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EvalAnswers.
     */
    data: XOR<EvalAnswerUpdateManyMutationInput, EvalAnswerUncheckedUpdateManyInput>
    /**
     * Filter which EvalAnswers to update
     */
    where?: EvalAnswerWhereInput
    /**
     * Limit how many EvalAnswers to update.
     */
    limit?: number
  }

  /**
   * EvalAnswer updateManyAndReturn
   */
  export type EvalAnswerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvalAnswer
     */
    select?: EvalAnswerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EvalAnswer
     */
    omit?: EvalAnswerOmit<ExtArgs> | null
    /**
     * The data used to update EvalAnswers.
     */
    data: XOR<EvalAnswerUpdateManyMutationInput, EvalAnswerUncheckedUpdateManyInput>
    /**
     * Filter which EvalAnswers to update
     */
    where?: EvalAnswerWhereInput
    /**
     * Limit how many EvalAnswers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvalAnswerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EvalAnswer upsert
   */
  export type EvalAnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvalAnswer
     */
    select?: EvalAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvalAnswer
     */
    omit?: EvalAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvalAnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the EvalAnswer to update in case it exists.
     */
    where: EvalAnswerWhereUniqueInput
    /**
     * In case the EvalAnswer found by the `where` argument doesn't exist, create a new EvalAnswer with this data.
     */
    create: XOR<EvalAnswerCreateInput, EvalAnswerUncheckedCreateInput>
    /**
     * In case the EvalAnswer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EvalAnswerUpdateInput, EvalAnswerUncheckedUpdateInput>
  }

  /**
   * EvalAnswer delete
   */
  export type EvalAnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvalAnswer
     */
    select?: EvalAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvalAnswer
     */
    omit?: EvalAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvalAnswerInclude<ExtArgs> | null
    /**
     * Filter which EvalAnswer to delete.
     */
    where: EvalAnswerWhereUniqueInput
  }

  /**
   * EvalAnswer deleteMany
   */
  export type EvalAnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EvalAnswers to delete
     */
    where?: EvalAnswerWhereInput
    /**
     * Limit how many EvalAnswers to delete.
     */
    limit?: number
  }

  /**
   * EvalAnswer without action
   */
  export type EvalAnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvalAnswer
     */
    select?: EvalAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvalAnswer
     */
    omit?: EvalAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvalAnswerInclude<ExtArgs> | null
  }


  /**
   * Model Absence
   */

  export type AggregateAbsence = {
    _count: AbsenceCountAggregateOutputType | null
    _min: AbsenceMinAggregateOutputType | null
    _max: AbsenceMaxAggregateOutputType | null
  }

  export type AbsenceMinAggregateOutputType = {
    id: string | null
    officer: string | null
    passport: string | null
    startDate: string | null
    endDate: string | null
    reason: string | null
    status: $Enums.RequestStatus | null
    createdAt: Date | null
  }

  export type AbsenceMaxAggregateOutputType = {
    id: string | null
    officer: string | null
    passport: string | null
    startDate: string | null
    endDate: string | null
    reason: string | null
    status: $Enums.RequestStatus | null
    createdAt: Date | null
  }

  export type AbsenceCountAggregateOutputType = {
    id: number
    officer: number
    passport: number
    startDate: number
    endDate: number
    reason: number
    status: number
    createdAt: number
    _all: number
  }


  export type AbsenceMinAggregateInputType = {
    id?: true
    officer?: true
    passport?: true
    startDate?: true
    endDate?: true
    reason?: true
    status?: true
    createdAt?: true
  }

  export type AbsenceMaxAggregateInputType = {
    id?: true
    officer?: true
    passport?: true
    startDate?: true
    endDate?: true
    reason?: true
    status?: true
    createdAt?: true
  }

  export type AbsenceCountAggregateInputType = {
    id?: true
    officer?: true
    passport?: true
    startDate?: true
    endDate?: true
    reason?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type AbsenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Absence to aggregate.
     */
    where?: AbsenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Absences to fetch.
     */
    orderBy?: AbsenceOrderByWithRelationInput | AbsenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AbsenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Absences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Absences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Absences
    **/
    _count?: true | AbsenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AbsenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AbsenceMaxAggregateInputType
  }

  export type GetAbsenceAggregateType<T extends AbsenceAggregateArgs> = {
        [P in keyof T & keyof AggregateAbsence]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAbsence[P]>
      : GetScalarType<T[P], AggregateAbsence[P]>
  }




  export type AbsenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AbsenceWhereInput
    orderBy?: AbsenceOrderByWithAggregationInput | AbsenceOrderByWithAggregationInput[]
    by: AbsenceScalarFieldEnum[] | AbsenceScalarFieldEnum
    having?: AbsenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AbsenceCountAggregateInputType | true
    _min?: AbsenceMinAggregateInputType
    _max?: AbsenceMaxAggregateInputType
  }

  export type AbsenceGroupByOutputType = {
    id: string
    officer: string
    passport: string
    startDate: string
    endDate: string
    reason: string
    status: $Enums.RequestStatus
    createdAt: Date
    _count: AbsenceCountAggregateOutputType | null
    _min: AbsenceMinAggregateOutputType | null
    _max: AbsenceMaxAggregateOutputType | null
  }

  type GetAbsenceGroupByPayload<T extends AbsenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AbsenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AbsenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AbsenceGroupByOutputType[P]>
            : GetScalarType<T[P], AbsenceGroupByOutputType[P]>
        }
      >
    >


  export type AbsenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    officer?: boolean
    passport?: boolean
    startDate?: boolean
    endDate?: boolean
    reason?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["absence"]>

  export type AbsenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    officer?: boolean
    passport?: boolean
    startDate?: boolean
    endDate?: boolean
    reason?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["absence"]>

  export type AbsenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    officer?: boolean
    passport?: boolean
    startDate?: boolean
    endDate?: boolean
    reason?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["absence"]>

  export type AbsenceSelectScalar = {
    id?: boolean
    officer?: boolean
    passport?: boolean
    startDate?: boolean
    endDate?: boolean
    reason?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type AbsenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "officer" | "passport" | "startDate" | "endDate" | "reason" | "status" | "createdAt", ExtArgs["result"]["absence"]>

  export type $AbsencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Absence"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      officer: string
      passport: string
      startDate: string
      endDate: string
      reason: string
      status: $Enums.RequestStatus
      createdAt: Date
    }, ExtArgs["result"]["absence"]>
    composites: {}
  }

  type AbsenceGetPayload<S extends boolean | null | undefined | AbsenceDefaultArgs> = $Result.GetResult<Prisma.$AbsencePayload, S>

  type AbsenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AbsenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AbsenceCountAggregateInputType | true
    }

  export interface AbsenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Absence'], meta: { name: 'Absence' } }
    /**
     * Find zero or one Absence that matches the filter.
     * @param {AbsenceFindUniqueArgs} args - Arguments to find a Absence
     * @example
     * // Get one Absence
     * const absence = await prisma.absence.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AbsenceFindUniqueArgs>(args: SelectSubset<T, AbsenceFindUniqueArgs<ExtArgs>>): Prisma__AbsenceClient<$Result.GetResult<Prisma.$AbsencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Absence that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AbsenceFindUniqueOrThrowArgs} args - Arguments to find a Absence
     * @example
     * // Get one Absence
     * const absence = await prisma.absence.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AbsenceFindUniqueOrThrowArgs>(args: SelectSubset<T, AbsenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AbsenceClient<$Result.GetResult<Prisma.$AbsencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Absence that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsenceFindFirstArgs} args - Arguments to find a Absence
     * @example
     * // Get one Absence
     * const absence = await prisma.absence.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AbsenceFindFirstArgs>(args?: SelectSubset<T, AbsenceFindFirstArgs<ExtArgs>>): Prisma__AbsenceClient<$Result.GetResult<Prisma.$AbsencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Absence that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsenceFindFirstOrThrowArgs} args - Arguments to find a Absence
     * @example
     * // Get one Absence
     * const absence = await prisma.absence.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AbsenceFindFirstOrThrowArgs>(args?: SelectSubset<T, AbsenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AbsenceClient<$Result.GetResult<Prisma.$AbsencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Absences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Absences
     * const absences = await prisma.absence.findMany()
     * 
     * // Get first 10 Absences
     * const absences = await prisma.absence.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const absenceWithIdOnly = await prisma.absence.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AbsenceFindManyArgs>(args?: SelectSubset<T, AbsenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbsencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Absence.
     * @param {AbsenceCreateArgs} args - Arguments to create a Absence.
     * @example
     * // Create one Absence
     * const Absence = await prisma.absence.create({
     *   data: {
     *     // ... data to create a Absence
     *   }
     * })
     * 
     */
    create<T extends AbsenceCreateArgs>(args: SelectSubset<T, AbsenceCreateArgs<ExtArgs>>): Prisma__AbsenceClient<$Result.GetResult<Prisma.$AbsencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Absences.
     * @param {AbsenceCreateManyArgs} args - Arguments to create many Absences.
     * @example
     * // Create many Absences
     * const absence = await prisma.absence.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AbsenceCreateManyArgs>(args?: SelectSubset<T, AbsenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Absences and returns the data saved in the database.
     * @param {AbsenceCreateManyAndReturnArgs} args - Arguments to create many Absences.
     * @example
     * // Create many Absences
     * const absence = await prisma.absence.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Absences and only return the `id`
     * const absenceWithIdOnly = await prisma.absence.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AbsenceCreateManyAndReturnArgs>(args?: SelectSubset<T, AbsenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbsencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Absence.
     * @param {AbsenceDeleteArgs} args - Arguments to delete one Absence.
     * @example
     * // Delete one Absence
     * const Absence = await prisma.absence.delete({
     *   where: {
     *     // ... filter to delete one Absence
     *   }
     * })
     * 
     */
    delete<T extends AbsenceDeleteArgs>(args: SelectSubset<T, AbsenceDeleteArgs<ExtArgs>>): Prisma__AbsenceClient<$Result.GetResult<Prisma.$AbsencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Absence.
     * @param {AbsenceUpdateArgs} args - Arguments to update one Absence.
     * @example
     * // Update one Absence
     * const absence = await prisma.absence.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AbsenceUpdateArgs>(args: SelectSubset<T, AbsenceUpdateArgs<ExtArgs>>): Prisma__AbsenceClient<$Result.GetResult<Prisma.$AbsencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Absences.
     * @param {AbsenceDeleteManyArgs} args - Arguments to filter Absences to delete.
     * @example
     * // Delete a few Absences
     * const { count } = await prisma.absence.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AbsenceDeleteManyArgs>(args?: SelectSubset<T, AbsenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Absences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Absences
     * const absence = await prisma.absence.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AbsenceUpdateManyArgs>(args: SelectSubset<T, AbsenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Absences and returns the data updated in the database.
     * @param {AbsenceUpdateManyAndReturnArgs} args - Arguments to update many Absences.
     * @example
     * // Update many Absences
     * const absence = await prisma.absence.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Absences and only return the `id`
     * const absenceWithIdOnly = await prisma.absence.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AbsenceUpdateManyAndReturnArgs>(args: SelectSubset<T, AbsenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbsencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Absence.
     * @param {AbsenceUpsertArgs} args - Arguments to update or create a Absence.
     * @example
     * // Update or create a Absence
     * const absence = await prisma.absence.upsert({
     *   create: {
     *     // ... data to create a Absence
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Absence we want to update
     *   }
     * })
     */
    upsert<T extends AbsenceUpsertArgs>(args: SelectSubset<T, AbsenceUpsertArgs<ExtArgs>>): Prisma__AbsenceClient<$Result.GetResult<Prisma.$AbsencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Absences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsenceCountArgs} args - Arguments to filter Absences to count.
     * @example
     * // Count the number of Absences
     * const count = await prisma.absence.count({
     *   where: {
     *     // ... the filter for the Absences we want to count
     *   }
     * })
    **/
    count<T extends AbsenceCountArgs>(
      args?: Subset<T, AbsenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AbsenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Absence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AbsenceAggregateArgs>(args: Subset<T, AbsenceAggregateArgs>): Prisma.PrismaPromise<GetAbsenceAggregateType<T>>

    /**
     * Group by Absence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsenceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AbsenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AbsenceGroupByArgs['orderBy'] }
        : { orderBy?: AbsenceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AbsenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAbsenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Absence model
   */
  readonly fields: AbsenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Absence.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AbsenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Absence model
   */
  interface AbsenceFieldRefs {
    readonly id: FieldRef<"Absence", 'String'>
    readonly officer: FieldRef<"Absence", 'String'>
    readonly passport: FieldRef<"Absence", 'String'>
    readonly startDate: FieldRef<"Absence", 'String'>
    readonly endDate: FieldRef<"Absence", 'String'>
    readonly reason: FieldRef<"Absence", 'String'>
    readonly status: FieldRef<"Absence", 'RequestStatus'>
    readonly createdAt: FieldRef<"Absence", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Absence findUnique
   */
  export type AbsenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absence
     */
    select?: AbsenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absence
     */
    omit?: AbsenceOmit<ExtArgs> | null
    /**
     * Filter, which Absence to fetch.
     */
    where: AbsenceWhereUniqueInput
  }

  /**
   * Absence findUniqueOrThrow
   */
  export type AbsenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absence
     */
    select?: AbsenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absence
     */
    omit?: AbsenceOmit<ExtArgs> | null
    /**
     * Filter, which Absence to fetch.
     */
    where: AbsenceWhereUniqueInput
  }

  /**
   * Absence findFirst
   */
  export type AbsenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absence
     */
    select?: AbsenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absence
     */
    omit?: AbsenceOmit<ExtArgs> | null
    /**
     * Filter, which Absence to fetch.
     */
    where?: AbsenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Absences to fetch.
     */
    orderBy?: AbsenceOrderByWithRelationInput | AbsenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Absences.
     */
    cursor?: AbsenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Absences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Absences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Absences.
     */
    distinct?: AbsenceScalarFieldEnum | AbsenceScalarFieldEnum[]
  }

  /**
   * Absence findFirstOrThrow
   */
  export type AbsenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absence
     */
    select?: AbsenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absence
     */
    omit?: AbsenceOmit<ExtArgs> | null
    /**
     * Filter, which Absence to fetch.
     */
    where?: AbsenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Absences to fetch.
     */
    orderBy?: AbsenceOrderByWithRelationInput | AbsenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Absences.
     */
    cursor?: AbsenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Absences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Absences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Absences.
     */
    distinct?: AbsenceScalarFieldEnum | AbsenceScalarFieldEnum[]
  }

  /**
   * Absence findMany
   */
  export type AbsenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absence
     */
    select?: AbsenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absence
     */
    omit?: AbsenceOmit<ExtArgs> | null
    /**
     * Filter, which Absences to fetch.
     */
    where?: AbsenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Absences to fetch.
     */
    orderBy?: AbsenceOrderByWithRelationInput | AbsenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Absences.
     */
    cursor?: AbsenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Absences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Absences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Absences.
     */
    distinct?: AbsenceScalarFieldEnum | AbsenceScalarFieldEnum[]
  }

  /**
   * Absence create
   */
  export type AbsenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absence
     */
    select?: AbsenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absence
     */
    omit?: AbsenceOmit<ExtArgs> | null
    /**
     * The data needed to create a Absence.
     */
    data: XOR<AbsenceCreateInput, AbsenceUncheckedCreateInput>
  }

  /**
   * Absence createMany
   */
  export type AbsenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Absences.
     */
    data: AbsenceCreateManyInput | AbsenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Absence createManyAndReturn
   */
  export type AbsenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absence
     */
    select?: AbsenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Absence
     */
    omit?: AbsenceOmit<ExtArgs> | null
    /**
     * The data used to create many Absences.
     */
    data: AbsenceCreateManyInput | AbsenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Absence update
   */
  export type AbsenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absence
     */
    select?: AbsenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absence
     */
    omit?: AbsenceOmit<ExtArgs> | null
    /**
     * The data needed to update a Absence.
     */
    data: XOR<AbsenceUpdateInput, AbsenceUncheckedUpdateInput>
    /**
     * Choose, which Absence to update.
     */
    where: AbsenceWhereUniqueInput
  }

  /**
   * Absence updateMany
   */
  export type AbsenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Absences.
     */
    data: XOR<AbsenceUpdateManyMutationInput, AbsenceUncheckedUpdateManyInput>
    /**
     * Filter which Absences to update
     */
    where?: AbsenceWhereInput
    /**
     * Limit how many Absences to update.
     */
    limit?: number
  }

  /**
   * Absence updateManyAndReturn
   */
  export type AbsenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absence
     */
    select?: AbsenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Absence
     */
    omit?: AbsenceOmit<ExtArgs> | null
    /**
     * The data used to update Absences.
     */
    data: XOR<AbsenceUpdateManyMutationInput, AbsenceUncheckedUpdateManyInput>
    /**
     * Filter which Absences to update
     */
    where?: AbsenceWhereInput
    /**
     * Limit how many Absences to update.
     */
    limit?: number
  }

  /**
   * Absence upsert
   */
  export type AbsenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absence
     */
    select?: AbsenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absence
     */
    omit?: AbsenceOmit<ExtArgs> | null
    /**
     * The filter to search for the Absence to update in case it exists.
     */
    where: AbsenceWhereUniqueInput
    /**
     * In case the Absence found by the `where` argument doesn't exist, create a new Absence with this data.
     */
    create: XOR<AbsenceCreateInput, AbsenceUncheckedCreateInput>
    /**
     * In case the Absence was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AbsenceUpdateInput, AbsenceUncheckedUpdateInput>
  }

  /**
   * Absence delete
   */
  export type AbsenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absence
     */
    select?: AbsenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absence
     */
    omit?: AbsenceOmit<ExtArgs> | null
    /**
     * Filter which Absence to delete.
     */
    where: AbsenceWhereUniqueInput
  }

  /**
   * Absence deleteMany
   */
  export type AbsenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Absences to delete
     */
    where?: AbsenceWhereInput
    /**
     * Limit how many Absences to delete.
     */
    limit?: number
  }

  /**
   * Absence without action
   */
  export type AbsenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absence
     */
    select?: AbsenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absence
     */
    omit?: AbsenceOmit<ExtArgs> | null
  }


  /**
   * Model Promotion
   */

  export type AggregatePromotion = {
    _count: PromotionCountAggregateOutputType | null
    _min: PromotionMinAggregateOutputType | null
    _max: PromotionMaxAggregateOutputType | null
  }

  export type PromotionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    officerName: string | null
    newRank: $Enums.Rank | null
    status: $Enums.RequestStatus | null
    date: string | null
    createdAt: Date | null
  }

  export type PromotionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    officerName: string | null
    newRank: $Enums.Rank | null
    status: $Enums.RequestStatus | null
    date: string | null
    createdAt: Date | null
  }

  export type PromotionCountAggregateOutputType = {
    id: number
    userId: number
    officerName: number
    newRank: number
    status: number
    date: number
    createdAt: number
    _all: number
  }


  export type PromotionMinAggregateInputType = {
    id?: true
    userId?: true
    officerName?: true
    newRank?: true
    status?: true
    date?: true
    createdAt?: true
  }

  export type PromotionMaxAggregateInputType = {
    id?: true
    userId?: true
    officerName?: true
    newRank?: true
    status?: true
    date?: true
    createdAt?: true
  }

  export type PromotionCountAggregateInputType = {
    id?: true
    userId?: true
    officerName?: true
    newRank?: true
    status?: true
    date?: true
    createdAt?: true
    _all?: true
  }

  export type PromotionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Promotion to aggregate.
     */
    where?: PromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotions to fetch.
     */
    orderBy?: PromotionOrderByWithRelationInput | PromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Promotions
    **/
    _count?: true | PromotionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromotionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromotionMaxAggregateInputType
  }

  export type GetPromotionAggregateType<T extends PromotionAggregateArgs> = {
        [P in keyof T & keyof AggregatePromotion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromotion[P]>
      : GetScalarType<T[P], AggregatePromotion[P]>
  }




  export type PromotionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromotionWhereInput
    orderBy?: PromotionOrderByWithAggregationInput | PromotionOrderByWithAggregationInput[]
    by: PromotionScalarFieldEnum[] | PromotionScalarFieldEnum
    having?: PromotionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromotionCountAggregateInputType | true
    _min?: PromotionMinAggregateInputType
    _max?: PromotionMaxAggregateInputType
  }

  export type PromotionGroupByOutputType = {
    id: string
    userId: string | null
    officerName: string
    newRank: $Enums.Rank
    status: $Enums.RequestStatus
    date: string
    createdAt: Date
    _count: PromotionCountAggregateOutputType | null
    _min: PromotionMinAggregateOutputType | null
    _max: PromotionMaxAggregateOutputType | null
  }

  type GetPromotionGroupByPayload<T extends PromotionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromotionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromotionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromotionGroupByOutputType[P]>
            : GetScalarType<T[P], PromotionGroupByOutputType[P]>
        }
      >
    >


  export type PromotionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    officerName?: boolean
    newRank?: boolean
    status?: boolean
    date?: boolean
    createdAt?: boolean
    user?: boolean | Promotion$userArgs<ExtArgs>
  }, ExtArgs["result"]["promotion"]>

  export type PromotionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    officerName?: boolean
    newRank?: boolean
    status?: boolean
    date?: boolean
    createdAt?: boolean
    user?: boolean | Promotion$userArgs<ExtArgs>
  }, ExtArgs["result"]["promotion"]>

  export type PromotionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    officerName?: boolean
    newRank?: boolean
    status?: boolean
    date?: boolean
    createdAt?: boolean
    user?: boolean | Promotion$userArgs<ExtArgs>
  }, ExtArgs["result"]["promotion"]>

  export type PromotionSelectScalar = {
    id?: boolean
    userId?: boolean
    officerName?: boolean
    newRank?: boolean
    status?: boolean
    date?: boolean
    createdAt?: boolean
  }

  export type PromotionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "officerName" | "newRank" | "status" | "date" | "createdAt", ExtArgs["result"]["promotion"]>
  export type PromotionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Promotion$userArgs<ExtArgs>
  }
  export type PromotionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Promotion$userArgs<ExtArgs>
  }
  export type PromotionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Promotion$userArgs<ExtArgs>
  }

  export type $PromotionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Promotion"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      officerName: string
      newRank: $Enums.Rank
      status: $Enums.RequestStatus
      date: string
      createdAt: Date
    }, ExtArgs["result"]["promotion"]>
    composites: {}
  }

  type PromotionGetPayload<S extends boolean | null | undefined | PromotionDefaultArgs> = $Result.GetResult<Prisma.$PromotionPayload, S>

  type PromotionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PromotionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PromotionCountAggregateInputType | true
    }

  export interface PromotionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Promotion'], meta: { name: 'Promotion' } }
    /**
     * Find zero or one Promotion that matches the filter.
     * @param {PromotionFindUniqueArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PromotionFindUniqueArgs>(args: SelectSubset<T, PromotionFindUniqueArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Promotion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PromotionFindUniqueOrThrowArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PromotionFindUniqueOrThrowArgs>(args: SelectSubset<T, PromotionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Promotion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionFindFirstArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PromotionFindFirstArgs>(args?: SelectSubset<T, PromotionFindFirstArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Promotion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionFindFirstOrThrowArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PromotionFindFirstOrThrowArgs>(args?: SelectSubset<T, PromotionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Promotions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Promotions
     * const promotions = await prisma.promotion.findMany()
     * 
     * // Get first 10 Promotions
     * const promotions = await prisma.promotion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promotionWithIdOnly = await prisma.promotion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PromotionFindManyArgs>(args?: SelectSubset<T, PromotionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Promotion.
     * @param {PromotionCreateArgs} args - Arguments to create a Promotion.
     * @example
     * // Create one Promotion
     * const Promotion = await prisma.promotion.create({
     *   data: {
     *     // ... data to create a Promotion
     *   }
     * })
     * 
     */
    create<T extends PromotionCreateArgs>(args: SelectSubset<T, PromotionCreateArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Promotions.
     * @param {PromotionCreateManyArgs} args - Arguments to create many Promotions.
     * @example
     * // Create many Promotions
     * const promotion = await prisma.promotion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PromotionCreateManyArgs>(args?: SelectSubset<T, PromotionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Promotions and returns the data saved in the database.
     * @param {PromotionCreateManyAndReturnArgs} args - Arguments to create many Promotions.
     * @example
     * // Create many Promotions
     * const promotion = await prisma.promotion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Promotions and only return the `id`
     * const promotionWithIdOnly = await prisma.promotion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PromotionCreateManyAndReturnArgs>(args?: SelectSubset<T, PromotionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Promotion.
     * @param {PromotionDeleteArgs} args - Arguments to delete one Promotion.
     * @example
     * // Delete one Promotion
     * const Promotion = await prisma.promotion.delete({
     *   where: {
     *     // ... filter to delete one Promotion
     *   }
     * })
     * 
     */
    delete<T extends PromotionDeleteArgs>(args: SelectSubset<T, PromotionDeleteArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Promotion.
     * @param {PromotionUpdateArgs} args - Arguments to update one Promotion.
     * @example
     * // Update one Promotion
     * const promotion = await prisma.promotion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PromotionUpdateArgs>(args: SelectSubset<T, PromotionUpdateArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Promotions.
     * @param {PromotionDeleteManyArgs} args - Arguments to filter Promotions to delete.
     * @example
     * // Delete a few Promotions
     * const { count } = await prisma.promotion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PromotionDeleteManyArgs>(args?: SelectSubset<T, PromotionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Promotions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Promotions
     * const promotion = await prisma.promotion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PromotionUpdateManyArgs>(args: SelectSubset<T, PromotionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Promotions and returns the data updated in the database.
     * @param {PromotionUpdateManyAndReturnArgs} args - Arguments to update many Promotions.
     * @example
     * // Update many Promotions
     * const promotion = await prisma.promotion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Promotions and only return the `id`
     * const promotionWithIdOnly = await prisma.promotion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PromotionUpdateManyAndReturnArgs>(args: SelectSubset<T, PromotionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Promotion.
     * @param {PromotionUpsertArgs} args - Arguments to update or create a Promotion.
     * @example
     * // Update or create a Promotion
     * const promotion = await prisma.promotion.upsert({
     *   create: {
     *     // ... data to create a Promotion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Promotion we want to update
     *   }
     * })
     */
    upsert<T extends PromotionUpsertArgs>(args: SelectSubset<T, PromotionUpsertArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Promotions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionCountArgs} args - Arguments to filter Promotions to count.
     * @example
     * // Count the number of Promotions
     * const count = await prisma.promotion.count({
     *   where: {
     *     // ... the filter for the Promotions we want to count
     *   }
     * })
    **/
    count<T extends PromotionCountArgs>(
      args?: Subset<T, PromotionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromotionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Promotion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PromotionAggregateArgs>(args: Subset<T, PromotionAggregateArgs>): Prisma.PrismaPromise<GetPromotionAggregateType<T>>

    /**
     * Group by Promotion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PromotionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromotionGroupByArgs['orderBy'] }
        : { orderBy?: PromotionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PromotionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromotionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Promotion model
   */
  readonly fields: PromotionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Promotion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromotionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Promotion$userArgs<ExtArgs> = {}>(args?: Subset<T, Promotion$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Promotion model
   */
  interface PromotionFieldRefs {
    readonly id: FieldRef<"Promotion", 'String'>
    readonly userId: FieldRef<"Promotion", 'String'>
    readonly officerName: FieldRef<"Promotion", 'String'>
    readonly newRank: FieldRef<"Promotion", 'Rank'>
    readonly status: FieldRef<"Promotion", 'RequestStatus'>
    readonly date: FieldRef<"Promotion", 'String'>
    readonly createdAt: FieldRef<"Promotion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Promotion findUnique
   */
  export type PromotionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter, which Promotion to fetch.
     */
    where: PromotionWhereUniqueInput
  }

  /**
   * Promotion findUniqueOrThrow
   */
  export type PromotionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter, which Promotion to fetch.
     */
    where: PromotionWhereUniqueInput
  }

  /**
   * Promotion findFirst
   */
  export type PromotionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter, which Promotion to fetch.
     */
    where?: PromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotions to fetch.
     */
    orderBy?: PromotionOrderByWithRelationInput | PromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Promotions.
     */
    cursor?: PromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promotions.
     */
    distinct?: PromotionScalarFieldEnum | PromotionScalarFieldEnum[]
  }

  /**
   * Promotion findFirstOrThrow
   */
  export type PromotionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter, which Promotion to fetch.
     */
    where?: PromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotions to fetch.
     */
    orderBy?: PromotionOrderByWithRelationInput | PromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Promotions.
     */
    cursor?: PromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promotions.
     */
    distinct?: PromotionScalarFieldEnum | PromotionScalarFieldEnum[]
  }

  /**
   * Promotion findMany
   */
  export type PromotionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter, which Promotions to fetch.
     */
    where?: PromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotions to fetch.
     */
    orderBy?: PromotionOrderByWithRelationInput | PromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Promotions.
     */
    cursor?: PromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promotions.
     */
    distinct?: PromotionScalarFieldEnum | PromotionScalarFieldEnum[]
  }

  /**
   * Promotion create
   */
  export type PromotionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * The data needed to create a Promotion.
     */
    data: XOR<PromotionCreateInput, PromotionUncheckedCreateInput>
  }

  /**
   * Promotion createMany
   */
  export type PromotionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Promotions.
     */
    data: PromotionCreateManyInput | PromotionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Promotion createManyAndReturn
   */
  export type PromotionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * The data used to create many Promotions.
     */
    data: PromotionCreateManyInput | PromotionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Promotion update
   */
  export type PromotionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * The data needed to update a Promotion.
     */
    data: XOR<PromotionUpdateInput, PromotionUncheckedUpdateInput>
    /**
     * Choose, which Promotion to update.
     */
    where: PromotionWhereUniqueInput
  }

  /**
   * Promotion updateMany
   */
  export type PromotionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Promotions.
     */
    data: XOR<PromotionUpdateManyMutationInput, PromotionUncheckedUpdateManyInput>
    /**
     * Filter which Promotions to update
     */
    where?: PromotionWhereInput
    /**
     * Limit how many Promotions to update.
     */
    limit?: number
  }

  /**
   * Promotion updateManyAndReturn
   */
  export type PromotionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * The data used to update Promotions.
     */
    data: XOR<PromotionUpdateManyMutationInput, PromotionUncheckedUpdateManyInput>
    /**
     * Filter which Promotions to update
     */
    where?: PromotionWhereInput
    /**
     * Limit how many Promotions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Promotion upsert
   */
  export type PromotionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * The filter to search for the Promotion to update in case it exists.
     */
    where: PromotionWhereUniqueInput
    /**
     * In case the Promotion found by the `where` argument doesn't exist, create a new Promotion with this data.
     */
    create: XOR<PromotionCreateInput, PromotionUncheckedCreateInput>
    /**
     * In case the Promotion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromotionUpdateInput, PromotionUncheckedUpdateInput>
  }

  /**
   * Promotion delete
   */
  export type PromotionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter which Promotion to delete.
     */
    where: PromotionWhereUniqueInput
  }

  /**
   * Promotion deleteMany
   */
  export type PromotionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Promotions to delete
     */
    where?: PromotionWhereInput
    /**
     * Limit how many Promotions to delete.
     */
    limit?: number
  }

  /**
   * Promotion.user
   */
  export type Promotion$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Promotion without action
   */
  export type PromotionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
  }


  /**
   * Model Warning
   */

  export type AggregateWarning = {
    _count: WarningCountAggregateOutputType | null
    _min: WarningMinAggregateOutputType | null
    _max: WarningMaxAggregateOutputType | null
  }

  export type WarningMinAggregateOutputType = {
    id: string | null
    userId: string | null
    officerName: string | null
    level: $Enums.WarningLevel | null
    reason: string | null
    date: string | null
    createdAt: Date | null
  }

  export type WarningMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    officerName: string | null
    level: $Enums.WarningLevel | null
    reason: string | null
    date: string | null
    createdAt: Date | null
  }

  export type WarningCountAggregateOutputType = {
    id: number
    userId: number
    officerName: number
    level: number
    reason: number
    date: number
    createdAt: number
    _all: number
  }


  export type WarningMinAggregateInputType = {
    id?: true
    userId?: true
    officerName?: true
    level?: true
    reason?: true
    date?: true
    createdAt?: true
  }

  export type WarningMaxAggregateInputType = {
    id?: true
    userId?: true
    officerName?: true
    level?: true
    reason?: true
    date?: true
    createdAt?: true
  }

  export type WarningCountAggregateInputType = {
    id?: true
    userId?: true
    officerName?: true
    level?: true
    reason?: true
    date?: true
    createdAt?: true
    _all?: true
  }

  export type WarningAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Warning to aggregate.
     */
    where?: WarningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warnings to fetch.
     */
    orderBy?: WarningOrderByWithRelationInput | WarningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WarningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Warnings
    **/
    _count?: true | WarningCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WarningMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WarningMaxAggregateInputType
  }

  export type GetWarningAggregateType<T extends WarningAggregateArgs> = {
        [P in keyof T & keyof AggregateWarning]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWarning[P]>
      : GetScalarType<T[P], AggregateWarning[P]>
  }




  export type WarningGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WarningWhereInput
    orderBy?: WarningOrderByWithAggregationInput | WarningOrderByWithAggregationInput[]
    by: WarningScalarFieldEnum[] | WarningScalarFieldEnum
    having?: WarningScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WarningCountAggregateInputType | true
    _min?: WarningMinAggregateInputType
    _max?: WarningMaxAggregateInputType
  }

  export type WarningGroupByOutputType = {
    id: string
    userId: string | null
    officerName: string
    level: $Enums.WarningLevel
    reason: string
    date: string
    createdAt: Date
    _count: WarningCountAggregateOutputType | null
    _min: WarningMinAggregateOutputType | null
    _max: WarningMaxAggregateOutputType | null
  }

  type GetWarningGroupByPayload<T extends WarningGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WarningGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WarningGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WarningGroupByOutputType[P]>
            : GetScalarType<T[P], WarningGroupByOutputType[P]>
        }
      >
    >


  export type WarningSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    officerName?: boolean
    level?: boolean
    reason?: boolean
    date?: boolean
    createdAt?: boolean
    user?: boolean | Warning$userArgs<ExtArgs>
  }, ExtArgs["result"]["warning"]>

  export type WarningSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    officerName?: boolean
    level?: boolean
    reason?: boolean
    date?: boolean
    createdAt?: boolean
    user?: boolean | Warning$userArgs<ExtArgs>
  }, ExtArgs["result"]["warning"]>

  export type WarningSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    officerName?: boolean
    level?: boolean
    reason?: boolean
    date?: boolean
    createdAt?: boolean
    user?: boolean | Warning$userArgs<ExtArgs>
  }, ExtArgs["result"]["warning"]>

  export type WarningSelectScalar = {
    id?: boolean
    userId?: boolean
    officerName?: boolean
    level?: boolean
    reason?: boolean
    date?: boolean
    createdAt?: boolean
  }

  export type WarningOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "officerName" | "level" | "reason" | "date" | "createdAt", ExtArgs["result"]["warning"]>
  export type WarningInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Warning$userArgs<ExtArgs>
  }
  export type WarningIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Warning$userArgs<ExtArgs>
  }
  export type WarningIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Warning$userArgs<ExtArgs>
  }

  export type $WarningPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Warning"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      officerName: string
      level: $Enums.WarningLevel
      reason: string
      date: string
      createdAt: Date
    }, ExtArgs["result"]["warning"]>
    composites: {}
  }

  type WarningGetPayload<S extends boolean | null | undefined | WarningDefaultArgs> = $Result.GetResult<Prisma.$WarningPayload, S>

  type WarningCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WarningFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WarningCountAggregateInputType | true
    }

  export interface WarningDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Warning'], meta: { name: 'Warning' } }
    /**
     * Find zero or one Warning that matches the filter.
     * @param {WarningFindUniqueArgs} args - Arguments to find a Warning
     * @example
     * // Get one Warning
     * const warning = await prisma.warning.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WarningFindUniqueArgs>(args: SelectSubset<T, WarningFindUniqueArgs<ExtArgs>>): Prisma__WarningClient<$Result.GetResult<Prisma.$WarningPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Warning that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WarningFindUniqueOrThrowArgs} args - Arguments to find a Warning
     * @example
     * // Get one Warning
     * const warning = await prisma.warning.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WarningFindUniqueOrThrowArgs>(args: SelectSubset<T, WarningFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WarningClient<$Result.GetResult<Prisma.$WarningPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Warning that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarningFindFirstArgs} args - Arguments to find a Warning
     * @example
     * // Get one Warning
     * const warning = await prisma.warning.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WarningFindFirstArgs>(args?: SelectSubset<T, WarningFindFirstArgs<ExtArgs>>): Prisma__WarningClient<$Result.GetResult<Prisma.$WarningPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Warning that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarningFindFirstOrThrowArgs} args - Arguments to find a Warning
     * @example
     * // Get one Warning
     * const warning = await prisma.warning.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WarningFindFirstOrThrowArgs>(args?: SelectSubset<T, WarningFindFirstOrThrowArgs<ExtArgs>>): Prisma__WarningClient<$Result.GetResult<Prisma.$WarningPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Warnings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarningFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Warnings
     * const warnings = await prisma.warning.findMany()
     * 
     * // Get first 10 Warnings
     * const warnings = await prisma.warning.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const warningWithIdOnly = await prisma.warning.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WarningFindManyArgs>(args?: SelectSubset<T, WarningFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Warning.
     * @param {WarningCreateArgs} args - Arguments to create a Warning.
     * @example
     * // Create one Warning
     * const Warning = await prisma.warning.create({
     *   data: {
     *     // ... data to create a Warning
     *   }
     * })
     * 
     */
    create<T extends WarningCreateArgs>(args: SelectSubset<T, WarningCreateArgs<ExtArgs>>): Prisma__WarningClient<$Result.GetResult<Prisma.$WarningPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Warnings.
     * @param {WarningCreateManyArgs} args - Arguments to create many Warnings.
     * @example
     * // Create many Warnings
     * const warning = await prisma.warning.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WarningCreateManyArgs>(args?: SelectSubset<T, WarningCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Warnings and returns the data saved in the database.
     * @param {WarningCreateManyAndReturnArgs} args - Arguments to create many Warnings.
     * @example
     * // Create many Warnings
     * const warning = await prisma.warning.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Warnings and only return the `id`
     * const warningWithIdOnly = await prisma.warning.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WarningCreateManyAndReturnArgs>(args?: SelectSubset<T, WarningCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarningPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Warning.
     * @param {WarningDeleteArgs} args - Arguments to delete one Warning.
     * @example
     * // Delete one Warning
     * const Warning = await prisma.warning.delete({
     *   where: {
     *     // ... filter to delete one Warning
     *   }
     * })
     * 
     */
    delete<T extends WarningDeleteArgs>(args: SelectSubset<T, WarningDeleteArgs<ExtArgs>>): Prisma__WarningClient<$Result.GetResult<Prisma.$WarningPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Warning.
     * @param {WarningUpdateArgs} args - Arguments to update one Warning.
     * @example
     * // Update one Warning
     * const warning = await prisma.warning.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WarningUpdateArgs>(args: SelectSubset<T, WarningUpdateArgs<ExtArgs>>): Prisma__WarningClient<$Result.GetResult<Prisma.$WarningPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Warnings.
     * @param {WarningDeleteManyArgs} args - Arguments to filter Warnings to delete.
     * @example
     * // Delete a few Warnings
     * const { count } = await prisma.warning.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WarningDeleteManyArgs>(args?: SelectSubset<T, WarningDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Warnings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarningUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Warnings
     * const warning = await prisma.warning.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WarningUpdateManyArgs>(args: SelectSubset<T, WarningUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Warnings and returns the data updated in the database.
     * @param {WarningUpdateManyAndReturnArgs} args - Arguments to update many Warnings.
     * @example
     * // Update many Warnings
     * const warning = await prisma.warning.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Warnings and only return the `id`
     * const warningWithIdOnly = await prisma.warning.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WarningUpdateManyAndReturnArgs>(args: SelectSubset<T, WarningUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarningPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Warning.
     * @param {WarningUpsertArgs} args - Arguments to update or create a Warning.
     * @example
     * // Update or create a Warning
     * const warning = await prisma.warning.upsert({
     *   create: {
     *     // ... data to create a Warning
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Warning we want to update
     *   }
     * })
     */
    upsert<T extends WarningUpsertArgs>(args: SelectSubset<T, WarningUpsertArgs<ExtArgs>>): Prisma__WarningClient<$Result.GetResult<Prisma.$WarningPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Warnings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarningCountArgs} args - Arguments to filter Warnings to count.
     * @example
     * // Count the number of Warnings
     * const count = await prisma.warning.count({
     *   where: {
     *     // ... the filter for the Warnings we want to count
     *   }
     * })
    **/
    count<T extends WarningCountArgs>(
      args?: Subset<T, WarningCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WarningCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Warning.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarningAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WarningAggregateArgs>(args: Subset<T, WarningAggregateArgs>): Prisma.PrismaPromise<GetWarningAggregateType<T>>

    /**
     * Group by Warning.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarningGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WarningGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WarningGroupByArgs['orderBy'] }
        : { orderBy?: WarningGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WarningGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWarningGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Warning model
   */
  readonly fields: WarningFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Warning.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WarningClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Warning$userArgs<ExtArgs> = {}>(args?: Subset<T, Warning$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Warning model
   */
  interface WarningFieldRefs {
    readonly id: FieldRef<"Warning", 'String'>
    readonly userId: FieldRef<"Warning", 'String'>
    readonly officerName: FieldRef<"Warning", 'String'>
    readonly level: FieldRef<"Warning", 'WarningLevel'>
    readonly reason: FieldRef<"Warning", 'String'>
    readonly date: FieldRef<"Warning", 'String'>
    readonly createdAt: FieldRef<"Warning", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Warning findUnique
   */
  export type WarningFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warning
     */
    select?: WarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warning
     */
    omit?: WarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarningInclude<ExtArgs> | null
    /**
     * Filter, which Warning to fetch.
     */
    where: WarningWhereUniqueInput
  }

  /**
   * Warning findUniqueOrThrow
   */
  export type WarningFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warning
     */
    select?: WarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warning
     */
    omit?: WarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarningInclude<ExtArgs> | null
    /**
     * Filter, which Warning to fetch.
     */
    where: WarningWhereUniqueInput
  }

  /**
   * Warning findFirst
   */
  export type WarningFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warning
     */
    select?: WarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warning
     */
    omit?: WarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarningInclude<ExtArgs> | null
    /**
     * Filter, which Warning to fetch.
     */
    where?: WarningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warnings to fetch.
     */
    orderBy?: WarningOrderByWithRelationInput | WarningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Warnings.
     */
    cursor?: WarningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Warnings.
     */
    distinct?: WarningScalarFieldEnum | WarningScalarFieldEnum[]
  }

  /**
   * Warning findFirstOrThrow
   */
  export type WarningFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warning
     */
    select?: WarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warning
     */
    omit?: WarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarningInclude<ExtArgs> | null
    /**
     * Filter, which Warning to fetch.
     */
    where?: WarningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warnings to fetch.
     */
    orderBy?: WarningOrderByWithRelationInput | WarningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Warnings.
     */
    cursor?: WarningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Warnings.
     */
    distinct?: WarningScalarFieldEnum | WarningScalarFieldEnum[]
  }

  /**
   * Warning findMany
   */
  export type WarningFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warning
     */
    select?: WarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warning
     */
    omit?: WarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarningInclude<ExtArgs> | null
    /**
     * Filter, which Warnings to fetch.
     */
    where?: WarningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warnings to fetch.
     */
    orderBy?: WarningOrderByWithRelationInput | WarningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Warnings.
     */
    cursor?: WarningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Warnings.
     */
    distinct?: WarningScalarFieldEnum | WarningScalarFieldEnum[]
  }

  /**
   * Warning create
   */
  export type WarningCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warning
     */
    select?: WarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warning
     */
    omit?: WarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarningInclude<ExtArgs> | null
    /**
     * The data needed to create a Warning.
     */
    data: XOR<WarningCreateInput, WarningUncheckedCreateInput>
  }

  /**
   * Warning createMany
   */
  export type WarningCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Warnings.
     */
    data: WarningCreateManyInput | WarningCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Warning createManyAndReturn
   */
  export type WarningCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warning
     */
    select?: WarningSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Warning
     */
    omit?: WarningOmit<ExtArgs> | null
    /**
     * The data used to create many Warnings.
     */
    data: WarningCreateManyInput | WarningCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarningIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Warning update
   */
  export type WarningUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warning
     */
    select?: WarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warning
     */
    omit?: WarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarningInclude<ExtArgs> | null
    /**
     * The data needed to update a Warning.
     */
    data: XOR<WarningUpdateInput, WarningUncheckedUpdateInput>
    /**
     * Choose, which Warning to update.
     */
    where: WarningWhereUniqueInput
  }

  /**
   * Warning updateMany
   */
  export type WarningUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Warnings.
     */
    data: XOR<WarningUpdateManyMutationInput, WarningUncheckedUpdateManyInput>
    /**
     * Filter which Warnings to update
     */
    where?: WarningWhereInput
    /**
     * Limit how many Warnings to update.
     */
    limit?: number
  }

  /**
   * Warning updateManyAndReturn
   */
  export type WarningUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warning
     */
    select?: WarningSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Warning
     */
    omit?: WarningOmit<ExtArgs> | null
    /**
     * The data used to update Warnings.
     */
    data: XOR<WarningUpdateManyMutationInput, WarningUncheckedUpdateManyInput>
    /**
     * Filter which Warnings to update
     */
    where?: WarningWhereInput
    /**
     * Limit how many Warnings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarningIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Warning upsert
   */
  export type WarningUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warning
     */
    select?: WarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warning
     */
    omit?: WarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarningInclude<ExtArgs> | null
    /**
     * The filter to search for the Warning to update in case it exists.
     */
    where: WarningWhereUniqueInput
    /**
     * In case the Warning found by the `where` argument doesn't exist, create a new Warning with this data.
     */
    create: XOR<WarningCreateInput, WarningUncheckedCreateInput>
    /**
     * In case the Warning was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WarningUpdateInput, WarningUncheckedUpdateInput>
  }

  /**
   * Warning delete
   */
  export type WarningDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warning
     */
    select?: WarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warning
     */
    omit?: WarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarningInclude<ExtArgs> | null
    /**
     * Filter which Warning to delete.
     */
    where: WarningWhereUniqueInput
  }

  /**
   * Warning deleteMany
   */
  export type WarningDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Warnings to delete
     */
    where?: WarningWhereInput
    /**
     * Limit how many Warnings to delete.
     */
    limit?: number
  }

  /**
   * Warning.user
   */
  export type Warning$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Warning without action
   */
  export type WarningDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warning
     */
    select?: WarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warning
     */
    omit?: WarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarningInclude<ExtArgs> | null
  }


  /**
   * Model Uniform
   */

  export type AggregateUniform = {
    _count: UniformCountAggregateOutputType | null
    _avg: UniformAvgAggregateOutputType | null
    _sum: UniformSumAggregateOutputType | null
    _min: UniformMinAggregateOutputType | null
    _max: UniformMaxAggregateOutputType | null
  }

  export type UniformAvgAggregateOutputType = {
    order: number | null
  }

  export type UniformSumAggregateOutputType = {
    order: number | null
  }

  export type UniformMinAggregateOutputType = {
    id: string | null
    title: string | null
    badge: string | null
    imageUrl: string | null
    details: string | null
    order: number | null
    createdAt: Date | null
  }

  export type UniformMaxAggregateOutputType = {
    id: string | null
    title: string | null
    badge: string | null
    imageUrl: string | null
    details: string | null
    order: number | null
    createdAt: Date | null
  }

  export type UniformCountAggregateOutputType = {
    id: number
    title: number
    badge: number
    imageUrl: number
    details: number
    order: number
    createdAt: number
    _all: number
  }


  export type UniformAvgAggregateInputType = {
    order?: true
  }

  export type UniformSumAggregateInputType = {
    order?: true
  }

  export type UniformMinAggregateInputType = {
    id?: true
    title?: true
    badge?: true
    imageUrl?: true
    details?: true
    order?: true
    createdAt?: true
  }

  export type UniformMaxAggregateInputType = {
    id?: true
    title?: true
    badge?: true
    imageUrl?: true
    details?: true
    order?: true
    createdAt?: true
  }

  export type UniformCountAggregateInputType = {
    id?: true
    title?: true
    badge?: true
    imageUrl?: true
    details?: true
    order?: true
    createdAt?: true
    _all?: true
  }

  export type UniformAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Uniform to aggregate.
     */
    where?: UniformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Uniforms to fetch.
     */
    orderBy?: UniformOrderByWithRelationInput | UniformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UniformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Uniforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Uniforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Uniforms
    **/
    _count?: true | UniformCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UniformAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UniformSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UniformMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UniformMaxAggregateInputType
  }

  export type GetUniformAggregateType<T extends UniformAggregateArgs> = {
        [P in keyof T & keyof AggregateUniform]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUniform[P]>
      : GetScalarType<T[P], AggregateUniform[P]>
  }




  export type UniformGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UniformWhereInput
    orderBy?: UniformOrderByWithAggregationInput | UniformOrderByWithAggregationInput[]
    by: UniformScalarFieldEnum[] | UniformScalarFieldEnum
    having?: UniformScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UniformCountAggregateInputType | true
    _avg?: UniformAvgAggregateInputType
    _sum?: UniformSumAggregateInputType
    _min?: UniformMinAggregateInputType
    _max?: UniformMaxAggregateInputType
  }

  export type UniformGroupByOutputType = {
    id: string
    title: string
    badge: string
    imageUrl: string
    details: string
    order: number
    createdAt: Date
    _count: UniformCountAggregateOutputType | null
    _avg: UniformAvgAggregateOutputType | null
    _sum: UniformSumAggregateOutputType | null
    _min: UniformMinAggregateOutputType | null
    _max: UniformMaxAggregateOutputType | null
  }

  type GetUniformGroupByPayload<T extends UniformGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UniformGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UniformGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UniformGroupByOutputType[P]>
            : GetScalarType<T[P], UniformGroupByOutputType[P]>
        }
      >
    >


  export type UniformSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    badge?: boolean
    imageUrl?: boolean
    details?: boolean
    order?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["uniform"]>

  export type UniformSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    badge?: boolean
    imageUrl?: boolean
    details?: boolean
    order?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["uniform"]>

  export type UniformSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    badge?: boolean
    imageUrl?: boolean
    details?: boolean
    order?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["uniform"]>

  export type UniformSelectScalar = {
    id?: boolean
    title?: boolean
    badge?: boolean
    imageUrl?: boolean
    details?: boolean
    order?: boolean
    createdAt?: boolean
  }

  export type UniformOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "badge" | "imageUrl" | "details" | "order" | "createdAt", ExtArgs["result"]["uniform"]>

  export type $UniformPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Uniform"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      badge: string
      imageUrl: string
      details: string
      order: number
      createdAt: Date
    }, ExtArgs["result"]["uniform"]>
    composites: {}
  }

  type UniformGetPayload<S extends boolean | null | undefined | UniformDefaultArgs> = $Result.GetResult<Prisma.$UniformPayload, S>

  type UniformCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UniformFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UniformCountAggregateInputType | true
    }

  export interface UniformDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Uniform'], meta: { name: 'Uniform' } }
    /**
     * Find zero or one Uniform that matches the filter.
     * @param {UniformFindUniqueArgs} args - Arguments to find a Uniform
     * @example
     * // Get one Uniform
     * const uniform = await prisma.uniform.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UniformFindUniqueArgs>(args: SelectSubset<T, UniformFindUniqueArgs<ExtArgs>>): Prisma__UniformClient<$Result.GetResult<Prisma.$UniformPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Uniform that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UniformFindUniqueOrThrowArgs} args - Arguments to find a Uniform
     * @example
     * // Get one Uniform
     * const uniform = await prisma.uniform.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UniformFindUniqueOrThrowArgs>(args: SelectSubset<T, UniformFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UniformClient<$Result.GetResult<Prisma.$UniformPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Uniform that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniformFindFirstArgs} args - Arguments to find a Uniform
     * @example
     * // Get one Uniform
     * const uniform = await prisma.uniform.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UniformFindFirstArgs>(args?: SelectSubset<T, UniformFindFirstArgs<ExtArgs>>): Prisma__UniformClient<$Result.GetResult<Prisma.$UniformPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Uniform that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniformFindFirstOrThrowArgs} args - Arguments to find a Uniform
     * @example
     * // Get one Uniform
     * const uniform = await prisma.uniform.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UniformFindFirstOrThrowArgs>(args?: SelectSubset<T, UniformFindFirstOrThrowArgs<ExtArgs>>): Prisma__UniformClient<$Result.GetResult<Prisma.$UniformPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Uniforms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniformFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Uniforms
     * const uniforms = await prisma.uniform.findMany()
     * 
     * // Get first 10 Uniforms
     * const uniforms = await prisma.uniform.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const uniformWithIdOnly = await prisma.uniform.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UniformFindManyArgs>(args?: SelectSubset<T, UniformFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UniformPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Uniform.
     * @param {UniformCreateArgs} args - Arguments to create a Uniform.
     * @example
     * // Create one Uniform
     * const Uniform = await prisma.uniform.create({
     *   data: {
     *     // ... data to create a Uniform
     *   }
     * })
     * 
     */
    create<T extends UniformCreateArgs>(args: SelectSubset<T, UniformCreateArgs<ExtArgs>>): Prisma__UniformClient<$Result.GetResult<Prisma.$UniformPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Uniforms.
     * @param {UniformCreateManyArgs} args - Arguments to create many Uniforms.
     * @example
     * // Create many Uniforms
     * const uniform = await prisma.uniform.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UniformCreateManyArgs>(args?: SelectSubset<T, UniformCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Uniforms and returns the data saved in the database.
     * @param {UniformCreateManyAndReturnArgs} args - Arguments to create many Uniforms.
     * @example
     * // Create many Uniforms
     * const uniform = await prisma.uniform.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Uniforms and only return the `id`
     * const uniformWithIdOnly = await prisma.uniform.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UniformCreateManyAndReturnArgs>(args?: SelectSubset<T, UniformCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UniformPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Uniform.
     * @param {UniformDeleteArgs} args - Arguments to delete one Uniform.
     * @example
     * // Delete one Uniform
     * const Uniform = await prisma.uniform.delete({
     *   where: {
     *     // ... filter to delete one Uniform
     *   }
     * })
     * 
     */
    delete<T extends UniformDeleteArgs>(args: SelectSubset<T, UniformDeleteArgs<ExtArgs>>): Prisma__UniformClient<$Result.GetResult<Prisma.$UniformPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Uniform.
     * @param {UniformUpdateArgs} args - Arguments to update one Uniform.
     * @example
     * // Update one Uniform
     * const uniform = await prisma.uniform.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UniformUpdateArgs>(args: SelectSubset<T, UniformUpdateArgs<ExtArgs>>): Prisma__UniformClient<$Result.GetResult<Prisma.$UniformPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Uniforms.
     * @param {UniformDeleteManyArgs} args - Arguments to filter Uniforms to delete.
     * @example
     * // Delete a few Uniforms
     * const { count } = await prisma.uniform.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UniformDeleteManyArgs>(args?: SelectSubset<T, UniformDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Uniforms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniformUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Uniforms
     * const uniform = await prisma.uniform.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UniformUpdateManyArgs>(args: SelectSubset<T, UniformUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Uniforms and returns the data updated in the database.
     * @param {UniformUpdateManyAndReturnArgs} args - Arguments to update many Uniforms.
     * @example
     * // Update many Uniforms
     * const uniform = await prisma.uniform.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Uniforms and only return the `id`
     * const uniformWithIdOnly = await prisma.uniform.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UniformUpdateManyAndReturnArgs>(args: SelectSubset<T, UniformUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UniformPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Uniform.
     * @param {UniformUpsertArgs} args - Arguments to update or create a Uniform.
     * @example
     * // Update or create a Uniform
     * const uniform = await prisma.uniform.upsert({
     *   create: {
     *     // ... data to create a Uniform
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Uniform we want to update
     *   }
     * })
     */
    upsert<T extends UniformUpsertArgs>(args: SelectSubset<T, UniformUpsertArgs<ExtArgs>>): Prisma__UniformClient<$Result.GetResult<Prisma.$UniformPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Uniforms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniformCountArgs} args - Arguments to filter Uniforms to count.
     * @example
     * // Count the number of Uniforms
     * const count = await prisma.uniform.count({
     *   where: {
     *     // ... the filter for the Uniforms we want to count
     *   }
     * })
    **/
    count<T extends UniformCountArgs>(
      args?: Subset<T, UniformCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UniformCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Uniform.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniformAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UniformAggregateArgs>(args: Subset<T, UniformAggregateArgs>): Prisma.PrismaPromise<GetUniformAggregateType<T>>

    /**
     * Group by Uniform.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniformGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UniformGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UniformGroupByArgs['orderBy'] }
        : { orderBy?: UniformGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UniformGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUniformGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Uniform model
   */
  readonly fields: UniformFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Uniform.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UniformClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Uniform model
   */
  interface UniformFieldRefs {
    readonly id: FieldRef<"Uniform", 'String'>
    readonly title: FieldRef<"Uniform", 'String'>
    readonly badge: FieldRef<"Uniform", 'String'>
    readonly imageUrl: FieldRef<"Uniform", 'String'>
    readonly details: FieldRef<"Uniform", 'String'>
    readonly order: FieldRef<"Uniform", 'Int'>
    readonly createdAt: FieldRef<"Uniform", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Uniform findUnique
   */
  export type UniformFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Uniform
     */
    select?: UniformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Uniform
     */
    omit?: UniformOmit<ExtArgs> | null
    /**
     * Filter, which Uniform to fetch.
     */
    where: UniformWhereUniqueInput
  }

  /**
   * Uniform findUniqueOrThrow
   */
  export type UniformFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Uniform
     */
    select?: UniformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Uniform
     */
    omit?: UniformOmit<ExtArgs> | null
    /**
     * Filter, which Uniform to fetch.
     */
    where: UniformWhereUniqueInput
  }

  /**
   * Uniform findFirst
   */
  export type UniformFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Uniform
     */
    select?: UniformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Uniform
     */
    omit?: UniformOmit<ExtArgs> | null
    /**
     * Filter, which Uniform to fetch.
     */
    where?: UniformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Uniforms to fetch.
     */
    orderBy?: UniformOrderByWithRelationInput | UniformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Uniforms.
     */
    cursor?: UniformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Uniforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Uniforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Uniforms.
     */
    distinct?: UniformScalarFieldEnum | UniformScalarFieldEnum[]
  }

  /**
   * Uniform findFirstOrThrow
   */
  export type UniformFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Uniform
     */
    select?: UniformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Uniform
     */
    omit?: UniformOmit<ExtArgs> | null
    /**
     * Filter, which Uniform to fetch.
     */
    where?: UniformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Uniforms to fetch.
     */
    orderBy?: UniformOrderByWithRelationInput | UniformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Uniforms.
     */
    cursor?: UniformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Uniforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Uniforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Uniforms.
     */
    distinct?: UniformScalarFieldEnum | UniformScalarFieldEnum[]
  }

  /**
   * Uniform findMany
   */
  export type UniformFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Uniform
     */
    select?: UniformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Uniform
     */
    omit?: UniformOmit<ExtArgs> | null
    /**
     * Filter, which Uniforms to fetch.
     */
    where?: UniformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Uniforms to fetch.
     */
    orderBy?: UniformOrderByWithRelationInput | UniformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Uniforms.
     */
    cursor?: UniformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Uniforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Uniforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Uniforms.
     */
    distinct?: UniformScalarFieldEnum | UniformScalarFieldEnum[]
  }

  /**
   * Uniform create
   */
  export type UniformCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Uniform
     */
    select?: UniformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Uniform
     */
    omit?: UniformOmit<ExtArgs> | null
    /**
     * The data needed to create a Uniform.
     */
    data: XOR<UniformCreateInput, UniformUncheckedCreateInput>
  }

  /**
   * Uniform createMany
   */
  export type UniformCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Uniforms.
     */
    data: UniformCreateManyInput | UniformCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Uniform createManyAndReturn
   */
  export type UniformCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Uniform
     */
    select?: UniformSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Uniform
     */
    omit?: UniformOmit<ExtArgs> | null
    /**
     * The data used to create many Uniforms.
     */
    data: UniformCreateManyInput | UniformCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Uniform update
   */
  export type UniformUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Uniform
     */
    select?: UniformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Uniform
     */
    omit?: UniformOmit<ExtArgs> | null
    /**
     * The data needed to update a Uniform.
     */
    data: XOR<UniformUpdateInput, UniformUncheckedUpdateInput>
    /**
     * Choose, which Uniform to update.
     */
    where: UniformWhereUniqueInput
  }

  /**
   * Uniform updateMany
   */
  export type UniformUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Uniforms.
     */
    data: XOR<UniformUpdateManyMutationInput, UniformUncheckedUpdateManyInput>
    /**
     * Filter which Uniforms to update
     */
    where?: UniformWhereInput
    /**
     * Limit how many Uniforms to update.
     */
    limit?: number
  }

  /**
   * Uniform updateManyAndReturn
   */
  export type UniformUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Uniform
     */
    select?: UniformSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Uniform
     */
    omit?: UniformOmit<ExtArgs> | null
    /**
     * The data used to update Uniforms.
     */
    data: XOR<UniformUpdateManyMutationInput, UniformUncheckedUpdateManyInput>
    /**
     * Filter which Uniforms to update
     */
    where?: UniformWhereInput
    /**
     * Limit how many Uniforms to update.
     */
    limit?: number
  }

  /**
   * Uniform upsert
   */
  export type UniformUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Uniform
     */
    select?: UniformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Uniform
     */
    omit?: UniformOmit<ExtArgs> | null
    /**
     * The filter to search for the Uniform to update in case it exists.
     */
    where: UniformWhereUniqueInput
    /**
     * In case the Uniform found by the `where` argument doesn't exist, create a new Uniform with this data.
     */
    create: XOR<UniformCreateInput, UniformUncheckedCreateInput>
    /**
     * In case the Uniform was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UniformUpdateInput, UniformUncheckedUpdateInput>
  }

  /**
   * Uniform delete
   */
  export type UniformDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Uniform
     */
    select?: UniformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Uniform
     */
    omit?: UniformOmit<ExtArgs> | null
    /**
     * Filter which Uniform to delete.
     */
    where: UniformWhereUniqueInput
  }

  /**
   * Uniform deleteMany
   */
  export type UniformDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Uniforms to delete
     */
    where?: UniformWhereInput
    /**
     * Limit how many Uniforms to delete.
     */
    limit?: number
  }

  /**
   * Uniform without action
   */
  export type UniformDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Uniform
     */
    select?: UniformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Uniform
     */
    omit?: UniformOmit<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionAvgAggregateOutputType = {
    order: number | null
  }

  export type QuestionSumAggregateOutputType = {
    order: number | null
  }

  export type QuestionMinAggregateOutputType = {
    id: string | null
    text: string | null
    order: number | null
    createdAt: Date | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: string | null
    text: string | null
    order: number | null
    createdAt: Date | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    text: number
    order: number
    createdAt: number
    _all: number
  }


  export type QuestionAvgAggregateInputType = {
    order?: true
  }

  export type QuestionSumAggregateInputType = {
    order?: true
  }

  export type QuestionMinAggregateInputType = {
    id?: true
    text?: true
    order?: true
    createdAt?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    text?: true
    order?: true
    createdAt?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    text?: true
    order?: true
    createdAt?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _avg?: QuestionAvgAggregateInputType
    _sum?: QuestionSumAggregateInputType
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: string
    text: string
    order: number
    createdAt: Date
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    order?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    order?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    order?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectScalar = {
    id?: boolean
    text?: boolean
    order?: boolean
    createdAt?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "order" | "createdAt", ExtArgs["result"]["question"]>

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      order: number
      createdAt: Date
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions and returns the data updated in the database.
     * @param {QuestionUpdateManyAndReturnArgs} args - Arguments to update many Questions.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'String'>
    readonly text: FieldRef<"Question", 'String'>
    readonly order: FieldRef<"Question", 'Int'>
    readonly createdAt: FieldRef<"Question", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question createManyAndReturn
   */
  export type QuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question updateManyAndReturn
   */
  export type QuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
  }


  /**
   * Model StaffMember
   */

  export type AggregateStaffMember = {
    _count: StaffMemberCountAggregateOutputType | null
    _min: StaffMemberMinAggregateOutputType | null
    _max: StaffMemberMaxAggregateOutputType | null
  }

  export type StaffMemberMinAggregateOutputType = {
    id: string | null
    name: string | null
    passport: string | null
    discordHandle: string | null
    cargo: string | null
    createdAt: Date | null
  }

  export type StaffMemberMaxAggregateOutputType = {
    id: string | null
    name: string | null
    passport: string | null
    discordHandle: string | null
    cargo: string | null
    createdAt: Date | null
  }

  export type StaffMemberCountAggregateOutputType = {
    id: number
    name: number
    passport: number
    discordHandle: number
    cargo: number
    createdAt: number
    _all: number
  }


  export type StaffMemberMinAggregateInputType = {
    id?: true
    name?: true
    passport?: true
    discordHandle?: true
    cargo?: true
    createdAt?: true
  }

  export type StaffMemberMaxAggregateInputType = {
    id?: true
    name?: true
    passport?: true
    discordHandle?: true
    cargo?: true
    createdAt?: true
  }

  export type StaffMemberCountAggregateInputType = {
    id?: true
    name?: true
    passport?: true
    discordHandle?: true
    cargo?: true
    createdAt?: true
    _all?: true
  }

  export type StaffMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StaffMember to aggregate.
     */
    where?: StaffMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffMembers to fetch.
     */
    orderBy?: StaffMemberOrderByWithRelationInput | StaffMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StaffMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StaffMembers
    **/
    _count?: true | StaffMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaffMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaffMemberMaxAggregateInputType
  }

  export type GetStaffMemberAggregateType<T extends StaffMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateStaffMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaffMember[P]>
      : GetScalarType<T[P], AggregateStaffMember[P]>
  }




  export type StaffMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffMemberWhereInput
    orderBy?: StaffMemberOrderByWithAggregationInput | StaffMemberOrderByWithAggregationInput[]
    by: StaffMemberScalarFieldEnum[] | StaffMemberScalarFieldEnum
    having?: StaffMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaffMemberCountAggregateInputType | true
    _min?: StaffMemberMinAggregateInputType
    _max?: StaffMemberMaxAggregateInputType
  }

  export type StaffMemberGroupByOutputType = {
    id: string
    name: string
    passport: string
    discordHandle: string
    cargo: string
    createdAt: Date
    _count: StaffMemberCountAggregateOutputType | null
    _min: StaffMemberMinAggregateOutputType | null
    _max: StaffMemberMaxAggregateOutputType | null
  }

  type GetStaffMemberGroupByPayload<T extends StaffMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaffMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaffMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaffMemberGroupByOutputType[P]>
            : GetScalarType<T[P], StaffMemberGroupByOutputType[P]>
        }
      >
    >


  export type StaffMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    passport?: boolean
    discordHandle?: boolean
    cargo?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["staffMember"]>

  export type StaffMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    passport?: boolean
    discordHandle?: boolean
    cargo?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["staffMember"]>

  export type StaffMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    passport?: boolean
    discordHandle?: boolean
    cargo?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["staffMember"]>

  export type StaffMemberSelectScalar = {
    id?: boolean
    name?: boolean
    passport?: boolean
    discordHandle?: boolean
    cargo?: boolean
    createdAt?: boolean
  }

  export type StaffMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "passport" | "discordHandle" | "cargo" | "createdAt", ExtArgs["result"]["staffMember"]>

  export type $StaffMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StaffMember"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      passport: string
      discordHandle: string
      cargo: string
      createdAt: Date
    }, ExtArgs["result"]["staffMember"]>
    composites: {}
  }

  type StaffMemberGetPayload<S extends boolean | null | undefined | StaffMemberDefaultArgs> = $Result.GetResult<Prisma.$StaffMemberPayload, S>

  type StaffMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StaffMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StaffMemberCountAggregateInputType | true
    }

  export interface StaffMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StaffMember'], meta: { name: 'StaffMember' } }
    /**
     * Find zero or one StaffMember that matches the filter.
     * @param {StaffMemberFindUniqueArgs} args - Arguments to find a StaffMember
     * @example
     * // Get one StaffMember
     * const staffMember = await prisma.staffMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StaffMemberFindUniqueArgs>(args: SelectSubset<T, StaffMemberFindUniqueArgs<ExtArgs>>): Prisma__StaffMemberClient<$Result.GetResult<Prisma.$StaffMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StaffMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StaffMemberFindUniqueOrThrowArgs} args - Arguments to find a StaffMember
     * @example
     * // Get one StaffMember
     * const staffMember = await prisma.staffMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StaffMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, StaffMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StaffMemberClient<$Result.GetResult<Prisma.$StaffMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StaffMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffMemberFindFirstArgs} args - Arguments to find a StaffMember
     * @example
     * // Get one StaffMember
     * const staffMember = await prisma.staffMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StaffMemberFindFirstArgs>(args?: SelectSubset<T, StaffMemberFindFirstArgs<ExtArgs>>): Prisma__StaffMemberClient<$Result.GetResult<Prisma.$StaffMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StaffMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffMemberFindFirstOrThrowArgs} args - Arguments to find a StaffMember
     * @example
     * // Get one StaffMember
     * const staffMember = await prisma.staffMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StaffMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, StaffMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__StaffMemberClient<$Result.GetResult<Prisma.$StaffMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StaffMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StaffMembers
     * const staffMembers = await prisma.staffMember.findMany()
     * 
     * // Get first 10 StaffMembers
     * const staffMembers = await prisma.staffMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const staffMemberWithIdOnly = await prisma.staffMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StaffMemberFindManyArgs>(args?: SelectSubset<T, StaffMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StaffMember.
     * @param {StaffMemberCreateArgs} args - Arguments to create a StaffMember.
     * @example
     * // Create one StaffMember
     * const StaffMember = await prisma.staffMember.create({
     *   data: {
     *     // ... data to create a StaffMember
     *   }
     * })
     * 
     */
    create<T extends StaffMemberCreateArgs>(args: SelectSubset<T, StaffMemberCreateArgs<ExtArgs>>): Prisma__StaffMemberClient<$Result.GetResult<Prisma.$StaffMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StaffMembers.
     * @param {StaffMemberCreateManyArgs} args - Arguments to create many StaffMembers.
     * @example
     * // Create many StaffMembers
     * const staffMember = await prisma.staffMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StaffMemberCreateManyArgs>(args?: SelectSubset<T, StaffMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StaffMembers and returns the data saved in the database.
     * @param {StaffMemberCreateManyAndReturnArgs} args - Arguments to create many StaffMembers.
     * @example
     * // Create many StaffMembers
     * const staffMember = await prisma.staffMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StaffMembers and only return the `id`
     * const staffMemberWithIdOnly = await prisma.staffMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StaffMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, StaffMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StaffMember.
     * @param {StaffMemberDeleteArgs} args - Arguments to delete one StaffMember.
     * @example
     * // Delete one StaffMember
     * const StaffMember = await prisma.staffMember.delete({
     *   where: {
     *     // ... filter to delete one StaffMember
     *   }
     * })
     * 
     */
    delete<T extends StaffMemberDeleteArgs>(args: SelectSubset<T, StaffMemberDeleteArgs<ExtArgs>>): Prisma__StaffMemberClient<$Result.GetResult<Prisma.$StaffMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StaffMember.
     * @param {StaffMemberUpdateArgs} args - Arguments to update one StaffMember.
     * @example
     * // Update one StaffMember
     * const staffMember = await prisma.staffMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StaffMemberUpdateArgs>(args: SelectSubset<T, StaffMemberUpdateArgs<ExtArgs>>): Prisma__StaffMemberClient<$Result.GetResult<Prisma.$StaffMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StaffMembers.
     * @param {StaffMemberDeleteManyArgs} args - Arguments to filter StaffMembers to delete.
     * @example
     * // Delete a few StaffMembers
     * const { count } = await prisma.staffMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StaffMemberDeleteManyArgs>(args?: SelectSubset<T, StaffMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StaffMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StaffMembers
     * const staffMember = await prisma.staffMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StaffMemberUpdateManyArgs>(args: SelectSubset<T, StaffMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StaffMembers and returns the data updated in the database.
     * @param {StaffMemberUpdateManyAndReturnArgs} args - Arguments to update many StaffMembers.
     * @example
     * // Update many StaffMembers
     * const staffMember = await prisma.staffMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StaffMembers and only return the `id`
     * const staffMemberWithIdOnly = await prisma.staffMember.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StaffMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, StaffMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StaffMember.
     * @param {StaffMemberUpsertArgs} args - Arguments to update or create a StaffMember.
     * @example
     * // Update or create a StaffMember
     * const staffMember = await prisma.staffMember.upsert({
     *   create: {
     *     // ... data to create a StaffMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StaffMember we want to update
     *   }
     * })
     */
    upsert<T extends StaffMemberUpsertArgs>(args: SelectSubset<T, StaffMemberUpsertArgs<ExtArgs>>): Prisma__StaffMemberClient<$Result.GetResult<Prisma.$StaffMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StaffMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffMemberCountArgs} args - Arguments to filter StaffMembers to count.
     * @example
     * // Count the number of StaffMembers
     * const count = await prisma.staffMember.count({
     *   where: {
     *     // ... the filter for the StaffMembers we want to count
     *   }
     * })
    **/
    count<T extends StaffMemberCountArgs>(
      args?: Subset<T, StaffMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StaffMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StaffMemberAggregateArgs>(args: Subset<T, StaffMemberAggregateArgs>): Prisma.PrismaPromise<GetStaffMemberAggregateType<T>>

    /**
     * Group by StaffMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StaffMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StaffMemberGroupByArgs['orderBy'] }
        : { orderBy?: StaffMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StaffMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StaffMember model
   */
  readonly fields: StaffMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StaffMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StaffMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StaffMember model
   */
  interface StaffMemberFieldRefs {
    readonly id: FieldRef<"StaffMember", 'String'>
    readonly name: FieldRef<"StaffMember", 'String'>
    readonly passport: FieldRef<"StaffMember", 'String'>
    readonly discordHandle: FieldRef<"StaffMember", 'String'>
    readonly cargo: FieldRef<"StaffMember", 'String'>
    readonly createdAt: FieldRef<"StaffMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StaffMember findUnique
   */
  export type StaffMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffMember
     */
    select?: StaffMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffMember
     */
    omit?: StaffMemberOmit<ExtArgs> | null
    /**
     * Filter, which StaffMember to fetch.
     */
    where: StaffMemberWhereUniqueInput
  }

  /**
   * StaffMember findUniqueOrThrow
   */
  export type StaffMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffMember
     */
    select?: StaffMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffMember
     */
    omit?: StaffMemberOmit<ExtArgs> | null
    /**
     * Filter, which StaffMember to fetch.
     */
    where: StaffMemberWhereUniqueInput
  }

  /**
   * StaffMember findFirst
   */
  export type StaffMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffMember
     */
    select?: StaffMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffMember
     */
    omit?: StaffMemberOmit<ExtArgs> | null
    /**
     * Filter, which StaffMember to fetch.
     */
    where?: StaffMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffMembers to fetch.
     */
    orderBy?: StaffMemberOrderByWithRelationInput | StaffMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StaffMembers.
     */
    cursor?: StaffMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaffMembers.
     */
    distinct?: StaffMemberScalarFieldEnum | StaffMemberScalarFieldEnum[]
  }

  /**
   * StaffMember findFirstOrThrow
   */
  export type StaffMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffMember
     */
    select?: StaffMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffMember
     */
    omit?: StaffMemberOmit<ExtArgs> | null
    /**
     * Filter, which StaffMember to fetch.
     */
    where?: StaffMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffMembers to fetch.
     */
    orderBy?: StaffMemberOrderByWithRelationInput | StaffMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StaffMembers.
     */
    cursor?: StaffMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaffMembers.
     */
    distinct?: StaffMemberScalarFieldEnum | StaffMemberScalarFieldEnum[]
  }

  /**
   * StaffMember findMany
   */
  export type StaffMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffMember
     */
    select?: StaffMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffMember
     */
    omit?: StaffMemberOmit<ExtArgs> | null
    /**
     * Filter, which StaffMembers to fetch.
     */
    where?: StaffMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffMembers to fetch.
     */
    orderBy?: StaffMemberOrderByWithRelationInput | StaffMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StaffMembers.
     */
    cursor?: StaffMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaffMembers.
     */
    distinct?: StaffMemberScalarFieldEnum | StaffMemberScalarFieldEnum[]
  }

  /**
   * StaffMember create
   */
  export type StaffMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffMember
     */
    select?: StaffMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffMember
     */
    omit?: StaffMemberOmit<ExtArgs> | null
    /**
     * The data needed to create a StaffMember.
     */
    data: XOR<StaffMemberCreateInput, StaffMemberUncheckedCreateInput>
  }

  /**
   * StaffMember createMany
   */
  export type StaffMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StaffMembers.
     */
    data: StaffMemberCreateManyInput | StaffMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StaffMember createManyAndReturn
   */
  export type StaffMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffMember
     */
    select?: StaffMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StaffMember
     */
    omit?: StaffMemberOmit<ExtArgs> | null
    /**
     * The data used to create many StaffMembers.
     */
    data: StaffMemberCreateManyInput | StaffMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StaffMember update
   */
  export type StaffMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffMember
     */
    select?: StaffMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffMember
     */
    omit?: StaffMemberOmit<ExtArgs> | null
    /**
     * The data needed to update a StaffMember.
     */
    data: XOR<StaffMemberUpdateInput, StaffMemberUncheckedUpdateInput>
    /**
     * Choose, which StaffMember to update.
     */
    where: StaffMemberWhereUniqueInput
  }

  /**
   * StaffMember updateMany
   */
  export type StaffMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StaffMembers.
     */
    data: XOR<StaffMemberUpdateManyMutationInput, StaffMemberUncheckedUpdateManyInput>
    /**
     * Filter which StaffMembers to update
     */
    where?: StaffMemberWhereInput
    /**
     * Limit how many StaffMembers to update.
     */
    limit?: number
  }

  /**
   * StaffMember updateManyAndReturn
   */
  export type StaffMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffMember
     */
    select?: StaffMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StaffMember
     */
    omit?: StaffMemberOmit<ExtArgs> | null
    /**
     * The data used to update StaffMembers.
     */
    data: XOR<StaffMemberUpdateManyMutationInput, StaffMemberUncheckedUpdateManyInput>
    /**
     * Filter which StaffMembers to update
     */
    where?: StaffMemberWhereInput
    /**
     * Limit how many StaffMembers to update.
     */
    limit?: number
  }

  /**
   * StaffMember upsert
   */
  export type StaffMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffMember
     */
    select?: StaffMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffMember
     */
    omit?: StaffMemberOmit<ExtArgs> | null
    /**
     * The filter to search for the StaffMember to update in case it exists.
     */
    where: StaffMemberWhereUniqueInput
    /**
     * In case the StaffMember found by the `where` argument doesn't exist, create a new StaffMember with this data.
     */
    create: XOR<StaffMemberCreateInput, StaffMemberUncheckedCreateInput>
    /**
     * In case the StaffMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StaffMemberUpdateInput, StaffMemberUncheckedUpdateInput>
  }

  /**
   * StaffMember delete
   */
  export type StaffMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffMember
     */
    select?: StaffMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffMember
     */
    omit?: StaffMemberOmit<ExtArgs> | null
    /**
     * Filter which StaffMember to delete.
     */
    where: StaffMemberWhereUniqueInput
  }

  /**
   * StaffMember deleteMany
   */
  export type StaffMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StaffMembers to delete
     */
    where?: StaffMemberWhereInput
    /**
     * Limit how many StaffMembers to delete.
     */
    limit?: number
  }

  /**
   * StaffMember without action
   */
  export type StaffMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffMember
     */
    select?: StaffMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffMember
     */
    omit?: StaffMemberOmit<ExtArgs> | null
  }


  /**
   * Model ActivityLog
   */

  export type AggregateActivityLog = {
    _count: ActivityLogCountAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  export type ActivityLogMinAggregateOutputType = {
    id: string | null
    type: $Enums.ActivityLogType | null
    title: string | null
    detail: string | null
    userRankAtTime: $Enums.Rank | null
    userId: string | null
    timestamp: Date | null
  }

  export type ActivityLogMaxAggregateOutputType = {
    id: string | null
    type: $Enums.ActivityLogType | null
    title: string | null
    detail: string | null
    userRankAtTime: $Enums.Rank | null
    userId: string | null
    timestamp: Date | null
  }

  export type ActivityLogCountAggregateOutputType = {
    id: number
    type: number
    title: number
    detail: number
    userRankAtTime: number
    userId: number
    timestamp: number
    _all: number
  }


  export type ActivityLogMinAggregateInputType = {
    id?: true
    type?: true
    title?: true
    detail?: true
    userRankAtTime?: true
    userId?: true
    timestamp?: true
  }

  export type ActivityLogMaxAggregateInputType = {
    id?: true
    type?: true
    title?: true
    detail?: true
    userRankAtTime?: true
    userId?: true
    timestamp?: true
  }

  export type ActivityLogCountAggregateInputType = {
    id?: true
    type?: true
    title?: true
    detail?: true
    userRankAtTime?: true
    userId?: true
    timestamp?: true
    _all?: true
  }

  export type ActivityLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLog to aggregate.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActivityLogs
    **/
    _count?: true | ActivityLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityLogMaxAggregateInputType
  }

  export type GetActivityLogAggregateType<T extends ActivityLogAggregateArgs> = {
        [P in keyof T & keyof AggregateActivityLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivityLog[P]>
      : GetScalarType<T[P], AggregateActivityLog[P]>
  }




  export type ActivityLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithAggregationInput | ActivityLogOrderByWithAggregationInput[]
    by: ActivityLogScalarFieldEnum[] | ActivityLogScalarFieldEnum
    having?: ActivityLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityLogCountAggregateInputType | true
    _min?: ActivityLogMinAggregateInputType
    _max?: ActivityLogMaxAggregateInputType
  }

  export type ActivityLogGroupByOutputType = {
    id: string
    type: $Enums.ActivityLogType
    title: string
    detail: string
    userRankAtTime: $Enums.Rank | null
    userId: string | null
    timestamp: Date
    _count: ActivityLogCountAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  type GetActivityLogGroupByPayload<T extends ActivityLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
        }
      >
    >


  export type ActivityLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    detail?: boolean
    userRankAtTime?: boolean
    userId?: boolean
    timestamp?: boolean
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    detail?: boolean
    userRankAtTime?: boolean
    userId?: boolean
    timestamp?: boolean
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    detail?: boolean
    userRankAtTime?: boolean
    userId?: boolean
    timestamp?: boolean
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectScalar = {
    id?: boolean
    type?: boolean
    title?: boolean
    detail?: boolean
    userRankAtTime?: boolean
    userId?: boolean
    timestamp?: boolean
  }

  export type ActivityLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "title" | "detail" | "userRankAtTime" | "userId" | "timestamp", ExtArgs["result"]["activityLog"]>
  export type ActivityLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }
  export type ActivityLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }
  export type ActivityLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }

  export type $ActivityLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActivityLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.ActivityLogType
      title: string
      detail: string
      userRankAtTime: $Enums.Rank | null
      userId: string | null
      timestamp: Date
    }, ExtArgs["result"]["activityLog"]>
    composites: {}
  }

  type ActivityLogGetPayload<S extends boolean | null | undefined | ActivityLogDefaultArgs> = $Result.GetResult<Prisma.$ActivityLogPayload, S>

  type ActivityLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityLogCountAggregateInputType | true
    }

  export interface ActivityLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActivityLog'], meta: { name: 'ActivityLog' } }
    /**
     * Find zero or one ActivityLog that matches the filter.
     * @param {ActivityLogFindUniqueArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityLogFindUniqueArgs>(args: SelectSubset<T, ActivityLogFindUniqueArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActivityLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityLogFindUniqueOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityLogFindFirstArgs>(args?: SelectSubset<T, ActivityLogFindFirstArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActivityLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany()
     * 
     * // Get first 10 ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityLogFindManyArgs>(args?: SelectSubset<T, ActivityLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActivityLog.
     * @param {ActivityLogCreateArgs} args - Arguments to create a ActivityLog.
     * @example
     * // Create one ActivityLog
     * const ActivityLog = await prisma.activityLog.create({
     *   data: {
     *     // ... data to create a ActivityLog
     *   }
     * })
     * 
     */
    create<T extends ActivityLogCreateArgs>(args: SelectSubset<T, ActivityLogCreateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActivityLogs.
     * @param {ActivityLogCreateManyArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityLogCreateManyArgs>(args?: SelectSubset<T, ActivityLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActivityLogs and returns the data saved in the database.
     * @param {ActivityLogCreateManyAndReturnArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ActivityLog.
     * @param {ActivityLogDeleteArgs} args - Arguments to delete one ActivityLog.
     * @example
     * // Delete one ActivityLog
     * const ActivityLog = await prisma.activityLog.delete({
     *   where: {
     *     // ... filter to delete one ActivityLog
     *   }
     * })
     * 
     */
    delete<T extends ActivityLogDeleteArgs>(args: SelectSubset<T, ActivityLogDeleteArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActivityLog.
     * @param {ActivityLogUpdateArgs} args - Arguments to update one ActivityLog.
     * @example
     * // Update one ActivityLog
     * const activityLog = await prisma.activityLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityLogUpdateArgs>(args: SelectSubset<T, ActivityLogUpdateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActivityLogs.
     * @param {ActivityLogDeleteManyArgs} args - Arguments to filter ActivityLogs to delete.
     * @example
     * // Delete a few ActivityLogs
     * const { count } = await prisma.activityLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityLogDeleteManyArgs>(args?: SelectSubset<T, ActivityLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityLogUpdateManyArgs>(args: SelectSubset<T, ActivityLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs and returns the data updated in the database.
     * @param {ActivityLogUpdateManyAndReturnArgs} args - Arguments to update many ActivityLogs.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActivityLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivityLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ActivityLog.
     * @param {ActivityLogUpsertArgs} args - Arguments to update or create a ActivityLog.
     * @example
     * // Update or create a ActivityLog
     * const activityLog = await prisma.activityLog.upsert({
     *   create: {
     *     // ... data to create a ActivityLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivityLog we want to update
     *   }
     * })
     */
    upsert<T extends ActivityLogUpsertArgs>(args: SelectSubset<T, ActivityLogUpsertArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogCountArgs} args - Arguments to filter ActivityLogs to count.
     * @example
     * // Count the number of ActivityLogs
     * const count = await prisma.activityLog.count({
     *   where: {
     *     // ... the filter for the ActivityLogs we want to count
     *   }
     * })
    **/
    count<T extends ActivityLogCountArgs>(
      args?: Subset<T, ActivityLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActivityLogAggregateArgs>(args: Subset<T, ActivityLogAggregateArgs>): Prisma.PrismaPromise<GetActivityLogAggregateType<T>>

    /**
     * Group by ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActivityLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityLogGroupByArgs['orderBy'] }
        : { orderBy?: ActivityLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActivityLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActivityLog model
   */
  readonly fields: ActivityLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActivityLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends ActivityLog$userArgs<ExtArgs> = {}>(args?: Subset<T, ActivityLog$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ActivityLog model
   */
  interface ActivityLogFieldRefs {
    readonly id: FieldRef<"ActivityLog", 'String'>
    readonly type: FieldRef<"ActivityLog", 'ActivityLogType'>
    readonly title: FieldRef<"ActivityLog", 'String'>
    readonly detail: FieldRef<"ActivityLog", 'String'>
    readonly userRankAtTime: FieldRef<"ActivityLog", 'Rank'>
    readonly userId: FieldRef<"ActivityLog", 'String'>
    readonly timestamp: FieldRef<"ActivityLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ActivityLog findUnique
   */
  export type ActivityLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findUniqueOrThrow
   */
  export type ActivityLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findFirst
   */
  export type ActivityLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findFirstOrThrow
   */
  export type ActivityLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findMany
   */
  export type ActivityLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLogs to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog create
   */
  export type ActivityLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ActivityLog.
     */
    data: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
  }

  /**
   * ActivityLog createMany
   */
  export type ActivityLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActivityLog createManyAndReturn
   */
  export type ActivityLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityLog update
   */
  export type ActivityLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ActivityLog.
     */
    data: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
    /**
     * Choose, which ActivityLog to update.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog updateMany
   */
  export type ActivityLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number
  }

  /**
   * ActivityLog updateManyAndReturn
   */
  export type ActivityLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityLog upsert
   */
  export type ActivityLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ActivityLog to update in case it exists.
     */
    where: ActivityLogWhereUniqueInput
    /**
     * In case the ActivityLog found by the `where` argument doesn't exist, create a new ActivityLog with this data.
     */
    create: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
    /**
     * In case the ActivityLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
  }

  /**
   * ActivityLog delete
   */
  export type ActivityLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter which ActivityLog to delete.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog deleteMany
   */
  export type ActivityLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLogs to delete
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to delete.
     */
    limit?: number
  }

  /**
   * ActivityLog.user
   */
  export type ActivityLog$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ActivityLog without action
   */
  export type ActivityLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    discordId: 'discordId',
    username: 'username',
    discordNick: 'discordNick',
    avatarUrl: 'avatarUrl',
    rank: 'rank',
    isStaffMaster: 'isStaffMaster',
    characterName: 'characterName',
    passport: 'passport',
    badge: 'badge',
    status: 'status',
    arrestsCount: 'arrestsCount',
    warningsCount: 'warningsCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ArrestScalarFieldEnum: {
    id: 'id',
    qru: 'qru',
    passport: 'passport',
    bo: 'bo',
    unidade: 'unidade',
    outcome: 'outcome',
    imageUrl: 'imageUrl',
    date: 'date',
    createdAt: 'createdAt'
  };

  export type ArrestScalarFieldEnum = (typeof ArrestScalarFieldEnum)[keyof typeof ArrestScalarFieldEnum]


  export const ArrestOfficerScalarFieldEnum: {
    arrestId: 'arrestId',
    userId: 'userId'
  };

  export type ArrestOfficerScalarFieldEnum = (typeof ArrestOfficerScalarFieldEnum)[keyof typeof ArrestOfficerScalarFieldEnum]


  export const EvalRequestScalarFieldEnum: {
    id: 'id',
    studentName: 'studentName',
    studentPassport: 'studentPassport',
    startTime: 'startTime',
    endTime: 'endTime',
    date: 'date',
    dept: 'dept',
    evaluatorTarget: 'evaluatorTarget',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type EvalRequestScalarFieldEnum = (typeof EvalRequestScalarFieldEnum)[keyof typeof EvalRequestScalarFieldEnum]


  export const CompletedEvalScalarFieldEnum: {
    id: 'id',
    evalRequestId: 'evalRequestId',
    studentName: 'studentName',
    studentPassport: 'studentPassport',
    evaluator: 'evaluator',
    averageScore: 'averageScore',
    date: 'date',
    createdAt: 'createdAt'
  };

  export type CompletedEvalScalarFieldEnum = (typeof CompletedEvalScalarFieldEnum)[keyof typeof CompletedEvalScalarFieldEnum]


  export const EvalAnswerScalarFieldEnum: {
    id: 'id',
    completedEvalId: 'completedEvalId',
    questionText: 'questionText',
    score: 'score',
    comment: 'comment'
  };

  export type EvalAnswerScalarFieldEnum = (typeof EvalAnswerScalarFieldEnum)[keyof typeof EvalAnswerScalarFieldEnum]


  export const AbsenceScalarFieldEnum: {
    id: 'id',
    officer: 'officer',
    passport: 'passport',
    startDate: 'startDate',
    endDate: 'endDate',
    reason: 'reason',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type AbsenceScalarFieldEnum = (typeof AbsenceScalarFieldEnum)[keyof typeof AbsenceScalarFieldEnum]


  export const PromotionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    officerName: 'officerName',
    newRank: 'newRank',
    status: 'status',
    date: 'date',
    createdAt: 'createdAt'
  };

  export type PromotionScalarFieldEnum = (typeof PromotionScalarFieldEnum)[keyof typeof PromotionScalarFieldEnum]


  export const WarningScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    officerName: 'officerName',
    level: 'level',
    reason: 'reason',
    date: 'date',
    createdAt: 'createdAt'
  };

  export type WarningScalarFieldEnum = (typeof WarningScalarFieldEnum)[keyof typeof WarningScalarFieldEnum]


  export const UniformScalarFieldEnum: {
    id: 'id',
    title: 'title',
    badge: 'badge',
    imageUrl: 'imageUrl',
    details: 'details',
    order: 'order',
    createdAt: 'createdAt'
  };

  export type UniformScalarFieldEnum = (typeof UniformScalarFieldEnum)[keyof typeof UniformScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    text: 'text',
    order: 'order',
    createdAt: 'createdAt'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const StaffMemberScalarFieldEnum: {
    id: 'id',
    name: 'name',
    passport: 'passport',
    discordHandle: 'discordHandle',
    cargo: 'cargo',
    createdAt: 'createdAt'
  };

  export type StaffMemberScalarFieldEnum = (typeof StaffMemberScalarFieldEnum)[keyof typeof StaffMemberScalarFieldEnum]


  export const ActivityLogScalarFieldEnum: {
    id: 'id',
    type: 'type',
    title: 'title',
    detail: 'detail',
    userRankAtTime: 'userRankAtTime',
    userId: 'userId',
    timestamp: 'timestamp'
  };

  export type ActivityLogScalarFieldEnum = (typeof ActivityLogScalarFieldEnum)[keyof typeof ActivityLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Rank'
   */
  export type EnumRankFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rank'>
    


  /**
   * Reference to a field of type 'Rank[]'
   */
  export type ListEnumRankFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rank[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'OfficerStatus'
   */
  export type EnumOfficerStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OfficerStatus'>
    


  /**
   * Reference to a field of type 'OfficerStatus[]'
   */
  export type ListEnumOfficerStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OfficerStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ArrestOutcome'
   */
  export type EnumArrestOutcomeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ArrestOutcome'>
    


  /**
   * Reference to a field of type 'ArrestOutcome[]'
   */
  export type ListEnumArrestOutcomeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ArrestOutcome[]'>
    


  /**
   * Reference to a field of type 'EvalRequestStatus'
   */
  export type EnumEvalRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EvalRequestStatus'>
    


  /**
   * Reference to a field of type 'EvalRequestStatus[]'
   */
  export type ListEnumEvalRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EvalRequestStatus[]'>
    


  /**
   * Reference to a field of type 'RequestStatus'
   */
  export type EnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus'>
    


  /**
   * Reference to a field of type 'RequestStatus[]'
   */
  export type ListEnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus[]'>
    


  /**
   * Reference to a field of type 'WarningLevel'
   */
  export type EnumWarningLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WarningLevel'>
    


  /**
   * Reference to a field of type 'WarningLevel[]'
   */
  export type ListEnumWarningLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WarningLevel[]'>
    


  /**
   * Reference to a field of type 'ActivityLogType'
   */
  export type EnumActivityLogTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityLogType'>
    


  /**
   * Reference to a field of type 'ActivityLogType[]'
   */
  export type ListEnumActivityLogTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityLogType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    discordId?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    discordNick?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    rank?: EnumRankFilter<"User"> | $Enums.Rank
    isStaffMaster?: BoolFilter<"User"> | boolean
    characterName?: StringNullableFilter<"User"> | string | null
    passport?: StringNullableFilter<"User"> | string | null
    badge?: StringNullableFilter<"User"> | string | null
    status?: EnumOfficerStatusFilter<"User"> | $Enums.OfficerStatus
    arrestsCount?: IntFilter<"User"> | number
    warningsCount?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    activityLogs?: ActivityLogListRelationFilter
    arrests?: ArrestOfficerListRelationFilter
    promotions?: PromotionListRelationFilter
    warnings?: WarningListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    discordId?: SortOrder
    username?: SortOrder
    discordNick?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    rank?: SortOrder
    isStaffMaster?: SortOrder
    characterName?: SortOrderInput | SortOrder
    passport?: SortOrderInput | SortOrder
    badge?: SortOrderInput | SortOrder
    status?: SortOrder
    arrestsCount?: SortOrder
    warningsCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    activityLogs?: ActivityLogOrderByRelationAggregateInput
    arrests?: ArrestOfficerOrderByRelationAggregateInput
    promotions?: PromotionOrderByRelationAggregateInput
    warnings?: WarningOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    discordId?: string
    passport?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    discordNick?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    rank?: EnumRankFilter<"User"> | $Enums.Rank
    isStaffMaster?: BoolFilter<"User"> | boolean
    characterName?: StringNullableFilter<"User"> | string | null
    badge?: StringNullableFilter<"User"> | string | null
    status?: EnumOfficerStatusFilter<"User"> | $Enums.OfficerStatus
    arrestsCount?: IntFilter<"User"> | number
    warningsCount?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    activityLogs?: ActivityLogListRelationFilter
    arrests?: ArrestOfficerListRelationFilter
    promotions?: PromotionListRelationFilter
    warnings?: WarningListRelationFilter
  }, "id" | "discordId" | "passport">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    discordId?: SortOrder
    username?: SortOrder
    discordNick?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    rank?: SortOrder
    isStaffMaster?: SortOrder
    characterName?: SortOrderInput | SortOrder
    passport?: SortOrderInput | SortOrder
    badge?: SortOrderInput | SortOrder
    status?: SortOrder
    arrestsCount?: SortOrder
    warningsCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    discordId?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    discordNick?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    rank?: EnumRankWithAggregatesFilter<"User"> | $Enums.Rank
    isStaffMaster?: BoolWithAggregatesFilter<"User"> | boolean
    characterName?: StringNullableWithAggregatesFilter<"User"> | string | null
    passport?: StringNullableWithAggregatesFilter<"User"> | string | null
    badge?: StringNullableWithAggregatesFilter<"User"> | string | null
    status?: EnumOfficerStatusWithAggregatesFilter<"User"> | $Enums.OfficerStatus
    arrestsCount?: IntWithAggregatesFilter<"User"> | number
    warningsCount?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ArrestWhereInput = {
    AND?: ArrestWhereInput | ArrestWhereInput[]
    OR?: ArrestWhereInput[]
    NOT?: ArrestWhereInput | ArrestWhereInput[]
    id?: StringFilter<"Arrest"> | string
    qru?: StringFilter<"Arrest"> | string
    passport?: StringFilter<"Arrest"> | string
    bo?: StringFilter<"Arrest"> | string
    unidade?: StringFilter<"Arrest"> | string
    outcome?: EnumArrestOutcomeFilter<"Arrest"> | $Enums.ArrestOutcome
    imageUrl?: StringNullableFilter<"Arrest"> | string | null
    date?: DateTimeFilter<"Arrest"> | Date | string
    createdAt?: DateTimeFilter<"Arrest"> | Date | string
    officers?: ArrestOfficerListRelationFilter
  }

  export type ArrestOrderByWithRelationInput = {
    id?: SortOrder
    qru?: SortOrder
    passport?: SortOrder
    bo?: SortOrder
    unidade?: SortOrder
    outcome?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    officers?: ArrestOfficerOrderByRelationAggregateInput
  }

  export type ArrestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ArrestWhereInput | ArrestWhereInput[]
    OR?: ArrestWhereInput[]
    NOT?: ArrestWhereInput | ArrestWhereInput[]
    qru?: StringFilter<"Arrest"> | string
    passport?: StringFilter<"Arrest"> | string
    bo?: StringFilter<"Arrest"> | string
    unidade?: StringFilter<"Arrest"> | string
    outcome?: EnumArrestOutcomeFilter<"Arrest"> | $Enums.ArrestOutcome
    imageUrl?: StringNullableFilter<"Arrest"> | string | null
    date?: DateTimeFilter<"Arrest"> | Date | string
    createdAt?: DateTimeFilter<"Arrest"> | Date | string
    officers?: ArrestOfficerListRelationFilter
  }, "id">

  export type ArrestOrderByWithAggregationInput = {
    id?: SortOrder
    qru?: SortOrder
    passport?: SortOrder
    bo?: SortOrder
    unidade?: SortOrder
    outcome?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    _count?: ArrestCountOrderByAggregateInput
    _max?: ArrestMaxOrderByAggregateInput
    _min?: ArrestMinOrderByAggregateInput
  }

  export type ArrestScalarWhereWithAggregatesInput = {
    AND?: ArrestScalarWhereWithAggregatesInput | ArrestScalarWhereWithAggregatesInput[]
    OR?: ArrestScalarWhereWithAggregatesInput[]
    NOT?: ArrestScalarWhereWithAggregatesInput | ArrestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Arrest"> | string
    qru?: StringWithAggregatesFilter<"Arrest"> | string
    passport?: StringWithAggregatesFilter<"Arrest"> | string
    bo?: StringWithAggregatesFilter<"Arrest"> | string
    unidade?: StringWithAggregatesFilter<"Arrest"> | string
    outcome?: EnumArrestOutcomeWithAggregatesFilter<"Arrest"> | $Enums.ArrestOutcome
    imageUrl?: StringNullableWithAggregatesFilter<"Arrest"> | string | null
    date?: DateTimeWithAggregatesFilter<"Arrest"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Arrest"> | Date | string
  }

  export type ArrestOfficerWhereInput = {
    AND?: ArrestOfficerWhereInput | ArrestOfficerWhereInput[]
    OR?: ArrestOfficerWhereInput[]
    NOT?: ArrestOfficerWhereInput | ArrestOfficerWhereInput[]
    arrestId?: StringFilter<"ArrestOfficer"> | string
    userId?: StringFilter<"ArrestOfficer"> | string
    arrest?: XOR<ArrestScalarRelationFilter, ArrestWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ArrestOfficerOrderByWithRelationInput = {
    arrestId?: SortOrder
    userId?: SortOrder
    arrest?: ArrestOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ArrestOfficerWhereUniqueInput = Prisma.AtLeast<{
    arrestId_userId?: ArrestOfficerArrestIdUserIdCompoundUniqueInput
    AND?: ArrestOfficerWhereInput | ArrestOfficerWhereInput[]
    OR?: ArrestOfficerWhereInput[]
    NOT?: ArrestOfficerWhereInput | ArrestOfficerWhereInput[]
    arrestId?: StringFilter<"ArrestOfficer"> | string
    userId?: StringFilter<"ArrestOfficer"> | string
    arrest?: XOR<ArrestScalarRelationFilter, ArrestWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "arrestId_userId">

  export type ArrestOfficerOrderByWithAggregationInput = {
    arrestId?: SortOrder
    userId?: SortOrder
    _count?: ArrestOfficerCountOrderByAggregateInput
    _max?: ArrestOfficerMaxOrderByAggregateInput
    _min?: ArrestOfficerMinOrderByAggregateInput
  }

  export type ArrestOfficerScalarWhereWithAggregatesInput = {
    AND?: ArrestOfficerScalarWhereWithAggregatesInput | ArrestOfficerScalarWhereWithAggregatesInput[]
    OR?: ArrestOfficerScalarWhereWithAggregatesInput[]
    NOT?: ArrestOfficerScalarWhereWithAggregatesInput | ArrestOfficerScalarWhereWithAggregatesInput[]
    arrestId?: StringWithAggregatesFilter<"ArrestOfficer"> | string
    userId?: StringWithAggregatesFilter<"ArrestOfficer"> | string
  }

  export type EvalRequestWhereInput = {
    AND?: EvalRequestWhereInput | EvalRequestWhereInput[]
    OR?: EvalRequestWhereInput[]
    NOT?: EvalRequestWhereInput | EvalRequestWhereInput[]
    id?: StringFilter<"EvalRequest"> | string
    studentName?: StringFilter<"EvalRequest"> | string
    studentPassport?: StringFilter<"EvalRequest"> | string
    startTime?: StringFilter<"EvalRequest"> | string
    endTime?: StringFilter<"EvalRequest"> | string
    date?: StringFilter<"EvalRequest"> | string
    dept?: StringFilter<"EvalRequest"> | string
    evaluatorTarget?: StringFilter<"EvalRequest"> | string
    status?: EnumEvalRequestStatusFilter<"EvalRequest"> | $Enums.EvalRequestStatus
    createdAt?: DateTimeFilter<"EvalRequest"> | Date | string
    completedEval?: XOR<CompletedEvalNullableScalarRelationFilter, CompletedEvalWhereInput> | null
  }

  export type EvalRequestOrderByWithRelationInput = {
    id?: SortOrder
    studentName?: SortOrder
    studentPassport?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    date?: SortOrder
    dept?: SortOrder
    evaluatorTarget?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    completedEval?: CompletedEvalOrderByWithRelationInput
  }

  export type EvalRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EvalRequestWhereInput | EvalRequestWhereInput[]
    OR?: EvalRequestWhereInput[]
    NOT?: EvalRequestWhereInput | EvalRequestWhereInput[]
    studentName?: StringFilter<"EvalRequest"> | string
    studentPassport?: StringFilter<"EvalRequest"> | string
    startTime?: StringFilter<"EvalRequest"> | string
    endTime?: StringFilter<"EvalRequest"> | string
    date?: StringFilter<"EvalRequest"> | string
    dept?: StringFilter<"EvalRequest"> | string
    evaluatorTarget?: StringFilter<"EvalRequest"> | string
    status?: EnumEvalRequestStatusFilter<"EvalRequest"> | $Enums.EvalRequestStatus
    createdAt?: DateTimeFilter<"EvalRequest"> | Date | string
    completedEval?: XOR<CompletedEvalNullableScalarRelationFilter, CompletedEvalWhereInput> | null
  }, "id">

  export type EvalRequestOrderByWithAggregationInput = {
    id?: SortOrder
    studentName?: SortOrder
    studentPassport?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    date?: SortOrder
    dept?: SortOrder
    evaluatorTarget?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: EvalRequestCountOrderByAggregateInput
    _max?: EvalRequestMaxOrderByAggregateInput
    _min?: EvalRequestMinOrderByAggregateInput
  }

  export type EvalRequestScalarWhereWithAggregatesInput = {
    AND?: EvalRequestScalarWhereWithAggregatesInput | EvalRequestScalarWhereWithAggregatesInput[]
    OR?: EvalRequestScalarWhereWithAggregatesInput[]
    NOT?: EvalRequestScalarWhereWithAggregatesInput | EvalRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EvalRequest"> | string
    studentName?: StringWithAggregatesFilter<"EvalRequest"> | string
    studentPassport?: StringWithAggregatesFilter<"EvalRequest"> | string
    startTime?: StringWithAggregatesFilter<"EvalRequest"> | string
    endTime?: StringWithAggregatesFilter<"EvalRequest"> | string
    date?: StringWithAggregatesFilter<"EvalRequest"> | string
    dept?: StringWithAggregatesFilter<"EvalRequest"> | string
    evaluatorTarget?: StringWithAggregatesFilter<"EvalRequest"> | string
    status?: EnumEvalRequestStatusWithAggregatesFilter<"EvalRequest"> | $Enums.EvalRequestStatus
    createdAt?: DateTimeWithAggregatesFilter<"EvalRequest"> | Date | string
  }

  export type CompletedEvalWhereInput = {
    AND?: CompletedEvalWhereInput | CompletedEvalWhereInput[]
    OR?: CompletedEvalWhereInput[]
    NOT?: CompletedEvalWhereInput | CompletedEvalWhereInput[]
    id?: StringFilter<"CompletedEval"> | string
    evalRequestId?: StringFilter<"CompletedEval"> | string
    studentName?: StringFilter<"CompletedEval"> | string
    studentPassport?: StringFilter<"CompletedEval"> | string
    evaluator?: StringFilter<"CompletedEval"> | string
    averageScore?: StringFilter<"CompletedEval"> | string
    date?: StringFilter<"CompletedEval"> | string
    createdAt?: DateTimeFilter<"CompletedEval"> | Date | string
    evalRequest?: XOR<EvalRequestScalarRelationFilter, EvalRequestWhereInput>
    answers?: EvalAnswerListRelationFilter
  }

  export type CompletedEvalOrderByWithRelationInput = {
    id?: SortOrder
    evalRequestId?: SortOrder
    studentName?: SortOrder
    studentPassport?: SortOrder
    evaluator?: SortOrder
    averageScore?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    evalRequest?: EvalRequestOrderByWithRelationInput
    answers?: EvalAnswerOrderByRelationAggregateInput
  }

  export type CompletedEvalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    evalRequestId?: string
    AND?: CompletedEvalWhereInput | CompletedEvalWhereInput[]
    OR?: CompletedEvalWhereInput[]
    NOT?: CompletedEvalWhereInput | CompletedEvalWhereInput[]
    studentName?: StringFilter<"CompletedEval"> | string
    studentPassport?: StringFilter<"CompletedEval"> | string
    evaluator?: StringFilter<"CompletedEval"> | string
    averageScore?: StringFilter<"CompletedEval"> | string
    date?: StringFilter<"CompletedEval"> | string
    createdAt?: DateTimeFilter<"CompletedEval"> | Date | string
    evalRequest?: XOR<EvalRequestScalarRelationFilter, EvalRequestWhereInput>
    answers?: EvalAnswerListRelationFilter
  }, "id" | "evalRequestId">

  export type CompletedEvalOrderByWithAggregationInput = {
    id?: SortOrder
    evalRequestId?: SortOrder
    studentName?: SortOrder
    studentPassport?: SortOrder
    evaluator?: SortOrder
    averageScore?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    _count?: CompletedEvalCountOrderByAggregateInput
    _max?: CompletedEvalMaxOrderByAggregateInput
    _min?: CompletedEvalMinOrderByAggregateInput
  }

  export type CompletedEvalScalarWhereWithAggregatesInput = {
    AND?: CompletedEvalScalarWhereWithAggregatesInput | CompletedEvalScalarWhereWithAggregatesInput[]
    OR?: CompletedEvalScalarWhereWithAggregatesInput[]
    NOT?: CompletedEvalScalarWhereWithAggregatesInput | CompletedEvalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CompletedEval"> | string
    evalRequestId?: StringWithAggregatesFilter<"CompletedEval"> | string
    studentName?: StringWithAggregatesFilter<"CompletedEval"> | string
    studentPassport?: StringWithAggregatesFilter<"CompletedEval"> | string
    evaluator?: StringWithAggregatesFilter<"CompletedEval"> | string
    averageScore?: StringWithAggregatesFilter<"CompletedEval"> | string
    date?: StringWithAggregatesFilter<"CompletedEval"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CompletedEval"> | Date | string
  }

  export type EvalAnswerWhereInput = {
    AND?: EvalAnswerWhereInput | EvalAnswerWhereInput[]
    OR?: EvalAnswerWhereInput[]
    NOT?: EvalAnswerWhereInput | EvalAnswerWhereInput[]
    id?: StringFilter<"EvalAnswer"> | string
    completedEvalId?: StringFilter<"EvalAnswer"> | string
    questionText?: StringFilter<"EvalAnswer"> | string
    score?: IntFilter<"EvalAnswer"> | number
    comment?: StringNullableFilter<"EvalAnswer"> | string | null
    completedEval?: XOR<CompletedEvalScalarRelationFilter, CompletedEvalWhereInput>
  }

  export type EvalAnswerOrderByWithRelationInput = {
    id?: SortOrder
    completedEvalId?: SortOrder
    questionText?: SortOrder
    score?: SortOrder
    comment?: SortOrderInput | SortOrder
    completedEval?: CompletedEvalOrderByWithRelationInput
  }

  export type EvalAnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EvalAnswerWhereInput | EvalAnswerWhereInput[]
    OR?: EvalAnswerWhereInput[]
    NOT?: EvalAnswerWhereInput | EvalAnswerWhereInput[]
    completedEvalId?: StringFilter<"EvalAnswer"> | string
    questionText?: StringFilter<"EvalAnswer"> | string
    score?: IntFilter<"EvalAnswer"> | number
    comment?: StringNullableFilter<"EvalAnswer"> | string | null
    completedEval?: XOR<CompletedEvalScalarRelationFilter, CompletedEvalWhereInput>
  }, "id">

  export type EvalAnswerOrderByWithAggregationInput = {
    id?: SortOrder
    completedEvalId?: SortOrder
    questionText?: SortOrder
    score?: SortOrder
    comment?: SortOrderInput | SortOrder
    _count?: EvalAnswerCountOrderByAggregateInput
    _avg?: EvalAnswerAvgOrderByAggregateInput
    _max?: EvalAnswerMaxOrderByAggregateInput
    _min?: EvalAnswerMinOrderByAggregateInput
    _sum?: EvalAnswerSumOrderByAggregateInput
  }

  export type EvalAnswerScalarWhereWithAggregatesInput = {
    AND?: EvalAnswerScalarWhereWithAggregatesInput | EvalAnswerScalarWhereWithAggregatesInput[]
    OR?: EvalAnswerScalarWhereWithAggregatesInput[]
    NOT?: EvalAnswerScalarWhereWithAggregatesInput | EvalAnswerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EvalAnswer"> | string
    completedEvalId?: StringWithAggregatesFilter<"EvalAnswer"> | string
    questionText?: StringWithAggregatesFilter<"EvalAnswer"> | string
    score?: IntWithAggregatesFilter<"EvalAnswer"> | number
    comment?: StringNullableWithAggregatesFilter<"EvalAnswer"> | string | null
  }

  export type AbsenceWhereInput = {
    AND?: AbsenceWhereInput | AbsenceWhereInput[]
    OR?: AbsenceWhereInput[]
    NOT?: AbsenceWhereInput | AbsenceWhereInput[]
    id?: StringFilter<"Absence"> | string
    officer?: StringFilter<"Absence"> | string
    passport?: StringFilter<"Absence"> | string
    startDate?: StringFilter<"Absence"> | string
    endDate?: StringFilter<"Absence"> | string
    reason?: StringFilter<"Absence"> | string
    status?: EnumRequestStatusFilter<"Absence"> | $Enums.RequestStatus
    createdAt?: DateTimeFilter<"Absence"> | Date | string
  }

  export type AbsenceOrderByWithRelationInput = {
    id?: SortOrder
    officer?: SortOrder
    passport?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type AbsenceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AbsenceWhereInput | AbsenceWhereInput[]
    OR?: AbsenceWhereInput[]
    NOT?: AbsenceWhereInput | AbsenceWhereInput[]
    officer?: StringFilter<"Absence"> | string
    passport?: StringFilter<"Absence"> | string
    startDate?: StringFilter<"Absence"> | string
    endDate?: StringFilter<"Absence"> | string
    reason?: StringFilter<"Absence"> | string
    status?: EnumRequestStatusFilter<"Absence"> | $Enums.RequestStatus
    createdAt?: DateTimeFilter<"Absence"> | Date | string
  }, "id">

  export type AbsenceOrderByWithAggregationInput = {
    id?: SortOrder
    officer?: SortOrder
    passport?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: AbsenceCountOrderByAggregateInput
    _max?: AbsenceMaxOrderByAggregateInput
    _min?: AbsenceMinOrderByAggregateInput
  }

  export type AbsenceScalarWhereWithAggregatesInput = {
    AND?: AbsenceScalarWhereWithAggregatesInput | AbsenceScalarWhereWithAggregatesInput[]
    OR?: AbsenceScalarWhereWithAggregatesInput[]
    NOT?: AbsenceScalarWhereWithAggregatesInput | AbsenceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Absence"> | string
    officer?: StringWithAggregatesFilter<"Absence"> | string
    passport?: StringWithAggregatesFilter<"Absence"> | string
    startDate?: StringWithAggregatesFilter<"Absence"> | string
    endDate?: StringWithAggregatesFilter<"Absence"> | string
    reason?: StringWithAggregatesFilter<"Absence"> | string
    status?: EnumRequestStatusWithAggregatesFilter<"Absence"> | $Enums.RequestStatus
    createdAt?: DateTimeWithAggregatesFilter<"Absence"> | Date | string
  }

  export type PromotionWhereInput = {
    AND?: PromotionWhereInput | PromotionWhereInput[]
    OR?: PromotionWhereInput[]
    NOT?: PromotionWhereInput | PromotionWhereInput[]
    id?: StringFilter<"Promotion"> | string
    userId?: StringNullableFilter<"Promotion"> | string | null
    officerName?: StringFilter<"Promotion"> | string
    newRank?: EnumRankFilter<"Promotion"> | $Enums.Rank
    status?: EnumRequestStatusFilter<"Promotion"> | $Enums.RequestStatus
    date?: StringFilter<"Promotion"> | string
    createdAt?: DateTimeFilter<"Promotion"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type PromotionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    officerName?: SortOrder
    newRank?: SortOrder
    status?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PromotionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PromotionWhereInput | PromotionWhereInput[]
    OR?: PromotionWhereInput[]
    NOT?: PromotionWhereInput | PromotionWhereInput[]
    userId?: StringNullableFilter<"Promotion"> | string | null
    officerName?: StringFilter<"Promotion"> | string
    newRank?: EnumRankFilter<"Promotion"> | $Enums.Rank
    status?: EnumRequestStatusFilter<"Promotion"> | $Enums.RequestStatus
    date?: StringFilter<"Promotion"> | string
    createdAt?: DateTimeFilter<"Promotion"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type PromotionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    officerName?: SortOrder
    newRank?: SortOrder
    status?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    _count?: PromotionCountOrderByAggregateInput
    _max?: PromotionMaxOrderByAggregateInput
    _min?: PromotionMinOrderByAggregateInput
  }

  export type PromotionScalarWhereWithAggregatesInput = {
    AND?: PromotionScalarWhereWithAggregatesInput | PromotionScalarWhereWithAggregatesInput[]
    OR?: PromotionScalarWhereWithAggregatesInput[]
    NOT?: PromotionScalarWhereWithAggregatesInput | PromotionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Promotion"> | string
    userId?: StringNullableWithAggregatesFilter<"Promotion"> | string | null
    officerName?: StringWithAggregatesFilter<"Promotion"> | string
    newRank?: EnumRankWithAggregatesFilter<"Promotion"> | $Enums.Rank
    status?: EnumRequestStatusWithAggregatesFilter<"Promotion"> | $Enums.RequestStatus
    date?: StringWithAggregatesFilter<"Promotion"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Promotion"> | Date | string
  }

  export type WarningWhereInput = {
    AND?: WarningWhereInput | WarningWhereInput[]
    OR?: WarningWhereInput[]
    NOT?: WarningWhereInput | WarningWhereInput[]
    id?: StringFilter<"Warning"> | string
    userId?: StringNullableFilter<"Warning"> | string | null
    officerName?: StringFilter<"Warning"> | string
    level?: EnumWarningLevelFilter<"Warning"> | $Enums.WarningLevel
    reason?: StringFilter<"Warning"> | string
    date?: StringFilter<"Warning"> | string
    createdAt?: DateTimeFilter<"Warning"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type WarningOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    officerName?: SortOrder
    level?: SortOrder
    reason?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type WarningWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WarningWhereInput | WarningWhereInput[]
    OR?: WarningWhereInput[]
    NOT?: WarningWhereInput | WarningWhereInput[]
    userId?: StringNullableFilter<"Warning"> | string | null
    officerName?: StringFilter<"Warning"> | string
    level?: EnumWarningLevelFilter<"Warning"> | $Enums.WarningLevel
    reason?: StringFilter<"Warning"> | string
    date?: StringFilter<"Warning"> | string
    createdAt?: DateTimeFilter<"Warning"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type WarningOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    officerName?: SortOrder
    level?: SortOrder
    reason?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    _count?: WarningCountOrderByAggregateInput
    _max?: WarningMaxOrderByAggregateInput
    _min?: WarningMinOrderByAggregateInput
  }

  export type WarningScalarWhereWithAggregatesInput = {
    AND?: WarningScalarWhereWithAggregatesInput | WarningScalarWhereWithAggregatesInput[]
    OR?: WarningScalarWhereWithAggregatesInput[]
    NOT?: WarningScalarWhereWithAggregatesInput | WarningScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Warning"> | string
    userId?: StringNullableWithAggregatesFilter<"Warning"> | string | null
    officerName?: StringWithAggregatesFilter<"Warning"> | string
    level?: EnumWarningLevelWithAggregatesFilter<"Warning"> | $Enums.WarningLevel
    reason?: StringWithAggregatesFilter<"Warning"> | string
    date?: StringWithAggregatesFilter<"Warning"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Warning"> | Date | string
  }

  export type UniformWhereInput = {
    AND?: UniformWhereInput | UniformWhereInput[]
    OR?: UniformWhereInput[]
    NOT?: UniformWhereInput | UniformWhereInput[]
    id?: StringFilter<"Uniform"> | string
    title?: StringFilter<"Uniform"> | string
    badge?: StringFilter<"Uniform"> | string
    imageUrl?: StringFilter<"Uniform"> | string
    details?: StringFilter<"Uniform"> | string
    order?: IntFilter<"Uniform"> | number
    createdAt?: DateTimeFilter<"Uniform"> | Date | string
  }

  export type UniformOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    badge?: SortOrder
    imageUrl?: SortOrder
    details?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type UniformWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UniformWhereInput | UniformWhereInput[]
    OR?: UniformWhereInput[]
    NOT?: UniformWhereInput | UniformWhereInput[]
    title?: StringFilter<"Uniform"> | string
    badge?: StringFilter<"Uniform"> | string
    imageUrl?: StringFilter<"Uniform"> | string
    details?: StringFilter<"Uniform"> | string
    order?: IntFilter<"Uniform"> | number
    createdAt?: DateTimeFilter<"Uniform"> | Date | string
  }, "id">

  export type UniformOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    badge?: SortOrder
    imageUrl?: SortOrder
    details?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    _count?: UniformCountOrderByAggregateInput
    _avg?: UniformAvgOrderByAggregateInput
    _max?: UniformMaxOrderByAggregateInput
    _min?: UniformMinOrderByAggregateInput
    _sum?: UniformSumOrderByAggregateInput
  }

  export type UniformScalarWhereWithAggregatesInput = {
    AND?: UniformScalarWhereWithAggregatesInput | UniformScalarWhereWithAggregatesInput[]
    OR?: UniformScalarWhereWithAggregatesInput[]
    NOT?: UniformScalarWhereWithAggregatesInput | UniformScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Uniform"> | string
    title?: StringWithAggregatesFilter<"Uniform"> | string
    badge?: StringWithAggregatesFilter<"Uniform"> | string
    imageUrl?: StringWithAggregatesFilter<"Uniform"> | string
    details?: StringWithAggregatesFilter<"Uniform"> | string
    order?: IntWithAggregatesFilter<"Uniform"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Uniform"> | Date | string
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: StringFilter<"Question"> | string
    text?: StringFilter<"Question"> | string
    order?: IntFilter<"Question"> | number
    createdAt?: DateTimeFilter<"Question"> | Date | string
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    text?: StringFilter<"Question"> | string
    order?: IntFilter<"Question"> | number
    createdAt?: DateTimeFilter<"Question"> | Date | string
  }, "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _avg?: QuestionAvgOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
    _sum?: QuestionSumOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Question"> | string
    text?: StringWithAggregatesFilter<"Question"> | string
    order?: IntWithAggregatesFilter<"Question"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
  }

  export type StaffMemberWhereInput = {
    AND?: StaffMemberWhereInput | StaffMemberWhereInput[]
    OR?: StaffMemberWhereInput[]
    NOT?: StaffMemberWhereInput | StaffMemberWhereInput[]
    id?: StringFilter<"StaffMember"> | string
    name?: StringFilter<"StaffMember"> | string
    passport?: StringFilter<"StaffMember"> | string
    discordHandle?: StringFilter<"StaffMember"> | string
    cargo?: StringFilter<"StaffMember"> | string
    createdAt?: DateTimeFilter<"StaffMember"> | Date | string
  }

  export type StaffMemberOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    passport?: SortOrder
    discordHandle?: SortOrder
    cargo?: SortOrder
    createdAt?: SortOrder
  }

  export type StaffMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StaffMemberWhereInput | StaffMemberWhereInput[]
    OR?: StaffMemberWhereInput[]
    NOT?: StaffMemberWhereInput | StaffMemberWhereInput[]
    name?: StringFilter<"StaffMember"> | string
    passport?: StringFilter<"StaffMember"> | string
    discordHandle?: StringFilter<"StaffMember"> | string
    cargo?: StringFilter<"StaffMember"> | string
    createdAt?: DateTimeFilter<"StaffMember"> | Date | string
  }, "id">

  export type StaffMemberOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    passport?: SortOrder
    discordHandle?: SortOrder
    cargo?: SortOrder
    createdAt?: SortOrder
    _count?: StaffMemberCountOrderByAggregateInput
    _max?: StaffMemberMaxOrderByAggregateInput
    _min?: StaffMemberMinOrderByAggregateInput
  }

  export type StaffMemberScalarWhereWithAggregatesInput = {
    AND?: StaffMemberScalarWhereWithAggregatesInput | StaffMemberScalarWhereWithAggregatesInput[]
    OR?: StaffMemberScalarWhereWithAggregatesInput[]
    NOT?: StaffMemberScalarWhereWithAggregatesInput | StaffMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StaffMember"> | string
    name?: StringWithAggregatesFilter<"StaffMember"> | string
    passport?: StringWithAggregatesFilter<"StaffMember"> | string
    discordHandle?: StringWithAggregatesFilter<"StaffMember"> | string
    cargo?: StringWithAggregatesFilter<"StaffMember"> | string
    createdAt?: DateTimeWithAggregatesFilter<"StaffMember"> | Date | string
  }

  export type ActivityLogWhereInput = {
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    id?: StringFilter<"ActivityLog"> | string
    type?: EnumActivityLogTypeFilter<"ActivityLog"> | $Enums.ActivityLogType
    title?: StringFilter<"ActivityLog"> | string
    detail?: StringFilter<"ActivityLog"> | string
    userRankAtTime?: EnumRankNullableFilter<"ActivityLog"> | $Enums.Rank | null
    userId?: StringNullableFilter<"ActivityLog"> | string | null
    timestamp?: DateTimeFilter<"ActivityLog"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ActivityLogOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    detail?: SortOrder
    userRankAtTime?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ActivityLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    type?: EnumActivityLogTypeFilter<"ActivityLog"> | $Enums.ActivityLogType
    title?: StringFilter<"ActivityLog"> | string
    detail?: StringFilter<"ActivityLog"> | string
    userRankAtTime?: EnumRankNullableFilter<"ActivityLog"> | $Enums.Rank | null
    userId?: StringNullableFilter<"ActivityLog"> | string | null
    timestamp?: DateTimeFilter<"ActivityLog"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type ActivityLogOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    detail?: SortOrder
    userRankAtTime?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    _count?: ActivityLogCountOrderByAggregateInput
    _max?: ActivityLogMaxOrderByAggregateInput
    _min?: ActivityLogMinOrderByAggregateInput
  }

  export type ActivityLogScalarWhereWithAggregatesInput = {
    AND?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    OR?: ActivityLogScalarWhereWithAggregatesInput[]
    NOT?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ActivityLog"> | string
    type?: EnumActivityLogTypeWithAggregatesFilter<"ActivityLog"> | $Enums.ActivityLogType
    title?: StringWithAggregatesFilter<"ActivityLog"> | string
    detail?: StringWithAggregatesFilter<"ActivityLog"> | string
    userRankAtTime?: EnumRankNullableWithAggregatesFilter<"ActivityLog"> | $Enums.Rank | null
    userId?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    timestamp?: DateTimeWithAggregatesFilter<"ActivityLog"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    discordId: string
    username: string
    discordNick?: string | null
    avatarUrl?: string | null
    rank?: $Enums.Rank
    isStaffMaster?: boolean
    characterName?: string | null
    passport?: string | null
    badge?: string | null
    status?: $Enums.OfficerStatus
    arrestsCount?: number
    warningsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    arrests?: ArrestOfficerCreateNestedManyWithoutUserInput
    promotions?: PromotionCreateNestedManyWithoutUserInput
    warnings?: WarningCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    discordId: string
    username: string
    discordNick?: string | null
    avatarUrl?: string | null
    rank?: $Enums.Rank
    isStaffMaster?: boolean
    characterName?: string | null
    passport?: string | null
    badge?: string | null
    status?: $Enums.OfficerStatus
    arrestsCount?: number
    warningsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    arrests?: ArrestOfficerUncheckedCreateNestedManyWithoutUserInput
    promotions?: PromotionUncheckedCreateNestedManyWithoutUserInput
    warnings?: WarningUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    discordNick?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: EnumRankFieldUpdateOperationsInput | $Enums.Rank
    isStaffMaster?: BoolFieldUpdateOperationsInput | boolean
    characterName?: NullableStringFieldUpdateOperationsInput | string | null
    passport?: NullableStringFieldUpdateOperationsInput | string | null
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOfficerStatusFieldUpdateOperationsInput | $Enums.OfficerStatus
    arrestsCount?: IntFieldUpdateOperationsInput | number
    warningsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    arrests?: ArrestOfficerUpdateManyWithoutUserNestedInput
    promotions?: PromotionUpdateManyWithoutUserNestedInput
    warnings?: WarningUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    discordNick?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: EnumRankFieldUpdateOperationsInput | $Enums.Rank
    isStaffMaster?: BoolFieldUpdateOperationsInput | boolean
    characterName?: NullableStringFieldUpdateOperationsInput | string | null
    passport?: NullableStringFieldUpdateOperationsInput | string | null
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOfficerStatusFieldUpdateOperationsInput | $Enums.OfficerStatus
    arrestsCount?: IntFieldUpdateOperationsInput | number
    warningsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    arrests?: ArrestOfficerUncheckedUpdateManyWithoutUserNestedInput
    promotions?: PromotionUncheckedUpdateManyWithoutUserNestedInput
    warnings?: WarningUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    discordId: string
    username: string
    discordNick?: string | null
    avatarUrl?: string | null
    rank?: $Enums.Rank
    isStaffMaster?: boolean
    characterName?: string | null
    passport?: string | null
    badge?: string | null
    status?: $Enums.OfficerStatus
    arrestsCount?: number
    warningsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    discordNick?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: EnumRankFieldUpdateOperationsInput | $Enums.Rank
    isStaffMaster?: BoolFieldUpdateOperationsInput | boolean
    characterName?: NullableStringFieldUpdateOperationsInput | string | null
    passport?: NullableStringFieldUpdateOperationsInput | string | null
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOfficerStatusFieldUpdateOperationsInput | $Enums.OfficerStatus
    arrestsCount?: IntFieldUpdateOperationsInput | number
    warningsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    discordNick?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: EnumRankFieldUpdateOperationsInput | $Enums.Rank
    isStaffMaster?: BoolFieldUpdateOperationsInput | boolean
    characterName?: NullableStringFieldUpdateOperationsInput | string | null
    passport?: NullableStringFieldUpdateOperationsInput | string | null
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOfficerStatusFieldUpdateOperationsInput | $Enums.OfficerStatus
    arrestsCount?: IntFieldUpdateOperationsInput | number
    warningsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArrestCreateInput = {
    id?: string
    qru: string
    passport: string
    bo: string
    unidade: string
    outcome?: $Enums.ArrestOutcome
    imageUrl?: string | null
    date?: Date | string
    createdAt?: Date | string
    officers?: ArrestOfficerCreateNestedManyWithoutArrestInput
  }

  export type ArrestUncheckedCreateInput = {
    id?: string
    qru: string
    passport: string
    bo: string
    unidade: string
    outcome?: $Enums.ArrestOutcome
    imageUrl?: string | null
    date?: Date | string
    createdAt?: Date | string
    officers?: ArrestOfficerUncheckedCreateNestedManyWithoutArrestInput
  }

  export type ArrestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    qru?: StringFieldUpdateOperationsInput | string
    passport?: StringFieldUpdateOperationsInput | string
    bo?: StringFieldUpdateOperationsInput | string
    unidade?: StringFieldUpdateOperationsInput | string
    outcome?: EnumArrestOutcomeFieldUpdateOperationsInput | $Enums.ArrestOutcome
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    officers?: ArrestOfficerUpdateManyWithoutArrestNestedInput
  }

  export type ArrestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    qru?: StringFieldUpdateOperationsInput | string
    passport?: StringFieldUpdateOperationsInput | string
    bo?: StringFieldUpdateOperationsInput | string
    unidade?: StringFieldUpdateOperationsInput | string
    outcome?: EnumArrestOutcomeFieldUpdateOperationsInput | $Enums.ArrestOutcome
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    officers?: ArrestOfficerUncheckedUpdateManyWithoutArrestNestedInput
  }

  export type ArrestCreateManyInput = {
    id?: string
    qru: string
    passport: string
    bo: string
    unidade: string
    outcome?: $Enums.ArrestOutcome
    imageUrl?: string | null
    date?: Date | string
    createdAt?: Date | string
  }

  export type ArrestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    qru?: StringFieldUpdateOperationsInput | string
    passport?: StringFieldUpdateOperationsInput | string
    bo?: StringFieldUpdateOperationsInput | string
    unidade?: StringFieldUpdateOperationsInput | string
    outcome?: EnumArrestOutcomeFieldUpdateOperationsInput | $Enums.ArrestOutcome
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArrestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    qru?: StringFieldUpdateOperationsInput | string
    passport?: StringFieldUpdateOperationsInput | string
    bo?: StringFieldUpdateOperationsInput | string
    unidade?: StringFieldUpdateOperationsInput | string
    outcome?: EnumArrestOutcomeFieldUpdateOperationsInput | $Enums.ArrestOutcome
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArrestOfficerCreateInput = {
    arrest: ArrestCreateNestedOneWithoutOfficersInput
    user: UserCreateNestedOneWithoutArrestsInput
  }

  export type ArrestOfficerUncheckedCreateInput = {
    arrestId: string
    userId: string
  }

  export type ArrestOfficerUpdateInput = {
    arrest?: ArrestUpdateOneRequiredWithoutOfficersNestedInput
    user?: UserUpdateOneRequiredWithoutArrestsNestedInput
  }

  export type ArrestOfficerUncheckedUpdateInput = {
    arrestId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ArrestOfficerCreateManyInput = {
    arrestId: string
    userId: string
  }

  export type ArrestOfficerUpdateManyMutationInput = {

  }

  export type ArrestOfficerUncheckedUpdateManyInput = {
    arrestId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type EvalRequestCreateInput = {
    id?: string
    studentName: string
    studentPassport: string
    startTime: string
    endTime: string
    date: string
    dept: string
    evaluatorTarget: string
    status?: $Enums.EvalRequestStatus
    createdAt?: Date | string
    completedEval?: CompletedEvalCreateNestedOneWithoutEvalRequestInput
  }

  export type EvalRequestUncheckedCreateInput = {
    id?: string
    studentName: string
    studentPassport: string
    startTime: string
    endTime: string
    date: string
    dept: string
    evaluatorTarget: string
    status?: $Enums.EvalRequestStatus
    createdAt?: Date | string
    completedEval?: CompletedEvalUncheckedCreateNestedOneWithoutEvalRequestInput
  }

  export type EvalRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    studentPassport?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    dept?: StringFieldUpdateOperationsInput | string
    evaluatorTarget?: StringFieldUpdateOperationsInput | string
    status?: EnumEvalRequestStatusFieldUpdateOperationsInput | $Enums.EvalRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedEval?: CompletedEvalUpdateOneWithoutEvalRequestNestedInput
  }

  export type EvalRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    studentPassport?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    dept?: StringFieldUpdateOperationsInput | string
    evaluatorTarget?: StringFieldUpdateOperationsInput | string
    status?: EnumEvalRequestStatusFieldUpdateOperationsInput | $Enums.EvalRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedEval?: CompletedEvalUncheckedUpdateOneWithoutEvalRequestNestedInput
  }

  export type EvalRequestCreateManyInput = {
    id?: string
    studentName: string
    studentPassport: string
    startTime: string
    endTime: string
    date: string
    dept: string
    evaluatorTarget: string
    status?: $Enums.EvalRequestStatus
    createdAt?: Date | string
  }

  export type EvalRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    studentPassport?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    dept?: StringFieldUpdateOperationsInput | string
    evaluatorTarget?: StringFieldUpdateOperationsInput | string
    status?: EnumEvalRequestStatusFieldUpdateOperationsInput | $Enums.EvalRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvalRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    studentPassport?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    dept?: StringFieldUpdateOperationsInput | string
    evaluatorTarget?: StringFieldUpdateOperationsInput | string
    status?: EnumEvalRequestStatusFieldUpdateOperationsInput | $Enums.EvalRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompletedEvalCreateInput = {
    id?: string
    studentName: string
    studentPassport: string
    evaluator: string
    averageScore: string
    date: string
    createdAt?: Date | string
    evalRequest: EvalRequestCreateNestedOneWithoutCompletedEvalInput
    answers?: EvalAnswerCreateNestedManyWithoutCompletedEvalInput
  }

  export type CompletedEvalUncheckedCreateInput = {
    id?: string
    evalRequestId: string
    studentName: string
    studentPassport: string
    evaluator: string
    averageScore: string
    date: string
    createdAt?: Date | string
    answers?: EvalAnswerUncheckedCreateNestedManyWithoutCompletedEvalInput
  }

  export type CompletedEvalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    studentPassport?: StringFieldUpdateOperationsInput | string
    evaluator?: StringFieldUpdateOperationsInput | string
    averageScore?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evalRequest?: EvalRequestUpdateOneRequiredWithoutCompletedEvalNestedInput
    answers?: EvalAnswerUpdateManyWithoutCompletedEvalNestedInput
  }

  export type CompletedEvalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    evalRequestId?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    studentPassport?: StringFieldUpdateOperationsInput | string
    evaluator?: StringFieldUpdateOperationsInput | string
    averageScore?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: EvalAnswerUncheckedUpdateManyWithoutCompletedEvalNestedInput
  }

  export type CompletedEvalCreateManyInput = {
    id?: string
    evalRequestId: string
    studentName: string
    studentPassport: string
    evaluator: string
    averageScore: string
    date: string
    createdAt?: Date | string
  }

  export type CompletedEvalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    studentPassport?: StringFieldUpdateOperationsInput | string
    evaluator?: StringFieldUpdateOperationsInput | string
    averageScore?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompletedEvalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    evalRequestId?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    studentPassport?: StringFieldUpdateOperationsInput | string
    evaluator?: StringFieldUpdateOperationsInput | string
    averageScore?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvalAnswerCreateInput = {
    id?: string
    questionText: string
    score: number
    comment?: string | null
    completedEval: CompletedEvalCreateNestedOneWithoutAnswersInput
  }

  export type EvalAnswerUncheckedCreateInput = {
    id?: string
    completedEvalId: string
    questionText: string
    score: number
    comment?: string | null
  }

  export type EvalAnswerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    completedEval?: CompletedEvalUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type EvalAnswerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedEvalId?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EvalAnswerCreateManyInput = {
    id?: string
    completedEvalId: string
    questionText: string
    score: number
    comment?: string | null
  }

  export type EvalAnswerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EvalAnswerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedEvalId?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AbsenceCreateInput = {
    id?: string
    officer: string
    passport: string
    startDate: string
    endDate: string
    reason: string
    status?: $Enums.RequestStatus
    createdAt?: Date | string
  }

  export type AbsenceUncheckedCreateInput = {
    id?: string
    officer: string
    passport: string
    startDate: string
    endDate: string
    reason: string
    status?: $Enums.RequestStatus
    createdAt?: Date | string
  }

  export type AbsenceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    officer?: StringFieldUpdateOperationsInput | string
    passport?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AbsenceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    officer?: StringFieldUpdateOperationsInput | string
    passport?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AbsenceCreateManyInput = {
    id?: string
    officer: string
    passport: string
    startDate: string
    endDate: string
    reason: string
    status?: $Enums.RequestStatus
    createdAt?: Date | string
  }

  export type AbsenceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    officer?: StringFieldUpdateOperationsInput | string
    passport?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AbsenceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    officer?: StringFieldUpdateOperationsInput | string
    passport?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotionCreateInput = {
    id?: string
    officerName: string
    newRank: $Enums.Rank
    status?: $Enums.RequestStatus
    date: string
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutPromotionsInput
  }

  export type PromotionUncheckedCreateInput = {
    id?: string
    userId?: string | null
    officerName: string
    newRank: $Enums.Rank
    status?: $Enums.RequestStatus
    date: string
    createdAt?: Date | string
  }

  export type PromotionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    officerName?: StringFieldUpdateOperationsInput | string
    newRank?: EnumRankFieldUpdateOperationsInput | $Enums.Rank
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutPromotionsNestedInput
  }

  export type PromotionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    officerName?: StringFieldUpdateOperationsInput | string
    newRank?: EnumRankFieldUpdateOperationsInput | $Enums.Rank
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotionCreateManyInput = {
    id?: string
    userId?: string | null
    officerName: string
    newRank: $Enums.Rank
    status?: $Enums.RequestStatus
    date: string
    createdAt?: Date | string
  }

  export type PromotionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    officerName?: StringFieldUpdateOperationsInput | string
    newRank?: EnumRankFieldUpdateOperationsInput | $Enums.Rank
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    officerName?: StringFieldUpdateOperationsInput | string
    newRank?: EnumRankFieldUpdateOperationsInput | $Enums.Rank
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WarningCreateInput = {
    id?: string
    officerName: string
    level: $Enums.WarningLevel
    reason: string
    date: string
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutWarningsInput
  }

  export type WarningUncheckedCreateInput = {
    id?: string
    userId?: string | null
    officerName: string
    level: $Enums.WarningLevel
    reason: string
    date: string
    createdAt?: Date | string
  }

  export type WarningUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    officerName?: StringFieldUpdateOperationsInput | string
    level?: EnumWarningLevelFieldUpdateOperationsInput | $Enums.WarningLevel
    reason?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutWarningsNestedInput
  }

  export type WarningUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    officerName?: StringFieldUpdateOperationsInput | string
    level?: EnumWarningLevelFieldUpdateOperationsInput | $Enums.WarningLevel
    reason?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WarningCreateManyInput = {
    id?: string
    userId?: string | null
    officerName: string
    level: $Enums.WarningLevel
    reason: string
    date: string
    createdAt?: Date | string
  }

  export type WarningUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    officerName?: StringFieldUpdateOperationsInput | string
    level?: EnumWarningLevelFieldUpdateOperationsInput | $Enums.WarningLevel
    reason?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WarningUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    officerName?: StringFieldUpdateOperationsInput | string
    level?: EnumWarningLevelFieldUpdateOperationsInput | $Enums.WarningLevel
    reason?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UniformCreateInput = {
    id?: string
    title: string
    badge: string
    imageUrl: string
    details: string
    order?: number
    createdAt?: Date | string
  }

  export type UniformUncheckedCreateInput = {
    id?: string
    title: string
    badge: string
    imageUrl: string
    details: string
    order?: number
    createdAt?: Date | string
  }

  export type UniformUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    badge?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UniformUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    badge?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UniformCreateManyInput = {
    id?: string
    title: string
    badge: string
    imageUrl: string
    details: string
    order?: number
    createdAt?: Date | string
  }

  export type UniformUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    badge?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UniformUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    badge?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateInput = {
    id?: string
    text: string
    order?: number
    createdAt?: Date | string
  }

  export type QuestionUncheckedCreateInput = {
    id?: string
    text: string
    order?: number
    createdAt?: Date | string
  }

  export type QuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateManyInput = {
    id?: string
    text: string
    order?: number
    createdAt?: Date | string
  }

  export type QuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffMemberCreateInput = {
    id?: string
    name: string
    passport: string
    discordHandle: string
    cargo: string
    createdAt?: Date | string
  }

  export type StaffMemberUncheckedCreateInput = {
    id?: string
    name: string
    passport: string
    discordHandle: string
    cargo: string
    createdAt?: Date | string
  }

  export type StaffMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passport?: StringFieldUpdateOperationsInput | string
    discordHandle?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passport?: StringFieldUpdateOperationsInput | string
    discordHandle?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffMemberCreateManyInput = {
    id?: string
    name: string
    passport: string
    discordHandle: string
    cargo: string
    createdAt?: Date | string
  }

  export type StaffMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passport?: StringFieldUpdateOperationsInput | string
    discordHandle?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passport?: StringFieldUpdateOperationsInput | string
    discordHandle?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogCreateInput = {
    id?: string
    type?: $Enums.ActivityLogType
    title: string
    detail: string
    userRankAtTime?: $Enums.Rank | null
    timestamp?: Date | string
    user?: UserCreateNestedOneWithoutActivityLogsInput
  }

  export type ActivityLogUncheckedCreateInput = {
    id?: string
    type?: $Enums.ActivityLogType
    title: string
    detail: string
    userRankAtTime?: $Enums.Rank | null
    userId?: string | null
    timestamp?: Date | string
  }

  export type ActivityLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityLogTypeFieldUpdateOperationsInput | $Enums.ActivityLogType
    title?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    userRankAtTime?: NullableEnumRankFieldUpdateOperationsInput | $Enums.Rank | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutActivityLogsNestedInput
  }

  export type ActivityLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityLogTypeFieldUpdateOperationsInput | $Enums.ActivityLogType
    title?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    userRankAtTime?: NullableEnumRankFieldUpdateOperationsInput | $Enums.Rank | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogCreateManyInput = {
    id?: string
    type?: $Enums.ActivityLogType
    title: string
    detail: string
    userRankAtTime?: $Enums.Rank | null
    userId?: string | null
    timestamp?: Date | string
  }

  export type ActivityLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityLogTypeFieldUpdateOperationsInput | $Enums.ActivityLogType
    title?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    userRankAtTime?: NullableEnumRankFieldUpdateOperationsInput | $Enums.Rank | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityLogTypeFieldUpdateOperationsInput | $Enums.ActivityLogType
    title?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    userRankAtTime?: NullableEnumRankFieldUpdateOperationsInput | $Enums.Rank | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRankFilter<$PrismaModel = never> = {
    equals?: $Enums.Rank | EnumRankFieldRefInput<$PrismaModel>
    in?: $Enums.Rank[] | ListEnumRankFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rank[] | ListEnumRankFieldRefInput<$PrismaModel>
    not?: NestedEnumRankFilter<$PrismaModel> | $Enums.Rank
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumOfficerStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OfficerStatus | EnumOfficerStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OfficerStatus[] | ListEnumOfficerStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OfficerStatus[] | ListEnumOfficerStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOfficerStatusFilter<$PrismaModel> | $Enums.OfficerStatus
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ActivityLogListRelationFilter = {
    every?: ActivityLogWhereInput
    some?: ActivityLogWhereInput
    none?: ActivityLogWhereInput
  }

  export type ArrestOfficerListRelationFilter = {
    every?: ArrestOfficerWhereInput
    some?: ArrestOfficerWhereInput
    none?: ArrestOfficerWhereInput
  }

  export type PromotionListRelationFilter = {
    every?: PromotionWhereInput
    some?: PromotionWhereInput
    none?: PromotionWhereInput
  }

  export type WarningListRelationFilter = {
    every?: WarningWhereInput
    some?: WarningWhereInput
    none?: WarningWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ActivityLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArrestOfficerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PromotionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WarningOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    discordId?: SortOrder
    username?: SortOrder
    discordNick?: SortOrder
    avatarUrl?: SortOrder
    rank?: SortOrder
    isStaffMaster?: SortOrder
    characterName?: SortOrder
    passport?: SortOrder
    badge?: SortOrder
    status?: SortOrder
    arrestsCount?: SortOrder
    warningsCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    arrestsCount?: SortOrder
    warningsCount?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    discordId?: SortOrder
    username?: SortOrder
    discordNick?: SortOrder
    avatarUrl?: SortOrder
    rank?: SortOrder
    isStaffMaster?: SortOrder
    characterName?: SortOrder
    passport?: SortOrder
    badge?: SortOrder
    status?: SortOrder
    arrestsCount?: SortOrder
    warningsCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    discordId?: SortOrder
    username?: SortOrder
    discordNick?: SortOrder
    avatarUrl?: SortOrder
    rank?: SortOrder
    isStaffMaster?: SortOrder
    characterName?: SortOrder
    passport?: SortOrder
    badge?: SortOrder
    status?: SortOrder
    arrestsCount?: SortOrder
    warningsCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    arrestsCount?: SortOrder
    warningsCount?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRankWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rank | EnumRankFieldRefInput<$PrismaModel>
    in?: $Enums.Rank[] | ListEnumRankFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rank[] | ListEnumRankFieldRefInput<$PrismaModel>
    not?: NestedEnumRankWithAggregatesFilter<$PrismaModel> | $Enums.Rank
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRankFilter<$PrismaModel>
    _max?: NestedEnumRankFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumOfficerStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OfficerStatus | EnumOfficerStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OfficerStatus[] | ListEnumOfficerStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OfficerStatus[] | ListEnumOfficerStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOfficerStatusWithAggregatesFilter<$PrismaModel> | $Enums.OfficerStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOfficerStatusFilter<$PrismaModel>
    _max?: NestedEnumOfficerStatusFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumArrestOutcomeFilter<$PrismaModel = never> = {
    equals?: $Enums.ArrestOutcome | EnumArrestOutcomeFieldRefInput<$PrismaModel>
    in?: $Enums.ArrestOutcome[] | ListEnumArrestOutcomeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ArrestOutcome[] | ListEnumArrestOutcomeFieldRefInput<$PrismaModel>
    not?: NestedEnumArrestOutcomeFilter<$PrismaModel> | $Enums.ArrestOutcome
  }

  export type ArrestCountOrderByAggregateInput = {
    id?: SortOrder
    qru?: SortOrder
    passport?: SortOrder
    bo?: SortOrder
    unidade?: SortOrder
    outcome?: SortOrder
    imageUrl?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type ArrestMaxOrderByAggregateInput = {
    id?: SortOrder
    qru?: SortOrder
    passport?: SortOrder
    bo?: SortOrder
    unidade?: SortOrder
    outcome?: SortOrder
    imageUrl?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type ArrestMinOrderByAggregateInput = {
    id?: SortOrder
    qru?: SortOrder
    passport?: SortOrder
    bo?: SortOrder
    unidade?: SortOrder
    outcome?: SortOrder
    imageUrl?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumArrestOutcomeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ArrestOutcome | EnumArrestOutcomeFieldRefInput<$PrismaModel>
    in?: $Enums.ArrestOutcome[] | ListEnumArrestOutcomeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ArrestOutcome[] | ListEnumArrestOutcomeFieldRefInput<$PrismaModel>
    not?: NestedEnumArrestOutcomeWithAggregatesFilter<$PrismaModel> | $Enums.ArrestOutcome
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumArrestOutcomeFilter<$PrismaModel>
    _max?: NestedEnumArrestOutcomeFilter<$PrismaModel>
  }

  export type ArrestScalarRelationFilter = {
    is?: ArrestWhereInput
    isNot?: ArrestWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ArrestOfficerArrestIdUserIdCompoundUniqueInput = {
    arrestId: string
    userId: string
  }

  export type ArrestOfficerCountOrderByAggregateInput = {
    arrestId?: SortOrder
    userId?: SortOrder
  }

  export type ArrestOfficerMaxOrderByAggregateInput = {
    arrestId?: SortOrder
    userId?: SortOrder
  }

  export type ArrestOfficerMinOrderByAggregateInput = {
    arrestId?: SortOrder
    userId?: SortOrder
  }

  export type EnumEvalRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EvalRequestStatus | EnumEvalRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EvalRequestStatus[] | ListEnumEvalRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EvalRequestStatus[] | ListEnumEvalRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEvalRequestStatusFilter<$PrismaModel> | $Enums.EvalRequestStatus
  }

  export type CompletedEvalNullableScalarRelationFilter = {
    is?: CompletedEvalWhereInput | null
    isNot?: CompletedEvalWhereInput | null
  }

  export type EvalRequestCountOrderByAggregateInput = {
    id?: SortOrder
    studentName?: SortOrder
    studentPassport?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    date?: SortOrder
    dept?: SortOrder
    evaluatorTarget?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type EvalRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    studentName?: SortOrder
    studentPassport?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    date?: SortOrder
    dept?: SortOrder
    evaluatorTarget?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type EvalRequestMinOrderByAggregateInput = {
    id?: SortOrder
    studentName?: SortOrder
    studentPassport?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    date?: SortOrder
    dept?: SortOrder
    evaluatorTarget?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumEvalRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EvalRequestStatus | EnumEvalRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EvalRequestStatus[] | ListEnumEvalRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EvalRequestStatus[] | ListEnumEvalRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEvalRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.EvalRequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEvalRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumEvalRequestStatusFilter<$PrismaModel>
  }

  export type EvalRequestScalarRelationFilter = {
    is?: EvalRequestWhereInput
    isNot?: EvalRequestWhereInput
  }

  export type EvalAnswerListRelationFilter = {
    every?: EvalAnswerWhereInput
    some?: EvalAnswerWhereInput
    none?: EvalAnswerWhereInput
  }

  export type EvalAnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompletedEvalCountOrderByAggregateInput = {
    id?: SortOrder
    evalRequestId?: SortOrder
    studentName?: SortOrder
    studentPassport?: SortOrder
    evaluator?: SortOrder
    averageScore?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type CompletedEvalMaxOrderByAggregateInput = {
    id?: SortOrder
    evalRequestId?: SortOrder
    studentName?: SortOrder
    studentPassport?: SortOrder
    evaluator?: SortOrder
    averageScore?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type CompletedEvalMinOrderByAggregateInput = {
    id?: SortOrder
    evalRequestId?: SortOrder
    studentName?: SortOrder
    studentPassport?: SortOrder
    evaluator?: SortOrder
    averageScore?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type CompletedEvalScalarRelationFilter = {
    is?: CompletedEvalWhereInput
    isNot?: CompletedEvalWhereInput
  }

  export type EvalAnswerCountOrderByAggregateInput = {
    id?: SortOrder
    completedEvalId?: SortOrder
    questionText?: SortOrder
    score?: SortOrder
    comment?: SortOrder
  }

  export type EvalAnswerAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type EvalAnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    completedEvalId?: SortOrder
    questionText?: SortOrder
    score?: SortOrder
    comment?: SortOrder
  }

  export type EvalAnswerMinOrderByAggregateInput = {
    id?: SortOrder
    completedEvalId?: SortOrder
    questionText?: SortOrder
    score?: SortOrder
    comment?: SortOrder
  }

  export type EvalAnswerSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type EnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type AbsenceCountOrderByAggregateInput = {
    id?: SortOrder
    officer?: SortOrder
    passport?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type AbsenceMaxOrderByAggregateInput = {
    id?: SortOrder
    officer?: SortOrder
    passport?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type AbsenceMinOrderByAggregateInput = {
    id?: SortOrder
    officer?: SortOrder
    passport?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type PromotionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    officerName?: SortOrder
    newRank?: SortOrder
    status?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type PromotionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    officerName?: SortOrder
    newRank?: SortOrder
    status?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type PromotionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    officerName?: SortOrder
    newRank?: SortOrder
    status?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumWarningLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.WarningLevel | EnumWarningLevelFieldRefInput<$PrismaModel>
    in?: $Enums.WarningLevel[] | ListEnumWarningLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.WarningLevel[] | ListEnumWarningLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumWarningLevelFilter<$PrismaModel> | $Enums.WarningLevel
  }

  export type WarningCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    officerName?: SortOrder
    level?: SortOrder
    reason?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type WarningMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    officerName?: SortOrder
    level?: SortOrder
    reason?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type WarningMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    officerName?: SortOrder
    level?: SortOrder
    reason?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumWarningLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WarningLevel | EnumWarningLevelFieldRefInput<$PrismaModel>
    in?: $Enums.WarningLevel[] | ListEnumWarningLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.WarningLevel[] | ListEnumWarningLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumWarningLevelWithAggregatesFilter<$PrismaModel> | $Enums.WarningLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWarningLevelFilter<$PrismaModel>
    _max?: NestedEnumWarningLevelFilter<$PrismaModel>
  }

  export type UniformCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    badge?: SortOrder
    imageUrl?: SortOrder
    details?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type UniformAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type UniformMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    badge?: SortOrder
    imageUrl?: SortOrder
    details?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type UniformMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    badge?: SortOrder
    imageUrl?: SortOrder
    details?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type UniformSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestionAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestionSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type StaffMemberCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    passport?: SortOrder
    discordHandle?: SortOrder
    cargo?: SortOrder
    createdAt?: SortOrder
  }

  export type StaffMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    passport?: SortOrder
    discordHandle?: SortOrder
    cargo?: SortOrder
    createdAt?: SortOrder
  }

  export type StaffMemberMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    passport?: SortOrder
    discordHandle?: SortOrder
    cargo?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumActivityLogTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityLogType | EnumActivityLogTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityLogType[] | ListEnumActivityLogTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityLogType[] | ListEnumActivityLogTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityLogTypeFilter<$PrismaModel> | $Enums.ActivityLogType
  }

  export type EnumRankNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Rank | EnumRankFieldRefInput<$PrismaModel> | null
    in?: $Enums.Rank[] | ListEnumRankFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Rank[] | ListEnumRankFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRankNullableFilter<$PrismaModel> | $Enums.Rank | null
  }

  export type ActivityLogCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    detail?: SortOrder
    userRankAtTime?: SortOrder
    userId?: SortOrder
    timestamp?: SortOrder
  }

  export type ActivityLogMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    detail?: SortOrder
    userRankAtTime?: SortOrder
    userId?: SortOrder
    timestamp?: SortOrder
  }

  export type ActivityLogMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    detail?: SortOrder
    userRankAtTime?: SortOrder
    userId?: SortOrder
    timestamp?: SortOrder
  }

  export type EnumActivityLogTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityLogType | EnumActivityLogTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityLogType[] | ListEnumActivityLogTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityLogType[] | ListEnumActivityLogTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityLogTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActivityLogType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActivityLogTypeFilter<$PrismaModel>
    _max?: NestedEnumActivityLogTypeFilter<$PrismaModel>
  }

  export type EnumRankNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rank | EnumRankFieldRefInput<$PrismaModel> | null
    in?: $Enums.Rank[] | ListEnumRankFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Rank[] | ListEnumRankFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRankNullableWithAggregatesFilter<$PrismaModel> | $Enums.Rank | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRankNullableFilter<$PrismaModel>
    _max?: NestedEnumRankNullableFilter<$PrismaModel>
  }

  export type ActivityLogCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type ArrestOfficerCreateNestedManyWithoutUserInput = {
    create?: XOR<ArrestOfficerCreateWithoutUserInput, ArrestOfficerUncheckedCreateWithoutUserInput> | ArrestOfficerCreateWithoutUserInput[] | ArrestOfficerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArrestOfficerCreateOrConnectWithoutUserInput | ArrestOfficerCreateOrConnectWithoutUserInput[]
    createMany?: ArrestOfficerCreateManyUserInputEnvelope
    connect?: ArrestOfficerWhereUniqueInput | ArrestOfficerWhereUniqueInput[]
  }

  export type PromotionCreateNestedManyWithoutUserInput = {
    create?: XOR<PromotionCreateWithoutUserInput, PromotionUncheckedCreateWithoutUserInput> | PromotionCreateWithoutUserInput[] | PromotionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PromotionCreateOrConnectWithoutUserInput | PromotionCreateOrConnectWithoutUserInput[]
    createMany?: PromotionCreateManyUserInputEnvelope
    connect?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
  }

  export type WarningCreateNestedManyWithoutUserInput = {
    create?: XOR<WarningCreateWithoutUserInput, WarningUncheckedCreateWithoutUserInput> | WarningCreateWithoutUserInput[] | WarningUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WarningCreateOrConnectWithoutUserInput | WarningCreateOrConnectWithoutUserInput[]
    createMany?: WarningCreateManyUserInputEnvelope
    connect?: WarningWhereUniqueInput | WarningWhereUniqueInput[]
  }

  export type ActivityLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type ArrestOfficerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ArrestOfficerCreateWithoutUserInput, ArrestOfficerUncheckedCreateWithoutUserInput> | ArrestOfficerCreateWithoutUserInput[] | ArrestOfficerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArrestOfficerCreateOrConnectWithoutUserInput | ArrestOfficerCreateOrConnectWithoutUserInput[]
    createMany?: ArrestOfficerCreateManyUserInputEnvelope
    connect?: ArrestOfficerWhereUniqueInput | ArrestOfficerWhereUniqueInput[]
  }

  export type PromotionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PromotionCreateWithoutUserInput, PromotionUncheckedCreateWithoutUserInput> | PromotionCreateWithoutUserInput[] | PromotionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PromotionCreateOrConnectWithoutUserInput | PromotionCreateOrConnectWithoutUserInput[]
    createMany?: PromotionCreateManyUserInputEnvelope
    connect?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
  }

  export type WarningUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WarningCreateWithoutUserInput, WarningUncheckedCreateWithoutUserInput> | WarningCreateWithoutUserInput[] | WarningUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WarningCreateOrConnectWithoutUserInput | WarningCreateOrConnectWithoutUserInput[]
    createMany?: WarningCreateManyUserInputEnvelope
    connect?: WarningWhereUniqueInput | WarningWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRankFieldUpdateOperationsInput = {
    set?: $Enums.Rank
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumOfficerStatusFieldUpdateOperationsInput = {
    set?: $Enums.OfficerStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ActivityLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutUserInput | ActivityLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutUserInput | ActivityLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutUserInput | ActivityLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type ArrestOfficerUpdateManyWithoutUserNestedInput = {
    create?: XOR<ArrestOfficerCreateWithoutUserInput, ArrestOfficerUncheckedCreateWithoutUserInput> | ArrestOfficerCreateWithoutUserInput[] | ArrestOfficerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArrestOfficerCreateOrConnectWithoutUserInput | ArrestOfficerCreateOrConnectWithoutUserInput[]
    upsert?: ArrestOfficerUpsertWithWhereUniqueWithoutUserInput | ArrestOfficerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ArrestOfficerCreateManyUserInputEnvelope
    set?: ArrestOfficerWhereUniqueInput | ArrestOfficerWhereUniqueInput[]
    disconnect?: ArrestOfficerWhereUniqueInput | ArrestOfficerWhereUniqueInput[]
    delete?: ArrestOfficerWhereUniqueInput | ArrestOfficerWhereUniqueInput[]
    connect?: ArrestOfficerWhereUniqueInput | ArrestOfficerWhereUniqueInput[]
    update?: ArrestOfficerUpdateWithWhereUniqueWithoutUserInput | ArrestOfficerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ArrestOfficerUpdateManyWithWhereWithoutUserInput | ArrestOfficerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ArrestOfficerScalarWhereInput | ArrestOfficerScalarWhereInput[]
  }

  export type PromotionUpdateManyWithoutUserNestedInput = {
    create?: XOR<PromotionCreateWithoutUserInput, PromotionUncheckedCreateWithoutUserInput> | PromotionCreateWithoutUserInput[] | PromotionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PromotionCreateOrConnectWithoutUserInput | PromotionCreateOrConnectWithoutUserInput[]
    upsert?: PromotionUpsertWithWhereUniqueWithoutUserInput | PromotionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PromotionCreateManyUserInputEnvelope
    set?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
    disconnect?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
    delete?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
    connect?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
    update?: PromotionUpdateWithWhereUniqueWithoutUserInput | PromotionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PromotionUpdateManyWithWhereWithoutUserInput | PromotionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PromotionScalarWhereInput | PromotionScalarWhereInput[]
  }

  export type WarningUpdateManyWithoutUserNestedInput = {
    create?: XOR<WarningCreateWithoutUserInput, WarningUncheckedCreateWithoutUserInput> | WarningCreateWithoutUserInput[] | WarningUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WarningCreateOrConnectWithoutUserInput | WarningCreateOrConnectWithoutUserInput[]
    upsert?: WarningUpsertWithWhereUniqueWithoutUserInput | WarningUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WarningCreateManyUserInputEnvelope
    set?: WarningWhereUniqueInput | WarningWhereUniqueInput[]
    disconnect?: WarningWhereUniqueInput | WarningWhereUniqueInput[]
    delete?: WarningWhereUniqueInput | WarningWhereUniqueInput[]
    connect?: WarningWhereUniqueInput | WarningWhereUniqueInput[]
    update?: WarningUpdateWithWhereUniqueWithoutUserInput | WarningUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WarningUpdateManyWithWhereWithoutUserInput | WarningUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WarningScalarWhereInput | WarningScalarWhereInput[]
  }

  export type ActivityLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutUserInput | ActivityLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutUserInput | ActivityLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutUserInput | ActivityLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type ArrestOfficerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ArrestOfficerCreateWithoutUserInput, ArrestOfficerUncheckedCreateWithoutUserInput> | ArrestOfficerCreateWithoutUserInput[] | ArrestOfficerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArrestOfficerCreateOrConnectWithoutUserInput | ArrestOfficerCreateOrConnectWithoutUserInput[]
    upsert?: ArrestOfficerUpsertWithWhereUniqueWithoutUserInput | ArrestOfficerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ArrestOfficerCreateManyUserInputEnvelope
    set?: ArrestOfficerWhereUniqueInput | ArrestOfficerWhereUniqueInput[]
    disconnect?: ArrestOfficerWhereUniqueInput | ArrestOfficerWhereUniqueInput[]
    delete?: ArrestOfficerWhereUniqueInput | ArrestOfficerWhereUniqueInput[]
    connect?: ArrestOfficerWhereUniqueInput | ArrestOfficerWhereUniqueInput[]
    update?: ArrestOfficerUpdateWithWhereUniqueWithoutUserInput | ArrestOfficerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ArrestOfficerUpdateManyWithWhereWithoutUserInput | ArrestOfficerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ArrestOfficerScalarWhereInput | ArrestOfficerScalarWhereInput[]
  }

  export type PromotionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PromotionCreateWithoutUserInput, PromotionUncheckedCreateWithoutUserInput> | PromotionCreateWithoutUserInput[] | PromotionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PromotionCreateOrConnectWithoutUserInput | PromotionCreateOrConnectWithoutUserInput[]
    upsert?: PromotionUpsertWithWhereUniqueWithoutUserInput | PromotionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PromotionCreateManyUserInputEnvelope
    set?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
    disconnect?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
    delete?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
    connect?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
    update?: PromotionUpdateWithWhereUniqueWithoutUserInput | PromotionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PromotionUpdateManyWithWhereWithoutUserInput | PromotionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PromotionScalarWhereInput | PromotionScalarWhereInput[]
  }

  export type WarningUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WarningCreateWithoutUserInput, WarningUncheckedCreateWithoutUserInput> | WarningCreateWithoutUserInput[] | WarningUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WarningCreateOrConnectWithoutUserInput | WarningCreateOrConnectWithoutUserInput[]
    upsert?: WarningUpsertWithWhereUniqueWithoutUserInput | WarningUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WarningCreateManyUserInputEnvelope
    set?: WarningWhereUniqueInput | WarningWhereUniqueInput[]
    disconnect?: WarningWhereUniqueInput | WarningWhereUniqueInput[]
    delete?: WarningWhereUniqueInput | WarningWhereUniqueInput[]
    connect?: WarningWhereUniqueInput | WarningWhereUniqueInput[]
    update?: WarningUpdateWithWhereUniqueWithoutUserInput | WarningUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WarningUpdateManyWithWhereWithoutUserInput | WarningUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WarningScalarWhereInput | WarningScalarWhereInput[]
  }

  export type ArrestOfficerCreateNestedManyWithoutArrestInput = {
    create?: XOR<ArrestOfficerCreateWithoutArrestInput, ArrestOfficerUncheckedCreateWithoutArrestInput> | ArrestOfficerCreateWithoutArrestInput[] | ArrestOfficerUncheckedCreateWithoutArrestInput[]
    connectOrCreate?: ArrestOfficerCreateOrConnectWithoutArrestInput | ArrestOfficerCreateOrConnectWithoutArrestInput[]
    createMany?: ArrestOfficerCreateManyArrestInputEnvelope
    connect?: ArrestOfficerWhereUniqueInput | ArrestOfficerWhereUniqueInput[]
  }

  export type ArrestOfficerUncheckedCreateNestedManyWithoutArrestInput = {
    create?: XOR<ArrestOfficerCreateWithoutArrestInput, ArrestOfficerUncheckedCreateWithoutArrestInput> | ArrestOfficerCreateWithoutArrestInput[] | ArrestOfficerUncheckedCreateWithoutArrestInput[]
    connectOrCreate?: ArrestOfficerCreateOrConnectWithoutArrestInput | ArrestOfficerCreateOrConnectWithoutArrestInput[]
    createMany?: ArrestOfficerCreateManyArrestInputEnvelope
    connect?: ArrestOfficerWhereUniqueInput | ArrestOfficerWhereUniqueInput[]
  }

  export type EnumArrestOutcomeFieldUpdateOperationsInput = {
    set?: $Enums.ArrestOutcome
  }

  export type ArrestOfficerUpdateManyWithoutArrestNestedInput = {
    create?: XOR<ArrestOfficerCreateWithoutArrestInput, ArrestOfficerUncheckedCreateWithoutArrestInput> | ArrestOfficerCreateWithoutArrestInput[] | ArrestOfficerUncheckedCreateWithoutArrestInput[]
    connectOrCreate?: ArrestOfficerCreateOrConnectWithoutArrestInput | ArrestOfficerCreateOrConnectWithoutArrestInput[]
    upsert?: ArrestOfficerUpsertWithWhereUniqueWithoutArrestInput | ArrestOfficerUpsertWithWhereUniqueWithoutArrestInput[]
    createMany?: ArrestOfficerCreateManyArrestInputEnvelope
    set?: ArrestOfficerWhereUniqueInput | ArrestOfficerWhereUniqueInput[]
    disconnect?: ArrestOfficerWhereUniqueInput | ArrestOfficerWhereUniqueInput[]
    delete?: ArrestOfficerWhereUniqueInput | ArrestOfficerWhereUniqueInput[]
    connect?: ArrestOfficerWhereUniqueInput | ArrestOfficerWhereUniqueInput[]
    update?: ArrestOfficerUpdateWithWhereUniqueWithoutArrestInput | ArrestOfficerUpdateWithWhereUniqueWithoutArrestInput[]
    updateMany?: ArrestOfficerUpdateManyWithWhereWithoutArrestInput | ArrestOfficerUpdateManyWithWhereWithoutArrestInput[]
    deleteMany?: ArrestOfficerScalarWhereInput | ArrestOfficerScalarWhereInput[]
  }

  export type ArrestOfficerUncheckedUpdateManyWithoutArrestNestedInput = {
    create?: XOR<ArrestOfficerCreateWithoutArrestInput, ArrestOfficerUncheckedCreateWithoutArrestInput> | ArrestOfficerCreateWithoutArrestInput[] | ArrestOfficerUncheckedCreateWithoutArrestInput[]
    connectOrCreate?: ArrestOfficerCreateOrConnectWithoutArrestInput | ArrestOfficerCreateOrConnectWithoutArrestInput[]
    upsert?: ArrestOfficerUpsertWithWhereUniqueWithoutArrestInput | ArrestOfficerUpsertWithWhereUniqueWithoutArrestInput[]
    createMany?: ArrestOfficerCreateManyArrestInputEnvelope
    set?: ArrestOfficerWhereUniqueInput | ArrestOfficerWhereUniqueInput[]
    disconnect?: ArrestOfficerWhereUniqueInput | ArrestOfficerWhereUniqueInput[]
    delete?: ArrestOfficerWhereUniqueInput | ArrestOfficerWhereUniqueInput[]
    connect?: ArrestOfficerWhereUniqueInput | ArrestOfficerWhereUniqueInput[]
    update?: ArrestOfficerUpdateWithWhereUniqueWithoutArrestInput | ArrestOfficerUpdateWithWhereUniqueWithoutArrestInput[]
    updateMany?: ArrestOfficerUpdateManyWithWhereWithoutArrestInput | ArrestOfficerUpdateManyWithWhereWithoutArrestInput[]
    deleteMany?: ArrestOfficerScalarWhereInput | ArrestOfficerScalarWhereInput[]
  }

  export type ArrestCreateNestedOneWithoutOfficersInput = {
    create?: XOR<ArrestCreateWithoutOfficersInput, ArrestUncheckedCreateWithoutOfficersInput>
    connectOrCreate?: ArrestCreateOrConnectWithoutOfficersInput
    connect?: ArrestWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutArrestsInput = {
    create?: XOR<UserCreateWithoutArrestsInput, UserUncheckedCreateWithoutArrestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutArrestsInput
    connect?: UserWhereUniqueInput
  }

  export type ArrestUpdateOneRequiredWithoutOfficersNestedInput = {
    create?: XOR<ArrestCreateWithoutOfficersInput, ArrestUncheckedCreateWithoutOfficersInput>
    connectOrCreate?: ArrestCreateOrConnectWithoutOfficersInput
    upsert?: ArrestUpsertWithoutOfficersInput
    connect?: ArrestWhereUniqueInput
    update?: XOR<XOR<ArrestUpdateToOneWithWhereWithoutOfficersInput, ArrestUpdateWithoutOfficersInput>, ArrestUncheckedUpdateWithoutOfficersInput>
  }

  export type UserUpdateOneRequiredWithoutArrestsNestedInput = {
    create?: XOR<UserCreateWithoutArrestsInput, UserUncheckedCreateWithoutArrestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutArrestsInput
    upsert?: UserUpsertWithoutArrestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutArrestsInput, UserUpdateWithoutArrestsInput>, UserUncheckedUpdateWithoutArrestsInput>
  }

  export type CompletedEvalCreateNestedOneWithoutEvalRequestInput = {
    create?: XOR<CompletedEvalCreateWithoutEvalRequestInput, CompletedEvalUncheckedCreateWithoutEvalRequestInput>
    connectOrCreate?: CompletedEvalCreateOrConnectWithoutEvalRequestInput
    connect?: CompletedEvalWhereUniqueInput
  }

  export type CompletedEvalUncheckedCreateNestedOneWithoutEvalRequestInput = {
    create?: XOR<CompletedEvalCreateWithoutEvalRequestInput, CompletedEvalUncheckedCreateWithoutEvalRequestInput>
    connectOrCreate?: CompletedEvalCreateOrConnectWithoutEvalRequestInput
    connect?: CompletedEvalWhereUniqueInput
  }

  export type EnumEvalRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.EvalRequestStatus
  }

  export type CompletedEvalUpdateOneWithoutEvalRequestNestedInput = {
    create?: XOR<CompletedEvalCreateWithoutEvalRequestInput, CompletedEvalUncheckedCreateWithoutEvalRequestInput>
    connectOrCreate?: CompletedEvalCreateOrConnectWithoutEvalRequestInput
    upsert?: CompletedEvalUpsertWithoutEvalRequestInput
    disconnect?: CompletedEvalWhereInput | boolean
    delete?: CompletedEvalWhereInput | boolean
    connect?: CompletedEvalWhereUniqueInput
    update?: XOR<XOR<CompletedEvalUpdateToOneWithWhereWithoutEvalRequestInput, CompletedEvalUpdateWithoutEvalRequestInput>, CompletedEvalUncheckedUpdateWithoutEvalRequestInput>
  }

  export type CompletedEvalUncheckedUpdateOneWithoutEvalRequestNestedInput = {
    create?: XOR<CompletedEvalCreateWithoutEvalRequestInput, CompletedEvalUncheckedCreateWithoutEvalRequestInput>
    connectOrCreate?: CompletedEvalCreateOrConnectWithoutEvalRequestInput
    upsert?: CompletedEvalUpsertWithoutEvalRequestInput
    disconnect?: CompletedEvalWhereInput | boolean
    delete?: CompletedEvalWhereInput | boolean
    connect?: CompletedEvalWhereUniqueInput
    update?: XOR<XOR<CompletedEvalUpdateToOneWithWhereWithoutEvalRequestInput, CompletedEvalUpdateWithoutEvalRequestInput>, CompletedEvalUncheckedUpdateWithoutEvalRequestInput>
  }

  export type EvalRequestCreateNestedOneWithoutCompletedEvalInput = {
    create?: XOR<EvalRequestCreateWithoutCompletedEvalInput, EvalRequestUncheckedCreateWithoutCompletedEvalInput>
    connectOrCreate?: EvalRequestCreateOrConnectWithoutCompletedEvalInput
    connect?: EvalRequestWhereUniqueInput
  }

  export type EvalAnswerCreateNestedManyWithoutCompletedEvalInput = {
    create?: XOR<EvalAnswerCreateWithoutCompletedEvalInput, EvalAnswerUncheckedCreateWithoutCompletedEvalInput> | EvalAnswerCreateWithoutCompletedEvalInput[] | EvalAnswerUncheckedCreateWithoutCompletedEvalInput[]
    connectOrCreate?: EvalAnswerCreateOrConnectWithoutCompletedEvalInput | EvalAnswerCreateOrConnectWithoutCompletedEvalInput[]
    createMany?: EvalAnswerCreateManyCompletedEvalInputEnvelope
    connect?: EvalAnswerWhereUniqueInput | EvalAnswerWhereUniqueInput[]
  }

  export type EvalAnswerUncheckedCreateNestedManyWithoutCompletedEvalInput = {
    create?: XOR<EvalAnswerCreateWithoutCompletedEvalInput, EvalAnswerUncheckedCreateWithoutCompletedEvalInput> | EvalAnswerCreateWithoutCompletedEvalInput[] | EvalAnswerUncheckedCreateWithoutCompletedEvalInput[]
    connectOrCreate?: EvalAnswerCreateOrConnectWithoutCompletedEvalInput | EvalAnswerCreateOrConnectWithoutCompletedEvalInput[]
    createMany?: EvalAnswerCreateManyCompletedEvalInputEnvelope
    connect?: EvalAnswerWhereUniqueInput | EvalAnswerWhereUniqueInput[]
  }

  export type EvalRequestUpdateOneRequiredWithoutCompletedEvalNestedInput = {
    create?: XOR<EvalRequestCreateWithoutCompletedEvalInput, EvalRequestUncheckedCreateWithoutCompletedEvalInput>
    connectOrCreate?: EvalRequestCreateOrConnectWithoutCompletedEvalInput
    upsert?: EvalRequestUpsertWithoutCompletedEvalInput
    connect?: EvalRequestWhereUniqueInput
    update?: XOR<XOR<EvalRequestUpdateToOneWithWhereWithoutCompletedEvalInput, EvalRequestUpdateWithoutCompletedEvalInput>, EvalRequestUncheckedUpdateWithoutCompletedEvalInput>
  }

  export type EvalAnswerUpdateManyWithoutCompletedEvalNestedInput = {
    create?: XOR<EvalAnswerCreateWithoutCompletedEvalInput, EvalAnswerUncheckedCreateWithoutCompletedEvalInput> | EvalAnswerCreateWithoutCompletedEvalInput[] | EvalAnswerUncheckedCreateWithoutCompletedEvalInput[]
    connectOrCreate?: EvalAnswerCreateOrConnectWithoutCompletedEvalInput | EvalAnswerCreateOrConnectWithoutCompletedEvalInput[]
    upsert?: EvalAnswerUpsertWithWhereUniqueWithoutCompletedEvalInput | EvalAnswerUpsertWithWhereUniqueWithoutCompletedEvalInput[]
    createMany?: EvalAnswerCreateManyCompletedEvalInputEnvelope
    set?: EvalAnswerWhereUniqueInput | EvalAnswerWhereUniqueInput[]
    disconnect?: EvalAnswerWhereUniqueInput | EvalAnswerWhereUniqueInput[]
    delete?: EvalAnswerWhereUniqueInput | EvalAnswerWhereUniqueInput[]
    connect?: EvalAnswerWhereUniqueInput | EvalAnswerWhereUniqueInput[]
    update?: EvalAnswerUpdateWithWhereUniqueWithoutCompletedEvalInput | EvalAnswerUpdateWithWhereUniqueWithoutCompletedEvalInput[]
    updateMany?: EvalAnswerUpdateManyWithWhereWithoutCompletedEvalInput | EvalAnswerUpdateManyWithWhereWithoutCompletedEvalInput[]
    deleteMany?: EvalAnswerScalarWhereInput | EvalAnswerScalarWhereInput[]
  }

  export type EvalAnswerUncheckedUpdateManyWithoutCompletedEvalNestedInput = {
    create?: XOR<EvalAnswerCreateWithoutCompletedEvalInput, EvalAnswerUncheckedCreateWithoutCompletedEvalInput> | EvalAnswerCreateWithoutCompletedEvalInput[] | EvalAnswerUncheckedCreateWithoutCompletedEvalInput[]
    connectOrCreate?: EvalAnswerCreateOrConnectWithoutCompletedEvalInput | EvalAnswerCreateOrConnectWithoutCompletedEvalInput[]
    upsert?: EvalAnswerUpsertWithWhereUniqueWithoutCompletedEvalInput | EvalAnswerUpsertWithWhereUniqueWithoutCompletedEvalInput[]
    createMany?: EvalAnswerCreateManyCompletedEvalInputEnvelope
    set?: EvalAnswerWhereUniqueInput | EvalAnswerWhereUniqueInput[]
    disconnect?: EvalAnswerWhereUniqueInput | EvalAnswerWhereUniqueInput[]
    delete?: EvalAnswerWhereUniqueInput | EvalAnswerWhereUniqueInput[]
    connect?: EvalAnswerWhereUniqueInput | EvalAnswerWhereUniqueInput[]
    update?: EvalAnswerUpdateWithWhereUniqueWithoutCompletedEvalInput | EvalAnswerUpdateWithWhereUniqueWithoutCompletedEvalInput[]
    updateMany?: EvalAnswerUpdateManyWithWhereWithoutCompletedEvalInput | EvalAnswerUpdateManyWithWhereWithoutCompletedEvalInput[]
    deleteMany?: EvalAnswerScalarWhereInput | EvalAnswerScalarWhereInput[]
  }

  export type CompletedEvalCreateNestedOneWithoutAnswersInput = {
    create?: XOR<CompletedEvalCreateWithoutAnswersInput, CompletedEvalUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: CompletedEvalCreateOrConnectWithoutAnswersInput
    connect?: CompletedEvalWhereUniqueInput
  }

  export type CompletedEvalUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<CompletedEvalCreateWithoutAnswersInput, CompletedEvalUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: CompletedEvalCreateOrConnectWithoutAnswersInput
    upsert?: CompletedEvalUpsertWithoutAnswersInput
    connect?: CompletedEvalWhereUniqueInput
    update?: XOR<XOR<CompletedEvalUpdateToOneWithWhereWithoutAnswersInput, CompletedEvalUpdateWithoutAnswersInput>, CompletedEvalUncheckedUpdateWithoutAnswersInput>
  }

  export type EnumRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.RequestStatus
  }

  export type UserCreateNestedOneWithoutPromotionsInput = {
    create?: XOR<UserCreateWithoutPromotionsInput, UserUncheckedCreateWithoutPromotionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPromotionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutPromotionsNestedInput = {
    create?: XOR<UserCreateWithoutPromotionsInput, UserUncheckedCreateWithoutPromotionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPromotionsInput
    upsert?: UserUpsertWithoutPromotionsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPromotionsInput, UserUpdateWithoutPromotionsInput>, UserUncheckedUpdateWithoutPromotionsInput>
  }

  export type UserCreateNestedOneWithoutWarningsInput = {
    create?: XOR<UserCreateWithoutWarningsInput, UserUncheckedCreateWithoutWarningsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWarningsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumWarningLevelFieldUpdateOperationsInput = {
    set?: $Enums.WarningLevel
  }

  export type UserUpdateOneWithoutWarningsNestedInput = {
    create?: XOR<UserCreateWithoutWarningsInput, UserUncheckedCreateWithoutWarningsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWarningsInput
    upsert?: UserUpsertWithoutWarningsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWarningsInput, UserUpdateWithoutWarningsInput>, UserUncheckedUpdateWithoutWarningsInput>
  }

  export type UserCreateNestedOneWithoutActivityLogsInput = {
    create?: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityLogsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumActivityLogTypeFieldUpdateOperationsInput = {
    set?: $Enums.ActivityLogType
  }

  export type NullableEnumRankFieldUpdateOperationsInput = {
    set?: $Enums.Rank | null
  }

  export type UserUpdateOneWithoutActivityLogsNestedInput = {
    create?: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityLogsInput
    upsert?: UserUpsertWithoutActivityLogsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutActivityLogsInput, UserUpdateWithoutActivityLogsInput>, UserUncheckedUpdateWithoutActivityLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRankFilter<$PrismaModel = never> = {
    equals?: $Enums.Rank | EnumRankFieldRefInput<$PrismaModel>
    in?: $Enums.Rank[] | ListEnumRankFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rank[] | ListEnumRankFieldRefInput<$PrismaModel>
    not?: NestedEnumRankFilter<$PrismaModel> | $Enums.Rank
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumOfficerStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OfficerStatus | EnumOfficerStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OfficerStatus[] | ListEnumOfficerStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OfficerStatus[] | ListEnumOfficerStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOfficerStatusFilter<$PrismaModel> | $Enums.OfficerStatus
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRankWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rank | EnumRankFieldRefInput<$PrismaModel>
    in?: $Enums.Rank[] | ListEnumRankFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rank[] | ListEnumRankFieldRefInput<$PrismaModel>
    not?: NestedEnumRankWithAggregatesFilter<$PrismaModel> | $Enums.Rank
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRankFilter<$PrismaModel>
    _max?: NestedEnumRankFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumOfficerStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OfficerStatus | EnumOfficerStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OfficerStatus[] | ListEnumOfficerStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OfficerStatus[] | ListEnumOfficerStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOfficerStatusWithAggregatesFilter<$PrismaModel> | $Enums.OfficerStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOfficerStatusFilter<$PrismaModel>
    _max?: NestedEnumOfficerStatusFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumArrestOutcomeFilter<$PrismaModel = never> = {
    equals?: $Enums.ArrestOutcome | EnumArrestOutcomeFieldRefInput<$PrismaModel>
    in?: $Enums.ArrestOutcome[] | ListEnumArrestOutcomeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ArrestOutcome[] | ListEnumArrestOutcomeFieldRefInput<$PrismaModel>
    not?: NestedEnumArrestOutcomeFilter<$PrismaModel> | $Enums.ArrestOutcome
  }

  export type NestedEnumArrestOutcomeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ArrestOutcome | EnumArrestOutcomeFieldRefInput<$PrismaModel>
    in?: $Enums.ArrestOutcome[] | ListEnumArrestOutcomeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ArrestOutcome[] | ListEnumArrestOutcomeFieldRefInput<$PrismaModel>
    not?: NestedEnumArrestOutcomeWithAggregatesFilter<$PrismaModel> | $Enums.ArrestOutcome
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumArrestOutcomeFilter<$PrismaModel>
    _max?: NestedEnumArrestOutcomeFilter<$PrismaModel>
  }

  export type NestedEnumEvalRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EvalRequestStatus | EnumEvalRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EvalRequestStatus[] | ListEnumEvalRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EvalRequestStatus[] | ListEnumEvalRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEvalRequestStatusFilter<$PrismaModel> | $Enums.EvalRequestStatus
  }

  export type NestedEnumEvalRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EvalRequestStatus | EnumEvalRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EvalRequestStatus[] | ListEnumEvalRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EvalRequestStatus[] | ListEnumEvalRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEvalRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.EvalRequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEvalRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumEvalRequestStatusFilter<$PrismaModel>
  }

  export type NestedEnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type NestedEnumWarningLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.WarningLevel | EnumWarningLevelFieldRefInput<$PrismaModel>
    in?: $Enums.WarningLevel[] | ListEnumWarningLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.WarningLevel[] | ListEnumWarningLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumWarningLevelFilter<$PrismaModel> | $Enums.WarningLevel
  }

  export type NestedEnumWarningLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WarningLevel | EnumWarningLevelFieldRefInput<$PrismaModel>
    in?: $Enums.WarningLevel[] | ListEnumWarningLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.WarningLevel[] | ListEnumWarningLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumWarningLevelWithAggregatesFilter<$PrismaModel> | $Enums.WarningLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWarningLevelFilter<$PrismaModel>
    _max?: NestedEnumWarningLevelFilter<$PrismaModel>
  }

  export type NestedEnumActivityLogTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityLogType | EnumActivityLogTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityLogType[] | ListEnumActivityLogTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityLogType[] | ListEnumActivityLogTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityLogTypeFilter<$PrismaModel> | $Enums.ActivityLogType
  }

  export type NestedEnumRankNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Rank | EnumRankFieldRefInput<$PrismaModel> | null
    in?: $Enums.Rank[] | ListEnumRankFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Rank[] | ListEnumRankFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRankNullableFilter<$PrismaModel> | $Enums.Rank | null
  }

  export type NestedEnumActivityLogTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityLogType | EnumActivityLogTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityLogType[] | ListEnumActivityLogTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityLogType[] | ListEnumActivityLogTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityLogTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActivityLogType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActivityLogTypeFilter<$PrismaModel>
    _max?: NestedEnumActivityLogTypeFilter<$PrismaModel>
  }

  export type NestedEnumRankNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rank | EnumRankFieldRefInput<$PrismaModel> | null
    in?: $Enums.Rank[] | ListEnumRankFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Rank[] | ListEnumRankFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRankNullableWithAggregatesFilter<$PrismaModel> | $Enums.Rank | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRankNullableFilter<$PrismaModel>
    _max?: NestedEnumRankNullableFilter<$PrismaModel>
  }

  export type ActivityLogCreateWithoutUserInput = {
    id?: string
    type?: $Enums.ActivityLogType
    title: string
    detail: string
    userRankAtTime?: $Enums.Rank | null
    timestamp?: Date | string
  }

  export type ActivityLogUncheckedCreateWithoutUserInput = {
    id?: string
    type?: $Enums.ActivityLogType
    title: string
    detail: string
    userRankAtTime?: $Enums.Rank | null
    timestamp?: Date | string
  }

  export type ActivityLogCreateOrConnectWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    create: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput>
  }

  export type ActivityLogCreateManyUserInputEnvelope = {
    data: ActivityLogCreateManyUserInput | ActivityLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ArrestOfficerCreateWithoutUserInput = {
    arrest: ArrestCreateNestedOneWithoutOfficersInput
  }

  export type ArrestOfficerUncheckedCreateWithoutUserInput = {
    arrestId: string
  }

  export type ArrestOfficerCreateOrConnectWithoutUserInput = {
    where: ArrestOfficerWhereUniqueInput
    create: XOR<ArrestOfficerCreateWithoutUserInput, ArrestOfficerUncheckedCreateWithoutUserInput>
  }

  export type ArrestOfficerCreateManyUserInputEnvelope = {
    data: ArrestOfficerCreateManyUserInput | ArrestOfficerCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PromotionCreateWithoutUserInput = {
    id?: string
    officerName: string
    newRank: $Enums.Rank
    status?: $Enums.RequestStatus
    date: string
    createdAt?: Date | string
  }

  export type PromotionUncheckedCreateWithoutUserInput = {
    id?: string
    officerName: string
    newRank: $Enums.Rank
    status?: $Enums.RequestStatus
    date: string
    createdAt?: Date | string
  }

  export type PromotionCreateOrConnectWithoutUserInput = {
    where: PromotionWhereUniqueInput
    create: XOR<PromotionCreateWithoutUserInput, PromotionUncheckedCreateWithoutUserInput>
  }

  export type PromotionCreateManyUserInputEnvelope = {
    data: PromotionCreateManyUserInput | PromotionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WarningCreateWithoutUserInput = {
    id?: string
    officerName: string
    level: $Enums.WarningLevel
    reason: string
    date: string
    createdAt?: Date | string
  }

  export type WarningUncheckedCreateWithoutUserInput = {
    id?: string
    officerName: string
    level: $Enums.WarningLevel
    reason: string
    date: string
    createdAt?: Date | string
  }

  export type WarningCreateOrConnectWithoutUserInput = {
    where: WarningWhereUniqueInput
    create: XOR<WarningCreateWithoutUserInput, WarningUncheckedCreateWithoutUserInput>
  }

  export type WarningCreateManyUserInputEnvelope = {
    data: WarningCreateManyUserInput | WarningCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ActivityLogUpsertWithWhereUniqueWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    update: XOR<ActivityLogUpdateWithoutUserInput, ActivityLogUncheckedUpdateWithoutUserInput>
    create: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput>
  }

  export type ActivityLogUpdateWithWhereUniqueWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    data: XOR<ActivityLogUpdateWithoutUserInput, ActivityLogUncheckedUpdateWithoutUserInput>
  }

  export type ActivityLogUpdateManyWithWhereWithoutUserInput = {
    where: ActivityLogScalarWhereInput
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyWithoutUserInput>
  }

  export type ActivityLogScalarWhereInput = {
    AND?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    OR?: ActivityLogScalarWhereInput[]
    NOT?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    id?: StringFilter<"ActivityLog"> | string
    type?: EnumActivityLogTypeFilter<"ActivityLog"> | $Enums.ActivityLogType
    title?: StringFilter<"ActivityLog"> | string
    detail?: StringFilter<"ActivityLog"> | string
    userRankAtTime?: EnumRankNullableFilter<"ActivityLog"> | $Enums.Rank | null
    userId?: StringNullableFilter<"ActivityLog"> | string | null
    timestamp?: DateTimeFilter<"ActivityLog"> | Date | string
  }

  export type ArrestOfficerUpsertWithWhereUniqueWithoutUserInput = {
    where: ArrestOfficerWhereUniqueInput
    update: XOR<ArrestOfficerUpdateWithoutUserInput, ArrestOfficerUncheckedUpdateWithoutUserInput>
    create: XOR<ArrestOfficerCreateWithoutUserInput, ArrestOfficerUncheckedCreateWithoutUserInput>
  }

  export type ArrestOfficerUpdateWithWhereUniqueWithoutUserInput = {
    where: ArrestOfficerWhereUniqueInput
    data: XOR<ArrestOfficerUpdateWithoutUserInput, ArrestOfficerUncheckedUpdateWithoutUserInput>
  }

  export type ArrestOfficerUpdateManyWithWhereWithoutUserInput = {
    where: ArrestOfficerScalarWhereInput
    data: XOR<ArrestOfficerUpdateManyMutationInput, ArrestOfficerUncheckedUpdateManyWithoutUserInput>
  }

  export type ArrestOfficerScalarWhereInput = {
    AND?: ArrestOfficerScalarWhereInput | ArrestOfficerScalarWhereInput[]
    OR?: ArrestOfficerScalarWhereInput[]
    NOT?: ArrestOfficerScalarWhereInput | ArrestOfficerScalarWhereInput[]
    arrestId?: StringFilter<"ArrestOfficer"> | string
    userId?: StringFilter<"ArrestOfficer"> | string
  }

  export type PromotionUpsertWithWhereUniqueWithoutUserInput = {
    where: PromotionWhereUniqueInput
    update: XOR<PromotionUpdateWithoutUserInput, PromotionUncheckedUpdateWithoutUserInput>
    create: XOR<PromotionCreateWithoutUserInput, PromotionUncheckedCreateWithoutUserInput>
  }

  export type PromotionUpdateWithWhereUniqueWithoutUserInput = {
    where: PromotionWhereUniqueInput
    data: XOR<PromotionUpdateWithoutUserInput, PromotionUncheckedUpdateWithoutUserInput>
  }

  export type PromotionUpdateManyWithWhereWithoutUserInput = {
    where: PromotionScalarWhereInput
    data: XOR<PromotionUpdateManyMutationInput, PromotionUncheckedUpdateManyWithoutUserInput>
  }

  export type PromotionScalarWhereInput = {
    AND?: PromotionScalarWhereInput | PromotionScalarWhereInput[]
    OR?: PromotionScalarWhereInput[]
    NOT?: PromotionScalarWhereInput | PromotionScalarWhereInput[]
    id?: StringFilter<"Promotion"> | string
    userId?: StringNullableFilter<"Promotion"> | string | null
    officerName?: StringFilter<"Promotion"> | string
    newRank?: EnumRankFilter<"Promotion"> | $Enums.Rank
    status?: EnumRequestStatusFilter<"Promotion"> | $Enums.RequestStatus
    date?: StringFilter<"Promotion"> | string
    createdAt?: DateTimeFilter<"Promotion"> | Date | string
  }

  export type WarningUpsertWithWhereUniqueWithoutUserInput = {
    where: WarningWhereUniqueInput
    update: XOR<WarningUpdateWithoutUserInput, WarningUncheckedUpdateWithoutUserInput>
    create: XOR<WarningCreateWithoutUserInput, WarningUncheckedCreateWithoutUserInput>
  }

  export type WarningUpdateWithWhereUniqueWithoutUserInput = {
    where: WarningWhereUniqueInput
    data: XOR<WarningUpdateWithoutUserInput, WarningUncheckedUpdateWithoutUserInput>
  }

  export type WarningUpdateManyWithWhereWithoutUserInput = {
    where: WarningScalarWhereInput
    data: XOR<WarningUpdateManyMutationInput, WarningUncheckedUpdateManyWithoutUserInput>
  }

  export type WarningScalarWhereInput = {
    AND?: WarningScalarWhereInput | WarningScalarWhereInput[]
    OR?: WarningScalarWhereInput[]
    NOT?: WarningScalarWhereInput | WarningScalarWhereInput[]
    id?: StringFilter<"Warning"> | string
    userId?: StringNullableFilter<"Warning"> | string | null
    officerName?: StringFilter<"Warning"> | string
    level?: EnumWarningLevelFilter<"Warning"> | $Enums.WarningLevel
    reason?: StringFilter<"Warning"> | string
    date?: StringFilter<"Warning"> | string
    createdAt?: DateTimeFilter<"Warning"> | Date | string
  }

  export type ArrestOfficerCreateWithoutArrestInput = {
    user: UserCreateNestedOneWithoutArrestsInput
  }

  export type ArrestOfficerUncheckedCreateWithoutArrestInput = {
    userId: string
  }

  export type ArrestOfficerCreateOrConnectWithoutArrestInput = {
    where: ArrestOfficerWhereUniqueInput
    create: XOR<ArrestOfficerCreateWithoutArrestInput, ArrestOfficerUncheckedCreateWithoutArrestInput>
  }

  export type ArrestOfficerCreateManyArrestInputEnvelope = {
    data: ArrestOfficerCreateManyArrestInput | ArrestOfficerCreateManyArrestInput[]
    skipDuplicates?: boolean
  }

  export type ArrestOfficerUpsertWithWhereUniqueWithoutArrestInput = {
    where: ArrestOfficerWhereUniqueInput
    update: XOR<ArrestOfficerUpdateWithoutArrestInput, ArrestOfficerUncheckedUpdateWithoutArrestInput>
    create: XOR<ArrestOfficerCreateWithoutArrestInput, ArrestOfficerUncheckedCreateWithoutArrestInput>
  }

  export type ArrestOfficerUpdateWithWhereUniqueWithoutArrestInput = {
    where: ArrestOfficerWhereUniqueInput
    data: XOR<ArrestOfficerUpdateWithoutArrestInput, ArrestOfficerUncheckedUpdateWithoutArrestInput>
  }

  export type ArrestOfficerUpdateManyWithWhereWithoutArrestInput = {
    where: ArrestOfficerScalarWhereInput
    data: XOR<ArrestOfficerUpdateManyMutationInput, ArrestOfficerUncheckedUpdateManyWithoutArrestInput>
  }

  export type ArrestCreateWithoutOfficersInput = {
    id?: string
    qru: string
    passport: string
    bo: string
    unidade: string
    outcome?: $Enums.ArrestOutcome
    imageUrl?: string | null
    date?: Date | string
    createdAt?: Date | string
  }

  export type ArrestUncheckedCreateWithoutOfficersInput = {
    id?: string
    qru: string
    passport: string
    bo: string
    unidade: string
    outcome?: $Enums.ArrestOutcome
    imageUrl?: string | null
    date?: Date | string
    createdAt?: Date | string
  }

  export type ArrestCreateOrConnectWithoutOfficersInput = {
    where: ArrestWhereUniqueInput
    create: XOR<ArrestCreateWithoutOfficersInput, ArrestUncheckedCreateWithoutOfficersInput>
  }

  export type UserCreateWithoutArrestsInput = {
    id?: string
    discordId: string
    username: string
    discordNick?: string | null
    avatarUrl?: string | null
    rank?: $Enums.Rank
    isStaffMaster?: boolean
    characterName?: string | null
    passport?: string | null
    badge?: string | null
    status?: $Enums.OfficerStatus
    arrestsCount?: number
    warningsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    promotions?: PromotionCreateNestedManyWithoutUserInput
    warnings?: WarningCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutArrestsInput = {
    id?: string
    discordId: string
    username: string
    discordNick?: string | null
    avatarUrl?: string | null
    rank?: $Enums.Rank
    isStaffMaster?: boolean
    characterName?: string | null
    passport?: string | null
    badge?: string | null
    status?: $Enums.OfficerStatus
    arrestsCount?: number
    warningsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    promotions?: PromotionUncheckedCreateNestedManyWithoutUserInput
    warnings?: WarningUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutArrestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutArrestsInput, UserUncheckedCreateWithoutArrestsInput>
  }

  export type ArrestUpsertWithoutOfficersInput = {
    update: XOR<ArrestUpdateWithoutOfficersInput, ArrestUncheckedUpdateWithoutOfficersInput>
    create: XOR<ArrestCreateWithoutOfficersInput, ArrestUncheckedCreateWithoutOfficersInput>
    where?: ArrestWhereInput
  }

  export type ArrestUpdateToOneWithWhereWithoutOfficersInput = {
    where?: ArrestWhereInput
    data: XOR<ArrestUpdateWithoutOfficersInput, ArrestUncheckedUpdateWithoutOfficersInput>
  }

  export type ArrestUpdateWithoutOfficersInput = {
    id?: StringFieldUpdateOperationsInput | string
    qru?: StringFieldUpdateOperationsInput | string
    passport?: StringFieldUpdateOperationsInput | string
    bo?: StringFieldUpdateOperationsInput | string
    unidade?: StringFieldUpdateOperationsInput | string
    outcome?: EnumArrestOutcomeFieldUpdateOperationsInput | $Enums.ArrestOutcome
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArrestUncheckedUpdateWithoutOfficersInput = {
    id?: StringFieldUpdateOperationsInput | string
    qru?: StringFieldUpdateOperationsInput | string
    passport?: StringFieldUpdateOperationsInput | string
    bo?: StringFieldUpdateOperationsInput | string
    unidade?: StringFieldUpdateOperationsInput | string
    outcome?: EnumArrestOutcomeFieldUpdateOperationsInput | $Enums.ArrestOutcome
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutArrestsInput = {
    update: XOR<UserUpdateWithoutArrestsInput, UserUncheckedUpdateWithoutArrestsInput>
    create: XOR<UserCreateWithoutArrestsInput, UserUncheckedCreateWithoutArrestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutArrestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutArrestsInput, UserUncheckedUpdateWithoutArrestsInput>
  }

  export type UserUpdateWithoutArrestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    discordNick?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: EnumRankFieldUpdateOperationsInput | $Enums.Rank
    isStaffMaster?: BoolFieldUpdateOperationsInput | boolean
    characterName?: NullableStringFieldUpdateOperationsInput | string | null
    passport?: NullableStringFieldUpdateOperationsInput | string | null
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOfficerStatusFieldUpdateOperationsInput | $Enums.OfficerStatus
    arrestsCount?: IntFieldUpdateOperationsInput | number
    warningsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    promotions?: PromotionUpdateManyWithoutUserNestedInput
    warnings?: WarningUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutArrestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    discordNick?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: EnumRankFieldUpdateOperationsInput | $Enums.Rank
    isStaffMaster?: BoolFieldUpdateOperationsInput | boolean
    characterName?: NullableStringFieldUpdateOperationsInput | string | null
    passport?: NullableStringFieldUpdateOperationsInput | string | null
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOfficerStatusFieldUpdateOperationsInput | $Enums.OfficerStatus
    arrestsCount?: IntFieldUpdateOperationsInput | number
    warningsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    promotions?: PromotionUncheckedUpdateManyWithoutUserNestedInput
    warnings?: WarningUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CompletedEvalCreateWithoutEvalRequestInput = {
    id?: string
    studentName: string
    studentPassport: string
    evaluator: string
    averageScore: string
    date: string
    createdAt?: Date | string
    answers?: EvalAnswerCreateNestedManyWithoutCompletedEvalInput
  }

  export type CompletedEvalUncheckedCreateWithoutEvalRequestInput = {
    id?: string
    studentName: string
    studentPassport: string
    evaluator: string
    averageScore: string
    date: string
    createdAt?: Date | string
    answers?: EvalAnswerUncheckedCreateNestedManyWithoutCompletedEvalInput
  }

  export type CompletedEvalCreateOrConnectWithoutEvalRequestInput = {
    where: CompletedEvalWhereUniqueInput
    create: XOR<CompletedEvalCreateWithoutEvalRequestInput, CompletedEvalUncheckedCreateWithoutEvalRequestInput>
  }

  export type CompletedEvalUpsertWithoutEvalRequestInput = {
    update: XOR<CompletedEvalUpdateWithoutEvalRequestInput, CompletedEvalUncheckedUpdateWithoutEvalRequestInput>
    create: XOR<CompletedEvalCreateWithoutEvalRequestInput, CompletedEvalUncheckedCreateWithoutEvalRequestInput>
    where?: CompletedEvalWhereInput
  }

  export type CompletedEvalUpdateToOneWithWhereWithoutEvalRequestInput = {
    where?: CompletedEvalWhereInput
    data: XOR<CompletedEvalUpdateWithoutEvalRequestInput, CompletedEvalUncheckedUpdateWithoutEvalRequestInput>
  }

  export type CompletedEvalUpdateWithoutEvalRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    studentPassport?: StringFieldUpdateOperationsInput | string
    evaluator?: StringFieldUpdateOperationsInput | string
    averageScore?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: EvalAnswerUpdateManyWithoutCompletedEvalNestedInput
  }

  export type CompletedEvalUncheckedUpdateWithoutEvalRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    studentPassport?: StringFieldUpdateOperationsInput | string
    evaluator?: StringFieldUpdateOperationsInput | string
    averageScore?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: EvalAnswerUncheckedUpdateManyWithoutCompletedEvalNestedInput
  }

  export type EvalRequestCreateWithoutCompletedEvalInput = {
    id?: string
    studentName: string
    studentPassport: string
    startTime: string
    endTime: string
    date: string
    dept: string
    evaluatorTarget: string
    status?: $Enums.EvalRequestStatus
    createdAt?: Date | string
  }

  export type EvalRequestUncheckedCreateWithoutCompletedEvalInput = {
    id?: string
    studentName: string
    studentPassport: string
    startTime: string
    endTime: string
    date: string
    dept: string
    evaluatorTarget: string
    status?: $Enums.EvalRequestStatus
    createdAt?: Date | string
  }

  export type EvalRequestCreateOrConnectWithoutCompletedEvalInput = {
    where: EvalRequestWhereUniqueInput
    create: XOR<EvalRequestCreateWithoutCompletedEvalInput, EvalRequestUncheckedCreateWithoutCompletedEvalInput>
  }

  export type EvalAnswerCreateWithoutCompletedEvalInput = {
    id?: string
    questionText: string
    score: number
    comment?: string | null
  }

  export type EvalAnswerUncheckedCreateWithoutCompletedEvalInput = {
    id?: string
    questionText: string
    score: number
    comment?: string | null
  }

  export type EvalAnswerCreateOrConnectWithoutCompletedEvalInput = {
    where: EvalAnswerWhereUniqueInput
    create: XOR<EvalAnswerCreateWithoutCompletedEvalInput, EvalAnswerUncheckedCreateWithoutCompletedEvalInput>
  }

  export type EvalAnswerCreateManyCompletedEvalInputEnvelope = {
    data: EvalAnswerCreateManyCompletedEvalInput | EvalAnswerCreateManyCompletedEvalInput[]
    skipDuplicates?: boolean
  }

  export type EvalRequestUpsertWithoutCompletedEvalInput = {
    update: XOR<EvalRequestUpdateWithoutCompletedEvalInput, EvalRequestUncheckedUpdateWithoutCompletedEvalInput>
    create: XOR<EvalRequestCreateWithoutCompletedEvalInput, EvalRequestUncheckedCreateWithoutCompletedEvalInput>
    where?: EvalRequestWhereInput
  }

  export type EvalRequestUpdateToOneWithWhereWithoutCompletedEvalInput = {
    where?: EvalRequestWhereInput
    data: XOR<EvalRequestUpdateWithoutCompletedEvalInput, EvalRequestUncheckedUpdateWithoutCompletedEvalInput>
  }

  export type EvalRequestUpdateWithoutCompletedEvalInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    studentPassport?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    dept?: StringFieldUpdateOperationsInput | string
    evaluatorTarget?: StringFieldUpdateOperationsInput | string
    status?: EnumEvalRequestStatusFieldUpdateOperationsInput | $Enums.EvalRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvalRequestUncheckedUpdateWithoutCompletedEvalInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    studentPassport?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    dept?: StringFieldUpdateOperationsInput | string
    evaluatorTarget?: StringFieldUpdateOperationsInput | string
    status?: EnumEvalRequestStatusFieldUpdateOperationsInput | $Enums.EvalRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvalAnswerUpsertWithWhereUniqueWithoutCompletedEvalInput = {
    where: EvalAnswerWhereUniqueInput
    update: XOR<EvalAnswerUpdateWithoutCompletedEvalInput, EvalAnswerUncheckedUpdateWithoutCompletedEvalInput>
    create: XOR<EvalAnswerCreateWithoutCompletedEvalInput, EvalAnswerUncheckedCreateWithoutCompletedEvalInput>
  }

  export type EvalAnswerUpdateWithWhereUniqueWithoutCompletedEvalInput = {
    where: EvalAnswerWhereUniqueInput
    data: XOR<EvalAnswerUpdateWithoutCompletedEvalInput, EvalAnswerUncheckedUpdateWithoutCompletedEvalInput>
  }

  export type EvalAnswerUpdateManyWithWhereWithoutCompletedEvalInput = {
    where: EvalAnswerScalarWhereInput
    data: XOR<EvalAnswerUpdateManyMutationInput, EvalAnswerUncheckedUpdateManyWithoutCompletedEvalInput>
  }

  export type EvalAnswerScalarWhereInput = {
    AND?: EvalAnswerScalarWhereInput | EvalAnswerScalarWhereInput[]
    OR?: EvalAnswerScalarWhereInput[]
    NOT?: EvalAnswerScalarWhereInput | EvalAnswerScalarWhereInput[]
    id?: StringFilter<"EvalAnswer"> | string
    completedEvalId?: StringFilter<"EvalAnswer"> | string
    questionText?: StringFilter<"EvalAnswer"> | string
    score?: IntFilter<"EvalAnswer"> | number
    comment?: StringNullableFilter<"EvalAnswer"> | string | null
  }

  export type CompletedEvalCreateWithoutAnswersInput = {
    id?: string
    studentName: string
    studentPassport: string
    evaluator: string
    averageScore: string
    date: string
    createdAt?: Date | string
    evalRequest: EvalRequestCreateNestedOneWithoutCompletedEvalInput
  }

  export type CompletedEvalUncheckedCreateWithoutAnswersInput = {
    id?: string
    evalRequestId: string
    studentName: string
    studentPassport: string
    evaluator: string
    averageScore: string
    date: string
    createdAt?: Date | string
  }

  export type CompletedEvalCreateOrConnectWithoutAnswersInput = {
    where: CompletedEvalWhereUniqueInput
    create: XOR<CompletedEvalCreateWithoutAnswersInput, CompletedEvalUncheckedCreateWithoutAnswersInput>
  }

  export type CompletedEvalUpsertWithoutAnswersInput = {
    update: XOR<CompletedEvalUpdateWithoutAnswersInput, CompletedEvalUncheckedUpdateWithoutAnswersInput>
    create: XOR<CompletedEvalCreateWithoutAnswersInput, CompletedEvalUncheckedCreateWithoutAnswersInput>
    where?: CompletedEvalWhereInput
  }

  export type CompletedEvalUpdateToOneWithWhereWithoutAnswersInput = {
    where?: CompletedEvalWhereInput
    data: XOR<CompletedEvalUpdateWithoutAnswersInput, CompletedEvalUncheckedUpdateWithoutAnswersInput>
  }

  export type CompletedEvalUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    studentPassport?: StringFieldUpdateOperationsInput | string
    evaluator?: StringFieldUpdateOperationsInput | string
    averageScore?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evalRequest?: EvalRequestUpdateOneRequiredWithoutCompletedEvalNestedInput
  }

  export type CompletedEvalUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    evalRequestId?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    studentPassport?: StringFieldUpdateOperationsInput | string
    evaluator?: StringFieldUpdateOperationsInput | string
    averageScore?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutPromotionsInput = {
    id?: string
    discordId: string
    username: string
    discordNick?: string | null
    avatarUrl?: string | null
    rank?: $Enums.Rank
    isStaffMaster?: boolean
    characterName?: string | null
    passport?: string | null
    badge?: string | null
    status?: $Enums.OfficerStatus
    arrestsCount?: number
    warningsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    arrests?: ArrestOfficerCreateNestedManyWithoutUserInput
    warnings?: WarningCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPromotionsInput = {
    id?: string
    discordId: string
    username: string
    discordNick?: string | null
    avatarUrl?: string | null
    rank?: $Enums.Rank
    isStaffMaster?: boolean
    characterName?: string | null
    passport?: string | null
    badge?: string | null
    status?: $Enums.OfficerStatus
    arrestsCount?: number
    warningsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    arrests?: ArrestOfficerUncheckedCreateNestedManyWithoutUserInput
    warnings?: WarningUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPromotionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPromotionsInput, UserUncheckedCreateWithoutPromotionsInput>
  }

  export type UserUpsertWithoutPromotionsInput = {
    update: XOR<UserUpdateWithoutPromotionsInput, UserUncheckedUpdateWithoutPromotionsInput>
    create: XOR<UserCreateWithoutPromotionsInput, UserUncheckedCreateWithoutPromotionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPromotionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPromotionsInput, UserUncheckedUpdateWithoutPromotionsInput>
  }

  export type UserUpdateWithoutPromotionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    discordNick?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: EnumRankFieldUpdateOperationsInput | $Enums.Rank
    isStaffMaster?: BoolFieldUpdateOperationsInput | boolean
    characterName?: NullableStringFieldUpdateOperationsInput | string | null
    passport?: NullableStringFieldUpdateOperationsInput | string | null
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOfficerStatusFieldUpdateOperationsInput | $Enums.OfficerStatus
    arrestsCount?: IntFieldUpdateOperationsInput | number
    warningsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    arrests?: ArrestOfficerUpdateManyWithoutUserNestedInput
    warnings?: WarningUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPromotionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    discordNick?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: EnumRankFieldUpdateOperationsInput | $Enums.Rank
    isStaffMaster?: BoolFieldUpdateOperationsInput | boolean
    characterName?: NullableStringFieldUpdateOperationsInput | string | null
    passport?: NullableStringFieldUpdateOperationsInput | string | null
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOfficerStatusFieldUpdateOperationsInput | $Enums.OfficerStatus
    arrestsCount?: IntFieldUpdateOperationsInput | number
    warningsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    arrests?: ArrestOfficerUncheckedUpdateManyWithoutUserNestedInput
    warnings?: WarningUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutWarningsInput = {
    id?: string
    discordId: string
    username: string
    discordNick?: string | null
    avatarUrl?: string | null
    rank?: $Enums.Rank
    isStaffMaster?: boolean
    characterName?: string | null
    passport?: string | null
    badge?: string | null
    status?: $Enums.OfficerStatus
    arrestsCount?: number
    warningsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    arrests?: ArrestOfficerCreateNestedManyWithoutUserInput
    promotions?: PromotionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWarningsInput = {
    id?: string
    discordId: string
    username: string
    discordNick?: string | null
    avatarUrl?: string | null
    rank?: $Enums.Rank
    isStaffMaster?: boolean
    characterName?: string | null
    passport?: string | null
    badge?: string | null
    status?: $Enums.OfficerStatus
    arrestsCount?: number
    warningsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    arrests?: ArrestOfficerUncheckedCreateNestedManyWithoutUserInput
    promotions?: PromotionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWarningsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWarningsInput, UserUncheckedCreateWithoutWarningsInput>
  }

  export type UserUpsertWithoutWarningsInput = {
    update: XOR<UserUpdateWithoutWarningsInput, UserUncheckedUpdateWithoutWarningsInput>
    create: XOR<UserCreateWithoutWarningsInput, UserUncheckedCreateWithoutWarningsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWarningsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWarningsInput, UserUncheckedUpdateWithoutWarningsInput>
  }

  export type UserUpdateWithoutWarningsInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    discordNick?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: EnumRankFieldUpdateOperationsInput | $Enums.Rank
    isStaffMaster?: BoolFieldUpdateOperationsInput | boolean
    characterName?: NullableStringFieldUpdateOperationsInput | string | null
    passport?: NullableStringFieldUpdateOperationsInput | string | null
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOfficerStatusFieldUpdateOperationsInput | $Enums.OfficerStatus
    arrestsCount?: IntFieldUpdateOperationsInput | number
    warningsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    arrests?: ArrestOfficerUpdateManyWithoutUserNestedInput
    promotions?: PromotionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWarningsInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    discordNick?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: EnumRankFieldUpdateOperationsInput | $Enums.Rank
    isStaffMaster?: BoolFieldUpdateOperationsInput | boolean
    characterName?: NullableStringFieldUpdateOperationsInput | string | null
    passport?: NullableStringFieldUpdateOperationsInput | string | null
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOfficerStatusFieldUpdateOperationsInput | $Enums.OfficerStatus
    arrestsCount?: IntFieldUpdateOperationsInput | number
    warningsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    arrests?: ArrestOfficerUncheckedUpdateManyWithoutUserNestedInput
    promotions?: PromotionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutActivityLogsInput = {
    id?: string
    discordId: string
    username: string
    discordNick?: string | null
    avatarUrl?: string | null
    rank?: $Enums.Rank
    isStaffMaster?: boolean
    characterName?: string | null
    passport?: string | null
    badge?: string | null
    status?: $Enums.OfficerStatus
    arrestsCount?: number
    warningsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    arrests?: ArrestOfficerCreateNestedManyWithoutUserInput
    promotions?: PromotionCreateNestedManyWithoutUserInput
    warnings?: WarningCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutActivityLogsInput = {
    id?: string
    discordId: string
    username: string
    discordNick?: string | null
    avatarUrl?: string | null
    rank?: $Enums.Rank
    isStaffMaster?: boolean
    characterName?: string | null
    passport?: string | null
    badge?: string | null
    status?: $Enums.OfficerStatus
    arrestsCount?: number
    warningsCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    arrests?: ArrestOfficerUncheckedCreateNestedManyWithoutUserInput
    promotions?: PromotionUncheckedCreateNestedManyWithoutUserInput
    warnings?: WarningUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutActivityLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
  }

  export type UserUpsertWithoutActivityLogsInput = {
    update: XOR<UserUpdateWithoutActivityLogsInput, UserUncheckedUpdateWithoutActivityLogsInput>
    create: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutActivityLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutActivityLogsInput, UserUncheckedUpdateWithoutActivityLogsInput>
  }

  export type UserUpdateWithoutActivityLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    discordNick?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: EnumRankFieldUpdateOperationsInput | $Enums.Rank
    isStaffMaster?: BoolFieldUpdateOperationsInput | boolean
    characterName?: NullableStringFieldUpdateOperationsInput | string | null
    passport?: NullableStringFieldUpdateOperationsInput | string | null
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOfficerStatusFieldUpdateOperationsInput | $Enums.OfficerStatus
    arrestsCount?: IntFieldUpdateOperationsInput | number
    warningsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    arrests?: ArrestOfficerUpdateManyWithoutUserNestedInput
    promotions?: PromotionUpdateManyWithoutUserNestedInput
    warnings?: WarningUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutActivityLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    discordNick?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: EnumRankFieldUpdateOperationsInput | $Enums.Rank
    isStaffMaster?: BoolFieldUpdateOperationsInput | boolean
    characterName?: NullableStringFieldUpdateOperationsInput | string | null
    passport?: NullableStringFieldUpdateOperationsInput | string | null
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOfficerStatusFieldUpdateOperationsInput | $Enums.OfficerStatus
    arrestsCount?: IntFieldUpdateOperationsInput | number
    warningsCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    arrests?: ArrestOfficerUncheckedUpdateManyWithoutUserNestedInput
    promotions?: PromotionUncheckedUpdateManyWithoutUserNestedInput
    warnings?: WarningUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ActivityLogCreateManyUserInput = {
    id?: string
    type?: $Enums.ActivityLogType
    title: string
    detail: string
    userRankAtTime?: $Enums.Rank | null
    timestamp?: Date | string
  }

  export type ArrestOfficerCreateManyUserInput = {
    arrestId: string
  }

  export type PromotionCreateManyUserInput = {
    id?: string
    officerName: string
    newRank: $Enums.Rank
    status?: $Enums.RequestStatus
    date: string
    createdAt?: Date | string
  }

  export type WarningCreateManyUserInput = {
    id?: string
    officerName: string
    level: $Enums.WarningLevel
    reason: string
    date: string
    createdAt?: Date | string
  }

  export type ActivityLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityLogTypeFieldUpdateOperationsInput | $Enums.ActivityLogType
    title?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    userRankAtTime?: NullableEnumRankFieldUpdateOperationsInput | $Enums.Rank | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityLogTypeFieldUpdateOperationsInput | $Enums.ActivityLogType
    title?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    userRankAtTime?: NullableEnumRankFieldUpdateOperationsInput | $Enums.Rank | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityLogTypeFieldUpdateOperationsInput | $Enums.ActivityLogType
    title?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    userRankAtTime?: NullableEnumRankFieldUpdateOperationsInput | $Enums.Rank | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArrestOfficerUpdateWithoutUserInput = {
    arrest?: ArrestUpdateOneRequiredWithoutOfficersNestedInput
  }

  export type ArrestOfficerUncheckedUpdateWithoutUserInput = {
    arrestId?: StringFieldUpdateOperationsInput | string
  }

  export type ArrestOfficerUncheckedUpdateManyWithoutUserInput = {
    arrestId?: StringFieldUpdateOperationsInput | string
  }

  export type PromotionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    officerName?: StringFieldUpdateOperationsInput | string
    newRank?: EnumRankFieldUpdateOperationsInput | $Enums.Rank
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    officerName?: StringFieldUpdateOperationsInput | string
    newRank?: EnumRankFieldUpdateOperationsInput | $Enums.Rank
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    officerName?: StringFieldUpdateOperationsInput | string
    newRank?: EnumRankFieldUpdateOperationsInput | $Enums.Rank
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WarningUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    officerName?: StringFieldUpdateOperationsInput | string
    level?: EnumWarningLevelFieldUpdateOperationsInput | $Enums.WarningLevel
    reason?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WarningUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    officerName?: StringFieldUpdateOperationsInput | string
    level?: EnumWarningLevelFieldUpdateOperationsInput | $Enums.WarningLevel
    reason?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WarningUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    officerName?: StringFieldUpdateOperationsInput | string
    level?: EnumWarningLevelFieldUpdateOperationsInput | $Enums.WarningLevel
    reason?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArrestOfficerCreateManyArrestInput = {
    userId: string
  }

  export type ArrestOfficerUpdateWithoutArrestInput = {
    user?: UserUpdateOneRequiredWithoutArrestsNestedInput
  }

  export type ArrestOfficerUncheckedUpdateWithoutArrestInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ArrestOfficerUncheckedUpdateManyWithoutArrestInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type EvalAnswerCreateManyCompletedEvalInput = {
    id?: string
    questionText: string
    score: number
    comment?: string | null
  }

  export type EvalAnswerUpdateWithoutCompletedEvalInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EvalAnswerUncheckedUpdateWithoutCompletedEvalInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EvalAnswerUncheckedUpdateManyWithoutCompletedEvalInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}