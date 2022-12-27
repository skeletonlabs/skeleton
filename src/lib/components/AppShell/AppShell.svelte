<script lang="ts">
	// Slots
	/** @slot header - Insert fixed header content, such as the <a href='https://www.skeleton.dev/components/app-bar'>AppBar</a> component.
	 * @slot sidebarLeft - Hidden when empty. Allows you to set fixed left sidebar content.
	 * @slot sidebarRight - Hidden when empty. Allows you to set fixed right sidebar content.
	 * @slot pageHeader - Insert content that resides above your page content. Great for global alerts.
	 * @slot pageFooter - Insert content that resides below your page content. Recommended for most layouts.
	 * @slot footer - Insert fixed footer content. Not recommended for most layouts.
	 */

	// Props (regions)
	/** Classes to apply to the <code>header</code> slot container element */
	export let slotHeader = 'z-10';
	/** Classes to apply to the <code>sidebarLeft</code> slot container element */
	export let slotSidebarLeft = 'w-auto';
	/** Classes to apply to the <code>sidebarRight</code> slot container element */
	export let slotSidebarRight = 'w-auto';
	/** Classes to apply to the <code>pageHeader</code> slot container element */
	export let slotPageHeader = '';
	/** Classes to apply to the <code>pageContent</code> slot container element */
	export let slotPageContent = '';
	/** Classes to apply to the <code>pageFooter</code> slot container element */
	export let slotPageFooter = '';
	/** Classes to apply to the <code>footer</code> slot container element */
	export let slotFooter = '';

	// Base Classes
	const cBaseAppShell = 'w-full h-full flex flex-col overflow-hidden';
	const cContentArea = 'w-full h-full flex overflow-hidden';
	const cPage = 'flex-1 overflow-x-hidden overflow-y-auto flex flex-col';
	const cSidebarLeft = 'flex-none overflow-x-hidden overflow-y-auto';
	const cSidebarRight = 'flex-none overflow-x-hidden overflow-y-auto';

	// Reactive Classes
	$: classesBase = `${cBaseAppShell} ${$$props.class ?? ''}`;
	$: classesheader = `${slotHeader}`;
	$: classesSidebarLeft = `${cSidebarLeft} ${slotSidebarLeft}`;
	$: classesSidebarRight = `${cSidebarRight} ${slotSidebarRight}`;
	$: classesPageHeader = `${slotPageHeader}`;
	$: classesPageContent = `${slotPageContent}`;
	$: classesPageFooter = `${slotPageFooter}`;
	$: classesFooter = `${slotFooter}`;
</script>

<div id="appShell" class={classesBase} data-testid="app-shell">
	<!-- Slot: Header -->
	{#if $$slots.header}
		<header id="shell-header" class="flex-none {classesheader}"><slot name="header" /></header>
	{/if}

	<!-- Content Area -->
	<div class="flex-auto {cContentArea}">
		<!-- Slot: Sidebar (left) -->
		{#if $$slots.sidebarLeft}
			<aside id="sidebar-left" class={classesSidebarLeft}><slot name="sidebarLeft" /></aside>
		{/if}

		<!-- Page -->
		<div id="page" class={cPage}>
			<!-- Slot: Page Header -->
			{#if $$slots.pageHeader}
				<header id="page-header" class="flex-none {classesPageHeader}"><slot name="pageHeader">(slot:header)</slot></header>
			{/if}

			<!-- Slot: Page Content (default) -->
			<main id="page-content" class="flex-auto {classesPageContent}"><slot /></main>

			<!-- Slot: Page Footer -->
			{#if $$slots.pageFooter}
				<footer id="page-footer" class="flex-none {classesPageFooter}"><slot name="pageFooter">(slot:footer)</slot></footer>
			{/if}
		</div>

		<!-- Slot: Sidebar (right) -->
		{#if $$slots.sidebarRight}
			<aside id="sidebar-right" class={classesSidebarRight}><slot name="sidebarRight" /></aside>
		{/if}
	</div>

	<!-- Slot: footer -->
	{#if $$slots.footer}
		<footer id="shell-footer" class="flex-none {classesFooter}"><slot name="footer" /></footer>
	{/if}
</div>
