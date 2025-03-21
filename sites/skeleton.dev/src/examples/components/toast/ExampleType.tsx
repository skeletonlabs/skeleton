'use client';

import { Toaster, createToaster } from '@skeletonlabs/skeleton-react';

export default function () {
	const toaster = createToaster();
	return (
		<>
			<Toaster toaster={toaster}></Toaster>
			<div className="flex gap-2">
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
					className="btn preset-tonal-warning"
					onClick={() => {
						toaster.warning({
							title: 'This is a toast!'
						});
					}}
				>
					Success
				</button>
				<button
					className="btn preset-tonal-error"
					onClick={() => {
						toaster.error({
							title: 'This is a toast!'
						});
					}}
				>
					Warning
				</button>
				<button
					className="btn preset-tonal-success"
					onClick={() => {
						toaster.success({
							title: 'This is a toast!'
						});
					}}
				>
					Success
				</button>
			</div>
		</>
	);
}
