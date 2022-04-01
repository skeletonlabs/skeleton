<script lang="ts">
    const cBase: string = 'logo-cloud flex flex-col lg:flex-row space-y-1 lg:space-y-0 lg:space-x-1 overflow-hidden rounded-xl';
    $: classes = `${cBase}`;
</script>

<div data-testid='cloud' class="{classes} {$$props.class}">
    <slot />
</div>