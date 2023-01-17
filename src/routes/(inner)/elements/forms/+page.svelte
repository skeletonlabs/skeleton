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
		dependencies: [{ label: 'Tailwind Forms Plugin', url: 'https://github.com/tailwindlabs/tailwindcss-forms' }]
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
					<label>
						<span>Input (text)</span>
						<input type="text" placeholder="input text" />
					</label>
					<label>
						<span>Input (readonly)</span>
						<!-- NOTE: we recommend setting the tabindex as well -->
						<input type="text" placeholder="input readonly" readonly tabindex="-1" />
					</label>
					<label>
						<span>Input (disabled)</span>
						<input type="text" placeholder="input disabled" disabled />
					</label>
					<label>
						<span>Input (email)</span>
						<input type="email" placeholder="john@example.com" />
					</label>
					<label>
						<span>Input (email, multiple)</span>
						<input type="email" multiple placeholder="john@example.com, susy@example.com" />
					</label>
					<label>
						<span>Input (password)</span>
						<input type="password" placeholder="password" />
					</label>
					<label>
						<span>Input (search)</span>
						<input type="search" placeholder="Search..." />
					</label>
					<label>
						<span>Input (date)</span>
						<input type="date" />
					</label>
					<label>
						<span>Input (datetime-local)</span>
						<input type="datetime-local" />
					</label>
					<label>
						<span>Input (month)</span>
						<input type="month" />
					</label>
					<label>
						<span>Input (number)</span>
						<input type="number" />
					</label>
					<label>
						<span>Input (time)</span>
						<input type="time" />
					</label>
					<label>
						<span>Input (week)</span>
						<input type="week" />
					</label>
					<label class="block">
						<span>Input (tel)</span>
						<input type="tel" multiple placeholder="john@example.com" />
					</label>
					<label class="block">
						<span>Input (url)</span>
						<input type="url" multiple placeholder="john@example.com" />
					</label>
				</div>
				<!-- Column 2 -->
				<div class="space-y-4">
					<label class="block">
						<span>Input (file)</span>
						<input type="file" />
					</label>
					<label class="block">
						<span>Input (file, multiple)</span>
						<input type="file" multiple />
					</label>
					<label class="block">
						<span>Select</span>
						<select>
							<option>Option 1</option>
							<option>Option 2</option>
						</select>
					</label>
					<label class="block">
						<span>Select (multiple)</span>
						<select multiple>
							<option>Option 1</option>
							<option>Option 2</option>
							<option>Option 3</option>
							<option>Option 4</option>
							<option>Option 5</option>
						</select>
					</label>
					<label class="block">
						<span>Textarea</span>
						<textarea rows="5" placeholder="Enter some long form content." />
					</label>
					<fieldset>
						<h4 class="mb-4">Checkboxes</h4>
						<div class="space-y-2">
							<label class="unstyled flex items-center space-x-2">
								<input type="checkbox" checked />
								<p>Option 1</p>
							</label>
							<label class="unstyled flex items-center space-x-2">
								<input type="checkbox" />
								<p>Option 2</p>
							</label>
							<label class="unstyled flex items-center space-x-2">
								<input type="checkbox" />
								<p>Option 3</p>
							</label>
						</div>
					</fieldset>
					<fieldset>
						<h4 class="mb-4">Radio Buttons</h4>
						<div class="space-y-2">
							<label class="unstyled flex items-center space-x-2">
								<input type="radio" checked name="radio-direct" value="1" />
								<p>Option 1</p>
							</label>
							<label class="unstyled flex items-center space-x-2">
								<input type="radio" name="radio-direct" value="2" />
								<p>Option 2</p>
							</label>
							<label class="unstyled flex items-center space-x-2">
								<input type="radio" name="radio-direct" value="3" />
								<p>Option 3</p>
							</label>
						</div>
					</fieldset>
					<label class="block">
						<span>Input (range)</span>
						<input type="range" value="75" max="100" />
					</label>
					<label class="block">
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
<label for="name">
	<span>Name</span>
	<input type="text" id="name" bind:value={name} minlength="2" required>
</label>
		`}
			/>
			<CodeBlock
				language="html"
				code={`
<label for="color">
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
		<!-- Variants -->
		<section class="space-y-4">
			<h2>Variants</h2>
			<p>Skeleton provides a set of variant classes that can be paired with your form validation logic.</p>
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
