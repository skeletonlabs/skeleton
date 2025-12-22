import { Carousel } from '@skeletonlabs/skeleton-react';

const slides = [
	{ title: 'Slide 1' },
	{ title: 'Slide 2' },
	{ title: 'Slide 3' },
	{ title: 'Slide 4' },
	{ title: 'Slide 5' },
	{ title: 'Slide 6' },
	{ title: 'Slide 7' },
	{ title: 'Slide 8' },
	{ title: 'Slide 9' },
	{ title: 'Slide 10' },
];

export default function Default() {
	return (
		<Carousel slideCount={slides.length} slidesPerPage={3} spacing="16px" loop>
			<Carousel.Control className="flex justify-between mb-4">
				<Carousel.PrevTrigger className="btn preset-filled">
					<span>&larr;</span>
					<span>Back</span>
				</Carousel.PrevTrigger>
				<Carousel.AutoplayTrigger className="btn preset-filled">Toggle Autoplay</Carousel.AutoplayTrigger>
				<Carousel.NextTrigger className="btn preset-filled">
					<span>Next</span>
					<span>&rarr;</span>
				</Carousel.NextTrigger>
			</Carousel.Control>
			<Carousel.ItemGroup>
				{slides.map((slide, i) => (
					<Carousel.Item index={i} key={i}>
						<div className="card bg-surface-100-900 h-50 p-4 flex justify-center items-center">
							<span>{slide.title}</span>
						</div>
					</Carousel.Item>
				))}
			</Carousel.ItemGroup>
			<Carousel.IndicatorGroup>
				<Carousel.Context>{(carousel) => carousel.pageSnapPoints.map((_, i) => <Carousel.Indicator key={i} index={i} />)}</Carousel.Context>
			</Carousel.IndicatorGroup>
		</Carousel>
	);
}
