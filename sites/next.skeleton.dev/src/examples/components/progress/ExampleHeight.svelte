<script>
import { Progress } from "@skeletonlabs/skeleton-svelte";
</script>

<div class="flex w-full flex-col gap-8">
  <Progress value={50} max={100} height="h-1" />
  <Progress value={50} max={100} />
  <Progress value={50} max={100} height="h-4" />
</div>
