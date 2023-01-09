import { SvelteComponentTyped } from "svelte";
import type { Writable } from 'svelte/store';
declare const __propDef: {
    props: {
        [x: string]: any;
        value?: any | undefined;
        tag?: string | undefined;
        label?: string | undefined;
        regionIcon?: string | undefined;
        regionLabel?: string | undefined;
        selected?: Writable<any> | undefined;
        active?: Writable<any> | undefined;
        hover?: Writable<any> | undefined;
    };
    events: {
        keydown: KeyboardEvent;
        keyup: KeyboardEvent;
        keypress: KeyboardEvent;
        click: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type AppRailTileProps = typeof __propDef.props;
export type AppRailTileEvents = typeof __propDef.events;
export type AppRailTileSlots = typeof __propDef.slots;
/** A navigation tile for the App Rail. */
export default class AppRailTile extends SvelteComponentTyped<AppRailTileProps, AppRailTileEvents, AppRailTileSlots> {
}
export {};
