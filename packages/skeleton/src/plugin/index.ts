import plugin from 'tailwindcss/plugin.js';
import postcssJs from 'postcss-js';
import { coreConfig, coreUtilities, getSkeletonClasses } from './core.js';
import { prefixSelector } from './prefixSelector.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';
import type { Theme } from './themes/index.js';
import type { ConfigOptions } from './types.js';

const skeleton = plugin.withOptions<ConfigOptions>(
  // Plugin Creator
  (options) => {
    return ({ addBase, addComponents, addUtilities }) => {
      const { components, base } = getSkeletonClasses();
      const baseStyles: CSSRuleObject = {};
      let componentStyles = components;

      // Base styles configuration
      if (options?.base !== false) {
        addBase(base);
      }

      // Theme configuration
      options?.themes?.forEach((theme) => {
        baseStyles[`:root [data-theme='${theme.name}']`] = theme.properties;
      });

      // Prefix component classes
      if (options?.prefix) {
        const prefix = options?.prefix;
        const root = postcssJs.parse(components);
        root.walkRules((rule) => {
          rule.selector = prefixSelector(prefix, rule.selector);
        });

        componentStyles = postcssJs.objectify(root);
      }

      addBase(baseStyles);
      addUtilities(coreUtilities);
      addComponents(componentStyles, { respectPrefix: false });
    };
  },
  // Config
  () => {
    return { ...coreConfig };
  }
);

export { skeleton };
export type { ConfigOptions, Theme };
