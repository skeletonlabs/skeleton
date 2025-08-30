import RatingGroupRoot from './rating-group-root.jsx';
import RatingGroupLabel from './rating-group-label.jsx';
import RatingGroupControl from './rating-group-control.jsx';
import RatingGroupItem from './rating-group-item.jsx';
import RatingGroupHiddenInput from './rating-group-hidden-input.jsx';
import RatingGroupRootContext from './rating-group-root-context.jsx';
import RatingGroupItemContext from './rating-group-item-context.jsx';

const RatingGroup = Object.assign(RatingGroupRoot, {
	Label: RatingGroupLabel,
	Control: RatingGroupControl,
	Item: RatingGroupItem,
	HiddenInput: RatingGroupHiddenInput,
	Context: RatingGroupRootContext,
	ItemContext: RatingGroupItemContext
});

export { RatingGroup };
