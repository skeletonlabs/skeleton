import { Slider } from '@/index';

export default function SliderTest() {
	return (
		<Slider data-testid="root">
			<Slider.Label data-testid="label" />
			<Slider.Control data-testid="control">
				<Slider.Track data-testid="track">
					<Slider.Range data-testid="range" />
				</Slider.Track>
			</Slider.Control>
			<Slider.Context>
				{(slider) =>
					slider.value.map((_, index) => (
						<Slider.Thumb key={index} index={index} data-testid={`thumb-${index}`}>
							<Slider.HiddenInput data-testid={`hidden-input-${index}`} />
						</Slider.Thumb>
					))
				}
			</Slider.Context>
			<Slider.MarkerGroup data-testid="marker-group">
				<Slider.Marker value={0} data-testid="marker" />
			</Slider.MarkerGroup>
		</Slider>
	);
}
