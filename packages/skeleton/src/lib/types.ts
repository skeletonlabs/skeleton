import type { TransitionConfig } from 'svelte/transition';

// Transitions ---

interface AdditionalTransitionProps {
	ignoreReducedMotion?: boolean;
}
export type Transition = (node: Element, params?: any) => TransitionConfig;
export type TransitionParams<T extends Transition> = Parameters<T>[1] & AdditionalTransitionProps;
export interface TransitionSettings<T extends Transition> {
	transition: T;
	params?: TransitionParams<T>;
}
export function dynamicTransition<T extends Transition>(
	node: Element,
	{
		transition,
		params,
		enabled
	}: {
		transition: T;
		params: TransitionParams<T>;
		enabled: boolean;
	}
): TransitionConfig {
	if (enabled) return transition(node, params);
	return {};
}
