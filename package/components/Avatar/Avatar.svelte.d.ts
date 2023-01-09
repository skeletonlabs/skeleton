import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        background?: string | undefined;
        width?: string | undefined;
        border?: string | undefined;
        rounded?: string | undefined;
        shadow?: string | undefined;
        cursor?: string | undefined;
        initials?: string | undefined;
        fill?: string | undefined;
        src?: string | undefined;
        action?: any;
        actionParams?: string | undefined;
    };
    events: {
        click: MouseEvent;
        keydown: KeyboardEvent;
        keyup: KeyboardEvent;
        keypress: KeyboardEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type AvatarProps = typeof __propDef.props;
export type AvatarEvents = typeof __propDef.events;
export type AvatarSlots = typeof __propDef.slots;
export default class Avatar extends SvelteComponentTyped<AvatarProps, AvatarEvents, AvatarSlots> {
}
export {};
