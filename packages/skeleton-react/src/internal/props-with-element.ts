import type { JSX } from 'react';

export interface PropsWithElement {
	/**
	 * Render the element yourself
	 */
	element?: (arg: { attributes: Record<string, unknown> }) => JSX.Element | null;
}
