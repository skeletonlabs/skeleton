import { useId } from 'react';
import { useMachine, normalizeProps, mergeProps } from '@zag-js/react';
import { classesToast } from '@skeletonlabs/skeleton-common';
import { group, type Store, type Props } from '@zag-js/toast';
import { ToastGroupContext } from '../modules/group-context';
import type { PropsWithElement } from '@/internal/props-with-element';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { JSX } from 'react';

export interface ToastGroupProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir' | 'children'> {
	toaster: Store;
	children?: (toast: Props) => JSX.Element | null;
}

export default function (props: ToastGroupProps) {
	const { element, children, toaster, ...rest } = props;

	const service = useMachine(group.machine, {
		id: useId(),
		store: toaster
	});
	const api = group.connect(service, normalizeProps);

	const attributes = mergeProps(api.getGroupProps(), rest, {
		className: classesToast.group
	});

	return (
		<ToastGroupContext.Provider value={service}>
			{element ? element(attributes) : <div {...attributes}>{api.getToasts().map((toast) => children?.(toast))}</div>}
		</ToastGroupContext.Provider>
	);
}
