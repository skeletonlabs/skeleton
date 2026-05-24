import type { useDatePicker } from '../modules/provider.js';
import { DatePickerRootContext as RootContext_ } from '../modules/root-context.js';
import { type ReactNode, use } from 'react';

export interface DatePickerRootContextProps {
	children: (datePicker: ReturnType<typeof useDatePicker>) => ReactNode;
}

export default function DatePickerRootContext(props: DatePickerRootContextProps) {
	const datePicker = use(RootContext_);

	const { children } = props;

	return children(datePicker);
}
