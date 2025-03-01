<script lang="ts">
import { Tabs } from "@skeletonlabs/skeleton-svelte";
import IconCar from "lucide-svelte/icons/car";
// Icons
import IconPlane from "lucide-svelte/icons/plane";
import IconBoat from "lucide-svelte/icons/sailboat";

const group = $state("item-1");
const lorem =
	"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum veniam reprehenderit eum, reiciendis obcaecati, excepturi nemo ipsa fugit suscipit autem vitae numquam et cumque praesentium vero eos minus itaque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum veniam reprehenderit eum, reiciendis obcaecati, excepturi nemo.";
</script>

<div class="space-y-10">
  <header>
    <h1 class="h1">Tabs</h1>
  </header>
  <!-- Default -->
  <section class="space-y-4">
    <pre class="pre">group: {JSON.stringify(group, null, 2)}</pre>
    <Tabs value={group} onValueChange={(e) => (group = e.value)}>
      {#snippet list()}
        <Tabs.Control value="item-1">Control-1</Tabs.Control>
        <Tabs.Control value="item-2">Control-2</Tabs.Control>
        <Tabs.Control value="item-3">Control-3</Tabs.Control>
      {/snippet}
      {#snippet content()}
        <Tabs.Panel value="item-1">Panel-1 - {lorem}</Tabs.Panel>
        <Tabs.Panel value="item-2">Panel-2 - {lorem}</Tabs.Panel>
        <Tabs.Panel value="item-3">Panel-3 - {lorem}</Tabs.Panel>
      {/snippet}
    </Tabs>
  </section>
  <!-- Icon + Label -->
  <section class="space-y-4">
    <h2 class="h2">Icon + Label</h2>
    <Tabs value={group} onValueChange={(e) => (group = e.value)}>
      {#snippet list()}
        <Tabs.Control value="item-1">
          {#snippet lead()}<IconPlane size={20} />{/snippet}
          Control-1
        </Tabs.Control>
        <Tabs.Control value="item-2">
          {#snippet lead()}<IconBoat size={20} />{/snippet}
          Control-2
        </Tabs.Control>
        <Tabs.Control value="item-3">
          {#snippet lead()}<IconCar size={20} />{/snippet}
          Control-3
        </Tabs.Control>
      {/snippet}
      {#snippet content()}
        <Tabs.Panel value="item-1">Panel-1 - {lorem}</Tabs.Panel>
        <Tabs.Panel value="item-2">Panel-2 - {lorem}</Tabs.Panel>
        <Tabs.Panel value="item-3">Panel-3 - {lorem}</Tabs.Panel>
      {/snippet}
    </Tabs>
  </section>
  <!-- Icon Only -->
  <section class="space-y-4">
    <h2 class="h2">Icon Only</h2>
    <Tabs value={group} onValueChange={(e) => (group = e.value)}>
      {#snippet list()}
        <Tabs.Control value="item-1">
          <IconPlane size={20} />
        </Tabs.Control>
        <Tabs.Control value="item-2">
          <IconBoat size={20} />
        </Tabs.Control>
        <Tabs.Control value="item-3">
          <IconCar size={20} />
        </Tabs.Control>
      {/snippet}
      {#snippet content()}
        <Tabs.Panel value="item-1">Panel-1 - {lorem}</Tabs.Panel>
        <Tabs.Panel value="item-2">Panel-2 - {lorem}</Tabs.Panel>
        <Tabs.Panel value="item-3">Panel-3 - {lorem}</Tabs.Panel>
      {/snippet}
    </Tabs>
  </section>
  <!-- Fluid -->
  <section class="space-y-4">
    <h2 class="h2">Fluid</h2>
    <Tabs value={group} onValueChange={(e) => (group = e.value)} fluid>
      {#snippet list()}
        <Tabs.Control value="item-1">Control-1</Tabs.Control>
        <Tabs.Control value="item-2">Control-2</Tabs.Control>
        <Tabs.Control value="item-3">Control-3</Tabs.Control>
      {/snippet}
      {#snippet content()}
        <Tabs.Panel value="item-1">Panel-1 - {lorem}</Tabs.Panel>
        <Tabs.Panel value="item-2">Panel-2 - {lorem}</Tabs.Panel>
        <Tabs.Panel value="item-3">Panel-3 - {lorem}</Tabs.Panel>
      {/snippet}
    </Tabs>
  </section>
  <!-- Justify -->
  <section class="space-y-4">
    <h2 class="h2">Justify</h2>
    <Tabs
      value={group}
      onValueChange={(e) => (group = e.value)}
      listJustify="justify-center"
    >
      {#snippet list()}
        <Tabs.Control value="item-1">Control-1</Tabs.Control>
        <Tabs.Control value="item-2">Control-2</Tabs.Control>
        <Tabs.Control value="item-3">Control-3</Tabs.Control>
      {/snippet}
      {#snippet content()}
        <Tabs.Panel value="item-1">Panel-1 - {lorem}</Tabs.Panel>
        <Tabs.Panel value="item-2">Panel-2 - {lorem}</Tabs.Panel>
        <Tabs.Panel value="item-3">Panel-3 - {lorem}</Tabs.Panel>
      {/snippet}
    </Tabs>
    <Tabs
      value={group}
      onValueChange={(e) => (group = e.value)}
      listJustify="justify-end"
    >
      {#snippet list()}
        <Tabs.Control value="item-1">Control-1</Tabs.Control>
        <Tabs.Control value="item-2">Control-2</Tabs.Control>
        <Tabs.Control value="item-3">Control-3</Tabs.Control>
      {/snippet}
      {#snippet content()}
        <Tabs.Panel value="item-1">Panel-1 - {lorem}</Tabs.Panel>
        <Tabs.Panel value="item-2">Panel-2 - {lorem}</Tabs.Panel>
        <Tabs.Panel value="item-3">Panel-3 - {lorem}</Tabs.Panel>
      {/snippet}
    </Tabs>
  </section>
  <!-- RTL -->
  <section class="space-y-4">
    <h2 class="h2">RTL</h2>
    <div dir="rtl">
      <Tabs value={group} onValueChange={(e) => (group = e.value)} dir="rtl">
        {#snippet list()}
          <Tabs.Control value="item-1">Control-1</Tabs.Control>
          <Tabs.Control value="item-2">Control-2</Tabs.Control>
          <Tabs.Control value="item-3">Control-3</Tabs.Control>
        {/snippet}
        {#snippet content()}
          <Tabs.Panel value="item-1">Panel-1 - {lorem}</Tabs.Panel>
          <Tabs.Panel value="item-2">Panel-2 - {lorem}</Tabs.Panel>
          <Tabs.Panel value="item-3">Panel-3 - {lorem}</Tabs.Panel>
        {/snippet}
      </Tabs>
    </div>
  </section>
</div>
