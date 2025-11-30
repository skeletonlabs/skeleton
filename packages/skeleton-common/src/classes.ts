export const appBar = {
	root: 'w-full bg-surface-100-900 p-4 space-y-4',
	toolbar: 'grid items-center justify-between gap-4',
	lead: '',
	headline: '',
	trail: 'flex gap-2',
};

export const avatar = {
	root: 'isolate bg-surface-400-600 size-16 rounded-full overflow-hidden',
	image: 'w-full object-cover',
	fallback: 'size-full flex justify-center items-center',
};

export const collapsible = {
	root: 'w-full flex flex-col items-center data-[state=open]:gap-2',
	trigger: 'data-disabled:opacity-50 data-disabled:pointer-events-none',
	indicator: '',
	content: '',
};

export const combobox = {
	root: 'w-full space-y-2',
	label: 'label-text',
	control: 'relative',
	input: 'input',
	trigger: 'btn-icon btn-icon-sm preset-tonal absolute end-1.5 top-1/2 -translate-y-1/2',
	clearTrigger: 'btn btn-sm preset-tonal hover:preset-filled-error-500',
	positioner: '',
	content: 'card bg-surface-50-950 border border-surface-200-800 p-2 flex flex-col gap-2',
	itemGroup: '',
	itemGroupLabel: 'text-surface-600-400 text-xs px-2 py-1',
	item: [
		'flex justify-between items-center px-2 py-1 rounded cursor-pointer',
		'data-[state=checked]:preset-filled',
		'data-highlighted:preset-tonal',
		'data-disabled:pointer-events-none data-disabled:opacity-50',
	],
	itemText: '',
	itemIndicator: '',
};

export const datePicker = {
	root: 'space-y-2',
	label: 'label-text',
	control: 'relative space-y-2',
	input: 'input',
	trigger: 'btn-icon btn-icon-sm preset-tonal absolute end-1.5 top-1.25',
	clearTrigger: '',
	presetTrigger: 'btn hover:preset-tonal',
	positioner: '',
	content: 'card bg-surface-50-950 border border-surface-200-800 p-2 space-y-2',
	yearSelect: 'select',
	monthSelect: 'select',
	view: 'space-y-2',
	viewControl: 'flex gap-2 justify-between',
	prevTrigger: 'btn-icon hover:preset-tonal',
	viewTrigger: 'btn hover:preset-tonal',
	rangeText: '',
	nextTrigger: 'btn-icon hover:preset-tonal',
	table: 'border-separate border-spacing-2',
	tableHead: '',
	tableRow: '',
	tableHeader: 'text-sm size-8',
	tableBody: '',
	tableCell: 'size-8',
	tableCellTrigger: [
		'text-sm size-full btn p-0 hover:preset-tonal cursor-pointer',
		'data-focus-visible:outline-2 data-focus-visible:outline-offset-1 data-focus-visible:outline-surface-950-50',
		'data-selected:preset-filled',
		'data-in-range:preset-filled',
		'data-today:underline data-today:underline-offset-4',
		'data-disabled:pointer-events-none data-disabled:opacity-50',
	],
};

export const dialog = {
	trigger: '',
	backdrop: '',
	positioner: '',
	content: '',
	title: '',
	description: '',
	closeTrigger: '',
};

export const fileUpload = {
	root: 'w-full space-y-2 data-disabled:disabled',
	label: 'label-text',
	dropzone: [
		'card px-4 py-10 border border-dashed border-surface-200-800 flex flex-col justify-center items-center gap-2 data-dragging:preset-tonal',
	],
	hiddenInput: '',
	trigger: 'btn preset-filled',
	clearTrigger: 'btn btn-sm preset-tonal hover:preset-filled-error-500',
	itemGroup: 'flex flex-col gap-2',
	item: 'grid grid-cols-[auto_1fr_auto] gap-4 items-center preset-tonal px-4 py-2 rounded',
	itemName: 'text-sm',
	itemSizeText: 'text-xs opacity-60',
	itemDeleteTrigger: 'btn-icon',
};

export const floatingPanel = {
	trigger: '',
	positioner: '',
	content: 'card overflow-hidden shadow-lg border border-surface-300-700',
	dragTrigger: '',
	header: 'px-4 py-2 grid grid-cols-[1fr_auto] gap-2 items-center bg-surface-200-800 overflow-y-hidden',
	title: 'flex justify-start items-center gap-2 whitespace-nowrap',
	control: 'flex gap-1',
	stageTrigger: 'btn-icon hover:preset-tonal',
	closeTrigger: 'btn-icon hover:preset-tonal',
	body: 'h-full bg-surface-100-900 p-4 overflow-y-auto',
	resizeTrigger: 'data-[axis*=n]:h-2 data-[axis*=s]:h-2 data-[axis*=e]:w-2 data-[axis*=w]:w-2',
};

