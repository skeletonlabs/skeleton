import { mergeProps } from '@zag-js/react';
import { classesFileUpload } from '@skeletonlabs/skeleton-common';
import { splitProps, type Props } from '@zag-js/file-upload';
import { FileUploadRootContext } from '../modules/root-context';
import type { PropsWithElement } from '@/internal/props-with-element';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { useFileUpload } from '../modules/use-file-upload';

export interface FileUploadRootProps extends Omit<Props, 'id'>, PropsWithElement<'div'>, Omit<HTMLAttributes<'div'>, 'id' | 'dir'> {}

export default function (props: FileUploadRootProps) {
	const [fileUploadProps, componentProps] = splitProps(props);
	const { element, children, ...rest } = componentProps;

	const fileUpload = useFileUpload(fileUploadProps);

	const attributes = mergeProps(fileUpload.getRootProps(), rest, {
		className: classesFileUpload.root
	});

	return (
		<FileUploadRootContext.Provider value={fileUpload}>
			{element ? element(attributes) : <div {...attributes}>{children}</div>}
		</FileUploadRootContext.Provider>
	);
}
