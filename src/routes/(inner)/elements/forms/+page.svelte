<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Element,
		name: 'Forms',
		description: 'Provides theme styling to forms when paired with the Tailwind forms plugin.',
		stylesheetIncludes: ['all', 'forms'],
		source: 'styles/forms.css',
		dependencies: [{ label: 'Tailwind Forms Plugin', url: 'https://github.com/tailwindlabs/tailwindcss-forms' }],
		classes: [
			['<code>input-label</code>', '', 'Sets the vertical spacing for label chidren.'],
			['<code>input-group</code>', '', 'Creates an input group.'],
			['<code>input-group-divider</code>', '', 'Adds vertical lines between group elements.'],
			['<code>input-[variant]</code>', 'succes | warning | error', 'Color highlight for input for validation.']
		]
	};

	// Local
	let colorValue = '#bada55';
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<!-- prettier-ignore -->
		<p>
			We've provided a sample of Native HTML input elements below. Skeleton uses the <a href="https://github.com/tailwindlabs/tailwindcss-forms" target="_blank" rel="noreferrer">Tailwind Forms plugin</a> to normalize the styles. Then adapts the styles to match your theme via the <code>forms.css</code> stylesheet.
		</p>
		<div class="card">
			<!-- Card Body -->
			<div class="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
				<!-- Column 1 -->
				<div class="space-y-4">
					<label class="input-label">
						<span>Input (text)</span>
						<input type="text" placeholder="input text" />
					</label>
					<label class="input-label">
						<span>Input (readonly)</span>
						<!-- NOTE: we recommend setting the tabindex as well -->
						<input type="text" placeholder="input readonly" readonly tabindex="-1" />
					</label>
					<label class="input-label">
						<span>Input (disabled)</span>
						<input type="text" placeholder="input disabled" disabled />
					</label>
					<label class="input-label">
						<span>Input (email)</span>
						<input type="email" placeholder="john@example.com" autocomplete="email" />
					</label>
					<label class="input-label">
						<span>Input (email, multiple)</span>
						<input type="email" multiple placeholder="john@example.com, susy@example.com" />
					</label>
					<label class="input-label">
						<span>Input (password)</span>
						<input type="password" placeholder="password" />
					</label>
					<label class="input-label">
						<span>Input (search)</span>
						<input type="search" placeholder="Search..." />
					</label>
					<label class="input-label">
						<span>Input (date)</span>
						<input type="date" />
					</label>
					<label class="input-label">
						<span>Input (datetime-local)</span>
						<input type="datetime-local" />
					</label>
					<label class="input-label">
						<span>Input (month)</span>
						<input type="month" />
					</label>
					<label class="input-label">
						<span>Input (number)</span>
						<input type="number" />
					</label>
					<label class="input-label">
						<span>Input (time)</span>
						<input type="time" />
					</label>
					<label class="input-label">
						<span>Input (week)</span>
						<input type="week" />
					</label>
					<label class="input-label">
						<span>Input (tel)</span>
						<input type="tel" multiple placeholder="john@example.com" />
					</label>
					<label class="input-label">
						<span>Input (url)</span>
						<input type="url" multiple placeholder="john@example.com" />
					</label>
				</div>
				<!-- Column 2 -->
				<div class="space-y-4">
					<label class="input-label">
						<span>Input (file)</span>
						<input type="file" />
					</label>
					<label class="input-label">
						<span>Input (file, multiple)</span>
						<input type="file" multiple />
					</label>
					<label class="input-label">
						<span>Select</span>
						<select>
							<option>Option 1</option>
							<option>Option 2</option>
						</select>
					</label>
					<label class="input-label">
						<span>Select (multiple)</span>
						<select multiple>
							<option>Option 1</option>
							<option>Option 2</option>
							<option>Option 3</option>
							<option>Option 4</option>
							<option>Option 5</option>
						</select>
					</label>
					<label class="input-label">
						<span>Textarea</span>
						<textarea rows="5" placeholder="Enter some long form content." />
					</label>
					<fieldset>
						<div class="input-label">
							<strong>Checkboxes</strong>
							<div class="space-y-2">
								<label class="flex items-center space-x-2">
									<input type="checkbox" checked />
									<p>Option 1</p>
								</label>
								<label class="flex items-center space-x-2">
									<input type="checkbox" />
									<p>Option 2</p>
								</label>
								<label class="flex items-center space-x-2">
									<input type="checkbox" />
									<p>Option 3</p>
								</label>
							</div>
						</div>
					</fieldset>
					<fieldset>
						<div class="input-label">
							<strong>Radio Buttons</strong>
							<div class="space-y-2">
								<label class="flex items-center space-x-2">
									<input type="radio" checked name="radio-direct" value="1" />
									<p>Option 1</p>
								</label>
								<label class="flex items-center space-x-2">
									<input type="radio" name="radio-direct" value="2" />
									<p>Option 2</p>
								</label>
								<label class="flex items-center space-x-2">
									<input type="radio" name="radio-direct" value="3" />
									<p>Option 3</p>
								</label>
							</div>
						</div>
					</fieldset>
					<label class="input-label">
						<span>Input (range)</span>
						<input type="range" value="75" max="100" />
					</label>
					<label class="input-label">
						<span>Input (color)</span>
						<div class="grid grid-cols-[auto_1fr] gap-2">
							<input type="color" bind:value={colorValue} />
							<input type="text" bind:value={colorValue} readonly tabindex="-1" />
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
			<h2>Using Native Elements</h2>
			<p>
				Unlike other UI libraries, Skeleton relies heavily on native inputs for form fields. We feel these provide the best user experience
				and optimal accessability. Most native inputs will work out of the box.
			</p>
			<CodeBlock
				language="html"
				code={`
<label class="input-label">
	<span>Name</span>
	<input type="text" id="name" bind:value={name} minlength="2" required>
</label>
		`}
			/>
			<CodeBlock
				language="html"
				code={`
<label class="input-label">
	<span>Flavors</span>
	<select name="flavors" id="flavors" bind:value={flavorValue}>
		<option value="chocolate">Chocolate</option>
		<option value="vanilla">Vanilla</option>
		<option value="strawberry">Strawberry</option>
	</select>
</label>
		`}
			/>
			<!-- Vertical Spacing -->
			<h3>Vertical Spacing</h3>
			<p>
				Note that we recommend <em>span</em> tags for label text and implement a vertical spacing class on the label using
				<code>.input-label</code>. This implements the Tailwind <code>.space-y-2</code> class by default, but feel free to override.
			</p>
			<!-- Browser Support -->
			<h3>Browser Support</h3>
			<p>
				Please be aware that not all native HTML input styles and features are consistent across browsers or operating system. Make sure you
				do proper cross device/OS/browser testing to ensure compability for your target audience.
			</p>
		</section>
		<!-- Input Groups -->
		<section class="space-y-4">
			<h2>Input Groups</h2>
			<p>Create a horizontal group of elements related to an input. We've detailed a few requirements below.</p>
			<ul class="space-y-2 list-disc list-inside">
				<li>Groups support <em>most</em> input types and select elements.</li>
				<!-- prettier-ignore -->
				<li>
					These are grid-based. Set column witdth using <a href="https://tailwindcss.com/docs/grid-template-columns#arbitrary-values" target="_blank" rel="noreferrer">Tailwind's abitrary column syntax</a>.
				</li>
				<li>
					The <code>.input-group-divider</code> class is optional. This sets the vertical segment divider lines.
				</li>
				<li>
					Surrounding segments (shown on the left and right) allow for <em>div</em>, <em>button</em>, and <em>anchor</em> elements.
				</li>
				<li>The <code>.input-group-shim</code> class will apply shading to a segment.</li>
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
				<label class="input-label">
					<span>Website</span>
					<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
						<div class="input-group-shim">https://</div>
						<input type="text" placeholder="www.example.com" />
					</div>
				</label>
				<!-- --- -->
				<label class="input-label">
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
				<label class="input-label">
					<span>Username</span>
					<div class="input-group input-group-divider grid-cols-[1fr_auto]">
						<input type="text" placeholder="Enter Username..." />
						<div title="Username already in use.">
							<i class="fa-solid fa-circle-exclamation text-warning-500 animate-pulse" />
						</div>
					</div>
				</label>
				<!-- --- -->
				<label class="input-label">
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
					<input type="text" placeholder="success" class="input-success" />
				</label>
				<label class="space-y-3">
					<code>.input-warning</code>
					<input type="text" placeholder="warning" class="input-warning" />
				</label>
				<label class="space-y-3">
					<code>.input-error</code>
					<input type="text" placeholder="error" class="input-error" />
				</label>
			</div>
		</section>
		<section class="space-y-4">
			<h2>Excluding Styles</h2>
			<p>
				Use the <code>.unstyled</code> class to exclude and and remove Skeleton-provide styles. Please be aware that base styles provided by
				the Tailwind Forms plugin will remain per the example below.
			</p>
			<CodeBlock language="html" code={`<input ... class="unstyled" />`} />
			<div class="card p-4 text-center">
				<input type="text" placeholder="unstyled" class="unstyled" />
			</div>
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
