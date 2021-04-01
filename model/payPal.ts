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
import { PayPalDetails } from './payPalDetails';

/**
* A stored PayPal account.
*/
export class PayPal {
    /**
    * `payment-method`.
    */
    'type'?: PayPal.TypeEnum;
    /**
    * The unique ID of the payment method.
    */
    'id'?: string;
    /**
    * The state of the account tokenization. After the first call this will be set to `buyer_approval_pending` and the response will include an `approval_url`. The buyer needs to be redirected to this URL to authorize the future payments.
    */
    'status'?: PayPal.StatusEnum;
    /**
    * `paypal`.
    */
    'method'?: PayPal.MethodEnum;
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
    'details'?: PayPalDetails;
    /**
    * The environment this payment method has been stored for. This will be null of the payment method was not stored.
    */
    'environment'?: PayPal.EnvironmentEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "PayPal.TypeEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "PayPal.StatusEnum"
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "PayPal.MethodEnum"
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
            "type": "PayPalDetails"
        },
        {
            "name": "environment",
            "baseName": "environment",
            "type": "PayPal.EnvironmentEnum"
        }    ];

    static getAttributeTypeMap() {
        return PayPal.attributeTypeMap;
    }
}

export namespace PayPal {
    export enum TypeEnum {
        PaymentMethod = <any> 'payment-method'
    }
    export enum StatusEnum {
        Processing = <any> 'processing',
        ProcessingFailed = <any> 'processing_failed',
        BuyerApprovalPending = <any> 'buyer_approval_pending',
        BuyerApprovalDeclined = <any> 'buyer_approval_declined',
        BuyerApprovalTimedout = <any> 'buyer_approval_timedout',
        BuyerApproved = <any> 'buyer_approved',
        Stored = <any> 'stored',
        Used = <any> 'used'
    }
    export enum MethodEnum {
        Paypal = <any> 'paypal'
    }
    export enum EnvironmentEnum {
        Development = <any> 'development',
        Staging = <any> 'staging',
        Production = <any> 'production'
    }
}
