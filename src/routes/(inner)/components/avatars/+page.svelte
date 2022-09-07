<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	import { DataTable, Card, RadioGroup, RadioItem, SlideToggle, Avatar } from '@brainandbones/skeleton';
	import { Apollo, BlueNight, Emerald, GreenFall, Noir, NoirLight, Rustic, Summer84, XPro } from '@brainandbones/skeleton';
	import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';

	const storeSrc: Writable<string | undefined> = writable(undefined);
	let placeholder: string = 'https://i.pravatar.cc/';

	const tableProps: any = {
		headings: ['Prop', 'Type', 'Default', 'Values', 'Description'],
		source: [
			['initials', 'string', 'A', 'text', 'Provide up to two text characters.'],
			['src', 'string', 'url', '-', 'The image source to display.'],
			['size', 'string', 'full', 'sm | md | lg | xl | 2xl | 3xl | full', 'Sets the circle and text sizing.'],
			['background', 'string', 'bg-surface-500', 'class', 'Provide a class to set background color. Only works with initials'],
			['color', 'string', 'text-white', 'class', 'Provide a class to set text color.'],
			['outlined', 'boolean', 'false', 'true | false', 'Displays an outline of the primary color.'],
			['hover', 'boolean', 'false', 'true | false', 'Displays and outline when hovering the avatar.'],
			['filter', 'string', 'false', 'filter reference', 'Enables a visual <a href="/utilities/filters">Filter</a>. Only works with src.']
		]
	};

	function updateImage(): void {
		props.src = undefined;
		setTimeout(() => {
			props.src = placeholder;
		}, 1);
	}

	$: props = {
		initials: 'SK',
		src: $storeSrc,
		size: '3xl',
		background: 'bg-surface-500',
		color: undefined,
		outlined: false,
		hover: false,
		filter: ''
	};
</script>

<!-- Filter SVG Components - NOTE: Keep these localized -->
<Apollo />
<BlueNight />
<Emerald />
<GreenFall />
<Noir />
<NoirLight />
<Rustic />
<Summer84 />
<XPro />

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Avatars</h1>
		<p>Choose from a variety for avatar sizes and styles, using either initials or images.</p>
		<CodeBlock language="js" code={`import { Avatar } from '@brainandbones/skeleton';`} />
	</header>

	<!-- Sandbox -->
	<section class="space-y-4">
		<div class="space-y-4 xl:space-y-0 xl:grid grid-cols-[2fr,1fr] gap-2">
			<!-- Example -->
			<Card body="h-full flex justify-center items-center">
				<svelte:component
					this={Avatar}
					initials={props.initials || 'A'}
					src={props.src}
					size={props.size}
					background={props.background}
					color={props.color}
					outlined={props.outlined}
					hover={props.hover}
					filter={props.filter}
				/>
			</Card>
			<!-- Options -->
			<Card body="space-y-4">
				<!-- Size -->
				<label>
					<span>Size</span>
					<select name="size" id="size" bind:value={props.size}>
						<option value="sm">sm</option>
						<option value="md">md</option>
						<option value="lg">lg</option>
						<option value="xl">xl</option>
						<option value="2xl">2xl</option>
						<option value="3xl">3xl</option>
						<option value="full">full</option>
					</select>
				</label>
				<!-- Source -->
				<div>
					<legend>Source</legend>
					<RadioGroup selected={storeSrc} background="bg-accent-500" color="text-white" width="w-full">
						<RadioItem value={undefined}>Initials</RadioItem>
						<RadioItem value={placeholder}>Image</RadioItem>
					</RadioGroup>
				</div>
				{#if $storeSrc === undefined}
					<!-- Initials -->
					<label>
						<span>Initials</span>
						<input type="text" bind:value={props.initials} maxlength="2" />
					</label>
					<!-- Background -->
					<label>
						<span>Background</span>
						<select name="background" id="background" bind:value={props.background}>
							<option value="bg-surface-500">Default</option>
							<option value="bg-primary-500">bg-primary-500</option>
							<option value="bg-accent-500">bg-accent-500</option>
							<option value="bg-warning-500">bg-warning-500</option>
						</select>
					</label>
				{/if}
				<!-- Filter -->
				{#if $storeSrc !== undefined}
					<label>
						<span>Filter</span>
						<select name="filter" id="filter" bind:value={props.filter} on:change={updateImage}>
							<option value="">None</option>
							<option value="Apollo">Apollo</option>
							<option value="BlueNight">BlueNight</option>
							<option value="Emerald">Emerald</option>
							<option value="GreenFall">GreenFall</option>
							<option value="Noir">Noir</option>
							<option value="NoirLight">NoirLight</option>
							<option value="Rustic">Rustic</option>
							<option value="Summer84">Summer84</option>
							<option value="XPro">XPro</option>
						</select>
					</label>
				{/if}
				<div class="flex space-x-4">
					<div class="flex-1">
						<SlideToggle bind:checked={props.outlined} accent="bg-accent-500">Outlined</SlideToggle>
					</div>
					<div class="flex-1">
						<SlideToggle bind:checked={props.hover} accent="bg-accent-500">Hover</SlideToggle>
					</div>
				</div>
			</Card>
		</div>
		<CodeBlock
			language="html"
			code={`<Avatar initials="${props.initials || 'A'}" ${props.src ? `src="${props.src}"` : ''} size="${props.size}" background="${props.background}" outlined={${props.outlined}} hover={${
				props.hover
			}} ${props.filter ? `filter="${props.filter}"` : ''}/>`.trim()}
		/>
	</section>

	<!-- Properties -->
	<section class="space-y-4">
		<h2>Properties</h2>
		<DataTable headings={tableProps.headings} source={tableProps.source} />
	</section>

	<!-- Accessibility -->
	<section class="space-y-4">
		<h2>Accessibility</h2>
		<p>You many apply an <code>alt</code> tag, which is appended to the image element.</p>
	</section>
</div>
