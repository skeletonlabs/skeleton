import type { HTMLAttributes } from './html-attributes';
import type { JSX, ReactNode } from 'react';

export interface PropsWithElement<T extends keyof JSX.IntrinsicElements> {
	/**
	 * Render the element yourself
	 */
	element?: (attributes: HTMLAttributes<T>) => ReactNode;
}
