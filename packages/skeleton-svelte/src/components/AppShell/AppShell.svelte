<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';
    import { onMount, setContext } from 'svelte';
    import { MediaQuery } from 'svelte/reactivity';
    import { type AppShellContext, appShellContextKey } from '$lib/AppShell/context';

    interface Props extends HTMLAttributes<HTMLDivElement> {
        /**
         * Media query that controls when {@linkplain hideOnScroll} applies.
         * @default max-width: 600px
         */
        hideOnScrollQuery?: string;
    }

    const { children, class: classes, hideOnScrollQuery = 'max-width: 600px', ...rest }: Props = $props();

    // Contexts
    let shouldHide = $state(false);
    let canHideHeader = $state(false);
    let canHideFooter = $state(false);
    const smallScreen = $derived(new MediaQuery(hideOnScrollQuery));
    const shouldHideHeader = $derived(shouldHide && canHideHeader && smallScreen.current);
    const shouldHideFooter = $derived(shouldHide && canHideFooter && smallScreen.current);
    const context = $state<AppShellContext>({
        scrollTop: 0,
        scrollBottom: 0,
        get shouldHideHeader() {
            return shouldHideHeader;
        },
        get shouldHideFooter() {
            return shouldHideFooter;
        },
        headerHeight: 0,
        footerHeight: 0
    });
    setContext(appShellContextKey, context);

    // Auto-hide logic
    let lastScrollTop = 0;

    function onDocumentScroll() {
        const scrollTop = document.documentElement.scrollTop;
        const scrollBottom = document.documentElement.scrollHeight - document.documentElement.clientHeight - scrollTop;

        // Can't hide the header if there is no content to replace the hiding header/footer
        canHideHeader = scrollTop > context.headerHeight + 50;
        canHideFooter = scrollBottom > context.footerHeight + 50;

        // Show/hide header after 50px of scrolling in respective direction
        const delta = scrollTop - lastScrollTop;
        if (!shouldHide && delta > 0) {
            if (delta > 100) shouldHide = true;
            else return;
        } else if (shouldHide && delta < 0) {
            if (delta < -100) shouldHide = false;
            else return;
        }
        lastScrollTop = scrollTop;

        console.log({ shouldHide, scrollTop, scrollBottom });
    }

    onMount(() => {
        document.addEventListener('scroll', onDocumentScroll, { passive: true });
        return () => document.removeEventListener('scroll', onDocumentScroll);
    });
</script>

<div id="appShell" {...rest} class={['overflow-clip', classes]}>
    {@render children?.()}
</div>

<style>
    :global(body, html) {
        min-height: 100%;
    }

    #appShell {
        display: grid;
        grid-template-areas: 'header header header' 'sidebar-left page sidebar-right' 'footer footer footer';
        grid-template-columns: auto 1fr auto;
    }
</style>
