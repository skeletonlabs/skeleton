<script lang="ts">
    import * as toast from "@zag-js/toast";
	import type { ToastProps } from "./types.js";
	import { normalizeProps, useMachine } from "@zag-js/svelte";

    const props: ToastProps = $props();
    const service = useMachine(toast.machine, () => ({
        ...props.toast,
        parent: props.parent,
        index: props.index,
    }));
    const api = $derived(toast.connect(service, normalizeProps));  
    
    const typeClasses = $derived.by(() => {
        switch(api.type) {
            case "info":
                return "bg-surface-200-800 text-surface-200-800-contrast";
            case "error":
                return "bg-error-500 text-error-500-contrast";
            case "success":
                return "bg-success-500 text-success-500-contrast";
        }
    });
</script>

<div class={typeClasses} {...api.getRootProps()}>
    <h3 {...api.getTitleProps()}>{api.title}</h3>
    <p {...api.getDescriptionProps()}>{api.description}</p>
    <button onclick={api.dismiss}>Close</button>
</div>

<style>
    [data-part="root"] {
        translate: var(--x) var(--y);
        scale: var(--scale);
        z-index: var(--z-index);
        height: var(--height);
        opacity: var(--opacity);
        will-change: translate, opacity, scale;
    }
    [data-part="root"] {
        transition:
            translate 400ms,
            scale 400ms,
            opacity 400ms;
        transition-timing-function: cubic-bezier(0.21, 1.02, 0.73, 1);
    }
    [data-part="root"][data-state="closed"] {
        transition:
            translate 400ms,
            scale 400ms,
            opacity 200ms;
        transition-timing-function: cubic-bezier(0.06, 0.71, 0.55, 1);
    }
</style>