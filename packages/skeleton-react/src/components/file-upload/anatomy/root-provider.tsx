import type { useFileUpload } from '../modules/provider';
import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '@/internal/html-attributes.js';
import type { PropsWithElement } from '@/internal/props-with-element.js';
import { classesFileUpload } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';

export interface FileUploadRootProviderProps extends PropsWithElement<'div'>, Omit<HTMLAttributes<'div'>, 'id' | 'dir'> {
	value: ReturnType<typeof useFileUpload>;
}

export default function RootProvider(props: FileUploadRootProviderProps) {
	const { element, children, value: fileUpload, ...rest } = props;

	const attributes = mergeProps(
		fileUpload.getRootProps(),
		{
			className: classesFileUpload.root,
		},
		rest,
	);

	return (
		<RootContext.Provider value={fileUpload}>{element ? element(attributes) : <div {...attributes}>{children}</div>}</RootContext.Provider>
	);
}
