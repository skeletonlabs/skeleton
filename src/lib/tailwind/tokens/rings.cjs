// Design Tokens: Rings
// Doc: https://www.skeleton.dev/elements/tokens

const settings = require('../settings.cjs');

module.exports = () => {
    const classes = {};
    settings.colorNames.forEach(n => {
        // Color Pairings
        // Example: .ring-primary-50-900-token | .ring-primary-900-50-token
        settings.colorPairings.forEach(p => {
            classes[`.ring-${n}-${p.light}-${p.dark}-token`] = {
                '--tw-ring-color': `rgb(var(--color-${n}-${p.light}) / 1`
            };
            classes[`.dark .ring-${n}-${p.light}-${p.dark}-token`] = {
                '--tw-ring-color': `rgb(var(--color-${n}-${p.dark}) / 1`
            };
        });
    });

    console.log(classes);

    return classes;
}