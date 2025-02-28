'use client';
import { useState } from 'react';
import { Slider } from '@skeletonlabs/skeleton-react';

export default function Page() {
	const [value, setValue] = useState([40]);
	const [valueMulti, setValueMulti] = useState([40, 60]);

	return (
		<div className="space-y-10">
			<header>
				<h1 className="h1">Slider</h1>
			</header>
			<section className="space-y-4">
				<pre className="pre">{value}</pre>
				<Slider name="example" value={value} onValueChange={(e) => setValue(e.value)} />
			</section>
			<section className="space-y-4">
				<h2 className="h2">Multiple</h2>
				<pre className="pre">{valueMulti.join(' - ')}</pre>
				<Slider value={valueMulti} onValueChange={(e) => setValueMulti(e.value)} />
			</section>
			<section className="space-y-8">
				<h2 className="h2">Markers</h2>
				<Slider name="example" value={value} onValueChange={(e) => setValue(e.value)} markers={[25, 50, 75]} />
			</section>
			<section className="space-y-4">
				<h2 className="h2">Height</h2>
				<Slider name="value" value={value} onValueChange={(e) => setValue(e.value)} height="h-1" />
				<Slider name="value" value={value} onValueChange={(e) => setValue(e.value)} height="h-6" thumbSize="size-8" />
			</section>
			<section className="space-y-8">
				<h2 className="h2">Colors</h2>
				<Slider value={value} onValueChange={(e) => setValue(e.value)} meterBg="bg-primary-500" thumbRingColor="ring-primary-500" />
				<Slider value={value} onValueChange={(e) => setValue(e.value)} meterBg="bg-secondary-500" thumbRingColor="ring-secondary-500" />
				<Slider value={value} onValueChange={(e) => setValue(e.value)} meterBg="bg-tertiary-500" thumbRingColor="ring-tertiary-500" />
			</section>
			<section className="space-y-4">
				<h2 className="h2">State</h2>
				<h3 className="h3">Disabled</h3>
				<Slider name="value" value={value} onValueChange={(e) => setValue(e.value)} disabled />
				<h3 className="h3">Read-Only</h3>
				<Slider name="value" value={value} onValueChange={(e) => setValue(e.value)} readOnly />
			</section>
			<section className="space-y-8">
				<h2 className="h2">RTL</h2>
				<Slider value={value} onValueChange={(e) => setValue(e.value)} dir="rtl" />
				<Slider value={valueMulti} onValueChange={(e) => setValueMulti(e.value)} dir="rtl" />
			</section>
		</div>
	);
}
