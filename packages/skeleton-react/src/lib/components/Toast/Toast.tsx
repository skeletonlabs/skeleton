'use client';

import React, { createContext, useContext, useId } from 'react';
import * as toast from '@zag-js/toast';
import { useActor, useMachine, normalizeProps } from '@zag-js/react';
import { ToastProps, ToastProviderProps } from './types.js';

// Contexts ---

// @ts-expect-error type error
const ToastContext = createContext<toast.GroupApi>();
export const useToast = () => useContext(ToastContext);

// Components ---

// Toast Component
const Toast: React.FC<ToastProps> = (props) => {
	const [state, send] = useActor(props.actor);
	const api = toast.connect(state, send, normalizeProps);

	return (
		<div {...api.getRootProps()} className="card p-4 grid grid-cols-[1fr_auto] items-center gap-4">
			<div className="min-w-[280px]">
				<strong {...api.getTitleProps()} className="whitespace-nowrap">
					{api.title}
				</strong>
				<p {...api.getDescriptionProps()}>{api.description}</p>
			</div>
			<button onClick={api.dismiss} className="btn preset-filled">
				&times;
			</button>
		</div>
	);
};

// Toast Provider
export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
	// Zag
	const [state, send] = useMachine(
		toast.group.machine({
			id: useId()
		})
	);
	const api = toast.group.connect(state, send, normalizeProps);

	return (
		<ToastContext.Provider value={api}>
			{api.getPlacements().map((placement) => (
				<div key={placement} {...api.getGroupProps({ placement })}>
					{api.getToastsByPlacement(placement).map((toast) => (
						<Toast key={toast.id} actor={toast} />
					))}
				</div>
			))}
			{children}
		</ToastContext.Provider>
	);
};
