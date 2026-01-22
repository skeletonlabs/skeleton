import { Toast, createToaster } from '@skeletonlabs/skeleton-react';

export default function Placement() {
	const toaster = createToaster({
		placement: 'bottom-end',
	});

	return (
		<>
			<button
				className="btn preset-filled"
				onClick={() =>
					toaster.info({
						title: 'Title',
						description: 'This is a description.',
					})
				}
			>
				Toast
			</button>
			<Toast.Group toaster={toaster}>
				{(toast, index) => (
					<Toast toast={toast} key={toast.id} index={index}>
						<Toast.Message>
							<Toast.Title>{toast.title}</Toast.Title>
							<Toast.Description>{toast.description}</Toast.Description>
						</Toast.Message>
						<Toast.CloseTrigger />
					</Toast>
				)}
			</Toast.Group>
		</>
	);
}
