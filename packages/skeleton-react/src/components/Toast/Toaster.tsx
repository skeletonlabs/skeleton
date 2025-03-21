'use client';

import * as toast from '@zag-js/toast';
import type { ToasterProps } from './types.js';
import { Toast } from './Toast.js';
import { useId } from 'react';
import { normalizeProps, useMachine } from '@zag-js/react';

export function Toaster({
	// Toaster
	toaster,
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
	btnDismissBase = 'btn-icon hover:preset-tonal',
	btnDismissClasses = '',
	// State
	stateInfo = 'preset-outlined-surface-200-800 preset-filled-surface-50-950',
	stateSuccess = 'preset-filled-success-500',
	stateError = 'preset-filled-error-500'
}: ToasterProps) {
	const service = useMachine(toast.group.machine, {
		id: useId(),
		store: toaster
	});
	const api = toast.group.connect(service, normalizeProps);

	return (
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
					btnDismissBase={btnDismissBase}
					btnDismissClasses={btnDismissClasses}
					stateInfo={stateInfo}
					stateError={stateError}
					stateSuccess={stateSuccess}
					toast={toast}
					parent={service}
				></Toast>
			))}
		</div>
	);
}
