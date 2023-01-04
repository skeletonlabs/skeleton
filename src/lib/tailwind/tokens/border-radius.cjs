// Design Tokens: Border Radius
// Doc: https://www.skeleton.dev/elements/tokens

// const settings = require('../settings.cjs');

module.exports = () => {
    return {
        // Base
        '.rounded-token': { 'border-radius': 'var(--theme-rounded-base)' },
        '.rounded-tl-token': { 'border-radius': 'var(--theme-rounded-base)' },
        '.rounded-tr-token': { 'border-radius': 'var(--theme-rounded-base)' },
        '.rounded-bl-token': { 'border-radius': 'var(--theme-rounded-base)' },
        '.rounded-br-token': { 'border-radius': 'var(--theme-rounded-base)' },
        // Container
        '.rounded-container-token': { 'border-radius': 'var(--theme-rounded-container)' },
        '.rounded-tl-container-token': { 'border-radius': 'var(--theme-rounded-container)' },
        '.rounded-tr-container-token': { 'border-radius': 'var(--theme-rounded-container)' },
        '.rounded-bl-container-token': { 'border-radius': 'var(--theme-rounded-container)' },
        '.rounded-br-container-token': { 'border-radius': 'var(--theme-rounded-container)' },
    };
}