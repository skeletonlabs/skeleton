import { ToggleGroup } from '@skeletonlabs/skeleton-react';
import { BoldIcon, ItalicIcon, UnderlineIcon } from 'lucide-react';
import { useState } from 'react';

export default function Controlled() {
	const [value, setValue] = useState(['bold']);

	return (
		<div className="flex flex-col items-center gap-4">
			<ToggleGroup value={value} onValueChange={(details) => setValue(details.value)} multiple>
				<ToggleGroup.Item value="bold">
					<BoldIcon />
				</ToggleGroup.Item>
				<ToggleGroup.Item value="italic">
					<ItalicIcon />
				</ToggleGroup.Item>
				<ToggleGroup.Item value="underline">
					<UnderlineIcon />
				</ToggleGroup.Item>
			</ToggleGroup>
			<pre className="pre">{JSON.stringify(value)}</pre>
		</div>
	);
}
