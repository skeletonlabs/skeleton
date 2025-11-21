import { useDatePicker } from '../modules/provider.js';
import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { classesDatePicker } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';

export interface DatePickerRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir' | 'defaultValue'> {
	value: ReturnType<typeof useDatePicker>;
}

export default function RootProvider(props: DatePickerRootProviderProps) {
	const { element, children, value: datePicker, ...rest } = props;

	const attributes = mergeProps(
		datePicker.getRootProps(),
		{
			className: classesDatePicker.root,
		},
		rest,
	);

	return (
		<RootContext.Provider value={datePicker}>{element ? element(attributes) : <div {...attributes}>{children}</div>}</RootContext.Provider>
	);
}
