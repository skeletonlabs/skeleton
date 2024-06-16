<script lang="ts">
  import DocsPreview from '$lib/components/DocsPreview/DocsPreview.svelte';
  import { getImageLink } from '$lib/images';
  // Components
  import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
  // Utilities
  import { LightSwitch } from '@skeletonlabs/skeleton';

  // Local
  let showcase = 'elements';
</script>

<div class="grid grid-cols-1 items-start gap-4 md:gap-10 lg:grid-cols-3">
  <!-- Preview -->
  <div class="col-span-2">
    <DocsPreview label={showcase.replace('-', ' ')} regionPreview="min-h-[400px]">
      <svelte:fragment slot="preview">
        {#if showcase === 'elements'}
          <div class="card text-token max-w-[400px] overflow-hidden shadow-xl">
            <header>
              <img src={getImageLink({ id: 'vjUokUWbFOs', w: 400, h: 175 })} class="aspect-[21/9] w-full bg-black/50" alt="Post" />
            </header>
            <div class="space-y-4 p-4">
              <h6 class="h6">Announcements</h6>
              <h3 class="h3">Skeleton is Awesome!</h3>
              <article>
                <p class="opacity-75">This showcases Skeleton's Card, Typography, Chips, and Divider elements.</p>
              </article>
            </div>
            <hr class="opacity-50" />
            <footer class="flex items-center justify-center space-x-4 p-4">
              <!-- prettier-ignore -->
              <div class="flex justify-center space-x-2">
								<span class="chip variant-soft hover:variant-filled">
									<i class="fa-solid fa-heart" />
									<span>Like</span>
								</span>
								<span class="chip variant-soft hover:variant-filled">
									<i class="fa-solid fa-paperclip" />
									<span>Save</span>
								</span>
								<span class="chip variant-soft hover:variant-filled">
									<i class="fa-solid fa-share" />
									<span>Share</span>
								</span>
							</div>
            </footer>
          </div>
        {:else if showcase === 'colors'}
          <div class="grid grid-cols-10 gap-2">
            <!-- Primary -->
            <div class="bg-primary-50 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-primary-100 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-primary-200 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-primary-300 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-primary-400 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-primary-500 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-primary-600 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-primary-700 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-primary-800 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-primary-900 aspect-square h-6 sm:h-8">&nbsp;</div>
            <!-- secondary -->
            <div class="bg-secondary-50 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-secondary-100 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-secondary-200 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-secondary-300 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-secondary-400 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-secondary-500 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-secondary-600 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-secondary-700 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-secondary-800 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-secondary-900 aspect-square h-6 sm:h-8">&nbsp;</div>
            <!-- tertiary -->
            <div class="bg-tertiary-50 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-tertiary-100 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-tertiary-200 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-tertiary-300 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-tertiary-400 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-tertiary-500 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-tertiary-600 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-tertiary-700 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-tertiary-800 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-tertiary-900 aspect-square h-6 sm:h-8">&nbsp;</div>
            <!-- success -->
            <div class="bg-success-50 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-success-100 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-success-200 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-success-300 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-success-400 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-success-500 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-success-600 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-success-700 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-success-800 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-success-900 aspect-square h-6 sm:h-8">&nbsp;</div>
            <!-- warning -->
            <div class="bg-warning-50 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-warning-100 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-warning-200 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-warning-300 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-warning-400 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-warning-500 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-warning-600 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-warning-700 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-warning-800 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-warning-900 aspect-square h-6 sm:h-8">&nbsp;</div>
            <!-- error -->
            <div class="bg-error-50 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-error-100 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-error-200 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-error-300 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-error-400 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-error-500 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-error-600 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-error-700 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-error-800 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-error-900 aspect-square h-6 sm:h-8">&nbsp;</div>
            <!-- surface -->
            <div class="bg-surface-50 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-surface-100 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-surface-200 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-surface-300 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-surface-400 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-surface-500 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-surface-600 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-surface-700 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-surface-800 aspect-square h-6 sm:h-8">&nbsp;</div>
            <div class="bg-surface-900 aspect-square h-6 sm:h-8">&nbsp;</div>
          </div>
        {:else if showcase === 'dark-mode'}
          <LightSwitch width="w-20" height="h-10" />
        {/if}
      </svelte:fragment>
    </DocsPreview>
  </div>
  <!-- Info -->
  <div class="space-y-4">
    <h2 class="h2">Enhanced with Tailwind CSS.</h2>
    <!-- prettier-ignore -->
    <p>
			Skeleton has been designed from the ground up to take advantage of <a class="anchor" href="https://tailwindcss.com/" target="_blank" rel="noreferrer">Tailwind's</a> unique utility class approach to CSS styling, allowing you to create or extend your own personal design system.
		</p>
    <!-- Options -->
    <ListBox active="variant-filled" hover="hover:variant-soft" rounded="rounded-container-token" padding="!p-4">
      <ListBoxItem bind:group={showcase} name="showcase" value="elements">
        <div class="space-y-2">
          <h3 class="h3">Elements</h3>
          <p class="!text-sm">Common UI elements via HTML + CSS.</p>
        </div>
      </ListBoxItem>
      <ListBoxItem bind:group={showcase} name="showcase" value="colors">
        <div class="space-y-2">
          <h3 class="h3">Theme Colors</h3>
          <p class="!text-sm">Includes an extensive palette of colors.</p>
        </div>
      </ListBoxItem>
      <ListBoxItem bind:group={showcase} name="showcase" value="dark-mode">
        <div class="space-y-2">
          <h3 class="h3">Dark Mode</h3>
          <p class="!text-sm">Toggle dark mode with the flip of a switch.</p>
        </div>
      </ListBoxItem>
    </ListBox>
  </div>
</div>
