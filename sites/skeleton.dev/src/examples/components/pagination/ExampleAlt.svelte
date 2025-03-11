<script lang="ts">
	import { Pagination } from '@skeletonlabs/skeleton-svelte';

	const sourceData = [{ id: 0 }, { id: 1 }, { id: 3 }, { id: 4 }];
</script>

<Pagination data={sourceData} count={sourceData.length} page={1} pageSize={3} alternative />
