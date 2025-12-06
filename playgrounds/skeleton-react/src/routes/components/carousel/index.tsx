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
		<div className="space-y-8">
			<section className="space-y-4">
				<h2 className="text-xl font-bold">Basic Carousel</h2>
				<Carousel slideCount={slides.length} className="w-full max-w-2xl">
					<Carousel.Control className="mb-4">
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
			</section>

			<section className="space-y-4">
				<h2 className="text-xl font-bold">Multiple Slides Per Page</h2>
				<Carousel slideCount={slides.length} slidesPerPage={2} className="w-full max-w-4xl">
					<Carousel.Control className="mb-4">
						<Carousel.PrevTrigger className="btn preset-filled">Prev</Carousel.PrevTrigger>
						<Carousel.NextTrigger className="btn preset-filled">Next</Carousel.NextTrigger>
					</Carousel.Control>
					<Carousel.ItemGroup className="gap-4">
						{slides.map((slide, i) => (
							<Carousel.Item key={i} index={i} className="min-w-[calc(50%-0.5rem)]">
								<div className="card p-8 text-center">
									<h3 className="text-lg font-bold">{slide.title}</h3>
									<p className="text-surface-600-400">{slide.description}</p>
								</div>
							</Carousel.Item>
						))}
					</Carousel.ItemGroup>
					<Carousel.IndicatorGroup className="mt-4 flex justify-center">
						{Array.from({ length: Math.ceil(slides.length / 2) }).map((_, i) => (
							<Carousel.Indicator key={i} index={i} />
						))}
					</Carousel.IndicatorGroup>
				</Carousel>
			</section>

			<section className="space-y-4">
				<h2 className="text-xl font-bold">With Autoplay</h2>
				<Carousel slideCount={slides.length} autoplay={{ delay: 3000 }} loop className="w-full max-w-2xl">
					<Carousel.Control className="mb-4">
						<Carousel.PrevTrigger className="btn preset-filled">Prev</Carousel.PrevTrigger>
						<Carousel.AutoplayTrigger className="btn preset-filled">Toggle Autoplay</Carousel.AutoplayTrigger>
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
			</section>
		</div>
	);
}
