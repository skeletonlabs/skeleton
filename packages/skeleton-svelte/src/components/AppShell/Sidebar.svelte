<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';
    import { getContext } from 'svelte';
    import { type AppShellContext, appShellContextKey } from '$lib/AppShell/context';

    interface Props extends HTMLAttributes<HTMLElement> {
        /**
         * If true, this element will stick to the side of the page, remaining fixed as the page is scrolled. Possible values:
         * - `false`: the element will scroll along the page normally.
         * - `page`: the element will briefly scroll upward, then stick to the top of the page.
         *    This should be used if the header is _not sticky_.
         * - `header`: the element will be fixed in place, right below the header.
         *    This should be used if the header is _sticky_.
         * @default true
         */
        sticky?: false | 'page' | 'header';
        /**
         * Sidebar position.
         */
        position: 'left' | 'right';
    }

    const { children, class: classes, sticky = false, position, ...rest }: Props = $props();

    // Contexts
    const context = getContext<AppShellContext>(appShellContextKey);
</script>

<div style:grid-area="sidebar-{position}">
    <aside
        {...rest}
        class={[sticky && 'sticky', classes]}
        style:top={sticky === 'header' ? context.headerHeight + 'px' : sticky === 'page' ? 0 : undefined}
    >
        {@render children?.()}
    </aside>
</div>
