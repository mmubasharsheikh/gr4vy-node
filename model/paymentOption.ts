/**
 * Gr4vy API (Beta)
 * Welcome to the Gr4vy API reference documentation. Our API is still very much a work in product and subject to change.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: code@gr4vy.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
* An available payment option for a locale.
*/
export class PaymentOption {
    /**
    * `payment-option`.
    */
    'type'?: PaymentOption.TypeEnum;
    /**
    * The type of payment method that is available.
    */
    'method'?: PaymentOption.MethodEnum;
    /**
    * An icon to display for the payment option.
    */
    'iconUrl'?: string | null;
    /**
    * The mode of how the payment option should be displayed.
    */
    'mode'?: PaymentOption.ModeEnum;
    /**
    * A label that describes this payment option. This label is returned in the language defined by the `locale` query parameter. The label can be used to display a list of payment options to the buyer in their language.
    */
    'label'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "PaymentOption.TypeEnum"
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "PaymentOption.MethodEnum"
        },
        {
            "name": "iconUrl",
            "baseName": "icon_url",
            "type": "string"
        },
        {
            "name": "mode",
            "baseName": "mode",
            "type": "PaymentOption.ModeEnum"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PaymentOption.attributeTypeMap;
    }
}

export namespace PaymentOption {
    export enum TypeEnum {
        PaymentOption = <any> 'payment-option'
    }
    export enum MethodEnum {
        Card = <any> 'card',
        Paypal = <any> 'paypal',
        Banked = <any> 'banked'
    }
    export enum ModeEnum {
        Card = <any> 'card',
        Redirect = <any> 'redirect'
    }
}
