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
* Card details to use in a transaction or to register a new payment method.
*/
export class CardRequest {
    /**
    * `card`.
    */
    'method': CardRequest.MethodEnum;
    /**
    * The 15-16 digit number for this card as it can be found on the front of the card.
    */
    'number': string;
    /**
    * The expiration date of the card, formatted `MM/YY`.
    */
    'expirationDate': string;
    /**
    * The 3 or 4 digit security code often found on the card. This often referred to as the CVV or CVD.
    */
    'securityCode': string;
    /**
    * An external identifier that can be used to match the card against your own records.
    */
    'externalIdentifier'?: string | null;
    /**
    * The ID of the buyer to associate this payment method to. If this field is provided then the `buyer_external_identifier` field needs to be unset.
    */
    'buyerId'?: string;
    /**
    * The `external_identifier` of the buyer to associate this payment method to. If this field is provided then the `buyer_id` field needs to be unset.
    */
    'buyerExternalIdentifier'?: string;
    /**
    * Defines the environment to store this card for. Setting this to anything other than `production` will force Gr4vy to use the payment services configured for that environment.
    */
    'environment'?: CardRequest.EnvironmentEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "method",
            "baseName": "method",
            "type": "CardRequest.MethodEnum"
        },
        {
            "name": "number",
            "baseName": "number",
            "type": "string"
        },
        {
            "name": "expirationDate",
            "baseName": "expiration_date",
            "type": "string"
        },
        {
            "name": "securityCode",
            "baseName": "security_code",
            "type": "string"
        },
        {
            "name": "externalIdentifier",
            "baseName": "external_identifier",
            "type": "string"
        },
        {
            "name": "buyerId",
            "baseName": "buyer_id",
            "type": "string"
        },
        {
            "name": "buyerExternalIdentifier",
            "baseName": "buyer_external_identifier",
            "type": "string"
        },
        {
            "name": "environment",
            "baseName": "environment",
            "type": "CardRequest.EnvironmentEnum"
        }    ];

    static getAttributeTypeMap() {
        return CardRequest.attributeTypeMap;
    }
}

export namespace CardRequest {
    export enum MethodEnum {
        Card = <any> 'card'
    }
    export enum EnvironmentEnum {
        Development = <any> 'development',
        Staging = <any> 'staging',
        Production = <any> 'production'
    }
}
