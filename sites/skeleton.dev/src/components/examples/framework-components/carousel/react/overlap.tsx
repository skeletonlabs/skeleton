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

export default function Overlap() {
	return (
		<Carousel slideCount={slides.length} slidesPerPage={4} spacing="16px" padding="48px" loop>
			<div className="relative">
				<Carousel.Control>
					<Carousel.PrevTrigger className="btn-icon preset-filled rounded-full absolute top-[50%] left-4 translate-y-[-50%]">
						<span>&larr;</span>
					</Carousel.PrevTrigger>
					<Carousel.NextTrigger className="btn-icon preset-filled rounded-full absolute top-[50%] right-4 translate-y-[-50%]">
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
			</div>
			<Carousel.IndicatorGroup>
				<Carousel.Context>{(carousel) => carousel.pageSnapPoints.map((_, i) => <Carousel.Indicator key={i} index={i} />)}</Carousel.Context>
			</Carousel.IndicatorGroup>
		</Carousel>
	);
}
