<script lang="ts">
	import { ArrowLeftIcon, ArrowRightIcon } from '@lucide/svelte';

	interface Movie {
		name: string;
		imageUrl: string;
		url: string;
	}

	// Data and images via: https://www.themoviedb.org/
	const movies: Movie[] = [
		{
			name: 'The Flash',
			imageUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg',
			url: 'https://www.themoviedb.org/movie/298618-the-flash',
		},
		{
			name: 'Guardians of the Galaxy Vol. 3',
			imageUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg',
			url: 'https://www.themoviedb.org/movie/447365-guardians-of-the-galaxy-vol-3',
		},
		{
			name: 'Black Panther: Wakanda Forever',
			imageUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
			url: 'https://www.themoviedb.org/movie/505642-black-panther-wakanda-forever',
		},
		{
			name: 'Avengers: Infinity War',
			imageUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
			url: 'https://www.themoviedb.org/movie/299536-avengers-infinity-war',
		},
		{
			name: 'Spider-Man: No Way Home',
			imageUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
			url: 'https://www.themoviedb.org/movie/634649-spider-man-no-way-home',
		},
		{
			name: 'The Batman',
			imageUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/74xTEgt7R36Fpooo50r9T25onhq.jpg',
			url: 'https://www.themoviedb.org/movie/414906-the-batman',
		},
		{
			name: 'Iron Man',
			imageUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/78lPtwv72eTNqFW9COBYI0dWDJa.jpg',
			url: 'https://www.themoviedb.org/movie/1726-iron-man',
		},
		{
			name: 'Venom: Let There Be Carnage',
			imageUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg',
			url: 'https://www.themoviedb.org/movie/580489-venom-let-there-be-carnage',
		},
		{
			name: 'Deadpool',
			imageUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3E53WEZJqP6aM84D8CckXx4pIHw.jpg',
			url: 'https://www.themoviedb.org/movie/293660-deadpool',
		},
	];

	let elemMovies: HTMLDivElement;

	function multiColumnLeft() {
		if (!elemMovies) return;
		let x = elemMovies.scrollWidth;
		if (elemMovies.scrollLeft !== 0) {
			x = elemMovies.scrollLeft - elemMovies.clientWidth;
		}
		elemMovies.scroll(x, 0);
	}

	function multiColumnRight() {
		if (!elemMovies) return;
		let x = 0;
		// -1 is used because different browsers use different methods to round scrollWidth pixels.
		if (elemMovies.scrollLeft < elemMovies.scrollWidth - elemMovies.clientWidth - 1) {
			x = elemMovies.scrollLeft + elemMovies.clientWidth;
		}
		elemMovies.scroll(x, 0);
	}
</script>

<div class="w-ful">
	<div class="grid grid-cols-[auto_1fr_auto] gap-4 items-center">
		<!-- Button: Left -->
		<button type="button" class="btn-icon preset-filled" onclick={multiColumnLeft} title="Scroll left" aria-label="Scroll left">
			<ArrowLeftIcon size={16} />
		</button>
		<!-- Carousel -->
		<div bind:this={elemMovies} class="snap-x snap-mandatory scroll-smooth flex gap-2 pb-2 overflow-x-auto">
			<!-- Loop through our array of movies. -->
			{#each movies as movie}
				<a href={movie.url} target="_blank" class="shrink-0 w-[28%] snap-start">
					<img class="rounded-container-token hover:brightness-125" src={movie.imageUrl} alt={movie.name} title={movie.name} loading="lazy" />
				</a>
			{/each}
		</div>
		<!-- Button-Right -->
		<button type="button" class="btn-icon preset-filled" onclick={multiColumnRight} title="Scroll right" aria-label="Scroll right">
			<ArrowRightIcon size={16} />
		</button>
	</div>
</div>
