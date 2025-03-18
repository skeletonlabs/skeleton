<script lang="ts">
	import { normalizeProps, useMachine } from '@zag-js/svelte';
    import * as toast from '@zag-js/toast';
	import Toast from './Toast.svelte';
	import type { ToastProviderProps } from './types.js';
	import { setToastContext } from './context.js';

    const {
        children,
        ...rest
    }: ToastProviderProps = $props();
    const id = $props.id();
    const toaster = $derived(toast.createStore(rest));
    const service = useMachine(toast.group.machine, () => ({
        id: id,
        store: toaster
    }));
    const api = $derived(toast.group.connect(service, normalizeProps));
    setToastContext({ 
        get toaster() {
            return toaster;
        }
     });
</script>

{@render children?.()}

<div {...api.getGroupProps()}>
    {#each api.getToasts() as toast, index (toast.id)}
        <Toast toast={toast} index={index} parent={service} />
    {/each}
</div>