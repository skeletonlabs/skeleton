import { useContext } from 'react';
import { mergeProps } from '@zag-js/react';
import { classesToast } from '@skeletonlabs/skeleton-common';
import { ToastRootContext } from '../modules/root-context';
import { ToastGroupContext } from '../modules/group-context';
import { useToast } from '../modules/use-toast';
import type { Options } from '@zag-js/toast';
import type { PropsWithElement } from '@/internal/props-with-element';
import type { HTMLAttributes } from '@/internal/html-attributes';

export interface ToastRootProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
	toast: Options;
}

export default function (props: ToastRootProps) {
	const group = useContext(ToastGroupContext);

	const { element, children, toast: toastProps, ...rest } = props;

	const toast = useToast({
		...toastProps,
		parent: group.service
	});

	const attributes = mergeProps(toast.getRootProps(), rest, {
		className: classesToast.root
	});

	return (
		<>
			<ToastRootContext.Provider value={toast}>
				<div {...toast.getGhostBeforeProps()}></div>
				{element ? element(attributes) : <div {...attributes}>{children}</div>}
				<div {...toast.getGhostAfterProps()}></div>
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
