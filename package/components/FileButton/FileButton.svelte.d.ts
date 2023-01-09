import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        files: FileList;
        button?: string | undefined;
    };
    events: {
        change: Event;
        keydown: KeyboardEvent;
        keyup: KeyboardEvent;
        keypress: KeyboardEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type FileButtonProps = typeof __propDef.props;
export type FileButtonEvents = typeof __propDef.events;
export type FileButtonSlots = typeof __propDef.slots;
export default class FileButton extends SvelteComponentTyped<FileButtonProps, FileButtonEvents, FileButtonSlots> {
}
export {};
