<!-- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details -->

<script lang="ts">
    
    // Props
    export let open: boolean = false;
    export let hover: string = 'hover:bg-primary-500/10';
    export let spacing: string = 'space-y-2';
    // A11y
    export let summaryId: string = undefined;
    export let contentId: string = undefined;

    // Base Classes
    const cBaseDetails: string = '';
    const cBaseSummary: string = 'flex items-center space-x-4 px-4 py-2 cursor-pointer rounded';
    const cBaseIcon: string = 'flex justify-center items-center w-3 fill-black dark:fill-white transition-all duration-[100ms]';
    const cBaseDesc: string = 'px-4 py-2';

    // Reactive Classes
    $: classesDetails = `${cBaseDetails} ${spacing}`;
    $: classesSummary = `${cBaseSummary} ${hover}`;
        $: classesIconState = open ? '-rotate-180' : '';
        $: classesIcon = `${cBaseIcon} ${classesIconState}`;
    $: classesDesc = `${cBaseDesc}`;
</script>

<details bind:open={open} class="accordion-item {classesDetails} {$$props.class}" data-testid="accordion-item">

    <!-- Summary -->
    <summary id={summaryId} class="{classesSummary}" aria-expanded={open} aria-controls={contentId}>
        <!-- Slot: Lead -->
        {#if $$slots.lead}<div><slot name="lead"/></div>{/if}
        <!-- Slot: Text -->
        <div class="flex-auto"><slot name="summary"/></div>
        <!-- Caret -->
        <div class="{classesIcon}">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"/></svg>
        </div>
    </summary>

    <!-- Content -->
    <div id={contentId} role="region" aria-labelledby={summaryId} class="{classesDesc}">
        <slot name="content"/>
    </div>

</details>