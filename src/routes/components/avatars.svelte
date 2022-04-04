<script lang="ts">
    import Avatar from "$lib/Avatar/Avatar.svelte";
    import Card from "$lib/Card/Card.svelte";
    import CodeBlock from "$lib/CodeBlock/CodeBlock.svelte";
    import Table from "$lib/Table/Table.svelte";

    let placeholder: string = 'https://i.pravatar.cc/';

    const tableProps: any = {
        columns: ['Prop', 'Type', 'Values', 'Default', 'Description'],
        data: [
            ['initials', 'string', 'text', 'A', 'Supply up to 2 text characters.'],
            ['src', 'string', 'url', '-', 'The image source to be displayed.'],
            ['size', 'string', 'sm | md | lg | xl | 2xl | 3xl, full', 'full', 'A variety of preset sizes, plus fluid option.'],
            ['background', 'string', 'class', 'bg-surface-500', 'Provice a class to set background color.'],
            ['color', 'string', 'class', 'text-white', 'Provide a class to set text color.'],
            ['outline', 'boolean', 'true | false', 'false', 'Displays a fixed outline of the primary color.'],
            ['hover', 'boolean', 'true | false', 'false', 'Adds an outline of the primary color when hovered.'],
            ['effect', 'string', '(filter name)', 'false', 'Provide a filter name to auto-apply the filter utility action.'],
        ],
    };

    function updateImage(): void {
        props.src = undefined;
        setTimeout(() => {
            props.src = placeholder;
        }, 1)
    }

    $:props = {
		initials: 'SK',
		src: undefined,
        size: '3xl',
        background: 'bg-surface-500',
        color: undefined,
        outlined: false,
        hover: false,
        effect: ''
	};
</script>

<div class="space-y-8">

    <!-- Header -->
    <header class="space-y-4">
        <h1>Avatars</h1>
        <p>Choose from a variety for avatar sizes and styles, using either initials or images.</p>
        <CodeBlock language="js" code={`<script>import {Avatar} from '@brainandbones/skeleton';</\script>`}></CodeBlock>
    </header>

    <!-- Sandbox -->
    <section class="space-y-4">
		<div class="space-y-4 xl:space-y-0 xl:grid grid-cols-[2fr,1fr] gap-2">
			<!-- Example -->
			<Card class="space-y-4 flex justify-center items-center">
				<svelte:component
					this={Avatar}
					initials={props.initials || 'A'}
					src={props.src}
					size={props.size}
					background={props.background}
					color={props.color}
					outlined={props.outlined}
					hover={props.hover}
                    effect={props.effect}
				></svelte:component>
            </Card>
			<!-- Options -->
			<Card class="space-y-4">
                <!-- Initials -->
                <label>
                    <span>Initials</span>
                    <input type="text" bind:value={props.initials} maxlength="2">
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
				<!-- Source -->
				<label>
                    <span>Source</span>
                    <select name="src" id="src" bind:value={props.src}>
                        <option value="">None</option>
                        <option value={placeholder}>Image</option>
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
                <!-- Filter -->
                <label>
                    <span>Filter Effect</span>
                    <select name="effect" id="effect" bind:value={props.effect} on:change={updateImage}>
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
			</Card>
		</div>
		<CodeBlock
			language="html"
			code={`<Avatar initials="${props.initials || 'A'}" src="${props.src}" size="${props.size}" background="${props.background}" outlined={${props.outlined}} hover={${props.hover}} effect="${props.effect}" />`}
		></CodeBlock>
	</section>
    
    <!-- Properties -->
    <section class="space-y-4">
        <h2>Properties</h2>
        <Table source="{tableProps}"></Table>
    </section>

</div>