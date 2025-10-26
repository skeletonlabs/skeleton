import type { useDatePicker } from '../modules/provider';
import { RootContext as RootContext_ } from '../modules/root-context.js';
import { type ReactNode, use } from 'react';

export interface DatePickerRootContextProps {
	children: (datePicker: ReturnType<typeof useDatePicker>) => ReactNode;
}

export default function RootContext(props: DatePickerRootContextProps) {
	const datePicker = use(RootContext_);

	const { children } = props;

	return children(datePicker);
}
