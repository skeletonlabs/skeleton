import { splitProps, machine, connect, type Props } from '@zag-js/rating-group';
import { mergeProps, normalizeProps, useMachine } from '@zag-js/react';
import { useId } from 'react';
import type { PropsWithElement } from '@/internal/props-with-element';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { classesRatingGroup } from '@skeletonlabs/skeleton-common';
import { RatingGroupRootContext } from '../modules/root-context';

export interface RatingGroupRootProps
	extends PropsWithElement,
		Omit<Props, 'id'>,
		Omit<HTMLAttributes<'div'>, 'id' | 'defaultValue' | 'dir'> {}

export default function (props: RatingGroupRootProps) {
	const [machineProps, componentProps] = splitProps(props);
	const { element, children, ...rest } = componentProps;

	const service = useMachine(machine, {
		id: useId(),
		...machineProps
	});
	const api = connect(service, normalizeProps);

	const attributes = mergeProps(api.getRootProps(), { className: classesRatingGroup.root }, rest);

	return (
		<RatingGroupRootContext.Provider value={{ api }}>
			{element ? element({ attributes }) : <div {...attributes}>{children}</div>}
		</RatingGroupRootContext.Provider>
	);
}
