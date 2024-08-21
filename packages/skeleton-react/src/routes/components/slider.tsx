import { useState } from 'react';
import { Slider } from '$lib/components/Slider/Slider.js';

export function Component() {
	const [example, setExample] = useState([40]);
	const [exampleMulti, setExampleMulti] = useState([40, 60]);

	return (
		<div className="space-y-10">
			<header>
				<h1 className="h1">Slider</h1>
			</header>
			<section className="space-y-4">
				<pre className="pre">{example}</pre>
				<Slider name="example" value={example} onValueChange={setExample} />
			</section>
			<section className="space-y-4">
				<h2 className="h2">Multiple</h2>
				<pre className="pre">{exampleMulti.join(' - ')}</pre>
				<Slider value={exampleMulti} onValueChange={setExampleMulti} />
			</section>
			<section className="space-y-4">
				<h2 className="h2">Colors</h2>
				<Slider value={example} onValueChange={setExample} meterBg="bg-primary-500" thumbRingColor="ring-primary-500" />
				<Slider value={example} onValueChange={setExample} meterBg="bg-secondary-500" thumbRingColor="ring-secondary-500" />
				<Slider value={example} onValueChange={setExample} meterBg="bg-tertiary-500" thumbRingColor="ring-tertiary-500" />
			</section>
			<section className="space-y-8">
				<h2 className="h2">RTL</h2>
				<Slider value={example} onValueChange={setExample} dir="rtl" />
				<Slider value={exampleMulti} onValueChange={setExampleMulti} dir="rtl" />
			</section>
		</div>
	);
}
