
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model categories
 * 
 */
export type categories = $Result.DefaultSelection<Prisma.$categoriesPayload>
/**
 * Model videos
 * 
 */
export type videos = $Result.DefaultSelection<Prisma.$videosPayload>
/**
 * Model poll
 * 
 */
export type poll = $Result.DefaultSelection<Prisma.$pollPayload>
/**
 * Model questions
 * 
 */
export type questions = $Result.DefaultSelection<Prisma.$questionsPayload>
/**
 * Model pollOption
 * 
 */
export type pollOption = $Result.DefaultSelection<Prisma.$pollOptionPayload>
/**
 * Model pollResponses
 * 
 */
export type pollResponses = $Result.DefaultSelection<Prisma.$pollResponsesPayload>
/**
 * Model notes
 * 
 */
export type notes = $Result.DefaultSelection<Prisma.$notesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categories
 * const categories = await prisma.categories.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Categories
   * const categories = await prisma.categories.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.categories`: Exposes CRUD operations for the **categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.categoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.videos`: Exposes CRUD operations for the **videos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Videos
    * const videos = await prisma.videos.findMany()
    * ```
    */
  get videos(): Prisma.videosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.poll`: Exposes CRUD operations for the **poll** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Polls
    * const polls = await prisma.poll.findMany()
    * ```
    */
  get poll(): Prisma.pollDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.questions`: Exposes CRUD operations for the **questions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.questions.findMany()
    * ```
    */
  get questions(): Prisma.questionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pollOption`: Exposes CRUD operations for the **pollOption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PollOptions
    * const pollOptions = await prisma.pollOption.findMany()
    * ```
    */
  get pollOption(): Prisma.pollOptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pollResponses`: Exposes CRUD operations for the **pollResponses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PollResponses
    * const pollResponses = await prisma.pollResponses.findMany()
    * ```
    */
  get pollResponses(): Prisma.pollResponsesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notes`: Exposes CRUD operations for the **notes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notes
    * const notes = await prisma.notes.findMany()
    * ```
    */
  get notes(): Prisma.notesDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
      (Without<T, U> & U) | (Without<U, T> & T)
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
    categories: 'categories',
    videos: 'videos',
    poll: 'poll',
    questions: 'questions',
    pollOption: 'pollOption',
    pollResponses: 'pollResponses',
    notes: 'notes'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "categories" | "videos" | "poll" | "questions" | "pollOption" | "pollResponses" | "notes"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      categories: {
        payload: Prisma.$categoriesPayload<ExtArgs>
        fields: Prisma.categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findFirst: {
            args: Prisma.categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findMany: {
            args: Prisma.categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          create: {
            args: Prisma.categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          createMany: {
            args: Prisma.categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          delete: {
            args: Prisma.categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          update: {
            args: Prisma.categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          deleteMany: {
            args: Prisma.categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          upsert: {
            args: Prisma.categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      videos: {
        payload: Prisma.$videosPayload<ExtArgs>
        fields: Prisma.videosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.videosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.videosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videosPayload>
          }
          findFirst: {
            args: Prisma.videosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.videosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videosPayload>
          }
          findMany: {
            args: Prisma.videosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videosPayload>[]
          }
          create: {
            args: Prisma.videosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videosPayload>
          }
          createMany: {
            args: Prisma.videosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.videosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videosPayload>[]
          }
          delete: {
            args: Prisma.videosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videosPayload>
          }
          update: {
            args: Prisma.videosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videosPayload>
          }
          deleteMany: {
            args: Prisma.videosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.videosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.videosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videosPayload>[]
          }
          upsert: {
            args: Prisma.videosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videosPayload>
          }
          aggregate: {
            args: Prisma.VideosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideos>
          }
          groupBy: {
            args: Prisma.videosGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideosGroupByOutputType>[]
          }
          count: {
            args: Prisma.videosCountArgs<ExtArgs>
            result: $Utils.Optional<VideosCountAggregateOutputType> | number
          }
        }
      }
      poll: {
        payload: Prisma.$pollPayload<ExtArgs>
        fields: Prisma.pollFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pollFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pollPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pollFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pollPayload>
          }
          findFirst: {
            args: Prisma.pollFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pollPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pollFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pollPayload>
          }
          findMany: {
            args: Prisma.pollFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pollPayload>[]
          }
          create: {
            args: Prisma.pollCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pollPayload>
          }
          createMany: {
            args: Prisma.pollCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pollCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pollPayload>[]
          }
          delete: {
            args: Prisma.pollDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pollPayload>
          }
          update: {
            args: Prisma.pollUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pollPayload>
          }
          deleteMany: {
            args: Prisma.pollDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pollUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pollUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pollPayload>[]
          }
          upsert: {
            args: Prisma.pollUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pollPayload>
          }
          aggregate: {
            args: Prisma.PollAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePoll>
          }
          groupBy: {
            args: Prisma.pollGroupByArgs<ExtArgs>
            result: $Utils.Optional<PollGroupByOutputType>[]
          }
          count: {
            args: Prisma.pollCountArgs<ExtArgs>
            result: $Utils.Optional<PollCountAggregateOutputType> | number
          }
        }
      }
      questions: {
        payload: Prisma.$questionsPayload<ExtArgs>
        fields: Prisma.questionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.questionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.questionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>
          }
          findFirst: {
            args: Prisma.questionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.questionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>
          }
          findMany: {
            args: Prisma.questionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>[]
          }
          create: {
            args: Prisma.questionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>
          }
          createMany: {
            args: Prisma.questionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.questionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>[]
          }
          delete: {
            args: Prisma.questionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>
          }
          update: {
            args: Prisma.questionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>
          }
          deleteMany: {
            args: Prisma.questionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.questionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.questionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>[]
          }
          upsert: {
            args: Prisma.questionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>
          }
          aggregate: {
            args: Prisma.QuestionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestions>
          }
          groupBy: {
            args: Prisma.questionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.questionsCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionsCountAggregateOutputType> | number
          }
        }
      }
      pollOption: {
        payload: Prisma.$pollOptionPayload<ExtArgs>
        fields: Prisma.pollOptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pollOptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pollOptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pollOptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pollOptionPayload>
          }
          findFirst: {
            args: Prisma.pollOptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pollOptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pollOptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pollOptionPayload>
          }
          findMany: {
            args: Prisma.pollOptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pollOptionPayload>[]
          }
          create: {
            args: Prisma.pollOptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pollOptionPayload>
          }
          createMany: {
            args: Prisma.pollOptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pollOptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pollOptionPayload>[]
          }
          delete: {
            args: Prisma.pollOptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pollOptionPayload>
          }
          update: {
            args: Prisma.pollOptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pollOptionPayload>
          }
          deleteMany: {
            args: Prisma.pollOptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pollOptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pollOptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pollOptionPayload>[]
          }
          upsert: {
            args: Prisma.pollOptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pollOptionPayload>
          }
          aggregate: {
            args: Prisma.PollOptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePollOption>
          }
          groupBy: {
            args: Prisma.pollOptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PollOptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.pollOptionCountArgs<ExtArgs>
            result: $Utils.Optional<PollOptionCountAggregateOutputType> | number
          }
        }
      }
      pollResponses: {
        payload: Prisma.$pollResponsesPayload<ExtArgs>
        fields: Prisma.pollResponsesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pollResponsesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pollResponsesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pollResponsesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pollResponsesPayload>
          }
          findFirst: {
            args: Prisma.pollResponsesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pollResponsesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pollResponsesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pollResponsesPayload>
          }
          findMany: {
            args: Prisma.pollResponsesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pollResponsesPayload>[]
          }
          create: {
            args: Prisma.pollResponsesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pollResponsesPayload>
          }
          createMany: {
            args: Prisma.pollResponsesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pollResponsesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pollResponsesPayload>[]
          }
          delete: {
            args: Prisma.pollResponsesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pollResponsesPayload>
          }
          update: {
            args: Prisma.pollResponsesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pollResponsesPayload>
          }
          deleteMany: {
            args: Prisma.pollResponsesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pollResponsesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pollResponsesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pollResponsesPayload>[]
          }
          upsert: {
            args: Prisma.pollResponsesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pollResponsesPayload>
          }
          aggregate: {
            args: Prisma.PollResponsesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePollResponses>
          }
          groupBy: {
            args: Prisma.pollResponsesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PollResponsesGroupByOutputType>[]
          }
          count: {
            args: Prisma.pollResponsesCountArgs<ExtArgs>
            result: $Utils.Optional<PollResponsesCountAggregateOutputType> | number
          }
        }
      }
      notes: {
        payload: Prisma.$notesPayload<ExtArgs>
        fields: Prisma.notesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.notesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.notesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload>
          }
          findFirst: {
            args: Prisma.notesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.notesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload>
          }
          findMany: {
            args: Prisma.notesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload>[]
          }
          create: {
            args: Prisma.notesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload>
          }
          createMany: {
            args: Prisma.notesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.notesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload>[]
          }
          delete: {
            args: Prisma.notesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload>
          }
          update: {
            args: Prisma.notesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload>
          }
          deleteMany: {
            args: Prisma.notesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.notesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.notesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload>[]
          }
          upsert: {
            args: Prisma.notesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notesPayload>
          }
          aggregate: {
            args: Prisma.NotesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotes>
          }
          groupBy: {
            args: Prisma.notesGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotesGroupByOutputType>[]
          }
          count: {
            args: Prisma.notesCountArgs<ExtArgs>
            result: $Utils.Optional<NotesCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    categories?: categoriesOmit
    videos?: videosOmit
    poll?: pollOmit
    questions?: questionsOmit
    pollOption?: pollOptionOmit
    pollResponses?: pollResponsesOmit
    notes?: notesOmit
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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    videos: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    videos?: boolean | CategoriesCountOutputTypeCountVideosArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountVideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: videosWhereInput
  }


  /**
   * Count Type VideosCountOutputType
   */

  export type VideosCountOutputType = {
    polls: number
    questions: number
  }

  export type VideosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    polls?: boolean | VideosCountOutputTypeCountPollsArgs
    questions?: boolean | VideosCountOutputTypeCountQuestionsArgs
  }

  // Custom InputTypes
  /**
   * VideosCountOutputType without action
   */
  export type VideosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideosCountOutputType
     */
    select?: VideosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VideosCountOutputType without action
   */
  export type VideosCountOutputTypeCountPollsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pollWhereInput
  }

  /**
   * VideosCountOutputType without action
   */
  export type VideosCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: questionsWhereInput
  }


  /**
   * Count Type PollCountOutputType
   */

  export type PollCountOutputType = {
    options: number
  }

  export type PollCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    options?: boolean | PollCountOutputTypeCountOptionsArgs
  }

  // Custom InputTypes
  /**
   * PollCountOutputType without action
   */
  export type PollCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollCountOutputType
     */
    select?: PollCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PollCountOutputType without action
   */
  export type PollCountOutputTypeCountOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pollOptionWhereInput
  }


  /**
   * Count Type PollOptionCountOutputType
   */

  export type PollOptionCountOutputType = {
    responses: number
  }

  export type PollOptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responses?: boolean | PollOptionCountOutputTypeCountResponsesArgs
  }

  // Custom InputTypes
  /**
   * PollOptionCountOutputType without action
   */
  export type PollOptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollOptionCountOutputType
     */
    select?: PollOptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PollOptionCountOutputType without action
   */
  export type PollOptionCountOutputTypeCountResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pollResponsesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriesSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriesMinAggregateOutputType = {
    id: number | null
    categoryName: string | null
    createdAt: Date | null
  }

  export type CategoriesMaxAggregateOutputType = {
    id: number | null
    categoryName: string | null
    createdAt: Date | null
  }

  export type CategoriesCountAggregateOutputType = {
    id: number
    categoryName: number
    createdAt: number
    _all: number
  }


  export type CategoriesAvgAggregateInputType = {
    id?: true
  }

  export type CategoriesSumAggregateInputType = {
    id?: true
  }

  export type CategoriesMinAggregateInputType = {
    id?: true
    categoryName?: true
    createdAt?: true
  }

  export type CategoriesMaxAggregateInputType = {
    id?: true
    categoryName?: true
    createdAt?: true
  }

  export type CategoriesCountAggregateInputType = {
    id?: true
    categoryName?: true
    createdAt?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to aggregate.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriesWhereInput
    orderBy?: categoriesOrderByWithAggregationInput | categoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _avg?: CategoriesAvgAggregateInputType
    _sum?: CategoriesSumAggregateInputType
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    id: number
    categoryName: string
    createdAt: Date
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryName?: boolean
    createdAt?: boolean
    videos?: boolean | categories$videosArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryName?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryName?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectScalar = {
    id?: boolean
    categoryName?: boolean
    createdAt?: boolean
  }

  export type categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "categoryName" | "createdAt", ExtArgs["result"]["categories"]>
  export type categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    videos?: boolean | categories$videosArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type categoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categories"
    objects: {
      videos: Prisma.$videosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      categoryName: string
      createdAt: Date
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type categoriesGetPayload<S extends boolean | null | undefined | categoriesDefaultArgs> = $Result.GetResult<Prisma.$categoriesPayload, S>

  type categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categories'], meta: { name: 'categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {categoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriesFindUniqueArgs>(args: SelectSubset<T, categoriesFindUniqueArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriesFindFirstArgs>(args?: SelectSubset<T, categoriesFindFirstArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categoriesFindManyArgs>(args?: SelectSubset<T, categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {categoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends categoriesCreateArgs>(args: SelectSubset<T, categoriesCreateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoriesCreateManyArgs>(args?: SelectSubset<T, categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {categoriesCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, categoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categories.
     * @param {categoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends categoriesDeleteArgs>(args: SelectSubset<T, categoriesDeleteArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {categoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoriesUpdateArgs>(args: SelectSubset<T, categoriesUpdateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoriesDeleteManyArgs>(args?: SelectSubset<T, categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoriesUpdateManyArgs>(args: SelectSubset<T, categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {categoriesUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.updateManyAndReturn({
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
    updateManyAndReturn<T extends categoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, categoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categories.
     * @param {categoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends categoriesUpsertArgs>(args: SelectSubset<T, categoriesUpsertArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoriesCountArgs>(
      args?: Subset<T, categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesGroupByArgs} args - Group by arguments.
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
      T extends categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriesGroupByArgs['orderBy'] }
        : { orderBy?: categoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categories model
   */
  readonly fields: categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    videos<T extends categories$videosArgs<ExtArgs> = {}>(args?: Subset<T, categories$videosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the categories model
   */
  interface categoriesFieldRefs {
    readonly id: FieldRef<"categories", 'Int'>
    readonly categoryName: FieldRef<"categories", 'String'>
    readonly createdAt: FieldRef<"categories", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * categories findUnique
   */
  export type categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findUniqueOrThrow
   */
  export type categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findFirst
   */
  export type categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findFirstOrThrow
   */
  export type categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findMany
   */
  export type categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories create
   */
  export type categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a categories.
     */
    data: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
  }

  /**
   * categories createMany
   */
  export type categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categories createManyAndReturn
   */
  export type categoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categories update
   */
  export type categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a categories.
     */
    data: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
    /**
     * Choose, which categories to update.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories updateMany
   */
  export type categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categories updateManyAndReturn
   */
  export type categoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categories upsert
   */
  export type categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the categories to update in case it exists.
     */
    where: categoriesWhereUniqueInput
    /**
     * In case the categories found by the `where` argument doesn't exist, create a new categories with this data.
     */
    create: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
    /**
     * In case the categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
  }

  /**
   * categories delete
   */
  export type categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter which categories to delete.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories deleteMany
   */
  export type categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * categories.videos
   */
  export type categories$videosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos
     */
    omit?: videosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videosInclude<ExtArgs> | null
    where?: videosWhereInput
    orderBy?: videosOrderByWithRelationInput | videosOrderByWithRelationInput[]
    cursor?: videosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideosScalarFieldEnum | VideosScalarFieldEnum[]
  }

  /**
   * categories without action
   */
  export type categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
  }


  /**
   * Model videos
   */

  export type AggregateVideos = {
    _count: VideosCountAggregateOutputType | null
    _avg: VideosAvgAggregateOutputType | null
    _sum: VideosSumAggregateOutputType | null
    _min: VideosMinAggregateOutputType | null
    _max: VideosMaxAggregateOutputType | null
  }

  export type VideosAvgAggregateOutputType = {
    id: number | null
  }

  export type VideosSumAggregateOutputType = {
    id: number | null
  }

  export type VideosMinAggregateOutputType = {
    id: number | null
    videoId: string | null
    videoUrl: string | null
    createdBy: string | null
    createdAt: Date | null
    categoryName: string | null
  }

  export type VideosMaxAggregateOutputType = {
    id: number | null
    videoId: string | null
    videoUrl: string | null
    createdBy: string | null
    createdAt: Date | null
    categoryName: string | null
  }

  export type VideosCountAggregateOutputType = {
    id: number
    videoId: number
    videoUrl: number
    createdBy: number
    createdAt: number
    categoryName: number
    _all: number
  }


  export type VideosAvgAggregateInputType = {
    id?: true
  }

  export type VideosSumAggregateInputType = {
    id?: true
  }

  export type VideosMinAggregateInputType = {
    id?: true
    videoId?: true
    videoUrl?: true
    createdBy?: true
    createdAt?: true
    categoryName?: true
  }

  export type VideosMaxAggregateInputType = {
    id?: true
    videoId?: true
    videoUrl?: true
    createdBy?: true
    createdAt?: true
    categoryName?: true
  }

  export type VideosCountAggregateInputType = {
    id?: true
    videoId?: true
    videoUrl?: true
    createdBy?: true
    createdAt?: true
    categoryName?: true
    _all?: true
  }

  export type VideosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which videos to aggregate.
     */
    where?: videosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of videos to fetch.
     */
    orderBy?: videosOrderByWithRelationInput | videosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: videosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned videos
    **/
    _count?: true | VideosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VideosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VideosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideosMaxAggregateInputType
  }

  export type GetVideosAggregateType<T extends VideosAggregateArgs> = {
        [P in keyof T & keyof AggregateVideos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideos[P]>
      : GetScalarType<T[P], AggregateVideos[P]>
  }




  export type videosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: videosWhereInput
    orderBy?: videosOrderByWithAggregationInput | videosOrderByWithAggregationInput[]
    by: VideosScalarFieldEnum[] | VideosScalarFieldEnum
    having?: videosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideosCountAggregateInputType | true
    _avg?: VideosAvgAggregateInputType
    _sum?: VideosSumAggregateInputType
    _min?: VideosMinAggregateInputType
    _max?: VideosMaxAggregateInputType
  }

  export type VideosGroupByOutputType = {
    id: number
    videoId: string
    videoUrl: string
    createdBy: string
    createdAt: Date
    categoryName: string | null
    _count: VideosCountAggregateOutputType | null
    _avg: VideosAvgAggregateOutputType | null
    _sum: VideosSumAggregateOutputType | null
    _min: VideosMinAggregateOutputType | null
    _max: VideosMaxAggregateOutputType | null
  }

  type GetVideosGroupByPayload<T extends videosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideosGroupByOutputType[P]>
            : GetScalarType<T[P], VideosGroupByOutputType[P]>
        }
      >
    >


  export type videosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    videoId?: boolean
    videoUrl?: boolean
    createdBy?: boolean
    createdAt?: boolean
    categoryName?: boolean
    category?: boolean | videos$categoryArgs<ExtArgs>
    polls?: boolean | videos$pollsArgs<ExtArgs>
    questions?: boolean | videos$questionsArgs<ExtArgs>
    _count?: boolean | VideosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videos"]>

  export type videosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    videoId?: boolean
    videoUrl?: boolean
    createdBy?: boolean
    createdAt?: boolean
    categoryName?: boolean
    category?: boolean | videos$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["videos"]>

  export type videosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    videoId?: boolean
    videoUrl?: boolean
    createdBy?: boolean
    createdAt?: boolean
    categoryName?: boolean
    category?: boolean | videos$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["videos"]>

  export type videosSelectScalar = {
    id?: boolean
    videoId?: boolean
    videoUrl?: boolean
    createdBy?: boolean
    createdAt?: boolean
    categoryName?: boolean
  }

  export type videosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "videoId" | "videoUrl" | "createdBy" | "createdAt" | "categoryName", ExtArgs["result"]["videos"]>
  export type videosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | videos$categoryArgs<ExtArgs>
    polls?: boolean | videos$pollsArgs<ExtArgs>
    questions?: boolean | videos$questionsArgs<ExtArgs>
    _count?: boolean | VideosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type videosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | videos$categoryArgs<ExtArgs>
  }
  export type videosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | videos$categoryArgs<ExtArgs>
  }

  export type $videosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "videos"
    objects: {
      category: Prisma.$categoriesPayload<ExtArgs> | null
      polls: Prisma.$pollPayload<ExtArgs>[]
      questions: Prisma.$questionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      videoId: string
      videoUrl: string
      createdBy: string
      createdAt: Date
      categoryName: string | null
    }, ExtArgs["result"]["videos"]>
    composites: {}
  }

  type videosGetPayload<S extends boolean | null | undefined | videosDefaultArgs> = $Result.GetResult<Prisma.$videosPayload, S>

  type videosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<videosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideosCountAggregateInputType | true
    }

  export interface videosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['videos'], meta: { name: 'videos' } }
    /**
     * Find zero or one Videos that matches the filter.
     * @param {videosFindUniqueArgs} args - Arguments to find a Videos
     * @example
     * // Get one Videos
     * const videos = await prisma.videos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends videosFindUniqueArgs>(args: SelectSubset<T, videosFindUniqueArgs<ExtArgs>>): Prisma__videosClient<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Videos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {videosFindUniqueOrThrowArgs} args - Arguments to find a Videos
     * @example
     * // Get one Videos
     * const videos = await prisma.videos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends videosFindUniqueOrThrowArgs>(args: SelectSubset<T, videosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__videosClient<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videosFindFirstArgs} args - Arguments to find a Videos
     * @example
     * // Get one Videos
     * const videos = await prisma.videos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends videosFindFirstArgs>(args?: SelectSubset<T, videosFindFirstArgs<ExtArgs>>): Prisma__videosClient<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Videos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videosFindFirstOrThrowArgs} args - Arguments to find a Videos
     * @example
     * // Get one Videos
     * const videos = await prisma.videos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends videosFindFirstOrThrowArgs>(args?: SelectSubset<T, videosFindFirstOrThrowArgs<ExtArgs>>): Prisma__videosClient<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Videos
     * const videos = await prisma.videos.findMany()
     * 
     * // Get first 10 Videos
     * const videos = await prisma.videos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videosWithIdOnly = await prisma.videos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends videosFindManyArgs>(args?: SelectSubset<T, videosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Videos.
     * @param {videosCreateArgs} args - Arguments to create a Videos.
     * @example
     * // Create one Videos
     * const Videos = await prisma.videos.create({
     *   data: {
     *     // ... data to create a Videos
     *   }
     * })
     * 
     */
    create<T extends videosCreateArgs>(args: SelectSubset<T, videosCreateArgs<ExtArgs>>): Prisma__videosClient<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Videos.
     * @param {videosCreateManyArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const videos = await prisma.videos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends videosCreateManyArgs>(args?: SelectSubset<T, videosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Videos and returns the data saved in the database.
     * @param {videosCreateManyAndReturnArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const videos = await prisma.videos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Videos and only return the `id`
     * const videosWithIdOnly = await prisma.videos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends videosCreateManyAndReturnArgs>(args?: SelectSubset<T, videosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Videos.
     * @param {videosDeleteArgs} args - Arguments to delete one Videos.
     * @example
     * // Delete one Videos
     * const Videos = await prisma.videos.delete({
     *   where: {
     *     // ... filter to delete one Videos
     *   }
     * })
     * 
     */
    delete<T extends videosDeleteArgs>(args: SelectSubset<T, videosDeleteArgs<ExtArgs>>): Prisma__videosClient<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Videos.
     * @param {videosUpdateArgs} args - Arguments to update one Videos.
     * @example
     * // Update one Videos
     * const videos = await prisma.videos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends videosUpdateArgs>(args: SelectSubset<T, videosUpdateArgs<ExtArgs>>): Prisma__videosClient<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Videos.
     * @param {videosDeleteManyArgs} args - Arguments to filter Videos to delete.
     * @example
     * // Delete a few Videos
     * const { count } = await prisma.videos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends videosDeleteManyArgs>(args?: SelectSubset<T, videosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Videos
     * const videos = await prisma.videos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends videosUpdateManyArgs>(args: SelectSubset<T, videosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos and returns the data updated in the database.
     * @param {videosUpdateManyAndReturnArgs} args - Arguments to update many Videos.
     * @example
     * // Update many Videos
     * const videos = await prisma.videos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Videos and only return the `id`
     * const videosWithIdOnly = await prisma.videos.updateManyAndReturn({
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
    updateManyAndReturn<T extends videosUpdateManyAndReturnArgs>(args: SelectSubset<T, videosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Videos.
     * @param {videosUpsertArgs} args - Arguments to update or create a Videos.
     * @example
     * // Update or create a Videos
     * const videos = await prisma.videos.upsert({
     *   create: {
     *     // ... data to create a Videos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Videos we want to update
     *   }
     * })
     */
    upsert<T extends videosUpsertArgs>(args: SelectSubset<T, videosUpsertArgs<ExtArgs>>): Prisma__videosClient<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videosCountArgs} args - Arguments to filter Videos to count.
     * @example
     * // Count the number of Videos
     * const count = await prisma.videos.count({
     *   where: {
     *     // ... the filter for the Videos we want to count
     *   }
     * })
    **/
    count<T extends videosCountArgs>(
      args?: Subset<T, videosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VideosAggregateArgs>(args: Subset<T, VideosAggregateArgs>): Prisma.PrismaPromise<GetVideosAggregateType<T>>

    /**
     * Group by Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videosGroupByArgs} args - Group by arguments.
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
      T extends videosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: videosGroupByArgs['orderBy'] }
        : { orderBy?: videosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, videosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the videos model
   */
  readonly fields: videosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for videos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__videosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends videos$categoryArgs<ExtArgs> = {}>(args?: Subset<T, videos$categoryArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    polls<T extends videos$pollsArgs<ExtArgs> = {}>(args?: Subset<T, videos$pollsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pollPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    questions<T extends videos$questionsArgs<ExtArgs> = {}>(args?: Subset<T, videos$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the videos model
   */
  interface videosFieldRefs {
    readonly id: FieldRef<"videos", 'Int'>
    readonly videoId: FieldRef<"videos", 'String'>
    readonly videoUrl: FieldRef<"videos", 'String'>
    readonly createdBy: FieldRef<"videos", 'String'>
    readonly createdAt: FieldRef<"videos", 'DateTime'>
    readonly categoryName: FieldRef<"videos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * videos findUnique
   */
  export type videosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos
     */
    omit?: videosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videosInclude<ExtArgs> | null
    /**
     * Filter, which videos to fetch.
     */
    where: videosWhereUniqueInput
  }

  /**
   * videos findUniqueOrThrow
   */
  export type videosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos
     */
    omit?: videosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videosInclude<ExtArgs> | null
    /**
     * Filter, which videos to fetch.
     */
    where: videosWhereUniqueInput
  }

  /**
   * videos findFirst
   */
  export type videosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos
     */
    omit?: videosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videosInclude<ExtArgs> | null
    /**
     * Filter, which videos to fetch.
     */
    where?: videosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of videos to fetch.
     */
    orderBy?: videosOrderByWithRelationInput | videosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for videos.
     */
    cursor?: videosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of videos.
     */
    distinct?: VideosScalarFieldEnum | VideosScalarFieldEnum[]
  }

  /**
   * videos findFirstOrThrow
   */
  export type videosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos
     */
    omit?: videosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videosInclude<ExtArgs> | null
    /**
     * Filter, which videos to fetch.
     */
    where?: videosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of videos to fetch.
     */
    orderBy?: videosOrderByWithRelationInput | videosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for videos.
     */
    cursor?: videosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of videos.
     */
    distinct?: VideosScalarFieldEnum | VideosScalarFieldEnum[]
  }

  /**
   * videos findMany
   */
  export type videosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos
     */
    omit?: videosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videosInclude<ExtArgs> | null
    /**
     * Filter, which videos to fetch.
     */
    where?: videosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of videos to fetch.
     */
    orderBy?: videosOrderByWithRelationInput | videosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing videos.
     */
    cursor?: videosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` videos.
     */
    skip?: number
    distinct?: VideosScalarFieldEnum | VideosScalarFieldEnum[]
  }

  /**
   * videos create
   */
  export type videosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos
     */
    omit?: videosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videosInclude<ExtArgs> | null
    /**
     * The data needed to create a videos.
     */
    data: XOR<videosCreateInput, videosUncheckedCreateInput>
  }

  /**
   * videos createMany
   */
  export type videosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many videos.
     */
    data: videosCreateManyInput | videosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * videos createManyAndReturn
   */
  export type videosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the videos
     */
    omit?: videosOmit<ExtArgs> | null
    /**
     * The data used to create many videos.
     */
    data: videosCreateManyInput | videosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * videos update
   */
  export type videosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos
     */
    omit?: videosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videosInclude<ExtArgs> | null
    /**
     * The data needed to update a videos.
     */
    data: XOR<videosUpdateInput, videosUncheckedUpdateInput>
    /**
     * Choose, which videos to update.
     */
    where: videosWhereUniqueInput
  }

  /**
   * videos updateMany
   */
  export type videosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update videos.
     */
    data: XOR<videosUpdateManyMutationInput, videosUncheckedUpdateManyInput>
    /**
     * Filter which videos to update
     */
    where?: videosWhereInput
    /**
     * Limit how many videos to update.
     */
    limit?: number
  }

  /**
   * videos updateManyAndReturn
   */
  export type videosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the videos
     */
    omit?: videosOmit<ExtArgs> | null
    /**
     * The data used to update videos.
     */
    data: XOR<videosUpdateManyMutationInput, videosUncheckedUpdateManyInput>
    /**
     * Filter which videos to update
     */
    where?: videosWhereInput
    /**
     * Limit how many videos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * videos upsert
   */
  export type videosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos
     */
    omit?: videosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videosInclude<ExtArgs> | null
    /**
     * The filter to search for the videos to update in case it exists.
     */
    where: videosWhereUniqueInput
    /**
     * In case the videos found by the `where` argument doesn't exist, create a new videos with this data.
     */
    create: XOR<videosCreateInput, videosUncheckedCreateInput>
    /**
     * In case the videos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<videosUpdateInput, videosUncheckedUpdateInput>
  }

  /**
   * videos delete
   */
  export type videosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos
     */
    omit?: videosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videosInclude<ExtArgs> | null
    /**
     * Filter which videos to delete.
     */
    where: videosWhereUniqueInput
  }

  /**
   * videos deleteMany
   */
  export type videosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which videos to delete
     */
    where?: videosWhereInput
    /**
     * Limit how many videos to delete.
     */
    limit?: number
  }

  /**
   * videos.category
   */
  export type videos$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    where?: categoriesWhereInput
  }

  /**
   * videos.polls
   */
  export type videos$pollsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the poll
     */
    select?: pollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the poll
     */
    omit?: pollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pollInclude<ExtArgs> | null
    where?: pollWhereInput
    orderBy?: pollOrderByWithRelationInput | pollOrderByWithRelationInput[]
    cursor?: pollWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PollScalarFieldEnum | PollScalarFieldEnum[]
  }

  /**
   * videos.questions
   */
  export type videos$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    where?: questionsWhereInput
    orderBy?: questionsOrderByWithRelationInput | questionsOrderByWithRelationInput[]
    cursor?: questionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * videos without action
   */
  export type videosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos
     */
    omit?: videosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videosInclude<ExtArgs> | null
  }


  /**
   * Model poll
   */

  export type AggregatePoll = {
    _count: PollCountAggregateOutputType | null
    _avg: PollAvgAggregateOutputType | null
    _sum: PollSumAggregateOutputType | null
    _min: PollMinAggregateOutputType | null
    _max: PollMaxAggregateOutputType | null
  }

  export type PollAvgAggregateOutputType = {
    id: number | null
  }

  export type PollSumAggregateOutputType = {
    id: number | null
  }

  export type PollMinAggregateOutputType = {
    id: number | null
    createdBy: string | null
    createdAT: Date | null
    question: string | null
    startTime: string | null
    duration: string | null
    type: string | null
    videoId: string | null
  }

  export type PollMaxAggregateOutputType = {
    id: number | null
    createdBy: string | null
    createdAT: Date | null
    question: string | null
    startTime: string | null
    duration: string | null
    type: string | null
    videoId: string | null
  }

  export type PollCountAggregateOutputType = {
    id: number
    createdBy: number
    createdAT: number
    question: number
    startTime: number
    duration: number
    type: number
    videoId: number
    _all: number
  }


  export type PollAvgAggregateInputType = {
    id?: true
  }

  export type PollSumAggregateInputType = {
    id?: true
  }

  export type PollMinAggregateInputType = {
    id?: true
    createdBy?: true
    createdAT?: true
    question?: true
    startTime?: true
    duration?: true
    type?: true
    videoId?: true
  }

  export type PollMaxAggregateInputType = {
    id?: true
    createdBy?: true
    createdAT?: true
    question?: true
    startTime?: true
    duration?: true
    type?: true
    videoId?: true
  }

  export type PollCountAggregateInputType = {
    id?: true
    createdBy?: true
    createdAT?: true
    question?: true
    startTime?: true
    duration?: true
    type?: true
    videoId?: true
    _all?: true
  }

  export type PollAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which poll to aggregate.
     */
    where?: pollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of polls to fetch.
     */
    orderBy?: pollOrderByWithRelationInput | pollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` polls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` polls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned polls
    **/
    _count?: true | PollCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PollAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PollSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PollMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PollMaxAggregateInputType
  }

  export type GetPollAggregateType<T extends PollAggregateArgs> = {
        [P in keyof T & keyof AggregatePoll]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePoll[P]>
      : GetScalarType<T[P], AggregatePoll[P]>
  }




  export type pollGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pollWhereInput
    orderBy?: pollOrderByWithAggregationInput | pollOrderByWithAggregationInput[]
    by: PollScalarFieldEnum[] | PollScalarFieldEnum
    having?: pollScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PollCountAggregateInputType | true
    _avg?: PollAvgAggregateInputType
    _sum?: PollSumAggregateInputType
    _min?: PollMinAggregateInputType
    _max?: PollMaxAggregateInputType
  }

  export type PollGroupByOutputType = {
    id: number
    createdBy: string
    createdAT: Date
    question: string
    startTime: string
    duration: string
    type: string
    videoId: string | null
    _count: PollCountAggregateOutputType | null
    _avg: PollAvgAggregateOutputType | null
    _sum: PollSumAggregateOutputType | null
    _min: PollMinAggregateOutputType | null
    _max: PollMaxAggregateOutputType | null
  }

  type GetPollGroupByPayload<T extends pollGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PollGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PollGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PollGroupByOutputType[P]>
            : GetScalarType<T[P], PollGroupByOutputType[P]>
        }
      >
    >


  export type pollSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdBy?: boolean
    createdAT?: boolean
    question?: boolean
    startTime?: boolean
    duration?: boolean
    type?: boolean
    videoId?: boolean
    options?: boolean | poll$optionsArgs<ExtArgs>
    video?: boolean | poll$videoArgs<ExtArgs>
    _count?: boolean | PollCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["poll"]>

  export type pollSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdBy?: boolean
    createdAT?: boolean
    question?: boolean
    startTime?: boolean
    duration?: boolean
    type?: boolean
    videoId?: boolean
    video?: boolean | poll$videoArgs<ExtArgs>
  }, ExtArgs["result"]["poll"]>

  export type pollSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdBy?: boolean
    createdAT?: boolean
    question?: boolean
    startTime?: boolean
    duration?: boolean
    type?: boolean
    videoId?: boolean
    video?: boolean | poll$videoArgs<ExtArgs>
  }, ExtArgs["result"]["poll"]>

  export type pollSelectScalar = {
    id?: boolean
    createdBy?: boolean
    createdAT?: boolean
    question?: boolean
    startTime?: boolean
    duration?: boolean
    type?: boolean
    videoId?: boolean
  }

  export type pollOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdBy" | "createdAT" | "question" | "startTime" | "duration" | "type" | "videoId", ExtArgs["result"]["poll"]>
  export type pollInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    options?: boolean | poll$optionsArgs<ExtArgs>
    video?: boolean | poll$videoArgs<ExtArgs>
    _count?: boolean | PollCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type pollIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | poll$videoArgs<ExtArgs>
  }
  export type pollIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | poll$videoArgs<ExtArgs>
  }

  export type $pollPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "poll"
    objects: {
      options: Prisma.$pollOptionPayload<ExtArgs>[]
      video: Prisma.$videosPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdBy: string
      createdAT: Date
      question: string
      startTime: string
      duration: string
      type: string
      videoId: string | null
    }, ExtArgs["result"]["poll"]>
    composites: {}
  }

  type pollGetPayload<S extends boolean | null | undefined | pollDefaultArgs> = $Result.GetResult<Prisma.$pollPayload, S>

  type pollCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pollFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PollCountAggregateInputType | true
    }

  export interface pollDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['poll'], meta: { name: 'poll' } }
    /**
     * Find zero or one Poll that matches the filter.
     * @param {pollFindUniqueArgs} args - Arguments to find a Poll
     * @example
     * // Get one Poll
     * const poll = await prisma.poll.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pollFindUniqueArgs>(args: SelectSubset<T, pollFindUniqueArgs<ExtArgs>>): Prisma__pollClient<$Result.GetResult<Prisma.$pollPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Poll that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pollFindUniqueOrThrowArgs} args - Arguments to find a Poll
     * @example
     * // Get one Poll
     * const poll = await prisma.poll.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pollFindUniqueOrThrowArgs>(args: SelectSubset<T, pollFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pollClient<$Result.GetResult<Prisma.$pollPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Poll that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pollFindFirstArgs} args - Arguments to find a Poll
     * @example
     * // Get one Poll
     * const poll = await prisma.poll.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pollFindFirstArgs>(args?: SelectSubset<T, pollFindFirstArgs<ExtArgs>>): Prisma__pollClient<$Result.GetResult<Prisma.$pollPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Poll that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pollFindFirstOrThrowArgs} args - Arguments to find a Poll
     * @example
     * // Get one Poll
     * const poll = await prisma.poll.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pollFindFirstOrThrowArgs>(args?: SelectSubset<T, pollFindFirstOrThrowArgs<ExtArgs>>): Prisma__pollClient<$Result.GetResult<Prisma.$pollPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Polls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pollFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Polls
     * const polls = await prisma.poll.findMany()
     * 
     * // Get first 10 Polls
     * const polls = await prisma.poll.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pollWithIdOnly = await prisma.poll.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends pollFindManyArgs>(args?: SelectSubset<T, pollFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pollPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Poll.
     * @param {pollCreateArgs} args - Arguments to create a Poll.
     * @example
     * // Create one Poll
     * const Poll = await prisma.poll.create({
     *   data: {
     *     // ... data to create a Poll
     *   }
     * })
     * 
     */
    create<T extends pollCreateArgs>(args: SelectSubset<T, pollCreateArgs<ExtArgs>>): Prisma__pollClient<$Result.GetResult<Prisma.$pollPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Polls.
     * @param {pollCreateManyArgs} args - Arguments to create many Polls.
     * @example
     * // Create many Polls
     * const poll = await prisma.poll.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pollCreateManyArgs>(args?: SelectSubset<T, pollCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Polls and returns the data saved in the database.
     * @param {pollCreateManyAndReturnArgs} args - Arguments to create many Polls.
     * @example
     * // Create many Polls
     * const poll = await prisma.poll.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Polls and only return the `id`
     * const pollWithIdOnly = await prisma.poll.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pollCreateManyAndReturnArgs>(args?: SelectSubset<T, pollCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pollPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Poll.
     * @param {pollDeleteArgs} args - Arguments to delete one Poll.
     * @example
     * // Delete one Poll
     * const Poll = await prisma.poll.delete({
     *   where: {
     *     // ... filter to delete one Poll
     *   }
     * })
     * 
     */
    delete<T extends pollDeleteArgs>(args: SelectSubset<T, pollDeleteArgs<ExtArgs>>): Prisma__pollClient<$Result.GetResult<Prisma.$pollPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Poll.
     * @param {pollUpdateArgs} args - Arguments to update one Poll.
     * @example
     * // Update one Poll
     * const poll = await prisma.poll.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pollUpdateArgs>(args: SelectSubset<T, pollUpdateArgs<ExtArgs>>): Prisma__pollClient<$Result.GetResult<Prisma.$pollPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Polls.
     * @param {pollDeleteManyArgs} args - Arguments to filter Polls to delete.
     * @example
     * // Delete a few Polls
     * const { count } = await prisma.poll.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pollDeleteManyArgs>(args?: SelectSubset<T, pollDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Polls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pollUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Polls
     * const poll = await prisma.poll.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pollUpdateManyArgs>(args: SelectSubset<T, pollUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Polls and returns the data updated in the database.
     * @param {pollUpdateManyAndReturnArgs} args - Arguments to update many Polls.
     * @example
     * // Update many Polls
     * const poll = await prisma.poll.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Polls and only return the `id`
     * const pollWithIdOnly = await prisma.poll.updateManyAndReturn({
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
    updateManyAndReturn<T extends pollUpdateManyAndReturnArgs>(args: SelectSubset<T, pollUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pollPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Poll.
     * @param {pollUpsertArgs} args - Arguments to update or create a Poll.
     * @example
     * // Update or create a Poll
     * const poll = await prisma.poll.upsert({
     *   create: {
     *     // ... data to create a Poll
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Poll we want to update
     *   }
     * })
     */
    upsert<T extends pollUpsertArgs>(args: SelectSubset<T, pollUpsertArgs<ExtArgs>>): Prisma__pollClient<$Result.GetResult<Prisma.$pollPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Polls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pollCountArgs} args - Arguments to filter Polls to count.
     * @example
     * // Count the number of Polls
     * const count = await prisma.poll.count({
     *   where: {
     *     // ... the filter for the Polls we want to count
     *   }
     * })
    **/
    count<T extends pollCountArgs>(
      args?: Subset<T, pollCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PollCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Poll.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PollAggregateArgs>(args: Subset<T, PollAggregateArgs>): Prisma.PrismaPromise<GetPollAggregateType<T>>

    /**
     * Group by Poll.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pollGroupByArgs} args - Group by arguments.
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
      T extends pollGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pollGroupByArgs['orderBy'] }
        : { orderBy?: pollGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pollGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPollGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the poll model
   */
  readonly fields: pollFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for poll.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pollClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    options<T extends poll$optionsArgs<ExtArgs> = {}>(args?: Subset<T, poll$optionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pollOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    video<T extends poll$videoArgs<ExtArgs> = {}>(args?: Subset<T, poll$videoArgs<ExtArgs>>): Prisma__videosClient<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the poll model
   */
  interface pollFieldRefs {
    readonly id: FieldRef<"poll", 'Int'>
    readonly createdBy: FieldRef<"poll", 'String'>
    readonly createdAT: FieldRef<"poll", 'DateTime'>
    readonly question: FieldRef<"poll", 'String'>
    readonly startTime: FieldRef<"poll", 'String'>
    readonly duration: FieldRef<"poll", 'String'>
    readonly type: FieldRef<"poll", 'String'>
    readonly videoId: FieldRef<"poll", 'String'>
  }
    

  // Custom InputTypes
  /**
   * poll findUnique
   */
  export type pollFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the poll
     */
    select?: pollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the poll
     */
    omit?: pollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pollInclude<ExtArgs> | null
    /**
     * Filter, which poll to fetch.
     */
    where: pollWhereUniqueInput
  }

  /**
   * poll findUniqueOrThrow
   */
  export type pollFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the poll
     */
    select?: pollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the poll
     */
    omit?: pollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pollInclude<ExtArgs> | null
    /**
     * Filter, which poll to fetch.
     */
    where: pollWhereUniqueInput
  }

  /**
   * poll findFirst
   */
  export type pollFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the poll
     */
    select?: pollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the poll
     */
    omit?: pollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pollInclude<ExtArgs> | null
    /**
     * Filter, which poll to fetch.
     */
    where?: pollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of polls to fetch.
     */
    orderBy?: pollOrderByWithRelationInput | pollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for polls.
     */
    cursor?: pollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` polls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` polls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of polls.
     */
    distinct?: PollScalarFieldEnum | PollScalarFieldEnum[]
  }

  /**
   * poll findFirstOrThrow
   */
  export type pollFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the poll
     */
    select?: pollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the poll
     */
    omit?: pollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pollInclude<ExtArgs> | null
    /**
     * Filter, which poll to fetch.
     */
    where?: pollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of polls to fetch.
     */
    orderBy?: pollOrderByWithRelationInput | pollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for polls.
     */
    cursor?: pollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` polls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` polls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of polls.
     */
    distinct?: PollScalarFieldEnum | PollScalarFieldEnum[]
  }

  /**
   * poll findMany
   */
  export type pollFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the poll
     */
    select?: pollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the poll
     */
    omit?: pollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pollInclude<ExtArgs> | null
    /**
     * Filter, which polls to fetch.
     */
    where?: pollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of polls to fetch.
     */
    orderBy?: pollOrderByWithRelationInput | pollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing polls.
     */
    cursor?: pollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` polls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` polls.
     */
    skip?: number
    distinct?: PollScalarFieldEnum | PollScalarFieldEnum[]
  }

  /**
   * poll create
   */
  export type pollCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the poll
     */
    select?: pollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the poll
     */
    omit?: pollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pollInclude<ExtArgs> | null
    /**
     * The data needed to create a poll.
     */
    data: XOR<pollCreateInput, pollUncheckedCreateInput>
  }

  /**
   * poll createMany
   */
  export type pollCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many polls.
     */
    data: pollCreateManyInput | pollCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * poll createManyAndReturn
   */
  export type pollCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the poll
     */
    select?: pollSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the poll
     */
    omit?: pollOmit<ExtArgs> | null
    /**
     * The data used to create many polls.
     */
    data: pollCreateManyInput | pollCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pollIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * poll update
   */
  export type pollUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the poll
     */
    select?: pollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the poll
     */
    omit?: pollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pollInclude<ExtArgs> | null
    /**
     * The data needed to update a poll.
     */
    data: XOR<pollUpdateInput, pollUncheckedUpdateInput>
    /**
     * Choose, which poll to update.
     */
    where: pollWhereUniqueInput
  }

  /**
   * poll updateMany
   */
  export type pollUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update polls.
     */
    data: XOR<pollUpdateManyMutationInput, pollUncheckedUpdateManyInput>
    /**
     * Filter which polls to update
     */
    where?: pollWhereInput
    /**
     * Limit how many polls to update.
     */
    limit?: number
  }

  /**
   * poll updateManyAndReturn
   */
  export type pollUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the poll
     */
    select?: pollSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the poll
     */
    omit?: pollOmit<ExtArgs> | null
    /**
     * The data used to update polls.
     */
    data: XOR<pollUpdateManyMutationInput, pollUncheckedUpdateManyInput>
    /**
     * Filter which polls to update
     */
    where?: pollWhereInput
    /**
     * Limit how many polls to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pollIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * poll upsert
   */
  export type pollUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the poll
     */
    select?: pollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the poll
     */
    omit?: pollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pollInclude<ExtArgs> | null
    /**
     * The filter to search for the poll to update in case it exists.
     */
    where: pollWhereUniqueInput
    /**
     * In case the poll found by the `where` argument doesn't exist, create a new poll with this data.
     */
    create: XOR<pollCreateInput, pollUncheckedCreateInput>
    /**
     * In case the poll was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pollUpdateInput, pollUncheckedUpdateInput>
  }

  /**
   * poll delete
   */
  export type pollDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the poll
     */
    select?: pollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the poll
     */
    omit?: pollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pollInclude<ExtArgs> | null
    /**
     * Filter which poll to delete.
     */
    where: pollWhereUniqueInput
  }

  /**
   * poll deleteMany
   */
  export type pollDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which polls to delete
     */
    where?: pollWhereInput
    /**
     * Limit how many polls to delete.
     */
    limit?: number
  }

  /**
   * poll.options
   */
  export type poll$optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pollOption
     */
    select?: pollOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pollOption
     */
    omit?: pollOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pollOptionInclude<ExtArgs> | null
    where?: pollOptionWhereInput
    orderBy?: pollOptionOrderByWithRelationInput | pollOptionOrderByWithRelationInput[]
    cursor?: pollOptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PollOptionScalarFieldEnum | PollOptionScalarFieldEnum[]
  }

  /**
   * poll.video
   */
  export type poll$videoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos
     */
    omit?: videosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videosInclude<ExtArgs> | null
    where?: videosWhereInput
  }

  /**
   * poll without action
   */
  export type pollDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the poll
     */
    select?: pollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the poll
     */
    omit?: pollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pollInclude<ExtArgs> | null
  }


  /**
   * Model questions
   */

  export type AggregateQuestions = {
    _count: QuestionsCountAggregateOutputType | null
    _avg: QuestionsAvgAggregateOutputType | null
    _sum: QuestionsSumAggregateOutputType | null
    _min: QuestionsMinAggregateOutputType | null
    _max: QuestionsMaxAggregateOutputType | null
  }

  export type QuestionsAvgAggregateOutputType = {
    id: number | null
  }

  export type QuestionsSumAggregateOutputType = {
    id: number | null
  }

  export type QuestionsMinAggregateOutputType = {
    id: number | null
    createdBy: string | null
    createdAt: Date | null
    imageUrl: string | null
    startTime: string | null
    videoId: string | null
    duration: string | null
    type: string | null
  }

  export type QuestionsMaxAggregateOutputType = {
    id: number | null
    createdBy: string | null
    createdAt: Date | null
    imageUrl: string | null
    startTime: string | null
    videoId: string | null
    duration: string | null
    type: string | null
  }

  export type QuestionsCountAggregateOutputType = {
    id: number
    createdBy: number
    createdAt: number
    imageUrl: number
    startTime: number
    videoId: number
    duration: number
    type: number
    _all: number
  }


  export type QuestionsAvgAggregateInputType = {
    id?: true
  }

  export type QuestionsSumAggregateInputType = {
    id?: true
  }

  export type QuestionsMinAggregateInputType = {
    id?: true
    createdBy?: true
    createdAt?: true
    imageUrl?: true
    startTime?: true
    videoId?: true
    duration?: true
    type?: true
  }

  export type QuestionsMaxAggregateInputType = {
    id?: true
    createdBy?: true
    createdAt?: true
    imageUrl?: true
    startTime?: true
    videoId?: true
    duration?: true
    type?: true
  }

  export type QuestionsCountAggregateInputType = {
    id?: true
    createdBy?: true
    createdAt?: true
    imageUrl?: true
    startTime?: true
    videoId?: true
    duration?: true
    type?: true
    _all?: true
  }

  export type QuestionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which questions to aggregate.
     */
    where?: questionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of questions to fetch.
     */
    orderBy?: questionsOrderByWithRelationInput | questionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: questionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned questions
    **/
    _count?: true | QuestionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionsMaxAggregateInputType
  }

  export type GetQuestionsAggregateType<T extends QuestionsAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestions[P]>
      : GetScalarType<T[P], AggregateQuestions[P]>
  }




  export type questionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: questionsWhereInput
    orderBy?: questionsOrderByWithAggregationInput | questionsOrderByWithAggregationInput[]
    by: QuestionsScalarFieldEnum[] | QuestionsScalarFieldEnum
    having?: questionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionsCountAggregateInputType | true
    _avg?: QuestionsAvgAggregateInputType
    _sum?: QuestionsSumAggregateInputType
    _min?: QuestionsMinAggregateInputType
    _max?: QuestionsMaxAggregateInputType
  }

  export type QuestionsGroupByOutputType = {
    id: number
    createdBy: string
    createdAt: Date
    imageUrl: string
    startTime: string
    videoId: string | null
    duration: string
    type: string
    _count: QuestionsCountAggregateOutputType | null
    _avg: QuestionsAvgAggregateOutputType | null
    _sum: QuestionsSumAggregateOutputType | null
    _min: QuestionsMinAggregateOutputType | null
    _max: QuestionsMaxAggregateOutputType | null
  }

  type GetQuestionsGroupByPayload<T extends questionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionsGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionsGroupByOutputType[P]>
        }
      >
    >


  export type questionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdBy?: boolean
    createdAt?: boolean
    imageUrl?: boolean
    startTime?: boolean
    videoId?: boolean
    duration?: boolean
    type?: boolean
    video?: boolean | questions$videoArgs<ExtArgs>
  }, ExtArgs["result"]["questions"]>

  export type questionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdBy?: boolean
    createdAt?: boolean
    imageUrl?: boolean
    startTime?: boolean
    videoId?: boolean
    duration?: boolean
    type?: boolean
    video?: boolean | questions$videoArgs<ExtArgs>
  }, ExtArgs["result"]["questions"]>

  export type questionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdBy?: boolean
    createdAt?: boolean
    imageUrl?: boolean
    startTime?: boolean
    videoId?: boolean
    duration?: boolean
    type?: boolean
    video?: boolean | questions$videoArgs<ExtArgs>
  }, ExtArgs["result"]["questions"]>

  export type questionsSelectScalar = {
    id?: boolean
    createdBy?: boolean
    createdAt?: boolean
    imageUrl?: boolean
    startTime?: boolean
    videoId?: boolean
    duration?: boolean
    type?: boolean
  }

  export type questionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdBy" | "createdAt" | "imageUrl" | "startTime" | "videoId" | "duration" | "type", ExtArgs["result"]["questions"]>
  export type questionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | questions$videoArgs<ExtArgs>
  }
  export type questionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | questions$videoArgs<ExtArgs>
  }
  export type questionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | questions$videoArgs<ExtArgs>
  }

  export type $questionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "questions"
    objects: {
      video: Prisma.$videosPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdBy: string
      createdAt: Date
      imageUrl: string
      startTime: string
      videoId: string | null
      duration: string
      type: string
    }, ExtArgs["result"]["questions"]>
    composites: {}
  }

  type questionsGetPayload<S extends boolean | null | undefined | questionsDefaultArgs> = $Result.GetResult<Prisma.$questionsPayload, S>

  type questionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<questionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionsCountAggregateInputType | true
    }

  export interface questionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['questions'], meta: { name: 'questions' } }
    /**
     * Find zero or one Questions that matches the filter.
     * @param {questionsFindUniqueArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends questionsFindUniqueArgs>(args: SelectSubset<T, questionsFindUniqueArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Questions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {questionsFindUniqueOrThrowArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends questionsFindUniqueOrThrowArgs>(args: SelectSubset<T, questionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionsFindFirstArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends questionsFindFirstArgs>(args?: SelectSubset<T, questionsFindFirstArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Questions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionsFindFirstOrThrowArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends questionsFindFirstOrThrowArgs>(args?: SelectSubset<T, questionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.questions.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.questions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionsWithIdOnly = await prisma.questions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends questionsFindManyArgs>(args?: SelectSubset<T, questionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Questions.
     * @param {questionsCreateArgs} args - Arguments to create a Questions.
     * @example
     * // Create one Questions
     * const Questions = await prisma.questions.create({
     *   data: {
     *     // ... data to create a Questions
     *   }
     * })
     * 
     */
    create<T extends questionsCreateArgs>(args: SelectSubset<T, questionsCreateArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {questionsCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const questions = await prisma.questions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends questionsCreateManyArgs>(args?: SelectSubset<T, questionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {questionsCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const questions = await prisma.questions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionsWithIdOnly = await prisma.questions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends questionsCreateManyAndReturnArgs>(args?: SelectSubset<T, questionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Questions.
     * @param {questionsDeleteArgs} args - Arguments to delete one Questions.
     * @example
     * // Delete one Questions
     * const Questions = await prisma.questions.delete({
     *   where: {
     *     // ... filter to delete one Questions
     *   }
     * })
     * 
     */
    delete<T extends questionsDeleteArgs>(args: SelectSubset<T, questionsDeleteArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Questions.
     * @param {questionsUpdateArgs} args - Arguments to update one Questions.
     * @example
     * // Update one Questions
     * const questions = await prisma.questions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends questionsUpdateArgs>(args: SelectSubset<T, questionsUpdateArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {questionsDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.questions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends questionsDeleteManyArgs>(args?: SelectSubset<T, questionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const questions = await prisma.questions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends questionsUpdateManyArgs>(args: SelectSubset<T, questionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions and returns the data updated in the database.
     * @param {questionsUpdateManyAndReturnArgs} args - Arguments to update many Questions.
     * @example
     * // Update many Questions
     * const questions = await prisma.questions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Questions and only return the `id`
     * const questionsWithIdOnly = await prisma.questions.updateManyAndReturn({
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
    updateManyAndReturn<T extends questionsUpdateManyAndReturnArgs>(args: SelectSubset<T, questionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Questions.
     * @param {questionsUpsertArgs} args - Arguments to update or create a Questions.
     * @example
     * // Update or create a Questions
     * const questions = await prisma.questions.upsert({
     *   create: {
     *     // ... data to create a Questions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Questions we want to update
     *   }
     * })
     */
    upsert<T extends questionsUpsertArgs>(args: SelectSubset<T, questionsUpsertArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionsCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.questions.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends questionsCountArgs>(
      args?: Subset<T, questionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionsAggregateArgs>(args: Subset<T, QuestionsAggregateArgs>): Prisma.PrismaPromise<GetQuestionsAggregateType<T>>

    /**
     * Group by Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionsGroupByArgs} args - Group by arguments.
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
      T extends questionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: questionsGroupByArgs['orderBy'] }
        : { orderBy?: questionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, questionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the questions model
   */
  readonly fields: questionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for questions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__questionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    video<T extends questions$videoArgs<ExtArgs> = {}>(args?: Subset<T, questions$videoArgs<ExtArgs>>): Prisma__videosClient<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the questions model
   */
  interface questionsFieldRefs {
    readonly id: FieldRef<"questions", 'Int'>
    readonly createdBy: FieldRef<"questions", 'String'>
    readonly createdAt: FieldRef<"questions", 'DateTime'>
    readonly imageUrl: FieldRef<"questions", 'String'>
    readonly startTime: FieldRef<"questions", 'String'>
    readonly videoId: FieldRef<"questions", 'String'>
    readonly duration: FieldRef<"questions", 'String'>
    readonly type: FieldRef<"questions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * questions findUnique
   */
  export type questionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    /**
     * Filter, which questions to fetch.
     */
    where: questionsWhereUniqueInput
  }

  /**
   * questions findUniqueOrThrow
   */
  export type questionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    /**
     * Filter, which questions to fetch.
     */
    where: questionsWhereUniqueInput
  }

  /**
   * questions findFirst
   */
  export type questionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    /**
     * Filter, which questions to fetch.
     */
    where?: questionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of questions to fetch.
     */
    orderBy?: questionsOrderByWithRelationInput | questionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for questions.
     */
    cursor?: questionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of questions.
     */
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * questions findFirstOrThrow
   */
  export type questionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    /**
     * Filter, which questions to fetch.
     */
    where?: questionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of questions to fetch.
     */
    orderBy?: questionsOrderByWithRelationInput | questionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for questions.
     */
    cursor?: questionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of questions.
     */
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * questions findMany
   */
  export type questionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    /**
     * Filter, which questions to fetch.
     */
    where?: questionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of questions to fetch.
     */
    orderBy?: questionsOrderByWithRelationInput | questionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing questions.
     */
    cursor?: questionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` questions.
     */
    skip?: number
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * questions create
   */
  export type questionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    /**
     * The data needed to create a questions.
     */
    data: XOR<questionsCreateInput, questionsUncheckedCreateInput>
  }

  /**
   * questions createMany
   */
  export type questionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many questions.
     */
    data: questionsCreateManyInput | questionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * questions createManyAndReturn
   */
  export type questionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * The data used to create many questions.
     */
    data: questionsCreateManyInput | questionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * questions update
   */
  export type questionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    /**
     * The data needed to update a questions.
     */
    data: XOR<questionsUpdateInput, questionsUncheckedUpdateInput>
    /**
     * Choose, which questions to update.
     */
    where: questionsWhereUniqueInput
  }

  /**
   * questions updateMany
   */
  export type questionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update questions.
     */
    data: XOR<questionsUpdateManyMutationInput, questionsUncheckedUpdateManyInput>
    /**
     * Filter which questions to update
     */
    where?: questionsWhereInput
    /**
     * Limit how many questions to update.
     */
    limit?: number
  }

  /**
   * questions updateManyAndReturn
   */
  export type questionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * The data used to update questions.
     */
    data: XOR<questionsUpdateManyMutationInput, questionsUncheckedUpdateManyInput>
    /**
     * Filter which questions to update
     */
    where?: questionsWhereInput
    /**
     * Limit how many questions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * questions upsert
   */
  export type questionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    /**
     * The filter to search for the questions to update in case it exists.
     */
    where: questionsWhereUniqueInput
    /**
     * In case the questions found by the `where` argument doesn't exist, create a new questions with this data.
     */
    create: XOR<questionsCreateInput, questionsUncheckedCreateInput>
    /**
     * In case the questions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<questionsUpdateInput, questionsUncheckedUpdateInput>
  }

  /**
   * questions delete
   */
  export type questionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    /**
     * Filter which questions to delete.
     */
    where: questionsWhereUniqueInput
  }

  /**
   * questions deleteMany
   */
  export type questionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which questions to delete
     */
    where?: questionsWhereInput
    /**
     * Limit how many questions to delete.
     */
    limit?: number
  }

  /**
   * questions.video
   */
  export type questions$videoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos
     */
    omit?: videosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videosInclude<ExtArgs> | null
    where?: videosWhereInput
  }

  /**
   * questions without action
   */
  export type questionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
  }


  /**
   * Model pollOption
   */

  export type AggregatePollOption = {
    _count: PollOptionCountAggregateOutputType | null
    _avg: PollOptionAvgAggregateOutputType | null
    _sum: PollOptionSumAggregateOutputType | null
    _min: PollOptionMinAggregateOutputType | null
    _max: PollOptionMaxAggregateOutputType | null
  }

  export type PollOptionAvgAggregateOutputType = {
    id: number | null
    pollId: number | null
  }

  export type PollOptionSumAggregateOutputType = {
    id: number | null
    pollId: number | null
  }

  export type PollOptionMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    options: string | null
    pollId: number | null
  }

  export type PollOptionMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    options: string | null
    pollId: number | null
  }

  export type PollOptionCountAggregateOutputType = {
    id: number
    createdAt: number
    options: number
    pollId: number
    _all: number
  }


  export type PollOptionAvgAggregateInputType = {
    id?: true
    pollId?: true
  }

  export type PollOptionSumAggregateInputType = {
    id?: true
    pollId?: true
  }

  export type PollOptionMinAggregateInputType = {
    id?: true
    createdAt?: true
    options?: true
    pollId?: true
  }

  export type PollOptionMaxAggregateInputType = {
    id?: true
    createdAt?: true
    options?: true
    pollId?: true
  }

  export type PollOptionCountAggregateInputType = {
    id?: true
    createdAt?: true
    options?: true
    pollId?: true
    _all?: true
  }

  export type PollOptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pollOption to aggregate.
     */
    where?: pollOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pollOptions to fetch.
     */
    orderBy?: pollOptionOrderByWithRelationInput | pollOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pollOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pollOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pollOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pollOptions
    **/
    _count?: true | PollOptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PollOptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PollOptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PollOptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PollOptionMaxAggregateInputType
  }

  export type GetPollOptionAggregateType<T extends PollOptionAggregateArgs> = {
        [P in keyof T & keyof AggregatePollOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePollOption[P]>
      : GetScalarType<T[P], AggregatePollOption[P]>
  }




  export type pollOptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pollOptionWhereInput
    orderBy?: pollOptionOrderByWithAggregationInput | pollOptionOrderByWithAggregationInput[]
    by: PollOptionScalarFieldEnum[] | PollOptionScalarFieldEnum
    having?: pollOptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PollOptionCountAggregateInputType | true
    _avg?: PollOptionAvgAggregateInputType
    _sum?: PollOptionSumAggregateInputType
    _min?: PollOptionMinAggregateInputType
    _max?: PollOptionMaxAggregateInputType
  }

  export type PollOptionGroupByOutputType = {
    id: number
    createdAt: Date
    options: string
    pollId: number
    _count: PollOptionCountAggregateOutputType | null
    _avg: PollOptionAvgAggregateOutputType | null
    _sum: PollOptionSumAggregateOutputType | null
    _min: PollOptionMinAggregateOutputType | null
    _max: PollOptionMaxAggregateOutputType | null
  }

  type GetPollOptionGroupByPayload<T extends pollOptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PollOptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PollOptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PollOptionGroupByOutputType[P]>
            : GetScalarType<T[P], PollOptionGroupByOutputType[P]>
        }
      >
    >


  export type pollOptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    options?: boolean
    pollId?: boolean
    poll?: boolean | pollOption$pollArgs<ExtArgs>
    responses?: boolean | pollOption$responsesArgs<ExtArgs>
    _count?: boolean | PollOptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pollOption"]>

  export type pollOptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    options?: boolean
    pollId?: boolean
    poll?: boolean | pollOption$pollArgs<ExtArgs>
  }, ExtArgs["result"]["pollOption"]>

  export type pollOptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    options?: boolean
    pollId?: boolean
    poll?: boolean | pollOption$pollArgs<ExtArgs>
  }, ExtArgs["result"]["pollOption"]>

  export type pollOptionSelectScalar = {
    id?: boolean
    createdAt?: boolean
    options?: boolean
    pollId?: boolean
  }

  export type pollOptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "options" | "pollId", ExtArgs["result"]["pollOption"]>
  export type pollOptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poll?: boolean | pollOption$pollArgs<ExtArgs>
    responses?: boolean | pollOption$responsesArgs<ExtArgs>
    _count?: boolean | PollOptionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type pollOptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poll?: boolean | pollOption$pollArgs<ExtArgs>
  }
  export type pollOptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poll?: boolean | pollOption$pollArgs<ExtArgs>
  }

  export type $pollOptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pollOption"
    objects: {
      poll: Prisma.$pollPayload<ExtArgs> | null
      responses: Prisma.$pollResponsesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      options: string
      pollId: number
    }, ExtArgs["result"]["pollOption"]>
    composites: {}
  }

  type pollOptionGetPayload<S extends boolean | null | undefined | pollOptionDefaultArgs> = $Result.GetResult<Prisma.$pollOptionPayload, S>

  type pollOptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pollOptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PollOptionCountAggregateInputType | true
    }

  export interface pollOptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pollOption'], meta: { name: 'pollOption' } }
    /**
     * Find zero or one PollOption that matches the filter.
     * @param {pollOptionFindUniqueArgs} args - Arguments to find a PollOption
     * @example
     * // Get one PollOption
     * const pollOption = await prisma.pollOption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pollOptionFindUniqueArgs>(args: SelectSubset<T, pollOptionFindUniqueArgs<ExtArgs>>): Prisma__pollOptionClient<$Result.GetResult<Prisma.$pollOptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PollOption that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pollOptionFindUniqueOrThrowArgs} args - Arguments to find a PollOption
     * @example
     * // Get one PollOption
     * const pollOption = await prisma.pollOption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pollOptionFindUniqueOrThrowArgs>(args: SelectSubset<T, pollOptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pollOptionClient<$Result.GetResult<Prisma.$pollOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PollOption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pollOptionFindFirstArgs} args - Arguments to find a PollOption
     * @example
     * // Get one PollOption
     * const pollOption = await prisma.pollOption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pollOptionFindFirstArgs>(args?: SelectSubset<T, pollOptionFindFirstArgs<ExtArgs>>): Prisma__pollOptionClient<$Result.GetResult<Prisma.$pollOptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PollOption that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pollOptionFindFirstOrThrowArgs} args - Arguments to find a PollOption
     * @example
     * // Get one PollOption
     * const pollOption = await prisma.pollOption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pollOptionFindFirstOrThrowArgs>(args?: SelectSubset<T, pollOptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__pollOptionClient<$Result.GetResult<Prisma.$pollOptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PollOptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pollOptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PollOptions
     * const pollOptions = await prisma.pollOption.findMany()
     * 
     * // Get first 10 PollOptions
     * const pollOptions = await prisma.pollOption.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pollOptionWithIdOnly = await prisma.pollOption.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends pollOptionFindManyArgs>(args?: SelectSubset<T, pollOptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pollOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PollOption.
     * @param {pollOptionCreateArgs} args - Arguments to create a PollOption.
     * @example
     * // Create one PollOption
     * const PollOption = await prisma.pollOption.create({
     *   data: {
     *     // ... data to create a PollOption
     *   }
     * })
     * 
     */
    create<T extends pollOptionCreateArgs>(args: SelectSubset<T, pollOptionCreateArgs<ExtArgs>>): Prisma__pollOptionClient<$Result.GetResult<Prisma.$pollOptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PollOptions.
     * @param {pollOptionCreateManyArgs} args - Arguments to create many PollOptions.
     * @example
     * // Create many PollOptions
     * const pollOption = await prisma.pollOption.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pollOptionCreateManyArgs>(args?: SelectSubset<T, pollOptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PollOptions and returns the data saved in the database.
     * @param {pollOptionCreateManyAndReturnArgs} args - Arguments to create many PollOptions.
     * @example
     * // Create many PollOptions
     * const pollOption = await prisma.pollOption.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PollOptions and only return the `id`
     * const pollOptionWithIdOnly = await prisma.pollOption.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pollOptionCreateManyAndReturnArgs>(args?: SelectSubset<T, pollOptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pollOptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PollOption.
     * @param {pollOptionDeleteArgs} args - Arguments to delete one PollOption.
     * @example
     * // Delete one PollOption
     * const PollOption = await prisma.pollOption.delete({
     *   where: {
     *     // ... filter to delete one PollOption
     *   }
     * })
     * 
     */
    delete<T extends pollOptionDeleteArgs>(args: SelectSubset<T, pollOptionDeleteArgs<ExtArgs>>): Prisma__pollOptionClient<$Result.GetResult<Prisma.$pollOptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PollOption.
     * @param {pollOptionUpdateArgs} args - Arguments to update one PollOption.
     * @example
     * // Update one PollOption
     * const pollOption = await prisma.pollOption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pollOptionUpdateArgs>(args: SelectSubset<T, pollOptionUpdateArgs<ExtArgs>>): Prisma__pollOptionClient<$Result.GetResult<Prisma.$pollOptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PollOptions.
     * @param {pollOptionDeleteManyArgs} args - Arguments to filter PollOptions to delete.
     * @example
     * // Delete a few PollOptions
     * const { count } = await prisma.pollOption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pollOptionDeleteManyArgs>(args?: SelectSubset<T, pollOptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PollOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pollOptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PollOptions
     * const pollOption = await prisma.pollOption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pollOptionUpdateManyArgs>(args: SelectSubset<T, pollOptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PollOptions and returns the data updated in the database.
     * @param {pollOptionUpdateManyAndReturnArgs} args - Arguments to update many PollOptions.
     * @example
     * // Update many PollOptions
     * const pollOption = await prisma.pollOption.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PollOptions and only return the `id`
     * const pollOptionWithIdOnly = await prisma.pollOption.updateManyAndReturn({
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
    updateManyAndReturn<T extends pollOptionUpdateManyAndReturnArgs>(args: SelectSubset<T, pollOptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pollOptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PollOption.
     * @param {pollOptionUpsertArgs} args - Arguments to update or create a PollOption.
     * @example
     * // Update or create a PollOption
     * const pollOption = await prisma.pollOption.upsert({
     *   create: {
     *     // ... data to create a PollOption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PollOption we want to update
     *   }
     * })
     */
    upsert<T extends pollOptionUpsertArgs>(args: SelectSubset<T, pollOptionUpsertArgs<ExtArgs>>): Prisma__pollOptionClient<$Result.GetResult<Prisma.$pollOptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PollOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pollOptionCountArgs} args - Arguments to filter PollOptions to count.
     * @example
     * // Count the number of PollOptions
     * const count = await prisma.pollOption.count({
     *   where: {
     *     // ... the filter for the PollOptions we want to count
     *   }
     * })
    **/
    count<T extends pollOptionCountArgs>(
      args?: Subset<T, pollOptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PollOptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PollOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollOptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PollOptionAggregateArgs>(args: Subset<T, PollOptionAggregateArgs>): Prisma.PrismaPromise<GetPollOptionAggregateType<T>>

    /**
     * Group by PollOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pollOptionGroupByArgs} args - Group by arguments.
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
      T extends pollOptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pollOptionGroupByArgs['orderBy'] }
        : { orderBy?: pollOptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pollOptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPollOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pollOption model
   */
  readonly fields: pollOptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pollOption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pollOptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    poll<T extends pollOption$pollArgs<ExtArgs> = {}>(args?: Subset<T, pollOption$pollArgs<ExtArgs>>): Prisma__pollClient<$Result.GetResult<Prisma.$pollPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    responses<T extends pollOption$responsesArgs<ExtArgs> = {}>(args?: Subset<T, pollOption$responsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pollResponsesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the pollOption model
   */
  interface pollOptionFieldRefs {
    readonly id: FieldRef<"pollOption", 'Int'>
    readonly createdAt: FieldRef<"pollOption", 'DateTime'>
    readonly options: FieldRef<"pollOption", 'String'>
    readonly pollId: FieldRef<"pollOption", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * pollOption findUnique
   */
  export type pollOptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pollOption
     */
    select?: pollOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pollOption
     */
    omit?: pollOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pollOptionInclude<ExtArgs> | null
    /**
     * Filter, which pollOption to fetch.
     */
    where: pollOptionWhereUniqueInput
  }

  /**
   * pollOption findUniqueOrThrow
   */
  export type pollOptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pollOption
     */
    select?: pollOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pollOption
     */
    omit?: pollOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pollOptionInclude<ExtArgs> | null
    /**
     * Filter, which pollOption to fetch.
     */
    where: pollOptionWhereUniqueInput
  }

  /**
   * pollOption findFirst
   */
  export type pollOptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pollOption
     */
    select?: pollOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pollOption
     */
    omit?: pollOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pollOptionInclude<ExtArgs> | null
    /**
     * Filter, which pollOption to fetch.
     */
    where?: pollOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pollOptions to fetch.
     */
    orderBy?: pollOptionOrderByWithRelationInput | pollOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pollOptions.
     */
    cursor?: pollOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pollOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pollOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pollOptions.
     */
    distinct?: PollOptionScalarFieldEnum | PollOptionScalarFieldEnum[]
  }

  /**
   * pollOption findFirstOrThrow
   */
  export type pollOptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pollOption
     */
    select?: pollOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pollOption
     */
    omit?: pollOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pollOptionInclude<ExtArgs> | null
    /**
     * Filter, which pollOption to fetch.
     */
    where?: pollOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pollOptions to fetch.
     */
    orderBy?: pollOptionOrderByWithRelationInput | pollOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pollOptions.
     */
    cursor?: pollOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pollOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pollOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pollOptions.
     */
    distinct?: PollOptionScalarFieldEnum | PollOptionScalarFieldEnum[]
  }

  /**
   * pollOption findMany
   */
  export type pollOptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pollOption
     */
    select?: pollOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pollOption
     */
    omit?: pollOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pollOptionInclude<ExtArgs> | null
    /**
     * Filter, which pollOptions to fetch.
     */
    where?: pollOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pollOptions to fetch.
     */
    orderBy?: pollOptionOrderByWithRelationInput | pollOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pollOptions.
     */
    cursor?: pollOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pollOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pollOptions.
     */
    skip?: number
    distinct?: PollOptionScalarFieldEnum | PollOptionScalarFieldEnum[]
  }

  /**
   * pollOption create
   */
  export type pollOptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pollOption
     */
    select?: pollOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pollOption
     */
    omit?: pollOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pollOptionInclude<ExtArgs> | null
    /**
     * The data needed to create a pollOption.
     */
    data: XOR<pollOptionCreateInput, pollOptionUncheckedCreateInput>
  }

  /**
   * pollOption createMany
   */
  export type pollOptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pollOptions.
     */
    data: pollOptionCreateManyInput | pollOptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pollOption createManyAndReturn
   */
  export type pollOptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pollOption
     */
    select?: pollOptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pollOption
     */
    omit?: pollOptionOmit<ExtArgs> | null
    /**
     * The data used to create many pollOptions.
     */
    data: pollOptionCreateManyInput | pollOptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pollOptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * pollOption update
   */
  export type pollOptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pollOption
     */
    select?: pollOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pollOption
     */
    omit?: pollOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pollOptionInclude<ExtArgs> | null
    /**
     * The data needed to update a pollOption.
     */
    data: XOR<pollOptionUpdateInput, pollOptionUncheckedUpdateInput>
    /**
     * Choose, which pollOption to update.
     */
    where: pollOptionWhereUniqueInput
  }

  /**
   * pollOption updateMany
   */
  export type pollOptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pollOptions.
     */
    data: XOR<pollOptionUpdateManyMutationInput, pollOptionUncheckedUpdateManyInput>
    /**
     * Filter which pollOptions to update
     */
    where?: pollOptionWhereInput
    /**
     * Limit how many pollOptions to update.
     */
    limit?: number
  }

  /**
   * pollOption updateManyAndReturn
   */
  export type pollOptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pollOption
     */
    select?: pollOptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pollOption
     */
    omit?: pollOptionOmit<ExtArgs> | null
    /**
     * The data used to update pollOptions.
     */
    data: XOR<pollOptionUpdateManyMutationInput, pollOptionUncheckedUpdateManyInput>
    /**
     * Filter which pollOptions to update
     */
    where?: pollOptionWhereInput
    /**
     * Limit how many pollOptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pollOptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * pollOption upsert
   */
  export type pollOptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pollOption
     */
    select?: pollOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pollOption
     */
    omit?: pollOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pollOptionInclude<ExtArgs> | null
    /**
     * The filter to search for the pollOption to update in case it exists.
     */
    where: pollOptionWhereUniqueInput
    /**
     * In case the pollOption found by the `where` argument doesn't exist, create a new pollOption with this data.
     */
    create: XOR<pollOptionCreateInput, pollOptionUncheckedCreateInput>
    /**
     * In case the pollOption was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pollOptionUpdateInput, pollOptionUncheckedUpdateInput>
  }

  /**
   * pollOption delete
   */
  export type pollOptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pollOption
     */
    select?: pollOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pollOption
     */
    omit?: pollOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pollOptionInclude<ExtArgs> | null
    /**
     * Filter which pollOption to delete.
     */
    where: pollOptionWhereUniqueInput
  }

  /**
   * pollOption deleteMany
   */
  export type pollOptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pollOptions to delete
     */
    where?: pollOptionWhereInput
    /**
     * Limit how many pollOptions to delete.
     */
    limit?: number
  }

  /**
   * pollOption.poll
   */
  export type pollOption$pollArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the poll
     */
    select?: pollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the poll
     */
    omit?: pollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pollInclude<ExtArgs> | null
    where?: pollWhereInput
  }

  /**
   * pollOption.responses
   */
  export type pollOption$responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pollResponses
     */
    select?: pollResponsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pollResponses
     */
    omit?: pollResponsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pollResponsesInclude<ExtArgs> | null
    where?: pollResponsesWhereInput
    orderBy?: pollResponsesOrderByWithRelationInput | pollResponsesOrderByWithRelationInput[]
    cursor?: pollResponsesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PollResponsesScalarFieldEnum | PollResponsesScalarFieldEnum[]
  }

  /**
   * pollOption without action
   */
  export type pollOptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pollOption
     */
    select?: pollOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pollOption
     */
    omit?: pollOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pollOptionInclude<ExtArgs> | null
  }


  /**
   * Model pollResponses
   */

  export type AggregatePollResponses = {
    _count: PollResponsesCountAggregateOutputType | null
    _avg: PollResponsesAvgAggregateOutputType | null
    _sum: PollResponsesSumAggregateOutputType | null
    _min: PollResponsesMinAggregateOutputType | null
    _max: PollResponsesMaxAggregateOutputType | null
  }

  export type PollResponsesAvgAggregateOutputType = {
    id: number | null
    pollOptionId: number | null
  }

  export type PollResponsesSumAggregateOutputType = {
    id: number | null
    pollOptionId: number | null
  }

  export type PollResponsesMinAggregateOutputType = {
    id: number | null
    submittedAt: string | null
    submittedBy: string | null
    selectedOption: string | null
    pollOptionId: number | null
  }

  export type PollResponsesMaxAggregateOutputType = {
    id: number | null
    submittedAt: string | null
    submittedBy: string | null
    selectedOption: string | null
    pollOptionId: number | null
  }

  export type PollResponsesCountAggregateOutputType = {
    id: number
    submittedAt: number
    submittedBy: number
    selectedOption: number
    pollOptionId: number
    _all: number
  }


  export type PollResponsesAvgAggregateInputType = {
    id?: true
    pollOptionId?: true
  }

  export type PollResponsesSumAggregateInputType = {
    id?: true
    pollOptionId?: true
  }

  export type PollResponsesMinAggregateInputType = {
    id?: true
    submittedAt?: true
    submittedBy?: true
    selectedOption?: true
    pollOptionId?: true
  }

  export type PollResponsesMaxAggregateInputType = {
    id?: true
    submittedAt?: true
    submittedBy?: true
    selectedOption?: true
    pollOptionId?: true
  }

  export type PollResponsesCountAggregateInputType = {
    id?: true
    submittedAt?: true
    submittedBy?: true
    selectedOption?: true
    pollOptionId?: true
    _all?: true
  }

  export type PollResponsesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pollResponses to aggregate.
     */
    where?: pollResponsesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pollResponses to fetch.
     */
    orderBy?: pollResponsesOrderByWithRelationInput | pollResponsesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pollResponsesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pollResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pollResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pollResponses
    **/
    _count?: true | PollResponsesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PollResponsesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PollResponsesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PollResponsesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PollResponsesMaxAggregateInputType
  }

  export type GetPollResponsesAggregateType<T extends PollResponsesAggregateArgs> = {
        [P in keyof T & keyof AggregatePollResponses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePollResponses[P]>
      : GetScalarType<T[P], AggregatePollResponses[P]>
  }




  export type pollResponsesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pollResponsesWhereInput
    orderBy?: pollResponsesOrderByWithAggregationInput | pollResponsesOrderByWithAggregationInput[]
    by: PollResponsesScalarFieldEnum[] | PollResponsesScalarFieldEnum
    having?: pollResponsesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PollResponsesCountAggregateInputType | true
    _avg?: PollResponsesAvgAggregateInputType
    _sum?: PollResponsesSumAggregateInputType
    _min?: PollResponsesMinAggregateInputType
    _max?: PollResponsesMaxAggregateInputType
  }

  export type PollResponsesGroupByOutputType = {
    id: number
    submittedAt: string
    submittedBy: string
    selectedOption: string
    pollOptionId: number | null
    _count: PollResponsesCountAggregateOutputType | null
    _avg: PollResponsesAvgAggregateOutputType | null
    _sum: PollResponsesSumAggregateOutputType | null
    _min: PollResponsesMinAggregateOutputType | null
    _max: PollResponsesMaxAggregateOutputType | null
  }

  type GetPollResponsesGroupByPayload<T extends pollResponsesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PollResponsesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PollResponsesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PollResponsesGroupByOutputType[P]>
            : GetScalarType<T[P], PollResponsesGroupByOutputType[P]>
        }
      >
    >


  export type pollResponsesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submittedAt?: boolean
    submittedBy?: boolean
    selectedOption?: boolean
    pollOptionId?: boolean
    pollOption?: boolean | pollResponses$pollOptionArgs<ExtArgs>
  }, ExtArgs["result"]["pollResponses"]>

  export type pollResponsesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submittedAt?: boolean
    submittedBy?: boolean
    selectedOption?: boolean
    pollOptionId?: boolean
    pollOption?: boolean | pollResponses$pollOptionArgs<ExtArgs>
  }, ExtArgs["result"]["pollResponses"]>

  export type pollResponsesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submittedAt?: boolean
    submittedBy?: boolean
    selectedOption?: boolean
    pollOptionId?: boolean
    pollOption?: boolean | pollResponses$pollOptionArgs<ExtArgs>
  }, ExtArgs["result"]["pollResponses"]>

  export type pollResponsesSelectScalar = {
    id?: boolean
    submittedAt?: boolean
    submittedBy?: boolean
    selectedOption?: boolean
    pollOptionId?: boolean
  }

  export type pollResponsesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "submittedAt" | "submittedBy" | "selectedOption" | "pollOptionId", ExtArgs["result"]["pollResponses"]>
  export type pollResponsesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pollOption?: boolean | pollResponses$pollOptionArgs<ExtArgs>
  }
  export type pollResponsesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pollOption?: boolean | pollResponses$pollOptionArgs<ExtArgs>
  }
  export type pollResponsesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pollOption?: boolean | pollResponses$pollOptionArgs<ExtArgs>
  }

  export type $pollResponsesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pollResponses"
    objects: {
      pollOption: Prisma.$pollOptionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      submittedAt: string
      submittedBy: string
      selectedOption: string
      pollOptionId: number | null
    }, ExtArgs["result"]["pollResponses"]>
    composites: {}
  }

  type pollResponsesGetPayload<S extends boolean | null | undefined | pollResponsesDefaultArgs> = $Result.GetResult<Prisma.$pollResponsesPayload, S>

  type pollResponsesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pollResponsesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PollResponsesCountAggregateInputType | true
    }

  export interface pollResponsesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pollResponses'], meta: { name: 'pollResponses' } }
    /**
     * Find zero or one PollResponses that matches the filter.
     * @param {pollResponsesFindUniqueArgs} args - Arguments to find a PollResponses
     * @example
     * // Get one PollResponses
     * const pollResponses = await prisma.pollResponses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pollResponsesFindUniqueArgs>(args: SelectSubset<T, pollResponsesFindUniqueArgs<ExtArgs>>): Prisma__pollResponsesClient<$Result.GetResult<Prisma.$pollResponsesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PollResponses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pollResponsesFindUniqueOrThrowArgs} args - Arguments to find a PollResponses
     * @example
     * // Get one PollResponses
     * const pollResponses = await prisma.pollResponses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pollResponsesFindUniqueOrThrowArgs>(args: SelectSubset<T, pollResponsesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pollResponsesClient<$Result.GetResult<Prisma.$pollResponsesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PollResponses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pollResponsesFindFirstArgs} args - Arguments to find a PollResponses
     * @example
     * // Get one PollResponses
     * const pollResponses = await prisma.pollResponses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pollResponsesFindFirstArgs>(args?: SelectSubset<T, pollResponsesFindFirstArgs<ExtArgs>>): Prisma__pollResponsesClient<$Result.GetResult<Prisma.$pollResponsesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PollResponses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pollResponsesFindFirstOrThrowArgs} args - Arguments to find a PollResponses
     * @example
     * // Get one PollResponses
     * const pollResponses = await prisma.pollResponses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pollResponsesFindFirstOrThrowArgs>(args?: SelectSubset<T, pollResponsesFindFirstOrThrowArgs<ExtArgs>>): Prisma__pollResponsesClient<$Result.GetResult<Prisma.$pollResponsesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PollResponses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pollResponsesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PollResponses
     * const pollResponses = await prisma.pollResponses.findMany()
     * 
     * // Get first 10 PollResponses
     * const pollResponses = await prisma.pollResponses.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pollResponsesWithIdOnly = await prisma.pollResponses.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends pollResponsesFindManyArgs>(args?: SelectSubset<T, pollResponsesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pollResponsesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PollResponses.
     * @param {pollResponsesCreateArgs} args - Arguments to create a PollResponses.
     * @example
     * // Create one PollResponses
     * const PollResponses = await prisma.pollResponses.create({
     *   data: {
     *     // ... data to create a PollResponses
     *   }
     * })
     * 
     */
    create<T extends pollResponsesCreateArgs>(args: SelectSubset<T, pollResponsesCreateArgs<ExtArgs>>): Prisma__pollResponsesClient<$Result.GetResult<Prisma.$pollResponsesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PollResponses.
     * @param {pollResponsesCreateManyArgs} args - Arguments to create many PollResponses.
     * @example
     * // Create many PollResponses
     * const pollResponses = await prisma.pollResponses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pollResponsesCreateManyArgs>(args?: SelectSubset<T, pollResponsesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PollResponses and returns the data saved in the database.
     * @param {pollResponsesCreateManyAndReturnArgs} args - Arguments to create many PollResponses.
     * @example
     * // Create many PollResponses
     * const pollResponses = await prisma.pollResponses.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PollResponses and only return the `id`
     * const pollResponsesWithIdOnly = await prisma.pollResponses.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pollResponsesCreateManyAndReturnArgs>(args?: SelectSubset<T, pollResponsesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pollResponsesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PollResponses.
     * @param {pollResponsesDeleteArgs} args - Arguments to delete one PollResponses.
     * @example
     * // Delete one PollResponses
     * const PollResponses = await prisma.pollResponses.delete({
     *   where: {
     *     // ... filter to delete one PollResponses
     *   }
     * })
     * 
     */
    delete<T extends pollResponsesDeleteArgs>(args: SelectSubset<T, pollResponsesDeleteArgs<ExtArgs>>): Prisma__pollResponsesClient<$Result.GetResult<Prisma.$pollResponsesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PollResponses.
     * @param {pollResponsesUpdateArgs} args - Arguments to update one PollResponses.
     * @example
     * // Update one PollResponses
     * const pollResponses = await prisma.pollResponses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pollResponsesUpdateArgs>(args: SelectSubset<T, pollResponsesUpdateArgs<ExtArgs>>): Prisma__pollResponsesClient<$Result.GetResult<Prisma.$pollResponsesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PollResponses.
     * @param {pollResponsesDeleteManyArgs} args - Arguments to filter PollResponses to delete.
     * @example
     * // Delete a few PollResponses
     * const { count } = await prisma.pollResponses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pollResponsesDeleteManyArgs>(args?: SelectSubset<T, pollResponsesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PollResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pollResponsesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PollResponses
     * const pollResponses = await prisma.pollResponses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pollResponsesUpdateManyArgs>(args: SelectSubset<T, pollResponsesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PollResponses and returns the data updated in the database.
     * @param {pollResponsesUpdateManyAndReturnArgs} args - Arguments to update many PollResponses.
     * @example
     * // Update many PollResponses
     * const pollResponses = await prisma.pollResponses.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PollResponses and only return the `id`
     * const pollResponsesWithIdOnly = await prisma.pollResponses.updateManyAndReturn({
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
    updateManyAndReturn<T extends pollResponsesUpdateManyAndReturnArgs>(args: SelectSubset<T, pollResponsesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pollResponsesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PollResponses.
     * @param {pollResponsesUpsertArgs} args - Arguments to update or create a PollResponses.
     * @example
     * // Update or create a PollResponses
     * const pollResponses = await prisma.pollResponses.upsert({
     *   create: {
     *     // ... data to create a PollResponses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PollResponses we want to update
     *   }
     * })
     */
    upsert<T extends pollResponsesUpsertArgs>(args: SelectSubset<T, pollResponsesUpsertArgs<ExtArgs>>): Prisma__pollResponsesClient<$Result.GetResult<Prisma.$pollResponsesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PollResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pollResponsesCountArgs} args - Arguments to filter PollResponses to count.
     * @example
     * // Count the number of PollResponses
     * const count = await prisma.pollResponses.count({
     *   where: {
     *     // ... the filter for the PollResponses we want to count
     *   }
     * })
    **/
    count<T extends pollResponsesCountArgs>(
      args?: Subset<T, pollResponsesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PollResponsesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PollResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollResponsesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PollResponsesAggregateArgs>(args: Subset<T, PollResponsesAggregateArgs>): Prisma.PrismaPromise<GetPollResponsesAggregateType<T>>

    /**
     * Group by PollResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pollResponsesGroupByArgs} args - Group by arguments.
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
      T extends pollResponsesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pollResponsesGroupByArgs['orderBy'] }
        : { orderBy?: pollResponsesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pollResponsesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPollResponsesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pollResponses model
   */
  readonly fields: pollResponsesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pollResponses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pollResponsesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pollOption<T extends pollResponses$pollOptionArgs<ExtArgs> = {}>(args?: Subset<T, pollResponses$pollOptionArgs<ExtArgs>>): Prisma__pollOptionClient<$Result.GetResult<Prisma.$pollOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the pollResponses model
   */
  interface pollResponsesFieldRefs {
    readonly id: FieldRef<"pollResponses", 'Int'>
    readonly submittedAt: FieldRef<"pollResponses", 'String'>
    readonly submittedBy: FieldRef<"pollResponses", 'String'>
    readonly selectedOption: FieldRef<"pollResponses", 'String'>
    readonly pollOptionId: FieldRef<"pollResponses", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * pollResponses findUnique
   */
  export type pollResponsesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pollResponses
     */
    select?: pollResponsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pollResponses
     */
    omit?: pollResponsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pollResponsesInclude<ExtArgs> | null
    /**
     * Filter, which pollResponses to fetch.
     */
    where: pollResponsesWhereUniqueInput
  }

  /**
   * pollResponses findUniqueOrThrow
   */
  export type pollResponsesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pollResponses
     */
    select?: pollResponsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pollResponses
     */
    omit?: pollResponsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pollResponsesInclude<ExtArgs> | null
    /**
     * Filter, which pollResponses to fetch.
     */
    where: pollResponsesWhereUniqueInput
  }

  /**
   * pollResponses findFirst
   */
  export type pollResponsesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pollResponses
     */
    select?: pollResponsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pollResponses
     */
    omit?: pollResponsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pollResponsesInclude<ExtArgs> | null
    /**
     * Filter, which pollResponses to fetch.
     */
    where?: pollResponsesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pollResponses to fetch.
     */
    orderBy?: pollResponsesOrderByWithRelationInput | pollResponsesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pollResponses.
     */
    cursor?: pollResponsesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pollResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pollResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pollResponses.
     */
    distinct?: PollResponsesScalarFieldEnum | PollResponsesScalarFieldEnum[]
  }

  /**
   * pollResponses findFirstOrThrow
   */
  export type pollResponsesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pollResponses
     */
    select?: pollResponsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pollResponses
     */
    omit?: pollResponsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pollResponsesInclude<ExtArgs> | null
    /**
     * Filter, which pollResponses to fetch.
     */
    where?: pollResponsesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pollResponses to fetch.
     */
    orderBy?: pollResponsesOrderByWithRelationInput | pollResponsesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pollResponses.
     */
    cursor?: pollResponsesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pollResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pollResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pollResponses.
     */
    distinct?: PollResponsesScalarFieldEnum | PollResponsesScalarFieldEnum[]
  }

  /**
   * pollResponses findMany
   */
  export type pollResponsesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pollResponses
     */
    select?: pollResponsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pollResponses
     */
    omit?: pollResponsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pollResponsesInclude<ExtArgs> | null
    /**
     * Filter, which pollResponses to fetch.
     */
    where?: pollResponsesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pollResponses to fetch.
     */
    orderBy?: pollResponsesOrderByWithRelationInput | pollResponsesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pollResponses.
     */
    cursor?: pollResponsesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pollResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pollResponses.
     */
    skip?: number
    distinct?: PollResponsesScalarFieldEnum | PollResponsesScalarFieldEnum[]
  }

  /**
   * pollResponses create
   */
  export type pollResponsesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pollResponses
     */
    select?: pollResponsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pollResponses
     */
    omit?: pollResponsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pollResponsesInclude<ExtArgs> | null
    /**
     * The data needed to create a pollResponses.
     */
    data: XOR<pollResponsesCreateInput, pollResponsesUncheckedCreateInput>
  }

  /**
   * pollResponses createMany
   */
  export type pollResponsesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pollResponses.
     */
    data: pollResponsesCreateManyInput | pollResponsesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pollResponses createManyAndReturn
   */
  export type pollResponsesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pollResponses
     */
    select?: pollResponsesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pollResponses
     */
    omit?: pollResponsesOmit<ExtArgs> | null
    /**
     * The data used to create many pollResponses.
     */
    data: pollResponsesCreateManyInput | pollResponsesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pollResponsesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * pollResponses update
   */
  export type pollResponsesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pollResponses
     */
    select?: pollResponsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pollResponses
     */
    omit?: pollResponsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pollResponsesInclude<ExtArgs> | null
    /**
     * The data needed to update a pollResponses.
     */
    data: XOR<pollResponsesUpdateInput, pollResponsesUncheckedUpdateInput>
    /**
     * Choose, which pollResponses to update.
     */
    where: pollResponsesWhereUniqueInput
  }

  /**
   * pollResponses updateMany
   */
  export type pollResponsesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pollResponses.
     */
    data: XOR<pollResponsesUpdateManyMutationInput, pollResponsesUncheckedUpdateManyInput>
    /**
     * Filter which pollResponses to update
     */
    where?: pollResponsesWhereInput
    /**
     * Limit how many pollResponses to update.
     */
    limit?: number
  }

  /**
   * pollResponses updateManyAndReturn
   */
  export type pollResponsesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pollResponses
     */
    select?: pollResponsesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pollResponses
     */
    omit?: pollResponsesOmit<ExtArgs> | null
    /**
     * The data used to update pollResponses.
     */
    data: XOR<pollResponsesUpdateManyMutationInput, pollResponsesUncheckedUpdateManyInput>
    /**
     * Filter which pollResponses to update
     */
    where?: pollResponsesWhereInput
    /**
     * Limit how many pollResponses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pollResponsesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * pollResponses upsert
   */
  export type pollResponsesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pollResponses
     */
    select?: pollResponsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pollResponses
     */
    omit?: pollResponsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pollResponsesInclude<ExtArgs> | null
    /**
     * The filter to search for the pollResponses to update in case it exists.
     */
    where: pollResponsesWhereUniqueInput
    /**
     * In case the pollResponses found by the `where` argument doesn't exist, create a new pollResponses with this data.
     */
    create: XOR<pollResponsesCreateInput, pollResponsesUncheckedCreateInput>
    /**
     * In case the pollResponses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pollResponsesUpdateInput, pollResponsesUncheckedUpdateInput>
  }

  /**
   * pollResponses delete
   */
  export type pollResponsesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pollResponses
     */
    select?: pollResponsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pollResponses
     */
    omit?: pollResponsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pollResponsesInclude<ExtArgs> | null
    /**
     * Filter which pollResponses to delete.
     */
    where: pollResponsesWhereUniqueInput
  }

  /**
   * pollResponses deleteMany
   */
  export type pollResponsesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pollResponses to delete
     */
    where?: pollResponsesWhereInput
    /**
     * Limit how many pollResponses to delete.
     */
    limit?: number
  }

  /**
   * pollResponses.pollOption
   */
  export type pollResponses$pollOptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pollOption
     */
    select?: pollOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pollOption
     */
    omit?: pollOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pollOptionInclude<ExtArgs> | null
    where?: pollOptionWhereInput
  }

  /**
   * pollResponses without action
   */
  export type pollResponsesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pollResponses
     */
    select?: pollResponsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pollResponses
     */
    omit?: pollResponsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pollResponsesInclude<ExtArgs> | null
  }


  /**
   * Model notes
   */

  export type AggregateNotes = {
    _count: NotesCountAggregateOutputType | null
    _avg: NotesAvgAggregateOutputType | null
    _sum: NotesSumAggregateOutputType | null
    _min: NotesMinAggregateOutputType | null
    _max: NotesMaxAggregateOutputType | null
  }

  export type NotesAvgAggregateOutputType = {
    id: number | null
  }

  export type NotesSumAggregateOutputType = {
    id: number | null
  }

  export type NotesMinAggregateOutputType = {
    id: number | null
    videoId: string | null
    noteText: string | null
    userId: string | null
  }

  export type NotesMaxAggregateOutputType = {
    id: number | null
    videoId: string | null
    noteText: string | null
    userId: string | null
  }

  export type NotesCountAggregateOutputType = {
    id: number
    videoId: number
    noteText: number
    userId: number
    _all: number
  }


  export type NotesAvgAggregateInputType = {
    id?: true
  }

  export type NotesSumAggregateInputType = {
    id?: true
  }

  export type NotesMinAggregateInputType = {
    id?: true
    videoId?: true
    noteText?: true
    userId?: true
  }

  export type NotesMaxAggregateInputType = {
    id?: true
    videoId?: true
    noteText?: true
    userId?: true
  }

  export type NotesCountAggregateInputType = {
    id?: true
    videoId?: true
    noteText?: true
    userId?: true
    _all?: true
  }

  export type NotesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notes to aggregate.
     */
    where?: notesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notes to fetch.
     */
    orderBy?: notesOrderByWithRelationInput | notesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: notesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned notes
    **/
    _count?: true | NotesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotesMaxAggregateInputType
  }

  export type GetNotesAggregateType<T extends NotesAggregateArgs> = {
        [P in keyof T & keyof AggregateNotes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotes[P]>
      : GetScalarType<T[P], AggregateNotes[P]>
  }




  export type notesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notesWhereInput
    orderBy?: notesOrderByWithAggregationInput | notesOrderByWithAggregationInput[]
    by: NotesScalarFieldEnum[] | NotesScalarFieldEnum
    having?: notesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotesCountAggregateInputType | true
    _avg?: NotesAvgAggregateInputType
    _sum?: NotesSumAggregateInputType
    _min?: NotesMinAggregateInputType
    _max?: NotesMaxAggregateInputType
  }

  export type NotesGroupByOutputType = {
    id: number
    videoId: string
    noteText: string
    userId: string
    _count: NotesCountAggregateOutputType | null
    _avg: NotesAvgAggregateOutputType | null
    _sum: NotesSumAggregateOutputType | null
    _min: NotesMinAggregateOutputType | null
    _max: NotesMaxAggregateOutputType | null
  }

  type GetNotesGroupByPayload<T extends notesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotesGroupByOutputType[P]>
            : GetScalarType<T[P], NotesGroupByOutputType[P]>
        }
      >
    >


  export type notesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    videoId?: boolean
    noteText?: boolean
    userId?: boolean
  }, ExtArgs["result"]["notes"]>

  export type notesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    videoId?: boolean
    noteText?: boolean
    userId?: boolean
  }, ExtArgs["result"]["notes"]>

  export type notesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    videoId?: boolean
    noteText?: boolean
    userId?: boolean
  }, ExtArgs["result"]["notes"]>

  export type notesSelectScalar = {
    id?: boolean
    videoId?: boolean
    noteText?: boolean
    userId?: boolean
  }

  export type notesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "videoId" | "noteText" | "userId", ExtArgs["result"]["notes"]>

  export type $notesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "notes"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      videoId: string
      noteText: string
      userId: string
    }, ExtArgs["result"]["notes"]>
    composites: {}
  }

  type notesGetPayload<S extends boolean | null | undefined | notesDefaultArgs> = $Result.GetResult<Prisma.$notesPayload, S>

  type notesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<notesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotesCountAggregateInputType | true
    }

  export interface notesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['notes'], meta: { name: 'notes' } }
    /**
     * Find zero or one Notes that matches the filter.
     * @param {notesFindUniqueArgs} args - Arguments to find a Notes
     * @example
     * // Get one Notes
     * const notes = await prisma.notes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends notesFindUniqueArgs>(args: SelectSubset<T, notesFindUniqueArgs<ExtArgs>>): Prisma__notesClient<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {notesFindUniqueOrThrowArgs} args - Arguments to find a Notes
     * @example
     * // Get one Notes
     * const notes = await prisma.notes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends notesFindUniqueOrThrowArgs>(args: SelectSubset<T, notesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__notesClient<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notesFindFirstArgs} args - Arguments to find a Notes
     * @example
     * // Get one Notes
     * const notes = await prisma.notes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends notesFindFirstArgs>(args?: SelectSubset<T, notesFindFirstArgs<ExtArgs>>): Prisma__notesClient<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notesFindFirstOrThrowArgs} args - Arguments to find a Notes
     * @example
     * // Get one Notes
     * const notes = await prisma.notes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends notesFindFirstOrThrowArgs>(args?: SelectSubset<T, notesFindFirstOrThrowArgs<ExtArgs>>): Prisma__notesClient<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notes
     * const notes = await prisma.notes.findMany()
     * 
     * // Get first 10 Notes
     * const notes = await prisma.notes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notesWithIdOnly = await prisma.notes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends notesFindManyArgs>(args?: SelectSubset<T, notesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notes.
     * @param {notesCreateArgs} args - Arguments to create a Notes.
     * @example
     * // Create one Notes
     * const Notes = await prisma.notes.create({
     *   data: {
     *     // ... data to create a Notes
     *   }
     * })
     * 
     */
    create<T extends notesCreateArgs>(args: SelectSubset<T, notesCreateArgs<ExtArgs>>): Prisma__notesClient<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notes.
     * @param {notesCreateManyArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const notes = await prisma.notes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends notesCreateManyArgs>(args?: SelectSubset<T, notesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notes and returns the data saved in the database.
     * @param {notesCreateManyAndReturnArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const notes = await prisma.notes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notes and only return the `id`
     * const notesWithIdOnly = await prisma.notes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends notesCreateManyAndReturnArgs>(args?: SelectSubset<T, notesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notes.
     * @param {notesDeleteArgs} args - Arguments to delete one Notes.
     * @example
     * // Delete one Notes
     * const Notes = await prisma.notes.delete({
     *   where: {
     *     // ... filter to delete one Notes
     *   }
     * })
     * 
     */
    delete<T extends notesDeleteArgs>(args: SelectSubset<T, notesDeleteArgs<ExtArgs>>): Prisma__notesClient<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notes.
     * @param {notesUpdateArgs} args - Arguments to update one Notes.
     * @example
     * // Update one Notes
     * const notes = await prisma.notes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends notesUpdateArgs>(args: SelectSubset<T, notesUpdateArgs<ExtArgs>>): Prisma__notesClient<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notes.
     * @param {notesDeleteManyArgs} args - Arguments to filter Notes to delete.
     * @example
     * // Delete a few Notes
     * const { count } = await prisma.notes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends notesDeleteManyArgs>(args?: SelectSubset<T, notesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notes
     * const notes = await prisma.notes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends notesUpdateManyArgs>(args: SelectSubset<T, notesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes and returns the data updated in the database.
     * @param {notesUpdateManyAndReturnArgs} args - Arguments to update many Notes.
     * @example
     * // Update many Notes
     * const notes = await prisma.notes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notes and only return the `id`
     * const notesWithIdOnly = await prisma.notes.updateManyAndReturn({
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
    updateManyAndReturn<T extends notesUpdateManyAndReturnArgs>(args: SelectSubset<T, notesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notes.
     * @param {notesUpsertArgs} args - Arguments to update or create a Notes.
     * @example
     * // Update or create a Notes
     * const notes = await prisma.notes.upsert({
     *   create: {
     *     // ... data to create a Notes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notes we want to update
     *   }
     * })
     */
    upsert<T extends notesUpsertArgs>(args: SelectSubset<T, notesUpsertArgs<ExtArgs>>): Prisma__notesClient<$Result.GetResult<Prisma.$notesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notesCountArgs} args - Arguments to filter Notes to count.
     * @example
     * // Count the number of Notes
     * const count = await prisma.notes.count({
     *   where: {
     *     // ... the filter for the Notes we want to count
     *   }
     * })
    **/
    count<T extends notesCountArgs>(
      args?: Subset<T, notesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotesAggregateArgs>(args: Subset<T, NotesAggregateArgs>): Prisma.PrismaPromise<GetNotesAggregateType<T>>

    /**
     * Group by Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notesGroupByArgs} args - Group by arguments.
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
      T extends notesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: notesGroupByArgs['orderBy'] }
        : { orderBy?: notesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, notesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the notes model
   */
  readonly fields: notesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for notes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__notesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the notes model
   */
  interface notesFieldRefs {
    readonly id: FieldRef<"notes", 'Int'>
    readonly videoId: FieldRef<"notes", 'String'>
    readonly noteText: FieldRef<"notes", 'String'>
    readonly userId: FieldRef<"notes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * notes findUnique
   */
  export type notesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Filter, which notes to fetch.
     */
    where: notesWhereUniqueInput
  }

  /**
   * notes findUniqueOrThrow
   */
  export type notesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Filter, which notes to fetch.
     */
    where: notesWhereUniqueInput
  }

  /**
   * notes findFirst
   */
  export type notesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Filter, which notes to fetch.
     */
    where?: notesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notes to fetch.
     */
    orderBy?: notesOrderByWithRelationInput | notesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notes.
     */
    cursor?: notesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notes.
     */
    distinct?: NotesScalarFieldEnum | NotesScalarFieldEnum[]
  }

  /**
   * notes findFirstOrThrow
   */
  export type notesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Filter, which notes to fetch.
     */
    where?: notesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notes to fetch.
     */
    orderBy?: notesOrderByWithRelationInput | notesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notes.
     */
    cursor?: notesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notes.
     */
    distinct?: NotesScalarFieldEnum | NotesScalarFieldEnum[]
  }

  /**
   * notes findMany
   */
  export type notesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Filter, which notes to fetch.
     */
    where?: notesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notes to fetch.
     */
    orderBy?: notesOrderByWithRelationInput | notesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing notes.
     */
    cursor?: notesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notes.
     */
    skip?: number
    distinct?: NotesScalarFieldEnum | NotesScalarFieldEnum[]
  }

  /**
   * notes create
   */
  export type notesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * The data needed to create a notes.
     */
    data: XOR<notesCreateInput, notesUncheckedCreateInput>
  }

  /**
   * notes createMany
   */
  export type notesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many notes.
     */
    data: notesCreateManyInput | notesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * notes createManyAndReturn
   */
  export type notesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * The data used to create many notes.
     */
    data: notesCreateManyInput | notesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * notes update
   */
  export type notesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * The data needed to update a notes.
     */
    data: XOR<notesUpdateInput, notesUncheckedUpdateInput>
    /**
     * Choose, which notes to update.
     */
    where: notesWhereUniqueInput
  }

  /**
   * notes updateMany
   */
  export type notesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update notes.
     */
    data: XOR<notesUpdateManyMutationInput, notesUncheckedUpdateManyInput>
    /**
     * Filter which notes to update
     */
    where?: notesWhereInput
    /**
     * Limit how many notes to update.
     */
    limit?: number
  }

  /**
   * notes updateManyAndReturn
   */
  export type notesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * The data used to update notes.
     */
    data: XOR<notesUpdateManyMutationInput, notesUncheckedUpdateManyInput>
    /**
     * Filter which notes to update
     */
    where?: notesWhereInput
    /**
     * Limit how many notes to update.
     */
    limit?: number
  }

  /**
   * notes upsert
   */
  export type notesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * The filter to search for the notes to update in case it exists.
     */
    where: notesWhereUniqueInput
    /**
     * In case the notes found by the `where` argument doesn't exist, create a new notes with this data.
     */
    create: XOR<notesCreateInput, notesUncheckedCreateInput>
    /**
     * In case the notes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<notesUpdateInput, notesUncheckedUpdateInput>
  }

  /**
   * notes delete
   */
  export type notesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
    /**
     * Filter which notes to delete.
     */
    where: notesWhereUniqueInput
  }

  /**
   * notes deleteMany
   */
  export type notesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notes to delete
     */
    where?: notesWhereInput
    /**
     * Limit how many notes to delete.
     */
    limit?: number
  }

  /**
   * notes without action
   */
  export type notesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notes
     */
    select?: notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notes
     */
    omit?: notesOmit<ExtArgs> | null
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


  export const CategoriesScalarFieldEnum: {
    id: 'id',
    categoryName: 'categoryName',
    createdAt: 'createdAt'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const VideosScalarFieldEnum: {
    id: 'id',
    videoId: 'videoId',
    videoUrl: 'videoUrl',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    categoryName: 'categoryName'
  };

  export type VideosScalarFieldEnum = (typeof VideosScalarFieldEnum)[keyof typeof VideosScalarFieldEnum]


  export const PollScalarFieldEnum: {
    id: 'id',
    createdBy: 'createdBy',
    createdAT: 'createdAT',
    question: 'question',
    startTime: 'startTime',
    duration: 'duration',
    type: 'type',
    videoId: 'videoId'
  };

  export type PollScalarFieldEnum = (typeof PollScalarFieldEnum)[keyof typeof PollScalarFieldEnum]


  export const QuestionsScalarFieldEnum: {
    id: 'id',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    imageUrl: 'imageUrl',
    startTime: 'startTime',
    videoId: 'videoId',
    duration: 'duration',
    type: 'type'
  };

  export type QuestionsScalarFieldEnum = (typeof QuestionsScalarFieldEnum)[keyof typeof QuestionsScalarFieldEnum]


  export const PollOptionScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    options: 'options',
    pollId: 'pollId'
  };

  export type PollOptionScalarFieldEnum = (typeof PollOptionScalarFieldEnum)[keyof typeof PollOptionScalarFieldEnum]


  export const PollResponsesScalarFieldEnum: {
    id: 'id',
    submittedAt: 'submittedAt',
    submittedBy: 'submittedBy',
    selectedOption: 'selectedOption',
    pollOptionId: 'pollOptionId'
  };

  export type PollResponsesScalarFieldEnum = (typeof PollResponsesScalarFieldEnum)[keyof typeof PollResponsesScalarFieldEnum]


  export const NotesScalarFieldEnum: {
    id: 'id',
    videoId: 'videoId',
    noteText: 'noteText',
    userId: 'userId'
  };

  export type NotesScalarFieldEnum = (typeof NotesScalarFieldEnum)[keyof typeof NotesScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type categoriesWhereInput = {
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    id?: IntFilter<"categories"> | number
    categoryName?: StringFilter<"categories"> | string
    createdAt?: DateTimeFilter<"categories"> | Date | string
    videos?: VideosListRelationFilter
  }

  export type categoriesOrderByWithRelationInput = {
    id?: SortOrder
    categoryName?: SortOrder
    createdAt?: SortOrder
    videos?: videosOrderByRelationAggregateInput
  }

  export type categoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    categoryName?: string
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    createdAt?: DateTimeFilter<"categories"> | Date | string
    videos?: VideosListRelationFilter
  }, "id" | "categoryName">

  export type categoriesOrderByWithAggregationInput = {
    id?: SortOrder
    categoryName?: SortOrder
    createdAt?: SortOrder
    _count?: categoriesCountOrderByAggregateInput
    _avg?: categoriesAvgOrderByAggregateInput
    _max?: categoriesMaxOrderByAggregateInput
    _min?: categoriesMinOrderByAggregateInput
    _sum?: categoriesSumOrderByAggregateInput
  }

  export type categoriesScalarWhereWithAggregatesInput = {
    AND?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    OR?: categoriesScalarWhereWithAggregatesInput[]
    NOT?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"categories"> | number
    categoryName?: StringWithAggregatesFilter<"categories"> | string
    createdAt?: DateTimeWithAggregatesFilter<"categories"> | Date | string
  }

  export type videosWhereInput = {
    AND?: videosWhereInput | videosWhereInput[]
    OR?: videosWhereInput[]
    NOT?: videosWhereInput | videosWhereInput[]
    id?: IntFilter<"videos"> | number
    videoId?: StringFilter<"videos"> | string
    videoUrl?: StringFilter<"videos"> | string
    createdBy?: StringFilter<"videos"> | string
    createdAt?: DateTimeFilter<"videos"> | Date | string
    categoryName?: StringNullableFilter<"videos"> | string | null
    category?: XOR<CategoriesNullableScalarRelationFilter, categoriesWhereInput> | null
    polls?: PollListRelationFilter
    questions?: QuestionsListRelationFilter
  }

  export type videosOrderByWithRelationInput = {
    id?: SortOrder
    videoId?: SortOrder
    videoUrl?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    categoryName?: SortOrderInput | SortOrder
    category?: categoriesOrderByWithRelationInput
    polls?: pollOrderByRelationAggregateInput
    questions?: questionsOrderByRelationAggregateInput
  }

  export type videosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    videoId?: string
    AND?: videosWhereInput | videosWhereInput[]
    OR?: videosWhereInput[]
    NOT?: videosWhereInput | videosWhereInput[]
    videoUrl?: StringFilter<"videos"> | string
    createdBy?: StringFilter<"videos"> | string
    createdAt?: DateTimeFilter<"videos"> | Date | string
    categoryName?: StringNullableFilter<"videos"> | string | null
    category?: XOR<CategoriesNullableScalarRelationFilter, categoriesWhereInput> | null
    polls?: PollListRelationFilter
    questions?: QuestionsListRelationFilter
  }, "id" | "videoId">

  export type videosOrderByWithAggregationInput = {
    id?: SortOrder
    videoId?: SortOrder
    videoUrl?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    categoryName?: SortOrderInput | SortOrder
    _count?: videosCountOrderByAggregateInput
    _avg?: videosAvgOrderByAggregateInput
    _max?: videosMaxOrderByAggregateInput
    _min?: videosMinOrderByAggregateInput
    _sum?: videosSumOrderByAggregateInput
  }

  export type videosScalarWhereWithAggregatesInput = {
    AND?: videosScalarWhereWithAggregatesInput | videosScalarWhereWithAggregatesInput[]
    OR?: videosScalarWhereWithAggregatesInput[]
    NOT?: videosScalarWhereWithAggregatesInput | videosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"videos"> | number
    videoId?: StringWithAggregatesFilter<"videos"> | string
    videoUrl?: StringWithAggregatesFilter<"videos"> | string
    createdBy?: StringWithAggregatesFilter<"videos"> | string
    createdAt?: DateTimeWithAggregatesFilter<"videos"> | Date | string
    categoryName?: StringNullableWithAggregatesFilter<"videos"> | string | null
  }

  export type pollWhereInput = {
    AND?: pollWhereInput | pollWhereInput[]
    OR?: pollWhereInput[]
    NOT?: pollWhereInput | pollWhereInput[]
    id?: IntFilter<"poll"> | number
    createdBy?: StringFilter<"poll"> | string
    createdAT?: DateTimeFilter<"poll"> | Date | string
    question?: StringFilter<"poll"> | string
    startTime?: StringFilter<"poll"> | string
    duration?: StringFilter<"poll"> | string
    type?: StringFilter<"poll"> | string
    videoId?: StringNullableFilter<"poll"> | string | null
    options?: PollOptionListRelationFilter
    video?: XOR<VideosNullableScalarRelationFilter, videosWhereInput> | null
  }

  export type pollOrderByWithRelationInput = {
    id?: SortOrder
    createdBy?: SortOrder
    createdAT?: SortOrder
    question?: SortOrder
    startTime?: SortOrder
    duration?: SortOrder
    type?: SortOrder
    videoId?: SortOrderInput | SortOrder
    options?: pollOptionOrderByRelationAggregateInput
    video?: videosOrderByWithRelationInput
  }

  export type pollWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: pollWhereInput | pollWhereInput[]
    OR?: pollWhereInput[]
    NOT?: pollWhereInput | pollWhereInput[]
    createdBy?: StringFilter<"poll"> | string
    createdAT?: DateTimeFilter<"poll"> | Date | string
    question?: StringFilter<"poll"> | string
    startTime?: StringFilter<"poll"> | string
    duration?: StringFilter<"poll"> | string
    type?: StringFilter<"poll"> | string
    videoId?: StringNullableFilter<"poll"> | string | null
    options?: PollOptionListRelationFilter
    video?: XOR<VideosNullableScalarRelationFilter, videosWhereInput> | null
  }, "id">

  export type pollOrderByWithAggregationInput = {
    id?: SortOrder
    createdBy?: SortOrder
    createdAT?: SortOrder
    question?: SortOrder
    startTime?: SortOrder
    duration?: SortOrder
    type?: SortOrder
    videoId?: SortOrderInput | SortOrder
    _count?: pollCountOrderByAggregateInput
    _avg?: pollAvgOrderByAggregateInput
    _max?: pollMaxOrderByAggregateInput
    _min?: pollMinOrderByAggregateInput
    _sum?: pollSumOrderByAggregateInput
  }

  export type pollScalarWhereWithAggregatesInput = {
    AND?: pollScalarWhereWithAggregatesInput | pollScalarWhereWithAggregatesInput[]
    OR?: pollScalarWhereWithAggregatesInput[]
    NOT?: pollScalarWhereWithAggregatesInput | pollScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"poll"> | number
    createdBy?: StringWithAggregatesFilter<"poll"> | string
    createdAT?: DateTimeWithAggregatesFilter<"poll"> | Date | string
    question?: StringWithAggregatesFilter<"poll"> | string
    startTime?: StringWithAggregatesFilter<"poll"> | string
    duration?: StringWithAggregatesFilter<"poll"> | string
    type?: StringWithAggregatesFilter<"poll"> | string
    videoId?: StringNullableWithAggregatesFilter<"poll"> | string | null
  }

  export type questionsWhereInput = {
    AND?: questionsWhereInput | questionsWhereInput[]
    OR?: questionsWhereInput[]
    NOT?: questionsWhereInput | questionsWhereInput[]
    id?: IntFilter<"questions"> | number
    createdBy?: StringFilter<"questions"> | string
    createdAt?: DateTimeFilter<"questions"> | Date | string
    imageUrl?: StringFilter<"questions"> | string
    startTime?: StringFilter<"questions"> | string
    videoId?: StringNullableFilter<"questions"> | string | null
    duration?: StringFilter<"questions"> | string
    type?: StringFilter<"questions"> | string
    video?: XOR<VideosNullableScalarRelationFilter, videosWhereInput> | null
  }

  export type questionsOrderByWithRelationInput = {
    id?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    imageUrl?: SortOrder
    startTime?: SortOrder
    videoId?: SortOrderInput | SortOrder
    duration?: SortOrder
    type?: SortOrder
    video?: videosOrderByWithRelationInput
  }

  export type questionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: questionsWhereInput | questionsWhereInput[]
    OR?: questionsWhereInput[]
    NOT?: questionsWhereInput | questionsWhereInput[]
    createdBy?: StringFilter<"questions"> | string
    createdAt?: DateTimeFilter<"questions"> | Date | string
    imageUrl?: StringFilter<"questions"> | string
    startTime?: StringFilter<"questions"> | string
    videoId?: StringNullableFilter<"questions"> | string | null
    duration?: StringFilter<"questions"> | string
    type?: StringFilter<"questions"> | string
    video?: XOR<VideosNullableScalarRelationFilter, videosWhereInput> | null
  }, "id">

  export type questionsOrderByWithAggregationInput = {
    id?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    imageUrl?: SortOrder
    startTime?: SortOrder
    videoId?: SortOrderInput | SortOrder
    duration?: SortOrder
    type?: SortOrder
    _count?: questionsCountOrderByAggregateInput
    _avg?: questionsAvgOrderByAggregateInput
    _max?: questionsMaxOrderByAggregateInput
    _min?: questionsMinOrderByAggregateInput
    _sum?: questionsSumOrderByAggregateInput
  }

  export type questionsScalarWhereWithAggregatesInput = {
    AND?: questionsScalarWhereWithAggregatesInput | questionsScalarWhereWithAggregatesInput[]
    OR?: questionsScalarWhereWithAggregatesInput[]
    NOT?: questionsScalarWhereWithAggregatesInput | questionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"questions"> | number
    createdBy?: StringWithAggregatesFilter<"questions"> | string
    createdAt?: DateTimeWithAggregatesFilter<"questions"> | Date | string
    imageUrl?: StringWithAggregatesFilter<"questions"> | string
    startTime?: StringWithAggregatesFilter<"questions"> | string
    videoId?: StringNullableWithAggregatesFilter<"questions"> | string | null
    duration?: StringWithAggregatesFilter<"questions"> | string
    type?: StringWithAggregatesFilter<"questions"> | string
  }

  export type pollOptionWhereInput = {
    AND?: pollOptionWhereInput | pollOptionWhereInput[]
    OR?: pollOptionWhereInput[]
    NOT?: pollOptionWhereInput | pollOptionWhereInput[]
    id?: IntFilter<"pollOption"> | number
    createdAt?: DateTimeFilter<"pollOption"> | Date | string
    options?: StringFilter<"pollOption"> | string
    pollId?: IntFilter<"pollOption"> | number
    poll?: XOR<PollNullableScalarRelationFilter, pollWhereInput> | null
    responses?: PollResponsesListRelationFilter
  }

  export type pollOptionOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    options?: SortOrder
    pollId?: SortOrder
    poll?: pollOrderByWithRelationInput
    responses?: pollResponsesOrderByRelationAggregateInput
  }

  export type pollOptionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: pollOptionWhereInput | pollOptionWhereInput[]
    OR?: pollOptionWhereInput[]
    NOT?: pollOptionWhereInput | pollOptionWhereInput[]
    createdAt?: DateTimeFilter<"pollOption"> | Date | string
    options?: StringFilter<"pollOption"> | string
    pollId?: IntFilter<"pollOption"> | number
    poll?: XOR<PollNullableScalarRelationFilter, pollWhereInput> | null
    responses?: PollResponsesListRelationFilter
  }, "id">

  export type pollOptionOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    options?: SortOrder
    pollId?: SortOrder
    _count?: pollOptionCountOrderByAggregateInput
    _avg?: pollOptionAvgOrderByAggregateInput
    _max?: pollOptionMaxOrderByAggregateInput
    _min?: pollOptionMinOrderByAggregateInput
    _sum?: pollOptionSumOrderByAggregateInput
  }

  export type pollOptionScalarWhereWithAggregatesInput = {
    AND?: pollOptionScalarWhereWithAggregatesInput | pollOptionScalarWhereWithAggregatesInput[]
    OR?: pollOptionScalarWhereWithAggregatesInput[]
    NOT?: pollOptionScalarWhereWithAggregatesInput | pollOptionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"pollOption"> | number
    createdAt?: DateTimeWithAggregatesFilter<"pollOption"> | Date | string
    options?: StringWithAggregatesFilter<"pollOption"> | string
    pollId?: IntWithAggregatesFilter<"pollOption"> | number
  }

  export type pollResponsesWhereInput = {
    AND?: pollResponsesWhereInput | pollResponsesWhereInput[]
    OR?: pollResponsesWhereInput[]
    NOT?: pollResponsesWhereInput | pollResponsesWhereInput[]
    id?: IntFilter<"pollResponses"> | number
    submittedAt?: StringFilter<"pollResponses"> | string
    submittedBy?: StringFilter<"pollResponses"> | string
    selectedOption?: StringFilter<"pollResponses"> | string
    pollOptionId?: IntNullableFilter<"pollResponses"> | number | null
    pollOption?: XOR<PollOptionNullableScalarRelationFilter, pollOptionWhereInput> | null
  }

  export type pollResponsesOrderByWithRelationInput = {
    id?: SortOrder
    submittedAt?: SortOrder
    submittedBy?: SortOrder
    selectedOption?: SortOrder
    pollOptionId?: SortOrderInput | SortOrder
    pollOption?: pollOptionOrderByWithRelationInput
  }

  export type pollResponsesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: pollResponsesWhereInput | pollResponsesWhereInput[]
    OR?: pollResponsesWhereInput[]
    NOT?: pollResponsesWhereInput | pollResponsesWhereInput[]
    submittedAt?: StringFilter<"pollResponses"> | string
    submittedBy?: StringFilter<"pollResponses"> | string
    selectedOption?: StringFilter<"pollResponses"> | string
    pollOptionId?: IntNullableFilter<"pollResponses"> | number | null
    pollOption?: XOR<PollOptionNullableScalarRelationFilter, pollOptionWhereInput> | null
  }, "id">

  export type pollResponsesOrderByWithAggregationInput = {
    id?: SortOrder
    submittedAt?: SortOrder
    submittedBy?: SortOrder
    selectedOption?: SortOrder
    pollOptionId?: SortOrderInput | SortOrder
    _count?: pollResponsesCountOrderByAggregateInput
    _avg?: pollResponsesAvgOrderByAggregateInput
    _max?: pollResponsesMaxOrderByAggregateInput
    _min?: pollResponsesMinOrderByAggregateInput
    _sum?: pollResponsesSumOrderByAggregateInput
  }

  export type pollResponsesScalarWhereWithAggregatesInput = {
    AND?: pollResponsesScalarWhereWithAggregatesInput | pollResponsesScalarWhereWithAggregatesInput[]
    OR?: pollResponsesScalarWhereWithAggregatesInput[]
    NOT?: pollResponsesScalarWhereWithAggregatesInput | pollResponsesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"pollResponses"> | number
    submittedAt?: StringWithAggregatesFilter<"pollResponses"> | string
    submittedBy?: StringWithAggregatesFilter<"pollResponses"> | string
    selectedOption?: StringWithAggregatesFilter<"pollResponses"> | string
    pollOptionId?: IntNullableWithAggregatesFilter<"pollResponses"> | number | null
  }

  export type notesWhereInput = {
    AND?: notesWhereInput | notesWhereInput[]
    OR?: notesWhereInput[]
    NOT?: notesWhereInput | notesWhereInput[]
    id?: IntFilter<"notes"> | number
    videoId?: StringFilter<"notes"> | string
    noteText?: StringFilter<"notes"> | string
    userId?: StringFilter<"notes"> | string
  }

  export type notesOrderByWithRelationInput = {
    id?: SortOrder
    videoId?: SortOrder
    noteText?: SortOrder
    userId?: SortOrder
  }

  export type notesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: notesWhereInput | notesWhereInput[]
    OR?: notesWhereInput[]
    NOT?: notesWhereInput | notesWhereInput[]
    videoId?: StringFilter<"notes"> | string
    noteText?: StringFilter<"notes"> | string
    userId?: StringFilter<"notes"> | string
  }, "id">

  export type notesOrderByWithAggregationInput = {
    id?: SortOrder
    videoId?: SortOrder
    noteText?: SortOrder
    userId?: SortOrder
    _count?: notesCountOrderByAggregateInput
    _avg?: notesAvgOrderByAggregateInput
    _max?: notesMaxOrderByAggregateInput
    _min?: notesMinOrderByAggregateInput
    _sum?: notesSumOrderByAggregateInput
  }

  export type notesScalarWhereWithAggregatesInput = {
    AND?: notesScalarWhereWithAggregatesInput | notesScalarWhereWithAggregatesInput[]
    OR?: notesScalarWhereWithAggregatesInput[]
    NOT?: notesScalarWhereWithAggregatesInput | notesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"notes"> | number
    videoId?: StringWithAggregatesFilter<"notes"> | string
    noteText?: StringWithAggregatesFilter<"notes"> | string
    userId?: StringWithAggregatesFilter<"notes"> | string
  }

  export type categoriesCreateInput = {
    categoryName: string
    createdAt?: Date | string
    videos?: videosCreateNestedManyWithoutCategoryInput
  }

  export type categoriesUncheckedCreateInput = {
    id?: number
    categoryName: string
    createdAt?: Date | string
    videos?: videosUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type categoriesUpdateInput = {
    categoryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: videosUpdateManyWithoutCategoryNestedInput
  }

  export type categoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: videosUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type categoriesCreateManyInput = {
    id?: number
    categoryName: string
    createdAt?: Date | string
  }

  export type categoriesUpdateManyMutationInput = {
    categoryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type videosCreateInput = {
    videoId: string
    videoUrl: string
    createdBy: string
    createdAt?: Date | string
    category?: categoriesCreateNestedOneWithoutVideosInput
    polls?: pollCreateNestedManyWithoutVideoInput
    questions?: questionsCreateNestedManyWithoutVideoInput
  }

  export type videosUncheckedCreateInput = {
    id?: number
    videoId: string
    videoUrl: string
    createdBy: string
    createdAt?: Date | string
    categoryName?: string | null
    polls?: pollUncheckedCreateNestedManyWithoutVideoInput
    questions?: questionsUncheckedCreateNestedManyWithoutVideoInput
  }

  export type videosUpdateInput = {
    videoId?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: categoriesUpdateOneWithoutVideosNestedInput
    polls?: pollUpdateManyWithoutVideoNestedInput
    questions?: questionsUpdateManyWithoutVideoNestedInput
  }

  export type videosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    videoId?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryName?: NullableStringFieldUpdateOperationsInput | string | null
    polls?: pollUncheckedUpdateManyWithoutVideoNestedInput
    questions?: questionsUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type videosCreateManyInput = {
    id?: number
    videoId: string
    videoUrl: string
    createdBy: string
    createdAt?: Date | string
    categoryName?: string | null
  }

  export type videosUpdateManyMutationInput = {
    videoId?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type videosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    videoId?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pollCreateInput = {
    createdBy: string
    createdAT?: Date | string
    question: string
    startTime: string
    duration: string
    type?: string
    options?: pollOptionCreateNestedManyWithoutPollInput
    video?: videosCreateNestedOneWithoutPollsInput
  }

  export type pollUncheckedCreateInput = {
    id?: number
    createdBy: string
    createdAT?: Date | string
    question: string
    startTime: string
    duration: string
    type?: string
    videoId?: string | null
    options?: pollOptionUncheckedCreateNestedManyWithoutPollInput
  }

  export type pollUpdateInput = {
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAT?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    options?: pollOptionUpdateManyWithoutPollNestedInput
    video?: videosUpdateOneWithoutPollsNestedInput
  }

  export type pollUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAT?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    videoId?: NullableStringFieldUpdateOperationsInput | string | null
    options?: pollOptionUncheckedUpdateManyWithoutPollNestedInput
  }

  export type pollCreateManyInput = {
    id?: number
    createdBy: string
    createdAT?: Date | string
    question: string
    startTime: string
    duration: string
    type?: string
    videoId?: string | null
  }

  export type pollUpdateManyMutationInput = {
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAT?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type pollUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAT?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    videoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type questionsCreateInput = {
    createdBy: string
    createdAt?: Date | string
    imageUrl: string
    startTime: string
    duration: string
    type?: string
    video?: videosCreateNestedOneWithoutQuestionsInput
  }

  export type questionsUncheckedCreateInput = {
    id?: number
    createdBy: string
    createdAt?: Date | string
    imageUrl: string
    startTime: string
    videoId?: string | null
    duration: string
    type?: string
  }

  export type questionsUpdateInput = {
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    video?: videosUpdateOneWithoutQuestionsNestedInput
  }

  export type questionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    videoId?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type questionsCreateManyInput = {
    id?: number
    createdBy: string
    createdAt?: Date | string
    imageUrl: string
    startTime: string
    videoId?: string | null
    duration: string
    type?: string
  }

  export type questionsUpdateManyMutationInput = {
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type questionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    videoId?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type pollOptionCreateInput = {
    createdAt?: Date | string
    options: string
    poll?: pollCreateNestedOneWithoutOptionsInput
    responses?: pollResponsesCreateNestedManyWithoutPollOptionInput
  }

  export type pollOptionUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    options: string
    pollId: number
    responses?: pollResponsesUncheckedCreateNestedManyWithoutPollOptionInput
  }

  export type pollOptionUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: StringFieldUpdateOperationsInput | string
    poll?: pollUpdateOneWithoutOptionsNestedInput
    responses?: pollResponsesUpdateManyWithoutPollOptionNestedInput
  }

  export type pollOptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: StringFieldUpdateOperationsInput | string
    pollId?: IntFieldUpdateOperationsInput | number
    responses?: pollResponsesUncheckedUpdateManyWithoutPollOptionNestedInput
  }

  export type pollOptionCreateManyInput = {
    id?: number
    createdAt?: Date | string
    options: string
    pollId: number
  }

  export type pollOptionUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: StringFieldUpdateOperationsInput | string
  }

  export type pollOptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: StringFieldUpdateOperationsInput | string
    pollId?: IntFieldUpdateOperationsInput | number
  }

  export type pollResponsesCreateInput = {
    submittedAt: string
    submittedBy: string
    selectedOption: string
    pollOption?: pollOptionCreateNestedOneWithoutResponsesInput
  }

  export type pollResponsesUncheckedCreateInput = {
    id?: number
    submittedAt: string
    submittedBy: string
    selectedOption: string
    pollOptionId?: number | null
  }

  export type pollResponsesUpdateInput = {
    submittedAt?: StringFieldUpdateOperationsInput | string
    submittedBy?: StringFieldUpdateOperationsInput | string
    selectedOption?: StringFieldUpdateOperationsInput | string
    pollOption?: pollOptionUpdateOneWithoutResponsesNestedInput
  }

  export type pollResponsesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    submittedAt?: StringFieldUpdateOperationsInput | string
    submittedBy?: StringFieldUpdateOperationsInput | string
    selectedOption?: StringFieldUpdateOperationsInput | string
    pollOptionId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type pollResponsesCreateManyInput = {
    id?: number
    submittedAt: string
    submittedBy: string
    selectedOption: string
    pollOptionId?: number | null
  }

  export type pollResponsesUpdateManyMutationInput = {
    submittedAt?: StringFieldUpdateOperationsInput | string
    submittedBy?: StringFieldUpdateOperationsInput | string
    selectedOption?: StringFieldUpdateOperationsInput | string
  }

  export type pollResponsesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    submittedAt?: StringFieldUpdateOperationsInput | string
    submittedBy?: StringFieldUpdateOperationsInput | string
    selectedOption?: StringFieldUpdateOperationsInput | string
    pollOptionId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type notesCreateInput = {
    videoId: string
    noteText: string
    userId: string
  }

  export type notesUncheckedCreateInput = {
    id?: number
    videoId: string
    noteText: string
    userId: string
  }

  export type notesUpdateInput = {
    videoId?: StringFieldUpdateOperationsInput | string
    noteText?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type notesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    videoId?: StringFieldUpdateOperationsInput | string
    noteText?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type notesCreateManyInput = {
    id?: number
    videoId: string
    noteText: string
    userId: string
  }

  export type notesUpdateManyMutationInput = {
    videoId?: StringFieldUpdateOperationsInput | string
    noteText?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type notesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    videoId?: StringFieldUpdateOperationsInput | string
    noteText?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
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

  export type VideosListRelationFilter = {
    every?: videosWhereInput
    some?: videosWhereInput
    none?: videosWhereInput
  }

  export type videosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoriesCountOrderByAggregateInput = {
    id?: SortOrder
    categoryName?: SortOrder
    createdAt?: SortOrder
  }

  export type categoriesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type categoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    categoryName?: SortOrder
    createdAt?: SortOrder
  }

  export type categoriesMinOrderByAggregateInput = {
    id?: SortOrder
    categoryName?: SortOrder
    createdAt?: SortOrder
  }

  export type categoriesSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type CategoriesNullableScalarRelationFilter = {
    is?: categoriesWhereInput | null
    isNot?: categoriesWhereInput | null
  }

  export type PollListRelationFilter = {
    every?: pollWhereInput
    some?: pollWhereInput
    none?: pollWhereInput
  }

  export type QuestionsListRelationFilter = {
    every?: questionsWhereInput
    some?: questionsWhereInput
    none?: questionsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type pollOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type questionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type videosCountOrderByAggregateInput = {
    id?: SortOrder
    videoId?: SortOrder
    videoUrl?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    categoryName?: SortOrder
  }

  export type videosAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type videosMaxOrderByAggregateInput = {
    id?: SortOrder
    videoId?: SortOrder
    videoUrl?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    categoryName?: SortOrder
  }

  export type videosMinOrderByAggregateInput = {
    id?: SortOrder
    videoId?: SortOrder
    videoUrl?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    categoryName?: SortOrder
  }

  export type videosSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type PollOptionListRelationFilter = {
    every?: pollOptionWhereInput
    some?: pollOptionWhereInput
    none?: pollOptionWhereInput
  }

  export type VideosNullableScalarRelationFilter = {
    is?: videosWhereInput | null
    isNot?: videosWhereInput | null
  }

  export type pollOptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pollCountOrderByAggregateInput = {
    id?: SortOrder
    createdBy?: SortOrder
    createdAT?: SortOrder
    question?: SortOrder
    startTime?: SortOrder
    duration?: SortOrder
    type?: SortOrder
    videoId?: SortOrder
  }

  export type pollAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type pollMaxOrderByAggregateInput = {
    id?: SortOrder
    createdBy?: SortOrder
    createdAT?: SortOrder
    question?: SortOrder
    startTime?: SortOrder
    duration?: SortOrder
    type?: SortOrder
    videoId?: SortOrder
  }

  export type pollMinOrderByAggregateInput = {
    id?: SortOrder
    createdBy?: SortOrder
    createdAT?: SortOrder
    question?: SortOrder
    startTime?: SortOrder
    duration?: SortOrder
    type?: SortOrder
    videoId?: SortOrder
  }

  export type pollSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type questionsCountOrderByAggregateInput = {
    id?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    imageUrl?: SortOrder
    startTime?: SortOrder
    videoId?: SortOrder
    duration?: SortOrder
    type?: SortOrder
  }

  export type questionsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type questionsMaxOrderByAggregateInput = {
    id?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    imageUrl?: SortOrder
    startTime?: SortOrder
    videoId?: SortOrder
    duration?: SortOrder
    type?: SortOrder
  }

  export type questionsMinOrderByAggregateInput = {
    id?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    imageUrl?: SortOrder
    startTime?: SortOrder
    videoId?: SortOrder
    duration?: SortOrder
    type?: SortOrder
  }

  export type questionsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PollNullableScalarRelationFilter = {
    is?: pollWhereInput | null
    isNot?: pollWhereInput | null
  }

  export type PollResponsesListRelationFilter = {
    every?: pollResponsesWhereInput
    some?: pollResponsesWhereInput
    none?: pollResponsesWhereInput
  }

  export type pollResponsesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pollOptionCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    options?: SortOrder
    pollId?: SortOrder
  }

  export type pollOptionAvgOrderByAggregateInput = {
    id?: SortOrder
    pollId?: SortOrder
  }

  export type pollOptionMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    options?: SortOrder
    pollId?: SortOrder
  }

  export type pollOptionMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    options?: SortOrder
    pollId?: SortOrder
  }

  export type pollOptionSumOrderByAggregateInput = {
    id?: SortOrder
    pollId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PollOptionNullableScalarRelationFilter = {
    is?: pollOptionWhereInput | null
    isNot?: pollOptionWhereInput | null
  }

  export type pollResponsesCountOrderByAggregateInput = {
    id?: SortOrder
    submittedAt?: SortOrder
    submittedBy?: SortOrder
    selectedOption?: SortOrder
    pollOptionId?: SortOrder
  }

  export type pollResponsesAvgOrderByAggregateInput = {
    id?: SortOrder
    pollOptionId?: SortOrder
  }

  export type pollResponsesMaxOrderByAggregateInput = {
    id?: SortOrder
    submittedAt?: SortOrder
    submittedBy?: SortOrder
    selectedOption?: SortOrder
    pollOptionId?: SortOrder
  }

  export type pollResponsesMinOrderByAggregateInput = {
    id?: SortOrder
    submittedAt?: SortOrder
    submittedBy?: SortOrder
    selectedOption?: SortOrder
    pollOptionId?: SortOrder
  }

  export type pollResponsesSumOrderByAggregateInput = {
    id?: SortOrder
    pollOptionId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type notesCountOrderByAggregateInput = {
    id?: SortOrder
    videoId?: SortOrder
    noteText?: SortOrder
    userId?: SortOrder
  }

  export type notesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type notesMaxOrderByAggregateInput = {
    id?: SortOrder
    videoId?: SortOrder
    noteText?: SortOrder
    userId?: SortOrder
  }

  export type notesMinOrderByAggregateInput = {
    id?: SortOrder
    videoId?: SortOrder
    noteText?: SortOrder
    userId?: SortOrder
  }

  export type notesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type videosCreateNestedManyWithoutCategoryInput = {
    create?: XOR<videosCreateWithoutCategoryInput, videosUncheckedCreateWithoutCategoryInput> | videosCreateWithoutCategoryInput[] | videosUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: videosCreateOrConnectWithoutCategoryInput | videosCreateOrConnectWithoutCategoryInput[]
    createMany?: videosCreateManyCategoryInputEnvelope
    connect?: videosWhereUniqueInput | videosWhereUniqueInput[]
  }

  export type videosUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<videosCreateWithoutCategoryInput, videosUncheckedCreateWithoutCategoryInput> | videosCreateWithoutCategoryInput[] | videosUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: videosCreateOrConnectWithoutCategoryInput | videosCreateOrConnectWithoutCategoryInput[]
    createMany?: videosCreateManyCategoryInputEnvelope
    connect?: videosWhereUniqueInput | videosWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type videosUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<videosCreateWithoutCategoryInput, videosUncheckedCreateWithoutCategoryInput> | videosCreateWithoutCategoryInput[] | videosUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: videosCreateOrConnectWithoutCategoryInput | videosCreateOrConnectWithoutCategoryInput[]
    upsert?: videosUpsertWithWhereUniqueWithoutCategoryInput | videosUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: videosCreateManyCategoryInputEnvelope
    set?: videosWhereUniqueInput | videosWhereUniqueInput[]
    disconnect?: videosWhereUniqueInput | videosWhereUniqueInput[]
    delete?: videosWhereUniqueInput | videosWhereUniqueInput[]
    connect?: videosWhereUniqueInput | videosWhereUniqueInput[]
    update?: videosUpdateWithWhereUniqueWithoutCategoryInput | videosUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: videosUpdateManyWithWhereWithoutCategoryInput | videosUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: videosScalarWhereInput | videosScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type videosUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<videosCreateWithoutCategoryInput, videosUncheckedCreateWithoutCategoryInput> | videosCreateWithoutCategoryInput[] | videosUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: videosCreateOrConnectWithoutCategoryInput | videosCreateOrConnectWithoutCategoryInput[]
    upsert?: videosUpsertWithWhereUniqueWithoutCategoryInput | videosUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: videosCreateManyCategoryInputEnvelope
    set?: videosWhereUniqueInput | videosWhereUniqueInput[]
    disconnect?: videosWhereUniqueInput | videosWhereUniqueInput[]
    delete?: videosWhereUniqueInput | videosWhereUniqueInput[]
    connect?: videosWhereUniqueInput | videosWhereUniqueInput[]
    update?: videosUpdateWithWhereUniqueWithoutCategoryInput | videosUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: videosUpdateManyWithWhereWithoutCategoryInput | videosUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: videosScalarWhereInput | videosScalarWhereInput[]
  }

  export type categoriesCreateNestedOneWithoutVideosInput = {
    create?: XOR<categoriesCreateWithoutVideosInput, categoriesUncheckedCreateWithoutVideosInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutVideosInput
    connect?: categoriesWhereUniqueInput
  }

  export type pollCreateNestedManyWithoutVideoInput = {
    create?: XOR<pollCreateWithoutVideoInput, pollUncheckedCreateWithoutVideoInput> | pollCreateWithoutVideoInput[] | pollUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: pollCreateOrConnectWithoutVideoInput | pollCreateOrConnectWithoutVideoInput[]
    createMany?: pollCreateManyVideoInputEnvelope
    connect?: pollWhereUniqueInput | pollWhereUniqueInput[]
  }

  export type questionsCreateNestedManyWithoutVideoInput = {
    create?: XOR<questionsCreateWithoutVideoInput, questionsUncheckedCreateWithoutVideoInput> | questionsCreateWithoutVideoInput[] | questionsUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: questionsCreateOrConnectWithoutVideoInput | questionsCreateOrConnectWithoutVideoInput[]
    createMany?: questionsCreateManyVideoInputEnvelope
    connect?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
  }

  export type pollUncheckedCreateNestedManyWithoutVideoInput = {
    create?: XOR<pollCreateWithoutVideoInput, pollUncheckedCreateWithoutVideoInput> | pollCreateWithoutVideoInput[] | pollUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: pollCreateOrConnectWithoutVideoInput | pollCreateOrConnectWithoutVideoInput[]
    createMany?: pollCreateManyVideoInputEnvelope
    connect?: pollWhereUniqueInput | pollWhereUniqueInput[]
  }

  export type questionsUncheckedCreateNestedManyWithoutVideoInput = {
    create?: XOR<questionsCreateWithoutVideoInput, questionsUncheckedCreateWithoutVideoInput> | questionsCreateWithoutVideoInput[] | questionsUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: questionsCreateOrConnectWithoutVideoInput | questionsCreateOrConnectWithoutVideoInput[]
    createMany?: questionsCreateManyVideoInputEnvelope
    connect?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
  }

  export type categoriesUpdateOneWithoutVideosNestedInput = {
    create?: XOR<categoriesCreateWithoutVideosInput, categoriesUncheckedCreateWithoutVideosInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutVideosInput
    upsert?: categoriesUpsertWithoutVideosInput
    disconnect?: categoriesWhereInput | boolean
    delete?: categoriesWhereInput | boolean
    connect?: categoriesWhereUniqueInput
    update?: XOR<XOR<categoriesUpdateToOneWithWhereWithoutVideosInput, categoriesUpdateWithoutVideosInput>, categoriesUncheckedUpdateWithoutVideosInput>
  }

  export type pollUpdateManyWithoutVideoNestedInput = {
    create?: XOR<pollCreateWithoutVideoInput, pollUncheckedCreateWithoutVideoInput> | pollCreateWithoutVideoInput[] | pollUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: pollCreateOrConnectWithoutVideoInput | pollCreateOrConnectWithoutVideoInput[]
    upsert?: pollUpsertWithWhereUniqueWithoutVideoInput | pollUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: pollCreateManyVideoInputEnvelope
    set?: pollWhereUniqueInput | pollWhereUniqueInput[]
    disconnect?: pollWhereUniqueInput | pollWhereUniqueInput[]
    delete?: pollWhereUniqueInput | pollWhereUniqueInput[]
    connect?: pollWhereUniqueInput | pollWhereUniqueInput[]
    update?: pollUpdateWithWhereUniqueWithoutVideoInput | pollUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: pollUpdateManyWithWhereWithoutVideoInput | pollUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: pollScalarWhereInput | pollScalarWhereInput[]
  }

  export type questionsUpdateManyWithoutVideoNestedInput = {
    create?: XOR<questionsCreateWithoutVideoInput, questionsUncheckedCreateWithoutVideoInput> | questionsCreateWithoutVideoInput[] | questionsUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: questionsCreateOrConnectWithoutVideoInput | questionsCreateOrConnectWithoutVideoInput[]
    upsert?: questionsUpsertWithWhereUniqueWithoutVideoInput | questionsUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: questionsCreateManyVideoInputEnvelope
    set?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    disconnect?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    delete?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    connect?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    update?: questionsUpdateWithWhereUniqueWithoutVideoInput | questionsUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: questionsUpdateManyWithWhereWithoutVideoInput | questionsUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: questionsScalarWhereInput | questionsScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type pollUncheckedUpdateManyWithoutVideoNestedInput = {
    create?: XOR<pollCreateWithoutVideoInput, pollUncheckedCreateWithoutVideoInput> | pollCreateWithoutVideoInput[] | pollUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: pollCreateOrConnectWithoutVideoInput | pollCreateOrConnectWithoutVideoInput[]
    upsert?: pollUpsertWithWhereUniqueWithoutVideoInput | pollUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: pollCreateManyVideoInputEnvelope
    set?: pollWhereUniqueInput | pollWhereUniqueInput[]
    disconnect?: pollWhereUniqueInput | pollWhereUniqueInput[]
    delete?: pollWhereUniqueInput | pollWhereUniqueInput[]
    connect?: pollWhereUniqueInput | pollWhereUniqueInput[]
    update?: pollUpdateWithWhereUniqueWithoutVideoInput | pollUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: pollUpdateManyWithWhereWithoutVideoInput | pollUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: pollScalarWhereInput | pollScalarWhereInput[]
  }

  export type questionsUncheckedUpdateManyWithoutVideoNestedInput = {
    create?: XOR<questionsCreateWithoutVideoInput, questionsUncheckedCreateWithoutVideoInput> | questionsCreateWithoutVideoInput[] | questionsUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: questionsCreateOrConnectWithoutVideoInput | questionsCreateOrConnectWithoutVideoInput[]
    upsert?: questionsUpsertWithWhereUniqueWithoutVideoInput | questionsUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: questionsCreateManyVideoInputEnvelope
    set?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    disconnect?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    delete?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    connect?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    update?: questionsUpdateWithWhereUniqueWithoutVideoInput | questionsUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: questionsUpdateManyWithWhereWithoutVideoInput | questionsUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: questionsScalarWhereInput | questionsScalarWhereInput[]
  }

  export type pollOptionCreateNestedManyWithoutPollInput = {
    create?: XOR<pollOptionCreateWithoutPollInput, pollOptionUncheckedCreateWithoutPollInput> | pollOptionCreateWithoutPollInput[] | pollOptionUncheckedCreateWithoutPollInput[]
    connectOrCreate?: pollOptionCreateOrConnectWithoutPollInput | pollOptionCreateOrConnectWithoutPollInput[]
    createMany?: pollOptionCreateManyPollInputEnvelope
    connect?: pollOptionWhereUniqueInput | pollOptionWhereUniqueInput[]
  }

  export type videosCreateNestedOneWithoutPollsInput = {
    create?: XOR<videosCreateWithoutPollsInput, videosUncheckedCreateWithoutPollsInput>
    connectOrCreate?: videosCreateOrConnectWithoutPollsInput
    connect?: videosWhereUniqueInput
  }

  export type pollOptionUncheckedCreateNestedManyWithoutPollInput = {
    create?: XOR<pollOptionCreateWithoutPollInput, pollOptionUncheckedCreateWithoutPollInput> | pollOptionCreateWithoutPollInput[] | pollOptionUncheckedCreateWithoutPollInput[]
    connectOrCreate?: pollOptionCreateOrConnectWithoutPollInput | pollOptionCreateOrConnectWithoutPollInput[]
    createMany?: pollOptionCreateManyPollInputEnvelope
    connect?: pollOptionWhereUniqueInput | pollOptionWhereUniqueInput[]
  }

  export type pollOptionUpdateManyWithoutPollNestedInput = {
    create?: XOR<pollOptionCreateWithoutPollInput, pollOptionUncheckedCreateWithoutPollInput> | pollOptionCreateWithoutPollInput[] | pollOptionUncheckedCreateWithoutPollInput[]
    connectOrCreate?: pollOptionCreateOrConnectWithoutPollInput | pollOptionCreateOrConnectWithoutPollInput[]
    upsert?: pollOptionUpsertWithWhereUniqueWithoutPollInput | pollOptionUpsertWithWhereUniqueWithoutPollInput[]
    createMany?: pollOptionCreateManyPollInputEnvelope
    set?: pollOptionWhereUniqueInput | pollOptionWhereUniqueInput[]
    disconnect?: pollOptionWhereUniqueInput | pollOptionWhereUniqueInput[]
    delete?: pollOptionWhereUniqueInput | pollOptionWhereUniqueInput[]
    connect?: pollOptionWhereUniqueInput | pollOptionWhereUniqueInput[]
    update?: pollOptionUpdateWithWhereUniqueWithoutPollInput | pollOptionUpdateWithWhereUniqueWithoutPollInput[]
    updateMany?: pollOptionUpdateManyWithWhereWithoutPollInput | pollOptionUpdateManyWithWhereWithoutPollInput[]
    deleteMany?: pollOptionScalarWhereInput | pollOptionScalarWhereInput[]
  }

  export type videosUpdateOneWithoutPollsNestedInput = {
    create?: XOR<videosCreateWithoutPollsInput, videosUncheckedCreateWithoutPollsInput>
    connectOrCreate?: videosCreateOrConnectWithoutPollsInput
    upsert?: videosUpsertWithoutPollsInput
    disconnect?: videosWhereInput | boolean
    delete?: videosWhereInput | boolean
    connect?: videosWhereUniqueInput
    update?: XOR<XOR<videosUpdateToOneWithWhereWithoutPollsInput, videosUpdateWithoutPollsInput>, videosUncheckedUpdateWithoutPollsInput>
  }

  export type pollOptionUncheckedUpdateManyWithoutPollNestedInput = {
    create?: XOR<pollOptionCreateWithoutPollInput, pollOptionUncheckedCreateWithoutPollInput> | pollOptionCreateWithoutPollInput[] | pollOptionUncheckedCreateWithoutPollInput[]
    connectOrCreate?: pollOptionCreateOrConnectWithoutPollInput | pollOptionCreateOrConnectWithoutPollInput[]
    upsert?: pollOptionUpsertWithWhereUniqueWithoutPollInput | pollOptionUpsertWithWhereUniqueWithoutPollInput[]
    createMany?: pollOptionCreateManyPollInputEnvelope
    set?: pollOptionWhereUniqueInput | pollOptionWhereUniqueInput[]
    disconnect?: pollOptionWhereUniqueInput | pollOptionWhereUniqueInput[]
    delete?: pollOptionWhereUniqueInput | pollOptionWhereUniqueInput[]
    connect?: pollOptionWhereUniqueInput | pollOptionWhereUniqueInput[]
    update?: pollOptionUpdateWithWhereUniqueWithoutPollInput | pollOptionUpdateWithWhereUniqueWithoutPollInput[]
    updateMany?: pollOptionUpdateManyWithWhereWithoutPollInput | pollOptionUpdateManyWithWhereWithoutPollInput[]
    deleteMany?: pollOptionScalarWhereInput | pollOptionScalarWhereInput[]
  }

  export type videosCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<videosCreateWithoutQuestionsInput, videosUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: videosCreateOrConnectWithoutQuestionsInput
    connect?: videosWhereUniqueInput
  }

  export type videosUpdateOneWithoutQuestionsNestedInput = {
    create?: XOR<videosCreateWithoutQuestionsInput, videosUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: videosCreateOrConnectWithoutQuestionsInput
    upsert?: videosUpsertWithoutQuestionsInput
    disconnect?: videosWhereInput | boolean
    delete?: videosWhereInput | boolean
    connect?: videosWhereUniqueInput
    update?: XOR<XOR<videosUpdateToOneWithWhereWithoutQuestionsInput, videosUpdateWithoutQuestionsInput>, videosUncheckedUpdateWithoutQuestionsInput>
  }

  export type pollCreateNestedOneWithoutOptionsInput = {
    create?: XOR<pollCreateWithoutOptionsInput, pollUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: pollCreateOrConnectWithoutOptionsInput
    connect?: pollWhereUniqueInput
  }

  export type pollResponsesCreateNestedManyWithoutPollOptionInput = {
    create?: XOR<pollResponsesCreateWithoutPollOptionInput, pollResponsesUncheckedCreateWithoutPollOptionInput> | pollResponsesCreateWithoutPollOptionInput[] | pollResponsesUncheckedCreateWithoutPollOptionInput[]
    connectOrCreate?: pollResponsesCreateOrConnectWithoutPollOptionInput | pollResponsesCreateOrConnectWithoutPollOptionInput[]
    createMany?: pollResponsesCreateManyPollOptionInputEnvelope
    connect?: pollResponsesWhereUniqueInput | pollResponsesWhereUniqueInput[]
  }

  export type pollResponsesUncheckedCreateNestedManyWithoutPollOptionInput = {
    create?: XOR<pollResponsesCreateWithoutPollOptionInput, pollResponsesUncheckedCreateWithoutPollOptionInput> | pollResponsesCreateWithoutPollOptionInput[] | pollResponsesUncheckedCreateWithoutPollOptionInput[]
    connectOrCreate?: pollResponsesCreateOrConnectWithoutPollOptionInput | pollResponsesCreateOrConnectWithoutPollOptionInput[]
    createMany?: pollResponsesCreateManyPollOptionInputEnvelope
    connect?: pollResponsesWhereUniqueInput | pollResponsesWhereUniqueInput[]
  }

  export type pollUpdateOneWithoutOptionsNestedInput = {
    create?: XOR<pollCreateWithoutOptionsInput, pollUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: pollCreateOrConnectWithoutOptionsInput
    upsert?: pollUpsertWithoutOptionsInput
    disconnect?: pollWhereInput | boolean
    delete?: pollWhereInput | boolean
    connect?: pollWhereUniqueInput
    update?: XOR<XOR<pollUpdateToOneWithWhereWithoutOptionsInput, pollUpdateWithoutOptionsInput>, pollUncheckedUpdateWithoutOptionsInput>
  }

  export type pollResponsesUpdateManyWithoutPollOptionNestedInput = {
    create?: XOR<pollResponsesCreateWithoutPollOptionInput, pollResponsesUncheckedCreateWithoutPollOptionInput> | pollResponsesCreateWithoutPollOptionInput[] | pollResponsesUncheckedCreateWithoutPollOptionInput[]
    connectOrCreate?: pollResponsesCreateOrConnectWithoutPollOptionInput | pollResponsesCreateOrConnectWithoutPollOptionInput[]
    upsert?: pollResponsesUpsertWithWhereUniqueWithoutPollOptionInput | pollResponsesUpsertWithWhereUniqueWithoutPollOptionInput[]
    createMany?: pollResponsesCreateManyPollOptionInputEnvelope
    set?: pollResponsesWhereUniqueInput | pollResponsesWhereUniqueInput[]
    disconnect?: pollResponsesWhereUniqueInput | pollResponsesWhereUniqueInput[]
    delete?: pollResponsesWhereUniqueInput | pollResponsesWhereUniqueInput[]
    connect?: pollResponsesWhereUniqueInput | pollResponsesWhereUniqueInput[]
    update?: pollResponsesUpdateWithWhereUniqueWithoutPollOptionInput | pollResponsesUpdateWithWhereUniqueWithoutPollOptionInput[]
    updateMany?: pollResponsesUpdateManyWithWhereWithoutPollOptionInput | pollResponsesUpdateManyWithWhereWithoutPollOptionInput[]
    deleteMany?: pollResponsesScalarWhereInput | pollResponsesScalarWhereInput[]
  }

  export type pollResponsesUncheckedUpdateManyWithoutPollOptionNestedInput = {
    create?: XOR<pollResponsesCreateWithoutPollOptionInput, pollResponsesUncheckedCreateWithoutPollOptionInput> | pollResponsesCreateWithoutPollOptionInput[] | pollResponsesUncheckedCreateWithoutPollOptionInput[]
    connectOrCreate?: pollResponsesCreateOrConnectWithoutPollOptionInput | pollResponsesCreateOrConnectWithoutPollOptionInput[]
    upsert?: pollResponsesUpsertWithWhereUniqueWithoutPollOptionInput | pollResponsesUpsertWithWhereUniqueWithoutPollOptionInput[]
    createMany?: pollResponsesCreateManyPollOptionInputEnvelope
    set?: pollResponsesWhereUniqueInput | pollResponsesWhereUniqueInput[]
    disconnect?: pollResponsesWhereUniqueInput | pollResponsesWhereUniqueInput[]
    delete?: pollResponsesWhereUniqueInput | pollResponsesWhereUniqueInput[]
    connect?: pollResponsesWhereUniqueInput | pollResponsesWhereUniqueInput[]
    update?: pollResponsesUpdateWithWhereUniqueWithoutPollOptionInput | pollResponsesUpdateWithWhereUniqueWithoutPollOptionInput[]
    updateMany?: pollResponsesUpdateManyWithWhereWithoutPollOptionInput | pollResponsesUpdateManyWithWhereWithoutPollOptionInput[]
    deleteMany?: pollResponsesScalarWhereInput | pollResponsesScalarWhereInput[]
  }

  export type pollOptionCreateNestedOneWithoutResponsesInput = {
    create?: XOR<pollOptionCreateWithoutResponsesInput, pollOptionUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: pollOptionCreateOrConnectWithoutResponsesInput
    connect?: pollOptionWhereUniqueInput
  }

  export type pollOptionUpdateOneWithoutResponsesNestedInput = {
    create?: XOR<pollOptionCreateWithoutResponsesInput, pollOptionUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: pollOptionCreateOrConnectWithoutResponsesInput
    upsert?: pollOptionUpsertWithoutResponsesInput
    disconnect?: pollOptionWhereInput | boolean
    delete?: pollOptionWhereInput | boolean
    connect?: pollOptionWhereUniqueInput
    update?: XOR<XOR<pollOptionUpdateToOneWithWhereWithoutResponsesInput, pollOptionUpdateWithoutResponsesInput>, pollOptionUncheckedUpdateWithoutResponsesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type videosCreateWithoutCategoryInput = {
    videoId: string
    videoUrl: string
    createdBy: string
    createdAt?: Date | string
    polls?: pollCreateNestedManyWithoutVideoInput
    questions?: questionsCreateNestedManyWithoutVideoInput
  }

  export type videosUncheckedCreateWithoutCategoryInput = {
    id?: number
    videoId: string
    videoUrl: string
    createdBy: string
    createdAt?: Date | string
    polls?: pollUncheckedCreateNestedManyWithoutVideoInput
    questions?: questionsUncheckedCreateNestedManyWithoutVideoInput
  }

  export type videosCreateOrConnectWithoutCategoryInput = {
    where: videosWhereUniqueInput
    create: XOR<videosCreateWithoutCategoryInput, videosUncheckedCreateWithoutCategoryInput>
  }

  export type videosCreateManyCategoryInputEnvelope = {
    data: videosCreateManyCategoryInput | videosCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type videosUpsertWithWhereUniqueWithoutCategoryInput = {
    where: videosWhereUniqueInput
    update: XOR<videosUpdateWithoutCategoryInput, videosUncheckedUpdateWithoutCategoryInput>
    create: XOR<videosCreateWithoutCategoryInput, videosUncheckedCreateWithoutCategoryInput>
  }

  export type videosUpdateWithWhereUniqueWithoutCategoryInput = {
    where: videosWhereUniqueInput
    data: XOR<videosUpdateWithoutCategoryInput, videosUncheckedUpdateWithoutCategoryInput>
  }

  export type videosUpdateManyWithWhereWithoutCategoryInput = {
    where: videosScalarWhereInput
    data: XOR<videosUpdateManyMutationInput, videosUncheckedUpdateManyWithoutCategoryInput>
  }

  export type videosScalarWhereInput = {
    AND?: videosScalarWhereInput | videosScalarWhereInput[]
    OR?: videosScalarWhereInput[]
    NOT?: videosScalarWhereInput | videosScalarWhereInput[]
    id?: IntFilter<"videos"> | number
    videoId?: StringFilter<"videos"> | string
    videoUrl?: StringFilter<"videos"> | string
    createdBy?: StringFilter<"videos"> | string
    createdAt?: DateTimeFilter<"videos"> | Date | string
    categoryName?: StringNullableFilter<"videos"> | string | null
  }

  export type categoriesCreateWithoutVideosInput = {
    categoryName: string
    createdAt?: Date | string
  }

  export type categoriesUncheckedCreateWithoutVideosInput = {
    id?: number
    categoryName: string
    createdAt?: Date | string
  }

  export type categoriesCreateOrConnectWithoutVideosInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutVideosInput, categoriesUncheckedCreateWithoutVideosInput>
  }

  export type pollCreateWithoutVideoInput = {
    createdBy: string
    createdAT?: Date | string
    question: string
    startTime: string
    duration: string
    type?: string
    options?: pollOptionCreateNestedManyWithoutPollInput
  }

  export type pollUncheckedCreateWithoutVideoInput = {
    id?: number
    createdBy: string
    createdAT?: Date | string
    question: string
    startTime: string
    duration: string
    type?: string
    options?: pollOptionUncheckedCreateNestedManyWithoutPollInput
  }

  export type pollCreateOrConnectWithoutVideoInput = {
    where: pollWhereUniqueInput
    create: XOR<pollCreateWithoutVideoInput, pollUncheckedCreateWithoutVideoInput>
  }

  export type pollCreateManyVideoInputEnvelope = {
    data: pollCreateManyVideoInput | pollCreateManyVideoInput[]
    skipDuplicates?: boolean
  }

  export type questionsCreateWithoutVideoInput = {
    createdBy: string
    createdAt?: Date | string
    imageUrl: string
    startTime: string
    duration: string
    type?: string
  }

  export type questionsUncheckedCreateWithoutVideoInput = {
    id?: number
    createdBy: string
    createdAt?: Date | string
    imageUrl: string
    startTime: string
    duration: string
    type?: string
  }

  export type questionsCreateOrConnectWithoutVideoInput = {
    where: questionsWhereUniqueInput
    create: XOR<questionsCreateWithoutVideoInput, questionsUncheckedCreateWithoutVideoInput>
  }

  export type questionsCreateManyVideoInputEnvelope = {
    data: questionsCreateManyVideoInput | questionsCreateManyVideoInput[]
    skipDuplicates?: boolean
  }

  export type categoriesUpsertWithoutVideosInput = {
    update: XOR<categoriesUpdateWithoutVideosInput, categoriesUncheckedUpdateWithoutVideosInput>
    create: XOR<categoriesCreateWithoutVideosInput, categoriesUncheckedCreateWithoutVideosInput>
    where?: categoriesWhereInput
  }

  export type categoriesUpdateToOneWithWhereWithoutVideosInput = {
    where?: categoriesWhereInput
    data: XOR<categoriesUpdateWithoutVideosInput, categoriesUncheckedUpdateWithoutVideosInput>
  }

  export type categoriesUpdateWithoutVideosInput = {
    categoryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categoriesUncheckedUpdateWithoutVideosInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pollUpsertWithWhereUniqueWithoutVideoInput = {
    where: pollWhereUniqueInput
    update: XOR<pollUpdateWithoutVideoInput, pollUncheckedUpdateWithoutVideoInput>
    create: XOR<pollCreateWithoutVideoInput, pollUncheckedCreateWithoutVideoInput>
  }

  export type pollUpdateWithWhereUniqueWithoutVideoInput = {
    where: pollWhereUniqueInput
    data: XOR<pollUpdateWithoutVideoInput, pollUncheckedUpdateWithoutVideoInput>
  }

  export type pollUpdateManyWithWhereWithoutVideoInput = {
    where: pollScalarWhereInput
    data: XOR<pollUpdateManyMutationInput, pollUncheckedUpdateManyWithoutVideoInput>
  }

  export type pollScalarWhereInput = {
    AND?: pollScalarWhereInput | pollScalarWhereInput[]
    OR?: pollScalarWhereInput[]
    NOT?: pollScalarWhereInput | pollScalarWhereInput[]
    id?: IntFilter<"poll"> | number
    createdBy?: StringFilter<"poll"> | string
    createdAT?: DateTimeFilter<"poll"> | Date | string
    question?: StringFilter<"poll"> | string
    startTime?: StringFilter<"poll"> | string
    duration?: StringFilter<"poll"> | string
    type?: StringFilter<"poll"> | string
    videoId?: StringNullableFilter<"poll"> | string | null
  }

  export type questionsUpsertWithWhereUniqueWithoutVideoInput = {
    where: questionsWhereUniqueInput
    update: XOR<questionsUpdateWithoutVideoInput, questionsUncheckedUpdateWithoutVideoInput>
    create: XOR<questionsCreateWithoutVideoInput, questionsUncheckedCreateWithoutVideoInput>
  }

  export type questionsUpdateWithWhereUniqueWithoutVideoInput = {
    where: questionsWhereUniqueInput
    data: XOR<questionsUpdateWithoutVideoInput, questionsUncheckedUpdateWithoutVideoInput>
  }

  export type questionsUpdateManyWithWhereWithoutVideoInput = {
    where: questionsScalarWhereInput
    data: XOR<questionsUpdateManyMutationInput, questionsUncheckedUpdateManyWithoutVideoInput>
  }

  export type questionsScalarWhereInput = {
    AND?: questionsScalarWhereInput | questionsScalarWhereInput[]
    OR?: questionsScalarWhereInput[]
    NOT?: questionsScalarWhereInput | questionsScalarWhereInput[]
    id?: IntFilter<"questions"> | number
    createdBy?: StringFilter<"questions"> | string
    createdAt?: DateTimeFilter<"questions"> | Date | string
    imageUrl?: StringFilter<"questions"> | string
    startTime?: StringFilter<"questions"> | string
    videoId?: StringNullableFilter<"questions"> | string | null
    duration?: StringFilter<"questions"> | string
    type?: StringFilter<"questions"> | string
  }

  export type pollOptionCreateWithoutPollInput = {
    createdAt?: Date | string
    options: string
    responses?: pollResponsesCreateNestedManyWithoutPollOptionInput
  }

  export type pollOptionUncheckedCreateWithoutPollInput = {
    id?: number
    createdAt?: Date | string
    options: string
    responses?: pollResponsesUncheckedCreateNestedManyWithoutPollOptionInput
  }

  export type pollOptionCreateOrConnectWithoutPollInput = {
    where: pollOptionWhereUniqueInput
    create: XOR<pollOptionCreateWithoutPollInput, pollOptionUncheckedCreateWithoutPollInput>
  }

  export type pollOptionCreateManyPollInputEnvelope = {
    data: pollOptionCreateManyPollInput | pollOptionCreateManyPollInput[]
    skipDuplicates?: boolean
  }

  export type videosCreateWithoutPollsInput = {
    videoId: string
    videoUrl: string
    createdBy: string
    createdAt?: Date | string
    category?: categoriesCreateNestedOneWithoutVideosInput
    questions?: questionsCreateNestedManyWithoutVideoInput
  }

  export type videosUncheckedCreateWithoutPollsInput = {
    id?: number
    videoId: string
    videoUrl: string
    createdBy: string
    createdAt?: Date | string
    categoryName?: string | null
    questions?: questionsUncheckedCreateNestedManyWithoutVideoInput
  }

  export type videosCreateOrConnectWithoutPollsInput = {
    where: videosWhereUniqueInput
    create: XOR<videosCreateWithoutPollsInput, videosUncheckedCreateWithoutPollsInput>
  }

  export type pollOptionUpsertWithWhereUniqueWithoutPollInput = {
    where: pollOptionWhereUniqueInput
    update: XOR<pollOptionUpdateWithoutPollInput, pollOptionUncheckedUpdateWithoutPollInput>
    create: XOR<pollOptionCreateWithoutPollInput, pollOptionUncheckedCreateWithoutPollInput>
  }

  export type pollOptionUpdateWithWhereUniqueWithoutPollInput = {
    where: pollOptionWhereUniqueInput
    data: XOR<pollOptionUpdateWithoutPollInput, pollOptionUncheckedUpdateWithoutPollInput>
  }

  export type pollOptionUpdateManyWithWhereWithoutPollInput = {
    where: pollOptionScalarWhereInput
    data: XOR<pollOptionUpdateManyMutationInput, pollOptionUncheckedUpdateManyWithoutPollInput>
  }

  export type pollOptionScalarWhereInput = {
    AND?: pollOptionScalarWhereInput | pollOptionScalarWhereInput[]
    OR?: pollOptionScalarWhereInput[]
    NOT?: pollOptionScalarWhereInput | pollOptionScalarWhereInput[]
    id?: IntFilter<"pollOption"> | number
    createdAt?: DateTimeFilter<"pollOption"> | Date | string
    options?: StringFilter<"pollOption"> | string
    pollId?: IntFilter<"pollOption"> | number
  }

  export type videosUpsertWithoutPollsInput = {
    update: XOR<videosUpdateWithoutPollsInput, videosUncheckedUpdateWithoutPollsInput>
    create: XOR<videosCreateWithoutPollsInput, videosUncheckedCreateWithoutPollsInput>
    where?: videosWhereInput
  }

  export type videosUpdateToOneWithWhereWithoutPollsInput = {
    where?: videosWhereInput
    data: XOR<videosUpdateWithoutPollsInput, videosUncheckedUpdateWithoutPollsInput>
  }

  export type videosUpdateWithoutPollsInput = {
    videoId?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: categoriesUpdateOneWithoutVideosNestedInput
    questions?: questionsUpdateManyWithoutVideoNestedInput
  }

  export type videosUncheckedUpdateWithoutPollsInput = {
    id?: IntFieldUpdateOperationsInput | number
    videoId?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryName?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: questionsUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type videosCreateWithoutQuestionsInput = {
    videoId: string
    videoUrl: string
    createdBy: string
    createdAt?: Date | string
    category?: categoriesCreateNestedOneWithoutVideosInput
    polls?: pollCreateNestedManyWithoutVideoInput
  }

  export type videosUncheckedCreateWithoutQuestionsInput = {
    id?: number
    videoId: string
    videoUrl: string
    createdBy: string
    createdAt?: Date | string
    categoryName?: string | null
    polls?: pollUncheckedCreateNestedManyWithoutVideoInput
  }

  export type videosCreateOrConnectWithoutQuestionsInput = {
    where: videosWhereUniqueInput
    create: XOR<videosCreateWithoutQuestionsInput, videosUncheckedCreateWithoutQuestionsInput>
  }

  export type videosUpsertWithoutQuestionsInput = {
    update: XOR<videosUpdateWithoutQuestionsInput, videosUncheckedUpdateWithoutQuestionsInput>
    create: XOR<videosCreateWithoutQuestionsInput, videosUncheckedCreateWithoutQuestionsInput>
    where?: videosWhereInput
  }

  export type videosUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: videosWhereInput
    data: XOR<videosUpdateWithoutQuestionsInput, videosUncheckedUpdateWithoutQuestionsInput>
  }

  export type videosUpdateWithoutQuestionsInput = {
    videoId?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: categoriesUpdateOneWithoutVideosNestedInput
    polls?: pollUpdateManyWithoutVideoNestedInput
  }

  export type videosUncheckedUpdateWithoutQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    videoId?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryName?: NullableStringFieldUpdateOperationsInput | string | null
    polls?: pollUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type pollCreateWithoutOptionsInput = {
    createdBy: string
    createdAT?: Date | string
    question: string
    startTime: string
    duration: string
    type?: string
    video?: videosCreateNestedOneWithoutPollsInput
  }

  export type pollUncheckedCreateWithoutOptionsInput = {
    id?: number
    createdBy: string
    createdAT?: Date | string
    question: string
    startTime: string
    duration: string
    type?: string
    videoId?: string | null
  }

  export type pollCreateOrConnectWithoutOptionsInput = {
    where: pollWhereUniqueInput
    create: XOR<pollCreateWithoutOptionsInput, pollUncheckedCreateWithoutOptionsInput>
  }

  export type pollResponsesCreateWithoutPollOptionInput = {
    submittedAt: string
    submittedBy: string
    selectedOption: string
  }

  export type pollResponsesUncheckedCreateWithoutPollOptionInput = {
    id?: number
    submittedAt: string
    submittedBy: string
    selectedOption: string
  }

  export type pollResponsesCreateOrConnectWithoutPollOptionInput = {
    where: pollResponsesWhereUniqueInput
    create: XOR<pollResponsesCreateWithoutPollOptionInput, pollResponsesUncheckedCreateWithoutPollOptionInput>
  }

  export type pollResponsesCreateManyPollOptionInputEnvelope = {
    data: pollResponsesCreateManyPollOptionInput | pollResponsesCreateManyPollOptionInput[]
    skipDuplicates?: boolean
  }

  export type pollUpsertWithoutOptionsInput = {
    update: XOR<pollUpdateWithoutOptionsInput, pollUncheckedUpdateWithoutOptionsInput>
    create: XOR<pollCreateWithoutOptionsInput, pollUncheckedCreateWithoutOptionsInput>
    where?: pollWhereInput
  }

  export type pollUpdateToOneWithWhereWithoutOptionsInput = {
    where?: pollWhereInput
    data: XOR<pollUpdateWithoutOptionsInput, pollUncheckedUpdateWithoutOptionsInput>
  }

  export type pollUpdateWithoutOptionsInput = {
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAT?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    video?: videosUpdateOneWithoutPollsNestedInput
  }

  export type pollUncheckedUpdateWithoutOptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAT?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    videoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pollResponsesUpsertWithWhereUniqueWithoutPollOptionInput = {
    where: pollResponsesWhereUniqueInput
    update: XOR<pollResponsesUpdateWithoutPollOptionInput, pollResponsesUncheckedUpdateWithoutPollOptionInput>
    create: XOR<pollResponsesCreateWithoutPollOptionInput, pollResponsesUncheckedCreateWithoutPollOptionInput>
  }

  export type pollResponsesUpdateWithWhereUniqueWithoutPollOptionInput = {
    where: pollResponsesWhereUniqueInput
    data: XOR<pollResponsesUpdateWithoutPollOptionInput, pollResponsesUncheckedUpdateWithoutPollOptionInput>
  }

  export type pollResponsesUpdateManyWithWhereWithoutPollOptionInput = {
    where: pollResponsesScalarWhereInput
    data: XOR<pollResponsesUpdateManyMutationInput, pollResponsesUncheckedUpdateManyWithoutPollOptionInput>
  }

  export type pollResponsesScalarWhereInput = {
    AND?: pollResponsesScalarWhereInput | pollResponsesScalarWhereInput[]
    OR?: pollResponsesScalarWhereInput[]
    NOT?: pollResponsesScalarWhereInput | pollResponsesScalarWhereInput[]
    id?: IntFilter<"pollResponses"> | number
    submittedAt?: StringFilter<"pollResponses"> | string
    submittedBy?: StringFilter<"pollResponses"> | string
    selectedOption?: StringFilter<"pollResponses"> | string
    pollOptionId?: IntNullableFilter<"pollResponses"> | number | null
  }

  export type pollOptionCreateWithoutResponsesInput = {
    createdAt?: Date | string
    options: string
    poll?: pollCreateNestedOneWithoutOptionsInput
  }

  export type pollOptionUncheckedCreateWithoutResponsesInput = {
    id?: number
    createdAt?: Date | string
    options: string
    pollId: number
  }

  export type pollOptionCreateOrConnectWithoutResponsesInput = {
    where: pollOptionWhereUniqueInput
    create: XOR<pollOptionCreateWithoutResponsesInput, pollOptionUncheckedCreateWithoutResponsesInput>
  }

  export type pollOptionUpsertWithoutResponsesInput = {
    update: XOR<pollOptionUpdateWithoutResponsesInput, pollOptionUncheckedUpdateWithoutResponsesInput>
    create: XOR<pollOptionCreateWithoutResponsesInput, pollOptionUncheckedCreateWithoutResponsesInput>
    where?: pollOptionWhereInput
  }

  export type pollOptionUpdateToOneWithWhereWithoutResponsesInput = {
    where?: pollOptionWhereInput
    data: XOR<pollOptionUpdateWithoutResponsesInput, pollOptionUncheckedUpdateWithoutResponsesInput>
  }

  export type pollOptionUpdateWithoutResponsesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: StringFieldUpdateOperationsInput | string
    poll?: pollUpdateOneWithoutOptionsNestedInput
  }

  export type pollOptionUncheckedUpdateWithoutResponsesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: StringFieldUpdateOperationsInput | string
    pollId?: IntFieldUpdateOperationsInput | number
  }

  export type videosCreateManyCategoryInput = {
    id?: number
    videoId: string
    videoUrl: string
    createdBy: string
    createdAt?: Date | string
  }

  export type videosUpdateWithoutCategoryInput = {
    videoId?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    polls?: pollUpdateManyWithoutVideoNestedInput
    questions?: questionsUpdateManyWithoutVideoNestedInput
  }

  export type videosUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    videoId?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    polls?: pollUncheckedUpdateManyWithoutVideoNestedInput
    questions?: questionsUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type videosUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    videoId?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pollCreateManyVideoInput = {
    id?: number
    createdBy: string
    createdAT?: Date | string
    question: string
    startTime: string
    duration: string
    type?: string
  }

  export type questionsCreateManyVideoInput = {
    id?: number
    createdBy: string
    createdAt?: Date | string
    imageUrl: string
    startTime: string
    duration: string
    type?: string
  }

  export type pollUpdateWithoutVideoInput = {
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAT?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    options?: pollOptionUpdateManyWithoutPollNestedInput
  }

  export type pollUncheckedUpdateWithoutVideoInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAT?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    options?: pollOptionUncheckedUpdateManyWithoutPollNestedInput
  }

  export type pollUncheckedUpdateManyWithoutVideoInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAT?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type questionsUpdateWithoutVideoInput = {
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type questionsUncheckedUpdateWithoutVideoInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type questionsUncheckedUpdateManyWithoutVideoInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type pollOptionCreateManyPollInput = {
    id?: number
    createdAt?: Date | string
    options: string
  }

  export type pollOptionUpdateWithoutPollInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: StringFieldUpdateOperationsInput | string
    responses?: pollResponsesUpdateManyWithoutPollOptionNestedInput
  }

  export type pollOptionUncheckedUpdateWithoutPollInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: StringFieldUpdateOperationsInput | string
    responses?: pollResponsesUncheckedUpdateManyWithoutPollOptionNestedInput
  }

  export type pollOptionUncheckedUpdateManyWithoutPollInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: StringFieldUpdateOperationsInput | string
  }

  export type pollResponsesCreateManyPollOptionInput = {
    id?: number
    submittedAt: string
    submittedBy: string
    selectedOption: string
  }

  export type pollResponsesUpdateWithoutPollOptionInput = {
    submittedAt?: StringFieldUpdateOperationsInput | string
    submittedBy?: StringFieldUpdateOperationsInput | string
    selectedOption?: StringFieldUpdateOperationsInput | string
  }

  export type pollResponsesUncheckedUpdateWithoutPollOptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    submittedAt?: StringFieldUpdateOperationsInput | string
    submittedBy?: StringFieldUpdateOperationsInput | string
    selectedOption?: StringFieldUpdateOperationsInput | string
  }

  export type pollResponsesUncheckedUpdateManyWithoutPollOptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    submittedAt?: StringFieldUpdateOperationsInput | string
    submittedBy?: StringFieldUpdateOperationsInput | string
    selectedOption?: StringFieldUpdateOperationsInput | string
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