export const listbox = {
	root: 'flex flex-col items-stretch gap-2',
	label: 'label-text',
	input: 'input',
	content: 'card bg-surface-50-950 border border-surface-200-800 p-2 flex flex-col gap-2',
	itemGroup: '',
	itemGroupLabel: 'text-surface-600-400 text-xs px-2 py-1',
	item: [
		'flex justify-between items-center px-2 py-1 rounded cursor-pointer hover:preset-tonal',
		'data-selected:preset-filled',
		'data-highlighted:preset-tonal',
		'data-disabled:pointer-events-none data-disabled:opacity-50',
	],
	itemText: '',
	itemIndicator: '',
};

export const menu = {
	trigger: '',
	contextTrigger: '',
	positioner: '',
	indicator: '',
	content: 'card bg-surface-50-950 border border-surface-200-800 p-2 flex flex-col items-stretch gap-2 shadow-lg min-w-48',
	arrow: '[--arrow-size:--spacing(2)] [--arrow-background:var(--color-surface-50-950)]',
	arrowTip: '',
	itemGroup: '',
	itemGroupLabel: 'text-surface-600-400 text-xs px-2 py-1',
	item: ['flex justify-between items-center px-2 py-1 rounded cursor-pointer', 'data-highlighted:preset-tonal'],
	itemText: '',
	itemIndicator: '',
	separator: 'hr',
};

export const navigation = {
	root: [
		'bg-surface-100-900 overflow-x-hidden transition-[width] duration-200',
		// Bar
		'data-[layout=bar]:w-full data-[layout=bar]:p-2',
		// Rail
		'data-[layout=rail]:w-[100px] data-[layout=rail]:h-full data-[layout=rail]:overflow-y-hidden data-[layout=rail]:p-2 data-[layout=rail]:flex data-[layout=rail]:flex-col data-[layout=rail]:gap-4',
		// Sidebar
		'data-[layout=sidebar]:w-[280px] data-[layout=sidebar]:h-full data-[layout=sidebar]:overflow-y-auto data-[layout=sidebar]:p-4',
	],
	header: '',
	content: [
		// Rail
		'data-[layout=rail]:contents',
		// Sidebar
		'data-[layout=sidebar]:space-y-4',
	],
	group: [
		// Rail
		'data-[layout=rail]:contents',
		// Sidebar
		'data-[layout=sidebar]:flex flex-col gap-2',
	],
	label: 'text-xs text-surface-700-300',
	menu: [
		'flex-1 flex gap-2',
		// Bar
		'data-[layout=bar]:items-stretch',
		// Rail
		'data-[layout=rail]:flex-col data-[layout=rail]:justify-center',
		// Sidebar
		'data-[layout=sidebar]:flex-col data-[layout=sidebar]:items-stretch',
	],
	footer: '',
};

export const pagination = {
	root: 'inline-flex gap-2 p-2 rounded-container preset-outlined-surface-200-800 w-fit',
	firstTrigger: 'btn btn-sm preset-tonal',
	prevTrigger: 'btn btn-sm preset-tonal',
	item: 'btn btn-sm preset-tonal cursor-pointer select-none data-selected:preset-filled',
	ellipsis: 'btn btn-sm preset-tonal pointer-events-none',
	nextTrigger: 'btn btn-sm preset-tonal',
	lastTrigger: 'btn btn-sm preset-tonal',
};

export const popover = {
	anchor: '',
	trigger: '',
	positioner: '',
	content: '',
	arrow: '',
	arrowTip: '',
	title: '',
	description: '',
	closeTrigger: '',
};

export const progress = {
	root: [
		'flex flex-col gap-2',
		// Horizontal Orientation
		'data-[orientation=horizontal]:w-full',
		// Vertical Orientation
		'data-[orientation=vertical]:items-center',
	],
	label: 'whitespace-nowrap',
	valueText: '',

	// Linear
	track: [
		'bg-surface-200-800 rounded-base overflow-hidden',
		// Horizontal Orientation
		'data-[orientation=horizontal]:w-full data-[orientation=horizontal]:h-2',
		// Vertical Orientation
		'data-[orientation=vertical]:w-2 data-[orientation=vertical]:h-[100px] data-[orientation=vertical]:flex data-[orientation=vertical]:flex-col-reverse',
	],
	range: [
		'h-full bg-surface-950-50 rounded-base',
		// Horizontal Orientation
		'data-[orientation=horizontal]:transition-[width] data-[orientation=horizontal]:data-[state=indeterminate]:animate-progress-linear-indeterminate-horizontal',
		// Vertical Orientation
		'data-[orientation=vertical]:transition-[height] data-[orientation=vertical]:data-[state=indeterminate]:animate-progress-linear-indeterminate-vertical',
	],

	// Circular
	circle: '[--size:--spacing(24)] [--thickness:calc(var(--size)/12)]',
	circleTrack: 'stroke-surface-200-800',
	circleRange: [
		'stroke-primary-500 transition-[stroke-dashoffset] ease-in-out',
		'data-[state=indeterminate]:animate-progress-circular-indeterminate',
	],
};

