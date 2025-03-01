<script lang="ts">
import { Slider } from "@skeletonlabs/skeleton-svelte";

let value = $state([40]);
let valueMulti = $state([40, 60]);
</script>

<section class="w-full space-y-8">
  <Slider {value} onValueChange={(e) => (value = e.value)} dir="rtl" />
  <Slider
    value={valueMulti}
    onValueChange={(e) => (valueMulti = e.value)}
    dir="rtl"
  />
</section>
