import { Carousel } from '@skeletonlabs/skeleton-react';

const slides = [
	{ title: 'Slide 1', description: 'Auto-advances after 3 seconds.' },
	{ title: 'Slide 2', description: 'Press toggle to pause/resume.' },
	{ title: 'Slide 3', description: 'Loops back to the beginning.' },
];

export default function Autoplay() {
	return (
		<Carousel slideCount={slides.length} autoplay={{ delay: 3000 }} loop>
			<Carousel.Control>
				<Carousel.PrevTrigger className="btn preset-filled">Prev</Carousel.PrevTrigger>
				<Carousel.AutoplayTrigger className="btn preset-filled">Toggle</Carousel.AutoplayTrigger>
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
