import { Children, type PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

export interface PortalRootProps extends Required<PropsWithChildren> {
	/**
	 * If true, the portal functionality is disabled and children are rendered in place.
	 *
	 * @default false
	 */
	disabled?: boolean;
	/**
	 * The HTML element to which the portal content will be appended.
	 *
	 * @default document.body
	 */
	target?: HTMLElement;
}

export default function Root(props: PortalRootProps) {
	const { children, disabled = false, target = typeof window === 'undefined' ? undefined : document.body } = props;
	if (disabled || !target) {
		return <>{children}</>;
	}
	return <>{Children.map(children, (child) => createPortal(child, target))}</>;
}
