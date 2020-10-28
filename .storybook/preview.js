import { defineCustomElements } from '../dist/esm/loader';

import '../styling/dist/ds-poc-styling.css';
import { sortEachDepth } from './sort-each-depth';
import { customViewports } from './viewports';

defineCustomElements();

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: customViewports,
    defaultViewport: 'xl',
  },
    options: {
        enableShortcuts: false,
        showRoots: true,
        storySort: sortEachDepth([
            [
                'foundation',
                'low-level-components',
                'mid-level-components',
                'compositions',
                '...',
            ],
        ]),
    },
};
