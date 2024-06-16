<script lang="ts">
  import AppBar from '$lib/components/AppBar/AppBar.svelte';
</script>

<h1 class="h1">App Bar</h1>

<AppBar>
  {#snippet lead()}
    <span>💀</span>
    <span>Skeleton</span>
  {/snippet}
  Skeleton
  {#snippet trail()}
    <span>Skeleton</span>
    <span>💀</span>
  {/snippet}
</AppBar>

<h3 class="h3">Headline</h3>
<AppBar headlineBase="text-center">
  {#snippet lead()}
    <span>💀</span>
    <span>Skeleton</span>
  {/snippet}
  {#snippet trail()}
    <span>Skeleton</span>
    <span>💀</span>
  {/snippet}
  {#snippet headline()}
    <h1 class="h1">Headline</h1>
  {/snippet}
</AppBar>

<h3 class="h3">Sticky</h3>
<div class="flex max-h-64 flex-col space-y-4 overflow-y-auto">
  <AppBar classes="sticky top-0">
    {#snippet lead()}
      <span>💀</span>
      <span>Skeleton</span>
    {/snippet}
    Skeleton
    {#snippet trail()}
      <span>Skeleton</span>
      <span>💀</span>
    {/snippet}
  </AppBar>
  <div>First line of the sticky AppBar</div>
  <div>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere adipisci
    accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!
  </div>
  <div>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere adipisci
    accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!
  </div>
  <div>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere adipisci
    accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!
  </div>
  <div>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere adipisci
    accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!
  </div>
  <div>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere adipisci
    accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!
  </div>
  <div>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere adipisci
    accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!
  </div>
  <div>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere adipisci
    accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!
  </div>
  <div>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere adipisci
    accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!
  </div>
  <div>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere adipisci
    accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!
  </div>
  <div>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere adipisci
    accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!
  </div>
  <div>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere adipisci
    accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!
  </div>
  <div>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere adipisci
    accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!
  </div>
  <div>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere adipisci
    accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!
  </div>
  <div>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere adipisci
    accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!
  </div>
  <div>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere adipisci
    accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!
  </div>
  <div>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere adipisci
    accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!
  </div>
  <div>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere adipisci
    accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!
  </div>
</div>

<h3 class="h3">A11Y Keyboard</h3>
<button type="button" class="btn preset-filled">Button before the AppBar</button>
<AppBar>
  {#snippet lead()}
    <button type="button" class="btn-icon preset-filled-primary-500">💀</button>
    <button type="button" class="btn preset-filled">Skeleton</button>
  {/snippet}
  Skeleton
  {#snippet trail()}
    <button type="button" class="btn preset-filled">Skeleton</button>
    <button type="button" class="btn-icon preset-filled-primary-500">💀</button>
  {/snippet}
</AppBar>
<button type="button" class="btn preset-filled">Button after the AppBar</button>

<h3 class="h3">RTL</h3>
<div dir="rtl">
  <AppBar>
    {#snippet lead()}
      <button type="button" class="btn-icon preset-filled-primary-500">💀</button>
      <button type="button" class="btn preset-filled">lead</button>
    {/snippet}
    skeleton
    {#snippet trail()}
      <button type="button" class="btn preset-filled">trail</button>
      <button type="button" class="btn-icon preset-filled-primary-500">💀</button>
    {/snippet}
    {#snippet headline()}
      <h1 class="h1">مرحبا بك</h1>
    {/snippet}
  </AppBar>
</div>
