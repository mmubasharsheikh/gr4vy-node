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
import { PaymentServiceDefinitionFields } from './paymentServiceDefinitionFields';

/**
* An available payment service that can be configured.
*/
export class PaymentServiceDefinition {
    /**
    * The ID of the payment service. This is the underlying provider followed by a dash followed by the payment method ID.
    */
    'id'?: string;
    /**
    * `payment-service-definition`.
    */
    'type'?: string;
    /**
    * The display name of this service.
    */
    'displayName'?: string;
    /**
    * The ID of the payment method that this services handles.
    */
    'method'?: PaymentServiceDefinition.MethodEnum;
    /**
    * A list of fields that need to be submitted when activating the payment. service.
    */
    'fields'?: Array<PaymentServiceDefinitionFields>;
    /**
    * A list of three-letter ISO currency codes that this service supports.
    */
    'supportedCurrencies'?: Array<string>;
    /**
    * A list of two-letter ISO country codes that this service supports.
    */
    'supportedCountries'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "displayName",
            "baseName": "display_name",
            "type": "string"
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "PaymentServiceDefinition.MethodEnum"
        },
        {
            "name": "fields",
            "baseName": "fields",
            "type": "Array<PaymentServiceDefinitionFields>"
        },
        {
            "name": "supportedCurrencies",
            "baseName": "supported_currencies",
            "type": "Array<string>"
        },
        {
            "name": "supportedCountries",
            "baseName": "supported_countries",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return PaymentServiceDefinition.attributeTypeMap;
    }
}

export namespace PaymentServiceDefinition {
    export enum MethodEnum {
        Card = <any> 'card',
        Paypal = <any> 'paypal',
        Banked = <any> 'banked'
    }
}
