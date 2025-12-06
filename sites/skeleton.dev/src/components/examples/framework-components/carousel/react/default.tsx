import { Carousel } from '@skeletonlabs/skeleton-react';

const slides = [
	{ title: 'Slide 1', description: 'First slide showcasing carousel basics.' },
	{ title: 'Slide 2', description: 'Second slide with different content.' },
	{ title: 'Slide 3', description: 'Third slide demonstrating navigation.' },
];

export default function Default() {
	return (
		<Carousel slideCount={slides.length}>
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
