import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import type { useFileUpload } from '../modules/provider.js';
import { RootContext } from '../modules/root-context.js';
import * as classes from '@skeletonlabs/skeleton-common/classes';
import { mergeProps } from '@zag-js/react';

export interface FileUploadRootProviderProps extends PropsWithElement<'div'>, Omit<HTMLAttributes<'div'>, 'id' | 'dir'> {
	value: ReturnType<typeof useFileUpload>;
}

export default function RootProvider(props: FileUploadRootProviderProps) {
	const { element, children, value: fileUpload, ...rest } = props;

	const attributes = mergeProps(
		fileUpload.getRootProps(),
		{
			className: classes.fileUpload.root,
		},
		rest,
	);

	return (
		<RootContext.Provider value={fileUpload}>{element ? element(attributes) : <div {...attributes}>{children}</div>}</RootContext.Provider>
	);
}
