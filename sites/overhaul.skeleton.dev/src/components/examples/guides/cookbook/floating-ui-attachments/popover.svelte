<script lang="ts">
	import { Popover } from './popover';
	import { slide } from 'svelte/transition';

	const popover = new Popover();
</script>

<span>
	<button {...popover.reference()} class="btn preset-filled">Trigger</button>
	{#if popover.isOpen()}
		<div {...popover.floating()} data-floating class="card preset-filled-surface-100-900 z-10 p-4" transition:slide={{ duration: 150 }}>
			<p>This is an example popover.</p>
		</div>
	{/if}
</span>
