<script lang="ts">
// Components (common)
import AppHeader from "$lib/components/common/AppHeader/AppHeader.svelte";

const { children } = $props();
</script>

<main class="h-screen grid grid-rows-[auto_1fr_auto] overflow-hidden">
  <!-- Page Header -->
  <AppHeader />
  <!-- Page Content -->
  {@render children?.()}
</main>
