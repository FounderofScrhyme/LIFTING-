
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
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model Sales
 * 
 */
export type Sales = $Result.DefaultSelection<Prisma.$SalesPayload>
/**
 * Model Payroll
 * 
 */
export type Payroll = $Result.DefaultSelection<Prisma.$PayrollPayload>
/**
 * Model Site
 * 
 */
export type Site = $Result.DefaultSelection<Prisma.$SitePayload>
/**
 * Model SiteEmployee
 * 
 */
export type SiteEmployee = $Result.DefaultSelection<Prisma.$SiteEmployeePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ClientStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  PROSPECT: 'PROSPECT'
};

export type ClientStatus = (typeof ClientStatus)[keyof typeof ClientStatus]


export const SalesStatus: {
  COMPLETED: 'COMPLETED',
  PENDING: 'PENDING',
  CANCELLED: 'CANCELLED'
};

export type SalesStatus = (typeof SalesStatus)[keyof typeof SalesStatus]


export const PayrollStatus: {
  PENDING: 'PENDING',
  PAID: 'PAID',
  CANCELLED: 'CANCELLED'
};

export type PayrollStatus = (typeof PayrollStatus)[keyof typeof PayrollStatus]


export const PayrollPeriodType: {
  WEEKLY: 'WEEKLY',
  MONTHLY: 'MONTHLY'
};

export type PayrollPeriodType = (typeof PayrollPeriodType)[keyof typeof PayrollPeriodType]


export const SiteStatus: {
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type SiteStatus = (typeof SiteStatus)[keyof typeof SiteStatus]

}

export type ClientStatus = $Enums.ClientStatus

export const ClientStatus: typeof $Enums.ClientStatus

export type SalesStatus = $Enums.SalesStatus

export const SalesStatus: typeof $Enums.SalesStatus

export type PayrollStatus = $Enums.PayrollStatus

export const PayrollStatus: typeof $Enums.PayrollStatus

export type PayrollPeriodType = $Enums.PayrollPeriodType

export const PayrollPeriodType: typeof $Enums.PayrollPeriodType

export type SiteStatus = $Enums.SiteStatus

