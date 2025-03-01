<script lang="ts">
import { TagsInput } from "@skeletonlabs/skeleton-svelte";

// State
let flavors = $state(["Vanilla", "Chocolate", "Strawberry"]);
</script>

<section class="w-full space-y-4">
  <p>Not Editable Tags</p>
  <TagsInput
    value={flavors}
    onValueChange={(e) => (flavors = e.value)}
    placeholder="Add Tag..."
    editable={false}
  />
  <p>Add Tag on Paste</p>
  <TagsInput
    value={flavors}
    onValueChange={(e) => (flavors = e.value)}
    placeholder="Add Tag..."
    addOnPaste
  />
</section>
