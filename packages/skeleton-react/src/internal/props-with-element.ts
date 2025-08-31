import type { JSX } from 'react';

export interface PropsWithElement {
	element?: (arg: { attributes: Record<string, unknown> }) => JSX.Element | null;
}
