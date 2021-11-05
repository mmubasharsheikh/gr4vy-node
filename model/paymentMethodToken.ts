/**
 * Gr4vy API
 * Welcome to the Gr4vy API reference documentation. Our API is still very much a work in product and subject to change.
 *
 * The version of the OpenAPI document: 1.1.0-beta
 * Contact: code@gr4vy.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { PaymentServiceSnapshot } from './paymentServiceSnapshot';

/**
* A token for a payment method.
*/
export class PaymentMethodToken {
    /**
    * `payment-method-token`.
    */
    'type'?: PaymentMethodToken.TypeEnum;
    /**
    * The external ID of this payment method as it has been registered with the payment service, which can be used directly in combination with the `token` without the need to go through Gr4vy for a transaction.  In some cases this is a different value to the `token` while in others this value is identical. Please see the documentation for the payment service for more details.
    */
    'id'?: string;
    /**
    * The token of this payment method as it has been registered with the payment service, which can be used directly in combination with the `id` without the need to go through Gr4vy for a transaction.  In some cases this is a different value to the `id` while in others this value is identical. Please see the documentation for the payment service for more details.
    */
    'token'?: string;
    'paymentService'?: PaymentServiceSnapshot;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "PaymentMethodToken.TypeEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "token",
            "baseName": "token",
            "type": "string"
        },
        {
            "name": "paymentService",
            "baseName": "payment_service",
            "type": "PaymentServiceSnapshot"
        }    ];

    static getAttributeTypeMap() {
        return PaymentMethodToken.attributeTypeMap;
    }
}

export namespace PaymentMethodToken {
    export enum TypeEnum {
        PaymentMethodToken = <any> 'payment-method-token'
    }
}
