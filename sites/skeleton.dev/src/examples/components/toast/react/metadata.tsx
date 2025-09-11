import { Toast, createToaster } from '@skeletonlabs/skeleton-react';

export default function () {
	const toaster = createToaster({});

	return (
		<>
			<button
				className="btn preset-filled"
				onClick={() => toaster.info({ title: 'Title', description: 'The value of foo is:', meta: { foo: 'bar' } })}
			>
				Toast!
			</button>
			<Toast.Group toaster={toaster}>
				{(toast) => (
					<Toast toast={toast}>
						<Toast.Title>{toast.title}</Toast.Title>
						<Toast.Description>
							{toast.description} {toast.meta?.foo}
						</Toast.Description>
						<Toast.CloseTrigger />
					</Toast>
				)}
			</Toast.Group>
		</>
	);
}
