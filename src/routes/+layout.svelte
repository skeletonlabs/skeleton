<!-- Layout: (root) -->

<script lang="ts">
	import hljs from 'highlight.js';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '$lib/CodeBlock/stores';
	storeHighlightJs.set(hljs);

	import { afterNavigate } from '$app/navigation';

	// Components & Utilities
	import Dialog from '$lib/Notifications/Dialog.svelte';
	import Toast from '$lib/Notifications/Toast.svelte';

    // Doc Components
    import SkeletonAppBar from '$lib/_documentation/SkeletonAppBar/SkeletonAppBar.svelte';

	// Skeleton Theme: skeleton|rocket|modern|seafoam|vintage|sahara|test
	import '$lib/styles/themes/theme-skeleton.css';
	// Skeleton Add-On Stylesheets
	import '$lib/styles/tailwind.css';
	import '$lib/styles/core.css';
	import '$lib/styles/typography.css';
	import '$lib/styles/forms.css';
	// Global Stylesheets
	import '../app.postcss';

	// Lifecycle Events
	afterNavigate(() => {
		// Scroll to top
		const elemPageContent = document.querySelector('#page-content');
		if (elemPageContent !== null) { elemPageContent.scrollTop = 0; }
	});

    // Base Classes
    const cLayoutRoot: string = 'w-screen h-screen overflow-hidden flex flex-col';
</script>

<Dialog />
<Toast />

<main id="layout-root" class="{cLayoutRoot}">

    <!-- Root Layout Header -->
    <header class="flex-none">
        <SkeletonAppBar />
    </header>

    <!-- Root Layout Page -->
    <div class="flex-auto overflow-hidden">
        <slot />
    </div>

</main>