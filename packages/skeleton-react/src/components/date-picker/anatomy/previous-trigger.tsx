import ChevronLeft from '../../../internal/components/chevron-left.jsx';
import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { DatePickerRootContext } from '../modules/root-context.js';
import { DatePickerViewContext } from '../modules/view-context.js';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface DatePickerPrevTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button'> {}

export default function PrevTrigger(props: DatePickerPrevTriggerProps) {
	const datePicker = use(DatePickerRootContext);
	const viewProps = use(DatePickerViewContext);

	const { element, children = <ChevronLeft />, ...rest } = props;

	const attributes = mergeProps(datePicker.getPrevTriggerProps(viewProps), rest);

	return element ? element(attributes) : <button {...attributes}>{children}</button>;
}
