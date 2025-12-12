<script lang="ts">
	import { ArrowLeftIcon, ArrowRightIcon } from '@lucide/svelte';

	const generatedArray = Array.from({ length: 6 });

	let elemCarousel: HTMLDivElement;

	function carouselLeft() {
		if (!elemCarousel) return;
		const x =
			elemCarousel.scrollLeft === 0
				? elemCarousel.clientWidth * elemCarousel.childElementCount // loop
				: elemCarousel.scrollLeft - elemCarousel.clientWidth; // step left
		elemCarousel.scroll(x, 0);
	}

	function carouselRight() {
		if (!elemCarousel) return;
		const x =
			elemCarousel.scrollLeft === elemCarousel.scrollWidth - elemCarousel.clientWidth
				? 0 // loop
				: elemCarousel.scrollLeft + elemCarousel.clientWidth; // step right
		elemCarousel.scroll(x, 0);
	}

	function carouselThumbnail(index: number) {
		if (elemCarousel) {
			elemCarousel.scroll(elemCarousel.clientWidth * index, 0);
		}
	}
</script>

<div class="w-full">
	<!-- Carousel -->
	<div class="card p-4 grid grid-cols-[auto_1fr_auto] gap-4 items-center">
		<!-- Button: Left -->
		<button type="button" class="btn-icon preset-filled" onclick={carouselLeft} title="Previous slide" aria-label="Previous slide">
			<ArrowLeftIcon size={16} />
		</button>
		<!-- Full Images -->
		<div bind:this={elemCarousel} class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto">
			<!-- Loop X many times. -->
			{#each generatedArray as _, i}
				<img
					class="snap-center w-[1024px] rounded-container"
					src={`https://picsum.photos/seed/${i + 1}/1024/768`}
					alt={`full-${i}`}
					loading="lazy"
				/>
			{/each}
		</div>
		<!-- Button: Right -->
		<button type="button" class="btn-icon preset-filled" onclick={carouselRight} title="Next slide" aria-label="Next slide">
			<ArrowRightIcon size={16} />
		</button>
	</div>
	<!-- Thumbnails -->
	<div class="card p-4 grid grid-cols-6 gap-4">
		<!-- Loop X many times. -->
		{#each generatedArray as _, i}
			<button type="button" onclick={() => carouselThumbnail(i)}>
				<img
					class="rounded-container hover:brightness-125"
					src={`https://picsum.photos/seed/${i + 1}/256`}
					alt={`thumb-${i}`}
					loading="lazy"
				/>
			</button>
		{/each}
	</div>
</div>
