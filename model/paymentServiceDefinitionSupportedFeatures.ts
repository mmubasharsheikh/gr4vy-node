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
* Features supported by the payment definition.
*/
export class PaymentServiceDefinitionSupportedFeatures {
    /**
    * Supports [capturing](#operation/capture-transaction) authorized transactions.
    */
    'delayedCapture'?: boolean;
    /**
    * Supports passing decrypted digital wallet (e.g. Apple Pay) tokens to the underlying processor.
    */
    'networkTokens'?: boolean;
    /**
    * Supports [partially refunding](#operation/refund-transaction) captured transactions.
    */
    'partialRefunds'?: boolean;
    /**
    * Supports storing a payment method via tokenization.
    */
    'paymentMethodTokenization'?: boolean;
    /**
    * Supports toggling tokenization for a payment method on or off from the dashboard.
    */
    'paymentMethodTokenizationToggle'?: boolean;
    /**
    * Supports [refunding](#operation/refund-transaction) captured transactions.
    */
    'refunds'?: boolean;
    /**
    * Supports hosted 3-D Secure with a redirect.
    */
    'threeDSecureHosted'?: boolean;
    /**
    * Supports passing 3-D Secure data to the underlying processor.
    */
    'threeDSecurePassThrough'?: boolean;
    /**
    * Supports verifying the credentials entered while setting up the underlying processor. This is for internal use only.
    */
    'verifyCredentials'?: boolean;
    /**
    * Supports [voiding](#operation/void-transaction) authorized transactions.
    */
    '_void'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "delayedCapture",
            "baseName": "delayed_capture",
            "type": "boolean"
        },
        {
            "name": "networkTokens",
            "baseName": "network_tokens",
            "type": "boolean"
        },
        {
            "name": "partialRefunds",
            "baseName": "partial_refunds",
            "type": "boolean"
        },
        {
            "name": "paymentMethodTokenization",
            "baseName": "payment_method_tokenization",
            "type": "boolean"
        },
        {
            "name": "paymentMethodTokenizationToggle",
            "baseName": "payment_method_tokenization_toggle",
            "type": "boolean"
        },
        {
            "name": "refunds",
            "baseName": "refunds",
            "type": "boolean"
        },
        {
            "name": "threeDSecureHosted",
            "baseName": "three_d_secure_hosted",
            "type": "boolean"
        },
        {
            "name": "threeDSecurePassThrough",
            "baseName": "three_d_secure_pass_through",
            "type": "boolean"
        },
        {
            "name": "verifyCredentials",
            "baseName": "verify_credentials",
            "type": "boolean"
        },
        {
            "name": "_void",
            "baseName": "void",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return PaymentServiceDefinitionSupportedFeatures.attributeTypeMap;
    }
}

