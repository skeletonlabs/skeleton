<script lang="ts">
	import {
		BoldIcon,
		ItalicIcon,
		StrikethroughIcon,
		Heading1Icon,
		Heading2Icon,
		Heading3Icon,
		PencilIcon,
		CodeIcon,
		LinkIcon,
		MessageCircleIcon,
	} from '@lucide/svelte';
	import { ToggleGroup } from '@skeletonlabs/skeleton-svelte';
</script>

<div class="space-y-10">
	<header>
		<h2 class="h2">App Bar</h2>
	</header>
	<section class="space-y-4">
		<ToggleGroup defaultValue={['center']} multiple>
			<ToggleGroup.Item value="left">
				<BoldIcon class="size-4" />
			</ToggleGroup.Item>
			<ToggleGroup.Item value="center">
				<ItalicIcon class="size-4" />
			</ToggleGroup.Item>
			<ToggleGroup.Item value="right">
				<StrikethroughIcon class="size-4" />
			</ToggleGroup.Item>
		</ToggleGroup>
	</section>
	<section class="space-y-4">
		<h3 class="h3">Noramlized</h3>
		<div class="grid grid-cols-[auto_auto_1fr] items-center gap-4">
			<button type="button" class="btn preset-filled-primary-500">Button</button>
			<ToggleGroup defaultValue={['center']} multiple>
				<ToggleGroup.Item value="left">
					<BoldIcon class="size-4" />
				</ToggleGroup.Item>
				<ToggleGroup.Item value="center">
					<ItalicIcon class="size-4" />
				</ToggleGroup.Item>
				<ToggleGroup.Item value="right">
					<StrikethroughIcon class="size-4" />
				</ToggleGroup.Item>
			</ToggleGroup>
			<input type="text" class="input" placeholder="Example" />
		</div>
	</section>
	<section class="space-y-4">
		<h3 class="h3">Toolbar</h3>
		<div class="inline-flex gap-2 preset-outlined-surface-200-800 p-2 rounded-base">
			<ToggleGroup multiple>
				<ToggleGroup.Item value="left">
					<BoldIcon class="size-4" />
				</ToggleGroup.Item>
				<ToggleGroup.Item value="center">
					<ItalicIcon class="size-4" />
				</ToggleGroup.Item>
				<ToggleGroup.Item value="right">
					<StrikethroughIcon class="size-4" />
				</ToggleGroup.Item>
			</ToggleGroup>
			<ToggleGroup>
				<ToggleGroup.Item value="h1">
					<Heading1Icon class="size-4" />
				</ToggleGroup.Item>
				<ToggleGroup.Item value="h2">
					<Heading2Icon class="size-4" />
				</ToggleGroup.Item>
				<ToggleGroup.Item value="h3">
					<Heading3Icon class="size-4" />
				</ToggleGroup.Item>
			</ToggleGroup>
			<ToggleGroup>
				<ToggleGroup.Item value="edit">
					<PencilIcon class="size-4" />
				</ToggleGroup.Item>
				<ToggleGroup.Item value="code">
					<CodeIcon class="size-4" />
				</ToggleGroup.Item>
				<ToggleGroup.Item value="link">
					<LinkIcon class="size-4" />
				</ToggleGroup.Item>
				<ToggleGroup.Item value="comment">
					<MessageCircleIcon class="size-4" />
				</ToggleGroup.Item>
			</ToggleGroup>
			<button type="button" class="btn preset-filled">Export</button>
		</div>
	</section>
</div>
