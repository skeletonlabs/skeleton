<script lang="ts">
    import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
    import DataTable from "$lib/Table/DataTable.svelte";
    import Card from "$lib/Card/Card.svelte";
    import Avatar from '$lib/Avatar/Avatar.svelte';

    import AccordionGroup from '$lib/Accordion/AccordionGroup.svelte';
    import AccordionItem from '$lib/Accordion/AccordionItem.svelte';

    const tablePropsGroup: any = {
        headings: ['Prop', 'Type', 'Default', 'Required', 'Description'],
        source: [
            ['spacing', 'class', 'spacing-y-2', '-', 'Provide a class to set spacing between item rows.'],
        ],
    };
    const tablePropsItem: any = {
        headings: ['Prop', 'Type', 'Default', 'Required', 'Description'],
        source: [
            ['open', 'boolean', 'false', '-', `Use this to define which item is open on page load.`],
            ['hover', 'string', 'hover:bg-primary-500/10', '-', 'Provide a class to set the hover background color.'],
            ['spacing', 'string', 'space-y-0', '-', 'Provide a class to set spacing between title and description elements.'],
        ],
    };
    const tableSlots: any = {
        headings: ['Name', 'Required', 'Description'],
        source: [
            ['lead', '-', 'Allows for an optional leading element, such as an icon.'],
            ['summary', '&check;', 'Provide the summary details of each item.'],
            ['content', '&check;', 'Provide the content details of each item.'],
        ],
    };
    const tableA11yItem: any = {
        headings: ['Prop', 'Description'],
        source: [
            ['summaryId', `Unique ID for each items summary element.`],
            ['contentId', `Unique ID for each items content element.`],
        ],
    };
</script>

