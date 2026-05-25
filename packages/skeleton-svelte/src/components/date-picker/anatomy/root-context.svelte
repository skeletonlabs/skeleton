<script lang="ts" module>
	import type { useDatePicker } from '../modules/provider.svelte';
	import type { Snippet } from 'svelte';

	export interface DatePickerRootContextProps {
		children: Snippet<[ReturnType<typeof useDatePicker>]>;
	}
</script>

<script lang="ts">
	import { DatePickerRootContext } from '../modules/root-context.js';

	const props: DatePickerRootContextProps = $props();

	const datePicker = DatePickerRootContext.consume();

	const { children } = $derived(props);
</script>

{@render children(datePicker)}
