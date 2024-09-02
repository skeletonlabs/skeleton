import { useState } from 'react';
import { TagsInput } from '$lib/components/TagsInput/TagsInput.js';
import { XCircle as IconDelete } from 'lucide-react';

export function Component() {
	const [flavors, setFlavors] = useState(['Vanilla', 'Chocolate', 'Stawberry']);

	return (
		<div className="space-y-10">
			<header>
				<h1 className="h1">Tags Input</h1>
			</header>
			<pre className="pre">{JSON.stringify(flavors, null, 2)}</pre>
			<section className="space-y-4">
				<TagsInput name="example" value={flavors} onValueChange={setFlavors} placeholder="Add Tag..." />
			</section>
			<section className="space-y-4">
				<h2 className="h2">Icons</h2>
				<TagsInput value={flavors} onValueChange={setFlavors} placeholder="Add Tag..." buttonDelete={<IconDelete className="size-4" />} />
			</section>
			<section className="space-y-4">
				<h2 className="h2">Colors</h2>
				<TagsInput value={flavors} onValueChange={setFlavors} placeholder="Add Tag..." tagBackground="preset-filled-primary-500" />
				<TagsInput value={flavors} onValueChange={setFlavors} placeholder="Add Tag..." tagBackground="preset-filled-secondary-500" />
				<TagsInput value={flavors} onValueChange={setFlavors} placeholder="Add Tag..." tagBackground="preset-filled-tertiary-500" />
			</section>
			<section className="space-y-4">
				<h2 className="h2">Misc</h2>
				<h3 className="h3">Not Editable</h3>
				<TagsInput value={flavors} onValueChange={setFlavors} placeholder="Add Tag..." editable={false} />
				<h3 className="h3">Add on Paste</h3>
				<TagsInput value={flavors} onValueChange={setFlavors} placeholder="Add Tag..." addOnPaste />
			</section>
		</div>
	);
}
