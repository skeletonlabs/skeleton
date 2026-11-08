import { Carousel } from "@skeletonlabs/skeleton-react";

const slides = [
	{ title: "Slide 1" },
	{ title: "Slide 2" },
	{ title: "Slide 3" },
	{ title: "Slide 4" },
	{ title: "Slide 5" },
	{ title: "Slide 6" },
	{ title: "Slide 7" },
	{ title: "Slide 8" },
	{ title: "Slide 9" },
	{ title: "Slide 10" },
];

export default function Overlap() {
	return (
		<Carousel
			slideCount={slides.length}
			slidesPerPage={4}
			spacing="16px"
			padding="48px"
			autoSize
			loop
		>
			<div className="relative">
				<Carousel.Control>
					<Carousel.PrevTrigger className="btn-icon preset-filled absolute top-[50%] left-0 translate-y-[-50%] rounded-full">
						<span>&larr;</span>
					</Carousel.PrevTrigger>
					<Carousel.NextTrigger className="btn-icon preset-filled absolute top-[50%] right-0 translate-y-[-50%] rounded-full">
						<span>&rarr;</span>
					</Carousel.NextTrigger>
				</Carousel.Control>
				<Carousel.ItemGroup>
					{slides.map((slide, i) => (
						<Carousel.Item
							index={i}
							key={i}
							className="card bg-surface-100-900 flex aspect-square h-50 items-center justify-center p-4"
						>
							{slide.title}
						</Carousel.Item>
					))}
				</Carousel.ItemGroup>
			</div>
			<Carousel.IndicatorGroup>
				<Carousel.Context>
					{(carousel) =>
						carousel.pageSnapPoints.map((_, i) => (
							<Carousel.Indicator key={i} index={i} />
						))
					}
				</Carousel.Context>
			</Carousel.IndicatorGroup>
		</Carousel>
	);
}
