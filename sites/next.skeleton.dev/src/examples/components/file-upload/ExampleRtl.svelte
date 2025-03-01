<script lang="ts">
import { FileUpload } from "@skeletonlabs/skeleton-svelte";
</script>

<FileUpload
  name="example"
  accept="image/*"
  maxFiles={2}
  onFileChange={console.log}
  onFileReject={console.error}
  classes="w-full"
  dir="rtl"
/>
