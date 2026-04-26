import { QrCode } from '@skeletonlabs/skeleton-react';
import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';

export const Route = createFileRoute('/components/qr-code/')({
	component: Page,
});

function Page() {
	const [value, setValue] = useState('https://github.com/skeletonlabs/skeleton');

	return (
		<div className="mx-auto flex max-w-5xl flex-col gap-8 lg:flex-row lg:items-start">
			<div className="flex-1 space-y-4">
				<div className="space-y-2">
					<p className="text-sm uppercase tracking-[0.3em] text-surface-500-400">Playground entry</p>
					<h1 className="h3">QR Code</h1>
					<p className="max-w-prose text-surface-600-300">Edit the encoded value and inspect the frame, pattern, and overlay parts.</p>
				</div>
				<label className="block space-y-2">
					<span className="text-sm font-medium">Value</span>
					<input className="input w-full" value={value} onChange={(event) => setValue(event.target.value)} />
				</label>
				<div className="flex flex-wrap gap-2">
					<button className="btn preset-soft" type="button" onClick={() => setValue('https://github.com/skeletonlabs/skeleton')}>
						Skeleton
					</button>
					<button className="btn preset-soft" type="button" onClick={() => setValue('https://zagjs.com/components/react/qr-code')}>
						Zag QR Code
					</button>
					<button className="btn preset-soft" type="button" onClick={() => setValue('hello world')}>
						Plain text
					</button>
				</div>
			</div>

			<div className="rounded-large border border-surface-300/60 bg-surface-50-950 p-6 shadow-sm">
				<QrCode value={value} pixelSize={7} className="relative w-fit">
					<QrCode.Frame className="h-64 w-64 rounded-xl bg-surface-100-900 p-4">
						<QrCode.Pattern className="fill-current text-surface-900 dark:text-white" />
					</QrCode.Frame>
					<QrCode.Overlay className="absolute inset-0 flex items-center justify-center">
						<div className="rounded-full border border-white/30 bg-surface-900/90 px-3 py-2 text-xs font-bold uppercase tracking-[0.3em] text-white shadow-lg">
							QR
						</div>
					</QrCode.Overlay>
				</QrCode>
			</div>
		</div>
	);
}
