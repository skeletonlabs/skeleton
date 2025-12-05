import { Carousel } from '@skeletonlabs/skeleton-react';

const slides = [
	{ title: 'Item 1', description: 'First item' },
	{ title: 'Item 2', description: 'Second item' },
	{ title: 'Item 3', description: 'Third item' },
	{ title: 'Item 4', description: 'Fourth item' },
	{ title: 'Item 5', description: 'Fifth item' },
	{ title: 'Item 6', description: 'Sixth item' },
];

export default function Multiple() {
	return (
		<Carousel slideCount={slides.length} slidesPerPage={3}>
			<Carousel.Control>
				<Carousel.PrevTrigger className="btn preset-filled">Prev</Carousel.PrevTrigger>
				<Carousel.NextTrigger className="btn preset-filled">Next</Carousel.NextTrigger>
			</Carousel.Control>
			<Carousel.ItemGroup className="gap-4">
				{slides.map((slide, i) => (
					<Carousel.Item key={i} index={i} className="min-w-[calc(33.333%-0.67rem)]">
						<div className="card p-4 text-center">
							<h3 className="font-bold">{slide.title}</h3>
							<p className="text-sm text-surface-600-400">{slide.description}</p>
						</div>
					</Carousel.Item>
				))}
			</Carousel.ItemGroup>
		</Carousel>
	);
}
