export type Union<T, U> = {
	[K in keyof T]: K extends keyof U ? U[K] | T[K] : T[K];
} & Omit<U, keyof T>;
