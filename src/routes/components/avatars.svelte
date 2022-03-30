<script lang="ts">
    import Avatar from "$lib/Avatar/Avatar.svelte";
    import Card from "$lib/Card/Card.svelte";
    import CodeBlock from "$lib/CodeBlock/CodeBlock.svelte";
    import Table from "$lib/_Table/Table.svelte";

    const tableProps: any = {
        columns: ['Prop', 'Type', 'Values', 'Default', 'Description'],
        data: [
            ['initials', 'string', 'text', 'A', 'Supply up to 2 text characters.'],
            ['src', 'string', 'url', '-', 'The image source to be displayed.'],
            ['size', 'string', 'sm | md | lg | xl | 2xl | 3xl, full', 'full', 'A variety of preset sizes, plus fluid option.'],
            ['outline', 'boolean', 'true | false', 'false', 'Displays a fixed outline of the primary color.'],
            ['hover', 'boolean', 'true | false', 'false', 'Adds an outline of the primary color when hovered.'],
        ],
    };

    const placeholder: string = 'https://i.pravatar.cc/';
    $:props = {
		initials: 'JD',
		src: placeholder,
        size: '3xl',
        outlined: false,
        hover: false,
	};
</script>

<div class="space-y-8">

    <!-- Header -->
    <header class="space-y-4">
        <h1>Avatars</h1>
        <p>Choose from a variety for avatar sizes and styles. Include clean placeholders.</p>
        <CodeBlock language="js" code={`<script>import {Avatar} from '@brainandbones/skeleton';</\script>`}></CodeBlock>
    </header>

    <!-- Sandbox -->
    <section class="space-y-4">
		<div class="space-y-4 lg:space-y-0 lg:grid grid-cols-[2fr,1fr] gap-2">
			<!-- Example -->
			<Card class="space-y-4 flex justify-center items-center">
				<svelte:component
					this={Avatar}
					initials={props.initials}
					src={props.src}
					size={props.size}
					outlined={props.outlined}
					hover={props.hover}
				></svelte:component>
            </Card>
			<!-- Options -->
			<Card class="space-y-4">
                <!-- Initials -->
                <label>
                    <span>Initials</span>
                    <input type="text" bind:value={props.initials} maxlength="2">
                </label>
				<!-- Source -->
				<label>
                    <span>Source</span>
                    <select name="src" id="src" bind:value={props.src}>
                        <option value="">None</option>
                        <option value={placeholder}>Placeholder</option>
                    </select>
                </label>
				<!-- Size -->
				<label>
                    <span>Size</span>
                    <select name="size" id="size" bind:value={props.size}>
                        <option value="full">- fluid -</option>
                        <option value="sm">sm</option>
                        <option value="md">md</option>
                        <option value="lg">lg</option>
                        <option value="xl">xl</option>
                        <option value="2xl">2xl</option>
                        <option value="3xl">3xl</option>
                    </select>
                </label>
				<!-- Outlined -->
				<label class="flex items-center">
					<input type="checkbox" bind:checked={props.outlined} />
					<p class="ml-2">Outlined</p>
				</label>
				<!-- Hover -->
				<label class="flex items-center">
					<input type="checkbox" bind:checked={props.hover} />
					<p class="ml-2">Hover</p>
				</label>
			</Card>
		</div>
		<CodeBlock
			language="html"
			code={`<Avatar initials="${props.initials}" src="${props.src}" size="${props.size}" outlined={${props.outlined}} hover={${props.hover}} />`}
		></CodeBlock>
	</section>
    
    <!-- Properties -->
    <section class="space-y-4">
        <h2>Properties</h2>
        <Table source="{tableProps}"></Table>
    </section>

</div>