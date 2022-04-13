<script lang="ts">
    export let size: String = 'text-4xl lg:text-6xl';
    export let direction: String = 'bg-gradient-to-r';
    export let from: string = 'from-primary-500';
    export let to: string = 'to-accent-500';

    let cBase = 'lg:leading-tight font-bold';

    // Reactive
    $: classes = `${cBase} ${size}`;
    $: spanClasses = `${from} ${to} ${direction}`;
</script>

<div data-testid="gradient-heading" class="gradient-heading {classes} ${$$props.class}">
    <span data-testid='span' class="bg-clip-text text-transparent box-decoration-clone {spanClasses}">
        <slot />
    </span>
</div>