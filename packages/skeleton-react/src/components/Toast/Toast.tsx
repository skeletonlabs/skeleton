import * as toast from '@zag-js/toast';
import { normalizeProps, useMachine } from '@zag-js/react';
import type { ToastProps } from './types.js';

export function Toast(props: ToastProps) {
	const service = useMachine(toast.machine, {
		...props.toast,
		parent: props.parent
	});
	const api = toast.connect(service, normalizeProps);
	function getStateClasses() {
		switch (api.type) {
			case 'success':
				return props.stateSuccess;
			case 'error':
				return props.stateError;
			default:
				return props.stateInfo;
		}
	}
	return (
		<>
			<div
				className={`${props.base} ${props.width} ${props.padding} ${props.rounded} ${getStateClasses()} ${props.classes}`}
				{...api.getRootProps()}
			>
				{/* Text */}
				<div className={`${props.messageBase} ${props.messageClasses}`}>
					{/*  Title */}
					<span className={`${props.titleBase} ${props.titleClasses}`} {...api.getTitleProps()}>
						{api.title}
					</span>
					{/*  Description */}
					<span className={`${props.descriptionBase} ${props.descriptionClasses}`} {...api.getDescriptionProps()}>
						{api.description}
					</span>
				</div>
				{/*  Dismiss Button */}
				<button className={`${props.buttonDismissBase} ${props.buttonDismissClasses}`} onClick={api.dismiss}>
					&times;
				</button>
			</div>
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
