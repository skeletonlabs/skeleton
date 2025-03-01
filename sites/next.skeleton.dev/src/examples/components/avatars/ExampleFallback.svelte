<script lang="ts">
import { Avatar } from "@skeletonlabs/skeleton-svelte";
import Skull from "lucide-svelte/icons/skull";
</script>

<div class="flex gap-4">
  <Avatar name="John Doe"></Avatar>
  <Avatar name="icon" background="preset-filled-primary-500">
    <Skull size={24} />
  </Avatar>
</div>
