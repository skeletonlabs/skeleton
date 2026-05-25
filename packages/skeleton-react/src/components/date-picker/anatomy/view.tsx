import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { DatePickerRootContext } from '../modules/root-context.js';
import { DatePickerViewContext } from '../modules/view-context.js';
import { splitViewProps, type ViewProps } from '@zag-js/date-picker';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface DatePickerViewProps extends ViewProps, PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function View(props: DatePickerViewProps) {
	const datePicker = use(DatePickerRootContext);

	const [viewProps, componentProps] = splitViewProps(props);
	const { element, children, ...rest } = componentProps;

	const attributes = mergeProps(datePicker.getViewProps(viewProps), rest);

	return (
		<DatePickerViewContext.Provider value={viewProps}>
			{element ? element(attributes) : <div {...attributes}>{children}</div>}
		</DatePickerViewContext.Provider>
	);
}
