import { Toaster, createToaster } from '@skeletonlabs/skeleton-react';

export default function () {
	const toaster = createToaster();
	return (
		<>
			<Toaster toaster={toaster}></Toaster>
			<button
				className="btn preset-filled"
				onClick={() => {
					toaster.info({
						title: 'This is an unclosable toast!',
						closable: false
					});
				}}
			>
				Toast
			</button>
		</>
	);
}
