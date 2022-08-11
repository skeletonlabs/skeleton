<!-- https://tailwindcss.com/docs/dark-mode -->

<script lang="ts">
    import { browser } from "$app/env";
	import { svg } from "$lib/icons";

	import Card from "$lib/Card/Card.svelte";
	import List from "$lib/List/List.svelte";
	import ListItem from "$lib/List/ListItem.svelte";
	import Menu from "$lib/Menu/Menu.svelte";

	export let select: boolean = true;
	export let open: boolean = false;
    export let origin: string = 'auto'; // tl | tr | bl | br
    export let duration: number = 100; // ms
    export let disabled: boolean = false;

	let currentTheme: string = 'load';
  
	// A11y Input Handlers
	function onKeyDown(event: any, t: any): void {
        if (['Enter', 'Space'].includes(event.detail.code)) {
            event.preventDefault();
            selectTheme(t);
        }
    }

	// Handle Selection
	function selectTheme(t: string): void {
		if (browser) {
			if (['light', 'dark'].includes(t)) {
				localStorage.setItem('theme', t);
			} else {
				localStorage.removeItem('theme');
			}
		}
		setThemeClass();
	}

	// Set css class on <html> element
	function setThemeClass(): void {
		if (browser) {
			// dark / light
			if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.hasOwnProperty('matchMedia') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
				document.documentElement.classList.add('dark');
				currentTheme = 'dark';
			} else {
				document.documentElement.classList.remove('dark');
				currentTheme = 'light';
			}
		}
	}

	// On Init
	setThemeClass();
</script>

<Menu {select} {open} {origin} {duration} {disabled} class="lightswitch {$$props.class}" data-testid="lightswitch">

	<!-- Switcher -->
	<button
		slot="trigger"
		type="button"
		class="fill-black dark:fill-white cursor-pointer translate-y-[2px]"
		aria-label="lightswitch"
		aria-roledescription="Toggles dark mode."
		aria-disabled={disabled}
	>
		{@html svg[currentTheme]}
	</button>

	<!-- Menu -->
	<Card slot="content" class="bg-surface-300 dark:bg-surface-700 p-0 overflow-hidden">
		<List tag="nav" class="fill-surface-500">
			<ListItem
				on:click="{() => { selectTheme('light') }}"
				on:keydown="{(e) => { onKeyDown(e, 'light') }}"
			>
				<svelte:fragment slot="lead">{@html svg.light}</svelte:fragment>
				<span>Light</span>
			</ListItem>
			<ListItem
				on:click="{() => { selectTheme('dark') }}"
				on:keydown="{(e) => { onKeyDown(e, 'dark') }}"
			>
				<svelte:fragment slot="lead">{@html svg.dark}</svelte:fragment>
				<span>Dark</span>
			</ListItem>
			<ListItem
				on:click="{() => { selectTheme('system') }}"
				on:keydown="{(e) => { onKeyDown(e, 'system') }}"
			>
				<svelte:fragment slot="lead">{@html svg.system}</svelte:fragment>
				<span>System</span>
			</ListItem>
		</List>
	</Card>

</Menu>
