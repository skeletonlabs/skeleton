<script lang="ts">
import { Rating } from "@skeletonlabs/skeleton-svelte";

// You may optionally bind to a state rune
let starValue = $state(2);
</script>

<Rating value={starValue} onValueChange={(e) => (starValue = e.value)} />
