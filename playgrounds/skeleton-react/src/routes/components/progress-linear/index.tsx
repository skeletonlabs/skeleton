'use client';

import { Progress } from '@skeletonlabs/skeleton-react';
import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';

export const Route = createFileRoute('/components/progress-linear/')({
	component: Page,
});

function Page() {
	const [value, setValue] = useState<number | null>(25);
	return (
		<div className="space-y-10">
			<header>
				<h2 className="h2">Progress Linear</h2>
			</header>
			<section className="space-y-4">
				<Progress value={value} onValueChange={(e) => setValue(e.value)}>
					<Progress.Track>
						<Progress.Range />
					</Progress.Track>
				</Progress>
			</section>
			<section className="space-y-4">
				<h2 className="h2">Colors</h2>
				<Progress value={value} onValueChange={(e) => setValue(e.value)}>
					<Progress.Track className="bg-primary-50-950">
						<Progress.Range className="bg-primary-500" />
					</Progress.Track>
				</Progress>
				<Progress value={value} onValueChange={(e) => setValue(e.value)}>
					<Progress.Track className="bg-secondary-50-950">
						<Progress.Range className="bg-secondary-500" />
					</Progress.Track>
				</Progress>
				<Progress value={value} onValueChange={(e) => setValue(e.value)}>
					<Progress.Track className="bg-tertiary-50-950">
						<Progress.Range className="bg-tertiary-500" />
					</Progress.Track>
				</Progress>
			</section>
			<section className="space-y-4">
				<h2 className="h2">Height</h2>
				<Progress value={value} onValueChange={(e) => setValue(e.value)}>
					<Progress.Track>
						<Progress.Range />
					</Progress.Track>
				</Progress>
				<Progress value={value} onValueChange={(e) => setValue(e.value)}>
					<Progress.Track className="h-4 rounded-full">
						<Progress.Range className="rounded-full" />
					</Progress.Track>
				</Progress>
				<Progress value={value} onValueChange={(e) => setValue(e.value)}>
					<Progress.Track className="h-8 rounded-full">
						<Progress.Range className="rounded-full" />
					</Progress.Track>
				</Progress>
			</section>
			<section className="space-y-4">
				<h3 className="h3">Orientation</h3>
				<div className="flex flex-row items-start gap-4">
					<Progress orientation="vertical" value={value} onValueChange={(e) => setValue(e.value)}>
						<Progress.Label>
							<Progress.ValueText />
						</Progress.Label>
						<Progress.Track>
							<Progress.Range />
						</Progress.Track>
					</Progress>
					<Progress orientation="vertical" value={undefined}>
						<Progress.Label>null</Progress.Label>
						<Progress.Track>
							<Progress.Range />
						</Progress.Track>
					</Progress>
				</div>
			</section>
			<section className="space-y-4">
				<h3 className="h3">Labeled</h3>
				<Progress value={value} onValueChange={(e) => setValue(e.value)}>
					<Progress.Label>
						<Progress.ValueText />
					</Progress.Label>
					<Progress.Track>
						<Progress.Range />
					</Progress.Track>
				</Progress>
			</section>
			<section className="space-y-4">
				<h3 className="h3">Indeterminate</h3>
				<Progress value={undefined}>
					<Progress.Track>
						<Progress.Range />
					</Progress.Track>
				</Progress>
			</section>
		</div>
	)
}
