<script lang="ts">
	import type { DataHandler } from '@vincjo/datatables/remote';
	export let handler: DataHandler;
	export let filterBy: string;

	let value: string;
	let timeout: any;

	const filter = () => {
		handler.filter(value, filterBy);
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			handler.invalidate();
		}, 400);
	};
</script>

<th>
	<input
		class="input variant-form-material h-8 text-sm w-full"
		type="text"
		placeholder="Filter"
		bind:value
		on:input={filter}
	/>
</th>
