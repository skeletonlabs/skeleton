import { Toast, type createToaster } from '../../../src/index.js';

export default function Test(props: { toaster: ReturnType<typeof createToaster> }) {
	return (
		<Toast.Group toaster={props.toaster} data-testid="group">
			{(toast) => (
				<Toast key={toast.id} toast={toast} data-testid="root">
					<Toast.Title data-testid="title" />
					<Toast.Description data-testid="description" />
					<Toast.ActionTrigger data-testid="action-trigger" />
					<Toast.CloseTrigger data-testid="close-trigger" />
				</Toast>
			)}
		</Toast.Group>
	);
}
