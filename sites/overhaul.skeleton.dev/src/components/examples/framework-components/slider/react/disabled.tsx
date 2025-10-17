import { Slider } from '@skeletonlabs/skeleton-react';

export default function Disabled() {
	return (
		<Slider defaultValue={[50]} disabled>
			<Slider.Control>
				<Slider.Track>
					<Slider.Range />
				</Slider.Track>
				<Slider.Thumb index={0}>
					<Slider.HiddenInput />
				</Slider.Thumb>
			</Slider.Control>
		</Slider>
	);
}
