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
						<label class="input-label">
							<span>Checkboxes</span>
							<div class="space-y-2">
								<div class="flex items-center space-x-2">
									<input type="checkbox" checked />
									<p>Option 1</p>
								</div>
								<div class="flex items-center space-x-2">
									<input type="checkbox" />
									<p>Option 2</p>
								</div>
								<div class="flex items-center space-x-2">
									<input type="checkbox" />
									<p>Option 3</p>
								</div>
							</div>
						</label>
					</fieldset>
					<fieldset>
						<label class="input-label">
							<span>Radio Buttons</span>
							<div class="space-y-2">
								<div class="flex items-center space-x-2">
									<input type="radio" checked name="radio-direct" value="1" />
									<p>Option 1</p>
								</div>
								<div class="flex items-center space-x-2">
									<input type="radio" name="radio-direct" value="2" />
									<p>Option 2</p>
								</div>
								<div class="flex items-center space-x-2">
									<input type="radio" name="radio-direct" value="3" />
									<p>Option 3</p>
								</div>
							</div>
						</label>
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
			<h2>Install the Forms Plugin</h2>
			<!-- prettier-ignore -->
			<p>
				The Tailwind Forms plugin is required if you wish to use Skeleton's form styles. It normalizes the styles, which makes them easier to style. See the <a href="https://www.youtube.com/watch?v=pONeWAzDsQg" target="_blank" rel="noreferrer">Tailwind's YouTube tutorial</a> for more information.
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
		// Insert above the 'skeleton.cjs' plugin
	],
}
				`}
				/>
			</div>
		</section>
		<section class="space-y-4">
			<h2>Use Native Elements</h2>
			<p>Create form elements using native HTML markup. We recommend <em>span</em> tags for label text.</p>
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
		</section>
		<!-- Input Groups -->
		<section class="space-y-4">
			<h2>Input Groups</h2>
			<!-- prettier-ignore -->
			<p>
				Create a horizontal group of elements related to an input. Surrounding elements can be a <em>div</em>, <em>button</em>, or
				<em>anchor</em>. Use Tailwind's <a href="https://tailwindcss.com/docs/grid-template-columns#arbitrary-values" target="_blank" rel="noreferrer">abitrary column syntax</a> to define column widths. The <code>auto</code> value will fit the element's width, while <code>1fr</code> will fill all available available width.
			</p>
			<p>The <code>.input-group-divider</code> class is optional. Removing it will exclude the vertical divider lines.</p>
			<CodeBlock
				language="html"
				code={`
<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
	<div class="input-group-shim">(icon)</div>
	<input type="search" placeholder="Search..." />
	<button class="btn-filled-secondary">Submit</button>
</div>
		`}
			/>
			<div class="card p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
				<label class="input-label">
					<span>Website</span>
					<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
						<div class="input-group-shim">https://</div>
						<input class="unstyled" type="text" placeholder="www.example.com" />
					</div>
				</label>
				<!-- --- -->
				<label class="input-label">
					<span>Amount</span>
					<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
						<div class="input-group-shim"><i class="fa-solid fa-dollar-sign" /></div>
						<input class="unstyled" type="text" placeholder="Amount" />
						<select class="unstyled">
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
						<input class="unstyled" type="text" placeholder="Enter Username..." />
						<div title="Username already taken."><i class="fa-solid fa-circle-exclamation" /></div>
					</div>
				</label>
				<!-- --- -->
				<label class="input-label">
					<span>Search</span>
					<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
						<div class="input-group-shim"><i class="fa-solid fa-search" /></div>
						<input class="unstyled" type="search" placeholder="Search..." />
						<button class="btn-filled-secondary">Submit</button>
					</div>
				</label>
			</div>
		</section>
		<!-- Variants -->
		<section class="space-y-4">
			<h2>Variants</h2>
			<p>Skeleton provides a set of variant classes that can be paired with your form validation logic.</p>
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
				Use the <code>.unstyled</code> class to exclude and zero out styles for a single input element. However, please note any styles provided
				by the Tailwind Forms plugin will remain in place. See the example below.
			</p>
			<CodeBlock language="html" code={`<input ... class="unstyled" />`} />
			<div class="card p-4 text-center">
				<input type="text" placeholder="unstyled" class="unstyled" />
			</div>
		</section>
		<!-- Browser Support -->
		<section class="space-y-4">
			<h2>Browser Support</h2>
			<p>
				Please be aware that not all native HTML input styles and features are consistent across browsers or operating system. Please be
				sure to verify your elements work as desired in all target browsers for your application.
			</p>
		</section>
		<!-- See Also -->
		<section class="space-y-4">
			<h2>See Also</h2>
			<p>Skeleton provides an extended set of input components. The documentation for each of these is linked below.</p>
			<div class="grid grid-cols-2 gap-4">
				<div class="card p-4 card-glass-surface text-center">
					<a class="btn btn-filled-secondary" href="/components/range-sliders">Range Slider &rarr;</a>
				</div>
				<div class="card p-4 card-glass-surface text-center">
					<a class="btn btn-filled-secondary" href="/components/radio-groups">Radio Group &rarr;</a>
				</div>
				<div class="card p-4 card-glass-surface text-center">
					<a class="btn btn-filled-secondary" href="/components/slide-toggles">Slide Toggles &rarr;</a>
				</div>
				<div class="card p-4 card-glass-surface text-center">
					<a class="btn btn-filled-secondary" href="/components/input-chips">Input Chips &rarr;</a>
				</div>
			</div>
		</section>
	</svelte:fragment>
</DocsShell>
