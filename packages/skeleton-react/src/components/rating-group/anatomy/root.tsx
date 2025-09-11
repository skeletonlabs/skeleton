import { splitProps, machine, connect, type Props } from '@zag-js/rating-group';
import { mergeProps, normalizeProps, useMachine } from '@zag-js/react';
import { useId, type ComponentProps } from 'react';
import { classesRatingGroup } from '@skeletonlabs/skeleton-common';
import { RatingGroupRootContext } from '../modules/root-context';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface RatingGroupRootProps
	extends PropsWithElement,
		Omit<Props, 'id'>,
		Omit<ComponentProps<'div'>, 'id' | 'defaultValue' | 'dir'> {}

export default function (props: RatingGroupRootProps) {
	const [machineProps, componentProps] = splitProps(props);
	const { element, children, ...restAttributes } = componentProps;

	const service = useMachine(machine, {
		id: useId(),
		...machineProps
	});
	const api = connect(service, normalizeProps);

	const attributes = mergeProps(api.getRootProps(), { className: classesRatingGroup.root }, restAttributes);

	return (
		<RatingGroupRootContext.Provider value={{ api }}>
			{element ? element({ attributes }) : <div {...attributes}>{children}</div>}
		</RatingGroupRootContext.Provider>
	);
}
