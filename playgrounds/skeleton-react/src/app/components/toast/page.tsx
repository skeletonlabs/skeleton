'use client';

import { createToaster, Toast } from '@skeletonlabs/skeleton-react';

export default function Page() {
	const toaster = createToaster({});
	return (
		<>
			<button
				className="btn preset-filled"
				onClick={() => toaster.create({ type: '', title: 'Toast', description: 'This is a toast message.', duration: Infinity })}
			>
				Show Toast
			</button>
			<Toast.Group toaster={toaster}>
				{(toast) => (
					<Toast key={toast.id} toast={toast}>
						<Toast.Title>{toast.title}</Toast.Title>
						<Toast.Description>{toast.description}</Toast.Description>
						<Toast.CloseTrigger>Close</Toast.CloseTrigger>
					</Toast>
				)}
			</Toast.Group>
		</>
	);
}
