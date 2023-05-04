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

/**
* Payment method details to use in a transaction or to register a new payment method.
*/
export class TransactionPaymentMethodRequest {
    /**
    * The method to use for this request.
    */
    'method': TransactionPaymentMethodRequest.MethodEnum;
    /**
    * The 13-19 digit number for this credit card as it can be found on the front of the card.
    */
    'number'?: string;
    /**
    * The expiration date of the card, formatted `MM/YY`. If a card has been previously stored with us this value is optional.
    */
    'expirationDate'?: string;
    /**
    * The 3 or 4 digit security code often found on the card. This often referred to as the CVV or CVD.
    */
    'securityCode'?: string;
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
    * The redirect URL to redirect a buyer to after they have authorized their transaction or payment method. This only applies to payment methods that require buyer approval.
    */
    'redirectUrl'?: string;
    /**
    * An identifier for a previously vaulted payment method. This id can represent any type of payment method.
    */
    'id'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "method",
            "baseName": "method",
            "type": "TransactionPaymentMethodRequest.MethodEnum"
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
            "name": "redirectUrl",
            "baseName": "redirect_url",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TransactionPaymentMethodRequest.attributeTypeMap;
    }
}

export namespace TransactionPaymentMethodRequest {
    export enum MethodEnum {
        Afterpay = <any> 'afterpay',
        Applepay = <any> 'applepay',
        Banked = <any> 'banked',
        Bitpay = <any> 'bitpay',
        Boleto = <any> 'boleto',
        Card = <any> 'card',
        Clearpay = <any> 'clearpay',
        Dana = <any> 'dana',
        Fortumo = <any> 'fortumo',
        Gcash = <any> 'gcash',
        Gocardless = <any> 'gocardless',
        Googlepay = <any> 'googlepay',
        Grabpay = <any> 'grabpay',
        Klarna = <any> 'klarna',
        Ovo = <any> 'ovo',
        Paymaya = <any> 'paymaya',
        Paypal = <any> 'paypal',
        Pix = <any> 'pix',
        Rabbitlinepay = <any> 'rabbitlinepay',
        Scalapay = <any> 'scalapay',
        Shopeepay = <any> 'shopeepay',
        Stripedd = <any> 'stripedd',
        Truemoney = <any> 'truemoney',
        Trustly = <any> 'trustly',
        Zippay = <any> 'zippay'
    }
}
