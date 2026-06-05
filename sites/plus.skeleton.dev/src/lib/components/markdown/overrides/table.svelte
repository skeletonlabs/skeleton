<script lang="ts" module>
	import type { HTMLAttributes } from 'svelte/elements';

	export interface Props extends HTMLAttributes<HTMLTableElement> {}
</script>

<script lang="ts">
	const { children, ...rest }: Props = $props();
</script>

<div class="table-wrap">
	<table class="table" {...rest}>{@render children?.()}</table>
</div>
