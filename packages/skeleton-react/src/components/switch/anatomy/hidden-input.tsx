import { useContext, type ComponentProps } from 'react';
import { mergeProps } from '@zag-js/react';
import { SwitchRootContext } from '../modules/root-context';
import { classesSwitch } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface SwitchHiddenInputProps extends PropsWithElement, Omit<ComponentProps<'input'>, 'children'> {}

export default function (props: SwitchHiddenInputProps) {
	const rootContext = useContext(SwitchRootContext);

	const { element, ...restAttributes } = props;

	const attributes = mergeProps(rootContext.api.getHiddenInputProps(), { className: classesSwitch.hiddenInput }, restAttributes);

	return element ? element({ attributes }) : <input {...attributes} />;
}
