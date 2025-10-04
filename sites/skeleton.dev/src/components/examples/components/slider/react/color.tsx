import { Slider } from '@skeletonlabs/skeleton-react';

export default function Color() {
	return (
		<div className="space-y-8 w-full">
			<Slider defaultValue={[50]}>
				<Slider.Control>
					<Slider.Track>
						<Slider.Range className="bg-primary-500" />
					</Slider.Track>
					<Slider.Thumb index={0}>
						<Slider.HiddenInput />
					</Slider.Thumb>
				</Slider.Control>
			</Slider>
			<Slider defaultValue={[50]}>
				<Slider.Control>
					<Slider.Track>
						<Slider.Range className="bg-secondary-500" />
					</Slider.Track>
					<Slider.Thumb index={0}>
						<Slider.HiddenInput />
					</Slider.Thumb>
				</Slider.Control>
			</Slider>
			<Slider defaultValue={[50]}>
				<Slider.Control>
					<Slider.Track>
						<Slider.Range className="bg-tertiary-500" />
					</Slider.Track>
					<Slider.Thumb index={0}>
						<Slider.HiddenInput />
					</Slider.Thumb>
				</Slider.Control>
			</Slider>
		</div>
	);
}
