<script>
  import Tabs from '$lib/components/Tabs.svelte';

  const tabs = [
    { value: 'tab1', label: 'Profile', href: '/profile', content: 'This is the Profile tab.' },
    { value: 'tab2', label: 'Settings', href: '/settings', content: 'This is the Settings tab.' },
    { value: 'tab3', label: 'External', href: 'https://example.com', content: 'This is an external link tab.' },
  ];
</script>

<main class="container mx-auto p-4">
  <h1 class="text-2xl font-bold mb-4">Tabs Demo</h1>
  <h2 class="text-lg font-semibold mb-2">With Anchor Tags</h2>
  <Tabs {tabs} triggerElement="a" />
  <h2 class="text-lg font-semibold mb-2 mt-8">With Buttons</h2>
  <Tabs {tabs} triggerElement="button" />
</main>