import type { JSX } from 'react';
import type { HTMLAttributes } from './html-attributes';

export interface PropsWithElement<T extends keyof JSX.IntrinsicElements> {
	/**
	 * Render the element yourself
	 */
	element?: (attributes: HTMLAttributes<T>) => JSX.Element | null;
}
