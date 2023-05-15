<script lang="ts">
	// Types
	import type { DocsShellSettings } from '$docs/layouts/DocsShell/types';
	// Components
	import { Table } from '@skeletonlabs/skeleton';

	// Props
	export let pageData: DocsShellSettings;

	// Classes
	const cBase = 'space-y-10';

	// Local
	const source = {
		head: ['Prop', 'Type', 'Default', 'Values', 'Description'],
		body: pageData.parameters ?? []
	};

	// Reactive
	$: classesBase = `${cBase}`;
</script>

<div class="doc-shell-parameters {classesBase}">
	<Table {source} />
</div>
