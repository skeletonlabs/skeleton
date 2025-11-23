import { Slider } from '@skeletonlabs/skeleton-react';

export default function Color() {
	return (
		<div className="space-y-8 w-full">
			<Slider defaultValue={[50]}>
				<Slider.Control>
					<Slider.Track className="bg-primary-50-950">
						<Slider.Range className="bg-primary-500" />
					</Slider.Track>
					<Slider.Thumb index={0} className="ring-primary-500">
						<Slider.HiddenInput />
					</Slider.Thumb>
				</Slider.Control>
			</Slider>
			<Slider defaultValue={[50]}>
				<Slider.Control>
					<Slider.Track className="bg-secondary-50-950">
						<Slider.Range className="bg-secondary-500" />
					</Slider.Track>
					<Slider.Thumb index={0} className="ring-secondary-500">
						<Slider.HiddenInput />
					</Slider.Thumb>
				</Slider.Control>
			</Slider>
			<Slider defaultValue={[50]}>
				<Slider.Control>
					<Slider.Track className="bg-tertiary-50-950">
						<Slider.Range className="bg-tertiary-500" />
					</Slider.Track>
					<Slider.Thumb index={0} className="ring-tertiary-500">
						<Slider.HiddenInput />
					</Slider.Thumb>
				</Slider.Control>
			</Slider>
		</div>
	);
}
