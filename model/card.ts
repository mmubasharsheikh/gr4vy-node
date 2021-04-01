/**
 * Gr4vy API (Beta)
 * Welcome to the Gr4vy API reference documentation. Our API is still very much a work in product and subject to change.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: support@gr4vy.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { Buyer } from './buyer';
import { CardDetails } from './cardDetails';

/**
* A stored card.
*/
export class Card {
    /**
    * `payment-method`.
    */
    'type'?: Card.TypeEnum;
    /**
    * The unique ID of the payment method.
    */
    'id'?: string;
    /**
    * The state of the card tokenization.
    */
    'status'?: Card.StatusEnum;
    /**
    * `card`.
    */
    'method'?: Card.MethodEnum;
    /**
    * The date and time when this payment method was first created in our system.
    */
    'createdAt'?: Date;
    /**
    * The date and time when this payment method was last updated in our system.
    */
    'updatedAt'?: Date;
    /**
    * An external identifier that can be used to match the payment method against your own records.
    */
    'externalIdentifier'?: string | null;
    /**
    * The optional buyer for which this payment method has been stored.
    */
    'buyer'?: Buyer | null;
    'details'?: CardDetails;
    /**
    * The environment this payment method has been stored for. This will be null of the payment method was not stored.
    */
    'environment'?: Card.EnvironmentEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "Card.TypeEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "Card.StatusEnum"
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "Card.MethodEnum"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "Date"
        },
        {
            "name": "externalIdentifier",
            "baseName": "external_identifier",
            "type": "string"
        },
        {
            "name": "buyer",
            "baseName": "buyer",
            "type": "Buyer"
        },
        {
            "name": "details",
            "baseName": "details",
            "type": "CardDetails"
        },
        {
            "name": "environment",
            "baseName": "environment",
            "type": "Card.EnvironmentEnum"
        }    ];

    static getAttributeTypeMap() {
        return Card.attributeTypeMap;
    }
}

export namespace Card {
    export enum TypeEnum {
        PaymentMethod = <any> 'payment-method'
    }
    export enum StatusEnum {
        Processing = <any> 'processing',
        ProcessingFailed = <any> 'processing_failed',
        Stored = <any> 'stored',
        Used = <any> 'used'
    }
    export enum MethodEnum {
        Card = <any> 'card'
    }
    export enum EnvironmentEnum {
        Development = <any> 'development',
        Staging = <any> 'staging',
        Production = <any> 'production'
    }
}
