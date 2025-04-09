'use client';

import { appToaster } from './toaster-react';

export default function () {
	return (
		<>
			<button
				className="btn preset-filled"
				onClick={() => {
					appToaster.info({
						title: 'This is a toast!'
					});
				}}
			>
				Toast
			</button>
		</>
	);
}
