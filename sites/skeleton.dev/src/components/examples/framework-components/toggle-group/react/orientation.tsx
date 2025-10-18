import { ToggleGroup } from '@skeletonlabs/skeleton-react';
import { BoldIcon, ItalicIcon, UnderlineIcon } from 'lucide-react';

export default function Orientation() {
	return (
		<div className="flex gap-4 flex-col sm:flex-row">
			<div>
				<p className="mb-2">Horizontal</p>
				<ToggleGroup defaultValue={['bold']} multiple orientation="horizontal">
					<ToggleGroup.Item value="bold">
						<BoldIcon className="size-4" />
					</ToggleGroup.Item>
					<ToggleGroup.Item value="italic">
						<ItalicIcon className="size-4" />
					</ToggleGroup.Item>
					<ToggleGroup.Item value="underline">
						<UnderlineIcon className="size-4" />
					</ToggleGroup.Item>
				</ToggleGroup>
			</div>

			<div>
				<p className="mb-2">Vertical</p>
				<ToggleGroup defaultValue={['bold']} multiple orientation="vertical" className="flex-col">
					<ToggleGroup.Item value="bold">
						<BoldIcon className="size-4" />
					</ToggleGroup.Item>
					<ToggleGroup.Item value="italic">
						<ItalicIcon className="size-4" />
					</ToggleGroup.Item>
					<ToggleGroup.Item value="underline">
						<UnderlineIcon className="size-4" />
					</ToggleGroup.Item>
				</ToggleGroup>
			</div>
		</div>
	);
}
