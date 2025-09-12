import { Toast, createToaster } from '@skeletonlabs/skeleton-react';

export default function () {
	const toaster = createToaster({});

	return (
		<>
			<button
				className="btn preset-filled"
				onClick={() =>
					toaster.info({
						title: 'Toast',
						description: 'This is a toast message.',
						duration: Infinity,
						action: {
							label: 'Undo',
							onClick: () => {
								toaster.success({ title: 'Task undone', description: 'The task has been undone.' });
							}
						}
					})
				}
			>
				Toast
			</button>

			<Toast.Group toaster={toaster}>
				{(toast) => (
					<Toast toast={toast}>
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
