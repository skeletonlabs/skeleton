<script lang="ts" module>
	import type { HTMLAttributes } from '../html-attributes.js';
	import { mergeProps } from '@zag-js/svelte';

	export type StarHalfProps = HTMLAttributes<'svg', 'children'>;
</script>

<script lang="ts">
	const props: StarHalfProps = $props();

	const { ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			{
				xmlns: 'http://www.w3.org/2000/svg',
				viewBox: '0 0 24 24',
				height: '24',
				width: '24',
				fill: 'none',
				stroke: 'currentColor',
				'stroke-width': '1.5',
			},
			rest,
		),
	);
</script>

<svg {...attributes}>
	<defs>
		<linearGradient id="half-fill" x1="0%" y1="0%" x2="100%" y2="0%">
			<stop offset="50%" stop-color="currentColor" />
			<stop offset="50%" stop-color="transparent" />
		</linearGradient>
	</defs>
	<path
		fill="url(#half-fill)"
		stroke-linecap="round"
		stroke-linejoin="round"
		d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345
       l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557
       l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0
       L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557
       l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345
       L11.48 3.5Z"
	/>
</svg>
