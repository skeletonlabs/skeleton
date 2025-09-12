import { useId } from 'react';
import type { JSX } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { useMachine, normalizeProps, mergeProps } from '@zag-js/react';
import { classesToast } from '@skeletonlabs/skeleton-common';
import { group, type Store, type Props } from '@zag-js/toast';
import { ToastGroupContext } from '../modules/group-context';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface ToastGroupProps extends PropsWithElement, Omit<HTMLAttributes<'div'>, 'id' | 'dir' | 'children'> {
	toaster: Store;
	children?: (toast: Props) => JSX.Element | null;
}

export default function (props: ToastGroupProps) {
	const { element, children, toaster, ...restAttributes } = props;

	const service = useMachine(group.machine, {
		id: useId(),
		store: toaster
	});
	const api = group.connect(service, normalizeProps);

	const attributes = mergeProps(api.getGroupProps(), { className: classesToast.group }, restAttributes);

	return (
		<ToastGroupContext.Provider value={{ groupApi: api, groupService: service }}>
			{element ? element({ attributes }) : <div {...attributes}>{api.getToasts().map((toast) => children?.(toast))}</div>}
		</ToastGroupContext.Provider>
	);
}
