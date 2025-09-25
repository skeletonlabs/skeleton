import { Toast, createToaster } from '@/index';
import { useEffect } from 'react';

export default function ToastTest() {
	const toaster = createToaster({});
	useEffect(() => {
		toaster.create({});
	});
	return (
		<Toast.Group toaster={toaster} data-testid="group">
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
