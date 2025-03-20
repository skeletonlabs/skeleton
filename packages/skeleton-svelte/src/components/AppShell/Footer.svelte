<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';
    import { getContext, onMount } from 'svelte';
    import { type AppShellContext, appShellContextKey } from '$lib/AppShell/context';

    interface Props extends HTMLAttributes<HTMLElement> {
        /**
         * If true, this element will stick to the bottom of the page, remaining fixed as the page is scrolled.
         *
         * Prefer using a page footer, as a sticky site footer can cover content on small screens.
         * Only applies when `sticky` is true.
         * @default true
         */
        sticky?: boolean;
        /**
         * Hide this header on mobile (narrow screens, as set by {@linkcode hideOnScrollQuery} on the parent `AppShell`)
         * when scrolling down, and show it when scrolling up.
         *
         * Usually used when the header is an AppBar. Only applies when `sticky` is true.
         * @default false
         */
        hideOnScroll?: boolean;
    }

    const { children, class: classes, sticky = true, hideOnScroll = false, ...rest }: Props = $props();

    // Contexts
    const context = getContext<AppShellContext>(appShellContextKey);

    // Remove contexts/styles set by this component on unmount
    onMount(() => () => {
        context.footerHeight = 0;
    });
</script>

<footer
    id="appShell-footer"
    bind:offsetHeight={context.footerHeight}
    {...rest}
    class={[
        sticky && 'sticky bottom-0',
        sticky && hideOnScroll && 'transition-[translate] duration-300',
        sticky && hideOnScroll && context.shouldHideFooter && 'translate-y-full',
        classes
    ]}
>
    {@render children?.()}
</footer>

<style>
    footer {
        grid-area: footer;
    }
</style>
