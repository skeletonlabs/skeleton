import { Progress, Slider } from '@skeletonlabs/skeleton-react';
import { useState } from 'react';

export default function Default() {
	const [value, setValue] = useState(50);

	return (
		<div className="w-full space-y-8">
			{/* Progress */}
			<Progress value={value} className="grid grid-cols-[auto_1fr] items-center gap-4">
				<Progress.Label className="text-sm">{value}%</Progress.Label>
				<Progress.Track>
					<Progress.Range />
				</Progress.Track>
			</Progress>

			{/* Control */}
			<Slider className="w-32 mx-auto" value={[value]} onValueChange={(e) => setValue(e.value[0])} step={10}>
				<Slider.Control>
					<Slider.Track>
						<Slider.Range className="bg-transparent" />
					</Slider.Track>
					<Slider.Thumb index={0}>
						<Slider.HiddenInput />
					</Slider.Thumb>
				</Slider.Control>
			</Slider>
		</div>
	);
}
