'use client';

import { createToaster, Toast } from '@skeletonlabs/skeleton-react';

export default function Page() {
	const toaster = createToaster({});
	return (
		<>
			<button
				className="btn preset-filled"
				onClick={() =>
					toaster.info({
						title: 'Toast',
						description: 'This is a toast message.',
						action: { label: 'Undo', onClick: () => {} },
						duration: Infinity
					})
				}
			>
				Toast
			</button>
			<Toast.Group toaster={toaster}>
				{(toast) => (
					<Toast key={toast.id} toast={toast}>
						<Toast.Message>
							<Toast.Title>{toast.title}</Toast.Title>
							<Toast.Description>{toast.description}</Toast.Description>
						</Toast.Message>
						{toast.action && <Toast.ActionTrigger>{toast.action.label}</Toast.ActionTrigger>}
						<Toast.CloseTrigger />
					</Toast>
				)}
			</Toast.Group>
		</>
	);
}
