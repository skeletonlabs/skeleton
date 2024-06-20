import { ProgressRing } from '@skeletonlabs/skeleton-react';
import { ThermometerSun as IconThermometer } from 'lucide-react';

export const Page = () => {
	return (
		<ProgressRing value={60} max={100} meterStroke="stroke-error-500" strokeLinecap="butt">
			<IconThermometer size={48} />
		</ProgressRing>
	);
};
