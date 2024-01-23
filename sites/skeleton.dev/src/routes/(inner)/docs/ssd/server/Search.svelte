<script lang="ts">
	import type { DataHandler } from '@vincjo/datatables/remote';
	export let handler: DataHandler;
	let value: string;
	let timeout: any;

	const search = () => {
		handler.search(value);
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			handler.invalidate();
		}, 400);
	};
</script>

<input
	class="input-variant-secondary input sm:w-64 w-36"
	type="search"
	placeholder="Search..."
	bind:value
	on:input={search}
/>
