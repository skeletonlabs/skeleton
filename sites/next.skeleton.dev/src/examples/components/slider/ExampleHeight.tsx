import { useState } from 'react';
import { Slider } from '@skeletonlabs/skeleton-react';

export const Page: React.FC = () => {
	const [value, setValue] = useState([40]);

	return (
		<div className="w-full space-y-8">
			<Slider name="value" value={value} onValueChange={setValue} height="h-1" />
			<Slider name="value" value={value} onValueChange={setValue} height="h-6" thumbSize="size-8" />
		</div>
	);
};
