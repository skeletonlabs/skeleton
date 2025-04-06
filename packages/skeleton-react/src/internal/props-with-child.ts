import type { JSX } from 'react';

interface PropsWithChild {
	child?: (props: Record<string, unknown>) => JSX.Element | null;
}

export type { PropsWithChild };
