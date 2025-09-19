'use client';

import { Slider } from '@skeletonlabs/skeleton-react';

export default function Page() {
	return (
		<Slider>
			<Slider.Label>Label</Slider.Label>
			<Slider.ValueText />
			<Slider.Control>
				<Slider.Track>
					<Slider.Range />
				</Slider.Track>
				<Slider.Thumb index={0}>
					<Slider.HiddenInput />
				</Slider.Thumb>
			</Slider.Control>
			<Slider.MarkerGroup>
				<Slider.Marker value={0} />
				<Slider.Marker value={25} />
			</Slider.MarkerGroup>
		</Slider>
	);
}
