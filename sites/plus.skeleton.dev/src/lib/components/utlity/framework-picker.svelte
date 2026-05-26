<script module lang="ts">
	export const frameworkList: Framework[] = [
		{ key: 'react', label: 'React', lang: 'tsx' },
		{ key: 'svelte', label: 'Svelte', lang: 'svelte' },
		{ key: 'vue', label: 'Vue', lang: 'vue' },
		{ key: 'solid', label: 'Solid.js', lang: 'tsx' },
		{ key: 'astro', label: 'Astro', lang: 'astro' },
	];
</script>

<script lang="ts">
	import CheckIcon from '@lucide/svelte/icons/check';
	import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
	import { Menu, Portal } from '@skeletonlabs/skeleton-svelte';

	export interface Framework {
		key: string;
		label: string;
		lang: string;
	}

	interface Props {
		available?: string[];
		onSelect?: (fw: Framework) => void;
	}

	let { available, onSelect }: Props = $props();

	let selected = $state(frameworkList[0]);
	const options = $derived(available?.length ? frameworkList.filter((f) => available.includes(f.key)) : frameworkList);

	function onSelectHandler({ value }: { value: string }) {
		const fw = options.find((f) => f.key === value);
		if (fw) onSelect?.(fw);
	}
</script>

<Menu highlightedValue={selected.key} onSelect={onSelectHandler}>
	<Menu.Trigger class="btn preset-filled">
		<span>{selected.label}</span>
		<ChevronDownIcon />
	</Menu.Trigger>
	<Portal>
		<Menu.Positioner>
			<Menu.Content class="z-50">
				{#each options as fw (fw.key)}
					<Menu.OptionItem type="radio" value={fw.key} checked={selected.key === fw.key} onCheckedChange={() => (selected = fw)}>
						<Menu.ItemText>{fw.label}</Menu.ItemText>
						<Menu.ItemIndicator class="hidden data-[state=checked]:block">
							<CheckIcon class="size-4" />
						</Menu.ItemIndicator>
					</Menu.OptionItem>
				{/each}
			</Menu.Content>
		</Menu.Positioner>
	</Portal>
</Menu>