export const ratingGroup = {
	root: 'flex flex-col gap-2',
	label: 'label-text',
	control: 'flex gap-2 data-disabled:cursor-not-allowed data-disabled:opacity-50',
	item: '',
	hiddenInput: '',
};

export const segmentedControl = {
	root: 'flex flex-col gap-2 not-skb:group',
	label: 'label-text',
	control: [
		'inline-flex preset-outlined-surface-200-800 p-2 gap-2 rounded',
		'group-data-[orientation=horizontal]:flex-row group-data-[orientation=vertical]:flex-col',
	],
	indicator: 'top-(--top) left-(--left) w-(--width) h-(--height) preset-filled rounded data-disabled:opacity-50',
	item: [
		'btn cursor-pointer z-10 flex-1',
		'data-focus-visible:outline-2 data-focus-visible:outline-offset-1 data-focus-visible:outline-surface-950-50',
		'data-readonly:pointer-events-none',
		'data-disabled:pointer-events-none data-disabled:opacity-50',
	],
	itemText: ['transition-colors', 'data-[state=checked]:text-surface-contrast-950 data-[state=checked]:dark:text-surface-contrast-50'],
	itemHiddenInput: '',
};

export const slider = {
	root: 'w-full flex flex-col gap-2',
	label: 'label-text',
	valueText: '',
	control: ['flex items-center', 'data-disabled:opacity-50'],
	track: 'bg-surface-200-800 rounded-base h-2 overflow-hidden flex-1',
	range: 'bg-surface-950-50 h-full',
	thumb: [
		'size-5 bg-surface-50-950 ring-inset ring-2 ring-surface-950-50 rounded-full',
		'focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-surface-950-50',
	],
	hiddenInput: '',
	markerGroup: '',
	marker: 'text-xs text-surface-600-400',
};

export const steps = {
	root: ['data-[orientation=horizontal]:space-y-4', 'data-[orientation=vertical]:flex data-[orientation=vertical]:space-x-4'],
	list: [
		'flex gap-2',
		'data-[orientation=horizontal]:items-center',
		'data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start',
	],
	item: [
		'flex gap-2 grow last:flex-initial',
		'data-[orientation=horizontal]:items-center',
		'data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start',
	],
	trigger: 'flex items-center gap-1',
	indicator: [
		'size-8 rounded-full content-center',
		'not-data-complete:not-data-current:preset-outlined-surface-200-800',
		'data-complete:preset-filled-primary-500',
		'data-current:preset-outlined-primary-500',
	],
	separator: [
		'h-0 border-surface-200-800 grow',
		'data-complete:border-primary-500',
		'data-[orientation=horizontal]:border-t',
		'data-[orientation=vertical]:border-s data-[orientation=vertical]:ms-4 data-[orientation=vertical]:min-h-4',
	],
	content: '',
	prevTrigger: '',
	nextTrigger: '',
};

const switch_ = {
	root: [
		'cursor-pointer data-disabled:cursor-not-allowed data-disabled:opacity-50 inline-flex gap-2 items-center rounded',
		'data-focus-visible:outline-2 data-focus-visible:outline-offset-1 data-focus-visible:outline-surface-950-50',
	],
	control: [
		'preset-filled-surface-200-800 h-6 w-10 p-0.5 rounded-full flex justify-start',
		'data-[state=checked]:preset-filled-primary-500',
	],
	thumb: [
		'grid justify-center items-center h-full aspect-square rounded-full',
		'bg-surface-50 text-surface-contrast-50 fill-surface-contrast-50',
		'transition-transform duration-100 data-[state=checked]:translate-x-4 rtl:data-[state=checked]:-translate-x-4',
	],
	label: 'label-text',
	hiddenInput: '',
};

export { switch_ as switch };

