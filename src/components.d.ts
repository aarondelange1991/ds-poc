/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface DsButton {
        "disabled": boolean;
        "label": string;
        "type": 'primary' | 'secondary';
    }
}
declare global {
    interface HTMLDsButtonElement extends Components.DsButton, HTMLStencilElement {
    }
    var HTMLDsButtonElement: {
        prototype: HTMLDsButtonElement;
        new (): HTMLDsButtonElement;
    };
    interface HTMLElementTagNameMap {
        "ds-button": HTMLDsButtonElement;
    }
}
declare namespace LocalJSX {
    interface DsButton {
        "disabled"?: boolean;
        "label"?: string;
        "onClicked"?: (event: CustomEvent<void>) => void;
        "type"?: 'primary' | 'secondary';
    }
    interface IntrinsicElements {
        "ds-button": DsButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ds-button": LocalJSX.DsButton & JSXBase.HTMLAttributes<HTMLDsButtonElement>;
        }
    }
}
