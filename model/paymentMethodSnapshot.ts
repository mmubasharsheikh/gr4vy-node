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
* Snapshot of a payment method, as used when embedded inside other resources.
*/
export class PaymentMethodSnapshot {
    /**
    * `payment-method`.
    */
    'type'?: PaymentMethodSnapshot.TypeEnum;
    /**
    * The unique ID of the payment method.
    */
    'id'?: string | null;
    /**
    * The type of this payment method.
    */
    'method'?: PaymentMethodSnapshot.MethodEnum;
    /**
    * An external identifier that can be used to match the payment method against your own records.
    */
    'externalIdentifier'?: string | null;
    /**
    * A label for the payment method. This can be the last 4 digits for a card, or the email address for an alternative payment method.
    */
    'label'?: string;
    /**
    * An additional label used to differentiate different sub-types of a payment method. Most notably this can include the type of card used in a transaction.
    */
    'scheme'?: string | null;
    /**
    * The expiration date for this payment method. This is mostly used by cards where the card might have an expiration date.
    */
    'expirationDate'?: string | null;
    /**
    * The optional URL that the buyer needs to be redirected to to further authorize their payment.
    */
    'approvalUrl'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "PaymentMethodSnapshot.TypeEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "PaymentMethodSnapshot.MethodEnum"
        },
        {
            "name": "externalIdentifier",
            "baseName": "external_identifier",
            "type": "string"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string"
        },
        {
            "name": "scheme",
            "baseName": "scheme",
            "type": "string"
        },
        {
            "name": "expirationDate",
            "baseName": "expiration_date",
            "type": "string"
        },
        {
            "name": "approvalUrl",
            "baseName": "approval_url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PaymentMethodSnapshot.attributeTypeMap;
    }
}

export namespace PaymentMethodSnapshot {
    export enum TypeEnum {
        PaymentMethod = <any> 'payment-method'
    }
    export enum MethodEnum {
        Card = <any> 'card',
        Paypal = <any> 'paypal',
        Banked = <any> 'banked'
    }
}
