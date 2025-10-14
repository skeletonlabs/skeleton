import { ToggleGroup } from '@skeletonlabs/skeleton-react';
import { BoldIcon, ItalicIcon, UnderlineIcon } from 'lucide-react';

export default function Dir() {
	return (
		<ToggleGroup defaultValue={['bold']} multiple dir="rtl">
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
	);
}
