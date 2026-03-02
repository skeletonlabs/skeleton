import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { GroupContext } from '../modules/group-context.js';
import { RootContext } from '../modules/root-context.js';
import { mergeProps, normalizeProps, useMachine } from '@zag-js/react';
import { connect, machine } from '@zag-js/toast';
import type { Options } from '@zag-js/toast';
import { use } from 'react';

export interface ToastOptions<T = any> extends Options<T> {
	index: number;
}

export interface ToastRootProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
	toast: Omit<ToastOptions, 'id' | 'parent'>;
	index?: number;
}

export default function Root(props: ToastRootProps) {
	const group = use(GroupContext);

	const { element, children, toast: toastProps, ...rest } = props;

	const service = useMachine(machine, {
		...toastProps,
		parent: group,
	});
	const toast = connect(service, normalizeProps);

	const attributes = mergeProps(toast.getRootProps(), rest);

	return (
		<RootContext.Provider value={toast}>
			{element ? (
				element(attributes)
			) : (
				<div {...attributes}>
					<div {...toast.getGhostBeforeProps()}></div>
					{children}
					<div {...toast.getGhostAfterProps()}></div>
				</div>
			)}
		</RootContext.Provider>
	);
}
