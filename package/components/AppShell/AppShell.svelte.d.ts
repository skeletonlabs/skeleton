import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        slotHeader?: string | undefined;
        slotSidebarLeft?: string | undefined;
        slotSidebarRight?: string | undefined;
        slotPageHeader?: string | undefined;
        slotPageContent?: string | undefined;
        slotPageFooter?: string | undefined;
        slotFooter?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        header: {};
        sidebarLeft: {};
        pageHeader: {};
        default: {};
        pageFooter: {};
        sidebarRight: {};
        footer: {};
    };
};
export type AppShellProps = typeof __propDef.props;
export type AppShellEvents = typeof __propDef.events;
export type AppShellSlots = typeof __propDef.slots;
export default class AppShell extends SvelteComponentTyped<AppShellProps, AppShellEvents, AppShellSlots> {
}
export {};
