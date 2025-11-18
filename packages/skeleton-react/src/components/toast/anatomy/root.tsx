import { GroupContext } from '../modules/group-context.js';
import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '@/internal/html-attributes.js';
import type { PropsWithElement } from '@/internal/props-with-element.js';
import { classesToast } from '@skeletonlabs/skeleton-common';
import { mergeProps, normalizeProps, useMachine } from '@zag-js/react';
import { connect, machine } from '@zag-js/toast';
import type { Options } from '@zag-js/toast';
import { use } from 'react';

export interface ToastRootProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
	toast: Omit<Options, 'id' | 'parent'>;
}

export default function Root(props: ToastRootProps) {
	const group = use(GroupContext);

	const { element, children, toast: toastProps, ...rest } = props;

	const service = useMachine(machine, {
		...toastProps,
		parent: group,
	});
	const toast = connect(service, normalizeProps);

	const attributes = mergeProps(
		toast.getRootProps(),
		{
			className: classesToast.root,
		},
		rest,
	);

	return (
		<>
			<RootContext.Provider value={toast}>
				{element ? (
					element(attributes)
				) : (
					<div {...attributes}>
						<div {...toast.getGhostBeforeProps()}></div>
						{children}
						<div {...toast.getGhostAfterProps()}></div>
					</div>
				)}
			</RootContext.Provider>
			<style>{`
                [data-part='root'] {
                    translate: var(--x) var(--y);
                    scale: var(--scale);
                    z-index: var(--z-index);
                    height: var(--height);	
                    opacity: var(--opacity);
                    will-change: translate, opacity, scale;
					transition:
                        translate 400ms,
                        scale 400ms,
                        opacity 400ms;
                    transition-timing-function: cubic-bezier(0.21, 1.02, 0.73, 1);
					
					&[data-state='closed'] {
						transition:
							translate 400ms,
							scale 400ms,
							opacity 200ms;
						transition-timing-function: cubic-bezier(0.06, 0.71, 0.55, 1);
					}
                }
            `}</style>
		</>
	);
}
