import type { TransitionConfig } from 'svelte/transition';

// This type alias is to identify CSS classes within component props, which enables Tailwind IntelliSense
export type CssClasses = string;

// Transition
interface AdditionalTransitionProps {
	ignoreReducedMotion?: boolean;
}
export type Transition = (node: Element, params?: any) => TransitionConfig;
export type TransitionParams<T extends Transition> = Parameters<T>[1] & AdditionalTransitionProps;
export interface TransitionSettings<T extends Transition> {
	transition: T;
	params?: TransitionParams<T>;
}
