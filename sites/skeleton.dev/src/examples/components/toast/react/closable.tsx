import { Toast, createToaster } from '@skeletonlabs/skeleton-react';

export default function () {
	const toaster = createToaster({});

	return (
		<>
			<button
				className="btn preset-filled"
				onClick={() => toaster.info({ title: 'Title', description: 'This is a description.', closable: false })}
			>
				Toast
			</button>
			<Toast.Group toaster={toaster}>
				{(toast) => (
					<Toast toast={toast} key={toast.id}>
						<Toast.Message>
							<Toast.Title>{toast.title}</Toast.Title>
							<Toast.Description>{toast.description}</Toast.Description>
						</Toast.Message>
						{toast.closable && <Toast.CloseTrigger />}
					</Toast>
				)}
			</Toast.Group>
		</>
	);
}
