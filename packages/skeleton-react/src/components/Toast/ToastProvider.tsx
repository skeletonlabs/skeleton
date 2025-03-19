import * as toast from '@zag-js/toast';
import type { ToastProviderProps } from './types.js';
import { Toast } from './Toast.js';
import { useId } from 'react';
import { normalizeProps, useMachine } from '@zag-js/react';
import { ToastContext } from './context.js';

export function ToastProvider({
	// Toast
	base = 'flex justify-between items-center gap-3',
	width = 'min-w-xs',
	padding = 'p-3',
	rounded = 'rounded-container',
	classes = '',
	// Message
	messageBase = 'grid',
	messageClasses = '',
	// Title
	titleBase = 'font-semibold',
	titleClasses = '',
	// Description
	descriptionBase = 'text-sm',
	descriptionClasses = '',
	// Dismiss Button
	buttonDismissBase = 'btn-icon hover:preset-tonal',
	buttonDismissClasses = '',
	// State
	stateInfo = 'preset-outlined-surface-200-800 preset-filled-surface-50-950',
	stateSuccess = 'preset-filled-success-500',
	stateError = 'preset-filled-error-500',
	children,
	...rest
}: ToastProviderProps) {
	const toaster = toast.createStore(rest);
	const service = useMachine(toast.group.machine, {
		id: useId(),
		store: toaster
	});
	const api = toast.group.connect(service, normalizeProps);
	return (
		<ToastContext.Provider value={{ toaster }}>
			{children}
			<div {...api.getGroupProps()}>
				{api.getToasts().map((toast) => (
					<Toast
						key={toast.id}
						base={base}
						width={width}
						padding={padding}
						rounded={rounded}
						classes={classes}
						messageBase={messageBase}
						messageClasses={messageClasses}
						titleBase={titleBase}
						titleClasses={titleClasses}
						descriptionBase={descriptionBase}
						descriptionClasses={descriptionClasses}
						buttonDismissBase={buttonDismissBase}
						buttonDismissClasses={buttonDismissClasses}
						stateInfo={stateInfo}
						stateError={stateError}
						stateSuccess={stateSuccess}
						toast={toast}
						parent={service}
					></Toast>
				))}
			</div>
		</ToastContext.Provider>
	);
}
