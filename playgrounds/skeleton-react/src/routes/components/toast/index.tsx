'use client';

import { Toast, createToaster } from '@skeletonlabs/skeleton-react';
import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';

export const Route = createFileRoute('/components/toast/')({
	component: Page,
});

function Page() {
	const [overlap, setOverlap] = useState(false);
	const [duration, setDuration] = useState<number>(Infinity);

	const [toaster] = useState(createToaster({ overlap }));

	useEffect(() => {
		toaster.attrs.overlap = overlap;
	}, [toaster.attrs.overlap, overlap]);

	return (
		<>
			<button
				className="btn preset-filled"
				onClick={() =>
					toaster.info({
						title: 'Toast',
						description: 'This is a toast message.',
						action: { label: 'Undo', onClick: () => {} },
						duration,
					})
				}
			>
				Toast
			</button>

			<label className="label">
				<span className="label-text">Options</span>
				<div className="rounded-container border border-surface-200-800 p-2 flex flex-col gap-2">
					<label className="flex items-center space-x-2">
						<input className="checkbox" type="checkbox" checked={overlap} onChange={(e) => setOverlap(e.currentTarget.checked)} />
						<span>Overlap</span>
					</label>

					<label className="label">
						<span className="label-text">Duration (ms)</span>
						<input className="input w-32" type="number" value={duration} onChange={(e) => setDuration(e.currentTarget.valueAsNumber)} />
					</label>
				</div>
			</label>

			<Toast.Group toaster={toaster}>
				{(toast, index) => (
					<Toast toast={toast} key={toast.id} index={index}>
						<Toast.Message>
							<Toast.Title>{toast.title}</Toast.Title>
							<Toast.Description>{toast.description}</Toast.Description>
						</Toast.Message>
						{toast.action && <Toast.ActionTrigger>{toast.action.label}</Toast.ActionTrigger>}
						<Toast.CloseTrigger />
					</Toast>
				)}
			</Toast.Group>
		</>
	);
}
