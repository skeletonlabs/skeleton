import { connect, machine, type Api, type Props } from '@zag-js/file-upload';
import { normalizeProps, useMachine } from '@zag-js/react';
import { useId } from 'react';

export function useFileUpload(props: Omit<Props, 'id'> = {}): Api {
	const service = useMachine(machine, {
		id: useId(),
		...props
	});
	return connect(service, normalizeProps);
}
