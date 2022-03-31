<script lang="ts">
    import Card from "$lib/Card/Card.svelte";
    import ListGroup from "$lib/Lists/ListGroup.svelte";
    import ListItem from "$lib/Lists/ListItem.svelte";
    import CodeBlock from "$lib/CodeBlock/CodeBlock.svelte";
    import Table from "$lib/_Table/Table.svelte";
    import {writable} from 'svelte/store'
    

    const anchorIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M352 176C369.7 176 384 190.3 384 208C384 225.7 369.7 240 352 240H319.1V448H339.2C351.8 472.7 370 493.1 392.2 510.2C384.3 511.4 376.2 512 368 512H208C119.6 512 48 440.4 48 352V345.9L40.97 352.1C31.6 362.3 16.4 362.3 7.029 352.1C-2.343 343.6-2.343 328.4 7.029 319L63.03 263C72.4 253.7 87.6 253.7 96.97 263L152.1 319C162.3 328.4 162.3 343.6 152.1 352.1C143.6 362.3 128.4 362.3 119 352.1L112 345.9V352C112 405 154.1 448 208 448H256V240H224C206.3 240 192 225.7 192 208C192 190.3 206.3 176 224 176H234.9C209 158.8 192 129.4 192 96C192 42.98 234.1 0 288 0C341 0 384 42.98 384 96C384 129.4 366.1 158.8 341.1 176H352zM287.1 128C305.7 128 319.1 113.7 319.1 96C319.1 78.33 305.7 64 287.1 64C270.3 64 255.1 78.33 255.1 96C255.1 113.7 270.3 128 287.1 128zM352 368C352 288.5 416.5 224 496 224C575.5 224 640 288.5 640 368C640 447.5 575.5 512 496 512C416.5 512 352 447.5 352 368zM496 464C509.3 464 520 453.3 520 440C520 426.7 509.3 416 496 416C482.7 416 472 426.7 472 440C472 453.3 482.7 464 496 464zM479.1 288V368C479.1 376.8 487.2 384 495.1 384C504.8 384 511.1 376.8 511.1 368V288C511.1 279.2 504.8 272 495.1 272C487.2 272 479.1 279.2 479.1 288z"/></svg>'
    const heartIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"/></svg>'

    let selections = writable('');
    let multiSelections = writable([]);

    const tablePropsGroup: any = {
        columns: ['Prop', 'Type', 'Values', 'Default', 'Description'],
        data: [
            ['variant', 'string', 'dense, compact, comfortable', 'compact', 'Define the height of the list item'],
            ['separate', 'boolean', 'true | false', 'false', 'Set list items to be separated by a divider'],
            ['selectable', 'boolean', 'true | false', 'false', 'Set a list to contain selectable items'],
            ['multiselect', 'boolean', 'true | false', 'false', 'Set a list to contain multiple selectable items'],
            ['active', 'writable', 'any', 'null', 'Define the svelte writable store object to contain active (selected) items'],
        ],
    };

    const tablePropsItem: any = {
        columns: ['Prop', 'Type', 'Values', 'Default', 'Description'],
        data: [
            ['icon', 'HTML', 'Any HTML element', '-', 'Define a HTML prefix to the list item, such as an icon'],
        ],
    };
    
</script>

<!-- Header -->
<header class="space-y-4">
    <h2>Lists</h2>
    <p class='space-y-4'>List groups can be used to group together static lists, create an interactive list with selections, etc.. (TODO)</p>
</header>

