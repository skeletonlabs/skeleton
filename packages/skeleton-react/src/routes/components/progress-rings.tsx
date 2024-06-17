import { useState } from 'react';
import { ProgressRing } from '../../lib/components/ProgressRing/ProgressRing.js';
import { ThermometerSun as IconThermometer } from 'lucide-react';

export function Component() {
	const [value, setValue] = useState(50);
	const [max, setMax] = useState(100);

	return (
		<div className="space-y-10">
			<header>
				<h1 className="h1">Progress Ring</h1>
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
				<ProgressRing value={value} max={max} />
			</section>
			<section className="space-y-4">
				<h2 className="h2">Icons</h2>
				<ProgressRing value={value} max={max} meterStroke="stroke-error-500">
					<IconThermometer size={48} />
				</ProgressRing>
			</section>
			<section className="space-y-4">
				<h2 className="h2">Indeterminate</h2>
				<ProgressRing meterStroke="stroke-tertiary-600-400" trackStroke="stroke-tertiary-50-950" />
			</section>
		</div>
	);
}
