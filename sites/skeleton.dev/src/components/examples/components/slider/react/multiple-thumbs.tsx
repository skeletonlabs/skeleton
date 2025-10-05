import { Slider } from '@skeletonlabs/skeleton-react';

export default function MultipleThumbs() {
	return (
		<Slider defaultValue={[25, 75]}>
			<Slider.Control>
				<Slider.Track>
					<Slider.Range />
				</Slider.Track>
				<Slider.Thumb index={0}>
					<Slider.HiddenInput />
				</Slider.Thumb>
				<Slider.Thumb index={1}>
					<Slider.HiddenInput />
				</Slider.Thumb>
			</Slider.Control>
		</Slider>
	);
}
