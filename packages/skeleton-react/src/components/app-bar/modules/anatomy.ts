import Headline from '../anatomy/headline.jsx';
import Lead from '../anatomy/lead.jsx';
import Root from '../anatomy/root.jsx';
import Toolbar from '../anatomy/toolbar.jsx';
import Trail from '../anatomy/trail.jsx';

export const AppBar = Object.assign(Root, {
	Toolbar: Toolbar,
	Lead: Lead,
	Headline: Headline,
	Trail: Trail,
});
