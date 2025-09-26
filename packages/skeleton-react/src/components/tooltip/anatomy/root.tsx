import { useTooltip } from '../modules/provider';
import { RootContext } from '../modules/root-context';
import { type Props, splitProps } from '@zag-js/tooltip';
import type { PropsWithChildren } from 'react';

export interface TooltipRootProps extends PropsWithChildren, Omit<Props, 'id'> {}

export default function Root(props: TooltipRootProps) {
	const [tooltipProps, componentProps] = splitProps(props);
	const { children } = componentProps;

	const tooltip = useTooltip(tooltipProps);

	return <RootContext.Provider value={tooltip}>{children}</RootContext.Provider>;
}
