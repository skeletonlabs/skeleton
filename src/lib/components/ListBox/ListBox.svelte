<script lang="ts">
	// Interfaces
	interface ListboxOption {
		label: string;
		value: unknown;
	}

	// Props
	/** Set a unique select input name. */
	export let name: string;
	/**
	 * The array of source data.
	 * @type {ListboxOption[]}
	 */
	export let source: ListboxOption[] = [];
	/**
	 * The select input value or values array.
	 * @type {any | any[]}
	 */
	export let value: any;
	/** Allow  multiple options can be selected in the listbox. */
	export let multiple: boolean = false;
	/** Set the required state for this input field. */
	export let required: boolean = false;

	// Props (styles)
	/** xxx */
	export let spacing = `space-y-1`;
	/** Provide classes active/selected background style. */
	export let active = 'bg-primary-active-token';
	/** Provide classes to set the hover background style. */
	export let hover = 'hover:bg-primary-hover-token';
	/** Provide classes to set the option padding styles. */
	export let padding = 'px-4 py-2';
	/** Provide classes to set the option box radius styles. */
	export let rounded = 'rounded-token';

	// Props (a11y)
	export let labelledby: string = '';

	// Props (regions)
	export let regionList: string = '';
	export let regionOption: string = '';

	// Classes
	// const cBase = '';
	// const cList = '';
	const cOption = 'cursor-pointer -outline-offset-[3px]';

	function onSelectHandler(option: ListboxOption): void {
		if (multiple === false) {
			value = option.value;
		} else {
			selected(option) === false ? addValue(option) : removeValue(option);
		}
	}

	function addValue(option: ListboxOption): void {
		value = [...value, option.value];
	}

	function removeValue(option: ListboxOption): void {
		value = value.filter((v: unknown) => v !== option.value);
	}

	// A11y Key Down Handler
	function onKeyDown(event: KeyboardEvent, option: ListboxOption): void {
		if (['Enter', 'Space'].includes(event.code)) {
			event.preventDefault();
			onSelectHandler(option);
		}
	}

	// State
	$: selected = (option: ListboxOption) => (multiple ? value.includes(option.value) : value === option.value);
	// Reactive
	$: classesBase = `${$$props.class ?? ''}`; // ${cBase}
	$: classesList = `${spacing} ${regionList}`; // ${cList}
	$: classesOption = `${cOption} ${hover} ${padding} ${rounded} ${regionOption}`;
</script>

<div class="listbox {classesBase}" data-testid="listbox">
	<!-- NOTE: Don't use `hidden` as it prevents `required` from operating -->
	<div class="h-0 overflow-hidden">
		{#if multiple}
			<select bind:value {name} multiple {required}>
				<!-- NOTE: options are required! -->
				{#each value as option}<option value={option}>{option}</option>{/each}
			</select>
		{:else}
			<input bind:value {name} {required} />
		{/if}
	</div>
	<!-- List -->
	<ul class="listbox-list {classesList}" role="listbox" aria-labelledby={labelledby}>
		{#each source as option}
			<!-- prettier-ignore -->
			<li
				class="listbox-option {classesOption} {selected(option) ? active : ''}"
				role="option"
				aria-selected={selected(option)}
				tabindex="0"
				data-testid="listbox-item"
				on:click={() => { onSelectHandler(option); }}
				on:click
				on:keydown={(e) => { onKeyDown(e, option); }}
				on:keydown
				on:keyup
				on:keypress
			>
				{@html option.label}
			</li>
		{/each}
	</ul>
</div>
