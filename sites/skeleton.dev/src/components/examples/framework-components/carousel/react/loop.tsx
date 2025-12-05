import { Carousel } from '@skeletonlabs/skeleton-react';

const slides = [
	{ title: 'Slide 1', description: 'Navigating past the last slide returns to the first.' },
	{ title: 'Slide 2', description: 'Navigating before the first slide goes to the last.' },
	{ title: 'Slide 3', description: 'Creates an infinite scrolling experience.' },
];

export default function Loop() {
	return (
		<Carousel slideCount={slides.length} loop>
			<Carousel.Control>
				<Carousel.PrevTrigger className="btn preset-filled">Prev</Carousel.PrevTrigger>
				<Carousel.NextTrigger className="btn preset-filled">Next</Carousel.NextTrigger>
			</Carousel.Control>
			<Carousel.ItemGroup>
				{slides.map((slide, i) => (
					<Carousel.Item key={i} index={i} className="min-w-full">
						<div className="card p-8 text-center">
							<h3 className="text-lg font-bold">{slide.title}</h3>
							<p className="text-surface-600-400">{slide.description}</p>
						</div>
					</Carousel.Item>
				))}
			</Carousel.ItemGroup>
			<Carousel.IndicatorGroup className="mt-4 flex justify-center">
				{slides.map((_, i) => (
					<Carousel.Indicator key={i} index={i} />
				))}
			</Carousel.IndicatorGroup>
		</Carousel>
	);
}
