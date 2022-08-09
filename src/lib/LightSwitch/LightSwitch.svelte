<!-- https://tailwindcss.com/docs/dark-mode -->

<script lang="ts">
    import { browser } from "$app/env";

	import Card from "$lib/Card/Card.svelte";
	import List from "$lib/List/List.svelte";
	import NavItem from "$lib/List/NavItem.svelte";
	import Menu from "$lib/Menu/Menu.svelte";

	export let select: boolean = true;
	export let open: boolean = false;
    export let origin: string = 'auto'; // tl | tr | bl | br
    export let duration: number = 100; // ms
    export let disabled: boolean = false;

	let currentTheme: string = 'load';
	let svg: any = {
		load: `<svg class="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"></svg>`,
		light: '<svg class="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M120.2 154.2c4.672 4.688 10.83 7.031 16.97 7.031S149.5 158.9 154.2 154.2c9.375-9.375 9.375-24.56 0-33.93L108.9 74.97c-9.344-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94L120.2 154.2zM256 112c13.25 0 24-10.75 24-24v-64C280 10.75 269.3 0 256 0S232 10.75 232 24v64C232 101.3 242.8 112 256 112zM112 256c0-13.25-10.75-24-24-24h-64C10.75 232 0 242.8 0 256s10.75 24 24 24h64C101.3 280 112 269.3 112 256zM374.8 161.2c6.141 0 12.3-2.344 16.97-7.031l45.25-45.28c9.375-9.375 9.375-24.56 0-33.94s-24.59-9.375-33.94 0l-45.25 45.28c-9.375 9.375-9.375 24.56 0 33.93C362.5 158.9 368.7 161.2 374.8 161.2zM256 400c-13.25 0-24 10.75-24 24v64C232 501.3 242.8 512 256 512s24-10.75 24-24v-64C280 410.8 269.3 400 256 400zM120.2 357.8l-45.25 45.28c-9.375 9.375-9.375 24.56 0 33.94c4.688 4.688 10.83 7.031 16.97 7.031s12.3-2.344 16.97-7.031l45.25-45.28c9.375-9.375 9.375-24.56 0-33.93S129.6 348.4 120.2 357.8zM488 232h-64c-13.25 0-24 10.75-24 24s10.75 24 24 24h64C501.3 280 512 269.3 512 256S501.3 232 488 232zM391.8 357.8c-9.344-9.375-24.56-9.372-33.94 .0031s-9.375 24.56 0 33.93l45.25 45.28c4.672 4.688 10.83 7.031 16.97 7.031s12.28-2.344 16.97-7.031c9.375-9.375 9.375-24.56 0-33.94L391.8 357.8zM256 144C194.1 144 144 194.1 144 256c0 61.86 50.14 112 112 112s112-50.14 112-112C368 194.1 317.9 144 256 144z"/></svg>',
		dark: '<svg class="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M332.3 426.4c-93.13 17.75-178.5-53.63-178.5-147.6c0-54.25 29-104 76-130.9c7.375-4.125 5.45-15.12-2.8-16.62C108.7 109.4 0 200 0 320c0 106 85.76 192 191.8 192c59.25 0 113.2-26.79 148.9-71.04C346.1 434.5 340.3 424.8 332.3 426.4zM288 63.1l12.42 29.78c.6094 1.225 2.211 2.219 3.578 2.219s2.967-.9941 3.576-2.219l12.42-29.78l29.79-12.42C351 50.97 352 49.36 352 47.1c0-1.365-.9922-2.967-2.211-3.576l-29.79-12.42l-12.42-29.79c-.6094-1.227-2.209-2.217-3.576-2.217s-2.969 .9902-3.578 2.217l-12.42 29.79L258.2 44.42c-1.217 .6094-2.209 2.211-2.209 3.576c0 1.359 .9922 2.971 2.209 3.58L288 63.1zM507.6 216.9L448 192l-24.88-59.63C421.8 129.8 419 127.1 416 127.1s-5.75 1.75-7.125 4.375L384 192l-59.63 24.88C321.8 218.3 320 221 320 224s1.75 5.75 4.375 7.125L384 256l24.88 59.63C410.3 318.3 413 320 416 320s5.75-1.75 7.125-4.375L448 256l59.63-24.88C510.3 229.8 512 227 512 224S510.3 218.3 507.6 216.9z"/></svg>',
		system: '<svg class="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M528 0h-480C21.5 0 0 21.5 0 48v320C0 394.5 21.5 416 48 416h192L224 464H152C138.8 464 128 474.8 128 488S138.8 512 152 512h272c13.25 0 24-10.75 24-24s-10.75-24-24-24H352L336 416h192c26.5 0 48-21.5 48-48v-320C576 21.5 554.5 0 528 0zM512 352H64V64h448V352z"/></svg>'
	}
  
	// Select a theme
	function onKeyDown(event: any, t: any): void {
        if (['Enter', 'Space'].includes(event.detail.code)) {
            event.preventDefault();
            selectTheme(t);
        }
    }
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
		class="fill-surface-500 cursor-pointer translate-y-[2px]"
		aria-label="lightswitch"
		aria-describedby="Toggles dark mode."
		aria-disabled={disabled}
	>
		{@html svg[currentTheme]}
	</button>

	<!-- Menu -->
	<Card slot="content" class="bg-surface-300 dark:bg-surface-700 p-0 overflow-hidden">
		<List tag="nav" class="fill-surface-500">
			<NavItem
				on:click="{() => { selectTheme('light') }}"
				on:keydown="{(e) => { onKeyDown(e, 'light') }}"
			>
				<svelte:fragment slot="lead">{@html svg.light}</svelte:fragment>
				<span>Light</span>
			</NavItem>
			<NavItem
				on:click="{() => { selectTheme('dark') }}"
				on:keydown="{(e) => { onKeyDown(e, 'dark') }}"
			>
				<svelte:fragment slot="lead">{@html svg.dark}</svelte:fragment>
				<span>Dark</span>
			</NavItem>
			<NavItem
				on:click="{() => { selectTheme('system') }}"
				on:keydown="{(e) => { onKeyDown(e, 'system') }}"
			>
				<svelte:fragment slot="lead">{@html svg.system}</svelte:fragment>
				<span>System</span>
			</NavItem>
		</List>
	</Card>

</Menu>
