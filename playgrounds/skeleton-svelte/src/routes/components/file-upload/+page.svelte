<script lang="ts">
import { FileUpload, type FileUploadApi } from "@skeletonlabs/skeleton-svelte";
import IconRemove from "lucide-svelte/icons/circle-x";
// Icons
import IconDropzone from "lucide-svelte/icons/image-plus";
import IconFile from "lucide-svelte/icons/paperclip";
import IconUpload from "lucide-svelte/icons/upload";
// Local
let apiRef: FileUploadApi;
</script>

<div class="space-y-10">
  <header>
    <h1 class="h1">File Upload</h1>
  </header>
  <section class="space-y-4">
    <h2 class="h2">Dropzone</h2>
    <!-- Simple -->
    <FileUpload
      name="example"
      accept="image/*"
      maxFiles={2}
      onFileChange={console.log}
      onFileReject={console.error}
    />
    <!-- Customized -->
    <FileUpload
      name="example-multi"
      accept="image/*"
      maxFiles={2}
      subtext="Attach up to 2 files."
      onFileChange={console.log}
      onFileReject={console.error}
    >
      {#snippet iconInterface()}<IconDropzone class="size-8" />{/snippet}
      {#snippet iconFile()}<IconFile class="size-4" />{/snippet}
      {#snippet iconFileRemove()}<IconRemove class="size-4" />{/snippet}
    </FileUpload>
  </section>
  <section class="space-y-4">
    <h2 class="h2">Button</h2>
    <FileUpload
      name="example-button"
      accept="image/*"
      onFileChange={console.log}
      maxFiles={2}
    >
      <button class="btn preset-filled">
        <IconUpload class="size-4" />
        <span>Select File</span>
      </button>
    </FileUpload>
  </section>
  <section class="space-y-4">
    <h2 class="h2">Disabled</h2>
    <FileUpload name="example-disabled" disabled />
    <FileUpload name="example-button-disabled" disabled>
      <button class="btn preset-filled">Disabled</button>
    </FileUpload>
  </section>
  <section class="space-y-4">
    <h2 class="h2">API Binding</h2>
    <FileUpload
      name="example"
      accept="image/*"
      maxFiles={2}
      bind:internalApi={apiRef}
    />
    <button type="button" class="btn preset-filled" onclick={apiRef.clearFiles}
      >Clear Files</button
    >
  </section>
  <section class="space-y-4">
    <h2 class="h2">RTL</h2>
    <FileUpload name="example-rtl" dir="rtl" />
  </section>
</div>
