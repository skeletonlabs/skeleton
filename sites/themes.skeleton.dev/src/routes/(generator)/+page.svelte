<script lang="ts">
	import PanelForm from '$lib/components/panels/PanelForm.svelte';
	import PanelPreview from '$lib/components/panels/PanelPreview.svelte';
</script>

<div class="grid h-full grid-cols-[1fr_480px]">
	<!-- Panel: Preview -->
	<div class="scrollbar-gutter-stable overflow-y-auto pb-[200px]">
		<PanelPreview />
	</div>
	<!-- Panel: Form -->
	<div class="scrollbar-gutter-stable bg-surface-100-900 overflow-y-auto">
		<PanelForm />
	</div>
</div>
