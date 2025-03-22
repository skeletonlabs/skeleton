import * as toast from '@zag-js/toast';

export function createToaster(options: toast.StoreProps = {}) {
	return toast.createStore(options);
}
