import { useState } from 'react';
import { Slider } from '$lib/components/Slider/Slider.js';

export function Component() {
	const [value, setValue] = useState([40]);
	const [valueMulti, setValueMulti] = useState([40, 60]);

	return (
		<div className="space-y-10">
			<header>
				<h1 className="h1">Slider</h1>
			</header>
			<section className="space-y-4">
				<pre className="pre">{value}</pre>
				<Slider name="example" value={value} onValueChange={setValue} />
			</section>
			<section className="space-y-4">
				<h2 className="h2">Multiple</h2>
				<pre className="pre">{valueMulti.join(' - ')}</pre>
				<Slider value={valueMulti} onValueChange={setValueMulti} />
			</section>
			<section className="space-y-8">
				<h2 className="h2">Markers</h2>
				<Slider name="example" value={value} onValueChange={setValue} markers={[25, 50, 75]} />
			</section>
			<section className="space-y-4">
				<h2 className="h2">Height</h2>
				<Slider name="value" value={value} onValueChange={setValue} height="h-1" />
				<Slider name="value" value={value} onValueChange={setValue} height="h-6" thumbSize="size-8" />
			</section>
			<section className="space-y-8">
				<h2 className="h2">Colors</h2>
				<Slider value={value} onValueChange={setValue} meterBg="bg-primary-500" thumbRingColor="ring-primary-500" />
				<Slider value={value} onValueChange={setValue} meterBg="bg-secondary-500" thumbRingColor="ring-secondary-500" />
				<Slider value={value} onValueChange={setValue} meterBg="bg-tertiary-500" thumbRingColor="ring-tertiary-500" />
			</section>
			<section className="space-y-4">
				<h2 className="h2">State</h2>
				<h3 className="h3">Disabled</h3>
				<Slider name="value" value={value} onValueChange={setValue} disabled />
				<h3 className="h3">Read-Only</h3>
				<Slider name="value" value={value} onValueChange={setValue} readOnly />
			</section>
			<section className="space-y-8">
				<h2 className="h2">RTL</h2>
				<Slider value={value} onValueChange={setValue} dir="rtl" />
				<Slider value={valueMulti} onValueChange={setValueMulti} dir="rtl" />
			</section>
		</div>
	);
}
