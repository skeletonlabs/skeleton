import Headline from '../anatomy/headline';
import Lead from '../anatomy/lead';
import Root from '../anatomy/root';
import Toolbar from '../anatomy/toolbar';
import Trail from '../anatomy/trail';

export const AppBar = Object.assign(Root, {
	Toolbar: Toolbar,
	Lead: Lead,
	Headline: Headline,
	Trail: Trail,
});
