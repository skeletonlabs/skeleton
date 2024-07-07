import { getContext, setContext } from 'svelte';

interface NavigationContext {
	expanded: boolean;
	parent: 'bar' | 'rail';
}

const key = Symbol('navigation-context');

function setNavigationContext(context: NavigationContext) {
	return setContext(key, context);
}

function getNavigationContext() {
	return getContext<NavigationContext>(key);
}

export { setNavigationContext, getNavigationContext };
