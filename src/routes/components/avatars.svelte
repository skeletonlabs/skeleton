<script lang="ts">
    import { writable, type Writable } from "svelte/store";

    import Card from "$lib/Card/Card.svelte";
    import CodeBlock from "$lib/CodeBlock/CodeBlock.svelte";
    import Table from "$lib/Table/Table.svelte";
    import RadioGroup from "$lib/Radio/RadioGroup.svelte";
    import RadioItem from "$lib/Radio/RadioItem.svelte";
    import SlideToggle from "$lib/SlideToggle/SlideToggle.svelte";
    import Avatar from "$lib/Avatar/Avatar.svelte";

    const storeSrc: Writable<string> = writable(undefined);
    let placeholder: string = 'https://i.pravatar.cc/';

    const tableProps: any = {
        columns: ['Prop', 'Type', 'Values', 'Default', 'Description'],
        data: [
            ['initials', 'string', 'text', 'A', 'Supply up to 2 text characters.'],
            ['src', 'string', 'url', '-', 'The image source to be displayed.'],
            ['size', 'string', 'sm | md | lg | xl | 2xl | 3xl | fluid', 'fluid', 'A variety of preset sizes, plus fluid option.'],
            ['background', 'string', 'class', 'bg-surface-500', 'Provice a class to set background color.'],
            ['color', 'string', 'class', 'text-white', 'Provide a class to set text color.'],
            ['outline', 'boolean', 'true | false', 'false', 'Displays a fixed outline of the primary color.'],
            ['hover', 'boolean', 'true | false', 'false', 'Adds an outline of the primary color when hovered.'],
            ['filter', 'string', 'filter name', 'false', 'Provide a filter name to provide a utility filter action.'],
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
		src: $storeSrc,
        size: '3xl',
        background: 'bg-surface-500',
        color: undefined,
        outlined: false,
        hover: false,
        filter: ''
	};
</script>

<div class="space-y-8">

    <!-- Header -->
    <header class="space-y-4">
        <h1>Avatars</h1>
        <p>Choose from a variety for avatar sizes and styles, using either initials or images.</p>
        <CodeBlock language="js" code={`import { Avatar } from '@brainandbones/skeleton';`}></CodeBlock>
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
                    filter={props.filter}
				></svelte:component>
            </Card>
			<!-- Options -->
			<Card class="space-y-4">
                <!-- Size -->
				<label>
                    <span>Size</span>
                    <select name="size" id="size" bind:value={props.size}>
                        <option value="fluid">- fluid -</option>
                        <option value="sm">sm</option>
                        <option value="md">md</option>
                        <option value="lg">lg</option>
                        <option value="xl">xl</option>
                        <option value="2xl">2xl</option>
                        <option value="3xl">3xl</option>
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
                    <div class="flex-1"><SlideToggle bind:checked={props.outlined} accent="bg-accent-500">Outlined</SlideToggle></div>
                    <div class="flex-1"><SlideToggle bind:checked={props.hover} accent="bg-accent-500">Hover</SlideToggle></div>
                </div>
			</Card>
		</div>
		<CodeBlock
			language="html"
			code={`<Avatar initials="${props.initials || 'A'}" ${props.src ? `src="${props.src}"` : ''} size="${props.size}" background="${props.background}" outlined={${props.outlined}} hover={${props.hover}} ${props.filter ? `filter="${props.filter}"` : ''} />`.trim()}></CodeBlock>
	</section>
    
    <!-- Properties -->
    <section class="space-y-4">
        <h2>Properties</h2>
        <Table source="{tableProps}"></Table>
    </section>

</div>