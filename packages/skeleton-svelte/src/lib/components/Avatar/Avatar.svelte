<script lang="ts">
  import type { AvatarProps } from './types.js';

  let {
    src = '',
    alt = '',
    filter = '',
    // Root
    base = 'overflow-hidden isolate',
    background = 'bg-surface-400-600',
    size = 'size-16',
    font = '',
    border = '',
    rounded = 'rounded-full',
    shadow = '',
    classes = '',
    // Image
    imageBase = 'w-full object-cover',
    imageClasses = '',
    // Snippets
    children
  }: AvatarProps = $props();
</script>

<!-- @component An image with a fallback for representing the user. -->

<figure class="{base} {background} {size} {font} {border} {rounded} {shadow} {classes}" data-testId="avatar">
  {#if src}
    <img class="{imageBase} {imageClasses}" {src} {alt} style:filter={filter && `url(${filter})`} />
  {:else if children}
    {@render children()}
  {/if}
</figure>
