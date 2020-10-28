import { Component, Prop, h, Host } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
    tag: 'my-component',
    styleUrl: 'my-component.scss',
    shadow: true,
})
export class MyComponent {
    /**
     * The first name
     */
    @Prop() first: string;

    /**
     * The middle name
     */
    @Prop() middle: string;

    /**
     * The last name
     */
    @Prop() last: string;

    private getText(): string {
        return format(this.first, this.middle, this.last);
    }

    render() {
        return (
            <Host>
                <h2>My component</h2>
                <h3>{this.getText()}</h3>
            </Host>
        );
    }
}
