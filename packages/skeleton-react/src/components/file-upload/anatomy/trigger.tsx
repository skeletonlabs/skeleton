import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { RootContext } from '../modules/root-context.js';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface FileUploadTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button'> {}

export default function Trigger(props: FileUploadTriggerProps) {
	const fileUpload = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		fileUpload.getTriggerProps(),
		rest,
	);

	return element ? element(attributes) : <button {...attributes}>{children}</button>;
}
