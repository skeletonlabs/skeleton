import type { HTMLAttributes } from '@/internal/html-attributes';
import { mergeProps } from '@zag-js/react';
import { classesFileUpload } from '@skeletonlabs/skeleton-common';
import type { Api } from '@zag-js/file-upload';
import { FileUploadRootContext } from '../modules/root-context';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface FileUploadRootProviderProps extends PropsWithElement, Omit<HTMLAttributes<'div'>, 'id' | 'dir'> {
	value: Api;
}

export default function (props: FileUploadRootProviderProps) {
	const { element, children, value: api, ...rest } = props;

	const attributes = mergeProps(api.getRootProps(), { className: classesFileUpload.root }, rest);

	return (
		<FileUploadRootContext.Provider value={{ api }}>
			{element ? element({ attributes }) : <div {...attributes}>{children}</div>}
		</FileUploadRootContext.Provider>
	);
}
