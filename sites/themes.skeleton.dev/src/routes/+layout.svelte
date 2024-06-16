<script lang="ts">
  import '../app.pcss';
  import { genCssCode } from '$lib/generator.svelte';

  let cssCode = $derived(genCssCode());
</script>

<!-- Live Preview CSS -->
<svelte:head>
  {@html `\<style\>${cssCode}\</style\>`}
</svelte:head>

<slot />
