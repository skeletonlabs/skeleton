import type { ComponentProps, JSX } from 'react';

export type HTMLAttributes<T extends keyof JSX.IntrinsicElements, U extends keyof ComponentProps<T> = never> = Omit<
	ComponentProps<T>,
	U
> & { [key: `data-${string}`]: string | number | boolean | undefined };
