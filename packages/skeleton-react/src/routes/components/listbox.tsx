import { Listbox } from '$lib/index.js';
import { useState } from 'react';

export function Component() {
	const [single, setSingle] = useState('');
	const [multiple, setMultiple] = useState<string[]>([]);
	const [form, setForm] = useState<ReturnType<FormData['getAll']>>([]);
	const [selected, setSelected] = useState('');
	const [scrollable, setScrollable] = useState('');

	const fruits = ['Apple', 'Banana', 'Orange', 'Pineapple'];
	return (
		<div className="space-y-10">
			<header>
				<h1 className="h1">Listbox</h1>
			</header>

			<section className="space-y-4">
				<h2 className="h2">Single</h2>
				<Listbox value={single} onChange={setSingle} name="value">
					{fruits.map((fruit) => (
						<Listbox.Item key={fruit} value={fruit}>
							{fruit}
						</Listbox.Item>
					))}
				</Listbox>
				<pre className="pre">Value: {JSON.stringify(single)}</pre>
			</section>

			<section className="space-y-4">
				<h2 className="h2">Multiple</h2>
				<Listbox value={multiple} onChange={setMultiple} name="value">
					{fruits.map((fruit) => (
						<Listbox.Item key={fruit} value={fruit}>
							{fruit}
						</Listbox.Item>
					))}
				</Listbox>
				<pre className="pre">Value: {JSON.stringify(multiple)}</pre>
			</section>

			<section className="space-y-4">
				<h2 className="h2">Form</h2>
				<form
					className="grid gap-2"
					onSubmit={(e) => {
						e.preventDefault();
						setForm(new FormData(e.currentTarget).getAll('value'));
					}}
				>
					<Listbox value={[]} onChange={setForm} name="value">
						{fruits.map((fruit) => (
							<Listbox.Item key={fruit} value={fruit}>
								{fruit}
							</Listbox.Item>
						))}
					</Listbox>
					<button className="btn preset-filled">Submit</button>
				</form>
				<pre className="pre">Value: {JSON.stringify(form)}</pre>
			</section>

			<section className="space-y-4">
				<h2 className="h2">Selected</h2>
				<Listbox value={selected} onChange={setSelected} name="value">
					{fruits.map((fruit) => (
						<Listbox.Item key={fruit} value={fruit}>
							{fruit}
						</Listbox.Item>
					))}
				</Listbox>
				<pre className="pre">Value: {JSON.stringify(selected)}</pre>
			</section>

			<section className="space-y-4">
				<h2 className="h2">Scrollable</h2>
				<Listbox classes="h-32" value={scrollable} onChange={setScrollable} name="value">
					{fruits.map((fruit) => (
						<Listbox.Item key={fruit} value={fruit}>
							{fruit}
						</Listbox.Item>
					))}
				</Listbox>
				<pre className="pre">Value: {JSON.stringify(scrollable)}</pre>
			</section>
		</div>
	);
}
