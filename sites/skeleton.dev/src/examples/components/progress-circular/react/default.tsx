import { Progress, Slider } from '@skeletonlabs/skeleton-react';
import { useState } from 'react';

export default function Default() {
	const [value, setValue] = useState(50);
	return (
		<div className="flex flex-col gap-8 items-center">
			<Progress value={value} className="items-center w-fit">
				<Progress.Label>Label</Progress.Label>
				<Progress.Circle>
					<Progress.CircleTrack />
					<Progress.CircleRange />
				</Progress.Circle>
				<Progress.ValueText />
			</Progress>
			<Slider className="w-full" value={[value]} onValueChange={(e) => setValue(e.value[0])} step={10}>
				<Slider.Control>
					<Slider.Track>
						<Slider.Range />
					</Slider.Track>
					<Slider.Thumb index={0}>
						<Slider.HiddenInput />
					</Slider.Thumb>
				</Slider.Control>
			</Slider>
		</div>
	);
}
