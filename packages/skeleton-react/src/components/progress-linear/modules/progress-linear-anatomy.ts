import ProgressLinearRoot from '../anatomy/progress-linear-root';
import ProgressLinearRootContext from '../anatomy/progress-linear-root-context';
import ProgressLinearLabel from '../anatomy/progress-linear-label';
import ProgressLinearTrack from '../anatomy/progress-linear-track';
import ProgressLinearRange from '../anatomy/progress-linear-range';

const ProgressLinear = Object.assign(ProgressLinearRoot, {
	Context: ProgressLinearRootContext,
	Label: ProgressLinearLabel,
	Track: ProgressLinearTrack,
	Range: ProgressLinearRange
});

export { ProgressLinear };
