import { Toast, createToaster } from '@skeletonlabs/skeleton-react';
import { Skull } from 'lucide-react';

export default function () {
	const toaster = createToaster({});

	return (
		<>
			<button
				className="btn preset-filled"
				onClick={() =>
					toaster.info({
						title: 'Title',
						description: 'This is a description.',
						meta: {
							icon: <Skull className="size-4" />
						}
					})
				}
			>
				Toast
			</button>
			<Toast.Group toaster={toaster}>
				{(toast) => (
					<Toast toast={toast} key={toast.id}>
						<Toast.Message>
							<Toast.Title className="flex gap-2 items-center">
								{toast.title}
								{toast.meta!.icon}
							</Toast.Title>
							<Toast.Description>{toast.description}</Toast.Description>
						</Toast.Message>
						<Toast.CloseTrigger />
					</Toast>
				)}
			</Toast.Group>
		</>
	);
}
