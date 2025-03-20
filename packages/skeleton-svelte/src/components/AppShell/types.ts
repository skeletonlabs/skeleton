import type { Snippet } from 'svelte';

// AppShell Context ---

export interface AppShellContext {
    /** Reactive scrollTop value of root element in pixels  */
    scrollTop: number;
    /** Reactive calculated scrollBot value of root element in pixels, i.e. height of page below viewport that can be scrolled.  */
    scrollBottom: number;
    /** Reactive property indicating if the header should be auto-hidden based on scrolling pattern. */
    shouldHideHeader: boolean;
    /** Reactive property indicating if the footer should be auto-hidden based on scrolling pattern. */
    shouldHideFooter: boolean;
    /** Reactive height of the main header, in pixels. */
    headerHeight: number;
    /** Reactive height of the main footer, in pixels. */
    footerHeight: number;
}

// AppShell ---

export interface AppShellProps {
    /**
     * Media query that controls when {@linkplain hideOnScroll} applies.
     * @default max-width: 600px
     */
    hideOnScrollQuery?: string;

    // Root ---
    /** Sets base styles. */
    base?: string;
    /** Provide arbitrary CSS classes. */
    classes?: string;

    // Snippets ---
    /** The default child slot. */
    children: Snippet;
}

// AppShell Header ---

export interface AppShellHeaderProps {
    /**
     * If non-null, the `scroll-padding-top` CSS property of the root (`<html>`) element will be set to this value,
     * with `{height}` replaced with the height of this header, in pixels.
     * @default calc({height}px + 1rem)
     */
    scrollPadding?: string | null;
    /**
     * If true, this element will stick to the top of the page, remaining fixed as the page is scrolled.
     * @default true
     */
    sticky?: boolean;
    /**
     * Hide this header on mobile (narrow screens, as set by `hideOnScrollQuery` on the parent `AppShell`)
     * when scrolling down, and show it when scrolling up.
     *
     * Usually used when the header is an AppBar. Only applies when `sticky` is true.
     * @default false
     */
    hideOnScroll?: boolean;

    // Root ---
    /** Provide arbitrary CSS classes. */
    classes?: string;

    // Snippets ---
    /** The default child slot. */
    children: Snippet;
}

// AppShell Page ---

export interface AppShellPageProps {
    // Root ---
    /** Sets base styles. */
    base?: string;
    /** Provide arbitrary CSS classes. */
    classes?: string;

    // Snippets ---
    /** The default child slot. */
    children: Snippet;
}

// AppShell Sidebar ---

export interface AppShellSidebarProps {
    /**
     * Stick the sidebar to the side of the page, remaining fixed as the page is scrolled. Allowed values:
     * - `false`: the element will scroll along the page normally (no stick).
     * - `page`: the element will briefly scroll upward, then stick to the top of the page.
     *    This should be used if the header is _not sticky_.
     * - `header`: the element will be fixed in place, right below the header.
     *    This should be used if the header is _sticky_.
     * @default false
     */
    sticky?: false | 'page' | 'header';
    /**
     * Sidebar position.
     */
    position: 'left' | 'right';

    // Root ---
    /** Provide arbitrary CSS classes. */
    classes?: string;

    // Snippets ---
    /** The default child slot. */
    children: Snippet;
}

// AppShell Footer ---

export interface AppShellFooterProps {
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

    // Root ---
    /** Provide arbitrary CSS classes. */
    classes?: string;

    // Snippets ---
    /** The default child slot. */
    children: Snippet;
}
