import * as toast from '@zag-js/toast';

export interface ToastProps extends toast.Service {
	// ...
}

export interface ToastProviderProps extends React.PropsWithChildren, toast.GroupProps {
	// ...
}
