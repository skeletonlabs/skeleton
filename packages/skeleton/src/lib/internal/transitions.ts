import type { TransitionConfig } from 'svelte/transition';
import { get } from 'svelte/store';
import { prefersReducedMotion } from '../utilities/PrefersReducedMotion/PrefersReducedMotion.js';

// Transitions ---
export function dynamicTransition<T extends Transition>(node: Element, dynParams: DynamicTransitionParams<T>): TransitionConfig {
	const { transition, params, enabled } = dynParams;

	if (enabled && (!get(prefersReducedMotion) || ignoreReducedMotion)) return transition(node, params);

	return {};
}

type DynamicTransitionParams<T extends Transition> = {
	transition: T;
	params: TransitionParams<T>;
	enabled: boolean;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Transition = (node: Element, params?: any) => TransitionConfig;
export type TransitionParams<T extends Transition> = Parameters<T>[1];
