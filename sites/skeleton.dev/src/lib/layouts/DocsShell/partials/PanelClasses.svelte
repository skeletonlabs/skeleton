<script lang="ts">
	// Types
	import type { DocsShellSettings } from '$lib/layouts/DocsShell/types';
	// Components
	import { Table } from '@skeletonlabs/skeleton';

	// Props
	export let pageData: DocsShellSettings;

	// Classes
	const cBase = 'space-y-10';

	// Local
	const source = {
		head: ['Keys', 'Values', 'Description'],
		body: pageData.classes ?? []
	};

	// Reactive
	$: classesBase = `${cBase}`;
</script>

<div class="doc-shell-classes {classesBase}">
	<Table {source} />
</div>
