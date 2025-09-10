import { useContext, useId, type ComponentProps } from 'react';
import { useMachine, normalizeProps, mergeProps } from '@zag-js/react';
import { classesToast } from '@skeletonlabs/skeleton-common';
import { machine, connect, type Options } from '@zag-js/toast';
import { ToastRootContext } from '../modules/root-context';
import { ToastGroupContext } from '../modules/group-context';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface ToastRootProps extends PropsWithElement, Omit<ComponentProps<'div'>, 'id' | 'dir'> {
	toast: Options;
}

export default function (props: ToastRootProps) {
	const groupContext = useContext(ToastGroupContext);

	const { element, children, toast, ...restAttributes } = props;

	const service = useMachine(machine, {
		id: useId(),
		parent: groupContext.groupService,
		...toast
	});
	const api = connect(service, normalizeProps);

	const attributes = mergeProps(api.getRootProps(), { className: classesToast.root }, restAttributes);

	return (
		<>
			<ToastRootContext.Provider value={{ api }}>
				<div {...api.getGhostBeforeProps()}></div>
				{element ? element({ attributes }) : <div {...attributes}>{children}</div>}
				<div {...api.getGhostAfterProps()}></div>
			</ToastRootContext.Provider>
			<style>{`
                [data-part='root'] {
                    translate: var(--x) var(--y);
                    scale: var(--scale);
                    z-index: var(--z-index);
                    height: var(--height);	
                    opacity: var(--opacity);
                    will-change: translate, opacity, scale;
                }
                [data-part='root'] {
                    transition:
                        translate 400ms,
                        scale 400ms,
                        opacity 400ms;
                    transition-timing-function: cubic-bezier(0.21, 1.02, 0.73, 1);
                }
                [data-part='root'][data-state='closed'] {
                    transition:
                        translate 400ms,
                        scale 400ms,
                        opacity 200ms;
                    transition-timing-function: cubic-bezier(0.06, 0.71, 0.55, 1);
                }
            `}</style>
		</>
	);
}
