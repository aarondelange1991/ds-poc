import base from 'paths.macro';

const storyBase = base.split('/stories/').pop();

export default {
    title: `${storyBase}Grid`,
    decorators: [],
};

// https://github.com/storybookjs/storybook/issues/729

export const Default = () => '';

export const ContainerPage = () => `
<div class="container-page h-screen border border-primary">
    <div class="bg-secondary"></div>
    <div class="bg-secondary"></div>
    <div class="bg-secondary"></div>
    <div class="bg-secondary"></div>
    <div class="bg-secondary"></div>
    <div class="bg-secondary"></div>
    <div class="bg-secondary"></div>
    <div class="bg-secondary"></div>
    <div class="bg-secondary"></div>
    <div class="bg-secondary"></div>
    <div class="bg-secondary"></div>
    <div class="bg-secondary"></div>
</div>
`;
Default.story = {
    parameters: {
        cssresources: [
            {
                id: 'foo',
                code: `<style>${require('!to-string-loader!css-loader!../../../styling/dist/ds-poc-styling.css')}</style>`,
                picked: true,
            },
        ],
    },
};

export const ContainerBoxed = () => `
<div class="container-boxed h-screen border border-primary">
    <div class="bg-secondary"></div>
    <div class="bg-secondary"></div>
    <div class="bg-secondary"></div>
    <div class="bg-secondary"></div>
    <div class="bg-secondary"></div>
    <div class="bg-secondary"></div>
    <div class="bg-secondary"></div>
    <div class="bg-secondary"></div>
    <div class="bg-secondary"></div>
    <div class="bg-secondary"></div>
    <div class="bg-secondary"></div>
    <div class="bg-secondary"></div>
</div>
`;
Default.story = {
    parameters: {
        cssresources: [
            {
                id: 'foo',
                code: `<style>${require('!to-string-loader!css-loader!../../../styling/dist/ds-poc-styling.css')}</style>`,
                picked: true,
            },
        ],
    },
};
