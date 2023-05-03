<script lang="ts">
	import DocsShell from '$docs/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/layouts/DocsShell/types';
	import DocsPreview from '$docs/components/DocsPreview/DocsPreview.svelte';
	// Components
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import Avatar from '$lib/components/Avatar/Avatar.svelte';
	import ListBox from '$lib/components/ListBox/ListBox.svelte';
	import ListBoxItem from '$lib/components/ListBox/ListBoxItem.svelte';
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
			['<code class="code">[data-popup]</code>', '', `Follows Floating UI's best practices. Sets hidden by default.`],
			['<code class="code">[data-popup] .arrow</code>', '', 'Provides base styles to the arrow element.']
		],
		parameters: [
			['<code class="code">event</code>', 'string', '-', 'click | hover | focus-blur | focus-click', 'Provide the popup event type.'],
			['<code class="code">target</code>', 'string', '-', '-', 'Match the popup data value of <code class="code">[data-popup]</code>'],
			['<code class="code">placement</code>', 'string', '-', 'bottom', 'Set the placement position.'],
			['<code class="code">closeQuery</code>', 'string', 'a[href], button', '-', 'Query list of elements that will close the popup.'],
			['<code class="code">middleware</code>', 'object', '-', '-', 'Provide Floating UI middleware settings.'],
			['<code class="code">state</code>', 'function', '-', '-', 'Provide an optional callback function to monitor open/close state.']
		],
		keyboard: [
			['<kbd class="kbd">Enter</kbd>', 'When trigger is focused, toggles the popup open/close.'],
			['<kbd class="kbd">Tab</kbd> or <kbd class="kbd">↓</kbd>', 'When trigger focused, places focus on first focusable popup child.'],
			['<kbd class="kbd">Esc</kbd>', 'Closes all open popups at once.']
		],
		dependencies: [{ label: 'Floating UI', url: 'https://floating-ui.com/' }]
	};

	// Local

	const popupFeatured: PopupSettings = {
		event: 'click',
		target: 'popupFeatured',
		placement: 'bottom'
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
	// ---
	let currentPosition: 'top' | 'bottom' | 'left' | 'right' = 'bottom';
	$: popupPlacement = {
		event: 'click',
		target: 'popupPlacement',
		placement: currentPosition
	} satisfies PopupSettings;
	const popupCloseQuery: PopupSettings = {
		event: 'click',
		target: 'popupCloseQuery',
		placement: 'top',
		closeQuery: 'button'
	};
	const popupState: PopupSettings = {
		event: 'click',
		target: 'popupState',
		placement: 'top',
		state: (e: any) => console.log(e)
	};
	const popupMiddlware: PopupSettings = {
		event: 'click',
		target: 'popupMiddlware',
		placement: 'top',
		middleware: {
			offset: 24
		}
	};
	// ---
	let comboboxValue: string;
	const popupCombobox: PopupSettings = {
		event: 'focus-click',
		target: 'popupCombobox',
		placement: 'bottom',
		closeQuery: '.listbox-item'
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
				<p>Use <code class="code">popupSettings</code> to define your popup's unique settings.</p>
				<CodeBlock
					language="ts"
					code={`
const popupFeatured: PopupSettings = {
	// Represents the type of event that opens/closed the popup
	event: 'click',
	// Matches the data-popup value on your popup element
	target: 'popupFeatured',
	// Defines which side of your trigger the popup will appear
	placement: 'bottom',
};
					`}
				/>
				<p>
					Append the <code class="code">use:popup</code> action on your trigger element, such as a button or input, then pass the
					<code class="code">popupSettings</code>.
				</p>
				<CodeBlock
					language="html"
					code={`
<button class="btn variant-filled" use:popup={popupFeatured}>Show Popup</button>
				`}
				/>
				<p>
					Finally, create your popup using any type of element. Then append a <code class="code">data-popup</code> attribute that contains a
					unique identifier. This should match the value provided to your <code class="code">target</code> in the
					<code class="code">popupSettings</code>.
				</p>
				<CodeBlock
					language="html"
					code={`
<div class="card p-4 w-72 shadow-xl" data-popup="popupFeatured">
	<div><p>Demo Content</p></div>
	<div class="arrow bg-surface-100-800-token" />
</div>
					`}
				/>
				<p>
					Note the <code class="code">.arrow</code> element is optional, but will create and position an arrow automatically when available.
					Just make sure the background color amtches your popup element's background color!
				</p>
			</svelte:fragment>
		</DocsPreview>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<!-- Installation -->
		<section class="space-y-4">
			<div class="flex items-center space-x-2">
				<h2 class="h2">Installation</h2>
				<span class="badge variant-filled-warning">Required</span>
			</div>
			<p>
				To begin, install <a class="anchor" href="https://floating-ui.com/" target="_blank" rel="noreferrer">Floating UI</a> from NPM. This
				is <u>required</u> for popups to function.
			</p>
			<CodeBlock language="console" code={`npm install @floating-ui/dom`} />
			<p>Import Floating UI into your application's root layout <code class="code">/src/routes/+layout.svelte</code>.</p>
			<CodeBlock language="ts" code={`import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';`} />
			<p>Then import <code class="code">storePopup</code> in your root layout as well.</p>
			<CodeBlock language="ts" code={`import { storePopup } from '@skeletonlabs/skeleton';`} />
			<p>Finally, pass an object containing each of the required Floating UI modules to the store.</p>
			<CodeBlock language="ts" code={`storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });`} />
			<p>Popups also support a number of optional Floating UI modules. These are only required if you use this middlware.</p>
			<CodeBlock language="ts" code={`import { /* ... */ size, autoPlacement, hide, inline } from '@floating-ui/dom';`} />
			<CodeBlock language="ts" code={`storePopup.set({ /* ... */ size, autoPlacement, hide, inline });`} />
		</section>

		<hr />

		<!-- Events -->
		<section class="space-y-4">
			<h2 class="h2">Events</h2>
			<p>The open and close state of the popup can be controlled by the <code class="code">event</code> setting.</p>
			<h3 class="h3">Click</h3>
			<p>
				Tap the trigger element to open the popup, then outside to close it. Supports the <code class="code">closeQuery</code> feature.
			</p>
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
			<p>The popup shows while hovering the trigger element. Useful for creating tooltips.</p>
			<DocsPreview background="neutral" regionPreview="text-token">
				<svelte:fragment slot="preview">
					<button class="btn variant-filled [&>*]:pointer-events-none" use:popup={popupHover}>
						<i class="fa-solid fa-square" />
						<span>Hover</span>
					</button>
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
					<p>
						TIP: use <code class="code">[&>*]:pointer-events-none</code>, to prevent child elements (ex: icons) from closing the popup.
					</p>
					<CodeBlock
						language="html"
						code={`<button class="btn variant-filled [&>*]:pointer-events-none" use:popup={popupHover}>Hover</button>`}
					/>
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
			<p>Shows the popup only while the trigger element has focus. Useful for showing tooltips while focusing an input.</p>
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
			<p>
				Shows the popup when the trigger is focused, hides when clicking outside. Supports the <code class="code">closeQuery</code> feature.
			</p>
			<DocsPreview background="neutral" regionPreview="text-token">
				<svelte:fragment slot="preview">
					<div class="w-full max-w-sm mx-auto">
						<input type="text" class="input" placeholder="Focus-Click" use:popup={popupFocusClick} />
						<div class="card p-4 variant-filled" data-popup="popupFocusClick">
							<p>Shows on focus, hides on an outside click.</p>
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
			<p>The popup can be set to appear in any of the four cardinal directions. This will flip when near the edge of the screen.</p>
			<DocsPreview background="neutral" regionPreview="text-token py-10">
				<svelte:fragment slot="preview">
					<button class="btn variant-filled" use:popup={popupPlacement}>Show Popup</button>
					<div class="card p-4 variant-filled" data-popup="popupPlacement">
						<p>Shown on the {currentPosition}</p>
						<div class="arrow variant-filled" />
					</div>
				</svelte:fragment>
				<svelte:fragment slot="footer">
					<div class="flex justify-center gap-4">
						<select bind:value={currentPosition} class="select w-auto">
							{#each ['top', 'bottom', 'left', 'right'] as p}
								<option value={p}>{p}</option>
							{/each}
						</select>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="ts"
						code={`
const popupPlacement: PopupSettings = {
	// ...
	placement: '${currentPosition}'
};
					`}
					/>
				</svelte:fragment>
			</DocsPreview>
			<h3 class="h3">Close Query</h3>
			<p>
				Use the <code class="code">closeQuery</code> setting to indicate what popup child items will close the popup when clicked. This is
				set to
				<code class="code">'a[href], button'</code> by default. Pass an empty string <code class="code">''</code> to disable.
			</p>
			<DocsPreview background="neutral" regionPreview="text-token">
				<svelte:fragment slot="preview">
					<button class="btn variant-filled" use:popup={popupCloseQuery}>Show Popup</button>
					<div class="card p-4" data-popup="popupCloseQuery">
						<div class="space-y-4">
							<p>Tap the button to close popup.</p>
							<button class="btn variant-soft w-full">Close Popup</button>
						</div>
						<div class="arrow bg-surface-100-800-token" />
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="ts"
						code={`
const popupCloseQuery: PopupSettings = {
	// ...
	closeQuery: 'button'
};
					`}
					/>
				</svelte:fragment>
			</DocsPreview>
			<h3 class="h3">State Callback</h3>
			<p>Provide a callback function to the <code class="code">state</code> setting to be notified when the popup is opened or closed.</p>
			<DocsPreview background="neutral" regionPreview="text-token">
				<svelte:fragment slot="preview">
					<button class="btn variant-filled" use:popup={popupState}>Show Popup</button>
					<div class="card p-4" data-popup="popupState">
						<p>Check your console log to view the value.</p>
						<div class="arrow bg-surface-100-800-token" />
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="ts"
						code={`
const popupState: PopupSettings = {
	// ...
	state: (e: any) => console.log(e)
};
					`}
					/>
				</svelte:fragment>
			</DocsPreview>
			<h3 class="h3">Middlware</h3>
			<!-- prettier-ignore -->
			<p>
				Allows you to configure various <a href="https://floating-ui.com/docs/middleware" target="_blank" rel="noreferrer" class="anchor">Floating UI middleware settings</a> such as shift, offset, and more.
			</p>
			<DocsPreview background="neutral" regionPreview="text-token">
				<svelte:fragment slot="preview">
					<button class="btn variant-filled" use:popup={popupMiddlware}>Show Popup</button>
					<div class="card p-4" data-popup="popupMiddlware">
						<p>This popup has an offset of 24 px.</p>
						<div class="arrow bg-surface-100-800-token" />
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="ts"
						code={`
let popupMiddlware: PopupSettings = {
	// ...
	middleware: {
		// https://floating-ui.com/docs/offset
		offset: 24, // or { ... }\n
		// https://floating-ui.com/docs/shift
		// shift: { ... },\n
		// https://floating-ui.com/docs/flip
		// flip: { ... },\n
		// https://floating-ui.com/docs/arrow
		// arrow: { ... },\n
		// https://floating-ui.com/docs/size
		// size: { ... },\n
		// https://floating-ui.com/docs/autoPlacement
		// autoPlacement: { ... },\n
		// https://floating-ui.com/docs/hide
		// hide: { ... },\n
		// https://floating-ui.com/docs/inline
		// inline: { ... }
	}
};
					`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>

		<hr />

		<!-- Combobox -->
		<section class="space-y-4">
			<h2 class="h2">Combobox</h2>
			<p>
				The goal of Skeleton is to combine primative elements and components to build more complex UI. For example, by combining a Button,
				Popup, and ListBox you can create a highly customizable combobox.
			</p>
			<DocsPreview background="neutral" regionPreview="text-token">
				<svelte:fragment slot="preview">
					<button class="btn variant-filled w-48 justify-between" use:popup={popupCombobox}>
						<span class="capitalize">{comboboxValue ?? 'Trigger'}</span>
						<i class="fa-solid fa-caret-down opacity-50" />
					</button>
					<div class="card w-48 shadow-xl py-2" data-popup="popupCombobox">
						<ListBox rounded="rounded-none">
							<ListBoxItem bind:group={comboboxValue} name="medium" value="books">Books</ListBoxItem>
							<ListBoxItem bind:group={comboboxValue} name="medium" value="movies">Movies</ListBoxItem>
							<ListBoxItem bind:group={comboboxValue} name="medium" value="television">TV</ListBoxItem>
						</ListBox>
						<div class="arrow bg-surface-100-800-token" />
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="ts"
						code={`
let comboboxValue: string;\n
const popupCombobox: PopupSettings = {
	event: 'focus-click',
	target: 'popupCombobox',
	placement: 'bottom',
	closeQuery: '.listbox-item'
};
				`}
					/>
					<CodeBlock
						language="html"
						code={`
<button class="btn variant-filled w-48 justify-between" use:popup={popupCombobox}>
	<span class="capitalize">{comboboxValue ?? 'Trigger'}</span>
	<span>↓</span>
</button>
					`}
					/>
					<CodeBlock
						language="html"
						code={`
<div class="card w-48 shadow-xl py-2" data-popup="popupCombobox">
	<ListBox rounded="rounded-none">
		<ListBoxItem bind:group={comboboxValue} name="medium" value="books">Books</ListBoxItem>
		<ListBoxItem bind:group={comboboxValue} name="medium" value="movies">Movies</ListBoxItem>
		<ListBoxItem bind:group={comboboxValue} name="medium" value="television">TV</ListBoxItem>
	</ListBox>
	<div class="arrow bg-surface-100-800-token" />
</div>
					`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>

		<hr />

		<!-- Z-index -->
		<section class="space-y-4">
			<h2 class="h2">Z-Index Stacking</h2>
			<!-- prettier-ignore -->
			<p>
				Please note that neither Skelton nor Floating-UI <a class="anchor" href="https://floating-ui.com/docs/misc#z-index-stacking">define a default z-index</a> for popups.
			</p>
		</section>

		<!-- Accessibility -->
		<section class="space-y-4">
			<h2 class="h2">Accessibility</h2>
			<!-- prettier-ignore -->
			<p>
				Use <code class="code">click</code> or <code class="code">focus</code> events when targeting mobile. Touch screens do not fully support <code class="code">hover</code>.
			</p>
		</section>
	</svelte:fragment>
</DocsShell>
