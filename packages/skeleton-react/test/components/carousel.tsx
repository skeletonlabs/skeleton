import { Carousel } from '../../src/index.js';

export default function Test() {
	return (
		<Carousel slideCount={3} data-testid="root">
			<Carousel.Control data-testid="control">
				<Carousel.PrevTrigger data-testid="prev-trigger">Prev</Carousel.PrevTrigger>
				<Carousel.NextTrigger data-testid="next-trigger">Next</Carousel.NextTrigger>
				<Carousel.AutoplayTrigger data-testid="autoplay-trigger">Autoplay</Carousel.AutoplayTrigger>
			</Carousel.Control>
			<Carousel.ItemGroup data-testid="item-group">
				<Carousel.Item index={0} data-testid="item">
					Slide 1
				</Carousel.Item>
				<Carousel.Item index={1}>Slide 2</Carousel.Item>
				<Carousel.Item index={2}>Slide 3</Carousel.Item>
			</Carousel.ItemGroup>
			<Carousel.IndicatorGroup data-testid="indicator-group">
				<Carousel.Indicator index={0} data-testid="indicator" />
				<Carousel.Indicator index={1} />
				<Carousel.Indicator index={2} />
			</Carousel.IndicatorGroup>
		</Carousel>
	);
}
