<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton-svelte';
	import Skull from 'lucide-svelte/icons/skull';

	const imgSrc =
		'https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=128&h=128&auto=format&fit=crop';
</script>

<div class="space-y-10">
	<header>
		<h1 class="h1">Avatars</h1>
	</header>
	<section class="space-y-4">
		<Avatar src={imgSrc} name="basic" />
		<h2 class="h2">Fallback</h2>
		<Avatar name="children">SK</Avatar>
		<h2 class="h2">Icon</h2>
		<Avatar name="icon" background="preset-filled-primary-500">
			<Skull size={24} />
		</Avatar>
		<h2 class="h2">Filter</h2>
		<!-- NoirLight: `filter: url(#NoirLight)` -->
		<svg id="svg-filter-noirlight" class="absolute -left-full h-0 w-0 filter">
			<filter
				id="NoirLight"
				x="-20%"
				y="-20%"
				width="140%"
				height="140%"
				filterUnits="objectBoundingBox"
				primitiveUnits="userSpaceOnUse"
				color-interpolation-filters="linearRGB"
			>
				<feColorMatrix type="saturate" values="0" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" result="colormatrix2" />
				<feBlend mode="saturation" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" in2="colormatrix2" result="blend2" />
				<feBlend mode="screen" x="0%" y="0%" width="100%" height="100%" in="colormatrix2" in2="blend2" result="blend3" />
				<feColorMatrix type="luminanceToAlpha" x="0%" y="0%" width="100%" height="100%" in="blend3" result="colormatrix3" />
				<feBlend mode="exclusion" x="0%" y="0%" width="100%" height="100%" in="blend3" in2="colormatrix3" result="blend5" />
			</filter>
		</svg>
		<Avatar src={imgSrc} name="filtered" filter="#NoirLight" />
	</section>
</div>
