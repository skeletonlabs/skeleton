import { Toast, createToaster } from '@skeletonlabs/skeleton-react';

export default function Promise_() {
	const toaster = createToaster({});

	function generatePositiveNumber() {
		return new Promise<number>((resolve, reject) => {
			setTimeout(() => {
				const number = Math.random() - 0.5;
				if (number > 0) {
					resolve(number);
				} else {
					reject(number);
				}
			}, 2000);
		});
	}

	return (
		<>
			<button
				className="btn preset-filled"
				onClick={() =>
					toaster.promise(generatePositiveNumber(), {
						loading: {
							title: 'Loading...',
							description: 'Please wait while generating your number',
						},
						success: (number) => ({
							title: 'Success',
							description: `Your number is ${number.toFixed(2)}`,
						}),
						error: (number) => ({
							title: 'Error',
							description: `Your number is ${(number as number).toFixed(2)}`,
						}),
					})
				}
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
						<Toast.CloseTrigger />
					</Toast>
				)}
			</Toast.Group>
		</>
	);
}
