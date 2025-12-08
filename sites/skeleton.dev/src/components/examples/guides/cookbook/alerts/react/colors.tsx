import { TriangleAlertIcon } from 'lucide-react';

export default function Colors() {
	return (
		<div className="w-full space-y-8">
			{/* Success */}
			<div className="card preset-outlined-success-500 grid grid-cols-1 items-center gap-4 p-4 lg:grid-cols-[1fr_auto]">
				<div>
					<p className="font-bold">Success</p>
					<p className="text-xs opacity-60">The task has been completed successfully.</p>
				</div>
				<div className="flex gap-1">
					<button className="btn preset-tonal hover:preset-filled">Dismiss</button>
				</div>
			</div>
			{/* Warning */}
			<div className="card preset-outlined-warning-500 grid grid-cols-1 items-center gap-4 p-4 lg:grid-cols-[auto_1fr_auto]">
				<TriangleAlertIcon />
				<div>
					<p className="font-bold">Warning</p>
					<p className="text-xs opacity-60">Beware of this important notice.</p>
				</div>
				<div className="flex gap-1">
					<button className="btn preset-tonal hover:preset-filled">Dismiss</button>
				</div>
			</div>
			{/* Error */}
			<div className="card preset-outlined-error-500 grid grid-cols-1 items-center gap-4 p-4 lg:grid-cols-[auto_1fr_auto]">
				<TriangleAlertIcon />
				<div>
					<p className="font-bold">Error</p>
					<p className="text-xs opacity-60">Something has gone wrong.</p>
				</div>
				<div className="flex gap-1">
					<button className="btn preset-tonal hover:preset-filled">Dismiss</button>
				</div>
			</div>
		</div>
	);
}
