import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
    plugins: [
        sass({
            injectGlobalPaths: ['src/global/ds-poc-styling.variables.scss'],
        }),
    ],
    namespace: 'ds-poc-components',
    outputTargets: [
        {
            type: 'dist',
            esmLoaderPath: '../loader',
        },
        {
            type: 'dist-custom-elements-bundle',
        },
        {
            type: 'docs-readme',
        },
        {
            type: 'www',
            serviceWorker: null, // disable service workers
        },
    ],
};
