import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { RootContext } from '../modules/root-context.js';
import { classesDatePicker } from '@skeletonlabs/skeleton-common';
import { splitPresetTriggerProps, type PresetTriggerProps } from '@zag-js/date-picker';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface DatePickerPresetTriggerProps extends PresetTriggerProps, PropsWithElement<'button'>, HTMLAttributes<'button', 'value'> {}

export default function PresetTrigger(props: DatePickerPresetTriggerProps) {
	const datePicker = use(RootContext);

	const [presetTriggerProps, componentProps] = splitPresetTriggerProps(props);
	const { element, children, ...rest } = componentProps;

	const attributes = mergeProps(
		datePicker.getPresetTriggerProps(presetTriggerProps),
		{
			className: classesDatePicker.presetTrigger,
		},
		rest,
	);

	return element ? element(attributes) : <button {...attributes}>{children}</button>;
}
