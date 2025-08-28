import { Toaster, createToaster } from '@skeletonlabs/skeleton-react';

export default function () {
	const toaster = createToaster();

	function getTask() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (Math.random() > 0.5) {
					resolve(undefined);
				} else {
					reject();
				}
			}, 2000);
		});
	}
	return (
		<>
			<Toaster toaster={toaster}></Toaster>
			<button
				className="btn preset-filled"
				onClick={() => {
					toaster.promise(getTask(), {
						loading: {
							title: 'Loading...',
							description: 'Please wait while the task is being processed.'
						},
						success: () => ({
							title: 'Success',
							description: 'Your request has been completed'
						}),
						error: () => ({
							title: 'Error',
							description: 'An error has occurred'
						})
					});
				}}
			>
				Execute Task
			</button>
		</>
	);
}
