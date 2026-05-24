// oxlint-disable-next-line no-unused-vars
import ChevronRight from '../../../internal/components/chevron-right.js';
import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { DatePickerRootContext } from '../modules/root-context.js';
import { DatePickerViewContext } from '../modules/view-context.js';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface DatePickerNextTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button'> {}

export default function NextTrigger(props: DatePickerNextTriggerProps) {
	const datePicker = use(DatePickerRootContext);
	const viewProps = use(DatePickerViewContext);

	const { element, children = <ChevronRight />, ...rest } = props;

	const attributes = mergeProps(datePicker.getNextTriggerProps(viewProps), rest);

	return element ? element(attributes) : <button {...attributes}>{children}</button>;
}