<!-- Examples -->
<section class="mt-6">
    <h4 class='mb-4'>Basic Variants (Dense, Compact, Comfortable)</h4>
    <Card class='grid grid-flow-col'>
        <div>
            <ListGroup variant='dense'>
                <ListItem>Item A</ListItem>
                <ListItem>Item B</ListItem>
                <ListItem>Item C</ListItem>
                <ListItem>Item D</ListItem>
            </ListGroup>
        </div>
        <div>
            <ListGroup variant='compact'>
                <ListItem>Item A</ListItem>
                <ListItem>Item B</ListItem>
                <ListItem>Item C</ListItem>
                <ListItem>Item D</ListItem>
            </ListGroup>
        </div>
        <div>
            <ListGroup variant='comfortable'>
                <ListItem>Item A</ListItem>
                <ListItem>Item B</ListItem>
                <ListItem>Item C</ListItem>
                <ListItem>Item D</ListItem>
            </ListGroup>
        </div>
    </Card>

    <h4 class='mb-4 mt-4'>Separated</h4>
    <Card>
        <ListGroup variant='compact' separate>
            <ListItem>Item A</ListItem>
            <ListItem>Item B</ListItem>
            <ListItem>Item C</ListItem>
            <ListItem>Item D</ListItem>
        </ListGroup>
    </Card>

    <h4 class='mb-4 mt-4'>Single-selection (Persistent)</h4>
    <Card>
        <ListGroup active={selections} variant='comfortable' selectable hover>
            <ListItem value={'Value of A'}>Item A</ListItem>
            <ListItem value={'Value of B'}>Item B</ListItem>
            <ListItem value={'Value of C'}>Item C</ListItem>
            <ListItem value={'Value of D'}>Item D</ListItem>
        </ListGroup>
        <p class='mt-2'>Selected: {$selections}</p>
    </Card>

    <h4 class='mb-4 mt-4'>Multi-selection</h4>
    <Card>
        <ListGroup active={multiSelections} variant='comfortable' selectable multiselect>
            <ListItem value={'Value of A'}>Item A</ListItem>
            <ListItem value={'Value of B'}>Item B</ListItem>
            <ListItem value={'Value of C'}>Item C</ListItem>
            <ListItem value={'Value of D'}>Item D</ListItem>
        </ListGroup>
        <p class='mt-2'>Selected: {$multiSelections}</p>
    </Card>

    <h4 class='mb-4 mt-4'>Slotted Content</h4>
    <Card>
        <ListGroup variant='comfortable' >
            <ListItem><svelte:fragment slot='icon'><div class='w-6 h-6 bg-primary-500 rounded-full p-1'>{@html anchorIcon}</div></svelte:fragment>Brew some coffee..</ListItem>
            <ListItem><svelte:fragment slot='icon'><div class='w-6 h-6 bg-primary-500 rounded-full p-1'>{@html anchorIcon}</div></svelte:fragment>Write some code..</ListItem>
            <ListItem><svelte:fragment slot='icon'><div class='w-6 h-6 bg-primary-500 rounded-full p-1'>{@html anchorIcon}</div></svelte:fragment>Revise..</ListItem>
            <ListItem><svelte:fragment slot='icon'><div class='w-6 h-6 bg-accent-500 rounded-full p-1'>{@html heartIcon}</div></svelte:fragment>Rinse and repeat!</ListItem>
        </ListGroup>
    </Card>

    <h4 class='mb-4 mt-4'>Prop Icon</h4>
    <Card>
        <ListGroup variant='comfortable'>
            <ListItem icon={heartIcon}>Item A</ListItem>
            <ListItem icon={anchorIcon}>Item B</ListItem>
        </ListGroup>
    </Card>

    <!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
		<CodeBlock language="javascript" code={`<script>\nimport {ListGroup, ListItem} from '@brainandbones/skeleton';\nimport {writable} from 'svelte/store';\n\nlet selections = writable([]);\n</\script>`}></CodeBlock>
        <CodeBlock language="html" code={`<ListGroup variant='comfortable' selectable multiselect>\n<ListItem icon={iconSrc}>Coffee</ListItem>\n<ListItem icon={iconSrc}>Tea</ListItem> \n</ListGroup>`}></CodeBlock>
	</section>

    <!-- Properties -->
    <section class="space-y-4">
        <h2 class="text-2xl font-bold">Properties List Group</h2>
        <Table source="{tablePropsGroup}"></Table>
    </section>

    <!-- Properties -->
    <section class="space-y-4">
        <h2 class="text-2xl font-bold">Properties List Item</h2>
        <Table source="{tablePropsItem}"></Table>
    </section>

</section>