import { useState } from 'react';
import { Slider } from '@skeletonlabs/skeleton-react';

export const Page: React.FC = () => {
	const [value, setValue] = useState([40]);

	return (
		<div className="w-full space-y-8">
			<Slider value={value} onValueChange={setValue} meterBg="bg-primary-500" thumbRingColor="ring-primary-500" />
			<Slider value={value} onValueChange={setValue} meterBg="bg-secondary-500" thumbRingColor="ring-secondary-500" />
			<Slider value={value} onValueChange={setValue} meterBg="bg-tertiary-500" thumbRingColor="ring-tertiary-500" />
		</div>
	);
};
