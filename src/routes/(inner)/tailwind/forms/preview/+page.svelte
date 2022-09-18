<script lang="ts">
	import { writable, type Writable } from 'svelte/store';

	// Components
	import Breadcrumb from '$lib/components/Breadcrumb/Breadcrumb.svelte';
	import Crumb from '$lib/components/Breadcrumb/Crumb.svelte';
	import Card from '$lib/components/Card/Card.svelte';
	import RadioGroup from '$lib/components/Radio/RadioGroup.svelte';
	import RadioItem from '$lib/components/Radio/RadioItem.svelte';
	import RangeSlider from '$lib/components/RangeSlider/RangeSlider.svelte';
	import SlideToggle from '$lib/components/SlideToggle/SlideToggle.svelte';

	// Local
	const storeRadioGroup: Writable<string> = writable('a');
	let valueRangeSlider: number = 50;
	let valueSlideToggle: boolean = true;
</script>

<div class="space-y-8">
	<!-- Breadcrumbs -->
	<Breadcrumb>
		<Crumb href="/tailwind/forms">Forms</Crumb>
		<Crumb>Preview</Crumb>
	</Breadcrumb>

	<!-- Header -->
	<header class="space-y-4">
		<h1>Forms Preview</h1>
		<p>This page provides a "kitchen sink" of various form elements and Skeleton components.</p>
	</header>

	<!-- Native Elements -->
	<Card slotHeader="space-y-1" slotBody="grid grid-cols-1 md:grid-cols-2 gap-4">
		<svelte:fragment slot="header">
			<h2>Native HTML Elements</h2>
			<p>
				Native HTML input elements using the <a href="https://github.com/tailwindlabs/tailwindcss-forms" target="_blank">Tailwind Forms plugin</a>, further augmented with the
				<a href="/guides/styling">Skeleton forms.css</a> add-on stylesheet.
			</p>
		</svelte:fragment>
		<!-- Column 1 -->
		<div class="space-y-4">
			<label>
				<span>Input (text)</span>
				<input type="text" placeholder="john@example.com" />
			</label>
			<label>
				<span>Input (email)</span>
				<input type="email" placeholder="john@example.com" />
			</label>
			<label>
				<span>Input (email, multiple)</span>
				<input type="email" multiple placeholder="john@example.com" />
			</label>
			<label>
				<span>Input (password)</span>
				<input type="password" placeholder="john@example.com" />
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
				<span>Input (search)</span>
				<input type="search" />
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
				<h4>Checkboxes</h4>
				<div class="space-y-2">
					<label class="flex items-center space-x-2">
						<input type="checkbox" checked />
						<span class="m-0">Option 1</span>
					</label>
					<label class="flex items-center space-x-2">
						<input type="checkbox" />
						<span class="m-0">Option 2</span>
					</label>
					<label class="flex items-center space-x-2">
						<input type="checkbox" />
						<span class="m-0">Option 3</span>
					</label>
				</div>
			</fieldset>
			<fieldset class="block space-y-">
				<h4>Radio Buttons</h4>
				<div class="space-y-2">
					<label class="flex items-center space-x-2">
						<input type="radio" checked name="radio-direct" value="1" />
						<span class="m-0">Option 1</span>
					</label>
					<label class="flex items-center space-x-2">
						<input type="radio" name="radio-direct" value="2" />
						<span class="m-0">Option 2</span>
					</label>
					<label class="flex items-center space-x-2">
						<input type="radio" name="radio-direct" value="3" />
						<span class="m-0">Option 3</span>
					</label>
				</div>
			</fieldset>
		</div>
	</Card>

	<section class="grid grid-cols-2 gap-4">
		<!-- Skeleton Forms.css -->
		<Card slotHeader="space-y-1">
			<svelte:fragment slot="header">
				<h2>Skeleton Style Add-On</h2>
				<p>Native HTML elements styled by the <a href="/guides/styling">Skeleton forms.css</a> add-on stylesheet.</p>
			</svelte:fragment>
			<div class="space-y-4">
				<label class="block">
					<span>Input (range)</span>
					<input type="range" />
				</label>
				<label class="block">
					<span>Input (file)</span>
					<input type="file" />
				</label>
				<label class="block">
					<span>Input (file, multiple)</span>
					<input type="file" multiple />
				</label>
			</div>
		</Card>

		<!-- Skeleton Components -->
		<Card slotHeader="space-y-1">
			<svelte:fragment slot="header">
				<h2>Skeleton Components</h2>
				<p>Components provided as part of the Skeleton library.</p>
			</svelte:fragment>
			<div class="space-y-4">
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
			</div>
		</Card>
	</section>

	<!-- Untouched -->
	<Card slotBody="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
		<div class="space-y-2">
			<h2>Untouched</h2>
			<p>
				One notable exception is the <code>color</code> field input. This is due to
				<a href="https://css-tricks.com/color-inputs-a-deep-dive-into-cross-browser-differences/" target="_blank">major cross-browser issues</a>.
			</p>
		</div>
		<label class="block text-center">
			<span>Input (color)</span>
			<input type="color" />
		</label>
	</Card>
</div>
