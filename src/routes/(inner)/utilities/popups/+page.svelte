<script lang="ts">
	import DocsShell from '$docs/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/layouts/DocsShell/types';
	import DocsPreview from '$docs/components/DocsPreview/DocsPreview.svelte';
	// Components
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import ListBox from '$lib/components/ListBox/ListBox.svelte';
	import ListBoxItem from '$lib/components/ListBox/ListBoxItem.svelte';
	import Avatar from '$lib/components/Avatar/Avatar.svelte';
	import TabGroup from '$lib/components/Tab/TabGroup.svelte';
	import Tab from '$lib/components/Tab/Tab.svelte';
	// Popups
	import { popup } from '$lib/utilities/Popup/popup';
	import type { PopupSettings } from '$lib/utilities/Popup/types';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Utility,
		name: 'Popups',
		description:
			'Create floating popups, menus, and tooltips using the power of <a class="anchor" href="https://floating-ui.com/" target="_blank" rel="noreferrer">Floating UI</a>.',
		imports: ['popup'],
		types: ['PopupSettings'],
		stylesheetIncludes: ['all', 'elements'],
		stylesheets: ['elements/popups'],
		source: 'utilities/Popup',
		aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/menu/',
		classes: [
			['<code class="code">[data-popup]</code>', '', `Follows Floating UI's best practices, sets hidden by default.`],
			['<code class="code">[data-popup] .arrow</code>', '', 'Provides base styles to the arrow element.']
		],
		parameters: [
			[
				'<code class="code">event</code>',
				'string',
				'click',
				'click | hover | hover-click | focus | focus-click',
				'Provide the popup event type.'
			],
			['<code class="code">target</code>', 'string', '-', '-', 'Match the popup data value of <code class="code">[data-popup]</code>'],
			['<code class="code">placement</code>', 'string', '-', 'bottom', 'Set the placement position.'],
			['<code class="code">closeQuery</code>', 'string', 'a[href], button', '-', 'Query list of elements that will close the popup.'],
			['<code class="code">middleware</code>', 'object', '-', '-', 'Provide Floating UI middleware settings.'],
			['<code class="code">state</code>', 'function', '-', '-', 'Provide an optional callback function to monitor open/close state.']
		],
		keyboard: [
			['<kbd class="kbd">Enter</kbd>', 'When trigger is focused, toggles the popup open/close.'],
			// ['<kbd class="kbd">Space</kbd>', 'When trigger is focused, toggles the popup open/close.'],
			// ['<kbd class="kbd">Tab</kbd>', 'When trigger is focused, closes the popup.'],
			['<kbd class="kbd">Esc</kbd>', 'Closes all open popups at once.'],
			['<kbd class="kbd">↑</kbd>', 'Move upwards to the next item in the popup.'],
			['<kbd class="kbd">↓</kbd>', 'Move downwards to the next item in the popup.']
		],
		dependencies: [{ label: 'Floating UI', url: 'https://floating-ui.com/' }]
	};

	// Local
	// let tabSettings: number = 0;
	// let comboboxValue: string;

	const popupFeatured: PopupSettings = {
		event: 'click',
		target: 'popupFeatured',
		placement: 'bottom'
		// state: (e: any) => console.log('popupFeatured state:', e)
	};
	// ---
	const popupClick: PopupSettings = {
		event: 'click',
		target: 'popupClick',
		placement: 'top'
	};
	const popupHover: PopupSettings = {
		event: 'hover',
		target: 'popupHover',
		placement: 'top'
	};
	const popupFocusBlur: PopupSettings = {
		event: 'focus-blur',
		target: 'popupFocusBlur',
		placement: 'top'
	};
	const popupFocusClick: PopupSettings = {
		event: 'focus-click',
		target: 'popupFocusClick',
		placement: 'top'
	};
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<DocsPreview regionPreview="text-token">
			<svelte:fragment slot="preview">
				<button class="btn variant-filled" use:popup={popupFeatured}>Show Popup</button>
				<!-- --- -->
				<div class="card p-4 w-72 shadow-xl" data-popup="popupFeatured">
					<div class="space-y-4">
						<Avatar src="https://pbs.twimg.com/profile_images/1587479781544759297/TINbbJLC_400x400.png" width="w-16" />
						<div>
							<p class="font-bold">Skeleton</p>
							<p class="opacity-50">@SkeletonUI</p>
						</div>
						<p>Skeleton is a fully featured UI component library using the power of Svelte + Tailwind.</p>
						<div class="flex gap-4">
							<small><strong>100</strong> <span class="opacity-50">Following</span></small>
							<small><strong>1000</strong> <span class="opacity-50">Followers</span></small>
						</div>
						<a class="btn variant-soft w-full" href="https://twitter.com/SkeletonUI" target="_blank" rel="noreferrer"> View on Twitter </a>
					</div>
					<div class="arrow bg-surface-100-800-token" />
				</div>
				<!-- --- -->
			</svelte:fragment>
			<svelte:fragment slot="source">
				<CodeBlock
					language="ts"
					code={`
const popupFeatured: PopupSettings = {
	event: 'click',
	target: 'popupFeatured',
	placement: 'bottom',
};
					`}
				/>
				<CodeBlock
					language="html"
					code={`
<button class="btn variant-filled" use:popup={popupFeatured}>Show Popup</button>
				`}
				/>
				<CodeBlock
					language="html"
					code={`
<div class="card p-4 w-72 shadow-xl" data-popup="popupFeatured">
	<p>Demo Content</p>
	<div class="arrow bg-surface-100-800-token" />
</div>
					`}
				/>
			</svelte:fragment>
		</DocsPreview>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<!-- Click -->
		<section class="space-y-4">
			<h2 class="h2">Events</h2>
			<p>The open and close state of the popup can be controlled by the <code class="code">event</code> setting.</p>
			<h3 class="h3">Click</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
			<DocsPreview background="neutral" regionPreview="text-token">
				<svelte:fragment slot="preview">
					<button class="btn variant-filled" use:popup={popupClick}>Click</button>
					<div class="card p-4 variant-filled-primary" data-popup="popupClick">
						<p>Click Content</p>
						<div class="arrow variant-filled-primary" />
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="ts"
						code={`
const popupClick: PopupSettings = {
	event: 'click',
	target: 'popupClick',
	placement: 'top'
};
					`}
					/>
					<CodeBlock language="html" code={`<button class="btn variant-filled" use:popup={popupClick}>Click</button>`} />
					<CodeBlock
						language="html"
						code={`
<div class="card p-4 variant-filled-primary" data-popup="popupClick">
	<p>Click Content</p>
	<div class="arrow variant-filled-primary" />
</div>
					`}
					/>
				</svelte:fragment>
			</DocsPreview>
			<!-- Hover -->
			<h3 class="h3">Hover</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
			<DocsPreview background="neutral" regionPreview="text-token">
				<svelte:fragment slot="preview">
					<button class="btn variant-filled" use:popup={popupHover}>Hover</button>
					<div class="card p-4 variant-filled-secondary" data-popup="popupHover">
						<p>Hover Content</p>
						<div class="arrow variant-filled-secondary" />
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="ts"
						code={`
const popupHover: PopupSettings = {
	event: 'hover',
	target: 'popupHover',
	placement: 'top'
};
					`}
					/>
					<CodeBlock language="html" code={`<button class="btn variant-filled" use:popup={popupHover}>Hover</button>`} />
					<CodeBlock
						language="html"
						code={`
<div class="card p-4 variant-filled-secondary" data-popup="popupHover">
	<p>Hover Content</p>
	<div class="arrow variant-filled-secondary" />
</div>
					`}
					/>
				</svelte:fragment>
			</DocsPreview>
			<!-- Focus-Blur -->
			<h3 class="h3">Focus-Blur</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
			<DocsPreview background="neutral" regionPreview="text-token">
				<svelte:fragment slot="preview">
					<div class="w-full max-w-sm mx-auto">
						<input type="text" class="input" placeholder="Focus-Blur" use:popup={popupFocusBlur} />
						<div class="card p-4 variant-filled" data-popup="popupFocusBlur">
							<p>Shows on focus, hides on blur.</p>
							<div class="arrow variant-filled" />
						</div>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="ts"
						code={`
const popupFocusBlur: PopupSettings = {
	event: 'focus-blur',
	target: 'popupFocusBlur',
	placement: 'bottom'
};
					`}
					/>
					<CodeBlock language="html" code={`<input type="text" class="input" placeholder="Focus-Blur" use:popup={popupFocusBlur} />`} />
					<CodeBlock
						language="html"
						code={`
<div class="card p-4 variant-filled" data-popup="popupFocusBlur">
	<p>Shows on focus, hides on blur.</p>
	<div class="arrow variant-filled" />
</div>
					`}
					/>
				</svelte:fragment>
			</DocsPreview>
			<!-- Focus-Click -->
			<h3 class="h3">Focus-Click</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
			<DocsPreview background="neutral" regionPreview="text-token">
				<svelte:fragment slot="preview">
					<div class="w-full max-w-sm mx-auto">
						<input type="text" class="input" placeholder="Focus-Click" use:popup={popupFocusClick} />
						<div class="card p-4 variant-filled" data-popup="popupFocusClick">
							<p>Shows on focus, hides on click.</p>
							<div class="arrow variant-filled" />
						</div>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="ts"
						code={`
const popupFocusClick: PopupSettings = {
	event: 'focus-click',
	target: 'popupFocusClick',
	placement: 'bottom'
};
					`}
					/>
					<CodeBlock language="html" code={`<input type="text" class="input" placeholder="Focus-Click" use:popup={popupFocusClick} />`} />
					<CodeBlock
						language="html"
						code={`
<div class="card p-4 variant-filled" data-popup="popupFocusClick">
	<p>Shows on focus, hides on click.</p>
	<div class="arrow variant-filled" />
</div>
					`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>

		<hr />

		<!-- Settings -->
		<section class="space-y-4">
			<h2 class="h2">Settings</h2>
			<p>
				Each popup requires their own unique <code class="code">popupSettings</code>, which allow you to configure the following.
			</p>
			<h3 class="h3">Placement</h3>
			<p>(TODO)</p>
			<h3 class="h3">Close Query</h3>
			<p>(TODO)</p>
			<h3 class="h3">State Callback</h3>
			<p>(TODO)</p>
			<h3 class="h3">Middlware</h3>
			<p>(TODO)</p>
		</section>

		<hr />

		<!-- Z-index -->
		<section class="space-y-4">
			<h2 class="h2">Z-Index Stacking</h2>
			<!-- prettier-ignore -->
			<p>
				Please note Floating-UI <a class="anchor" href="https://floating-ui.com/docs/misc#z-index-stacking">does not define a default z-index</a>. You can, however, specify this for your <code class="code">data-popup</code> element.
			</p>
		</section>

		<!-- Accessibility -->
		<section class="space-y-4">
			<h2 class="h2">Accessibility</h2>
			<!-- prettier-ignore -->
			<p>
				Use <code class="code">click</code> or <code class="code">focus</code> events when targeting mobile. Touch screens provide suboptimal support for <code class="code">hover</code>.
			</p>
		</section>
	</svelte:fragment>
</DocsShell>
