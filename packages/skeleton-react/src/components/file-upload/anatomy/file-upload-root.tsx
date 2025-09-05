import { useId, type ComponentProps } from 'react';
import { useMachine, normalizeProps, mergeProps } from '@zag-js/react';
import { classesFileUpload } from '@skeletonlabs/skeleton-common';
import { splitProps, machine, connect, type Props } from '@zag-js/file-upload';
import { FileUploadRootContext } from '../modules/file-upload-root-context.js';
import type { PropsWithElement } from '@/internal/props-with-element.js';

export interface FileUploadRootProps extends PropsWithElement, Omit<Props, 'id'>, Omit<ComponentProps<'div'>, 'id' | 'dir'> {}

export default function (props: FileUploadRootProps) {
	const [machineProps, componentProps] = splitProps(props);
	const { element, children, ...restAttributes } = componentProps;
	const service = useMachine(machine, {
		id: useId(),
		...machineProps
	});
	const api = connect(service, normalizeProps);
	const attributes = mergeProps(
		api.getRootProps(),
		{
			className: classesFileUpload.root
		},
		restAttributes
	);
	return (
		<FileUploadRootContext.Provider value={{ api }}>
			{element ? element({ attributes }) : <div {...attributes}>{children}</div>}
		</FileUploadRootContext.Provider>
	);
}
