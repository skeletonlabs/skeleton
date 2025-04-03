'use client';

import { Toaster, createToaster } from '@skeletonlabs/skeleton-react';

export default function () {
	const toaster = createToaster();
	return (
		<>
			<Toaster toaster={toaster}></Toaster>
			<div className="w-full max-w-72 grid grid-cols-2 gap-2">
				<button
					className="btn preset-filled"
					onClick={() => {
						toaster.info({
							title: 'This is a toast!'
						});
					}}
				>
					Info
				</button>
				<button
					className="btn preset-filled-success-500"
					onClick={() => {
						toaster.success({
							title: 'This is a toast!'
						});
					}}
				>
					Success
				</button>
				<button
					className="btn preset-filled-warning-500"
					onClick={() => {
						toaster.warning({
							title: 'This is a toast!'
						});
					}}
				>
					Warning
				</button>
				<button
					className="btn preset-filled-error-500"
					onClick={() => {
						toaster.error({
							title: 'This is a toast!'
						});
					}}
				>
					Error
				</button>
			</div>
		</>
	);
}
