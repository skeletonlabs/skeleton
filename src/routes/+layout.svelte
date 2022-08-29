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
		// Scroll to top of main page content
		const elemMain = document.querySelector('main');
		if (elemMain !== null) { elemMain.scrollTop = 0; }
	});

    // Base Classes
    const cBaseLayout: string = 'w-screen h-screen overflow-hidden flex flex-col';
</script>

<Dialog />
<Toast />

<div class="{cBaseLayout}">

    <!-- App Bar -->
    <header class="flex-none">
        <SkeletonAppBar />
    </header>

    <!-- Page -->
    <div class="flex-1 overflow-hidden">
        <slot />
    </div>

</div>