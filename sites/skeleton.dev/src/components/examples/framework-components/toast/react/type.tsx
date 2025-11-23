import { Toast, createToaster } from '@skeletonlabs/skeleton-react';

export default function Type() {
	const toaster = createToaster();

	return (
		<>
			<div className="grid grid-cols-2 gap-2">
				<button
					className="btn preset-filled"
					onClick={() =>
						toaster.info({
							title: 'Info',
							description: 'This is an info toast.',
						})
					}
				>
					Info
				</button>
				<button
					className="btn preset-filled-success-500"
					onClick={() =>
						toaster.success({
							title: 'Success',
							description: 'This is a success toast.',
						})
					}
				>
					Success
				</button>
				<button
					className="btn preset-filled-warning-500"
					onClick={() =>
						toaster.warning({
							title: 'Warning',
							description: 'This is a warning toast.',
						})
					}
				>
					Warning
				</button>
				<button
					className="btn preset-filled-error-500"
					onClick={() =>
						toaster.error({
							title: 'Error',
							description: 'This is an error toast.',
						})
					}
				>
					Error
				</button>
			</div>
			<Toast.Group toaster={toaster}>
				{(toast) => (
					<Toast toast={toast} key={toast.id}>
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
