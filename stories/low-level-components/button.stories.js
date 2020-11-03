import { withDesign } from 'storybook-addon-designs';
import base from 'paths.macro';
import { withActions } from '@storybook/addon-actions';

const storyBase = base.split('/stories/').pop();

export default {
    title: `${storyBase}Button`,
    component: 'ds-button',
    decorators: [withDesign, withActions('clicked')],
    argTypes: {
        label: { control: 'text', defaultValue: 'Save' },
        type: {
            control: { type: 'select', options: ['primary', 'secondary'] },
            defaultValue: 'primary',
        },
        disabled: {
            control: { type: 'boolean', defaultValue: true },
        },
    },
    parameters: {
        design: {
            type: 'figma',
            url:
                'https://www.figma.com/file/TVEazG9FQUFBvfwvYpMZI2/Base-app?node-id=130%3A9',
        },
    },
};

export const Default = ({ ...args }) => {
    const button = document.createElement('ds-button');
    button.label = args.label;
    button.type = args.type;
    button.disabled = args.disabled;
    return button;
};

export const Primary = ({ ...args }) => {
    const button = document.createElement('ds-button');
    button.label = args.label;
    button.type = 'primary';
    button.disabled = args.disabled;
    return button;
};

export const Secondary = ({ ...args }) => {
    const button = document.createElement('ds-button');
    button.label = args.label;
    button.type = 'secondary';
    button.disabled = args.disabled;
    return button;
};

export const Disabled = ({ ...args }) => {
    const button = document.createElement('ds-button');
    button.label = args.label;
    button.type = args.type;
    button.disabled = true;
    return button;
};
