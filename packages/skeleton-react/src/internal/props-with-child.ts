import type { JSX } from 'react';

interface PropsWithChild {
	child?: (parameter: { attributes: Record<string, unknown> }) => JSX.Element | null;
}

export type { PropsWithChild };
