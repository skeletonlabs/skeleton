import { useId } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { useMachine, normalizeProps, mergeProps } from '@zag-js/react';
import { classesFileUpload } from '@skeletonlabs/skeleton-common';
import { splitProps, machine, connect, type Props } from '@zag-js/file-upload';
import { FileUploadRootContext } from '../modules/root-context';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface FileUploadRootProps extends PropsWithElement, Omit<Props, 'id'>, Omit<HTMLAttributes<'div'>, 'id' | 'dir'> {}

export default function (props: FileUploadRootProps) {
	const [machineProps, componentProps] = splitProps(props);
	const { element, children, ...restAttributes } = componentProps;

	const service = useMachine(machine, {
		id: useId(),
		...machineProps
	});
	const api = connect(service, normalizeProps);

	const attributes = mergeProps(api.getRootProps(), { className: classesFileUpload.root }, restAttributes);

	return (
		<FileUploadRootContext.Provider value={{ api }}>
			{element ? element({ attributes }) : <div {...attributes}>{children}</div>}
		</FileUploadRootContext.Provider>
	);
}
