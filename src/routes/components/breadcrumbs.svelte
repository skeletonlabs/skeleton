<script lang="ts">
    import Card from "$lib/Card/Card.svelte";
    import Table from '$lib/_Table/Table.svelte';
    import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
    import Breadcrumb from "$lib/Breadcrumb/Breadcrumb.svelte";
    import Crumb from "$lib/Breadcrumb/Crumb.svelte";

    // Examples
    const customSeparator: string = `<span class="text-surface-500">/</span>`;

    // Props
    const tableProps: any = {
        columns: ['Prop', 'Type', 'Default', 'Description'],
        data: [
            ['variant', 'string', 'none', 'Matches the <a href="/components/buttons">Button</a> variant options.'],
            ['seperator', 'html', '>', 'Defines seperator. Works best with SVG.']
        ],
    };
    const tablePropsCrumb: any = {
        columns: ['Prop', 'Type', 'Values', 'Default', 'Description'],
        data: [
            ['href', 'string', 'url', 'on', 'Set the anchor href.'],
            ['disabled', 'boolean ', 'true | false', 'false', 'Sets the display to disabled.'],
            ['current', 'boolean ', 'true | false', 'false', 'Shorthand for disabled.'],
        ],
    };
</script>

<div class="space-y-8">
    
    <!-- Heading -->
    <heading class="space-y-4">
        <h1>Breadcrumbs</h1>
        <p>Breadcrumbs allow quick display of your navigation heirarchy. It can be a useful component for sub-pages.</p>
        <CodeBlock language="javascript" code={`<script>import {Breadcrumb, Crumb} from '@brainandbones/skeleton';</\script>`}></CodeBlock>
    </heading>

    <!-- Examples -->
    <section class="space-y-4">
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
            <div class="space-y-4">
                <h4>Basic</h4>
                <Card class="flex justify-center">
                    <Breadcrumb>
                        <Crumb href="/">Home</Crumb>
                        <Crumb href="/articles">Articles</Crumb>
                        <Crumb current>Current</Crumb>
                    </Breadcrumb>
                </Card>
            </div>
            <div class="space-y-4">
                <h4>Separator</h4>
                <Card class="flex justify-center">
                    <Breadcrumb separator={customSeparator}>
                        <Crumb href="/">Home</Crumb>
                        <Crumb href="/articles">Blog</Crumb>
                        <Crumb current>Current</Crumb>
                    </Breadcrumb>
                </Card>
            </div>
            <div class="space-y-4">
                <h4>Icons</h4>
                <Card class="flex justify-center">
                    <Breadcrumb>
                        <Crumb href="/">
                            <svelte:fragment slot="lead">
                                <svg class="w-[24px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path class="fill-primary-500" d="M567.5 229.7C577.6 238.3 578.9 253.4 570.3 263.5C561.7 273.6 546.6 274.9 536.5 266.3L512 245.5V432C512 476.2 476.2 512 432 512H144C99.82 512 64 476.2 64 432V245.5L39.53 266.3C29.42 274.9 14.28 273.6 5.7 263.5C-2.875 253.4-1.634 238.3 8.473 229.7L272.5 5.7C281.4-1.9 294.6-1.9 303.5 5.7L567.5 229.7zM144 464H192V312C192 289.9 209.9 272 232 272H344C366.1 272 384 289.9 384 312V464H432C449.7 464 464 449.7 464 432V204.8L288 55.47L112 204.8V432C112 449.7 126.3 464 144 464V464zM240 464H336V320H240V464z"/></svg>
                            </svelte:fragment>
                        </Crumb>
                        <Crumb href="/">
                            <svelte:fragment slot="lead">
                                <svg class="w-[24px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path class="fill-primary-500" d="M191.1 32C191.1 14.33 206.3 0 223.1 0H352C369.7 0 384 14.33 384 32V64H424C454.9 64 480 89.07 480 120V238.4L505.9 248.1C544 262.4 554.6 311.3 525.8 340.1L456.1 408.1C447.6 418.3 432.4 418.3 423 408.1C413.7 399.6 413.7 384.4 423 375L491.9 306.2C496 302.1 494.5 295.1 489 293L290.8 218.7C288.1 218 287 218 285.2 218.7L86.96 293C81.51 295.1 79.1 302.1 84.11 306.2L152.1 375C162.3 384.4 162.3 399.6 152.1 408.1C143.6 418.3 128.4 418.3 119 408.1L50.17 340.1C21.37 311.3 31.97 262.4 70.1 248.1L95.1 238.4V119.1C95.1 89.07 121.1 63.1 151.1 63.1H191.1L191.1 32zM143.1 220.4L268.3 173.7C281 168.1 294.1 168.1 307.7 173.7L432 220.4V120C432 115.6 428.4 112 424 112H151.1C147.6 112 143.1 115.6 143.1 120L143.1 220.4zM191.1 464C220.8 464 250.5 448.7 272 430.1C281.1 421.1 294.8 421.1 303.1 430.1C325.5 448.7 355.1 464 383.1 464C412.8 464 442.5 448.7 464 430.1C473.1 421.1 486.8 421.1 495.9 430.1C512.9 445.1 535.2 456.9 557.2 461.8C570.1 464.7 578.3 477.5 575.4 490.5C572.5 503.4 559.6 511.5 546.7 508.6C518 502.2 494.4 488.2 479.1 478.2C451.9 497.7 418.6 512 383.1 512C349.4 512 316.1 497.7 287.1 478.2C259.9 497.7 226.6 512 191.1 512C157.4 512 124.1 497.7 95.98 478.2C81.61 488.2 57.99 502.2 29.3 508.6C16.37 511.5 3.534 503.4 .633 490.5C-2.268 477.5 5.864 464.7 18.8 461.8C41 456.8 62.76 444.1 79.1 430.1C89.09 421.1 102.8 421.1 111.9 430.1C133.5 448.7 163.1 464 191.1 464L191.1 464z"/></svg>
                            </svelte:fragment>
                        </Crumb>
                        <Crumb current>Current</Crumb>
                    </Breadcrumb>
                </Card>
            </div>
            <div class="space-y-4">
                <h4>Mixed</h4>
                <Card class="flex justify-center">
                    <Breadcrumb>
                        <Crumb href="/">
                            <svelte:fragment slot="lead">
                                <svg class="w-[24px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path class="fill-primary-500" d="M567.5 229.7C577.6 238.3 578.9 253.4 570.3 263.5C561.7 273.6 546.6 274.9 536.5 266.3L512 245.5V432C512 476.2 476.2 512 432 512H144C99.82 512 64 476.2 64 432V245.5L39.53 266.3C29.42 274.9 14.28 273.6 5.7 263.5C-2.875 253.4-1.634 238.3 8.473 229.7L272.5 5.7C281.4-1.9 294.6-1.9 303.5 5.7L567.5 229.7zM144 464H192V312C192 289.9 209.9 272 232 272H344C366.1 272 384 289.9 384 312V464H432C449.7 464 464 449.7 464 432V204.8L288 55.47L112 204.8V432C112 449.7 126.3 464 144 464V464zM240 464H336V320H240V464z"/></svg>
                            </svelte:fragment>
                            <span>Home</span>
                        </Crumb>
                        <Crumb href="/">
                            <svelte:fragment slot="lead">
                                <svg class="w-[24px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path class="fill-primary-500" d="M191.1 32C191.1 14.33 206.3 0 223.1 0H352C369.7 0 384 14.33 384 32V64H424C454.9 64 480 89.07 480 120V238.4L505.9 248.1C544 262.4 554.6 311.3 525.8 340.1L456.1 408.1C447.6 418.3 432.4 418.3 423 408.1C413.7 399.6 413.7 384.4 423 375L491.9 306.2C496 302.1 494.5 295.1 489 293L290.8 218.7C288.1 218 287 218 285.2 218.7L86.96 293C81.51 295.1 79.1 302.1 84.11 306.2L152.1 375C162.3 384.4 162.3 399.6 152.1 408.1C143.6 418.3 128.4 418.3 119 408.1L50.17 340.1C21.37 311.3 31.97 262.4 70.1 248.1L95.1 238.4V119.1C95.1 89.07 121.1 63.1 151.1 63.1H191.1L191.1 32zM143.1 220.4L268.3 173.7C281 168.1 294.1 168.1 307.7 173.7L432 220.4V120C432 115.6 428.4 112 424 112H151.1C147.6 112 143.1 115.6 143.1 120L143.1 220.4zM191.1 464C220.8 464 250.5 448.7 272 430.1C281.1 421.1 294.8 421.1 303.1 430.1C325.5 448.7 355.1 464 383.1 464C412.8 464 442.5 448.7 464 430.1C473.1 421.1 486.8 421.1 495.9 430.1C512.9 445.1 535.2 456.9 557.2 461.8C570.1 464.7 578.3 477.5 575.4 490.5C572.5 503.4 559.6 511.5 546.7 508.6C518 502.2 494.4 488.2 479.1 478.2C451.9 497.7 418.6 512 383.1 512C349.4 512 316.1 497.7 287.1 478.2C259.9 497.7 226.6 512 191.1 512C157.4 512 124.1 497.7 95.98 478.2C81.61 488.2 57.99 502.2 29.3 508.6C16.37 511.5 3.534 503.4 .633 490.5C-2.268 477.5 5.864 464.7 18.8 461.8C41 456.8 62.76 444.1 79.1 430.1C89.09 421.1 102.8 421.1 111.9 430.1C133.5 448.7 163.1 464 191.1 464L191.1 464z"/></svg>
                            </svelte:fragment>
                            <span>The Helm</span>
                        </Crumb>
                        <Crumb current>Current</Crumb>
                    </Breadcrumb>
                </Card>
            </div>
            
        </div>
        <h4>Variants</h4>
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
            <Card>
                <Breadcrumb variant="text" class="flex justify-center">
                    <Crumb href="/">Home</Crumb>
                    <Crumb href="/helm">The Helm</Crumb>
                    <Crumb current>Current</Crumb>
                </Breadcrumb>
            </Card>
            <Card>
                <Breadcrumb variant="filled-accent" class="flex justify-center">
                    <Crumb href="/">Home</Crumb>
                    <Crumb href="/helm">The Helm</Crumb>
                    <Crumb current>Current</Crumb>
                </Breadcrumb>
            </Card>
            <Card>
                <Breadcrumb variant="ghost-primary" class="flex justify-center">
                    <Crumb href="/">Home</Crumb>
                    <Crumb href="/helm">The Helm</Crumb>
                    <Crumb current>Current</Crumb>
                </Breadcrumb>
            </Card>
            <Card>
                <Breadcrumb variant="ghost-warning" class="flex justify-center">
                    <Crumb href="/">Home</Crumb>
                    <Crumb href="/helm">The Helm</Crumb>
                    <Crumb current>Current</Crumb>
                </Breadcrumb>
            </Card>
        </div>
    </section>

    <!-- Usage -->
    <section class="space-y-4">
        <h2>Usage</h2>
        <CodeBlock language="html" code={`
<Breadcrumb>
    <Crumb href='/'>
        <svelte:fragment>{icon}</svelte:fragment>
        <span>Home</span>
    </Crumb>
    <Crumb href='/articles'>Articles</Crumb>
    <Crumb disabled>Current</Crumb>
</Breadcrumb>
        `.trim()}></CodeBlock>
    </section>

    <!-- Properties -->
    <section class="space-y-4">
        <h2>Properties</h2>
        <h4>Breadcrumb</h4>
        <Table source="{tableProps}"></Table>
        <h4>Crumb</h4>
        <Table source="{tablePropsCrumb}"></Table>
    </section>
</div>
