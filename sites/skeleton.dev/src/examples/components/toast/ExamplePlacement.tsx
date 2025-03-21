'use client';

import { Toaster, createToaster } from '@skeletonlabs/skeleton-react';

export default function () {
	const toaster = createToaster({
		placement: 'top-end'
	});
	return (
		<>
			<Toaster toaster={toaster}></Toaster>
			<button
				className="btn preset-filled"
				onClick={() => {
					toaster.info({
						title: 'This is a toast!'
					});
				}}
			>
				Toast!
			</button>
		</>
	);
}
