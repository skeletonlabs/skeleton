import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        files: FileList;
        title?: string | undefined;
        notes?: string | undefined;
        width?: string | undefined;
        height?: string | undefined;
        padding?: string | undefined;
        color?: string | undefined;
    };
    events: {
        dragenter: DragEvent;
        click: MouseEvent;
        keydown: KeyboardEvent;
        keyup: KeyboardEvent;
        keypress: KeyboardEvent;
        change: Event;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type FileDropzoneProps = typeof __propDef.props;
export type FileDropzoneEvents = typeof __propDef.events;
export type FileDropzoneSlots = typeof __propDef.slots;
export default class FileDropzone extends SvelteComponentTyped<FileDropzoneProps, FileDropzoneEvents, FileDropzoneSlots> {
}
export {};
