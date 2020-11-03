import { Event, Component, Host, h, Prop, EventEmitter } from '@stencil/core';

@Component({
    tag: 'ds-button',
    styleUrl: 'ds-button.scss',
    shadow: true,
})
export class DsButton {
    @Prop() type: 'primary' | 'secondary' = 'primary';

    @Prop() label: string;

    @Prop() disabled: boolean = false;

    @Event() clicked: EventEmitter<void>;

    onClicked() {
        if (!this.disabled) {
            this.clicked.emit();
        }
    }

    render() {
        return (
            <Host>
                <div
                    class={{
                        'button-container': true,
                        [`button-container-${this.type}`]: !!this.type,
                        'button-container-disabled': this.disabled,
                    }}
                    onClick={_ => this.onClicked()}
                >
                    {this.label}
                </div>
            </Host>
        );
    }
}
