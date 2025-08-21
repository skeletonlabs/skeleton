import type { JSX } from 'react';

interface PropsWithElement {
	element?: (...args: [{ attributes: Record<string, unknown> }]) => JSX.Element | null;
}

export type { PropsWithElement };
