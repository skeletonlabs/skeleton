import { Progress } from '@skeletonlabs/skeleton-react';
import { ThermometerSunIcon } from 'lucide-react';

export default function Icon() {
	return (
		<Progress className="w-fit relative">
			<div className="absolute inset-0 flex items-center justify-center">
				<ThermometerSunIcon />
			</div>
			<Progress.Circle>
				<Progress.CircleTrack />
				<Progress.CircleRange />
			</Progress.Circle>
		</Progress>
	);
}
