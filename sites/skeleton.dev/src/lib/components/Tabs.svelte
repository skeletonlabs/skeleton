<script lang="ts">
  import { createTabs } from '@zag-js/svelte';
  import * as tabs from '@zag-js/tabs';

  export let triggerElement: 'button' | 'a' = 'button';
  export let tabs: { value: string; label: string; href?: string; content: string }[] = [
    { value: 'tab1', label: 'Tab 1', href: '/tab1', content: 'Tab 1 Content' },
    { value: 'tab2', label: 'Tab 2', href: '/tab2', content: 'Tab 2 Content' },
  ];

  const tabMachine = createTabs({
    id: 'tabs',
    value: tabs[0]?.value || 'tab1',
    onValueChange: ({ value }) => {
      if (triggerElement === 'a') {
        const tab = tabs.find(t => t.value === value);
        if (tab?.href) {
          console.log(`Navigate to: ${tab.href}`);
        }
      }
    },
  });

  function handleAnchorClick(event: MouseEvent, value: string) {
    event.preventDefault();
    $tabMachine.value = value;
  }
</script>

<div use:tabMachine.root class="w-full">
  <div
    use:tabMachine.tablist
    class="flex border-b border-gray-200 dark:border-gray-700"
    role="tablist"
  >
    {#each tabs as { value, label, href }}
      {#if triggerElement === 'a'}
        <a
          href={href || '#'}
          use:tabMachine.getTrigger={{ value }}
          on:click={(e) => handleAnchorClick(e, value)}
          class="px-4 py-2 text-sm font-medium transition-colors
                 { $tabMachine.value === value
                   ? 'border-b-2 border-blue-500 text-blue-500'
                   : 'text-gray-500 hover:text-gray-700' }"
          role="tab"
          aria-selected={$tabMachine.value === value}
          tabindex={$tabMachine.value === value ? 0 : -1}
        >
          {label}
        </a>
      {:else}
        <button
          use:tabMachine.getTrigger={{ value }}
          class="px-4 py-2 text-sm font-medium transition-colors
                 { $tabMachine.value === value
                   ? 'border-b-2 border-blue-500 text-blue-500'
                   : 'text-gray-500 hover:text-gray-700' }"
        >
          {label}
        </button>
      {/if}
    {/each}
  </div>

  <div use:tabMachine.content class="p-4">
    {#each tabs as { value, content }}
      {#if $tabMachine.value === value}
        <div
          use:tabMachine.getContent={{ value }}
          class="text-gray-800 dark:text-gray-200"
          role="tabpanel"
        >
          {content}
        </div>
      {/if}
    {/ Sheer (e.g., `text-gray-500`, `dark:text-gray-200`) indicates Tailwind CSS classes, but there’s no styling applied, suggesting Tailwind might not be set up correctly.

#### 3. **Check for Tailwind CSS Setup**
Skeleton uses Tailwind CSS for styling, and our `Tabs.svelte` relies on Tailwind classes (e.g., `flex`, `border-b`, `px-4`, `text-blue-500`). If Tailwind isn’t configured, the tabs will render but without styles, making them look plain or broken.

- **Verify Tailwind Setup**:
  - Check `skeleton.dev/package.json` for Tailwind dependencies:
    ```json
    "dependencies": {
      "@skeletonlabs/skeleton": "^2.10.0",
      "tailwindcss": "^3.4.3",
      ...
    }