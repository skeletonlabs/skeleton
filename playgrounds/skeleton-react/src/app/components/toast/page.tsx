'use client';

import { useContext } from 'react';
import { ToastContext } from '@skeletonlabs/skeleton-react';

export default function Page() {
	const toastContext = useContext(ToastContext);

	if (!toastContext) {
		throw new Error('ToastContext is not provided');
	}

	function triggerInfo() {
		toastContext.toaster.create({
			title: 'Info!',
			description: 'This is an info toast.',
			type: 'info'
		});
	}

	function triggerError() {
		toastContext.toaster.create({
			title: 'Error',
			description: 'An error occurred!',
			type: 'error'
		});
	}

	function triggerSuccess() {
		toastContext.toaster.create({
			title: 'Success',
			description: 'The task was successful!',
			type: 'success'
		});
	}

	return (
		<div className="space-y-10">
			<header>
				<h1 className="h1">Toasts</h1>
			</header>
			<section className="border border-surface-200-800 flex justify-center items-center gap-4 p-20">
				<button className="btn preset-tonal" onClick={triggerInfo}>
					Toast: Info
				</button>
				<button className="btn preset-tonal" onClick={triggerError}>
					Toast: Error
				</button>
				<button className="btn preset-tonal" onClick={triggerSuccess}>
					Toast: Success
				</button>
			</section>
		</div>
	);
}
