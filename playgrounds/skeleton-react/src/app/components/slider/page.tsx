'use client';

import { Slider } from '@skeletonlabs/skeleton-react';

export default function Page() {
	return (
		<Slider>
			<Slider.Label>Label</Slider.Label>
			<Slider.Control>
				<Slider.Track>
					<Slider.Range />
				</Slider.Track>
			</Slider.Control>
			<Slider.Context>
				{(slider) =>
					slider.value.map((_, index) => (
						<Slider.Thumb key={index} index={index}>
							<Slider.HiddenInput />
						</Slider.Thumb>
					))
				}
			</Slider.Context>
		</Slider>
	);
}
