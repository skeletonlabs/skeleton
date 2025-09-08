import { Toast, createToaster } from '../../../src/index';

export default function () {
	const toaster = createToaster({});
	toaster.create({});
	return (
		<Toast.Group toaster={toaster} data-testid="group">
			{(toast) => (
				<Toast key={toast.id} toast={toast} data-testid="root">
					<Toast.Title data-testid="title" />
					<Toast.Description data-testid="description" />
					<Toast.CloseTrigger data-testid="close-trigger" />
				</Toast>
			)}
		</Toast.Group>
	);
}
