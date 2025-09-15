import { ToastGroupContext } from '../modules/group-context';
import { ToastRootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesToast } from '@skeletonlabs/skeleton-common';
import { mergeProps, normalizeProps, useMachine } from '@zag-js/react';
import { connect, machine } from '@zag-js/toast';
import type { Options } from '@zag-js/toast';
import { use, useId } from 'react';

export interface ToastRootProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
	toast: Omit<Options, 'id' | 'parent'>;
}

export default function Root(props: ToastRootProps) {
	const group = use(ToastGroupContext);

	const { element, children, toast: toastProps, ...rest } = props;

	const service = useMachine(machine, {
		id: useId(),
		parent: group,
		...toastProps,
	});
	const toast = connect(service, normalizeProps);

	const attributes = mergeProps(toast.getRootProps(), rest, {
		className: classesToast.root,
	});

	return (
		<>
			<ToastRootContext.Provider value={toast}>
				<div {...toast.getGhostBeforeProps()} />
				{element ? element(attributes) : <div {...attributes}>{children}</div>}
				<div {...toast.getGhostAfterProps()} />
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
