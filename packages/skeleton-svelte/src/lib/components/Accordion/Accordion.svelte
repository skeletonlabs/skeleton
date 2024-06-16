<script lang="ts" context="module">
  const accordionCtxKey = Symbol();

  export const getAccordionCtx = () => getContext<AccordionContext>(accordionCtxKey);
  export const setAccordionCtx = (ctx: AccordionContext) => setContext(accordionCtxKey, ctx);
</script>

<script lang="ts">
  import type { AccordionContext, AccordionProps } from './types.js';
  import { getContext, setContext } from 'svelte';

  let {
    multiple = false,
    value = $bindable([]),
    animDuration = 200,
    // Root
    base = '',
    padding = '',
    spaceY = 'space-y-2',
    rounded = 'rounded',
    width = 'w-full',
    classes = '',
    // Snippets
    children,
    iconOpen,
    iconClosed
  }: AccordionProps = $props();

  // Functions
  function open(id: string) {
    value = multiple ? [...value, id] : [id];
  }
  function close(id: string) {
    value = value.filter((_id) => _id !== id);
  }
  function toggle(id: string) {
    isOpen(id) ? close(id) : open(id);
  }
  function isOpen(id: string) {
    return value.includes(id);
  }

  // Context
  setAccordionCtx({
    open,
    close,
    toggle,
    isOpen,
    get animDuration() {
      return animDuration;
    },
    get iconOpen() {
      return iconOpen;
    },
    get iconClosed() {
      return iconClosed;
    }
  });

  // Side effects
  $effect(() => {
    // If multiple prop is updated to false and there are more than one opened item, keep only the first one open.
    if (!multiple && value.length > 1) value = [value[0]];
  });
</script>

<!-- @component An Accordion parent component. -->

<div class="{base} {padding} {spaceY} {rounded} {width} {classes}" data-testid="accordion">
  {@render children()}
</div>
