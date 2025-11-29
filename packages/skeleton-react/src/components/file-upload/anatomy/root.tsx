import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { useFileUpload } from '../modules/provider.js';
import { RootContext } from '../modules/root-context.js';
import { splitProps } from '@zag-js/file-upload';
import type { Props } from '@zag-js/file-upload';
import { mergeProps } from '@zag-js/react';

export interface FileUploadRootProps extends Omit<Props, 'id'>, PropsWithElement<'div'>, Omit<HTMLAttributes<'div'>, 'id' | 'dir'> {}

export default function Root(props: FileUploadRootProps) {
	const [fileUploadProps, componentProps] = splitProps(props);
	const { element, children, ...rest } = componentProps;

	const fileUpload = useFileUpload(fileUploadProps);

	const attributes = mergeProps(
		fileUpload.getRootProps(),
		rest,
	);

	return (
		<RootContext.Provider value={fileUpload}>{element ? element(attributes) : <div {...attributes}>{children}</div>}</RootContext.Provider>
	);
}
