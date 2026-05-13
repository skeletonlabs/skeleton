<script lang="ts">
	import PageHeader from '$lib/components/layout/page-header.svelte';
	import { PlusIcon } from '@lucide/svelte';
</script>

<div>
	<PageHeader title="Team">
		{#snippet trail()}
			<button type="button" class="btn lg:btn-lg preset-filled">
				<PlusIcon />
				<span>Invite</span>
			</button>
		{/snippet}
	</PageHeader>

	<div class="container-page">
		<p>(page content)</p>
	</div>
</div>
