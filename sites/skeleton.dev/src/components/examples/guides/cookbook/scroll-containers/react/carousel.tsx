import { useRef } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';

export default function Carousel() {
	const generatedArray = Array.from({ length: 6 });
	const elemCarouselRef = useRef<HTMLDivElement>(null);

	function carouselLeft() {
		if (!elemCarouselRef.current) return;
		const elemCarousel = elemCarouselRef.current;
		const x =
			elemCarousel.scrollLeft === 0
				? elemCarousel.clientWidth * elemCarousel.childElementCount // loop
				: elemCarousel.scrollLeft - elemCarousel.clientWidth; // step left
		elemCarousel.scroll(x, 0);
	}

	function carouselRight() {
		if (!elemCarouselRef.current) return;
		const elemCarousel = elemCarouselRef.current;
		const x =
			elemCarousel.scrollLeft === elemCarousel.scrollWidth - elemCarousel.clientWidth
				? 0 // loop
				: elemCarousel.scrollLeft + elemCarousel.clientWidth; // step right
		elemCarousel.scroll(x, 0);
	}

	function carouselThumbnail(index: number) {
		if (elemCarouselRef.current) {
			elemCarouselRef.current.scroll(elemCarouselRef.current.clientWidth * index, 0);
		}
	}

	return (
		<div className="w-full">
			{/* Carousel */}
			<div className="card p-4 grid grid-cols-[auto_1fr_auto] gap-4 items-center">
				{/* Button: Left */}
				<button type="button" className="btn-icon preset-filled" onClick={carouselLeft} title="Previous slide" aria-label="Previous slide">
					<ArrowLeftIcon size={16} />
				</button>
				{/* Full Images */}
				<div ref={elemCarouselRef} className="snap-x snap-mandatory scroll-smooth flex overflow-x-auto">
					{/* Loop X many times. */}
					{generatedArray.map((_, i) => (
						<img
							key={i}
							className="snap-center w-[1024px] rounded-container"
							src={`https://picsum.photos/seed/${i + 1}/1024/768`}
							alt={`full-${i}`}
							loading="lazy"
						/>
					))}
				</div>
				{/* Button: Right */}
				<button type="button" className="btn-icon preset-filled" onClick={carouselRight} title="Next slide" aria-label="Next slide">
					<ArrowRightIcon size={16} />
				</button>
			</div>
			{/* Thumbnails */}
			<div className="card p-4 grid grid-cols-6 gap-4">
				{/* Loop X many times. */}
				{generatedArray.map((_, i) => (
					<button key={i} type="button" onClick={() => carouselThumbnail(i)}>
						<img
							className="rounded-container hover:brightness-125"
							src={`https://picsum.photos/seed/${i + 1}/256`}
							alt={`thumb-${i}`}
							loading="lazy"
						/>
					</button>
				))}
			</div>
		</div>
	);
}