<div class="space-y-8">

    <!-- Header -->
    <header class="space-y-4">
        <h1>Accordions</h1>
        <p>Divide content into collapsible sections.</p>
        <CodeBlock language="javascript" code={`import { AccordionGroup, AccordionItem } from '@brainandbones/skeleton';`}></CodeBlock>
    </header>

    <!-- Examples -->
    <section class="space-y-4">
        <Card class="space-y-4">
            <AccordionGroup>
                <AccordionItem summaryId="basicSummary1" contentId="basicContent1" open>
                    <svelte:fragment slot="summary">Does Skeleton come with an Accordion component?</svelte:fragment>
                    <svelte:fragment slot="content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eaque nam deleniti rem incidunt.</p>
                    </svelte:fragment>
                </AccordionItem>
                <AccordionItem summaryId="basicSummary2" contentId="basicContent2">
                    <svelte:fragment slot="summary">What else do I need to know to build awesome web apps?</svelte:fragment>
                    <svelte:fragment slot="content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eaque nam deleniti rem incidunt.</p>
                    </svelte:fragment>
                </AccordionItem>
                <AccordionItem summaryId="basicSummary3" contentId="basicContent3">
                    <svelte:fragment slot="summary">What is the weather like today?</svelte:fragment>
                    <svelte:fragment slot="content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eaque nam deleniti rem incidunt.</p>
                    </svelte:fragment>
                </AccordionItem>
            </AccordionGroup>
        </Card>
        <!-- Customized -->
        <h4>Customized</h4>
        <section class="border border-surface-500/10 p-2 rounded-xl space-y-4">
            <AccordionGroup>
                <AccordionItem summaryId="customSummary1" contentId="customContent1" spacing="space-y-4" open>
                    <svelte:fragment slot="lead">
                        <svg class="w-[24px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path class="fill-primary-500" d="M567.5 229.7C577.6 238.3 578.9 253.4 570.3 263.5C561.7 273.6 546.6 274.9 536.5 266.3L512 245.5V432C512 476.2 476.2 512 432 512H144C99.82 512 64 476.2 64 432V245.5L39.53 266.3C29.42 274.9 14.28 273.6 5.7 263.5C-2.875 253.4-1.634 238.3 8.473 229.7L272.5 5.7C281.4-1.9 294.6-1.9 303.5 5.7L567.5 229.7zM144 464H192V312C192 289.9 209.9 272 232 272H344C366.1 272 384 289.9 384 312V464H432C449.7 464 464 449.7 464 432V204.8L288 55.47L112 204.8V432C112 449.7 126.3 464 144 464V464zM240 464H336V320H240V464z"/></svg>
                    </svelte:fragment>
                    <svelte:fragment slot="summary">
                        <h4>Icon and Heading</h4>
                    </svelte:fragment>
                    <svelte:fragment slot="content">
                        <Card><p>The content for the first element.</p></Card>
                    </svelte:fragment>
                </AccordionItem>
                <AccordionItem summaryId="customSummary2" contentId="customContent2" spacing="space-y-4">
                    <svelte:fragment slot="lead"><Avatar size="sm" src="https://i.pravatar.cc/" /></svelte:fragment>
                    <svelte:fragment slot="summary">
                        <h4>Avatar and Heading</h4>
                    </svelte:fragment>
                    <svelte:fragment slot="content">
                        <Card><p>The content for the second element.</p></Card>
                    </svelte:fragment>
                </AccordionItem>
                <AccordionItem summaryId="customSummary3" contentId="customContent3" spacing="space-y-4">
                    <svelte:fragment slot="lead">
                        <Avatar initials="1" size="sm" background="bg-accent-500" />
                    </svelte:fragment>
                    <svelte:fragment slot="summary">
                        <h4>Numeral and Heading</h4>
                    </svelte:fragment>
                    <svelte:fragment slot="content">
                        <Card><p>The content for the third element.</p></Card>
                    </svelte:fragment>
                </AccordionItem>
            </AccordionGroup>
        </section>
    </section>

    <!-- Usage -->
    <section class="space-y-4">
        <h2>Usage</h2>
        <CodeBlock language="html" code={`
<AccordionGroup>
    <AccordionItem summaryId="a11ySummary1" contentId="a11yContent1" open>
        <svelte:fragment slot="lead">(Icon)</svelte:fragment>
        <svelte:fragment slot="summary">Does Skeleton come with an Accordion component?</svelte:fragment>
        <svelte:fragment slot="content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eaque nam deleniti rem incidunt.</p>
        </svelte:fragment>
    </AccordionItem>
    <AccordionItem summaryId="a11ySummary2" contentId="a11yContent2">
        <svelte:fragment slot="lead">(Icon)</svelte:fragment>
        <svelte:fragment slot="summary">What else do I need to know to build awesome web apps?</svelte:fragment>
        <svelte:fragment slot="content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eaque nam deleniti rem incidunt.</p>
        </svelte:fragment>
    </AccordionItem>
    <AccordionItem summaryId="a11ySummary3" contentId="a11yContent3">
        <svelte:fragment slot="lead">(Icon)</svelte:fragment>
        <svelte:fragment slot="summary">What is the weather like today?</svelte:fragment>
        <svelte:fragment slot="content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eaque nam deleniti rem incidunt.</p>
        </svelte:fragment>
    </AccordionItem>
</AccordionGroup>
`.trim()}></CodeBlock>
    </section>

    <!-- Properties -->
	<section class="space-y-4">
		<h2>Properties</h2>
        <h4>Group</h4>
        <DataTable headings="{tablePropsGroup.headings}" source="{tablePropsGroup.source}"></DataTable>
        <h4>Item</h4>
		<DataTable headings="{tablePropsItem.headings}" source="{tablePropsItem.source}"></DataTable>
	</section>
	
	<!-- Slots -->
	<section class="space-y-4">
		<h2>Slots</h2>
		<DataTable headings="{tableSlots.headings}" source="{tableSlots.source}"></DataTable>
	</section>

	<!-- Accessibility -->
	<section class="space-y-4">
		<h2>Accessibility</h2>
        <div class="flex justify-between items-center">
            <h4>Item</h4>
            <a href="https://www.w3.org/WAI/ARIA/apg/example-index/accordion/accordion" target="_blank">ARIA Guidelines</a>
        </div>
		<DataTable headings="{tableA11yItem.headings}" source="{tableA11yItem.source}"></DataTable>
        <p class="text-sm">Note the <code>detail</code> element does not natively support animation (<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details" target="_blank">via MDN</a>)</p>
        <!-- <blockquote>"There's no built-in way to animate the transition between open and closed."</blockquote> -->
	</section>
    
</div>