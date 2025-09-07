import { useId, type ComponentProps } from 'react';
import { useMachine, normalizeProps, mergeProps } from '@zag-js/react';
import { classesCombobox } from '@skeletonlabs/skeleton-common';
import { splitProps, machine, connect, type Props } from '@zag-js/combobox';
import { ComboboxRootContext } from '../modules/combobox-root-context';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface ComboboxRootProps
	extends PropsWithElement,
		Omit<Props, 'id'>,
		Omit<ComponentProps<'div'>, 'id' | 'dir' | 'defaultValue' | 'onSelect'> {}

export default function (props: ComboboxRootProps) {
	const [machineProps, componentProps] = splitProps(props);
	const { element, children, ...restAttributes } = componentProps;
	const service = useMachine(machine, {
		id: useId(),
		...machineProps
	});
	const api = connect(service, normalizeProps);
	const attributes = mergeProps(api.getRootProps(), { className: classesCombobox.root }, restAttributes);
	return (
		<ComboboxRootContext.Provider value={{ api }}>
			{element ? element({ attributes }) : <div {...attributes}>{children}</div>}
		</ComboboxRootContext.Provider>
	);
}
