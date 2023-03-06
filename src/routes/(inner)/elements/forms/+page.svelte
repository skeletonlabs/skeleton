<script lang="ts">
	import DocsShell from '$docs/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/layouts/DocsShell/types';
	import DocsPreview from '$docs/components/DocsPreview/DocsPreview.svelte';
	// Components
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	// Field Settings
	import { fieldSettings } from './settings';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Element,
		name: 'Forms',
		description: 'Pair with the Tailwind Forms plugin to style various input fields.',
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
	let currentInput = fieldSettings.inputs[0];
	let colorValue = '#bada55';
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<DocsPreview>
			<svelte:fragment slot="preview">
				<div class="card p-4 w-full text-token space-y-4">
					<label class="label">
						<span>Input</span>
						<input class="input" type="text" placeholder="Input" />
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
						<span>Textarea</span>
						<textarea class="textarea" rows="4" placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
					</label>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="source">
				<CodeBlock
					language="html"
					code={`
<label class="label">
	<span>Input</span>
	<input class="input" type="text" placeholder="Input" />
</label>
				`}
				/>
				<CodeBlock
					language="html"
					code={`
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
				`}
				/>
				<CodeBlock
					language="html"
					code={`
<label class="label">
	<span>Textarea</span>
	<textarea class="textarea" rows="4" placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
</label>
				`}
				/>
			</svelte:fragment>
		</DocsPreview>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<!-- prettier-ignore -->
		<p>
			Unlike other UI libraries, Skeleton relies heavily on native HTML form fields. This provides the best user experience and
			optimal accessibility. Note that form field styling is opt-in, which means a class must be applied to each element.
		</p>
		<!-- Install the Plugin -->
		<section class="space-y-4">
			<h2>Install the Forms Plugin</h2>
			<!-- prettier-ignore -->
			<p>
				The Tailwind Forms plugin normalizes form field styles, making them easier to customize and providing some rudimentary styles. See <a href="https://www.youtube.com/watch?v=pONeWAzDsQg" target="_blank" rel="noreferrer">Tailwind's video tutorial</a> for more information.
			</p>
			<!-- Written -->
			<div class="flex-auto space-y-4">
				<CodeBlock language="console" code={`npm install -D @tailwindcss/forms`} />
				<p>
					Prepend the <a href="https://github.com/tailwindlabs/tailwindcss-forms" target="_blank" rel="noreferrer">Tailwind Forms plugin</a>
					to your
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
		<hr />
		<!-- Labels -->
		<section class="space-y-4">
			<h2>Labels</h2>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="w-full">
						<label class="label">
							<span>Label</span>
							<input class="input" type="text" placeholder="Input" />
						</label>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="html"
						code={`
<label class="label">
	<span>Label</span>
	<!-- (input here) -->
</label>
					`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
		<!-- Input -->
		<section class="space-y-4">
			<h2>Input</h2>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="w-full space-y-4">
						<label class="label">
							<span>{currentInput.title}</span>
							<input class="input" {...currentInput} />
						</label>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="footer">
					<div class="flex justify-center">
						<select class="select w-auto" bind:value={currentInput}>
							{#each fieldSettings.inputs as fs}<option value={fs}>{fs.title}</option>{/each}
						</select>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="html" code={`<input class="input" />`} />
					<pre>Attributes: {JSON.stringify(currentInput, null, 2)}</pre>
				</svelte:fragment>
			</DocsPreview>
		</section>
		<!-- Files -->
		<section class="space-y-4">
			<h2>Files</h2>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="w-full space-y-4">
						<label class="label">
							<span>Input (file)</span>
							<input class="input" type="file" />
						</label>
						<label class="label">
							<span>Input (file, multiple)</span>
							<input class="input" type="file" multiple />
						</label>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="html" code={`<input class="input" type="file" />`} />
					<CodeBlock language="html" code={`<input class="input" type="file" multiple />`} />
				</svelte:fragment>
			</DocsPreview>
		</section>
		<!-- Textarea -->
		<section class="space-y-4">
			<h2>Textarea</h2>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="w-full space-y-4">
						<label class="label">
							<span>Textarea</span>
							<textarea class="textarea" rows="4" placeholder="Enter some long form content." />
						</label>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="html" code={`<textarea class="textarea" rows="4" placeholder="Enter some long form content." />`} />
				</svelte:fragment>
			</DocsPreview>
		</section>
		<!-- Select -->
		<section class="space-y-4">
			<h2>Select</h2>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="w-full space-y-4">
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
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="html"
						code={`
<select class="select">
	<option value="1">Option 1</option>
	<option value="2">Option 2</option>
	<option value="3">Option 3</option>
	<option value="4">Option 4</option>
	<option value="5">Option 5</option>
</select>
					`}
					/>
					<CodeBlock
						language="html"
						code={`
<select class="select" size="4" value="1">
	<option value="1">Option 1</option>
	<option value="2">Option 2</option>
	<option value="3">Option 3</option>
	<option value="4">Option 4</option>
	<option value="5">Option 5</option>
</select>
					`}
					/>
					<CodeBlock
						language="html"
						code={`
<select class="select" multiple value={['1', '2']}>
	<option value="1">Option 1</option>
	<option value="2">Option 2</option>
	<option value="3">Option 3</option>
	<option value="4">Option 4</option>
	<option value="5">Option 5</option>
</select>
					`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
		<!-- Checkboxes -->
		<section class="space-y-4">
			<h2>Checkboxes</h2>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
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
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="html"
						code={`
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
					`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
		<!-- Radio Groups -->
		<section class="space-y-4">
			<h2>Radio Groups</h2>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
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
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="html"
						code={`
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
					`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
		<!-- Range -->
		<section class="space-y-4">
			<h2>Range</h2>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="w-full">
						<input type="range" value="75" max="100" />
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="html" code={`<input type="range" value="75" max="100" />`} />
				</svelte:fragment>
			</DocsPreview>
		</section>
		<!-- Color -->
		<section class="space-y-4">
			<h2>Color</h2>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="grid grid-cols-[auto_1fr] gap-2">
						<input class="input" type="color" bind:value={colorValue} />
						<input class="input" type="text" bind:value={colorValue} readonly tabindex="-1" />
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="html"
						code={`
<div class="grid grid-cols-[auto_1fr] gap-2">
	<input class="input" type="color" bind:value={colorValue} />
	<input class="input" type="text" bind:value={colorValue} readonly tabindex="-1" />
</div>
					`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</section>
		<hr />
		<!-- Input Groups -->
		<section class="space-y-4">
			<h2>Input Groups</h2>
			<p>Create a horizontal group of related form fields.</p>
			<ul class="space-y-2 list-disc list-inside">
				<li>Groups support <em>most</em> input types and select elements, but not all.</li>
				<!-- prettier-ignore -->
				<li>
					The column sizes are grid-based, via <a href="https://tailwindcss.com/docs/grid-template-columns#arbitrary-values" target="_blank" rel="noreferrer">Tailwind's arbitrary column syntax</a>.
				</li>
				<li>
					Descriptive segments (on either side) allow for <code>div</code>, <code>button</code>, and anchor (<code>a</code>)
					elements.
				</li>
				<li>
					The <code>.input-group-divider</code> class applies vertical divider lines.
				</li>
				<li>The <code>.input-group-shim</code> class applies subtle shading to a segment, to draw more attention.</li>
			</ul>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
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
				</svelte:fragment>
				<svelte:fragment slot="source">
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
				</svelte:fragment>
			</DocsPreview>
		</section>
		<!-- Variants -->
		<section class="space-y-4">
			<h2>Variants</h2>
			<p>
				Skeleton includes a forms variant inspired by <a href="https://m3.material.io/" target="_blank" rel="noreferrer">Material Design.</a
				> Use this as a reference for building your own variant classes.
			</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
						<label class="label">
							<span>Input (text)</span>
							<input class="input variant-form-material" type="text" placeholder="input text" />
						</label>
						<label class="label">
							<span>Input (password)</span>
							<input class="input variant-form-material" type="password" placeholder="Enter password..." />
						</label>
						<label class="label">
							<span>Select</span>
							<select class="select variant-form-material">
								<option value="1">Option 1</option>
								<option value="2">Option 2</option>
								<option value="3">Option 3</option>
								<option value="4">Option 4</option>
								<option value="5">Option 5</option>
							</select>
						</label>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="html" code={`<input ... class="input variant-form-material" />`} />
					<CodeBlock language="html" code={`<select ... class="select variant-form-material" />`} />
					<CodeBlock language="html" code={`<textarea ... class="textarea variant-form-material" />`} />
				</svelte:fragment>
			</DocsPreview>
		</section>
		<!-- Validation Classes -->
		<section class="space-y-4">
			<h2>Validation Classes</h2>
			<p>
				Skeleton provides a set of classes for indicating form validation. These must come last in a group of class values. They are
				compatible with the variant above.
			</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
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
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="html" code={`<input ... class="input-success" />`} />
					<CodeBlock language="html" code={`<input ... class="input-warning" />`} />
					<CodeBlock language="html" code={`<input ... class="input-error" />`} />
				</svelte:fragment>
			</DocsPreview>
		</section>
		<!-- Browser Support -->
		<section class="space-y-4">
			<h2>Browser Support</h2>
			<p>
				<i class="fa-solid fa-triangle-exclamation text-4xl float-left mr-4" />
				Please be aware that not all native HTML form fields work consistently across browsers or operating systems. We strongly recommend cross-device/OS/browser
				testing to ensure compability for your target audience.
			</p>
		</section>
	</svelte:fragment>
</DocsShell>
