<script lang="ts">
	import PanelForm from '$lib/components/panels/PanelForm.svelte';
	import PanelPreview from '$lib/components/panels/PanelPreview.svelte';
</script>

<div class="grid h-full grid-cols-[1fr_400px]">
	<!-- Panel: Preview -->
	<div class="overflow-y-auto p-4 md:p-8">
		<PanelPreview />
	</div>
	<!-- Panel: Form -->
	<div class="overflow-y-auto p-4 bg-surface-100-900 md:p-8">
		<PanelForm />
	</div>
</div>
