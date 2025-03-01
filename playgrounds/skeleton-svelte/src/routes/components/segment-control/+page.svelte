<script lang="ts">
import { Segment } from "@skeletonlabs/skeleton-svelte";
import IconCenter from "lucide-svelte/icons/align-center";
import IconJustify from "lucide-svelte/icons/align-justify";
// Icons
import IconLeft from "lucide-svelte/icons/align-left";
import IconRight from "lucide-svelte/icons/align-right";

// State
const align = $state("left");
const size = $state("sm");
</script>

<div class="space-y-10">
  <header>
    <h1 class="h1">Segment Control</h1>
  </header>
  <section class="space-y-4">
    <pre class="pre">{align}</pre>
    <Segment
      value={align}
      onValueChange={(e) => (align = e.value)}
      name="align"
    >
      <Segment.Item value="left">
        <IconLeft />
      </Segment.Item>
      <Segment.Item value="center">
        <IconCenter />
      </Segment.Item>
      <Segment.Item value="right">
        <IconRight />
      </Segment.Item>
      <Segment.Item value="justify">
        <IconJustify />
      </Segment.Item>
    </Segment>
  </section>
  <section class="space-y-4">
    <pre class="pre">{size}</pre>
    <Segment bind:value={size} name="size">
      <Segment.Item value="sm">sm</Segment.Item>
      <Segment.Item value="md">md</Segment.Item>
      <Segment.Item value="lg" disabled>lg</Segment.Item>
    </Segment>
  </section>
  <!-- Vertical -->
  <section class="space-y-4">
    <h2 class="h2">Vertical</h2>
    <pre class="pre">{size}</pre>
    <Segment bind:value={size} name="size" orientation="vertical">
      <Segment.Item value="sm">sm</Segment.Item>
      <Segment.Item value="md">md</Segment.Item>
      <Segment.Item value="lg" disabled>lg</Segment.Item>
    </Segment>
  </section>
  <!-- Disabled -->
  <section class="space-y-4">
    <h2 class="h2">Disabled</h2>
    <Segment bind:value={align} name="align" disabled>
      <Segment.Item value="left">
        <IconLeft />
      </Segment.Item>
      <Segment.Item value="center">
        <IconCenter />
      </Segment.Item>
      <Segment.Item value="right">
        <IconRight />
      </Segment.Item>
      <Segment.Item value="justify">
        <IconJustify />
      </Segment.Item>
    </Segment>
  </section>
  <!-- Read-Only -->
  <section class="space-y-4">
    <h2 class="h2">Read-Only</h2>
    <Segment bind:value={align} name="align" readOnly>
      <Segment.Item value="left">
        <IconLeft />
      </Segment.Item>
      <Segment.Item value="center">
        <IconCenter />
      </Segment.Item>
      <Segment.Item value="right">
        <IconRight />
      </Segment.Item>
      <Segment.Item value="justify">
        <IconJustify />
      </Segment.Item>
    </Segment>
  </section>
</div>
