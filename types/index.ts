// deno-lint-ignore-file no-explicit-any

export type Nullable<T> = null | T;
export type UndefinedAble<T> = undefined | T;
export interface RefType<T> {
  current: T;
}

export type InstanceType<T extends abstract new (...args: any) => any> =
  T extends abstract new (...args: any) => infer R ? R : any;

export type DeepKeyOf<T> = T extends Record<string, any>
  ? {
    [k in keyof T]: k extends string ? k | `${k}.${DeepKeyOf<T[k]>}` : never;
  }[keyof T]
  : never;

export type DeepGet<T, K> = T extends Record<string, any>
  ? K extends DeepKeyOf<T>
  ? K extends `${infer A}.${infer B}`
  ? DeepGet<T[A], B>
  : T[K]
  : never
  : never;