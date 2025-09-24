import Headline from '../anatomy/headline.svelte';
import Lead from '../anatomy/lead.svelte';
import Root from '../anatomy/root.svelte';
import Toolbar from '../anatomy/toolbar.svelte';
import Trail from '../anatomy/trail.svelte';

export const AppBar = Object.assign(Root, {
	Toolbar: Toolbar,
	Lead: Lead,
	Headline: Headline,
	Trail: Trail,
});
