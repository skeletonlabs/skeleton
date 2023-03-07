// Form Field Settings

export const fieldSettings: any = {
	inputs: [
		{ title: 'Input (text)', type: 'text', placeholder: 'input text' },
		{ title: 'Input (readonly)', type: 'text', placeholder: 'input readonly', readonly: true, tabindex: '-1' },
		{ title: 'Input (disabled)', type: 'text', placeholder: 'input disabled', disabled: true },
		{ title: 'Input (email)', type: 'email', placeholder: 'john@example.com', autocomplete: 'email' },
		{ title: 'Input (email, multiple)', type: 'email', multiple: true, placeholder: 'john@example.com, susy@example.com' },
		{ title: 'Input (password)', type: 'password', placeholder: 'password' },
		{ title: 'Input (search)', type: 'search', placeholder: 'Search...' },
		{ title: 'Input (date)', type: 'date' },
		{ title: 'Input (datetime-local)', type: 'datetime-local' },
		{ title: 'Input (month)', type: 'month' },
		{ title: 'Input (number)', type: 'number' },
		{ title: 'Input (time)', type: 'time' },
		{ title: 'Input (week)', type: 'week' },
		{ title: 'Input (tel)', type: 'tel', multiple: true, placeholder: 'john@example.com' },
		{ title: 'Input (url)', type: 'url', multiple: true, placeholder: 'john@example.com' }
	]
};