export const tabs = {
	root: 'w-full flex data-[orientation=horizontal]:flex-col data-[orientation=vertical]:flex-row',
	list: [
		'relative flex gap-2 border-surface-200-800',
		'data-[orientation=horizontal]:pb-2 data-[orientation=horizontal]:mb-4 data-[orientation=horizontal]:flex-row data-[orientation=horizontal]:border-b',
		'data-[orientation=vertical]:pe-2 data-[orientation=vertical]:me-4 data-[orientation=vertical]:flex-col data-[orientation=vertical]:border-e',
	],
	trigger: ['btn hover:preset-tonal-primary', 'data-disabled:opacity-50'],
	indicator: [
		'bg-surface-950-50',
		'data-[orientation=horizontal]:w-(--width) data-[orientation=horizontal]:h-0.5 data-[orientation=horizontal]:bottom-0',
		'data-[orientation=vertical]:w-0.5 data-[orientation=vertical]:h-(--height) data-[orientation=vertical]:end-0',
	],
	content: '',
};

export const tagsInput = {
	root: 'w-full space-y-2',
	label: 'label-text',
	control: 'input flex flex-wrap gap-2 p-2',
	item: '',
	itemPreview: ['chip flex gap-0 p-0 preset-filled hover:brightness-100 w-fit', 'data-highlighted:ring data-highlighted:ring-primary-500'],
	itemText: 'leading-none px-2 py-1',
	itemDeleteTrigger: 'hover:preset-tonal px-2 py-1',
	itemInput: 'input text-xs',
	input: 'input-ghost',
	clearTrigger: 'btn btn-sm preset-tonal hover:preset-filled-error-500',
	hiddenInput: '',
};

export const toast = {
	root: [
		'card p-3 w-full max-w-sm ring flex items-center gap-2',
		'preset-filled-surface-50-950 ring-surface-200-800',
		'data-[type=success]:preset-filled-success-500',
		'data-[type=warning]:preset-filled-warning-500',
		'data-[type=error]:preset-filled-error-500',
		// https://zagjs.com/components/toast#requirement
		'translate-x-(--x) translate-y-(--y) scale-(--scale) z-(--z-index) h-(--height) opacity-(--opacity) will-change-[translate,scale,opacity]',
		'transition duration-400 ease-[cubic-bezier(0.21,1.02,0.73,1)] data-[state=closed]:ease-[cubic-bezier(0.06,0.71,0.55,1)]',
	],
	group: 'w-[calc(100%-calc(var(--viewport-offset-left)+var(--viewport-offset-right)))]',
	message: 'flex-1',
	title: 'font-medium text-sm',
	description: 'text-sm',
	actionTrigger: 'btn preset-filled',
	closeTrigger: 'btn-icon hover:preset-tonal',
};

export const toggleGroup = {
	root: [
		'inline-flex preset-outlined-surface-200-800 divide-surface-200-800 overflow-hidden rounded-base',
		'data-[orientation=horizontal]:divide-x data-[orientation=vertical]:divide-y',
		'data-[orientation=horizontal]:flex-row data-[orientation=vertical]:flex-col',
	],
	item: [
		'flex justify-center items-center w-9 aspect-square hover:preset-tonal data-[state=on]:preset-filled',
		'data-focus-visible:outline-2 data-focus-visible:outline-offset-1 data-focus-visible:outline-surface-950-50',
		'data-readonly:pointer-events-none',
		'data-disabled:pointer-events-none data-disabled:opacity-50',
	],
};

export const tooltip = {
	trigger: '',
	positioner: '',
	content: '',
	arrow: '',
	arrowTip: '',
};

export const treeView = {
	root: 'w-full flex flex-col gap-2 items-start select-none',
	tree: 'space-y-1',
	label: 'label-text',
	item: [
		'flex items-center gap-2 pe-4 py-2 rounded-base',
		// Hover and selection states
		'hover:preset-tonal data-selected:preset-filled',
		// Left side overlap effect
		'ps-[calc(var(--depth)*var(--spacing)*6+var(--spacing)*4)]',
	],
	branch: 'space-y-1',
	branchControl: [
		'flex items-center gap-2 pe-4 py-2 rounded-base',
		// Hover and selection states
		'hover:preset-tonal data-selected:preset-filled',
		// Left side overlap effect
		'ps-[calc(var(--depth)*var(--spacing)*6-var(--spacing)*2)]',
	],
	branchIndicator: 'data-[state=open]:rotate-90',
	branchText: 'flex items-center gap-2',
	branchContent: 'space-y-1 relative',
	branchIndentGuide: [
		'absolute bg-surface-500/50 w-0.5 h-full rounded-base',
		// Left side overlap effect
		'left-[calc(var(--depth)*var(--spacing)*6)] -translate-x-1/2',
	],
};
