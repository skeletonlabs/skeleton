<script lang="ts" module>
	import type { HTMLAttributes } from 'svelte/elements';

	export interface Props extends HTMLAttributes<HTMLHRElement> {}
</script>

<script lang="ts">
	const { ...rest }: Props = $props();
</script>

<hr class="hr" {...rest} />
