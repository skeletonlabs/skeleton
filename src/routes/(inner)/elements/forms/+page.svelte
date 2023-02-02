<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Element,
		name: 'Forms & Inputs',
		description: 'Pair with the Tailwind Forms plugin to provide input styling.',
		stylesheetIncludes: ['all', 'forms'],
		source: 'styles/forms.css',
		dependencies: [{ label: 'Tailwind Forms Plugin', url: 'https://github.com/tailwindlabs/tailwindcss-forms' }],
		classes: [
			['<code>.legend</code>', '', 'Provides theme styles to legend elements.'],
			['<code>.label</code>', '', 'Provides theme styles to label elements.'],
			['<code>.input</code>', '', 'Provides theme styles to input elements.'],
			['<code>.textarea</code>', '', 'Provides theme styles to textarea elements.'],
			['<code>.select</code>', '', 'Provides theme styles to select elements.'],
			['<code>.checkbox</code>', '', 'Provides theme styles to checkbox elements.'],
			['<code>.radio</code>', '', 'Provides theme styles to radio elements.'],
			['<code>.input-group</code>', '', 'Creates a group of related inputs and information.'],
			['<code>.input-group-divider</code>', '', 'Adds vertical lines between group segments.'],
			['<code>.input-group-shim</code>', '', 'Provides a shaded background segment.'],
			['<code>.input-[variant]</code>', 'succes | warning | error', 'Color highlights for input for validation states.']
		]
	};

	// Local
	let colorValue = '#bada55';
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<p>
			Unlike other UI libraries, Skeleton relies heavily on native inputs. We feel these provide the best user experience and optimal
			accessability. Tap the <u>View Page Source</u> button at the top of the page to view the source code for each example below.
		</p>
		<div class="card">
			<!-- Card Body -->
			<div class="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
				<!-- Column 1 -->
				<div class="space-y-4">
					<label class="label">
						<span>Input (text)</span>
						<input class="input" type="text" placeholder="input text" />
					</label>
					<label class="label">
						<span>Input (readonly)</span>
						<!-- NOTE: we recommend setting the tabindex as well -->
						<input class="input" type="text" placeholder="input readonly" readonly tabindex="-1" />
					</label>
					<label class="label">
						<span>Input (disabled)</span>
						<input class="input" type="text" placeholder="input disabled" disabled />
					</label>
					<label class="label">
						<span>Input (email)</span>
						<input class="input" type="email" placeholder="john@example.com" autocomplete="email" />
					</label>
					<label class="label">
						<span>Input (email, multiple)</span>
						<input class="input" type="email" multiple placeholder="john@example.com, susy@example.com" />
					</label>
					<label class="label">
						<span>Input (password)</span>
						<input class="input" type="password" placeholder="password" />
					</label>
					<label class="label">
						<span>Input (search)</span>
						<input class="input" type="search" placeholder="Search..." />
					</label>
					<label class="label">
						<span>Input (date)</span>
						<input class="input" type="date" />
					</label>
					<label class="label">
						<span>Input (datetime-local)</span>
						<input class="input" type="datetime-local" />
					</label>
					<label class="label">
						<span>Input (month)</span>
						<input class="input" type="month" />
					</label>
					<label class="label">
						<span>Input (number)</span>
						<input class="input" type="number" />
					</label>
					<label class="label">
						<span>Input (time)</span>
						<input class="input" type="time" />
					</label>
					<label class="label">
						<span>Input (week)</span>
						<input class="input" type="week" />
					</label>
					<label class="label">
						<span>Input (tel)</span>
						<input class="input" type="tel" multiple placeholder="john@example.com" />
					</label>
					<label class="label">
						<span>Input (url)</span>
						<input class="input" type="url" multiple placeholder="john@example.com" />
					</label>
				</div>
				<!-- Column 2 -->
				<div class="space-y-4">
					<label class="label">
						<span>Input (file)</span>
						<input class="input" type="file" />
					</label>
					<label class="label">
						<span>Input (file, multiple)</span>
						<input class="input" type="file" multiple />
					</label>
					<label class="label">
						<span>Select</span>
						<select class="select">
							<option value="1">Option 1</option>
							<option value="2">Option 2</option>
							<option value="3">Option 3</option>
							<option value="4">Option 4</option>
							<option value="5">Option 5</option>
						</select>
					</label>
					<label class="label">
						<span>Select (size)</span>
						<select class="select" size="4" value="1">
							<option value="1">Option 1</option>
							<option value="2">Option 2</option>
							<option value="3">Option 3</option>
							<option value="4">Option 4</option>
							<option value="5">Option 5</option>
						</select>
					</label>
					<label class="label">
						<span>Select (multiple)</span>
						<select class="select" multiple value={['1', '2']}>
							<option value="1">Option 1</option>
							<option value="2">Option 2</option>
							<option value="3">Option 3</option>
							<option value="4">Option 4</option>
							<option value="5">Option 5</option>
						</select>
					</label>
					<label class="label">
						<span>Textarea</span>
						<textarea class="textarea" rows="4" placeholder="Enter some long form content." />
					</label>
					<fieldset>
						<div class="label">
							<strong>Checkboxes</strong>
							<div class="space-y-2">
								<label class="flex items-center space-x-2">
									<input class="checkbox" type="checkbox" checked />
									<p>Option 1</p>
								</label>
								<label class="flex items-center space-x-2">
									<input class="checkbox" type="checkbox" />
									<p>Option 2</p>
								</label>
								<label class="flex items-center space-x-2">
									<input class="checkbox" type="checkbox" />
									<p>Option 3</p>
								</label>
							</div>
						</div>
					</fieldset>
					<fieldset>
						<div class="label">
							<strong>Radio Buttons</strong>
							<div class="space-y-2">
								<label class="flex items-center space-x-2">
									<input class="radio" type="radio" checked name="radio-direct" value="1" />
									<p>Option 1</p>
								</label>
								<label class="flex items-center space-x-2">
									<input class="radio" type="radio" name="radio-direct" value="2" />
									<p>Option 2</p>
								</label>
								<label class="flex items-center space-x-2">
									<input class="radio" type="radio" name="radio-direct" value="3" />
									<p>Option 3</p>
								</label>
							</div>
						</div>
					</fieldset>
					<label class="label">
						<span>Input (range)</span>
						<input type="range" value="75" max="100" />
					</label>
					<label class="label">
						<span>Input (color)</span>
						<div class="grid grid-cols-[auto_1fr] gap-2">
							<input class="input" type="color" bind:value={colorValue} />
							<input class="input" type="text" bind:value={colorValue} readonly tabindex="-1" />
						</div>
					</label>
				</div>
			</div>
		</div>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<div class="flex items-center space-x-2">
				<h2>Tailwind Forms Plugin</h2>
				<span class="badge variant-filled-warning">Required</span>
			</div>
			<!-- prettier-ignore -->
			<p>
				The Tailwind Forms plugin is required if you wish to use Skeleton's form styles. This plugin normalizes the styles, which makes them easier to customize. See the <a href="https://www.youtube.com/watch?v=pONeWAzDsQg" target="_blank" rel="noreferrer">Tailwind's YouTube tutorial</a> for more information.
			</p>
			<!-- Written -->
			<div class="flex-auto space-y-4">
				<CodeBlock language="console" code={`npm install -D @tailwindcss/forms`} />
				<p>
					Prepend the <a href="https://tailwindcss.com/docs/plugins" target="_blank" rel="noreferrer">Tailwind Forms plugin</a> to your
					<code>tailwind.config.cjs</code>
				</p>
				<CodeBlock
					language="js"
					code={`
module.exports = {
	plugins: [
		require('@tailwindcss/forms'),
		// NOTE: Insert above the 'skeleton.cjs' plugin
	],
}
				`}
				/>
			</div>
		</section>
		<section class="space-y-4">
			<h2>Adding Styles</h2>
			<h3>Input, Textarea, Select</h3>
			<p>
				Most inputs are unstyled by default - aside from what the Tailwind Forms plugin provides. To use Skeleton's styling, simply add the
				matching class like <code>.input</code>, <code>.textarea</code>, or <code>.select</code>.
			</p>
			<CodeBlock
				language="html"
				code={`
<label class="label">
	<span>Name</span>
	<input class="input" type="text" id="name" bind:value={name} minlength="2" required>
</label>
		`}
			/>
			<CodeBlock
				language="html"
				code={`
<label class="label">
	<span>Comments</span>
	<textarea class="textarea" rows="4" placeholder="Enter your comments..." />
</label>
		`}
			/>
			<CodeBlock
				language="html"
				code={`
<label class="label">
	<span>Flavors</span>
	<select class="select" name="flavors" id="flavors" bind:value={flavorValue}>
		<option value="chocolate">Chocolate</option>
		<option value="vanilla">Vanilla</option>
		<option value="strawberry">Strawberry</option>
	</select>
</label>
		`}
			/>
			<!-- Labels -->
			<h3>Labels</h3>
			<p>
				For label elements, we've implemented a <code>.label</code> class which implements a style of <code>.space-y-2</code>. Feel free to
				override as desired. Note that we favor <em>span</em> tags for the actual text label itself.
			</p>
		</section>
		<!-- Input Groups -->
		<section class="space-y-4">
			<h2>Input Groups</h2>
			<p>Create a horizontal group of elements related to an input. We've detailed a few requirements below.</p>
			<ul class="space-y-2 list-disc list-inside">
				<li>Groups support <em>most</em> input types and select elements, but not all.</li>
				<!-- prettier-ignore -->
				<li>
					These are grid-based. Set column witdth using <a href="https://tailwindcss.com/docs/grid-template-columns#arbitrary-values" target="_blank" rel="noreferrer">Tailwind's abitrary column syntax</a>.
				</li>
				<li>
					Surrounding segments (shown on the left and right) allow for <em>div</em>, <em>button</em>, and <em>anchor</em> elements.
				</li>
				<li>
					The <code>.input-group-divider</code> is an optional class that applies vertical divider lines.
				</li>
				<li>The <code>.input-group-shim</code> class will apply subtle shading to a segment.</li>
			</ul>
			<CodeBlock
				language="html"
				code={`
<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
	<div class="input-group-shim">(segment)</div>
	<input type="search" placeholder="Search..." />
	<button class="variant-filled-secondary">Submit</button>
</div>
		`}
			/>
			<div class="card p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
				<label class="label">
					<span>Website</span>
					<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
						<div class="input-group-shim">https://</div>
						<input type="text" placeholder="www.example.com" />
					</div>
				</label>
				<!-- --- -->
				<label class="label">
					<span>Amount</span>
					<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
						<div class="input-group-shim"><i class="fa-solid fa-dollar-sign" /></div>
						<input type="text" placeholder="Amount" />
						<select>
							<option>USD</option>
							<option>CAD</option>
							<option>EURO</option>
						</select>
					</div>
				</label>
				<!-- --- -->
				<label class="label">
					<span>Username</span>
					<div class="input-group input-group-divider grid-cols-[1fr_auto]">
						<input type="text" placeholder="Enter Username..." />
						<a href="/elements/forms" title="Username already in use.">
							<i class="fa-solid fa-circle-exclamation text-warning-500 animate-pulse" />
						</a>
					</div>
				</label>
				<!-- --- -->
				<label class="label">
					<span>Search</span>
					<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
						<div class="input-group-shim"><i class="fa-solid fa-search" /></div>
						<input type="search" placeholder="Search..." />
						<button class="variant-filled-secondary">Submit</button>
					</div>
				</label>
			</div>
		</section>
		<!-- Validation Classes -->
		<section class="space-y-4">
			<h2>Validation Classes</h2>
			<p>Skeleton provides a set of validation classes that can be triggered with your own custom form validation logic.</p>
			<CodeBlock language="html" code={`<input ... class="input-success" />`} />
			<div class="card p-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
				<label class="space-y-3">
					<code>.input-success</code>
					<input type="text" placeholder="success" class="input input-success" />
				</label>
				<label class="space-y-3">
					<code>.input-warning</code>
					<input type="text" placeholder="warning" class="input input-warning" />
				</label>
				<label class="space-y-3">
					<code>.input-error</code>
					<input type="text" placeholder="error" class="input input-error" />
				</label>
			</div>
		</section>
		<!-- Browser Support -->
		<section class="space-y-4">
			<h2>Browser Support</h2>
			<p>
				Please be aware that not all native HTML input styles and features are consistent across browsers or operating system. Make sure you
				do proper cross device/OS/browser testing to ensure compability for your target audience.
			</p>
		</section>
		<!-- See Also -->
		<section class="space-y-4">
			<h2>See Also</h2>
			<p>Skeleton provides an extended set of custom form components.</p>
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				<div class="card p-4 variant-glass-surface text-center">
					<a class="btn variant-filled-secondary" href="/components/file-buttons">File Buttons &rarr;</a>
				</div>
				<div class="card p-4 variant-glass-surface text-center">
					<a class="btn variant-filled-secondary" href="/components/file-dropzones">File Dropzones &rarr;</a>
				</div>
				<div class="card p-4 variant-glass-surface text-center">
					<a class="btn variant-filled-secondary" href="/components/input-chips">Input Chips &rarr;</a>
				</div>
				<div class="card p-4 variant-glass-surface text-center">
					<a class="btn variant-filled-secondary" href="/components/radio-groups">Radio Group &rarr;</a>
				</div>
				<div class="card p-4 variant-glass-surface text-center">
					<a class="btn variant-filled-secondary" href="/components/range-sliders">Range Slider &rarr;</a>
				</div>
				<div class="card p-4 variant-glass-surface text-center">
					<a class="btn variant-filled-secondary" href="/components/slide-toggles">Slide Toggles &rarr;</a>
				</div>
			</div>
		</section>
	</svelte:fragment>
</DocsShell>
