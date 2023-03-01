// Design Tokens: Border Radius
// Doc: https://www.skeleton.dev/docs/tokens

// const settings = require('../settings.cjs');

module.exports = () => {
	return {
		// Base
		'.rounded-token': { 'border-radius': 'var(--theme-rounded-base)' },
		'.rounded-tl-token': { 'border-top-left-radius': 'var(--theme-rounded-base)' },
		'.rounded-tr-token': { 'border-top-right-radius': 'var(--theme-rounded-base)' },
		'.rounded-bl-token': { 'border-bottom-left-radius': 'var(--theme-rounded-base)' },
		'.rounded-br-token': { 'border-bottom-right-radius': 'var(--theme-rounded-base)' },
		// Container
		'.rounded-container-token': { 'border-radius': 'var(--theme-rounded-container)' },
		'.rounded-tl-container-token': { 'border-top-left-radius': 'var(--theme-rounded-container)' },
		'.rounded-tr-container-token': { 'border-top-right-radius': 'var(--theme-rounded-container)' },
		'.rounded-bl-container-token': { 'border-bottom-left-radius': 'var(--theme-rounded-container)' },
		'.rounded-br-container-token': { 'border-bottom-right-radius': 'var(--theme-rounded-container)' }
	};
};
