import { useState } from 'react';
import { Progress } from '../../lib/components/Progress/Progress.js';

export function Component() {
	const [value, setValue] = useState(50);
	const [max, setMax] = useState(100);

	return (
		<div className="space-y-10">
			<header>
				<h1 className="h1">Progress</h1>
			</header>
			<section className="grid grid-cols-2 gap-4">
				<label className="label">
					<span className="label-text">Value</span>
					<input className="input" type="number" value={value} onInput={(e) => setValue(e.currentTarget.valueAsNumber)} />
				</label>
				<label className="label">
					<span className="label-text">Max</span>
					<input className="input" type="number" value={max} onInput={(e) => setMax(e.currentTarget.valueAsNumber)} />
				</label>
			</section>
			<section className="space-y-4">
				<h2 className="h2">Preview</h2>
				<Progress value={value} max={max} />
			</section>
			<section className="space-y-4">
				<h2 className="h2">Height</h2>
				<p>h-2 (default)</p>
				<Progress value={value} max={max} />
				<p>h-4</p>
				<Progress value={value} max={max} height="h-4" />
				<p>h-8</p>
				<Progress value={value} max={max} height="h-8" />
			</section>
			<section className="space-y-4">
				<h2 className="h2">Rounded</h2>
				<p>rounded (default)</p>
				<Progress value={value} max={max} />
				<p>rounded-sm</p>
				<Progress value={value} max={max} rounded="rounded-sm" meterRounded="rounded-sm" />
				<p>rounded-none</p>
				<Progress value={value} max={max} rounded="rounded-none" meterRounded="rounded-none" />
			</section>
			<section className="space-y-4">
				<h2 className="h2">Colors</h2>
				<p>bg-primary-500 (default)</p>
				<Progress value={value} max={max} />
				<p>bg-secondary-500</p>
				<Progress value={value} max={max} meterClasses="bg-secondary-500" />
				<p>bg-tertiary-500</p>
				<Progress value={value} max={max} meterClasses="bg-tertiary-500" />
			</section>
			<section className="space-y-4">
				<h2 className="h2">Indeterminate</h2>
				<p>indeterminate (default)</p>
				<Progress max={max} />
				<p>custom-indeterminate</p>
				{/* NOTE: `custom-indeterminate` defined in app.pcss */}
				<Progress max={max} meterAnimate="custom-indeterminate" />
			</section>
			<section className="space-y-4">
				<h2 className="h2">RTL</h2>
				<div dir="rtl" className="space-y-4">
					<Progress value={value} max={max} />
					<Progress value={value} max={max} meterClasses="bg-secondary-500" />
					<Progress value={value} max={max} meterClasses="bg-tertiary-500" />
				</div>
			</section>
		</div>
	);
}
