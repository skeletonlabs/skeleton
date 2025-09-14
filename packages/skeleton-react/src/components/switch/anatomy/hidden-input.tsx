import { use } from 'react';
import { mergeProps } from '@zag-js/react';
import { SwitchRootContext } from '../modules/root-context';
import { classesSwitch } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';
import type { HTMLAttributes } from '@/internal/html-attributes';

export interface SwitchHiddenInputProps extends PropsWithElement<'input'>, HTMLAttributes<'input', 'children'> { }

export default function (props: SwitchHiddenInputProps) {
	const switch_ = use(SwitchRootContext);

	const { element, ...rest } = props;

	const attributes = mergeProps(switch_.getHiddenInputProps(), rest, {
		className: classesSwitch.hiddenInput
	});

	return element ? element(attributes) : <input {...attributes} />;
}
