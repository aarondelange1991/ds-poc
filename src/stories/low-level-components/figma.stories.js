import { withDesign } from 'storybook-addon-designs';
import base from 'paths.macro';

const storyBase = base.split('/stories/').pop();

export default {
  title: `${storyBase}Figma`,
    component: 'my-component',
    decorators: [withDesign],
    argTypes: {
        first: { control: 'text', defaultValue: 'Aaron' },
        last: {
            control: { type: 'select', options: ['Delange', 'Ampe'] },
            defaultValue: 'Delange',
        },
    },
};

export const Default = ({ ...args }) => {
    const element = document.createElement('my-component');
    element.first = args.first;
    element.last = args.last;
    return element;
};
Default.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/TVEazG9FQUFBvfwvYpMZI2/Base-app?node-id=130%3A9',
    },
};
