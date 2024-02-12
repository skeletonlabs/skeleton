<script lang="ts">
	import PanelForm from '$lib/components/PanelForm.svelte';
	import PanelPreview from '$lib/components/PanelPreview.svelte';
</script>

<div class="grid h-full grid-cols-[480px_1fr]">
	<!-- Panel: Form -->
	<div class="overflow-y-auto p-4 bg-surface-100-900 md:p-8">
		<PanelForm />
	</div>
	<!-- Panel: Preview -->
	<div class="overflow-y-auto p-4 md:p-8">
		<PanelPreview />
	</div>
</div>
