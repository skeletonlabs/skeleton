import { Toast, createToaster } from '@skeletonlabs/skeleton-react';
import { SkullIcon } from 'lucide-react';

export default function Meta() {
	const toaster = createToaster();

	return (
		<>
			<button
				className="btn preset-filled"
				onClick={() =>
					toaster.info({
						title: 'Title',
						description: 'This is a description.',
						meta: {
							icon: <SkullIcon className="size-8" />,
						},
					})
				}
			>
				Toast
			</button>
			<Toast.Group toaster={toaster}>
				{(toast) => (
					<Toast toast={toast} key={toast.id}>
						{toast.meta!.icon}
						<Toast.Message>
							<Toast.Title className="flex gap-2 items-center">{toast.title}</Toast.Title>
							<Toast.Description>{toast.description}</Toast.Description>
						</Toast.Message>
						<Toast.CloseTrigger />
					</Toast>
				)}
			</Toast.Group>
		</>
	);
}
