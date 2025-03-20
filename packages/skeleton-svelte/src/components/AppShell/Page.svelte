<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';

    interface Props extends HTMLAttributes<HTMLElement> {}

    const { children, class: classes, ...rest }: Props = $props();
</script>

<div id="appShell-page" {...rest} class={['grow', classes]}>
    {@render children?.()}
</div>

<style>
    #appShell-page {
        grid-area: page;
    }
</style>
