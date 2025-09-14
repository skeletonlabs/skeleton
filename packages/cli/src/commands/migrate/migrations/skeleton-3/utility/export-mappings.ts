interface Renamed {
	type: 'renamed';
	value: string;
}

interface Removed {
	type: 'removed';
}

const EXPORT_MAPPINGS: Record<
	string,
	{
		namedImport: Renamed | Removed;
		identifier: Renamed | Removed;
	}
> = {
	AccordionItem: {
		namedImport: {
			type: 'renamed',
			value: 'Accordion',
		},
		identifier: {
			type: 'renamed',
			value: 'Accordion.Item',
		},
	},
	AppShell: {
		namedImport: {
			type: 'removed',
		},
		identifier: {
			type: 'removed',
		},
	},
	Apollo: {
		namedImport: { type: 'removed' },
		identifier: { type: 'removed' },
	},
	AppRailAnchor: {
		namedImport: { type: 'removed' },
		identifier: { type: 'removed' },
	},
	Autocomplete: {
		namedImport: { type: 'removed' },
		identifier: { type: 'removed' },
	},
	BlueNight: {
		namedImport: { type: 'removed' },
		identifier: { type: 'removed' },
	},
	CodeBlock: {
		namedImport: { type: 'removed' },
		identifier: { type: 'removed' },
	},
	ConicGradient: {
		namedImport: { type: 'removed' },
		identifier: { type: 'removed' },
	},
	Drawer: {
		namedImport: { type: 'removed' },
		identifier: { type: 'removed' },
	},
	Emerald: {
		namedImport: { type: 'removed' },
		identifier: { type: 'removed' },
	},
	GreenFall: {
		namedImport: { type: 'removed' },
		identifier: { type: 'removed' },
	},
	LightSwitch: {
		namedImport: { type: 'removed' },
		identifier: { type: 'removed' },
	},
	ListBox: {
		namedImport: { type: 'removed' },
		identifier: { type: 'removed' },
	},
	ListBoxItem: {
		namedImport: { type: 'removed' },
		identifier: { type: 'removed' },
	},
	Modal: {
		namedImport: { type: 'removed' },
		identifier: { type: 'removed' },
	},
	Noir: {
		namedImport: { type: 'removed' },
		identifier: { type: 'removed' },
	},
	NoirLight: {
		namedImport: { type: 'removed' },
		identifier: { type: 'removed' },
	},
	RecursiveTreeView: {
		namedImport: { type: 'removed' },
		identifier: { type: 'removed' },
	},
	RecursiveTreeViewItem: {
		namedImport: { type: 'removed' },
		identifier: { type: 'removed' },
	},
	Rustic: {
		namedImport: { type: 'removed' },
		identifier: { type: 'removed' },
	},
	Step: {
		namedImport: { type: 'removed' },
		identifier: { type: 'removed' },
	},
	Stepper: {
		namedImport: { type: 'removed' },
		identifier: { type: 'removed' },
	},
	Summer84: {
		namedImport: { type: 'removed' },
		identifier: { type: 'removed' },
	},
	Table: {
		namedImport: { type: 'removed' },
		identifier: { type: 'removed' },
	},
	TableOfContents: {
		namedImport: { type: 'removed' },
		identifier: { type: 'removed' },
	},
	TreeView: {
		namedImport: { type: 'removed' },
		identifier: { type: 'removed' },
	},
	TreeViewItem: {
		namedImport: { type: 'removed' },
		identifier: { type: 'removed' },
	},
	XPro: {
		namedImport: { type: 'removed' },
		identifier: { type: 'removed' },
	},
	autoModeWatcher: {
		namedImport: { type: 'removed' },
		identifier: { type: 'removed' },
	},
	clipboard: {
		namedImport: { type: 'removed' },
		identifier: { type: 'removed' },
	},
	filter: {
		namedImport: { type: 'removed' },
		identifier: { type: 'removed' },
	},
	focusTrap: {
		namedImport: { type: 'removed' },
		identifier: { type: 'removed' },
	},
	getDrawerStore: {
		namedImport: { type: 'removed' },
		identifier: { type: 'removed' },
	},
	getModalStore: {
		namedImport: { type: 'removed' },
		identifier: { type: 'removed' },
	},
	getModeAutoPrefers: {
		namedImport: { type: 'removed' },
		identifier: { type: 'removed' },
	},
	getModeOsPrefers: {
		namedImport: { type: 'removed' },
		identifier: { type: 'removed' },
	},
	getModeUserPrefers: {
		namedImport: { type: 'removed' },
		identifier: { type: 'removed' },
	},
	getToastStore: {
		namedImport: { type: 'removed' },
		identifier: { type: 'removed' },
	},
	initializeStores: {
		namedImport: { type: 'removed' },
		identifier: { type: 'removed' },
	},
	localStorageStore: {
		namedImport: { type: 'removed' },
		identifier: { type: 'removed' },
	},
	modeCurrent: {
		namedImport: { type: 'removed' },
		identifier: { type: 'removed' },
	},
	modeOsPrefers: {
		namedImport: { type: 'removed' },
		identifier: { type: 'removed' },
	},
	modeUserPrefers: {
		namedImport: { type: 'removed' },
		identifier: { type: 'removed' },
	},
	popup: {
		namedImport: { type: 'removed' },
		identifier: { type: 'removed' },
	},
	prefersReducedMotionStore: {
		namedImport: { type: 'removed' },
		identifier: { type: 'removed' },
	},
	setInitialClassState: {
		namedImport: { type: 'removed' },
		identifier: { type: 'removed' },
	},
	setModeCurrent: {
		namedImport: { type: 'removed' },
		identifier: { type: 'removed' },
	},
	setModeUserPrefers: {
		namedImport: { type: 'removed' },
		identifier: { type: 'removed' },
	},
	storeHighlightJs: {
		namedImport: { type: 'removed' },
		identifier: { type: 'removed' },
	},
	storePopup: {
		namedImport: { type: 'removed' },
		identifier: { type: 'removed' },
	},
	tableMapperValues: {
		namedImport: { type: 'removed' },
		identifier: { type: 'removed' },
	},
	tableSourceMapper: {
		namedImport: { type: 'removed' },
		identifier: { type: 'removed' },
	},
	tableSourceValues: {
		namedImport: { type: 'removed' },
		identifier: { type: 'removed' },
	},
	tocCrawler: {
		namedImport: { type: 'removed' },
		identifier: { type: 'removed' },
	},
	tocStore: {
		namedImport: { type: 'removed' },
		identifier: { type: 'removed' },
	},
	AppRail: {
		namedImport: {
			type: 'renamed',
			value: 'Navigation',
		},
		identifier: {
			type: 'renamed',
			value: 'Navigation',
		},
	},
	AppRailTile: {
		namedImport: {
			type: 'renamed',
			value: 'Navigation',
		},
		identifier: {
			type: 'renamed',
			value: 'Navigation.Tile',
		},
	},
	FileButton: {
		namedImport: {
			type: 'renamed',
			value: 'FileUpload',
		},
		identifier: {
			type: 'renamed',
			value: 'FileUpload',
		},
	},
	FileDropzone: {
		namedImport: {
			type: 'renamed',
			value: 'FileUpload',
		},
		identifier: {
			type: 'renamed',
			value: 'FileUpload',
		},
	},
	InputChip: {
		namedImport: {
			type: 'renamed',
			value: 'TagsInput',
		},
		identifier: {
			type: 'renamed',
			value: 'TagsInput',
		},
	},
	Paginator: {
		namedImport: {
			type: 'renamed',
			value: 'Pagination',
		},
		identifier: {
			type: 'renamed',
			value: 'Pagination',
		},
	},
	ProgressBar: {
		namedImport: {
			type: 'renamed',
			value: 'Progress',
		},
		identifier: {
			type: 'renamed',
			value: 'Progress',
		},
	},
	ProgressRadial: {
		namedImport: {
			type: 'renamed',
			value: 'ProgressRing',
		},
		identifier: {
			type: 'renamed',
			value: 'ProgressRing',
		},
	},
	RadioGroup: {
		namedImport: {
			type: 'renamed',
			value: 'Segment',
		},
		identifier: {
			type: 'renamed',
			value: 'Segment',
		},
	},
	RadioItem: {
		namedImport: {
			type: 'renamed',
			value: 'Segment',
		},
		identifier: {
			type: 'renamed',
			value: 'Segment.Item',
		},
	},
	RangeSlider: {
		namedImport: {
			type: 'renamed',
			value: 'Slider',
		},
		identifier: {
			type: 'renamed',
			value: 'Slider',
		},
	},
	Ratings: {
		namedImport: {
			type: 'renamed',
			value: 'Rating',
		},
		identifier: {
			type: 'renamed',
			value: 'Rating',
		},
	},
	SlideToggle: {
		namedImport: {
			type: 'renamed',
			value: 'Switch',
		},
		identifier: {
			type: 'renamed',
			value: 'Switch',
		},
	},
	TabAnchor: {
		namedImport: {
			type: 'renamed',
			value: 'Tabs',
		},
		identifier: {
			type: 'renamed',
			value: 'Tabs.Control',
		},
	},
	TabGroup: {
		namedImport: {
			type: 'renamed',
			value: 'Tabs',
		},
		identifier: {
			type: 'renamed',
			value: 'Tabs',
		},
	},
	Toast: {
		namedImport: {
			type: 'renamed',
			value: 'ToastProvider',
		},
		identifier: {
			type: 'renamed',
			value: 'ToastProvider',
		},
	},
};

export { EXPORT_MAPPINGS };
