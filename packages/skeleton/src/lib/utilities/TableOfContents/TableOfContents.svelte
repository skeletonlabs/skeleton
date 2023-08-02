<script lang="ts" context="module">
	import { fade } from 'svelte/transition';
	import { type Transition, type TransitionParams, type CssClasses, prefersReducedMotionStore } from '../../index.js';

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	type FadeTransition = typeof fade;
	type TransitionIn = Transition;
	type TransitionOut = Transition;
</script>

<script lang="ts" generics="TransitionIn extends Transition = FadeTransition, TransitionOut extends Transition = FadeTransition">
	import { dynamicTransition } from '../../internal/transitions.js';
	import type { TOCLink } from './types.js';

	// Props
	/** Set the title text. */
	export let title = 'On This Page';
	/**
	 * List of links to display.
	 * @type {TOCLink[]}
	 */
	export let links: TOCLink[] = [];

	// Props (styles)
	/** Set the component width style. */
	export let width: CssClasses = 'w-[240px]';
	/** Set the vertical spacing styles. */
	export let spacing: CssClasses = 'space-y-4';
	/** Set the row text color styles. */
	export let text: CssClasses = 'text-surface-600-300-token';
	/** Set the row hover styles. */
	export let hover: CssClasses = 'hover:bg-primary-hover-token';
	/** Set the row border radius styles. */
	export let rounded: CssClasses = 'rounded-token';
	/** Set the active row styles */
	export let active: CssClasses = 'bg-primary-active-token !text-on-primary-token';

	// Props Regions
	/** Provide arbitrary styles for the title. */
	export let regionTitle: CssClasses = 'font-bold';
	/** Provide arbitrary styles for the list element. */
	export let regionList: CssClasses = '';

	// Props (transition)
	/**
	 * Enable/Disable transitions
	 * @type {boolean}
	 */
	export let transitions = !$prefersReducedMotionStore;
	/**
	 * Provide the transition to used on entry.
	 * @type {TransitionIn}
	 */
	export let transitionIn: TransitionIn = fade as TransitionIn;
	/**
	 * Transition params provided to `transitionIn`.
	 * @type {TransitionParams}
	 */
	export let transitionInParams: TransitionParams<TransitionIn> = { duration: 100 };
	/**
	 * Provide the transition to used on exit.
	 * @type {TransitionOut}
	 */
	export let transitionOut: TransitionOut = fade as TransitionOut;
	/**
	 * Transition params provided to `transitionOut`.
	 * @type {TransitionParams}
	 */
	export let transitionOutParams: TransitionParams<TransitionOut> = { duration: 100 };

	// Classes
	const cTitle = 'p-4 pt-0';
	const cList = 'list-none flex flex-col space-y-1';
	const cAnchorItem = 'px-4 py-2 cursor-pointer';

	// Reactive
	$: classesBase = `${width} ${spacing} ${$$props.class ?? ''}`;
	$: classesList = `${cList} ${regionList}`;
	$: classesTitle = `${cTitle} ${regionTitle}`;
	$: classesButtonItem = `${cAnchorItem} ${text} ${hover} ${rounded}`;
</script>

{#if links && links.length > 0}
	<aside
		class="toc {classesBase}"
		data-testid="toc"
		in:dynamicTransition|local={{ transition: transitionIn, params: transitionInParams, enabled: transitions }}
		out:dynamicTransition|local={{ transition: transitionOut, params: transitionOutParams, enabled: transitions }}
	>
		<nav class="toc-list {classesList}">
			<div class="toc-title {classesTitle}">{title}</div>
			{#each links as link}
				<a href={link.href} class="toc-button-item {classesButtonItem} {link.indent}">
					{link.text}
				</a>
			{/each}
		</nav>
	</aside>
{/if}
