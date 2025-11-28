import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { RootContext } from '../modules/root-context.js';
import * as classes from '@skeletonlabs/skeleton-common/classes';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface FileUploadItemGroupProps extends PropsWithElement<'ul'>, HTMLAttributes<'ul'> {}

export default function ItemGroup(props: FileUploadItemGroupProps) {
	const fileUpload = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		fileUpload.getItemGroupProps(),
		{
			className: classes.fileUpload.itemGroup,
		},
		rest,
	);

	return element ? element(attributes) : <ul {...attributes}>{children}</ul>;
}
