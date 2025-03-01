<script lang="ts">
import { Switch } from "@skeletonlabs/skeleton-svelte";
import IconCheck from "lucide-svelte/icons/check";
// Icons
import IconX from "lucide-svelte/icons/x";
</script>

<Switch name="icons" controlActive="bg-secondary-500">
  {#snippet inactiveChild()}<IconX size="14" />{/snippet}
  {#snippet activeChild()}<IconCheck size="14" />{/snippet}
</Switch>
