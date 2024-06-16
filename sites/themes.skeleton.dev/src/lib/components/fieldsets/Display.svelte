<script lang="ts">
  import { displayBorders, displayBackgrounds } from '$lib/constants';
  import { stateDisplay } from '$lib/state.svelte';
</script>

<div class="space-y-4 md:space-y-8">
  <header>
    <h2 class="h2">Display</h2>
    <p class="opacity-60">
      Apply canned styles to the preview element and components. These styles do not affect your generated theme output.
    </p>
  </header>
  <!-- Display -->
  <fieldset class="space-y-4 md:space-y-8">
    <label class="label space-y-2">
      <span class="label-text">Border</span>
      <select class="select" bind:value={stateDisplay.border}>
        {#each Object.keys(displayBorders) as id}
          <option value={id}>{id}</option>
        {/each}
      </select>
      <pre class="pre !bg-neutral-950">{JSON.stringify(displayBorders[stateDisplay.border], null, 2)}</pre>
    </label>
    <label class="label space-y-2">
      <span class="label-text">Background</span>
      <select class="select" bind:value={stateDisplay.background}>
        {#each Object.keys(displayBackgrounds) as id}
          <option value={id}>{id}</option>
        {/each}
      </select>
      <pre class="pre !bg-neutral-950">{JSON.stringify(displayBackgrounds[stateDisplay.background], null, 2)}</pre>
    </label>
  </fieldset>
</div>
