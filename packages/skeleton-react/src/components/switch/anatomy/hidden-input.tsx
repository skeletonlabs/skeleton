import { classesSwitch } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';

import { SwitchRootContext } from '../modules/root-context';

export interface SwitchHiddenInputProps extends PropsWithElement<'input'>, HTMLAttributes<'input', 'children'> {}

export default function SwitchHiddenInput(props: SwitchHiddenInputProps) {
	const switch_ = use(SwitchRootContext);

	const { element, ...rest } = props;

	const attributes = mergeProps(switch_.getHiddenInputProps(), rest, {
		className: classesSwitch.hiddenInput,
	});

	return element ? element(attributes) : <input {...attributes} />;
}
