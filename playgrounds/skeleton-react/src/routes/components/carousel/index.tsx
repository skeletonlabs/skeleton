'use client';

import { Carousel } from '@skeletonlabs/skeleton-react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/components/carousel/')({
	component: Page,
});

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

function Page() {
	return (
		<div className="space-y-10">
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
					<Carousel.Context>
						{(carousel) => carousel.pageSnapPoints.map((_, i) => <Carousel.Indicator key={i} index={i} />)}
					</Carousel.Context>
				</Carousel.IndicatorGroup>
			</Carousel>

			<Carousel slideCount={slides.length} slidesPerPage={4} spacing="16px" padding="48px" loop>
				<div className="relative">
					<Carousel.Control>
						<Carousel.PrevTrigger className="btn-icon preset-filled rounded-full absolute top-[50%] left-0 translate-y-[-50%]">
							<span>&larr;</span>
						</Carousel.PrevTrigger>
						<Carousel.NextTrigger className="btn-icon preset-filled rounded-full absolute top-[50%] right-0 translate-y-[-50%]">
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
					<Carousel.Context>
						{(carousel) => carousel.pageSnapPoints.map((_, i) => <Carousel.Indicator key={i} index={i} />)}
					</Carousel.Context>
				</Carousel.IndicatorGroup>
			</Carousel>
		</div>
	);
}