export const SiteStatus: typeof $Enums.SiteStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Clients
 * const clients = await prisma.client.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Clients
   * const clients = await prisma.client.findMany()
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
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sales`: Exposes CRUD operations for the **Sales** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sales
    * const sales = await prisma.sales.findMany()
    * ```
    */
  get sales(): Prisma.SalesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payroll`: Exposes CRUD operations for the **Payroll** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payrolls
    * const payrolls = await prisma.payroll.findMany()
    * ```
    */
  get payroll(): Prisma.PayrollDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.site`: Exposes CRUD operations for the **Site** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sites
    * const sites = await prisma.site.findMany()
    * ```
    */
  get site(): Prisma.SiteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.siteEmployee`: Exposes CRUD operations for the **SiteEmployee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SiteEmployees
    * const siteEmployees = await prisma.siteEmployee.findMany()
    * ```
    */
  get siteEmployee(): Prisma.SiteEmployeeDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
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
    Client: 'Client',
    Employee: 'Employee',
    Sales: 'Sales',
    Payroll: 'Payroll',
    Site: 'Site',
    SiteEmployee: 'SiteEmployee'
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
      modelProps: "client" | "employee" | "sales" | "payroll" | "site" | "siteEmployee"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      Sales: {
        payload: Prisma.$SalesPayload<ExtArgs>
        fields: Prisma.SalesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>
          }
          findFirst: {
            args: Prisma.SalesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>
          }
          findMany: {
            args: Prisma.SalesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>[]
          }
          create: {
            args: Prisma.SalesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>
          }
          createMany: {
            args: Prisma.SalesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>[]
          }
          delete: {
            args: Prisma.SalesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>
          }
          update: {
            args: Prisma.SalesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>
          }
          deleteMany: {
            args: Prisma.SalesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SalesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>[]
          }
          upsert: {
            args: Prisma.SalesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>
          }
          aggregate: {
            args: Prisma.SalesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSales>
          }
          groupBy: {
            args: Prisma.SalesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalesGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalesCountArgs<ExtArgs>
            result: $Utils.Optional<SalesCountAggregateOutputType> | number
          }
        }
      }
      Payroll: {
        payload: Prisma.$PayrollPayload<ExtArgs>
        fields: Prisma.PayrollFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PayrollFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PayrollFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload>
          }
          findFirst: {
            args: Prisma.PayrollFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PayrollFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload>
          }
          findMany: {
            args: Prisma.PayrollFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload>[]
          }
          create: {
            args: Prisma.PayrollCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload>
          }
          createMany: {
            args: Prisma.PayrollCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PayrollCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload>[]
          }
          delete: {
            args: Prisma.PayrollDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload>
          }
          update: {
            args: Prisma.PayrollUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload>
          }
          deleteMany: {
            args: Prisma.PayrollDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PayrollUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PayrollUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload>[]
          }
          upsert: {
            args: Prisma.PayrollUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload>
          }
          aggregate: {
            args: Prisma.PayrollAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayroll>
          }
          groupBy: {
            args: Prisma.PayrollGroupByArgs<ExtArgs>
            result: $Utils.Optional<PayrollGroupByOutputType>[]
          }
          count: {
            args: Prisma.PayrollCountArgs<ExtArgs>
            result: $Utils.Optional<PayrollCountAggregateOutputType> | number
          }
        }
      }
      Site: {
        payload: Prisma.$SitePayload<ExtArgs>
        fields: Prisma.SiteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SiteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SiteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          findFirst: {
            args: Prisma.SiteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SiteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          findMany: {
            args: Prisma.SiteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>[]
          }
          create: {
            args: Prisma.SiteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          createMany: {
            args: Prisma.SiteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SiteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>[]
          }
          delete: {
            args: Prisma.SiteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          update: {
            args: Prisma.SiteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          deleteMany: {
            args: Prisma.SiteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SiteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SiteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>[]
          }
          upsert: {
            args: Prisma.SiteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          aggregate: {
            args: Prisma.SiteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSite>
          }
          groupBy: {
            args: Prisma.SiteGroupByArgs<ExtArgs>
            result: $Utils.Optional<SiteGroupByOutputType>[]
          }
          count: {
            args: Prisma.SiteCountArgs<ExtArgs>
            result: $Utils.Optional<SiteCountAggregateOutputType> | number
          }
        }
      }
      SiteEmployee: {
        payload: Prisma.$SiteEmployeePayload<ExtArgs>
        fields: Prisma.SiteEmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SiteEmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteEmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SiteEmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteEmployeePayload>
          }
          findFirst: {
            args: Prisma.SiteEmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteEmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SiteEmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteEmployeePayload>
          }
          findMany: {
            args: Prisma.SiteEmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteEmployeePayload>[]
          }
          create: {
            args: Prisma.SiteEmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteEmployeePayload>
          }
          createMany: {
            args: Prisma.SiteEmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SiteEmployeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteEmployeePayload>[]
          }
          delete: {
            args: Prisma.SiteEmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteEmployeePayload>
          }
          update: {
            args: Prisma.SiteEmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteEmployeePayload>
          }
          deleteMany: {
            args: Prisma.SiteEmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SiteEmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SiteEmployeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteEmployeePayload>[]
          }
          upsert: {
            args: Prisma.SiteEmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteEmployeePayload>
          }
          aggregate: {
            args: Prisma.SiteEmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSiteEmployee>
          }
          groupBy: {
            args: Prisma.SiteEmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<SiteEmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.SiteEmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<SiteEmployeeCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    client?: ClientOmit
    employee?: EmployeeOmit
    sales?: SalesOmit
    payroll?: PayrollOmit
    site?: SiteOmit
    siteEmployee?: SiteEmployeeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    sales: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sales?: boolean | ClientCountOutputTypeCountSalesArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesWhereInput
  }


  /**
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    payrolls: number
    siteEmployees: number
  }

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payrolls?: boolean | EmployeeCountOutputTypeCountPayrollsArgs
    siteEmployees?: boolean | EmployeeCountOutputTypeCountSiteEmployeesArgs
  }

  // Custom InputTypes
  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountPayrollsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayrollWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountSiteEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteEmployeeWhereInput
  }


  /**
   * Count Type SiteCountOutputType
   */

  export type SiteCountOutputType = {
    siteEmployees: number
  }

  export type SiteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    siteEmployees?: boolean | SiteCountOutputTypeCountSiteEmployeesArgs
  }

  // Custom InputTypes
  /**
   * SiteCountOutputType without action
   */
  export type SiteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteCountOutputType
     */
    select?: SiteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SiteCountOutputType without action
   */
  export type SiteCountOutputTypeCountSiteEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteEmployeeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientMinAggregateOutputType = {
    id: string | null
    name: string | null
    companyName: string | null
    email: string | null
    phone: string | null
    address: string | null
    postalCode: string | null
    city: string | null
    prefecture: string | null
    contactPerson: string | null
    contactPhone: string | null
    contactEmail: string | null
    industry: string | null
    notes: string | null
    status: $Enums.ClientStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type ClientMaxAggregateOutputType = {
    id: string | null
    name: string | null
    companyName: string | null
    email: string | null
    phone: string | null
    address: string | null
    postalCode: string | null
    city: string | null
    prefecture: string | null
    contactPerson: string | null
    contactPhone: string | null
    contactEmail: string | null
    industry: string | null
    notes: string | null
    status: $Enums.ClientStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    name: number
    companyName: number
    email: number
    phone: number
    address: number
    postalCode: number
    city: number
    prefecture: number
    contactPerson: number
    contactPhone: number
    contactEmail: number
    industry: number
    notes: number
    status: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type ClientMinAggregateInputType = {
    id?: true
    name?: true
    companyName?: true
    email?: true
    phone?: true
    address?: true
    postalCode?: true
    city?: true
    prefecture?: true
    contactPerson?: true
    contactPhone?: true
    contactEmail?: true
    industry?: true
    notes?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    name?: true
    companyName?: true
    email?: true
    phone?: true
    address?: true
    postalCode?: true
    city?: true
    prefecture?: true
    contactPerson?: true
    contactPhone?: true
    contactEmail?: true
    industry?: true
    notes?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    name?: true
    companyName?: true
    email?: true
    phone?: true
    address?: true
    postalCode?: true
    city?: true
    prefecture?: true
    contactPerson?: true
    contactPhone?: true
    contactEmail?: true
    industry?: true
    notes?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: string
    name: string
    companyName: string | null
    email: string | null
    phone: string | null
    address: string | null
    postalCode: string | null
    city: string | null
    prefecture: string | null
    contactPerson: string | null
    contactPhone: string | null
    contactEmail: string | null
    industry: string | null
    notes: string | null
    status: $Enums.ClientStatus
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    companyName?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    postalCode?: boolean
    city?: boolean
    prefecture?: boolean
    contactPerson?: boolean
    contactPhone?: boolean
    contactEmail?: boolean
    industry?: boolean
    notes?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    sales?: boolean | Client$salesArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    companyName?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    postalCode?: boolean
    city?: boolean
    prefecture?: boolean
    contactPerson?: boolean
    contactPhone?: boolean
    contactEmail?: boolean
    industry?: boolean
    notes?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    companyName?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    postalCode?: boolean
    city?: boolean
    prefecture?: boolean
    contactPerson?: boolean
    contactPhone?: boolean
    contactEmail?: boolean
    industry?: boolean
    notes?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    name?: boolean
    companyName?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    postalCode?: boolean
    city?: boolean
    prefecture?: boolean
    contactPerson?: boolean
    contactPhone?: boolean
    contactEmail?: boolean
    industry?: boolean
    notes?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "companyName" | "email" | "phone" | "address" | "postalCode" | "city" | "prefecture" | "contactPerson" | "contactPhone" | "contactEmail" | "industry" | "notes" | "status" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sales?: boolean | Client$salesArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      sales: Prisma.$SalesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      companyName: string | null
      email: string | null
      phone: string | null
      address: string | null
      postalCode: string | null
      city: string | null
      prefecture: string | null
      contactPerson: string | null
      contactPhone: string | null
      contactEmail: string | null
      industry: string | null
      notes: string | null
      status: $Enums.ClientStatus
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
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
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sales<T extends Client$salesArgs<ExtArgs> = {}>(args?: Subset<T, Client$salesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'String'>
    readonly name: FieldRef<"Client", 'String'>
    readonly companyName: FieldRef<"Client", 'String'>
    readonly email: FieldRef<"Client", 'String'>
    readonly phone: FieldRef<"Client", 'String'>
    readonly address: FieldRef<"Client", 'String'>
    readonly postalCode: FieldRef<"Client", 'String'>
    readonly city: FieldRef<"Client", 'String'>
    readonly prefecture: FieldRef<"Client", 'String'>
    readonly contactPerson: FieldRef<"Client", 'String'>
    readonly contactPhone: FieldRef<"Client", 'String'>
    readonly contactEmail: FieldRef<"Client", 'String'>
    readonly industry: FieldRef<"Client", 'String'>
    readonly notes: FieldRef<"Client", 'String'>
    readonly status: FieldRef<"Client", 'ClientStatus'>
    readonly createdAt: FieldRef<"Client", 'DateTime'>
    readonly updatedAt: FieldRef<"Client", 'DateTime'>
    readonly userId: FieldRef<"Client", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client updateManyAndReturn
   */
  export type ClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client.sales
   */
  export type Client$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    where?: SalesWhereInput
    orderBy?: SalesOrderByWithRelationInput | SalesOrderByWithRelationInput[]
    cursor?: SalesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeAvgAggregateOutputType = {
    unitPay: number | null
    hourlyOvertimePay: number | null
  }

  export type EmployeeSumAggregateOutputType = {
    unitPay: number | null
    hourlyOvertimePay: number | null
  }

  export type EmployeeMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    emergencyContactPerson: string | null
    emergencyContactPhone: string | null
    address: string | null
    postalCode: string | null
    city: string | null
    prefecture: string | null
    position: string | null
    unitPay: number | null
    hourlyOvertimePay: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type EmployeeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    emergencyContactPerson: string | null
    emergencyContactPhone: string | null
    address: string | null
    postalCode: string | null
    city: string | null
    prefecture: string | null
    position: string | null
    unitPay: number | null
    hourlyOvertimePay: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type EmployeeCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    emergencyContactPerson: number
    emergencyContactPhone: number
    address: number
    postalCode: number
    city: number
    prefecture: number
    position: number
    unitPay: number
    hourlyOvertimePay: number
    notes: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type EmployeeAvgAggregateInputType = {
    unitPay?: true
    hourlyOvertimePay?: true
  }

  export type EmployeeSumAggregateInputType = {
    unitPay?: true
    hourlyOvertimePay?: true
  }

  export type EmployeeMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    emergencyContactPerson?: true
    emergencyContactPhone?: true
    address?: true
    postalCode?: true
    city?: true
    prefecture?: true
    position?: true
    unitPay?: true
    hourlyOvertimePay?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type EmployeeMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    emergencyContactPerson?: true
    emergencyContactPhone?: true
    address?: true
    postalCode?: true
    city?: true
    prefecture?: true
    position?: true
    unitPay?: true
    hourlyOvertimePay?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type EmployeeCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    emergencyContactPerson?: true
    emergencyContactPhone?: true
    address?: true
    postalCode?: true
    city?: true
    prefecture?: true
    position?: true
    unitPay?: true
    hourlyOvertimePay?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _avg?: EmployeeAvgAggregateInputType
    _sum?: EmployeeSumAggregateInputType
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    id: string
    name: string
    email: string | null
    phone: string | null
    emergencyContactPerson: string | null
    emergencyContactPhone: string | null
    address: string | null
    postalCode: string | null
    city: string | null
    prefecture: string | null
    position: string | null
    unitPay: number | null
    hourlyOvertimePay: number | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    emergencyContactPerson?: boolean
    emergencyContactPhone?: boolean
    address?: boolean
    postalCode?: boolean
    city?: boolean
    prefecture?: boolean
    position?: boolean
    unitPay?: boolean
    hourlyOvertimePay?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    payrolls?: boolean | Employee$payrollsArgs<ExtArgs>
    siteEmployees?: boolean | Employee$siteEmployeesArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    emergencyContactPerson?: boolean
    emergencyContactPhone?: boolean
    address?: boolean
    postalCode?: boolean
    city?: boolean
    prefecture?: boolean
    position?: boolean
    unitPay?: boolean
    hourlyOvertimePay?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    emergencyContactPerson?: boolean
    emergencyContactPhone?: boolean
    address?: boolean
    postalCode?: boolean
    city?: boolean
    prefecture?: boolean
    position?: boolean
    unitPay?: boolean
    hourlyOvertimePay?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    emergencyContactPerson?: boolean
    emergencyContactPhone?: boolean
    address?: boolean
    postalCode?: boolean
    city?: boolean
    prefecture?: boolean
    position?: boolean
    unitPay?: boolean
    hourlyOvertimePay?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type EmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "emergencyContactPerson" | "emergencyContactPhone" | "address" | "postalCode" | "city" | "prefecture" | "position" | "unitPay" | "hourlyOvertimePay" | "notes" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["employee"]>
  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payrolls?: boolean | Employee$payrollsArgs<ExtArgs>
    siteEmployees?: boolean | Employee$siteEmployeesArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EmployeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      payrolls: Prisma.$PayrollPayload<ExtArgs>[]
      siteEmployees: Prisma.$SiteEmployeePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string | null
      phone: string | null
      emergencyContactPerson: string | null
      emergencyContactPhone: string | null
      address: string | null
      postalCode: string | null
      city: string | null
      prefecture: string | null
      position: string | null
      unitPay: number | null
      hourlyOvertimePay: number | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees and returns the data saved in the database.
     * @param {EmployeeCreateManyAndReturnArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees and returns the data updated in the database.
     * @param {EmployeeUpdateManyAndReturnArgs} args - Arguments to update many Employees.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmployeeUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
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
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payrolls<T extends Employee$payrollsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$payrollsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    siteEmployees<T extends Employee$siteEmployeesArgs<ExtArgs> = {}>(args?: Subset<T, Employee$siteEmployeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteEmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Employee model
   */
  interface EmployeeFieldRefs {
    readonly id: FieldRef<"Employee", 'String'>
    readonly name: FieldRef<"Employee", 'String'>
    readonly email: FieldRef<"Employee", 'String'>
    readonly phone: FieldRef<"Employee", 'String'>
    readonly emergencyContactPerson: FieldRef<"Employee", 'String'>
    readonly emergencyContactPhone: FieldRef<"Employee", 'String'>
    readonly address: FieldRef<"Employee", 'String'>
    readonly postalCode: FieldRef<"Employee", 'String'>
    readonly city: FieldRef<"Employee", 'String'>
    readonly prefecture: FieldRef<"Employee", 'String'>
    readonly position: FieldRef<"Employee", 'String'>
    readonly unitPay: FieldRef<"Employee", 'Int'>
    readonly hourlyOvertimePay: FieldRef<"Employee", 'Int'>
    readonly notes: FieldRef<"Employee", 'String'>
    readonly createdAt: FieldRef<"Employee", 'DateTime'>
    readonly updatedAt: FieldRef<"Employee", 'DateTime'>
    readonly userId: FieldRef<"Employee", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee createManyAndReturn
   */
  export type EmployeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee updateManyAndReturn
   */
  export type EmployeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to delete.
     */
    limit?: number
  }

  /**
   * Employee.payrolls
   */
  export type Employee$payrollsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    where?: PayrollWhereInput
    orderBy?: PayrollOrderByWithRelationInput | PayrollOrderByWithRelationInput[]
    cursor?: PayrollWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PayrollScalarFieldEnum | PayrollScalarFieldEnum[]
  }

  /**
   * Employee.siteEmployees
   */
  export type Employee$siteEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteEmployee
     */
    select?: SiteEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteEmployee
     */
    omit?: SiteEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteEmployeeInclude<ExtArgs> | null
    where?: SiteEmployeeWhereInput
    orderBy?: SiteEmployeeOrderByWithRelationInput | SiteEmployeeOrderByWithRelationInput[]
    cursor?: SiteEmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SiteEmployeeScalarFieldEnum | SiteEmployeeScalarFieldEnum[]
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
  }


  /**
   * Model Sales
   */

  export type AggregateSales = {
    _count: SalesCountAggregateOutputType | null
    _avg: SalesAvgAggregateOutputType | null
    _sum: SalesSumAggregateOutputType | null
    _min: SalesMinAggregateOutputType | null
    _max: SalesMaxAggregateOutputType | null
  }

  export type SalesAvgAggregateOutputType = {
    amount: number | null
  }

  export type SalesSumAggregateOutputType = {
    amount: number | null
  }

  export type SalesMinAggregateOutputType = {
    id: string | null
    amount: number | null
    date: Date | null
    description: string | null
    category: string | null
    status: $Enums.SalesStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    clientId: string | null
  }

  export type SalesMaxAggregateOutputType = {
    id: string | null
    amount: number | null
    date: Date | null
    description: string | null
    category: string | null
    status: $Enums.SalesStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    clientId: string | null
  }

  export type SalesCountAggregateOutputType = {
    id: number
    amount: number
    date: number
    description: number
    category: number
    status: number
    createdAt: number
    updatedAt: number
    userId: number
    clientId: number
    _all: number
  }


  export type SalesAvgAggregateInputType = {
    amount?: true
  }

  export type SalesSumAggregateInputType = {
    amount?: true
  }

  export type SalesMinAggregateInputType = {
    id?: true
    amount?: true
    date?: true
    description?: true
    category?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    clientId?: true
  }

  export type SalesMaxAggregateInputType = {
    id?: true
    amount?: true
    date?: true
    description?: true
    category?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    clientId?: true
  }

  export type SalesCountAggregateInputType = {
    id?: true
    amount?: true
    date?: true
    description?: true
    category?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    clientId?: true
    _all?: true
  }

  export type SalesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sales to aggregate.
     */
    where?: SalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SalesOrderByWithRelationInput | SalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sales
    **/
    _count?: true | SalesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalesMaxAggregateInputType
  }

  export type GetSalesAggregateType<T extends SalesAggregateArgs> = {
        [P in keyof T & keyof AggregateSales]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSales[P]>
      : GetScalarType<T[P], AggregateSales[P]>
  }




  export type SalesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesWhereInput
    orderBy?: SalesOrderByWithAggregationInput | SalesOrderByWithAggregationInput[]
    by: SalesScalarFieldEnum[] | SalesScalarFieldEnum
    having?: SalesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalesCountAggregateInputType | true
    _avg?: SalesAvgAggregateInputType
    _sum?: SalesSumAggregateInputType
    _min?: SalesMinAggregateInputType
    _max?: SalesMaxAggregateInputType
  }

  export type SalesGroupByOutputType = {
    id: string
    amount: number
    date: Date
    description: string | null
    category: string | null
    status: $Enums.SalesStatus
    createdAt: Date
    updatedAt: Date
    userId: string
    clientId: string
    _count: SalesCountAggregateOutputType | null
    _avg: SalesAvgAggregateOutputType | null
    _sum: SalesSumAggregateOutputType | null
    _min: SalesMinAggregateOutputType | null
    _max: SalesMaxAggregateOutputType | null
  }

  type GetSalesGroupByPayload<T extends SalesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalesGroupByOutputType[P]>
            : GetScalarType<T[P], SalesGroupByOutputType[P]>
        }
      >
    >


  export type SalesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    date?: boolean
    description?: boolean
    category?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    clientId?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sales"]>

  export type SalesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    date?: boolean
    description?: boolean
    category?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    clientId?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sales"]>

  export type SalesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    date?: boolean
    description?: boolean
    category?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    clientId?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sales"]>

  export type SalesSelectScalar = {
    id?: boolean
    amount?: boolean
    date?: boolean
    description?: boolean
    category?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    clientId?: boolean
  }

  export type SalesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "date" | "description" | "category" | "status" | "createdAt" | "updatedAt" | "userId" | "clientId", ExtArgs["result"]["sales"]>
  export type SalesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type SalesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type SalesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $SalesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sales"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: number
      date: Date
      description: string | null
      category: string | null
      status: $Enums.SalesStatus
      createdAt: Date
      updatedAt: Date
      userId: string
      clientId: string
    }, ExtArgs["result"]["sales"]>
    composites: {}
  }

  type SalesGetPayload<S extends boolean | null | undefined | SalesDefaultArgs> = $Result.GetResult<Prisma.$SalesPayload, S>

  type SalesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SalesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SalesCountAggregateInputType | true
    }

  export interface SalesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sales'], meta: { name: 'Sales' } }
    /**
     * Find zero or one Sales that matches the filter.
     * @param {SalesFindUniqueArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalesFindUniqueArgs>(args: SelectSubset<T, SalesFindUniqueArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sales that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SalesFindUniqueOrThrowArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalesFindUniqueOrThrowArgs>(args: SelectSubset<T, SalesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesFindFirstArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalesFindFirstArgs>(args?: SelectSubset<T, SalesFindFirstArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sales that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesFindFirstOrThrowArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalesFindFirstOrThrowArgs>(args?: SelectSubset<T, SalesFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sales
     * const sales = await prisma.sales.findMany()
     * 
     * // Get first 10 Sales
     * const sales = await prisma.sales.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salesWithIdOnly = await prisma.sales.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SalesFindManyArgs>(args?: SelectSubset<T, SalesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sales.
     * @param {SalesCreateArgs} args - Arguments to create a Sales.
     * @example
     * // Create one Sales
     * const Sales = await prisma.sales.create({
     *   data: {
     *     // ... data to create a Sales
     *   }
     * })
     * 
     */
    create<T extends SalesCreateArgs>(args: SelectSubset<T, SalesCreateArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sales.
     * @param {SalesCreateManyArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sales = await prisma.sales.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalesCreateManyArgs>(args?: SelectSubset<T, SalesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sales and returns the data saved in the database.
     * @param {SalesCreateManyAndReturnArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sales = await prisma.sales.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sales and only return the `id`
     * const salesWithIdOnly = await prisma.sales.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalesCreateManyAndReturnArgs>(args?: SelectSubset<T, SalesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sales.
     * @param {SalesDeleteArgs} args - Arguments to delete one Sales.
     * @example
     * // Delete one Sales
     * const Sales = await prisma.sales.delete({
     *   where: {
     *     // ... filter to delete one Sales
     *   }
     * })
     * 
     */
    delete<T extends SalesDeleteArgs>(args: SelectSubset<T, SalesDeleteArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sales.
     * @param {SalesUpdateArgs} args - Arguments to update one Sales.
     * @example
     * // Update one Sales
     * const sales = await prisma.sales.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalesUpdateArgs>(args: SelectSubset<T, SalesUpdateArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sales.
     * @param {SalesDeleteManyArgs} args - Arguments to filter Sales to delete.
     * @example
     * // Delete a few Sales
     * const { count } = await prisma.sales.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalesDeleteManyArgs>(args?: SelectSubset<T, SalesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sales
     * const sales = await prisma.sales.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalesUpdateManyArgs>(args: SelectSubset<T, SalesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales and returns the data updated in the database.
     * @param {SalesUpdateManyAndReturnArgs} args - Arguments to update many Sales.
     * @example
     * // Update many Sales
     * const sales = await prisma.sales.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sales and only return the `id`
     * const salesWithIdOnly = await prisma.sales.updateManyAndReturn({
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
    updateManyAndReturn<T extends SalesUpdateManyAndReturnArgs>(args: SelectSubset<T, SalesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sales.
     * @param {SalesUpsertArgs} args - Arguments to update or create a Sales.
     * @example
     * // Update or create a Sales
     * const sales = await prisma.sales.upsert({
     *   create: {
     *     // ... data to create a Sales
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sales we want to update
     *   }
     * })
     */
    upsert<T extends SalesUpsertArgs>(args: SelectSubset<T, SalesUpsertArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesCountArgs} args - Arguments to filter Sales to count.
     * @example
     * // Count the number of Sales
     * const count = await prisma.sales.count({
     *   where: {
     *     // ... the filter for the Sales we want to count
     *   }
     * })
    **/
    count<T extends SalesCountArgs>(
      args?: Subset<T, SalesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SalesAggregateArgs>(args: Subset<T, SalesAggregateArgs>): Prisma.PrismaPromise<GetSalesAggregateType<T>>

    /**
     * Group by Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesGroupByArgs} args - Group by arguments.
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
      T extends SalesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalesGroupByArgs['orderBy'] }
        : { orderBy?: SalesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SalesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sales model
   */
  readonly fields: SalesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sales.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Sales model
   */
  interface SalesFieldRefs {
    readonly id: FieldRef<"Sales", 'String'>
    readonly amount: FieldRef<"Sales", 'Int'>
    readonly date: FieldRef<"Sales", 'DateTime'>
    readonly description: FieldRef<"Sales", 'String'>
    readonly category: FieldRef<"Sales", 'String'>
    readonly status: FieldRef<"Sales", 'SalesStatus'>
    readonly createdAt: FieldRef<"Sales", 'DateTime'>
    readonly updatedAt: FieldRef<"Sales", 'DateTime'>
    readonly userId: FieldRef<"Sales", 'String'>
    readonly clientId: FieldRef<"Sales", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Sales findUnique
   */
  export type SalesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where: SalesWhereUniqueInput
  }

  /**
   * Sales findUniqueOrThrow
   */
  export type SalesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where: SalesWhereUniqueInput
  }

  /**
   * Sales findFirst
   */
  export type SalesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where?: SalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SalesOrderByWithRelationInput | SalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * Sales findFirstOrThrow
   */
  export type SalesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where?: SalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SalesOrderByWithRelationInput | SalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * Sales findMany
   */
  export type SalesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where?: SalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SalesOrderByWithRelationInput | SalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sales.
     */
    cursor?: SalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * Sales create
   */
  export type SalesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * The data needed to create a Sales.
     */
    data: XOR<SalesCreateInput, SalesUncheckedCreateInput>
  }

  /**
   * Sales createMany
   */
  export type SalesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sales.
     */
    data: SalesCreateManyInput | SalesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sales createManyAndReturn
   */
  export type SalesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * The data used to create many Sales.
     */
    data: SalesCreateManyInput | SalesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sales update
   */
  export type SalesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * The data needed to update a Sales.
     */
    data: XOR<SalesUpdateInput, SalesUncheckedUpdateInput>
    /**
     * Choose, which Sales to update.
     */
    where: SalesWhereUniqueInput
  }

  /**
   * Sales updateMany
   */
  export type SalesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sales.
     */
    data: XOR<SalesUpdateManyMutationInput, SalesUncheckedUpdateManyInput>
    /**
     * Filter which Sales to update
     */
    where?: SalesWhereInput
    /**
     * Limit how many Sales to update.
     */
    limit?: number
  }

  /**
   * Sales updateManyAndReturn
   */
  export type SalesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * The data used to update Sales.
     */
    data: XOR<SalesUpdateManyMutationInput, SalesUncheckedUpdateManyInput>
    /**
     * Filter which Sales to update
     */
    where?: SalesWhereInput
    /**
     * Limit how many Sales to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sales upsert
   */
  export type SalesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * The filter to search for the Sales to update in case it exists.
     */
    where: SalesWhereUniqueInput
    /**
     * In case the Sales found by the `where` argument doesn't exist, create a new Sales with this data.
     */
    create: XOR<SalesCreateInput, SalesUncheckedCreateInput>
    /**
     * In case the Sales was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalesUpdateInput, SalesUncheckedUpdateInput>
  }

  /**
   * Sales delete
   */
  export type SalesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * Filter which Sales to delete.
     */
    where: SalesWhereUniqueInput
  }

  /**
   * Sales deleteMany
   */
  export type SalesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sales to delete
     */
    where?: SalesWhereInput
    /**
     * Limit how many Sales to delete.
     */
    limit?: number
  }

  /**
   * Sales without action
   */
  export type SalesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
  }


  /**
   * Model Payroll
   */

  export type AggregatePayroll = {
    _count: PayrollCountAggregateOutputType | null
    _avg: PayrollAvgAggregateOutputType | null
    _sum: PayrollSumAggregateOutputType | null
    _min: PayrollMinAggregateOutputType | null
    _max: PayrollMaxAggregateOutputType | null
  }

  export type PayrollAvgAggregateOutputType = {
    workHours: number | null
    overtimeHours: number | null
    siteCount: number | null
    unitPay: number | null
    sitePay: number | null
    hourlyOvertimePay: number | null
    overtime: number | null
    totalAmount: number | null
  }

  export type PayrollSumAggregateOutputType = {
    workHours: number | null
    overtimeHours: number | null
    siteCount: number | null
    unitPay: number | null
    sitePay: number | null
    hourlyOvertimePay: number | null
    overtime: number | null
    totalAmount: number | null
  }

  export type PayrollMinAggregateOutputType = {
    id: string | null
    employeeId: string | null
    periodType: $Enums.PayrollPeriodType | null
    startDate: Date | null
    endDate: Date | null
    workHours: number | null
    overtimeHours: number | null
    siteCount: number | null
    unitPay: number | null
    sitePay: number | null
    hourlyOvertimePay: number | null
    overtime: number | null
    totalAmount: number | null
    status: $Enums.PayrollStatus | null
    paymentDate: Date | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type PayrollMaxAggregateOutputType = {
    id: string | null
    employeeId: string | null
    periodType: $Enums.PayrollPeriodType | null
    startDate: Date | null
    endDate: Date | null
    workHours: number | null
    overtimeHours: number | null
    siteCount: number | null
    unitPay: number | null
    sitePay: number | null
    hourlyOvertimePay: number | null
    overtime: number | null
    totalAmount: number | null
    status: $Enums.PayrollStatus | null
    paymentDate: Date | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type PayrollCountAggregateOutputType = {
    id: number
    employeeId: number
    periodType: number
    startDate: number
    endDate: number
    workHours: number
    overtimeHours: number
    siteCount: number
    unitPay: number
    sitePay: number
    hourlyOvertimePay: number
    overtime: number
    totalAmount: number
    status: number
    paymentDate: number
    notes: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type PayrollAvgAggregateInputType = {
    workHours?: true
    overtimeHours?: true
    siteCount?: true
    unitPay?: true
    sitePay?: true
    hourlyOvertimePay?: true
    overtime?: true
    totalAmount?: true
  }

  export type PayrollSumAggregateInputType = {
    workHours?: true
    overtimeHours?: true
    siteCount?: true
    unitPay?: true
    sitePay?: true
    hourlyOvertimePay?: true
    overtime?: true
    totalAmount?: true
  }

  export type PayrollMinAggregateInputType = {
    id?: true
    employeeId?: true
    periodType?: true
    startDate?: true
    endDate?: true
    workHours?: true
    overtimeHours?: true
    siteCount?: true
    unitPay?: true
    sitePay?: true
    hourlyOvertimePay?: true
    overtime?: true
    totalAmount?: true
    status?: true
    paymentDate?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type PayrollMaxAggregateInputType = {
    id?: true
    employeeId?: true
    periodType?: true
    startDate?: true
    endDate?: true
    workHours?: true
    overtimeHours?: true
    siteCount?: true
    unitPay?: true
    sitePay?: true
    hourlyOvertimePay?: true
    overtime?: true
    totalAmount?: true
    status?: true
    paymentDate?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type PayrollCountAggregateInputType = {
    id?: true
    employeeId?: true
    periodType?: true
    startDate?: true
    endDate?: true
    workHours?: true
    overtimeHours?: true
    siteCount?: true
    unitPay?: true
    sitePay?: true
    hourlyOvertimePay?: true
    overtime?: true
    totalAmount?: true
    status?: true
    paymentDate?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type PayrollAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payroll to aggregate.
     */
    where?: PayrollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payrolls to fetch.
     */
    orderBy?: PayrollOrderByWithRelationInput | PayrollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PayrollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payrolls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payrolls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payrolls
    **/
    _count?: true | PayrollCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PayrollAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PayrollSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PayrollMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PayrollMaxAggregateInputType
  }

  export type GetPayrollAggregateType<T extends PayrollAggregateArgs> = {
        [P in keyof T & keyof AggregatePayroll]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayroll[P]>
      : GetScalarType<T[P], AggregatePayroll[P]>
  }




  export type PayrollGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayrollWhereInput
    orderBy?: PayrollOrderByWithAggregationInput | PayrollOrderByWithAggregationInput[]
    by: PayrollScalarFieldEnum[] | PayrollScalarFieldEnum
    having?: PayrollScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PayrollCountAggregateInputType | true
    _avg?: PayrollAvgAggregateInputType
    _sum?: PayrollSumAggregateInputType
    _min?: PayrollMinAggregateInputType
    _max?: PayrollMaxAggregateInputType
  }

  export type PayrollGroupByOutputType = {
    id: string
    employeeId: string
    periodType: $Enums.PayrollPeriodType
    startDate: Date
    endDate: Date
    workHours: number | null
    overtimeHours: number | null
    siteCount: number
    unitPay: number
    sitePay: number
    hourlyOvertimePay: number
    overtime: number
    totalAmount: number
    status: $Enums.PayrollStatus
    paymentDate: Date | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: PayrollCountAggregateOutputType | null
    _avg: PayrollAvgAggregateOutputType | null
    _sum: PayrollSumAggregateOutputType | null
    _min: PayrollMinAggregateOutputType | null
    _max: PayrollMaxAggregateOutputType | null
  }

  type GetPayrollGroupByPayload<T extends PayrollGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PayrollGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PayrollGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PayrollGroupByOutputType[P]>
            : GetScalarType<T[P], PayrollGroupByOutputType[P]>
        }
      >
    >


  export type PayrollSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    periodType?: boolean
    startDate?: boolean
    endDate?: boolean
    workHours?: boolean
    overtimeHours?: boolean
    siteCount?: boolean
    unitPay?: boolean
    sitePay?: boolean
    hourlyOvertimePay?: boolean
    overtime?: boolean
    totalAmount?: boolean
    status?: boolean
    paymentDate?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payroll"]>

  export type PayrollSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    periodType?: boolean
    startDate?: boolean
    endDate?: boolean
    workHours?: boolean
    overtimeHours?: boolean
    siteCount?: boolean
    unitPay?: boolean
    sitePay?: boolean
    hourlyOvertimePay?: boolean
    overtime?: boolean
    totalAmount?: boolean
    status?: boolean
    paymentDate?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payroll"]>

  export type PayrollSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    periodType?: boolean
    startDate?: boolean
    endDate?: boolean
    workHours?: boolean
    overtimeHours?: boolean
    siteCount?: boolean
    unitPay?: boolean
    sitePay?: boolean
    hourlyOvertimePay?: boolean
    overtime?: boolean
    totalAmount?: boolean
    status?: boolean
    paymentDate?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payroll"]>

  export type PayrollSelectScalar = {
    id?: boolean
    employeeId?: boolean
    periodType?: boolean
    startDate?: boolean
    endDate?: boolean
    workHours?: boolean
    overtimeHours?: boolean
    siteCount?: boolean
    unitPay?: boolean
    sitePay?: boolean
    hourlyOvertimePay?: boolean
    overtime?: boolean
    totalAmount?: boolean
    status?: boolean
    paymentDate?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type PayrollOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeId" | "periodType" | "startDate" | "endDate" | "workHours" | "overtimeHours" | "siteCount" | "unitPay" | "sitePay" | "hourlyOvertimePay" | "overtime" | "totalAmount" | "status" | "paymentDate" | "notes" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["payroll"]>
  export type PayrollInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type PayrollIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type PayrollIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }

  export type $PayrollPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payroll"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      employeeId: string
      periodType: $Enums.PayrollPeriodType
      startDate: Date
      endDate: Date
      workHours: number | null
      overtimeHours: number | null
      siteCount: number
      unitPay: number
      sitePay: number
      hourlyOvertimePay: number
      overtime: number
      totalAmount: number
      status: $Enums.PayrollStatus
      paymentDate: Date | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["payroll"]>
    composites: {}
  }

  type PayrollGetPayload<S extends boolean | null | undefined | PayrollDefaultArgs> = $Result.GetResult<Prisma.$PayrollPayload, S>

  type PayrollCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PayrollFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PayrollCountAggregateInputType | true
    }

  export interface PayrollDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payroll'], meta: { name: 'Payroll' } }
    /**
     * Find zero or one Payroll that matches the filter.
     * @param {PayrollFindUniqueArgs} args - Arguments to find a Payroll
     * @example
     * // Get one Payroll
     * const payroll = await prisma.payroll.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PayrollFindUniqueArgs>(args: SelectSubset<T, PayrollFindUniqueArgs<ExtArgs>>): Prisma__PayrollClient<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payroll that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PayrollFindUniqueOrThrowArgs} args - Arguments to find a Payroll
     * @example
     * // Get one Payroll
     * const payroll = await prisma.payroll.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PayrollFindUniqueOrThrowArgs>(args: SelectSubset<T, PayrollFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PayrollClient<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payroll that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollFindFirstArgs} args - Arguments to find a Payroll
     * @example
     * // Get one Payroll
     * const payroll = await prisma.payroll.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PayrollFindFirstArgs>(args?: SelectSubset<T, PayrollFindFirstArgs<ExtArgs>>): Prisma__PayrollClient<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payroll that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollFindFirstOrThrowArgs} args - Arguments to find a Payroll
     * @example
     * // Get one Payroll
     * const payroll = await prisma.payroll.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PayrollFindFirstOrThrowArgs>(args?: SelectSubset<T, PayrollFindFirstOrThrowArgs<ExtArgs>>): Prisma__PayrollClient<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payrolls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payrolls
     * const payrolls = await prisma.payroll.findMany()
     * 
     * // Get first 10 Payrolls
     * const payrolls = await prisma.payroll.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payrollWithIdOnly = await prisma.payroll.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PayrollFindManyArgs>(args?: SelectSubset<T, PayrollFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payroll.
     * @param {PayrollCreateArgs} args - Arguments to create a Payroll.
     * @example
     * // Create one Payroll
     * const Payroll = await prisma.payroll.create({
     *   data: {
     *     // ... data to create a Payroll
     *   }
     * })
     * 
     */
    create<T extends PayrollCreateArgs>(args: SelectSubset<T, PayrollCreateArgs<ExtArgs>>): Prisma__PayrollClient<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payrolls.
     * @param {PayrollCreateManyArgs} args - Arguments to create many Payrolls.
     * @example
     * // Create many Payrolls
     * const payroll = await prisma.payroll.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PayrollCreateManyArgs>(args?: SelectSubset<T, PayrollCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payrolls and returns the data saved in the database.
     * @param {PayrollCreateManyAndReturnArgs} args - Arguments to create many Payrolls.
     * @example
     * // Create many Payrolls
     * const payroll = await prisma.payroll.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payrolls and only return the `id`
     * const payrollWithIdOnly = await prisma.payroll.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PayrollCreateManyAndReturnArgs>(args?: SelectSubset<T, PayrollCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payroll.
     * @param {PayrollDeleteArgs} args - Arguments to delete one Payroll.
     * @example
     * // Delete one Payroll
     * const Payroll = await prisma.payroll.delete({
     *   where: {
     *     // ... filter to delete one Payroll
     *   }
     * })
     * 
     */
    delete<T extends PayrollDeleteArgs>(args: SelectSubset<T, PayrollDeleteArgs<ExtArgs>>): Prisma__PayrollClient<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payroll.
     * @param {PayrollUpdateArgs} args - Arguments to update one Payroll.
     * @example
     * // Update one Payroll
     * const payroll = await prisma.payroll.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PayrollUpdateArgs>(args: SelectSubset<T, PayrollUpdateArgs<ExtArgs>>): Prisma__PayrollClient<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payrolls.
     * @param {PayrollDeleteManyArgs} args - Arguments to filter Payrolls to delete.
     * @example
     * // Delete a few Payrolls
     * const { count } = await prisma.payroll.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PayrollDeleteManyArgs>(args?: SelectSubset<T, PayrollDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payrolls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payrolls
     * const payroll = await prisma.payroll.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PayrollUpdateManyArgs>(args: SelectSubset<T, PayrollUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payrolls and returns the data updated in the database.
     * @param {PayrollUpdateManyAndReturnArgs} args - Arguments to update many Payrolls.
     * @example
     * // Update many Payrolls
     * const payroll = await prisma.payroll.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payrolls and only return the `id`
     * const payrollWithIdOnly = await prisma.payroll.updateManyAndReturn({
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
    updateManyAndReturn<T extends PayrollUpdateManyAndReturnArgs>(args: SelectSubset<T, PayrollUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payroll.
     * @param {PayrollUpsertArgs} args - Arguments to update or create a Payroll.
     * @example
     * // Update or create a Payroll
     * const payroll = await prisma.payroll.upsert({
     *   create: {
     *     // ... data to create a Payroll
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payroll we want to update
     *   }
     * })
     */
    upsert<T extends PayrollUpsertArgs>(args: SelectSubset<T, PayrollUpsertArgs<ExtArgs>>): Prisma__PayrollClient<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payrolls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollCountArgs} args - Arguments to filter Payrolls to count.
     * @example
     * // Count the number of Payrolls
     * const count = await prisma.payroll.count({
     *   where: {
     *     // ... the filter for the Payrolls we want to count
     *   }
     * })
    **/
    count<T extends PayrollCountArgs>(
      args?: Subset<T, PayrollCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PayrollCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payroll.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PayrollAggregateArgs>(args: Subset<T, PayrollAggregateArgs>): Prisma.PrismaPromise<GetPayrollAggregateType<T>>

    /**
     * Group by Payroll.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollGroupByArgs} args - Group by arguments.
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
      T extends PayrollGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PayrollGroupByArgs['orderBy'] }
        : { orderBy?: PayrollGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PayrollGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayrollGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payroll model
   */
  readonly fields: PayrollFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payroll.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PayrollClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Payroll model
   */
  interface PayrollFieldRefs {
    readonly id: FieldRef<"Payroll", 'String'>
    readonly employeeId: FieldRef<"Payroll", 'String'>
    readonly periodType: FieldRef<"Payroll", 'PayrollPeriodType'>
    readonly startDate: FieldRef<"Payroll", 'DateTime'>
    readonly endDate: FieldRef<"Payroll", 'DateTime'>
    readonly workHours: FieldRef<"Payroll", 'Int'>
    readonly overtimeHours: FieldRef<"Payroll", 'Int'>
    readonly siteCount: FieldRef<"Payroll", 'Int'>
    readonly unitPay: FieldRef<"Payroll", 'Int'>
    readonly sitePay: FieldRef<"Payroll", 'Int'>
    readonly hourlyOvertimePay: FieldRef<"Payroll", 'Int'>
    readonly overtime: FieldRef<"Payroll", 'Int'>
    readonly totalAmount: FieldRef<"Payroll", 'Int'>
    readonly status: FieldRef<"Payroll", 'PayrollStatus'>
    readonly paymentDate: FieldRef<"Payroll", 'DateTime'>
    readonly notes: FieldRef<"Payroll", 'String'>
    readonly createdAt: FieldRef<"Payroll", 'DateTime'>
    readonly updatedAt: FieldRef<"Payroll", 'DateTime'>
    readonly userId: FieldRef<"Payroll", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Payroll findUnique
   */
  export type PayrollFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    /**
     * Filter, which Payroll to fetch.
     */
    where: PayrollWhereUniqueInput
  }

  /**
   * Payroll findUniqueOrThrow
   */
  export type PayrollFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    /**
     * Filter, which Payroll to fetch.
     */
    where: PayrollWhereUniqueInput
  }

  /**
   * Payroll findFirst
   */
  export type PayrollFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    /**
     * Filter, which Payroll to fetch.
     */
    where?: PayrollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payrolls to fetch.
     */
    orderBy?: PayrollOrderByWithRelationInput | PayrollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payrolls.
     */
    cursor?: PayrollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payrolls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payrolls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payrolls.
     */
    distinct?: PayrollScalarFieldEnum | PayrollScalarFieldEnum[]
  }

  /**
   * Payroll findFirstOrThrow
   */
  export type PayrollFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    /**
     * Filter, which Payroll to fetch.
     */
    where?: PayrollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payrolls to fetch.
     */
    orderBy?: PayrollOrderByWithRelationInput | PayrollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payrolls.
     */
    cursor?: PayrollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payrolls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payrolls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payrolls.
     */
    distinct?: PayrollScalarFieldEnum | PayrollScalarFieldEnum[]
  }

  /**
   * Payroll findMany
   */
  export type PayrollFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    /**
     * Filter, which Payrolls to fetch.
     */
    where?: PayrollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payrolls to fetch.
     */
    orderBy?: PayrollOrderByWithRelationInput | PayrollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payrolls.
     */
    cursor?: PayrollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payrolls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payrolls.
     */
    skip?: number
    distinct?: PayrollScalarFieldEnum | PayrollScalarFieldEnum[]
  }

  /**
   * Payroll create
   */
  export type PayrollCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    /**
     * The data needed to create a Payroll.
     */
    data: XOR<PayrollCreateInput, PayrollUncheckedCreateInput>
  }

  /**
   * Payroll createMany
   */
  export type PayrollCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payrolls.
     */
    data: PayrollCreateManyInput | PayrollCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payroll createManyAndReturn
   */
  export type PayrollCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * The data used to create many Payrolls.
     */
    data: PayrollCreateManyInput | PayrollCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payroll update
   */
  export type PayrollUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    /**
     * The data needed to update a Payroll.
     */
    data: XOR<PayrollUpdateInput, PayrollUncheckedUpdateInput>
    /**
     * Choose, which Payroll to update.
     */
    where: PayrollWhereUniqueInput
  }

  /**
   * Payroll updateMany
   */
  export type PayrollUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payrolls.
     */
    data: XOR<PayrollUpdateManyMutationInput, PayrollUncheckedUpdateManyInput>
    /**
     * Filter which Payrolls to update
     */
    where?: PayrollWhereInput
    /**
     * Limit how many Payrolls to update.
     */
    limit?: number
  }

  /**
   * Payroll updateManyAndReturn
   */
  export type PayrollUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * The data used to update Payrolls.
     */
    data: XOR<PayrollUpdateManyMutationInput, PayrollUncheckedUpdateManyInput>
    /**
     * Filter which Payrolls to update
     */
    where?: PayrollWhereInput
    /**
     * Limit how many Payrolls to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payroll upsert
   */
  export type PayrollUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    /**
     * The filter to search for the Payroll to update in case it exists.
     */
    where: PayrollWhereUniqueInput
    /**
     * In case the Payroll found by the `where` argument doesn't exist, create a new Payroll with this data.
     */
    create: XOR<PayrollCreateInput, PayrollUncheckedCreateInput>
    /**
     * In case the Payroll was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PayrollUpdateInput, PayrollUncheckedUpdateInput>
  }

  /**
   * Payroll delete
   */
  export type PayrollDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    /**
     * Filter which Payroll to delete.
     */
    where: PayrollWhereUniqueInput
  }

  /**
   * Payroll deleteMany
   */
  export type PayrollDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payrolls to delete
     */
    where?: PayrollWhereInput
    /**
     * Limit how many Payrolls to delete.
     */
    limit?: number
  }

  /**
   * Payroll without action
   */
  export type PayrollDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
  }


  /**
   * Model Site
   */

  export type AggregateSite = {
    _count: SiteCountAggregateOutputType | null
    _min: SiteMinAggregateOutputType | null
    _max: SiteMaxAggregateOutputType | null
  }

  export type SiteMinAggregateOutputType = {
    id: string | null
    name: string | null
    contractor: string | null
    postalCode: string | null
    prefecture: string | null
    city: string | null
    address: string | null
    date: Date | null
    startTime: Date | null
    employeeNames: string | null
    notes: string | null
    status: $Enums.SiteStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type SiteMaxAggregateOutputType = {
    id: string | null
    name: string | null
    contractor: string | null
    postalCode: string | null
    prefecture: string | null
    city: string | null
    address: string | null
    date: Date | null
    startTime: Date | null
    employeeNames: string | null
    notes: string | null
    status: $Enums.SiteStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type SiteCountAggregateOutputType = {
    id: number
    name: number
    contractor: number
    postalCode: number
    prefecture: number
    city: number
    address: number
    date: number
    startTime: number
    employeeNames: number
    notes: number
    status: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type SiteMinAggregateInputType = {
    id?: true
    name?: true
    contractor?: true
    postalCode?: true
    prefecture?: true
    city?: true
    address?: true
    date?: true
    startTime?: true
    employeeNames?: true
    notes?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type SiteMaxAggregateInputType = {
    id?: true
    name?: true
    contractor?: true
    postalCode?: true
    prefecture?: true
    city?: true
    address?: true
    date?: true
    startTime?: true
    employeeNames?: true
    notes?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type SiteCountAggregateInputType = {
    id?: true
    name?: true
    contractor?: true
    postalCode?: true
    prefecture?: true
    city?: true
    address?: true
    date?: true
    startTime?: true
    employeeNames?: true
    notes?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type SiteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Site to aggregate.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sites
    **/
    _count?: true | SiteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SiteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SiteMaxAggregateInputType
  }

  export type GetSiteAggregateType<T extends SiteAggregateArgs> = {
        [P in keyof T & keyof AggregateSite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSite[P]>
      : GetScalarType<T[P], AggregateSite[P]>
  }




  export type SiteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteWhereInput
    orderBy?: SiteOrderByWithAggregationInput | SiteOrderByWithAggregationInput[]
    by: SiteScalarFieldEnum[] | SiteScalarFieldEnum
    having?: SiteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SiteCountAggregateInputType | true
    _min?: SiteMinAggregateInputType
    _max?: SiteMaxAggregateInputType
  }

  export type SiteGroupByOutputType = {
    id: string
    name: string
    contractor: string
    postalCode: string | null
    prefecture: string | null
    city: string | null
    address: string | null
    date: Date
    startTime: Date
    employeeNames: string | null
    notes: string | null
    status: $Enums.SiteStatus
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: SiteCountAggregateOutputType | null
    _min: SiteMinAggregateOutputType | null
    _max: SiteMaxAggregateOutputType | null
  }

  type GetSiteGroupByPayload<T extends SiteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SiteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SiteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SiteGroupByOutputType[P]>
            : GetScalarType<T[P], SiteGroupByOutputType[P]>
        }
      >
    >


  export type SiteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    contractor?: boolean
    postalCode?: boolean
    prefecture?: boolean
    city?: boolean
    address?: boolean
    date?: boolean
    startTime?: boolean
    employeeNames?: boolean
    notes?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    siteEmployees?: boolean | Site$siteEmployeesArgs<ExtArgs>
    _count?: boolean | SiteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["site"]>

  export type SiteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    contractor?: boolean
    postalCode?: boolean
    prefecture?: boolean
    city?: boolean
    address?: boolean
    date?: boolean
    startTime?: boolean
    employeeNames?: boolean
    notes?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }, ExtArgs["result"]["site"]>

  export type SiteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    contractor?: boolean
    postalCode?: boolean
    prefecture?: boolean
    city?: boolean
    address?: boolean
    date?: boolean
    startTime?: boolean
    employeeNames?: boolean
    notes?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }, ExtArgs["result"]["site"]>

  export type SiteSelectScalar = {
    id?: boolean
    name?: boolean
    contractor?: boolean
    postalCode?: boolean
    prefecture?: boolean
    city?: boolean
    address?: boolean
    date?: boolean
    startTime?: boolean
    employeeNames?: boolean
    notes?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type SiteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "contractor" | "postalCode" | "prefecture" | "city" | "address" | "date" | "startTime" | "employeeNames" | "notes" | "status" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["site"]>
  export type SiteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    siteEmployees?: boolean | Site$siteEmployeesArgs<ExtArgs>
    _count?: boolean | SiteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SiteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SiteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Site"
    objects: {
      siteEmployees: Prisma.$SiteEmployeePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      contractor: string
      postalCode: string | null
      prefecture: string | null
      city: string | null
      address: string | null
      date: Date
      startTime: Date
      employeeNames: string | null
      notes: string | null
      status: $Enums.SiteStatus
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["site"]>
    composites: {}
  }

  type SiteGetPayload<S extends boolean | null | undefined | SiteDefaultArgs> = $Result.GetResult<Prisma.$SitePayload, S>

  type SiteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SiteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SiteCountAggregateInputType | true
    }

  export interface SiteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Site'], meta: { name: 'Site' } }
    /**
     * Find zero or one Site that matches the filter.
     * @param {SiteFindUniqueArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SiteFindUniqueArgs>(args: SelectSubset<T, SiteFindUniqueArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Site that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SiteFindUniqueOrThrowArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SiteFindUniqueOrThrowArgs>(args: SelectSubset<T, SiteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Site that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteFindFirstArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SiteFindFirstArgs>(args?: SelectSubset<T, SiteFindFirstArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Site that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteFindFirstOrThrowArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SiteFindFirstOrThrowArgs>(args?: SelectSubset<T, SiteFindFirstOrThrowArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sites
     * const sites = await prisma.site.findMany()
     * 
     * // Get first 10 Sites
     * const sites = await prisma.site.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const siteWithIdOnly = await prisma.site.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SiteFindManyArgs>(args?: SelectSubset<T, SiteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Site.
     * @param {SiteCreateArgs} args - Arguments to create a Site.
     * @example
     * // Create one Site
     * const Site = await prisma.site.create({
     *   data: {
     *     // ... data to create a Site
     *   }
     * })
     * 
     */
    create<T extends SiteCreateArgs>(args: SelectSubset<T, SiteCreateArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sites.
     * @param {SiteCreateManyArgs} args - Arguments to create many Sites.
     * @example
     * // Create many Sites
     * const site = await prisma.site.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SiteCreateManyArgs>(args?: SelectSubset<T, SiteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sites and returns the data saved in the database.
     * @param {SiteCreateManyAndReturnArgs} args - Arguments to create many Sites.
     * @example
     * // Create many Sites
     * const site = await prisma.site.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sites and only return the `id`
     * const siteWithIdOnly = await prisma.site.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SiteCreateManyAndReturnArgs>(args?: SelectSubset<T, SiteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Site.
     * @param {SiteDeleteArgs} args - Arguments to delete one Site.
     * @example
     * // Delete one Site
     * const Site = await prisma.site.delete({
     *   where: {
     *     // ... filter to delete one Site
     *   }
     * })
     * 
     */
    delete<T extends SiteDeleteArgs>(args: SelectSubset<T, SiteDeleteArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Site.
     * @param {SiteUpdateArgs} args - Arguments to update one Site.
     * @example
     * // Update one Site
     * const site = await prisma.site.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SiteUpdateArgs>(args: SelectSubset<T, SiteUpdateArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sites.
     * @param {SiteDeleteManyArgs} args - Arguments to filter Sites to delete.
     * @example
     * // Delete a few Sites
     * const { count } = await prisma.site.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SiteDeleteManyArgs>(args?: SelectSubset<T, SiteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sites
     * const site = await prisma.site.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SiteUpdateManyArgs>(args: SelectSubset<T, SiteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sites and returns the data updated in the database.
     * @param {SiteUpdateManyAndReturnArgs} args - Arguments to update many Sites.
     * @example
     * // Update many Sites
     * const site = await prisma.site.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sites and only return the `id`
     * const siteWithIdOnly = await prisma.site.updateManyAndReturn({
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
    updateManyAndReturn<T extends SiteUpdateManyAndReturnArgs>(args: SelectSubset<T, SiteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Site.
     * @param {SiteUpsertArgs} args - Arguments to update or create a Site.
     * @example
     * // Update or create a Site
     * const site = await prisma.site.upsert({
     *   create: {
     *     // ... data to create a Site
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Site we want to update
     *   }
     * })
     */
    upsert<T extends SiteUpsertArgs>(args: SelectSubset<T, SiteUpsertArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteCountArgs} args - Arguments to filter Sites to count.
     * @example
     * // Count the number of Sites
     * const count = await prisma.site.count({
     *   where: {
     *     // ... the filter for the Sites we want to count
     *   }
     * })
    **/
    count<T extends SiteCountArgs>(
      args?: Subset<T, SiteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SiteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Site.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SiteAggregateArgs>(args: Subset<T, SiteAggregateArgs>): Prisma.PrismaPromise<GetSiteAggregateType<T>>

    /**
     * Group by Site.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteGroupByArgs} args - Group by arguments.
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
      T extends SiteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SiteGroupByArgs['orderBy'] }
        : { orderBy?: SiteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SiteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSiteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Site model
   */
  readonly fields: SiteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Site.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SiteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    siteEmployees<T extends Site$siteEmployeesArgs<ExtArgs> = {}>(args?: Subset<T, Site$siteEmployeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteEmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Site model
   */
  interface SiteFieldRefs {
    readonly id: FieldRef<"Site", 'String'>
    readonly name: FieldRef<"Site", 'String'>
    readonly contractor: FieldRef<"Site", 'String'>
    readonly postalCode: FieldRef<"Site", 'String'>
    readonly prefecture: FieldRef<"Site", 'String'>
    readonly city: FieldRef<"Site", 'String'>
    readonly address: FieldRef<"Site", 'String'>
    readonly date: FieldRef<"Site", 'DateTime'>
    readonly startTime: FieldRef<"Site", 'DateTime'>
    readonly employeeNames: FieldRef<"Site", 'String'>
    readonly notes: FieldRef<"Site", 'String'>
    readonly status: FieldRef<"Site", 'SiteStatus'>
    readonly createdAt: FieldRef<"Site", 'DateTime'>
    readonly updatedAt: FieldRef<"Site", 'DateTime'>
    readonly userId: FieldRef<"Site", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Site findUnique
   */
  export type SiteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where: SiteWhereUniqueInput
  }

  /**
   * Site findUniqueOrThrow
   */
  export type SiteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where: SiteWhereUniqueInput
  }

  /**
   * Site findFirst
   */
  export type SiteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sites.
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sites.
     */
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }

  /**
   * Site findFirstOrThrow
   */
  export type SiteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sites.
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sites.
     */
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }

  /**
   * Site findMany
   */
  export type SiteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Sites to fetch.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sites.
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }

  /**
   * Site create
   */
  export type SiteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * The data needed to create a Site.
     */
    data: XOR<SiteCreateInput, SiteUncheckedCreateInput>
  }

  /**
   * Site createMany
   */
  export type SiteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sites.
     */
    data: SiteCreateManyInput | SiteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Site createManyAndReturn
   */
  export type SiteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * The data used to create many Sites.
     */
    data: SiteCreateManyInput | SiteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Site update
   */
  export type SiteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * The data needed to update a Site.
     */
    data: XOR<SiteUpdateInput, SiteUncheckedUpdateInput>
    /**
     * Choose, which Site to update.
     */
    where: SiteWhereUniqueInput
  }

  /**
   * Site updateMany
   */
  export type SiteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sites.
     */
    data: XOR<SiteUpdateManyMutationInput, SiteUncheckedUpdateManyInput>
    /**
     * Filter which Sites to update
     */
    where?: SiteWhereInput
    /**
     * Limit how many Sites to update.
     */
    limit?: number
  }

  /**
   * Site updateManyAndReturn
   */
  export type SiteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * The data used to update Sites.
     */
    data: XOR<SiteUpdateManyMutationInput, SiteUncheckedUpdateManyInput>
    /**
     * Filter which Sites to update
     */
    where?: SiteWhereInput
    /**
     * Limit how many Sites to update.
     */
    limit?: number
  }

  /**
   * Site upsert
   */
  export type SiteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * The filter to search for the Site to update in case it exists.
     */
    where: SiteWhereUniqueInput
    /**
     * In case the Site found by the `where` argument doesn't exist, create a new Site with this data.
     */
    create: XOR<SiteCreateInput, SiteUncheckedCreateInput>
    /**
     * In case the Site was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SiteUpdateInput, SiteUncheckedUpdateInput>
  }

  /**
   * Site delete
   */
  export type SiteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter which Site to delete.
     */
    where: SiteWhereUniqueInput
  }

  /**
   * Site deleteMany
   */
  export type SiteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sites to delete
     */
    where?: SiteWhereInput
    /**
     * Limit how many Sites to delete.
     */
    limit?: number
  }

  /**
   * Site.siteEmployees
   */
  export type Site$siteEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteEmployee
     */
    select?: SiteEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteEmployee
     */
    omit?: SiteEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteEmployeeInclude<ExtArgs> | null
    where?: SiteEmployeeWhereInput
    orderBy?: SiteEmployeeOrderByWithRelationInput | SiteEmployeeOrderByWithRelationInput[]
    cursor?: SiteEmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SiteEmployeeScalarFieldEnum | SiteEmployeeScalarFieldEnum[]
  }

  /**
   * Site without action
   */
  export type SiteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
  }


  /**
   * Model SiteEmployee
   */

  export type AggregateSiteEmployee = {
    _count: SiteEmployeeCountAggregateOutputType | null
    _min: SiteEmployeeMinAggregateOutputType | null
    _max: SiteEmployeeMaxAggregateOutputType | null
  }

  export type SiteEmployeeMinAggregateOutputType = {
    id: string | null
    siteId: string | null
    employeeId: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type SiteEmployeeMaxAggregateOutputType = {
    id: string | null
    siteId: string | null
    employeeId: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type SiteEmployeeCountAggregateOutputType = {
    id: number
    siteId: number
    employeeId: number
    createdAt: number
    userId: number
    _all: number
  }


  export type SiteEmployeeMinAggregateInputType = {
    id?: true
    siteId?: true
    employeeId?: true
    createdAt?: true
    userId?: true
  }

  export type SiteEmployeeMaxAggregateInputType = {
    id?: true
    siteId?: true
    employeeId?: true
    createdAt?: true
    userId?: true
  }

  export type SiteEmployeeCountAggregateInputType = {
    id?: true
    siteId?: true
    employeeId?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type SiteEmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteEmployee to aggregate.
     */
    where?: SiteEmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteEmployees to fetch.
     */
    orderBy?: SiteEmployeeOrderByWithRelationInput | SiteEmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SiteEmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteEmployees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteEmployees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SiteEmployees
    **/
    _count?: true | SiteEmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SiteEmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SiteEmployeeMaxAggregateInputType
  }

  export type GetSiteEmployeeAggregateType<T extends SiteEmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateSiteEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSiteEmployee[P]>
      : GetScalarType<T[P], AggregateSiteEmployee[P]>
  }




  export type SiteEmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteEmployeeWhereInput
    orderBy?: SiteEmployeeOrderByWithAggregationInput | SiteEmployeeOrderByWithAggregationInput[]
    by: SiteEmployeeScalarFieldEnum[] | SiteEmployeeScalarFieldEnum
    having?: SiteEmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SiteEmployeeCountAggregateInputType | true
    _min?: SiteEmployeeMinAggregateInputType
    _max?: SiteEmployeeMaxAggregateInputType
  }

  export type SiteEmployeeGroupByOutputType = {
    id: string
    siteId: string
    employeeId: string
    createdAt: Date
    userId: string
    _count: SiteEmployeeCountAggregateOutputType | null
    _min: SiteEmployeeMinAggregateOutputType | null
    _max: SiteEmployeeMaxAggregateOutputType | null
  }

  type GetSiteEmployeeGroupByPayload<T extends SiteEmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SiteEmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SiteEmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SiteEmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], SiteEmployeeGroupByOutputType[P]>
        }
      >
    >


  export type SiteEmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    siteId?: boolean
    employeeId?: boolean
    createdAt?: boolean
    userId?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["siteEmployee"]>

  export type SiteEmployeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    siteId?: boolean
    employeeId?: boolean
    createdAt?: boolean
    userId?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["siteEmployee"]>

  export type SiteEmployeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    siteId?: boolean
    employeeId?: boolean
    createdAt?: boolean
    userId?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["siteEmployee"]>

  export type SiteEmployeeSelectScalar = {
    id?: boolean
    siteId?: boolean
    employeeId?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type SiteEmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "siteId" | "employeeId" | "createdAt" | "userId", ExtArgs["result"]["siteEmployee"]>
  export type SiteEmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type SiteEmployeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type SiteEmployeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }

  export type $SiteEmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SiteEmployee"
    objects: {
      site: Prisma.$SitePayload<ExtArgs>
      employee: Prisma.$EmployeePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      siteId: string
      employeeId: string
      createdAt: Date
      userId: string
    }, ExtArgs["result"]["siteEmployee"]>
    composites: {}
  }

  type SiteEmployeeGetPayload<S extends boolean | null | undefined | SiteEmployeeDefaultArgs> = $Result.GetResult<Prisma.$SiteEmployeePayload, S>

  type SiteEmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SiteEmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SiteEmployeeCountAggregateInputType | true
    }

  export interface SiteEmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SiteEmployee'], meta: { name: 'SiteEmployee' } }
    /**
     * Find zero or one SiteEmployee that matches the filter.
     * @param {SiteEmployeeFindUniqueArgs} args - Arguments to find a SiteEmployee
     * @example
     * // Get one SiteEmployee
     * const siteEmployee = await prisma.siteEmployee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SiteEmployeeFindUniqueArgs>(args: SelectSubset<T, SiteEmployeeFindUniqueArgs<ExtArgs>>): Prisma__SiteEmployeeClient<$Result.GetResult<Prisma.$SiteEmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SiteEmployee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SiteEmployeeFindUniqueOrThrowArgs} args - Arguments to find a SiteEmployee
     * @example
     * // Get one SiteEmployee
     * const siteEmployee = await prisma.siteEmployee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SiteEmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, SiteEmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SiteEmployeeClient<$Result.GetResult<Prisma.$SiteEmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SiteEmployee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteEmployeeFindFirstArgs} args - Arguments to find a SiteEmployee
     * @example
     * // Get one SiteEmployee
     * const siteEmployee = await prisma.siteEmployee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SiteEmployeeFindFirstArgs>(args?: SelectSubset<T, SiteEmployeeFindFirstArgs<ExtArgs>>): Prisma__SiteEmployeeClient<$Result.GetResult<Prisma.$SiteEmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SiteEmployee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteEmployeeFindFirstOrThrowArgs} args - Arguments to find a SiteEmployee
     * @example
     * // Get one SiteEmployee
     * const siteEmployee = await prisma.siteEmployee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SiteEmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, SiteEmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__SiteEmployeeClient<$Result.GetResult<Prisma.$SiteEmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SiteEmployees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteEmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SiteEmployees
     * const siteEmployees = await prisma.siteEmployee.findMany()
     * 
     * // Get first 10 SiteEmployees
     * const siteEmployees = await prisma.siteEmployee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const siteEmployeeWithIdOnly = await prisma.siteEmployee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SiteEmployeeFindManyArgs>(args?: SelectSubset<T, SiteEmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteEmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SiteEmployee.
     * @param {SiteEmployeeCreateArgs} args - Arguments to create a SiteEmployee.
     * @example
     * // Create one SiteEmployee
     * const SiteEmployee = await prisma.siteEmployee.create({
     *   data: {
     *     // ... data to create a SiteEmployee
     *   }
     * })
     * 
     */
    create<T extends SiteEmployeeCreateArgs>(args: SelectSubset<T, SiteEmployeeCreateArgs<ExtArgs>>): Prisma__SiteEmployeeClient<$Result.GetResult<Prisma.$SiteEmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SiteEmployees.
     * @param {SiteEmployeeCreateManyArgs} args - Arguments to create many SiteEmployees.
     * @example
     * // Create many SiteEmployees
     * const siteEmployee = await prisma.siteEmployee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SiteEmployeeCreateManyArgs>(args?: SelectSubset<T, SiteEmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SiteEmployees and returns the data saved in the database.
     * @param {SiteEmployeeCreateManyAndReturnArgs} args - Arguments to create many SiteEmployees.
     * @example
     * // Create many SiteEmployees
     * const siteEmployee = await prisma.siteEmployee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SiteEmployees and only return the `id`
     * const siteEmployeeWithIdOnly = await prisma.siteEmployee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SiteEmployeeCreateManyAndReturnArgs>(args?: SelectSubset<T, SiteEmployeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteEmployeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SiteEmployee.
     * @param {SiteEmployeeDeleteArgs} args - Arguments to delete one SiteEmployee.
     * @example
     * // Delete one SiteEmployee
     * const SiteEmployee = await prisma.siteEmployee.delete({
     *   where: {
     *     // ... filter to delete one SiteEmployee
     *   }
     * })
     * 
     */
    delete<T extends SiteEmployeeDeleteArgs>(args: SelectSubset<T, SiteEmployeeDeleteArgs<ExtArgs>>): Prisma__SiteEmployeeClient<$Result.GetResult<Prisma.$SiteEmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SiteEmployee.
     * @param {SiteEmployeeUpdateArgs} args - Arguments to update one SiteEmployee.
     * @example
     * // Update one SiteEmployee
     * const siteEmployee = await prisma.siteEmployee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SiteEmployeeUpdateArgs>(args: SelectSubset<T, SiteEmployeeUpdateArgs<ExtArgs>>): Prisma__SiteEmployeeClient<$Result.GetResult<Prisma.$SiteEmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SiteEmployees.
     * @param {SiteEmployeeDeleteManyArgs} args - Arguments to filter SiteEmployees to delete.
     * @example
     * // Delete a few SiteEmployees
     * const { count } = await prisma.siteEmployee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SiteEmployeeDeleteManyArgs>(args?: SelectSubset<T, SiteEmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SiteEmployees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteEmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SiteEmployees
     * const siteEmployee = await prisma.siteEmployee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SiteEmployeeUpdateManyArgs>(args: SelectSubset<T, SiteEmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SiteEmployees and returns the data updated in the database.
     * @param {SiteEmployeeUpdateManyAndReturnArgs} args - Arguments to update many SiteEmployees.
     * @example
     * // Update many SiteEmployees
     * const siteEmployee = await prisma.siteEmployee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SiteEmployees and only return the `id`
     * const siteEmployeeWithIdOnly = await prisma.siteEmployee.updateManyAndReturn({
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
    updateManyAndReturn<T extends SiteEmployeeUpdateManyAndReturnArgs>(args: SelectSubset<T, SiteEmployeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteEmployeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SiteEmployee.
     * @param {SiteEmployeeUpsertArgs} args - Arguments to update or create a SiteEmployee.
     * @example
     * // Update or create a SiteEmployee
     * const siteEmployee = await prisma.siteEmployee.upsert({
     *   create: {
     *     // ... data to create a SiteEmployee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SiteEmployee we want to update
     *   }
     * })
     */
    upsert<T extends SiteEmployeeUpsertArgs>(args: SelectSubset<T, SiteEmployeeUpsertArgs<ExtArgs>>): Prisma__SiteEmployeeClient<$Result.GetResult<Prisma.$SiteEmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SiteEmployees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteEmployeeCountArgs} args - Arguments to filter SiteEmployees to count.
     * @example
     * // Count the number of SiteEmployees
     * const count = await prisma.siteEmployee.count({
     *   where: {
     *     // ... the filter for the SiteEmployees we want to count
     *   }
     * })
    **/
    count<T extends SiteEmployeeCountArgs>(
      args?: Subset<T, SiteEmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SiteEmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SiteEmployee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteEmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SiteEmployeeAggregateArgs>(args: Subset<T, SiteEmployeeAggregateArgs>): Prisma.PrismaPromise<GetSiteEmployeeAggregateType<T>>

    /**
     * Group by SiteEmployee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteEmployeeGroupByArgs} args - Group by arguments.
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
      T extends SiteEmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SiteEmployeeGroupByArgs['orderBy'] }
        : { orderBy?: SiteEmployeeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SiteEmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSiteEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SiteEmployee model
   */
  readonly fields: SiteEmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SiteEmployee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SiteEmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    site<T extends SiteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SiteDefaultArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SiteEmployee model
   */
  interface SiteEmployeeFieldRefs {
    readonly id: FieldRef<"SiteEmployee", 'String'>
    readonly siteId: FieldRef<"SiteEmployee", 'String'>
    readonly employeeId: FieldRef<"SiteEmployee", 'String'>
    readonly createdAt: FieldRef<"SiteEmployee", 'DateTime'>
    readonly userId: FieldRef<"SiteEmployee", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SiteEmployee findUnique
   */
  export type SiteEmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteEmployee
     */
    select?: SiteEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteEmployee
     */
    omit?: SiteEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteEmployeeInclude<ExtArgs> | null
    /**
     * Filter, which SiteEmployee to fetch.
     */
    where: SiteEmployeeWhereUniqueInput
  }

  /**
   * SiteEmployee findUniqueOrThrow
   */
  export type SiteEmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteEmployee
     */
    select?: SiteEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteEmployee
     */
    omit?: SiteEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteEmployeeInclude<ExtArgs> | null
    /**
     * Filter, which SiteEmployee to fetch.
     */
    where: SiteEmployeeWhereUniqueInput
  }

  /**
   * SiteEmployee findFirst
   */
  export type SiteEmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteEmployee
     */
    select?: SiteEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteEmployee
     */
    omit?: SiteEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteEmployeeInclude<ExtArgs> | null
    /**
     * Filter, which SiteEmployee to fetch.
     */
    where?: SiteEmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteEmployees to fetch.
     */
    orderBy?: SiteEmployeeOrderByWithRelationInput | SiteEmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteEmployees.
     */
    cursor?: SiteEmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteEmployees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteEmployees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteEmployees.
     */
    distinct?: SiteEmployeeScalarFieldEnum | SiteEmployeeScalarFieldEnum[]
  }

  /**
   * SiteEmployee findFirstOrThrow
   */
  export type SiteEmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteEmployee
     */
    select?: SiteEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteEmployee
     */
    omit?: SiteEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteEmployeeInclude<ExtArgs> | null
    /**
     * Filter, which SiteEmployee to fetch.
     */
    where?: SiteEmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteEmployees to fetch.
     */
    orderBy?: SiteEmployeeOrderByWithRelationInput | SiteEmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteEmployees.
     */
    cursor?: SiteEmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteEmployees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteEmployees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteEmployees.
     */
    distinct?: SiteEmployeeScalarFieldEnum | SiteEmployeeScalarFieldEnum[]
  }

  /**
   * SiteEmployee findMany
   */
  export type SiteEmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteEmployee
     */
    select?: SiteEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteEmployee
     */
    omit?: SiteEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteEmployeeInclude<ExtArgs> | null
    /**
     * Filter, which SiteEmployees to fetch.
     */
    where?: SiteEmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteEmployees to fetch.
     */
    orderBy?: SiteEmployeeOrderByWithRelationInput | SiteEmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SiteEmployees.
     */
    cursor?: SiteEmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteEmployees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteEmployees.
     */
    skip?: number
    distinct?: SiteEmployeeScalarFieldEnum | SiteEmployeeScalarFieldEnum[]
  }

  /**
   * SiteEmployee create
   */
  export type SiteEmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteEmployee
     */
    select?: SiteEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteEmployee
     */
    omit?: SiteEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteEmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a SiteEmployee.
     */
    data: XOR<SiteEmployeeCreateInput, SiteEmployeeUncheckedCreateInput>
  }

  /**
   * SiteEmployee createMany
   */
  export type SiteEmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SiteEmployees.
     */
    data: SiteEmployeeCreateManyInput | SiteEmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SiteEmployee createManyAndReturn
   */
  export type SiteEmployeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteEmployee
     */
    select?: SiteEmployeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SiteEmployee
     */
    omit?: SiteEmployeeOmit<ExtArgs> | null
    /**
     * The data used to create many SiteEmployees.
     */
    data: SiteEmployeeCreateManyInput | SiteEmployeeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteEmployeeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SiteEmployee update
   */
  export type SiteEmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteEmployee
     */
    select?: SiteEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteEmployee
     */
    omit?: SiteEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteEmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a SiteEmployee.
     */
    data: XOR<SiteEmployeeUpdateInput, SiteEmployeeUncheckedUpdateInput>
    /**
     * Choose, which SiteEmployee to update.
     */
    where: SiteEmployeeWhereUniqueInput
  }

  /**
   * SiteEmployee updateMany
   */
  export type SiteEmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SiteEmployees.
     */
    data: XOR<SiteEmployeeUpdateManyMutationInput, SiteEmployeeUncheckedUpdateManyInput>
    /**
     * Filter which SiteEmployees to update
     */
    where?: SiteEmployeeWhereInput
    /**
     * Limit how many SiteEmployees to update.
     */
    limit?: number
  }

  /**
   * SiteEmployee updateManyAndReturn
   */
  export type SiteEmployeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteEmployee
     */
    select?: SiteEmployeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SiteEmployee
     */
    omit?: SiteEmployeeOmit<ExtArgs> | null
    /**
     * The data used to update SiteEmployees.
     */
    data: XOR<SiteEmployeeUpdateManyMutationInput, SiteEmployeeUncheckedUpdateManyInput>
    /**
     * Filter which SiteEmployees to update
     */
    where?: SiteEmployeeWhereInput
    /**
     * Limit how many SiteEmployees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteEmployeeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SiteEmployee upsert
   */
  export type SiteEmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteEmployee
     */
    select?: SiteEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteEmployee
     */
    omit?: SiteEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteEmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the SiteEmployee to update in case it exists.
     */
    where: SiteEmployeeWhereUniqueInput
    /**
     * In case the SiteEmployee found by the `where` argument doesn't exist, create a new SiteEmployee with this data.
     */
    create: XOR<SiteEmployeeCreateInput, SiteEmployeeUncheckedCreateInput>
    /**
     * In case the SiteEmployee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SiteEmployeeUpdateInput, SiteEmployeeUncheckedUpdateInput>
  }

  /**
   * SiteEmployee delete
   */
  export type SiteEmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteEmployee
     */
    select?: SiteEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteEmployee
     */
    omit?: SiteEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteEmployeeInclude<ExtArgs> | null
    /**
     * Filter which SiteEmployee to delete.
     */
    where: SiteEmployeeWhereUniqueInput
  }

  /**
   * SiteEmployee deleteMany
   */
  export type SiteEmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteEmployees to delete
     */
    where?: SiteEmployeeWhereInput
    /**
     * Limit how many SiteEmployees to delete.
     */
    limit?: number
  }

  /**
   * SiteEmployee without action
   */
  export type SiteEmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteEmployee
     */
    select?: SiteEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteEmployee
     */
    omit?: SiteEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteEmployeeInclude<ExtArgs> | null
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


  export const ClientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    companyName: 'companyName',
    email: 'email',
    phone: 'phone',
    address: 'address',
    postalCode: 'postalCode',
    city: 'city',
    prefecture: 'prefecture',
    contactPerson: 'contactPerson',
    contactPhone: 'contactPhone',
    contactEmail: 'contactEmail',
    industry: 'industry',
    notes: 'notes',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const EmployeeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    emergencyContactPerson: 'emergencyContactPerson',
    emergencyContactPhone: 'emergencyContactPhone',
    address: 'address',
    postalCode: 'postalCode',
    city: 'city',
    prefecture: 'prefecture',
    position: 'position',
    unitPay: 'unitPay',
    hourlyOvertimePay: 'hourlyOvertimePay',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const SalesScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    date: 'date',
    description: 'description',
    category: 'category',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    clientId: 'clientId'
  };

  export type SalesScalarFieldEnum = (typeof SalesScalarFieldEnum)[keyof typeof SalesScalarFieldEnum]


  export const PayrollScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    periodType: 'periodType',
    startDate: 'startDate',
    endDate: 'endDate',
    workHours: 'workHours',
    overtimeHours: 'overtimeHours',
    siteCount: 'siteCount',
    unitPay: 'unitPay',
    sitePay: 'sitePay',
    hourlyOvertimePay: 'hourlyOvertimePay',
    overtime: 'overtime',
    totalAmount: 'totalAmount',
    status: 'status',
    paymentDate: 'paymentDate',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type PayrollScalarFieldEnum = (typeof PayrollScalarFieldEnum)[keyof typeof PayrollScalarFieldEnum]


  export const SiteScalarFieldEnum: {
    id: 'id',
    name: 'name',
    contractor: 'contractor',
    postalCode: 'postalCode',
    prefecture: 'prefecture',
    city: 'city',
    address: 'address',
    date: 'date',
    startTime: 'startTime',
    employeeNames: 'employeeNames',
    notes: 'notes',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type SiteScalarFieldEnum = (typeof SiteScalarFieldEnum)[keyof typeof SiteScalarFieldEnum]


  export const SiteEmployeeScalarFieldEnum: {
    id: 'id',
    siteId: 'siteId',
    employeeId: 'employeeId',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type SiteEmployeeScalarFieldEnum = (typeof SiteEmployeeScalarFieldEnum)[keyof typeof SiteEmployeeScalarFieldEnum]


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
   * Reference to a field of type 'ClientStatus'
   */
  export type EnumClientStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ClientStatus'>
    


  /**
   * Reference to a field of type 'ClientStatus[]'
   */
  export type ListEnumClientStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ClientStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'SalesStatus'
   */
  export type EnumSalesStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SalesStatus'>
    


  /**
   * Reference to a field of type 'SalesStatus[]'
   */
  export type ListEnumSalesStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SalesStatus[]'>
    


  /**
   * Reference to a field of type 'PayrollPeriodType'
   */
  export type EnumPayrollPeriodTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PayrollPeriodType'>
    


  /**
   * Reference to a field of type 'PayrollPeriodType[]'
   */
  export type ListEnumPayrollPeriodTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PayrollPeriodType[]'>
    


  /**
   * Reference to a field of type 'PayrollStatus'
   */
  export type EnumPayrollStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PayrollStatus'>
    


  /**
   * Reference to a field of type 'PayrollStatus[]'
   */
  export type ListEnumPayrollStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PayrollStatus[]'>
    


  /**
   * Reference to a field of type 'SiteStatus'
   */
  export type EnumSiteStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SiteStatus'>
    


  /**
   * Reference to a field of type 'SiteStatus[]'
   */
  export type ListEnumSiteStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SiteStatus[]'>
    


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


  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: StringFilter<"Client"> | string
    name?: StringFilter<"Client"> | string
    companyName?: StringNullableFilter<"Client"> | string | null
    email?: StringNullableFilter<"Client"> | string | null
    phone?: StringNullableFilter<"Client"> | string | null
    address?: StringNullableFilter<"Client"> | string | null
    postalCode?: StringNullableFilter<"Client"> | string | null
    city?: StringNullableFilter<"Client"> | string | null
    prefecture?: StringNullableFilter<"Client"> | string | null
    contactPerson?: StringNullableFilter<"Client"> | string | null
    contactPhone?: StringNullableFilter<"Client"> | string | null
    contactEmail?: StringNullableFilter<"Client"> | string | null
    industry?: StringNullableFilter<"Client"> | string | null
    notes?: StringNullableFilter<"Client"> | string | null
    status?: EnumClientStatusFilter<"Client"> | $Enums.ClientStatus
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    userId?: StringFilter<"Client"> | string
    sales?: SalesListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    companyName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    prefecture?: SortOrderInput | SortOrder
    contactPerson?: SortOrderInput | SortOrder
    contactPhone?: SortOrderInput | SortOrder
    contactEmail?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    sales?: SalesOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    name?: StringFilter<"Client"> | string
    companyName?: StringNullableFilter<"Client"> | string | null
    email?: StringNullableFilter<"Client"> | string | null
    phone?: StringNullableFilter<"Client"> | string | null
    address?: StringNullableFilter<"Client"> | string | null
    postalCode?: StringNullableFilter<"Client"> | string | null
    city?: StringNullableFilter<"Client"> | string | null
    prefecture?: StringNullableFilter<"Client"> | string | null
    contactPerson?: StringNullableFilter<"Client"> | string | null
    contactPhone?: StringNullableFilter<"Client"> | string | null
    contactEmail?: StringNullableFilter<"Client"> | string | null
    industry?: StringNullableFilter<"Client"> | string | null
    notes?: StringNullableFilter<"Client"> | string | null
    status?: EnumClientStatusFilter<"Client"> | $Enums.ClientStatus
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    userId?: StringFilter<"Client"> | string
    sales?: SalesListRelationFilter
  }, "id">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    companyName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    prefecture?: SortOrderInput | SortOrder
    contactPerson?: SortOrderInput | SortOrder
    contactPhone?: SortOrderInput | SortOrder
    contactEmail?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Client"> | string
    name?: StringWithAggregatesFilter<"Client"> | string
    companyName?: StringNullableWithAggregatesFilter<"Client"> | string | null
    email?: StringNullableWithAggregatesFilter<"Client"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Client"> | string | null
    address?: StringNullableWithAggregatesFilter<"Client"> | string | null
    postalCode?: StringNullableWithAggregatesFilter<"Client"> | string | null
    city?: StringNullableWithAggregatesFilter<"Client"> | string | null
    prefecture?: StringNullableWithAggregatesFilter<"Client"> | string | null
    contactPerson?: StringNullableWithAggregatesFilter<"Client"> | string | null
    contactPhone?: StringNullableWithAggregatesFilter<"Client"> | string | null
    contactEmail?: StringNullableWithAggregatesFilter<"Client"> | string | null
    industry?: StringNullableWithAggregatesFilter<"Client"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Client"> | string | null
    status?: EnumClientStatusWithAggregatesFilter<"Client"> | $Enums.ClientStatus
    createdAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    userId?: StringWithAggregatesFilter<"Client"> | string
  }

  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    id?: StringFilter<"Employee"> | string
    name?: StringFilter<"Employee"> | string
    email?: StringNullableFilter<"Employee"> | string | null
    phone?: StringNullableFilter<"Employee"> | string | null
    emergencyContactPerson?: StringNullableFilter<"Employee"> | string | null
    emergencyContactPhone?: StringNullableFilter<"Employee"> | string | null
    address?: StringNullableFilter<"Employee"> | string | null
    postalCode?: StringNullableFilter<"Employee"> | string | null
    city?: StringNullableFilter<"Employee"> | string | null
    prefecture?: StringNullableFilter<"Employee"> | string | null
    position?: StringNullableFilter<"Employee"> | string | null
    unitPay?: IntNullableFilter<"Employee"> | number | null
    hourlyOvertimePay?: IntNullableFilter<"Employee"> | number | null
    notes?: StringNullableFilter<"Employee"> | string | null
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    userId?: StringFilter<"Employee"> | string
    payrolls?: PayrollListRelationFilter
    siteEmployees?: SiteEmployeeListRelationFilter
  }

  export type EmployeeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    emergencyContactPerson?: SortOrderInput | SortOrder
    emergencyContactPhone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    prefecture?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    unitPay?: SortOrderInput | SortOrder
    hourlyOvertimePay?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    payrolls?: PayrollOrderByRelationAggregateInput
    siteEmployees?: SiteEmployeeOrderByRelationAggregateInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    name?: StringFilter<"Employee"> | string
    email?: StringNullableFilter<"Employee"> | string | null
    phone?: StringNullableFilter<"Employee"> | string | null
    emergencyContactPerson?: StringNullableFilter<"Employee"> | string | null
    emergencyContactPhone?: StringNullableFilter<"Employee"> | string | null
    address?: StringNullableFilter<"Employee"> | string | null
    postalCode?: StringNullableFilter<"Employee"> | string | null
    city?: StringNullableFilter<"Employee"> | string | null
    prefecture?: StringNullableFilter<"Employee"> | string | null
    position?: StringNullableFilter<"Employee"> | string | null
    unitPay?: IntNullableFilter<"Employee"> | number | null
    hourlyOvertimePay?: IntNullableFilter<"Employee"> | number | null
    notes?: StringNullableFilter<"Employee"> | string | null
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    userId?: StringFilter<"Employee"> | string
    payrolls?: PayrollListRelationFilter
    siteEmployees?: SiteEmployeeListRelationFilter
  }, "id">

  export type EmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    emergencyContactPerson?: SortOrderInput | SortOrder
    emergencyContactPhone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    prefecture?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    unitPay?: SortOrderInput | SortOrder
    hourlyOvertimePay?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _avg?: EmployeeAvgOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
    _sum?: EmployeeSumOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Employee"> | string
    name?: StringWithAggregatesFilter<"Employee"> | string
    email?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    emergencyContactPerson?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    emergencyContactPhone?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    address?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    postalCode?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    city?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    prefecture?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    position?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    unitPay?: IntNullableWithAggregatesFilter<"Employee"> | number | null
    hourlyOvertimePay?: IntNullableWithAggregatesFilter<"Employee"> | number | null
    notes?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
    userId?: StringWithAggregatesFilter<"Employee"> | string
  }

  export type SalesWhereInput = {
    AND?: SalesWhereInput | SalesWhereInput[]
    OR?: SalesWhereInput[]
    NOT?: SalesWhereInput | SalesWhereInput[]
    id?: StringFilter<"Sales"> | string
    amount?: IntFilter<"Sales"> | number
    date?: DateTimeFilter<"Sales"> | Date | string
    description?: StringNullableFilter<"Sales"> | string | null
    category?: StringNullableFilter<"Sales"> | string | null
    status?: EnumSalesStatusFilter<"Sales"> | $Enums.SalesStatus
    createdAt?: DateTimeFilter<"Sales"> | Date | string
    updatedAt?: DateTimeFilter<"Sales"> | Date | string
    userId?: StringFilter<"Sales"> | string
    clientId?: StringFilter<"Sales"> | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }

  export type SalesOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    clientId?: SortOrder
    client?: ClientOrderByWithRelationInput
  }

  export type SalesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SalesWhereInput | SalesWhereInput[]
    OR?: SalesWhereInput[]
    NOT?: SalesWhereInput | SalesWhereInput[]
    amount?: IntFilter<"Sales"> | number
    date?: DateTimeFilter<"Sales"> | Date | string
    description?: StringNullableFilter<"Sales"> | string | null
    category?: StringNullableFilter<"Sales"> | string | null
    status?: EnumSalesStatusFilter<"Sales"> | $Enums.SalesStatus
    createdAt?: DateTimeFilter<"Sales"> | Date | string
    updatedAt?: DateTimeFilter<"Sales"> | Date | string
    userId?: StringFilter<"Sales"> | string
    clientId?: StringFilter<"Sales"> | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }, "id">

  export type SalesOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    clientId?: SortOrder
    _count?: SalesCountOrderByAggregateInput
    _avg?: SalesAvgOrderByAggregateInput
    _max?: SalesMaxOrderByAggregateInput
    _min?: SalesMinOrderByAggregateInput
    _sum?: SalesSumOrderByAggregateInput
  }

  export type SalesScalarWhereWithAggregatesInput = {
    AND?: SalesScalarWhereWithAggregatesInput | SalesScalarWhereWithAggregatesInput[]
    OR?: SalesScalarWhereWithAggregatesInput[]
    NOT?: SalesScalarWhereWithAggregatesInput | SalesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sales"> | string
    amount?: IntWithAggregatesFilter<"Sales"> | number
    date?: DateTimeWithAggregatesFilter<"Sales"> | Date | string
    description?: StringNullableWithAggregatesFilter<"Sales"> | string | null
    category?: StringNullableWithAggregatesFilter<"Sales"> | string | null
    status?: EnumSalesStatusWithAggregatesFilter<"Sales"> | $Enums.SalesStatus
    createdAt?: DateTimeWithAggregatesFilter<"Sales"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Sales"> | Date | string
    userId?: StringWithAggregatesFilter<"Sales"> | string
    clientId?: StringWithAggregatesFilter<"Sales"> | string
  }

  export type PayrollWhereInput = {
    AND?: PayrollWhereInput | PayrollWhereInput[]
    OR?: PayrollWhereInput[]
    NOT?: PayrollWhereInput | PayrollWhereInput[]
    id?: StringFilter<"Payroll"> | string
    employeeId?: StringFilter<"Payroll"> | string
    periodType?: EnumPayrollPeriodTypeFilter<"Payroll"> | $Enums.PayrollPeriodType
    startDate?: DateTimeFilter<"Payroll"> | Date | string
    endDate?: DateTimeFilter<"Payroll"> | Date | string
    workHours?: IntNullableFilter<"Payroll"> | number | null
    overtimeHours?: IntNullableFilter<"Payroll"> | number | null
    siteCount?: IntFilter<"Payroll"> | number
    unitPay?: IntFilter<"Payroll"> | number
    sitePay?: IntFilter<"Payroll"> | number
    hourlyOvertimePay?: IntFilter<"Payroll"> | number
    overtime?: IntFilter<"Payroll"> | number
    totalAmount?: IntFilter<"Payroll"> | number
    status?: EnumPayrollStatusFilter<"Payroll"> | $Enums.PayrollStatus
    paymentDate?: DateTimeNullableFilter<"Payroll"> | Date | string | null
    notes?: StringNullableFilter<"Payroll"> | string | null
    createdAt?: DateTimeFilter<"Payroll"> | Date | string
    updatedAt?: DateTimeFilter<"Payroll"> | Date | string
    userId?: StringFilter<"Payroll"> | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }

  export type PayrollOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    periodType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    workHours?: SortOrderInput | SortOrder
    overtimeHours?: SortOrderInput | SortOrder
    siteCount?: SortOrder
    unitPay?: SortOrder
    sitePay?: SortOrder
    hourlyOvertimePay?: SortOrder
    overtime?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    paymentDate?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    employee?: EmployeeOrderByWithRelationInput
  }

  export type PayrollWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PayrollWhereInput | PayrollWhereInput[]
    OR?: PayrollWhereInput[]
    NOT?: PayrollWhereInput | PayrollWhereInput[]
    employeeId?: StringFilter<"Payroll"> | string
    periodType?: EnumPayrollPeriodTypeFilter<"Payroll"> | $Enums.PayrollPeriodType
    startDate?: DateTimeFilter<"Payroll"> | Date | string
    endDate?: DateTimeFilter<"Payroll"> | Date | string
    workHours?: IntNullableFilter<"Payroll"> | number | null
    overtimeHours?: IntNullableFilter<"Payroll"> | number | null
    siteCount?: IntFilter<"Payroll"> | number
    unitPay?: IntFilter<"Payroll"> | number
    sitePay?: IntFilter<"Payroll"> | number
    hourlyOvertimePay?: IntFilter<"Payroll"> | number
    overtime?: IntFilter<"Payroll"> | number
    totalAmount?: IntFilter<"Payroll"> | number
    status?: EnumPayrollStatusFilter<"Payroll"> | $Enums.PayrollStatus
    paymentDate?: DateTimeNullableFilter<"Payroll"> | Date | string | null
    notes?: StringNullableFilter<"Payroll"> | string | null
    createdAt?: DateTimeFilter<"Payroll"> | Date | string
    updatedAt?: DateTimeFilter<"Payroll"> | Date | string
    userId?: StringFilter<"Payroll"> | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }, "id">

  export type PayrollOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    periodType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    workHours?: SortOrderInput | SortOrder
    overtimeHours?: SortOrderInput | SortOrder
    siteCount?: SortOrder
    unitPay?: SortOrder
    sitePay?: SortOrder
    hourlyOvertimePay?: SortOrder
    overtime?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    paymentDate?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: PayrollCountOrderByAggregateInput
    _avg?: PayrollAvgOrderByAggregateInput
    _max?: PayrollMaxOrderByAggregateInput
    _min?: PayrollMinOrderByAggregateInput
    _sum?: PayrollSumOrderByAggregateInput
  }

  export type PayrollScalarWhereWithAggregatesInput = {
    AND?: PayrollScalarWhereWithAggregatesInput | PayrollScalarWhereWithAggregatesInput[]
    OR?: PayrollScalarWhereWithAggregatesInput[]
    NOT?: PayrollScalarWhereWithAggregatesInput | PayrollScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payroll"> | string
    employeeId?: StringWithAggregatesFilter<"Payroll"> | string
    periodType?: EnumPayrollPeriodTypeWithAggregatesFilter<"Payroll"> | $Enums.PayrollPeriodType
    startDate?: DateTimeWithAggregatesFilter<"Payroll"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Payroll"> | Date | string
    workHours?: IntNullableWithAggregatesFilter<"Payroll"> | number | null
    overtimeHours?: IntNullableWithAggregatesFilter<"Payroll"> | number | null
    siteCount?: IntWithAggregatesFilter<"Payroll"> | number
    unitPay?: IntWithAggregatesFilter<"Payroll"> | number
    sitePay?: IntWithAggregatesFilter<"Payroll"> | number
    hourlyOvertimePay?: IntWithAggregatesFilter<"Payroll"> | number
    overtime?: IntWithAggregatesFilter<"Payroll"> | number
    totalAmount?: IntWithAggregatesFilter<"Payroll"> | number
    status?: EnumPayrollStatusWithAggregatesFilter<"Payroll"> | $Enums.PayrollStatus
    paymentDate?: DateTimeNullableWithAggregatesFilter<"Payroll"> | Date | string | null
    notes?: StringNullableWithAggregatesFilter<"Payroll"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Payroll"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payroll"> | Date | string
    userId?: StringWithAggregatesFilter<"Payroll"> | string
  }

  export type SiteWhereInput = {
    AND?: SiteWhereInput | SiteWhereInput[]
    OR?: SiteWhereInput[]
    NOT?: SiteWhereInput | SiteWhereInput[]
    id?: StringFilter<"Site"> | string
    name?: StringFilter<"Site"> | string
    contractor?: StringFilter<"Site"> | string
    postalCode?: StringNullableFilter<"Site"> | string | null
    prefecture?: StringNullableFilter<"Site"> | string | null
    city?: StringNullableFilter<"Site"> | string | null
    address?: StringNullableFilter<"Site"> | string | null
    date?: DateTimeFilter<"Site"> | Date | string
    startTime?: DateTimeFilter<"Site"> | Date | string
    employeeNames?: StringNullableFilter<"Site"> | string | null
    notes?: StringNullableFilter<"Site"> | string | null
    status?: EnumSiteStatusFilter<"Site"> | $Enums.SiteStatus
    createdAt?: DateTimeFilter<"Site"> | Date | string
    updatedAt?: DateTimeFilter<"Site"> | Date | string
    userId?: StringFilter<"Site"> | string
    siteEmployees?: SiteEmployeeListRelationFilter
  }

  export type SiteOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    contractor?: SortOrder
    postalCode?: SortOrderInput | SortOrder
    prefecture?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    date?: SortOrder
    startTime?: SortOrder
    employeeNames?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    siteEmployees?: SiteEmployeeOrderByRelationAggregateInput
  }

  export type SiteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SiteWhereInput | SiteWhereInput[]
    OR?: SiteWhereInput[]
    NOT?: SiteWhereInput | SiteWhereInput[]
    name?: StringFilter<"Site"> | string
    contractor?: StringFilter<"Site"> | string
    postalCode?: StringNullableFilter<"Site"> | string | null
    prefecture?: StringNullableFilter<"Site"> | string | null
    city?: StringNullableFilter<"Site"> | string | null
    address?: StringNullableFilter<"Site"> | string | null
    date?: DateTimeFilter<"Site"> | Date | string
    startTime?: DateTimeFilter<"Site"> | Date | string
    employeeNames?: StringNullableFilter<"Site"> | string | null
    notes?: StringNullableFilter<"Site"> | string | null
    status?: EnumSiteStatusFilter<"Site"> | $Enums.SiteStatus
    createdAt?: DateTimeFilter<"Site"> | Date | string
    updatedAt?: DateTimeFilter<"Site"> | Date | string
    userId?: StringFilter<"Site"> | string
    siteEmployees?: SiteEmployeeListRelationFilter
  }, "id">

  export type SiteOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    contractor?: SortOrder
    postalCode?: SortOrderInput | SortOrder
    prefecture?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    date?: SortOrder
    startTime?: SortOrder
    employeeNames?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: SiteCountOrderByAggregateInput
    _max?: SiteMaxOrderByAggregateInput
    _min?: SiteMinOrderByAggregateInput
  }

  export type SiteScalarWhereWithAggregatesInput = {
    AND?: SiteScalarWhereWithAggregatesInput | SiteScalarWhereWithAggregatesInput[]
    OR?: SiteScalarWhereWithAggregatesInput[]
    NOT?: SiteScalarWhereWithAggregatesInput | SiteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Site"> | string
    name?: StringWithAggregatesFilter<"Site"> | string
    contractor?: StringWithAggregatesFilter<"Site"> | string
    postalCode?: StringNullableWithAggregatesFilter<"Site"> | string | null
    prefecture?: StringNullableWithAggregatesFilter<"Site"> | string | null
    city?: StringNullableWithAggregatesFilter<"Site"> | string | null
    address?: StringNullableWithAggregatesFilter<"Site"> | string | null
    date?: DateTimeWithAggregatesFilter<"Site"> | Date | string
    startTime?: DateTimeWithAggregatesFilter<"Site"> | Date | string
    employeeNames?: StringNullableWithAggregatesFilter<"Site"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Site"> | string | null
    status?: EnumSiteStatusWithAggregatesFilter<"Site"> | $Enums.SiteStatus
    createdAt?: DateTimeWithAggregatesFilter<"Site"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Site"> | Date | string
    userId?: StringWithAggregatesFilter<"Site"> | string
  }

  export type SiteEmployeeWhereInput = {
    AND?: SiteEmployeeWhereInput | SiteEmployeeWhereInput[]
    OR?: SiteEmployeeWhereInput[]
    NOT?: SiteEmployeeWhereInput | SiteEmployeeWhereInput[]
    id?: StringFilter<"SiteEmployee"> | string
    siteId?: StringFilter<"SiteEmployee"> | string
    employeeId?: StringFilter<"SiteEmployee"> | string
    createdAt?: DateTimeFilter<"SiteEmployee"> | Date | string
    userId?: StringFilter<"SiteEmployee"> | string
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }

  export type SiteEmployeeOrderByWithRelationInput = {
    id?: SortOrder
    siteId?: SortOrder
    employeeId?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    site?: SiteOrderByWithRelationInput
    employee?: EmployeeOrderByWithRelationInput
  }

  export type SiteEmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    siteId_employeeId?: SiteEmployeeSiteIdEmployeeIdCompoundUniqueInput
    AND?: SiteEmployeeWhereInput | SiteEmployeeWhereInput[]
    OR?: SiteEmployeeWhereInput[]
    NOT?: SiteEmployeeWhereInput | SiteEmployeeWhereInput[]
    siteId?: StringFilter<"SiteEmployee"> | string
    employeeId?: StringFilter<"SiteEmployee"> | string
    createdAt?: DateTimeFilter<"SiteEmployee"> | Date | string
    userId?: StringFilter<"SiteEmployee"> | string
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }, "id" | "siteId_employeeId">

  export type SiteEmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    siteId?: SortOrder
    employeeId?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: SiteEmployeeCountOrderByAggregateInput
    _max?: SiteEmployeeMaxOrderByAggregateInput
    _min?: SiteEmployeeMinOrderByAggregateInput
  }

  export type SiteEmployeeScalarWhereWithAggregatesInput = {
    AND?: SiteEmployeeScalarWhereWithAggregatesInput | SiteEmployeeScalarWhereWithAggregatesInput[]
    OR?: SiteEmployeeScalarWhereWithAggregatesInput[]
    NOT?: SiteEmployeeScalarWhereWithAggregatesInput | SiteEmployeeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SiteEmployee"> | string
    siteId?: StringWithAggregatesFilter<"SiteEmployee"> | string
    employeeId?: StringWithAggregatesFilter<"SiteEmployee"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SiteEmployee"> | Date | string
    userId?: StringWithAggregatesFilter<"SiteEmployee"> | string
  }

  export type ClientCreateInput = {
    id?: string
    name: string
    companyName?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    postalCode?: string | null
    city?: string | null
    prefecture?: string | null
    contactPerson?: string | null
    contactPhone?: string | null
    contactEmail?: string | null
    industry?: string | null
    notes?: string | null
    status?: $Enums.ClientStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    sales?: SalesCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id?: string
    name: string
    companyName?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    postalCode?: string | null
    city?: string | null
    prefecture?: string | null
    contactPerson?: string | null
    contactPhone?: string | null
    contactEmail?: string | null
    industry?: string | null
    notes?: string | null
    status?: $Enums.ClientStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    sales?: SalesUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    prefecture?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumClientStatusFieldUpdateOperationsInput | $Enums.ClientStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    sales?: SalesUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    prefecture?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumClientStatusFieldUpdateOperationsInput | $Enums.ClientStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    sales?: SalesUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id?: string
    name: string
    companyName?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    postalCode?: string | null
    city?: string | null
    prefecture?: string | null
    contactPerson?: string | null
    contactPhone?: string | null
    contactEmail?: string | null
    industry?: string | null
    notes?: string | null
    status?: $Enums.ClientStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ClientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    prefecture?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumClientStatusFieldUpdateOperationsInput | $Enums.ClientStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    prefecture?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumClientStatusFieldUpdateOperationsInput | $Enums.ClientStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeCreateInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    emergencyContactPerson?: string | null
    emergencyContactPhone?: string | null
    address?: string | null
    postalCode?: string | null
    city?: string | null
    prefecture?: string | null
    position?: string | null
    unitPay?: number | null
    hourlyOvertimePay?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    payrolls?: PayrollCreateNestedManyWithoutEmployeeInput
    siteEmployees?: SiteEmployeeCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    emergencyContactPerson?: string | null
    emergencyContactPhone?: string | null
    address?: string | null
    postalCode?: string | null
    city?: string | null
    prefecture?: string | null
    position?: string | null
    unitPay?: number | null
    hourlyOvertimePay?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    payrolls?: PayrollUncheckedCreateNestedManyWithoutEmployeeInput
    siteEmployees?: SiteEmployeeUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    prefecture?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    unitPay?: NullableIntFieldUpdateOperationsInput | number | null
    hourlyOvertimePay?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    payrolls?: PayrollUpdateManyWithoutEmployeeNestedInput
    siteEmployees?: SiteEmployeeUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    prefecture?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    unitPay?: NullableIntFieldUpdateOperationsInput | number | null
    hourlyOvertimePay?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    payrolls?: PayrollUncheckedUpdateManyWithoutEmployeeNestedInput
    siteEmployees?: SiteEmployeeUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeCreateManyInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    emergencyContactPerson?: string | null
    emergencyContactPhone?: string | null
    address?: string | null
    postalCode?: string | null
    city?: string | null
    prefecture?: string | null
    position?: string | null
    unitPay?: number | null
    hourlyOvertimePay?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type EmployeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    prefecture?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    unitPay?: NullableIntFieldUpdateOperationsInput | number | null
    hourlyOvertimePay?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    prefecture?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    unitPay?: NullableIntFieldUpdateOperationsInput | number | null
    hourlyOvertimePay?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SalesCreateInput = {
    id?: string
    amount: number
    date: Date | string
    description?: string | null
    category?: string | null
    status?: $Enums.SalesStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    client: ClientCreateNestedOneWithoutSalesInput
  }

  export type SalesUncheckedCreateInput = {
    id?: string
    amount: number
    date: Date | string
    description?: string | null
    category?: string | null
    status?: $Enums.SalesStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    clientId: string
  }

  export type SalesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSalesStatusFieldUpdateOperationsInput | $Enums.SalesStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    client?: ClientUpdateOneRequiredWithoutSalesNestedInput
  }

  export type SalesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSalesStatusFieldUpdateOperationsInput | $Enums.SalesStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
  }

  export type SalesCreateManyInput = {
    id?: string
    amount: number
    date: Date | string
    description?: string | null
    category?: string | null
    status?: $Enums.SalesStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    clientId: string
  }

  export type SalesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSalesStatusFieldUpdateOperationsInput | $Enums.SalesStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SalesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSalesStatusFieldUpdateOperationsInput | $Enums.SalesStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
  }

  export type PayrollCreateInput = {
    id?: string
    periodType?: $Enums.PayrollPeriodType
    startDate: Date | string
    endDate: Date | string
    workHours?: number | null
    overtimeHours?: number | null
    siteCount: number
    unitPay: number
    sitePay: number
    hourlyOvertimePay: number
    overtime: number
    totalAmount: number
    status?: $Enums.PayrollStatus
    paymentDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    employee: EmployeeCreateNestedOneWithoutPayrollsInput
  }

  export type PayrollUncheckedCreateInput = {
    id?: string
    employeeId: string
    periodType?: $Enums.PayrollPeriodType
    startDate: Date | string
    endDate: Date | string
    workHours?: number | null
    overtimeHours?: number | null
    siteCount: number
    unitPay: number
    sitePay: number
    hourlyOvertimePay: number
    overtime: number
    totalAmount: number
    status?: $Enums.PayrollStatus
    paymentDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type PayrollUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodType?: EnumPayrollPeriodTypeFieldUpdateOperationsInput | $Enums.PayrollPeriodType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    workHours?: NullableIntFieldUpdateOperationsInput | number | null
    overtimeHours?: NullableIntFieldUpdateOperationsInput | number | null
    siteCount?: IntFieldUpdateOperationsInput | number
    unitPay?: IntFieldUpdateOperationsInput | number
    sitePay?: IntFieldUpdateOperationsInput | number
    hourlyOvertimePay?: IntFieldUpdateOperationsInput | number
    overtime?: IntFieldUpdateOperationsInput | number
    totalAmount?: IntFieldUpdateOperationsInput | number
    status?: EnumPayrollStatusFieldUpdateOperationsInput | $Enums.PayrollStatus
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    employee?: EmployeeUpdateOneRequiredWithoutPayrollsNestedInput
  }

  export type PayrollUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    periodType?: EnumPayrollPeriodTypeFieldUpdateOperationsInput | $Enums.PayrollPeriodType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    workHours?: NullableIntFieldUpdateOperationsInput | number | null
    overtimeHours?: NullableIntFieldUpdateOperationsInput | number | null
    siteCount?: IntFieldUpdateOperationsInput | number
    unitPay?: IntFieldUpdateOperationsInput | number
    sitePay?: IntFieldUpdateOperationsInput | number
    hourlyOvertimePay?: IntFieldUpdateOperationsInput | number
    overtime?: IntFieldUpdateOperationsInput | number
    totalAmount?: IntFieldUpdateOperationsInput | number
    status?: EnumPayrollStatusFieldUpdateOperationsInput | $Enums.PayrollStatus
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PayrollCreateManyInput = {
    id?: string
    employeeId: string
    periodType?: $Enums.PayrollPeriodType
    startDate: Date | string
    endDate: Date | string
    workHours?: number | null
    overtimeHours?: number | null
    siteCount: number
    unitPay: number
    sitePay: number
    hourlyOvertimePay: number
    overtime: number
    totalAmount: number
    status?: $Enums.PayrollStatus
    paymentDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type PayrollUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodType?: EnumPayrollPeriodTypeFieldUpdateOperationsInput | $Enums.PayrollPeriodType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    workHours?: NullableIntFieldUpdateOperationsInput | number | null
    overtimeHours?: NullableIntFieldUpdateOperationsInput | number | null
    siteCount?: IntFieldUpdateOperationsInput | number
    unitPay?: IntFieldUpdateOperationsInput | number
    sitePay?: IntFieldUpdateOperationsInput | number
    hourlyOvertimePay?: IntFieldUpdateOperationsInput | number
    overtime?: IntFieldUpdateOperationsInput | number
    totalAmount?: IntFieldUpdateOperationsInput | number
    status?: EnumPayrollStatusFieldUpdateOperationsInput | $Enums.PayrollStatus
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PayrollUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    periodType?: EnumPayrollPeriodTypeFieldUpdateOperationsInput | $Enums.PayrollPeriodType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    workHours?: NullableIntFieldUpdateOperationsInput | number | null
    overtimeHours?: NullableIntFieldUpdateOperationsInput | number | null
    siteCount?: IntFieldUpdateOperationsInput | number
    unitPay?: IntFieldUpdateOperationsInput | number
    sitePay?: IntFieldUpdateOperationsInput | number
    hourlyOvertimePay?: IntFieldUpdateOperationsInput | number
    overtime?: IntFieldUpdateOperationsInput | number
    totalAmount?: IntFieldUpdateOperationsInput | number
    status?: EnumPayrollStatusFieldUpdateOperationsInput | $Enums.PayrollStatus
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SiteCreateInput = {
    id?: string
    name: string
    contractor: string
    postalCode?: string | null
    prefecture?: string | null
    city?: string | null
    address?: string | null
    date: Date | string
    startTime: Date | string
    employeeNames?: string | null
    notes?: string | null
    status?: $Enums.SiteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    siteEmployees?: SiteEmployeeCreateNestedManyWithoutSiteInput
  }

  export type SiteUncheckedCreateInput = {
    id?: string
    name: string
    contractor: string
    postalCode?: string | null
    prefecture?: string | null
    city?: string | null
    address?: string | null
    date: Date | string
    startTime: Date | string
    employeeNames?: string | null
    notes?: string | null
    status?: $Enums.SiteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    siteEmployees?: SiteEmployeeUncheckedCreateNestedManyWithoutSiteInput
  }

  export type SiteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contractor?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    prefecture?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    employeeNames?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSiteStatusFieldUpdateOperationsInput | $Enums.SiteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    siteEmployees?: SiteEmployeeUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contractor?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    prefecture?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    employeeNames?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSiteStatusFieldUpdateOperationsInput | $Enums.SiteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    siteEmployees?: SiteEmployeeUncheckedUpdateManyWithoutSiteNestedInput
  }

  export type SiteCreateManyInput = {
    id?: string
    name: string
    contractor: string
    postalCode?: string | null
    prefecture?: string | null
    city?: string | null
    address?: string | null
    date: Date | string
    startTime: Date | string
    employeeNames?: string | null
    notes?: string | null
    status?: $Enums.SiteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type SiteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contractor?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    prefecture?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    employeeNames?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSiteStatusFieldUpdateOperationsInput | $Enums.SiteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SiteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contractor?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    prefecture?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    employeeNames?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSiteStatusFieldUpdateOperationsInput | $Enums.SiteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SiteEmployeeCreateInput = {
    id?: string
    createdAt?: Date | string
    userId: string
    site: SiteCreateNestedOneWithoutSiteEmployeesInput
    employee: EmployeeCreateNestedOneWithoutSiteEmployeesInput
  }

  export type SiteEmployeeUncheckedCreateInput = {
    id?: string
    siteId: string
    employeeId: string
    createdAt?: Date | string
    userId: string
  }

  export type SiteEmployeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    site?: SiteUpdateOneRequiredWithoutSiteEmployeesNestedInput
    employee?: EmployeeUpdateOneRequiredWithoutSiteEmployeesNestedInput
  }

  export type SiteEmployeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SiteEmployeeCreateManyInput = {
    id?: string
    siteId: string
    employeeId: string
    createdAt?: Date | string
    userId: string
  }

  export type SiteEmployeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SiteEmployeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
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

  export type EnumClientStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ClientStatus | EnumClientStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ClientStatus[] | ListEnumClientStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClientStatus[] | ListEnumClientStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumClientStatusFilter<$PrismaModel> | $Enums.ClientStatus
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

  export type SalesListRelationFilter = {
    every?: SalesWhereInput
    some?: SalesWhereInput
    none?: SalesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SalesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    companyName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    postalCode?: SortOrder
    city?: SortOrder
    prefecture?: SortOrder
    contactPerson?: SortOrder
    contactPhone?: SortOrder
    contactEmail?: SortOrder
    industry?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    companyName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    postalCode?: SortOrder
    city?: SortOrder
    prefecture?: SortOrder
    contactPerson?: SortOrder
    contactPhone?: SortOrder
    contactEmail?: SortOrder
    industry?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    companyName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    postalCode?: SortOrder
    city?: SortOrder
    prefecture?: SortOrder
    contactPerson?: SortOrder
    contactPhone?: SortOrder
    contactEmail?: SortOrder
    industry?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
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

  export type EnumClientStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClientStatus | EnumClientStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ClientStatus[] | ListEnumClientStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClientStatus[] | ListEnumClientStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumClientStatusWithAggregatesFilter<$PrismaModel> | $Enums.ClientStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumClientStatusFilter<$PrismaModel>
    _max?: NestedEnumClientStatusFilter<$PrismaModel>
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

  export type PayrollListRelationFilter = {
    every?: PayrollWhereInput
    some?: PayrollWhereInput
    none?: PayrollWhereInput
  }

  export type SiteEmployeeListRelationFilter = {
    every?: SiteEmployeeWhereInput
    some?: SiteEmployeeWhereInput
    none?: SiteEmployeeWhereInput
  }

  export type PayrollOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SiteEmployeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    emergencyContactPerson?: SortOrder
    emergencyContactPhone?: SortOrder
    address?: SortOrder
    postalCode?: SortOrder
    city?: SortOrder
    prefecture?: SortOrder
    position?: SortOrder
    unitPay?: SortOrder
    hourlyOvertimePay?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type EmployeeAvgOrderByAggregateInput = {
    unitPay?: SortOrder
    hourlyOvertimePay?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    emergencyContactPerson?: SortOrder
    emergencyContactPhone?: SortOrder
    address?: SortOrder
    postalCode?: SortOrder
    city?: SortOrder
    prefecture?: SortOrder
    position?: SortOrder
    unitPay?: SortOrder
    hourlyOvertimePay?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    emergencyContactPerson?: SortOrder
    emergencyContactPhone?: SortOrder
    address?: SortOrder
    postalCode?: SortOrder
    city?: SortOrder
    prefecture?: SortOrder
    position?: SortOrder
    unitPay?: SortOrder
    hourlyOvertimePay?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type EmployeeSumOrderByAggregateInput = {
    unitPay?: SortOrder
    hourlyOvertimePay?: SortOrder
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

  export type EnumSalesStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SalesStatus | EnumSalesStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SalesStatus[] | ListEnumSalesStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SalesStatus[] | ListEnumSalesStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSalesStatusFilter<$PrismaModel> | $Enums.SalesStatus
  }

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type SalesCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    description?: SortOrder
    category?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    clientId?: SortOrder
  }

  export type SalesAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type SalesMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    description?: SortOrder
    category?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    clientId?: SortOrder
  }

  export type SalesMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    description?: SortOrder
    category?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    clientId?: SortOrder
  }

  export type SalesSumOrderByAggregateInput = {
    amount?: SortOrder
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

  export type EnumSalesStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SalesStatus | EnumSalesStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SalesStatus[] | ListEnumSalesStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SalesStatus[] | ListEnumSalesStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSalesStatusWithAggregatesFilter<$PrismaModel> | $Enums.SalesStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSalesStatusFilter<$PrismaModel>
    _max?: NestedEnumSalesStatusFilter<$PrismaModel>
  }

  export type EnumPayrollPeriodTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PayrollPeriodType | EnumPayrollPeriodTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PayrollPeriodType[] | ListEnumPayrollPeriodTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PayrollPeriodType[] | ListEnumPayrollPeriodTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPayrollPeriodTypeFilter<$PrismaModel> | $Enums.PayrollPeriodType
  }

  export type EnumPayrollStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PayrollStatus | EnumPayrollStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PayrollStatus[] | ListEnumPayrollStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PayrollStatus[] | ListEnumPayrollStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPayrollStatusFilter<$PrismaModel> | $Enums.PayrollStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EmployeeScalarRelationFilter = {
    is?: EmployeeWhereInput
    isNot?: EmployeeWhereInput
  }

  export type PayrollCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    periodType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    workHours?: SortOrder
    overtimeHours?: SortOrder
    siteCount?: SortOrder
    unitPay?: SortOrder
    sitePay?: SortOrder
    hourlyOvertimePay?: SortOrder
    overtime?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    paymentDate?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type PayrollAvgOrderByAggregateInput = {
    workHours?: SortOrder
    overtimeHours?: SortOrder
    siteCount?: SortOrder
    unitPay?: SortOrder
    sitePay?: SortOrder
    hourlyOvertimePay?: SortOrder
    overtime?: SortOrder
    totalAmount?: SortOrder
  }

  export type PayrollMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    periodType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    workHours?: SortOrder
    overtimeHours?: SortOrder
    siteCount?: SortOrder
    unitPay?: SortOrder
    sitePay?: SortOrder
    hourlyOvertimePay?: SortOrder
    overtime?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    paymentDate?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type PayrollMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    periodType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    workHours?: SortOrder
    overtimeHours?: SortOrder
    siteCount?: SortOrder
    unitPay?: SortOrder
    sitePay?: SortOrder
    hourlyOvertimePay?: SortOrder
    overtime?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    paymentDate?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type PayrollSumOrderByAggregateInput = {
    workHours?: SortOrder
    overtimeHours?: SortOrder
    siteCount?: SortOrder
    unitPay?: SortOrder
    sitePay?: SortOrder
    hourlyOvertimePay?: SortOrder
    overtime?: SortOrder
    totalAmount?: SortOrder
  }

  export type EnumPayrollPeriodTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PayrollPeriodType | EnumPayrollPeriodTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PayrollPeriodType[] | ListEnumPayrollPeriodTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PayrollPeriodType[] | ListEnumPayrollPeriodTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPayrollPeriodTypeWithAggregatesFilter<$PrismaModel> | $Enums.PayrollPeriodType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPayrollPeriodTypeFilter<$PrismaModel>
    _max?: NestedEnumPayrollPeriodTypeFilter<$PrismaModel>
  }

  export type EnumPayrollStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PayrollStatus | EnumPayrollStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PayrollStatus[] | ListEnumPayrollStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PayrollStatus[] | ListEnumPayrollStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPayrollStatusWithAggregatesFilter<$PrismaModel> | $Enums.PayrollStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPayrollStatusFilter<$PrismaModel>
    _max?: NestedEnumPayrollStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumSiteStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SiteStatus | EnumSiteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SiteStatus[] | ListEnumSiteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SiteStatus[] | ListEnumSiteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSiteStatusFilter<$PrismaModel> | $Enums.SiteStatus
  }

  export type SiteCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    contractor?: SortOrder
    postalCode?: SortOrder
    prefecture?: SortOrder
    city?: SortOrder
    address?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    employeeNames?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type SiteMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    contractor?: SortOrder
    postalCode?: SortOrder
    prefecture?: SortOrder
    city?: SortOrder
    address?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    employeeNames?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type SiteMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    contractor?: SortOrder
    postalCode?: SortOrder
    prefecture?: SortOrder
    city?: SortOrder
    address?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    employeeNames?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type EnumSiteStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SiteStatus | EnumSiteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SiteStatus[] | ListEnumSiteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SiteStatus[] | ListEnumSiteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSiteStatusWithAggregatesFilter<$PrismaModel> | $Enums.SiteStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSiteStatusFilter<$PrismaModel>
    _max?: NestedEnumSiteStatusFilter<$PrismaModel>
  }

  export type SiteScalarRelationFilter = {
    is?: SiteWhereInput
    isNot?: SiteWhereInput
  }

  export type SiteEmployeeSiteIdEmployeeIdCompoundUniqueInput = {
    siteId: string
    employeeId: string
  }

  export type SiteEmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    siteId?: SortOrder
    employeeId?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type SiteEmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    siteId?: SortOrder
    employeeId?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type SiteEmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    siteId?: SortOrder
    employeeId?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type SalesCreateNestedManyWithoutClientInput = {
    create?: XOR<SalesCreateWithoutClientInput, SalesUncheckedCreateWithoutClientInput> | SalesCreateWithoutClientInput[] | SalesUncheckedCreateWithoutClientInput[]
    connectOrCreate?: SalesCreateOrConnectWithoutClientInput | SalesCreateOrConnectWithoutClientInput[]
    createMany?: SalesCreateManyClientInputEnvelope
    connect?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
  }

  export type SalesUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<SalesCreateWithoutClientInput, SalesUncheckedCreateWithoutClientInput> | SalesCreateWithoutClientInput[] | SalesUncheckedCreateWithoutClientInput[]
    connectOrCreate?: SalesCreateOrConnectWithoutClientInput | SalesCreateOrConnectWithoutClientInput[]
    createMany?: SalesCreateManyClientInputEnvelope
    connect?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumClientStatusFieldUpdateOperationsInput = {
    set?: $Enums.ClientStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SalesUpdateManyWithoutClientNestedInput = {
    create?: XOR<SalesCreateWithoutClientInput, SalesUncheckedCreateWithoutClientInput> | SalesCreateWithoutClientInput[] | SalesUncheckedCreateWithoutClientInput[]
    connectOrCreate?: SalesCreateOrConnectWithoutClientInput | SalesCreateOrConnectWithoutClientInput[]
    upsert?: SalesUpsertWithWhereUniqueWithoutClientInput | SalesUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: SalesCreateManyClientInputEnvelope
    set?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
    disconnect?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
    delete?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
    connect?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
    update?: SalesUpdateWithWhereUniqueWithoutClientInput | SalesUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: SalesUpdateManyWithWhereWithoutClientInput | SalesUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: SalesScalarWhereInput | SalesScalarWhereInput[]
  }

  export type SalesUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<SalesCreateWithoutClientInput, SalesUncheckedCreateWithoutClientInput> | SalesCreateWithoutClientInput[] | SalesUncheckedCreateWithoutClientInput[]
    connectOrCreate?: SalesCreateOrConnectWithoutClientInput | SalesCreateOrConnectWithoutClientInput[]
    upsert?: SalesUpsertWithWhereUniqueWithoutClientInput | SalesUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: SalesCreateManyClientInputEnvelope
    set?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
    disconnect?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
    delete?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
    connect?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
    update?: SalesUpdateWithWhereUniqueWithoutClientInput | SalesUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: SalesUpdateManyWithWhereWithoutClientInput | SalesUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: SalesScalarWhereInput | SalesScalarWhereInput[]
  }

  export type PayrollCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<PayrollCreateWithoutEmployeeInput, PayrollUncheckedCreateWithoutEmployeeInput> | PayrollCreateWithoutEmployeeInput[] | PayrollUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: PayrollCreateOrConnectWithoutEmployeeInput | PayrollCreateOrConnectWithoutEmployeeInput[]
    createMany?: PayrollCreateManyEmployeeInputEnvelope
    connect?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
  }

  export type SiteEmployeeCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<SiteEmployeeCreateWithoutEmployeeInput, SiteEmployeeUncheckedCreateWithoutEmployeeInput> | SiteEmployeeCreateWithoutEmployeeInput[] | SiteEmployeeUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: SiteEmployeeCreateOrConnectWithoutEmployeeInput | SiteEmployeeCreateOrConnectWithoutEmployeeInput[]
    createMany?: SiteEmployeeCreateManyEmployeeInputEnvelope
    connect?: SiteEmployeeWhereUniqueInput | SiteEmployeeWhereUniqueInput[]
  }

  export type PayrollUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<PayrollCreateWithoutEmployeeInput, PayrollUncheckedCreateWithoutEmployeeInput> | PayrollCreateWithoutEmployeeInput[] | PayrollUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: PayrollCreateOrConnectWithoutEmployeeInput | PayrollCreateOrConnectWithoutEmployeeInput[]
    createMany?: PayrollCreateManyEmployeeInputEnvelope
    connect?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
  }

  export type SiteEmployeeUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<SiteEmployeeCreateWithoutEmployeeInput, SiteEmployeeUncheckedCreateWithoutEmployeeInput> | SiteEmployeeCreateWithoutEmployeeInput[] | SiteEmployeeUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: SiteEmployeeCreateOrConnectWithoutEmployeeInput | SiteEmployeeCreateOrConnectWithoutEmployeeInput[]
    createMany?: SiteEmployeeCreateManyEmployeeInputEnvelope
    connect?: SiteEmployeeWhereUniqueInput | SiteEmployeeWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PayrollUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<PayrollCreateWithoutEmployeeInput, PayrollUncheckedCreateWithoutEmployeeInput> | PayrollCreateWithoutEmployeeInput[] | PayrollUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: PayrollCreateOrConnectWithoutEmployeeInput | PayrollCreateOrConnectWithoutEmployeeInput[]
    upsert?: PayrollUpsertWithWhereUniqueWithoutEmployeeInput | PayrollUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: PayrollCreateManyEmployeeInputEnvelope
    set?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
    disconnect?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
    delete?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
    connect?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
    update?: PayrollUpdateWithWhereUniqueWithoutEmployeeInput | PayrollUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: PayrollUpdateManyWithWhereWithoutEmployeeInput | PayrollUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: PayrollScalarWhereInput | PayrollScalarWhereInput[]
  }

  export type SiteEmployeeUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<SiteEmployeeCreateWithoutEmployeeInput, SiteEmployeeUncheckedCreateWithoutEmployeeInput> | SiteEmployeeCreateWithoutEmployeeInput[] | SiteEmployeeUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: SiteEmployeeCreateOrConnectWithoutEmployeeInput | SiteEmployeeCreateOrConnectWithoutEmployeeInput[]
    upsert?: SiteEmployeeUpsertWithWhereUniqueWithoutEmployeeInput | SiteEmployeeUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: SiteEmployeeCreateManyEmployeeInputEnvelope
    set?: SiteEmployeeWhereUniqueInput | SiteEmployeeWhereUniqueInput[]
    disconnect?: SiteEmployeeWhereUniqueInput | SiteEmployeeWhereUniqueInput[]
    delete?: SiteEmployeeWhereUniqueInput | SiteEmployeeWhereUniqueInput[]
    connect?: SiteEmployeeWhereUniqueInput | SiteEmployeeWhereUniqueInput[]
    update?: SiteEmployeeUpdateWithWhereUniqueWithoutEmployeeInput | SiteEmployeeUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: SiteEmployeeUpdateManyWithWhereWithoutEmployeeInput | SiteEmployeeUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: SiteEmployeeScalarWhereInput | SiteEmployeeScalarWhereInput[]
  }

  export type PayrollUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<PayrollCreateWithoutEmployeeInput, PayrollUncheckedCreateWithoutEmployeeInput> | PayrollCreateWithoutEmployeeInput[] | PayrollUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: PayrollCreateOrConnectWithoutEmployeeInput | PayrollCreateOrConnectWithoutEmployeeInput[]
    upsert?: PayrollUpsertWithWhereUniqueWithoutEmployeeInput | PayrollUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: PayrollCreateManyEmployeeInputEnvelope
    set?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
    disconnect?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
    delete?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
    connect?: PayrollWhereUniqueInput | PayrollWhereUniqueInput[]
    update?: PayrollUpdateWithWhereUniqueWithoutEmployeeInput | PayrollUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: PayrollUpdateManyWithWhereWithoutEmployeeInput | PayrollUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: PayrollScalarWhereInput | PayrollScalarWhereInput[]
  }

  export type SiteEmployeeUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<SiteEmployeeCreateWithoutEmployeeInput, SiteEmployeeUncheckedCreateWithoutEmployeeInput> | SiteEmployeeCreateWithoutEmployeeInput[] | SiteEmployeeUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: SiteEmployeeCreateOrConnectWithoutEmployeeInput | SiteEmployeeCreateOrConnectWithoutEmployeeInput[]
    upsert?: SiteEmployeeUpsertWithWhereUniqueWithoutEmployeeInput | SiteEmployeeUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: SiteEmployeeCreateManyEmployeeInputEnvelope
    set?: SiteEmployeeWhereUniqueInput | SiteEmployeeWhereUniqueInput[]
    disconnect?: SiteEmployeeWhereUniqueInput | SiteEmployeeWhereUniqueInput[]
    delete?: SiteEmployeeWhereUniqueInput | SiteEmployeeWhereUniqueInput[]
    connect?: SiteEmployeeWhereUniqueInput | SiteEmployeeWhereUniqueInput[]
    update?: SiteEmployeeUpdateWithWhereUniqueWithoutEmployeeInput | SiteEmployeeUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: SiteEmployeeUpdateManyWithWhereWithoutEmployeeInput | SiteEmployeeUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: SiteEmployeeScalarWhereInput | SiteEmployeeScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutSalesInput = {
    create?: XOR<ClientCreateWithoutSalesInput, ClientUncheckedCreateWithoutSalesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutSalesInput
    connect?: ClientWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumSalesStatusFieldUpdateOperationsInput = {
    set?: $Enums.SalesStatus
  }

  export type ClientUpdateOneRequiredWithoutSalesNestedInput = {
    create?: XOR<ClientCreateWithoutSalesInput, ClientUncheckedCreateWithoutSalesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutSalesInput
    upsert?: ClientUpsertWithoutSalesInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutSalesInput, ClientUpdateWithoutSalesInput>, ClientUncheckedUpdateWithoutSalesInput>
  }

  export type EmployeeCreateNestedOneWithoutPayrollsInput = {
    create?: XOR<EmployeeCreateWithoutPayrollsInput, EmployeeUncheckedCreateWithoutPayrollsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutPayrollsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EnumPayrollPeriodTypeFieldUpdateOperationsInput = {
    set?: $Enums.PayrollPeriodType
  }

  export type EnumPayrollStatusFieldUpdateOperationsInput = {
    set?: $Enums.PayrollStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EmployeeUpdateOneRequiredWithoutPayrollsNestedInput = {
    create?: XOR<EmployeeCreateWithoutPayrollsInput, EmployeeUncheckedCreateWithoutPayrollsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutPayrollsInput
    upsert?: EmployeeUpsertWithoutPayrollsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutPayrollsInput, EmployeeUpdateWithoutPayrollsInput>, EmployeeUncheckedUpdateWithoutPayrollsInput>
  }

  export type SiteEmployeeCreateNestedManyWithoutSiteInput = {
    create?: XOR<SiteEmployeeCreateWithoutSiteInput, SiteEmployeeUncheckedCreateWithoutSiteInput> | SiteEmployeeCreateWithoutSiteInput[] | SiteEmployeeUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: SiteEmployeeCreateOrConnectWithoutSiteInput | SiteEmployeeCreateOrConnectWithoutSiteInput[]
    createMany?: SiteEmployeeCreateManySiteInputEnvelope
    connect?: SiteEmployeeWhereUniqueInput | SiteEmployeeWhereUniqueInput[]
  }

  export type SiteEmployeeUncheckedCreateNestedManyWithoutSiteInput = {
    create?: XOR<SiteEmployeeCreateWithoutSiteInput, SiteEmployeeUncheckedCreateWithoutSiteInput> | SiteEmployeeCreateWithoutSiteInput[] | SiteEmployeeUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: SiteEmployeeCreateOrConnectWithoutSiteInput | SiteEmployeeCreateOrConnectWithoutSiteInput[]
    createMany?: SiteEmployeeCreateManySiteInputEnvelope
    connect?: SiteEmployeeWhereUniqueInput | SiteEmployeeWhereUniqueInput[]
  }

  export type EnumSiteStatusFieldUpdateOperationsInput = {
    set?: $Enums.SiteStatus
  }

  export type SiteEmployeeUpdateManyWithoutSiteNestedInput = {
    create?: XOR<SiteEmployeeCreateWithoutSiteInput, SiteEmployeeUncheckedCreateWithoutSiteInput> | SiteEmployeeCreateWithoutSiteInput[] | SiteEmployeeUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: SiteEmployeeCreateOrConnectWithoutSiteInput | SiteEmployeeCreateOrConnectWithoutSiteInput[]
    upsert?: SiteEmployeeUpsertWithWhereUniqueWithoutSiteInput | SiteEmployeeUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: SiteEmployeeCreateManySiteInputEnvelope
    set?: SiteEmployeeWhereUniqueInput | SiteEmployeeWhereUniqueInput[]
    disconnect?: SiteEmployeeWhereUniqueInput | SiteEmployeeWhereUniqueInput[]
    delete?: SiteEmployeeWhereUniqueInput | SiteEmployeeWhereUniqueInput[]
    connect?: SiteEmployeeWhereUniqueInput | SiteEmployeeWhereUniqueInput[]
    update?: SiteEmployeeUpdateWithWhereUniqueWithoutSiteInput | SiteEmployeeUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: SiteEmployeeUpdateManyWithWhereWithoutSiteInput | SiteEmployeeUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: SiteEmployeeScalarWhereInput | SiteEmployeeScalarWhereInput[]
  }

  export type SiteEmployeeUncheckedUpdateManyWithoutSiteNestedInput = {
    create?: XOR<SiteEmployeeCreateWithoutSiteInput, SiteEmployeeUncheckedCreateWithoutSiteInput> | SiteEmployeeCreateWithoutSiteInput[] | SiteEmployeeUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: SiteEmployeeCreateOrConnectWithoutSiteInput | SiteEmployeeCreateOrConnectWithoutSiteInput[]
    upsert?: SiteEmployeeUpsertWithWhereUniqueWithoutSiteInput | SiteEmployeeUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: SiteEmployeeCreateManySiteInputEnvelope
    set?: SiteEmployeeWhereUniqueInput | SiteEmployeeWhereUniqueInput[]
    disconnect?: SiteEmployeeWhereUniqueInput | SiteEmployeeWhereUniqueInput[]
    delete?: SiteEmployeeWhereUniqueInput | SiteEmployeeWhereUniqueInput[]
    connect?: SiteEmployeeWhereUniqueInput | SiteEmployeeWhereUniqueInput[]
    update?: SiteEmployeeUpdateWithWhereUniqueWithoutSiteInput | SiteEmployeeUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: SiteEmployeeUpdateManyWithWhereWithoutSiteInput | SiteEmployeeUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: SiteEmployeeScalarWhereInput | SiteEmployeeScalarWhereInput[]
  }

  export type SiteCreateNestedOneWithoutSiteEmployeesInput = {
    create?: XOR<SiteCreateWithoutSiteEmployeesInput, SiteUncheckedCreateWithoutSiteEmployeesInput>
    connectOrCreate?: SiteCreateOrConnectWithoutSiteEmployeesInput
    connect?: SiteWhereUniqueInput
  }

  export type EmployeeCreateNestedOneWithoutSiteEmployeesInput = {
    create?: XOR<EmployeeCreateWithoutSiteEmployeesInput, EmployeeUncheckedCreateWithoutSiteEmployeesInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutSiteEmployeesInput
    connect?: EmployeeWhereUniqueInput
  }

  export type SiteUpdateOneRequiredWithoutSiteEmployeesNestedInput = {
    create?: XOR<SiteCreateWithoutSiteEmployeesInput, SiteUncheckedCreateWithoutSiteEmployeesInput>
    connectOrCreate?: SiteCreateOrConnectWithoutSiteEmployeesInput
    upsert?: SiteUpsertWithoutSiteEmployeesInput
    connect?: SiteWhereUniqueInput
    update?: XOR<XOR<SiteUpdateToOneWithWhereWithoutSiteEmployeesInput, SiteUpdateWithoutSiteEmployeesInput>, SiteUncheckedUpdateWithoutSiteEmployeesInput>
  }

  export type EmployeeUpdateOneRequiredWithoutSiteEmployeesNestedInput = {
    create?: XOR<EmployeeCreateWithoutSiteEmployeesInput, EmployeeUncheckedCreateWithoutSiteEmployeesInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutSiteEmployeesInput
    upsert?: EmployeeUpsertWithoutSiteEmployeesInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutSiteEmployeesInput, EmployeeUpdateWithoutSiteEmployeesInput>, EmployeeUncheckedUpdateWithoutSiteEmployeesInput>
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

  export type NestedEnumClientStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ClientStatus | EnumClientStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ClientStatus[] | ListEnumClientStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClientStatus[] | ListEnumClientStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumClientStatusFilter<$PrismaModel> | $Enums.ClientStatus
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

  export type NestedEnumClientStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClientStatus | EnumClientStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ClientStatus[] | ListEnumClientStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClientStatus[] | ListEnumClientStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumClientStatusWithAggregatesFilter<$PrismaModel> | $Enums.ClientStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumClientStatusFilter<$PrismaModel>
    _max?: NestedEnumClientStatusFilter<$PrismaModel>
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

  export type NestedEnumSalesStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SalesStatus | EnumSalesStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SalesStatus[] | ListEnumSalesStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SalesStatus[] | ListEnumSalesStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSalesStatusFilter<$PrismaModel> | $Enums.SalesStatus
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

  export type NestedEnumSalesStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SalesStatus | EnumSalesStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SalesStatus[] | ListEnumSalesStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SalesStatus[] | ListEnumSalesStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSalesStatusWithAggregatesFilter<$PrismaModel> | $Enums.SalesStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSalesStatusFilter<$PrismaModel>
    _max?: NestedEnumSalesStatusFilter<$PrismaModel>
  }

  export type NestedEnumPayrollPeriodTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PayrollPeriodType | EnumPayrollPeriodTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PayrollPeriodType[] | ListEnumPayrollPeriodTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PayrollPeriodType[] | ListEnumPayrollPeriodTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPayrollPeriodTypeFilter<$PrismaModel> | $Enums.PayrollPeriodType
  }

  export type NestedEnumPayrollStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PayrollStatus | EnumPayrollStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PayrollStatus[] | ListEnumPayrollStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PayrollStatus[] | ListEnumPayrollStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPayrollStatusFilter<$PrismaModel> | $Enums.PayrollStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumPayrollPeriodTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PayrollPeriodType | EnumPayrollPeriodTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PayrollPeriodType[] | ListEnumPayrollPeriodTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PayrollPeriodType[] | ListEnumPayrollPeriodTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPayrollPeriodTypeWithAggregatesFilter<$PrismaModel> | $Enums.PayrollPeriodType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPayrollPeriodTypeFilter<$PrismaModel>
    _max?: NestedEnumPayrollPeriodTypeFilter<$PrismaModel>
  }

  export type NestedEnumPayrollStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PayrollStatus | EnumPayrollStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PayrollStatus[] | ListEnumPayrollStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PayrollStatus[] | ListEnumPayrollStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPayrollStatusWithAggregatesFilter<$PrismaModel> | $Enums.PayrollStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPayrollStatusFilter<$PrismaModel>
    _max?: NestedEnumPayrollStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumSiteStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SiteStatus | EnumSiteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SiteStatus[] | ListEnumSiteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SiteStatus[] | ListEnumSiteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSiteStatusFilter<$PrismaModel> | $Enums.SiteStatus
  }

  export type NestedEnumSiteStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SiteStatus | EnumSiteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SiteStatus[] | ListEnumSiteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SiteStatus[] | ListEnumSiteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSiteStatusWithAggregatesFilter<$PrismaModel> | $Enums.SiteStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSiteStatusFilter<$PrismaModel>
    _max?: NestedEnumSiteStatusFilter<$PrismaModel>
  }

  export type SalesCreateWithoutClientInput = {
    id?: string
    amount: number
    date: Date | string
    description?: string | null
    category?: string | null
    status?: $Enums.SalesStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type SalesUncheckedCreateWithoutClientInput = {
    id?: string
    amount: number
    date: Date | string
    description?: string | null
    category?: string | null
    status?: $Enums.SalesStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type SalesCreateOrConnectWithoutClientInput = {
    where: SalesWhereUniqueInput
    create: XOR<SalesCreateWithoutClientInput, SalesUncheckedCreateWithoutClientInput>
  }

  export type SalesCreateManyClientInputEnvelope = {
    data: SalesCreateManyClientInput | SalesCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type SalesUpsertWithWhereUniqueWithoutClientInput = {
    where: SalesWhereUniqueInput
    update: XOR<SalesUpdateWithoutClientInput, SalesUncheckedUpdateWithoutClientInput>
    create: XOR<SalesCreateWithoutClientInput, SalesUncheckedCreateWithoutClientInput>
  }

  export type SalesUpdateWithWhereUniqueWithoutClientInput = {
    where: SalesWhereUniqueInput
    data: XOR<SalesUpdateWithoutClientInput, SalesUncheckedUpdateWithoutClientInput>
  }

  export type SalesUpdateManyWithWhereWithoutClientInput = {
    where: SalesScalarWhereInput
    data: XOR<SalesUpdateManyMutationInput, SalesUncheckedUpdateManyWithoutClientInput>
  }

  export type SalesScalarWhereInput = {
    AND?: SalesScalarWhereInput | SalesScalarWhereInput[]
    OR?: SalesScalarWhereInput[]
    NOT?: SalesScalarWhereInput | SalesScalarWhereInput[]
    id?: StringFilter<"Sales"> | string
    amount?: IntFilter<"Sales"> | number
    date?: DateTimeFilter<"Sales"> | Date | string
    description?: StringNullableFilter<"Sales"> | string | null
    category?: StringNullableFilter<"Sales"> | string | null
    status?: EnumSalesStatusFilter<"Sales"> | $Enums.SalesStatus
    createdAt?: DateTimeFilter<"Sales"> | Date | string
    updatedAt?: DateTimeFilter<"Sales"> | Date | string
    userId?: StringFilter<"Sales"> | string
    clientId?: StringFilter<"Sales"> | string
  }

  export type PayrollCreateWithoutEmployeeInput = {
    id?: string
    periodType?: $Enums.PayrollPeriodType
    startDate: Date | string
    endDate: Date | string
    workHours?: number | null
    overtimeHours?: number | null
    siteCount: number
    unitPay: number
    sitePay: number
    hourlyOvertimePay: number
    overtime: number
    totalAmount: number
    status?: $Enums.PayrollStatus
    paymentDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type PayrollUncheckedCreateWithoutEmployeeInput = {
    id?: string
    periodType?: $Enums.PayrollPeriodType
    startDate: Date | string
    endDate: Date | string
    workHours?: number | null
    overtimeHours?: number | null
    siteCount: number
    unitPay: number
    sitePay: number
    hourlyOvertimePay: number
    overtime: number
    totalAmount: number
    status?: $Enums.PayrollStatus
    paymentDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type PayrollCreateOrConnectWithoutEmployeeInput = {
    where: PayrollWhereUniqueInput
    create: XOR<PayrollCreateWithoutEmployeeInput, PayrollUncheckedCreateWithoutEmployeeInput>
  }

  export type PayrollCreateManyEmployeeInputEnvelope = {
    data: PayrollCreateManyEmployeeInput | PayrollCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type SiteEmployeeCreateWithoutEmployeeInput = {
    id?: string
    createdAt?: Date | string
    userId: string
    site: SiteCreateNestedOneWithoutSiteEmployeesInput
  }

  export type SiteEmployeeUncheckedCreateWithoutEmployeeInput = {
    id?: string
    siteId: string
    createdAt?: Date | string
    userId: string
  }

  export type SiteEmployeeCreateOrConnectWithoutEmployeeInput = {
    where: SiteEmployeeWhereUniqueInput
    create: XOR<SiteEmployeeCreateWithoutEmployeeInput, SiteEmployeeUncheckedCreateWithoutEmployeeInput>
  }

  export type SiteEmployeeCreateManyEmployeeInputEnvelope = {
    data: SiteEmployeeCreateManyEmployeeInput | SiteEmployeeCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type PayrollUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: PayrollWhereUniqueInput
    update: XOR<PayrollUpdateWithoutEmployeeInput, PayrollUncheckedUpdateWithoutEmployeeInput>
    create: XOR<PayrollCreateWithoutEmployeeInput, PayrollUncheckedCreateWithoutEmployeeInput>
  }

  export type PayrollUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: PayrollWhereUniqueInput
    data: XOR<PayrollUpdateWithoutEmployeeInput, PayrollUncheckedUpdateWithoutEmployeeInput>
  }

  export type PayrollUpdateManyWithWhereWithoutEmployeeInput = {
    where: PayrollScalarWhereInput
    data: XOR<PayrollUpdateManyMutationInput, PayrollUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type PayrollScalarWhereInput = {
    AND?: PayrollScalarWhereInput | PayrollScalarWhereInput[]
    OR?: PayrollScalarWhereInput[]
    NOT?: PayrollScalarWhereInput | PayrollScalarWhereInput[]
    id?: StringFilter<"Payroll"> | string
    employeeId?: StringFilter<"Payroll"> | string
    periodType?: EnumPayrollPeriodTypeFilter<"Payroll"> | $Enums.PayrollPeriodType
    startDate?: DateTimeFilter<"Payroll"> | Date | string
    endDate?: DateTimeFilter<"Payroll"> | Date | string
    workHours?: IntNullableFilter<"Payroll"> | number | null
    overtimeHours?: IntNullableFilter<"Payroll"> | number | null
    siteCount?: IntFilter<"Payroll"> | number
    unitPay?: IntFilter<"Payroll"> | number
    sitePay?: IntFilter<"Payroll"> | number
    hourlyOvertimePay?: IntFilter<"Payroll"> | number
    overtime?: IntFilter<"Payroll"> | number
    totalAmount?: IntFilter<"Payroll"> | number
    status?: EnumPayrollStatusFilter<"Payroll"> | $Enums.PayrollStatus
    paymentDate?: DateTimeNullableFilter<"Payroll"> | Date | string | null
    notes?: StringNullableFilter<"Payroll"> | string | null
    createdAt?: DateTimeFilter<"Payroll"> | Date | string
    updatedAt?: DateTimeFilter<"Payroll"> | Date | string
    userId?: StringFilter<"Payroll"> | string
  }

  export type SiteEmployeeUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: SiteEmployeeWhereUniqueInput
    update: XOR<SiteEmployeeUpdateWithoutEmployeeInput, SiteEmployeeUncheckedUpdateWithoutEmployeeInput>
    create: XOR<SiteEmployeeCreateWithoutEmployeeInput, SiteEmployeeUncheckedCreateWithoutEmployeeInput>
  }

  export type SiteEmployeeUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: SiteEmployeeWhereUniqueInput
    data: XOR<SiteEmployeeUpdateWithoutEmployeeInput, SiteEmployeeUncheckedUpdateWithoutEmployeeInput>
  }

  export type SiteEmployeeUpdateManyWithWhereWithoutEmployeeInput = {
    where: SiteEmployeeScalarWhereInput
    data: XOR<SiteEmployeeUpdateManyMutationInput, SiteEmployeeUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type SiteEmployeeScalarWhereInput = {
    AND?: SiteEmployeeScalarWhereInput | SiteEmployeeScalarWhereInput[]
    OR?: SiteEmployeeScalarWhereInput[]
    NOT?: SiteEmployeeScalarWhereInput | SiteEmployeeScalarWhereInput[]
    id?: StringFilter<"SiteEmployee"> | string
    siteId?: StringFilter<"SiteEmployee"> | string
    employeeId?: StringFilter<"SiteEmployee"> | string
    createdAt?: DateTimeFilter<"SiteEmployee"> | Date | string
    userId?: StringFilter<"SiteEmployee"> | string
  }

  export type ClientCreateWithoutSalesInput = {
    id?: string
    name: string
    companyName?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    postalCode?: string | null
    city?: string | null
    prefecture?: string | null
    contactPerson?: string | null
    contactPhone?: string | null
    contactEmail?: string | null
    industry?: string | null
    notes?: string | null
    status?: $Enums.ClientStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ClientUncheckedCreateWithoutSalesInput = {
    id?: string
    name: string
    companyName?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    postalCode?: string | null
    city?: string | null
    prefecture?: string | null
    contactPerson?: string | null
    contactPhone?: string | null
    contactEmail?: string | null
    industry?: string | null
    notes?: string | null
    status?: $Enums.ClientStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ClientCreateOrConnectWithoutSalesInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutSalesInput, ClientUncheckedCreateWithoutSalesInput>
  }

  export type ClientUpsertWithoutSalesInput = {
    update: XOR<ClientUpdateWithoutSalesInput, ClientUncheckedUpdateWithoutSalesInput>
    create: XOR<ClientCreateWithoutSalesInput, ClientUncheckedCreateWithoutSalesInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutSalesInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutSalesInput, ClientUncheckedUpdateWithoutSalesInput>
  }

  export type ClientUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    prefecture?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumClientStatusFieldUpdateOperationsInput | $Enums.ClientStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ClientUncheckedUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    prefecture?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumClientStatusFieldUpdateOperationsInput | $Enums.ClientStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeCreateWithoutPayrollsInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    emergencyContactPerson?: string | null
    emergencyContactPhone?: string | null
    address?: string | null
    postalCode?: string | null
    city?: string | null
    prefecture?: string | null
    position?: string | null
    unitPay?: number | null
    hourlyOvertimePay?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    siteEmployees?: SiteEmployeeCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutPayrollsInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    emergencyContactPerson?: string | null
    emergencyContactPhone?: string | null
    address?: string | null
    postalCode?: string | null
    city?: string | null
    prefecture?: string | null
    position?: string | null
    unitPay?: number | null
    hourlyOvertimePay?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    siteEmployees?: SiteEmployeeUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutPayrollsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutPayrollsInput, EmployeeUncheckedCreateWithoutPayrollsInput>
  }

  export type EmployeeUpsertWithoutPayrollsInput = {
    update: XOR<EmployeeUpdateWithoutPayrollsInput, EmployeeUncheckedUpdateWithoutPayrollsInput>
    create: XOR<EmployeeCreateWithoutPayrollsInput, EmployeeUncheckedCreateWithoutPayrollsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutPayrollsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutPayrollsInput, EmployeeUncheckedUpdateWithoutPayrollsInput>
  }

  export type EmployeeUpdateWithoutPayrollsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    prefecture?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    unitPay?: NullableIntFieldUpdateOperationsInput | number | null
    hourlyOvertimePay?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    siteEmployees?: SiteEmployeeUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutPayrollsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    prefecture?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    unitPay?: NullableIntFieldUpdateOperationsInput | number | null
    hourlyOvertimePay?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    siteEmployees?: SiteEmployeeUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type SiteEmployeeCreateWithoutSiteInput = {
    id?: string
    createdAt?: Date | string
    userId: string
    employee: EmployeeCreateNestedOneWithoutSiteEmployeesInput
  }

  export type SiteEmployeeUncheckedCreateWithoutSiteInput = {
    id?: string
    employeeId: string
    createdAt?: Date | string
    userId: string
  }

  export type SiteEmployeeCreateOrConnectWithoutSiteInput = {
    where: SiteEmployeeWhereUniqueInput
    create: XOR<SiteEmployeeCreateWithoutSiteInput, SiteEmployeeUncheckedCreateWithoutSiteInput>
  }

  export type SiteEmployeeCreateManySiteInputEnvelope = {
    data: SiteEmployeeCreateManySiteInput | SiteEmployeeCreateManySiteInput[]
    skipDuplicates?: boolean
  }

  export type SiteEmployeeUpsertWithWhereUniqueWithoutSiteInput = {
    where: SiteEmployeeWhereUniqueInput
    update: XOR<SiteEmployeeUpdateWithoutSiteInput, SiteEmployeeUncheckedUpdateWithoutSiteInput>
    create: XOR<SiteEmployeeCreateWithoutSiteInput, SiteEmployeeUncheckedCreateWithoutSiteInput>
  }

  export type SiteEmployeeUpdateWithWhereUniqueWithoutSiteInput = {
    where: SiteEmployeeWhereUniqueInput
    data: XOR<SiteEmployeeUpdateWithoutSiteInput, SiteEmployeeUncheckedUpdateWithoutSiteInput>
  }

  export type SiteEmployeeUpdateManyWithWhereWithoutSiteInput = {
    where: SiteEmployeeScalarWhereInput
    data: XOR<SiteEmployeeUpdateManyMutationInput, SiteEmployeeUncheckedUpdateManyWithoutSiteInput>
  }

  export type SiteCreateWithoutSiteEmployeesInput = {
    id?: string
    name: string
    contractor: string
    postalCode?: string | null
    prefecture?: string | null
    city?: string | null
    address?: string | null
    date: Date | string
    startTime: Date | string
    employeeNames?: string | null
    notes?: string | null
    status?: $Enums.SiteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type SiteUncheckedCreateWithoutSiteEmployeesInput = {
    id?: string
    name: string
    contractor: string
    postalCode?: string | null
    prefecture?: string | null
    city?: string | null
    address?: string | null
    date: Date | string
    startTime: Date | string
    employeeNames?: string | null
    notes?: string | null
    status?: $Enums.SiteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type SiteCreateOrConnectWithoutSiteEmployeesInput = {
    where: SiteWhereUniqueInput
    create: XOR<SiteCreateWithoutSiteEmployeesInput, SiteUncheckedCreateWithoutSiteEmployeesInput>
  }

  export type EmployeeCreateWithoutSiteEmployeesInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    emergencyContactPerson?: string | null
    emergencyContactPhone?: string | null
    address?: string | null
    postalCode?: string | null
    city?: string | null
    prefecture?: string | null
    position?: string | null
    unitPay?: number | null
    hourlyOvertimePay?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    payrolls?: PayrollCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutSiteEmployeesInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    emergencyContactPerson?: string | null
    emergencyContactPhone?: string | null
    address?: string | null
    postalCode?: string | null
    city?: string | null
    prefecture?: string | null
    position?: string | null
    unitPay?: number | null
    hourlyOvertimePay?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    payrolls?: PayrollUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutSiteEmployeesInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutSiteEmployeesInput, EmployeeUncheckedCreateWithoutSiteEmployeesInput>
  }

  export type SiteUpsertWithoutSiteEmployeesInput = {
    update: XOR<SiteUpdateWithoutSiteEmployeesInput, SiteUncheckedUpdateWithoutSiteEmployeesInput>
    create: XOR<SiteCreateWithoutSiteEmployeesInput, SiteUncheckedCreateWithoutSiteEmployeesInput>
    where?: SiteWhereInput
  }

  export type SiteUpdateToOneWithWhereWithoutSiteEmployeesInput = {
    where?: SiteWhereInput
    data: XOR<SiteUpdateWithoutSiteEmployeesInput, SiteUncheckedUpdateWithoutSiteEmployeesInput>
  }

  export type SiteUpdateWithoutSiteEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contractor?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    prefecture?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    employeeNames?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSiteStatusFieldUpdateOperationsInput | $Enums.SiteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SiteUncheckedUpdateWithoutSiteEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contractor?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    prefecture?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    employeeNames?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSiteStatusFieldUpdateOperationsInput | $Enums.SiteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeUpsertWithoutSiteEmployeesInput = {
    update: XOR<EmployeeUpdateWithoutSiteEmployeesInput, EmployeeUncheckedUpdateWithoutSiteEmployeesInput>
    create: XOR<EmployeeCreateWithoutSiteEmployeesInput, EmployeeUncheckedCreateWithoutSiteEmployeesInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutSiteEmployeesInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutSiteEmployeesInput, EmployeeUncheckedUpdateWithoutSiteEmployeesInput>
  }

  export type EmployeeUpdateWithoutSiteEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    prefecture?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    unitPay?: NullableIntFieldUpdateOperationsInput | number | null
    hourlyOvertimePay?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    payrolls?: PayrollUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutSiteEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    prefecture?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    unitPay?: NullableIntFieldUpdateOperationsInput | number | null
    hourlyOvertimePay?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    payrolls?: PayrollUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type SalesCreateManyClientInput = {
    id?: string
    amount: number
    date: Date | string
    description?: string | null
    category?: string | null
    status?: $Enums.SalesStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type SalesUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSalesStatusFieldUpdateOperationsInput | $Enums.SalesStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SalesUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSalesStatusFieldUpdateOperationsInput | $Enums.SalesStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SalesUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSalesStatusFieldUpdateOperationsInput | $Enums.SalesStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PayrollCreateManyEmployeeInput = {
    id?: string
    periodType?: $Enums.PayrollPeriodType
    startDate: Date | string
    endDate: Date | string
    workHours?: number | null
    overtimeHours?: number | null
    siteCount: number
    unitPay: number
    sitePay: number
    hourlyOvertimePay: number
    overtime: number
    totalAmount: number
    status?: $Enums.PayrollStatus
    paymentDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type SiteEmployeeCreateManyEmployeeInput = {
    id?: string
    siteId: string
    createdAt?: Date | string
    userId: string
  }

  export type PayrollUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodType?: EnumPayrollPeriodTypeFieldUpdateOperationsInput | $Enums.PayrollPeriodType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    workHours?: NullableIntFieldUpdateOperationsInput | number | null
    overtimeHours?: NullableIntFieldUpdateOperationsInput | number | null
    siteCount?: IntFieldUpdateOperationsInput | number
    unitPay?: IntFieldUpdateOperationsInput | number
    sitePay?: IntFieldUpdateOperationsInput | number
    hourlyOvertimePay?: IntFieldUpdateOperationsInput | number
    overtime?: IntFieldUpdateOperationsInput | number
    totalAmount?: IntFieldUpdateOperationsInput | number
    status?: EnumPayrollStatusFieldUpdateOperationsInput | $Enums.PayrollStatus
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PayrollUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodType?: EnumPayrollPeriodTypeFieldUpdateOperationsInput | $Enums.PayrollPeriodType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    workHours?: NullableIntFieldUpdateOperationsInput | number | null
    overtimeHours?: NullableIntFieldUpdateOperationsInput | number | null
    siteCount?: IntFieldUpdateOperationsInput | number
    unitPay?: IntFieldUpdateOperationsInput | number
    sitePay?: IntFieldUpdateOperationsInput | number
    hourlyOvertimePay?: IntFieldUpdateOperationsInput | number
    overtime?: IntFieldUpdateOperationsInput | number
    totalAmount?: IntFieldUpdateOperationsInput | number
    status?: EnumPayrollStatusFieldUpdateOperationsInput | $Enums.PayrollStatus
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PayrollUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodType?: EnumPayrollPeriodTypeFieldUpdateOperationsInput | $Enums.PayrollPeriodType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    workHours?: NullableIntFieldUpdateOperationsInput | number | null
    overtimeHours?: NullableIntFieldUpdateOperationsInput | number | null
    siteCount?: IntFieldUpdateOperationsInput | number
    unitPay?: IntFieldUpdateOperationsInput | number
    sitePay?: IntFieldUpdateOperationsInput | number
    hourlyOvertimePay?: IntFieldUpdateOperationsInput | number
    overtime?: IntFieldUpdateOperationsInput | number
    totalAmount?: IntFieldUpdateOperationsInput | number
    status?: EnumPayrollStatusFieldUpdateOperationsInput | $Enums.PayrollStatus
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SiteEmployeeUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    site?: SiteUpdateOneRequiredWithoutSiteEmployeesNestedInput
  }

  export type SiteEmployeeUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SiteEmployeeUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SiteEmployeeCreateManySiteInput = {
    id?: string
    employeeId: string
    createdAt?: Date | string
    userId: string
  }

  export type SiteEmployeeUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    employee?: EmployeeUpdateOneRequiredWithoutSiteEmployeesNestedInput
  }

  export type SiteEmployeeUncheckedUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SiteEmployeeUncheckedUpdateManyWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
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