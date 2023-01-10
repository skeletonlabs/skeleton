<script lang="ts">
	import { writable, type Writable } from 'svelte/store';

	// Components
	import RadioGroup from '$lib/components/Radio/RadioGroup.svelte';
	import RadioItem from '$lib/components/Radio/RadioItem.svelte';
	import RangeSlider from '$lib/components/RangeSlider/RangeSlider.svelte';
	import SlideToggle from '$lib/components/SlideToggle/SlideToggle.svelte';
	import InputChip from '$lib/components/InputChip/InputChip.svelte';

	// Local
	const storeRadioGroup: Writable<string> = writable('a');
	let valueRangeSlider = 75;
	let valueSlideToggle = true;
	let tags = ['tutorials', 'news'];
</script>

<div class="page-container">
	<!-- Breadcrumbs -->
	<ol class="breadcrumb">
		<li class="crumb"><a href="/elements/forms">Forms</a></li>
		<li class="crumb-separator" aria-hidden>&rsaquo;</li>
		<li>Preview</li>
	</ol>

	<!-- Header -->
	<header class="space-y-4">
		<h1>Forms Preview</h1>
		<p>
			This page provides a "kitchen sink" of various form elements and Skeleton components. Please note that these are handled natively by
			browsers and as such there are some differences across platforms.
		</p>
	</header>

	<!-- Native Elements -->
	<div class="card">
		<!-- Card Header -->
		<header class="card-header space-y-4">
			<h2>Native HTML Elements</h2>
			<p>
				Native HTML input elements using the <a href="https://github.com/tailwindlabs/tailwindcss-forms" target="_blank" rel="noreferrer"
					>Tailwind Forms</a
				>
				plugin plus the Skeleton
				<code>forms.css</code> stylesheet to apply theme colors and styles.
			</p>
		</header>
		<!-- Card Body -->
		<div class="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
			<!-- Column 1 -->
			<div class="space-y-4">
				<label>
					<span>Input (text)</span>
					<input type="text" placeholder="input text" />
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
			</div>
			<!-- Column 2 -->
			<div class="space-y-4">
				<label class="block">
					<span>Input (tel)</span>
					<input type="tel" multiple placeholder="john@example.com" />
				</label>
				<label class="block">
					<span>Input (url)</span>
					<input type="url" multiple placeholder="john@example.com" />
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
					<textarea rows="3" placeholder="Enter some long form content." />
				</label>
				<fieldset class="block space-y-">
					<h4 class="mb-4">Checkboxes</h4>
					<div class="space-y-2">
						<label class="unstyled flex items-center space-x-2">
							<input type="checkbox" checked />
							<span>Option 1</span>
						</label>
						<label class="unstyled flex items-center space-x-2">
							<input type="checkbox" />
							<span>Option 2</span>
						</label>
						<label class="unstyled flex items-center space-x-2">
							<input type="checkbox" />
							<span>Option 3</span>
						</label>
					</div>
				</fieldset>
				<fieldset class="block space-y-">
					<h4 class="mb-4">Radio Buttons</h4>
					<div class="space-y-2">
						<label class="unstyled flex items-center space-x-2">
							<input type="radio" checked name="radio-direct" value="1" />
							<span>Option 1</span>
						</label>
						<label class="unstyled flex items-center space-x-2">
							<input type="radio" name="radio-direct" value="2" />
							<span>Option 2</span>
						</label>
						<label class="unstyled flex items-center space-x-2">
							<input type="radio" name="radio-direct" value="3" />
							<span>Option 3</span>
						</label>
					</div>
				</fieldset>
			</div>
		</div>
	</div>

	<!-- State Classes -->
	<div class="card p-4 space-y-4">
		<h2>Utility State Classes</h2>
		<p>
			Provided by <code>forms.css</code>. See handling
			<a href="https://kit.svelte.dev/docs/form-actions#anatomy-of-an-action-validation-errors" target="_blank" rel="noreferrer"
				>validation errors for SvelteKit</a
			>. Additionally we recommend
			<a href="https://felte.dev/" target="_blank" rel="noreferrer">Felte</a>
			paired with your choice of <a href="https://felte.dev/docs/svelte/validators" target="_blank" rel="noreferrer">Validators</a>.
		</p>
		<label>
			<span><code>.input-valid</code></span>
			<input type="text" placeholder="input text" class="input-valid" />
		</label>
		<label>
			<span><code>.input-invalid</code></span>
			<input type="text" placeholder="input text" class="input-invalid" />
		</label>
	</div>

	<section class="grid grid-cols-2 gap-4">
		<!-- Skeleton Forms.css -->
		<div class="card">
			<header class="card-header space-y-4">
				<h2>Skeleton Forms.css</h2>
				<p>Native HTML elements styled by the Skeleton <a href="/guides/styling">forms.css</a> stylesheet.</p>
			</header>
			<div class="p-4 space-y-4">
				<label class="block">
					<span>Input (range)</span>
					<input type="range" value="75" max="100" />
				</label>
				<label class="block">
					<span>Input (file)</span>
					<input type="file" />
				</label>
				<label class="block">
					<span>Input (file, multiple)</span>
					<input type="file" multiple />
				</label>
				<label class="block">
					<span>Input (color)</span>
					<input type="color" value="#bada55" />
				</label>
			</div>
		</div>

		<!-- Skeleton Components -->
		<div class="card">
			<header class="card-header space-y-4">
				<h2>Skeleton Components</h2>
				<p>Custom components provided as part of the Skeleton library.</p>
			</header>
			<div class="p-4 space-y-4">
				<label for="">
					<div class="text-sm flex justify-between mb-3">
						<p>Range Slider</p>
						<a href="/components/range-sliders">Documentation</a>
					</div>
					<RangeSlider bind:value={valueRangeSlider} max={100} step={5} ticked />
				</label>
				<label for="">
					<div class="text-sm flex justify-between mb-3">
						<p>Radio Group</p>
						<a href="/components/radio-groups">Documentation</a>
					</div>
					<RadioGroup selected={storeRadioGroup} display="flex">
						<RadioItem value="a">Foo</RadioItem>
						<RadioItem value="b">Bar</RadioItem>
						<RadioItem value="c">Fizz</RadioItem>
					</RadioGroup>
				</label>
				<label for="" class="text-center">
					<div class="text-sm flex justify-between mb-3">
						<p>Slide Toggle</p>
						<a href="/components/slide-toggles">Documentation</a>
					</div>
					<SlideToggle bind:checked={valueSlideToggle}>Slide Toggle 1</SlideToggle>
				</label>
				<div>
					<div class="text-sm flex justify-between mb-3">
						<p>Input Chip</p>
						<a href="/components/input-chips">Documentation</a>
					</div>
					<InputChip placeholder="Add tags..." bind:value={tags} />
				</div>
			</div>
		</div>
	</section>
</div>
