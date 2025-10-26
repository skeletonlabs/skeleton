<script lang="ts">
	import { Pagination } from '@/index.js';
</script>

<Pagination data-testid="root">
	<Pagination.PrevTrigger data-testid="prev-trigger" />
	<Pagination.Item type="page" value={0} data-testid="item" />
	<Pagination.Ellipsis index={0} data-testid="ellipsis" />
	<Pagination.NextTrigger data-testid="next-trigger" />
</Pagination>
