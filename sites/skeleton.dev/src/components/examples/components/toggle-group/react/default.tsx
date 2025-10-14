import { ToggleGroup } from '@skeletonlabs/skeleton-react';
import { BoldIcon, ItalicIcon, UnderlineIcon } from 'lucide-react';

export default function Default() {
	return (
		<ToggleGroup defaultValue={['bold']} multiple>
			<ToggleGroup.Item value="bold">
				<BoldIcon className='size-4' />
			</ToggleGroup.Item>
			<ToggleGroup.Item value="italic">
				<ItalicIcon className='size-4' />
			</ToggleGroup.Item>
			<ToggleGroup.Item value="underline">
				<UnderlineIcon className='size-4' />
			</ToggleGroup.Item>
		</ToggleGroup>
	);
}
