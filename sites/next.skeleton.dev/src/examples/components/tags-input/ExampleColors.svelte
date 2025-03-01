<script lang="ts">
import { TagsInput } from "@skeletonlabs/skeleton-svelte";

// State
let flavors = $state(["Vanilla", "Chocolate", "Strawberry"]);
</script>

<section class="w-full space-y-4">
  <TagsInput
    value={flavors}
    onValueChange={(e) => (flavors = e.value)}
    placeholder="Add Tag..."
    tagBackground="preset-filled-primary-500"
  />
  <TagsInput
    value={flavors}
    onValueChange={(e) => (flavors = e.value)}
    placeholder="Add Tag..."
    tagBackground="preset-filled-secondary-500"
  />
  <TagsInput
    value={flavors}
    onValueChange={(e) => (flavors = e.value)}
    placeholder="Add Tag..."
    tagBackground="preset-filled-tertiary-500"
  />
</section>
