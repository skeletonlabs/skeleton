<script lang="ts">
import { Navigation } from "@skeletonlabs/skeleton-svelte";
import IconFolder from "lucide-svelte/icons/folder";
import IconGames from "lucide-svelte/icons/gamepad";
import IconImage from "lucide-svelte/icons/image";
// Icons
import IconMenu from "lucide-svelte/icons/menu";
import IconMusic from "lucide-svelte/icons/music";
import IconSettings from "lucide-svelte/icons/settings";
import IconVideo from "lucide-svelte/icons/video";

let hrefExample = "#";
</script>

<div
  class="card border-surface-100-900 grid h-[760px] w-full grid-cols-[auto_1fr] border-[1px]"
>
  <!-- Component -->
  <Navigation.Rail expanded>
    {#snippet header()}
      <Navigation.Tile href="/" labelExpanded="Menu"
        ><IconMenu /></Navigation.Tile
      >
    {/snippet}
    {#snippet tiles()}
      <Navigation.Tile id="0" labelExpanded="Browse Files" href={hrefExample}>
        <IconFolder />
      </Navigation.Tile>
      <Navigation.Tile id="1" labelExpanded="Browse Images" href={hrefExample}>
        <IconImage />
      </Navigation.Tile>
      <Navigation.Tile id="2" labelExpanded="Browse Music" href={hrefExample}>
        <IconMusic />
      </Navigation.Tile>
      <Navigation.Tile id="2" labelExpanded="Browse Videos" href={hrefExample}>
        <IconVideo />
      </Navigation.Tile>
      <Navigation.Tile id="2" labelExpanded="Browse Games" href={hrefExample}>
        <IconGames />
      </Navigation.Tile>
    {/snippet}
    {#snippet footer()}
      <Navigation.Tile
        labelExpanded="Settings"
        href="/settings"
        title="Settings"><IconSettings /></Navigation.Tile
      >
    {/snippet}
  </Navigation.Rail>
  <!-- Content -->
  <div class="flex items-center justify-center">
    <p class="opacity-20">(Content)</p>
  </div>
</div>
