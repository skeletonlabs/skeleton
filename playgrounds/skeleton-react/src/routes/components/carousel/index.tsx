'use client';

import { Carousel } from '@skeletonlabs/skeleton-react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/components/carousel/')({
	component: Page,
});

const slides = [
	{ title: 'Slide 1', description: 'First slide content goes here. This is a sample carousel slide.' },
	{ title: 'Slide 2', description: 'Second slide content. Demonstrates the carousel navigation.' },
	{ title: 'Slide 3', description: 'Third slide content. Use indicators to jump to any slide.' },
	{ title: 'Slide 4', description: 'Fourth slide content. Autoplay feature available.' },
	{ title: 'Slide 5', description: 'Fifth and final slide. Try the prev/next controls.' },
];

function Page() {
	return (
		<Carousel slideCount={slides.length} autoplay={{ delay: 3000 }} loop>
			<Carousel.Control>
				<Carousel.PrevTrigger>Prev</Carousel.PrevTrigger>
				<Carousel.AutoplayTrigger>Toggle Autoplay</Carousel.AutoplayTrigger>
				<Carousel.NextTrigger>Next</Carousel.NextTrigger>
			</Carousel.Control>
			<Carousel.ItemGroup>
				{slides.map((slide, i) => (
					<Carousel.Item index={i} key={i}>
						{slide.description}
					</Carousel.Item>
				))}
			</Carousel.ItemGroup>
			<Carousel.IndicatorGroup>
				{slides.map((_, i) => (
					<Carousel.Indicator index={i} key={i} />
				))}
			</Carousel.IndicatorGroup>
		</Carousel>
	);
}
