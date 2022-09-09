<script lang="ts">
	// Props (slots)
	export let slotHeader: string = '';
	export let slotSidebarLeft: string = 'w-auto';
	export let slotSidebarRight: string = 'w-auto';
	export let slotPageHeader: string = '';
	export let slotPageContent: string = '';
	export let slotPageFooter: string = '';
	export let slotFooter: string = '';

	// Base Classes
	const cBaseAppShell: string = 'w-full h-full flex flex-col overflow-hidden';
	const cContentArea: string = 'w-full h-full flex overflow-hidden';
	const cPage: string = 'flex-1 overflow-x-hidden overflow-y-auto flex flex-col';
	const cSidebarLeft: string = 'flex-none overflow-x-hidden overflow-y-auto';
	const cSidebarRight: string = 'flex-none overflow-x-hidden overflow-y-auto';

	// Reactive Classes
	$: classesheader = `${slotHeader}`;
	$: classesSidebarLeft = `${cSidebarLeft} ${slotSidebarLeft}`;
	$: classesSidebarRight = `${cSidebarRight} ${slotSidebarRight}`;
	$: classesPageHeader = `${slotPageHeader}`;
	$: classesPageContent = `${slotPageContent}`;
	$: classesPageFooter = `${slotPageFooter}`;
	$: classesFooter = `${slotFooter}`;
</script>

<main id="appShell" class="{cBaseAppShell} {$$props.class || ''}" data-testid="app-shell">
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
			<div id="page-content" class="flex-auto {classesPageContent}"><slot /></div>

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
</main>
