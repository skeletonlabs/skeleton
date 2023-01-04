// Background Design Tokens
// Generates a set of design tokens related to background styling
// Doc: https://www.skeleton.dev/elements/tokens

const settings = require('../settings.cjs');

module.exports = () => {
    const tokensObj = {};
    settings.colorNames.forEach(n => {
        // Background Color Pairings, ex: 50-900/900-50
        settings.colorPairings.forEach(p => {
            tokensObj[`.bg-${n}-${p.light}-${p.dark}-token`] = { 'background-color': `rgb(var(--color-${n}-${p.light}))` };
            tokensObj[`.dark .bg-${n}-${p.light}-${p.dark}-token`] = { 'background-color': `rgb(var(--color-${n}-${p.dark}))` };
        });
    });
    return tokensObj;
}