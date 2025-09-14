import { classesToast } from '@skeletonlabs/skeleton-common';
import { mergeProps, normalizeProps, useMachine } from '@zag-js/react';
import { group, type Props, type Store } from '@zag-js/toast';
import type { JSX } from 'react';
import { useId } from 'react';

import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';

import { ToastGroupContext } from '../modules/group-context';

export interface ToastGroupProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir' | 'children'> {
	toaster: Store;
	children?: (toast: Props) => JSX.Element | null;
}

export default function ToastGroup(props: ToastGroupProps) {
	const { element, children, toaster, ...rest } = props;

	const service = useMachine(group.machine, {
		id: useId(),
		store: toaster,
	});
	const api = group.connect(service, normalizeProps);

	const attributes = mergeProps(api.getGroupProps(), rest, {
		className: classesToast.group,
	});

	return (
		<ToastGroupContext.Provider value={service}>
			{element ? element(attributes) : <div {...attributes}>{api.getToasts().map((toast) => children?.(toast))}</div>}
		</ToastGroupContext.Provider>
	);
}
