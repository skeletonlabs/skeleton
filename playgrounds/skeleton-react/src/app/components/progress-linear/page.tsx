'use client';

import { ProgressLinear } from '@skeletonlabs/skeleton-react';
import { useState } from 'react';

export default function Page() {
	const [value, setValue] = useState<number | null>(25);
	return (
		<div className="space-y-10">
			<header>
				<h2 className="h2">Progress Linear</h2>
			</header>
			<section className="space-y-4">
				<ProgressLinear value={value} onValueChange={(e) => setValue(e.value)}>
					<ProgressLinear.Track>
						<ProgressLinear.Range />
					</ProgressLinear.Track>
				</ProgressLinear>
			</section>
			<section className="space-y-4">
				<h2 className="h2">Colors</h2>
				<ProgressLinear value={value} onValueChange={(e) => setValue(e.value)}>
					<ProgressLinear.Track className="bg-primary-50-950">
						<ProgressLinear.Range className="bg-primary-500" />
					</ProgressLinear.Track>
				</ProgressLinear>
				<ProgressLinear value={value} onValueChange={(e) => setValue(e.value)}>
					<ProgressLinear.Track className="bg-secondary-50-950">
						<ProgressLinear.Range className="bg-secondary-500" />
					</ProgressLinear.Track>
				</ProgressLinear>
				<ProgressLinear value={value} onValueChange={(e) => setValue(e.value)}>
					<ProgressLinear.Track className="bg-tertiary-50-950">
						<ProgressLinear.Range className="bg-tertiary-500" />
					</ProgressLinear.Track>
				</ProgressLinear>
			</section>
			<section className="space-y-4">
				<h2 className="h2">Height</h2>
				<ProgressLinear value={value} onValueChange={(e) => setValue(e.value)}>
					<ProgressLinear.Track>
						<ProgressLinear.Range />
					</ProgressLinear.Track>
				</ProgressLinear>
				<ProgressLinear value={value} onValueChange={(e) => setValue(e.value)}>
					<ProgressLinear.Track className="h-4 rounded-full">
						<ProgressLinear.Range className="rounded-full" />
					</ProgressLinear.Track>
				</ProgressLinear>
				<ProgressLinear value={value} onValueChange={(e) => setValue(e.value)}>
					<ProgressLinear.Track className="h-8 rounded-full">
						<ProgressLinear.Range className="rounded-full" />
					</ProgressLinear.Track>
				</ProgressLinear>
			</section>
			<section className="space-y-4">
				<h3 className="h3">Orientation</h3>
				<div className="flex flex-row items-start gap-4">
					<ProgressLinear orientation="vertical" value={value} onValueChange={(e) => setValue(e.value)}>
						<ProgressLinear.Label>{value}%</ProgressLinear.Label>
						<ProgressLinear.Track>
							<ProgressLinear.Range />
						</ProgressLinear.Track>
					</ProgressLinear>
					<ProgressLinear orientation="vertical" value={undefined}>
						<ProgressLinear.Label>null</ProgressLinear.Label>
						<ProgressLinear.Track>
							<ProgressLinear.Range />
						</ProgressLinear.Track>
					</ProgressLinear>
				</div>
			</section>
			<section className="space-y-4">
				<h3 className="h3">Labeled</h3>
				<ProgressLinear value={value} onValueChange={(e) => setValue(e.value)}>
					<ProgressLinear.Label>{value}%</ProgressLinear.Label>
					<ProgressLinear.Track>
						<ProgressLinear.Range />
					</ProgressLinear.Track>
				</ProgressLinear>
			</section>
			<section className="space-y-4">
				<h3 className="h3">Indeterminate</h3>
				<ProgressLinear value={undefined}>
					<ProgressLinear.Track>
						<ProgressLinear.Range />
					</ProgressLinear.Track>
				</ProgressLinear>
			</section>
		</div>
	);
}
