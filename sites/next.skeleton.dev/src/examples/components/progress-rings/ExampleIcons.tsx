import { useState } from 'react';
import { ProgressRing } from '@skeletonlabs/skeleton-react';
import { ThermometerSun as IconThermometer } from 'lucide-react';

export const Page = () => {
	const [value] = useState(60);
	const [max] = useState(100);

	return (
		<ProgressRing value={value} max={max} meterStroke="stroke-error-500" strokeLinecap="butt">
			<IconThermometer size={48} />
		</ProgressRing>
	);
};
