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
import { BuyerSnapshot } from './buyerSnapshot';
import { CartItem } from './cartItem';
import { PaymentMethodSnapshot } from './paymentMethodSnapshot';
import { PaymentServiceSnapshot } from './paymentServiceSnapshot';
import { ShippingDetail } from './shippingDetail';
import { StatementDescriptor } from './statementDescriptor';
import { ThreeDSecureSummary } from './threeDSecureSummary';

/**
* A transaction record.
*/
export class Transaction {
    /**
    * The type of this resource. Is always `transaction`.
    */
    'type'?: Transaction.TypeEnum;
    /**
    * The unique identifier for this transaction.
    */
    'id'?: string;
    /**
    * The status of the transaction. The status may change over time as asynchronous processing events occur.
    */
    'status'?: Transaction.StatusEnum;
    /**
    * The original `intent` used when the transaction was [created](#operation/authorize-new-transaction).
    */
    'intent'?: Transaction.IntentEnum;
    /**
    * The authorized amount for this transaction. This can be more than the actual captured amount and part of this amount may be refunded.
    */
    'amount'?: number;
    /**
    * The captured amount for this transaction. This can be the total or a portion of the authorized amount.
    */
    'capturedAmount'?: number;
    /**
    * The refunded amount for this transaction. This can be the total or a portion of the captured amount.
    */
    'refundedAmount'?: number;
    /**
    * The currency code for this transaction.
    */
    'currency'?: string;
    /**
    * The 2-letter ISO code of the country of the transaction. This is used to filter the payment services that is used to process the transaction. 
    */
    'country'?: string | null;
    'paymentMethod'?: PaymentMethodSnapshot;
    'buyer'?: BuyerSnapshot;
    /**
    * The date and time when this transaction was created in our system.
    */
    'createdAt'?: Date;
    /**
    * An external identifier that can be used to match the transaction against your own records.
    */
    'externalIdentifier'?: string | null;
    /**
    * Defines when the transaction was last updated.
    */
    'updatedAt'?: Date;
    'paymentService'?: PaymentServiceSnapshot;
    /**
    * Indicates whether the transaction was initiated by the merchant (true) or customer (false).
    */
    'merchantInitiated'?: boolean;
    /**
    * The source of the transaction. Defaults to `ecommerce`.
    */
    'paymentSource'?: Transaction.PaymentSourceEnum;
    /**
    * Indicates whether the transaction represents a subsequent payment coming from a setup recurring payment. Please note there are some restrictions on how this flag may be used.  The flag can only be `false` (or not set) when the transaction meets one of the following criteria:  * It is not `merchant_initiated`. * `payment_source` is set to `card_on_file`.  The flag can only be set to `true` when the transaction meets one of the following criteria:  * It is not `merchant_initiated`. * `payment_source` is set to `recurring` or `installment` and `merchant_initiated` is set to `true`. * `payment_source` is set to `card_on_file`.
    */
    'isSubsequentPayment'?: boolean;
    'statementDescriptor'?: StatementDescriptor;
    /**
    * An array of cart items that represents the line items of a transaction.
    */
    'cartItems'?: Array<CartItem>;
    /**
    * An identifier for the transaction used by the scheme itself, when available.  e.g. the Visa Transaction Identifier, or Mastercard Trace ID.
    */
    'schemeTransactionId'?: string | null;
    /**
    * This is the response code received from the payment service. This can be set to any value and is not standardized across different payment services.
    */
    'rawResponseCode'?: string | null;
    /**
    * This is the response description received from the payment service. This can be set to any value and is not standardized across different payment services.
    */
    'rawResponseDescription'?: string | null;
    /**
    * The response code received from the payment service for the Address Verification Check (AVS). This code is mapped to a standardized Gr4vy AVS response code.  - `no_match` - neither address or postal code match - `match` - both address and postal code match - `partial_match_address` - address matches but postal code does not - `partial_match_postcode` - postal code matches but address does not - `unavailable ` - AVS is unavailable for card/country  The value of this field can be `null` if the payment service did not provide a response.
    */
    'avsResponseCode'?: Transaction.AvsResponseCodeEnum;
    /**
    * The response code received from the payment service for the Card Verification Value (CVV). This code is mapped to a standardized Gr4vy CVV response code.  - `no_match` - the CVV does not match the expected value - `match` - the CVV matches the expected value - `unavailable ` - CVV check unavailable for card our country - `not_provided ` - CVV not provided  The value of this field can be `null` if the payment service did not provide a response.
    */
    'cvvResponseCode'?: Transaction.CvvResponseCodeEnum;
    'method'?: Transaction.MethodEnum;
    /**
    * The payment service\'s unique ID for the transaction.
    */
    'paymentServiceTransactionId'?: string;
    /**
    * Additional information about the transaction stored as key-value pairs.
    */
    'metadata'?: { [key: string]: string; };
    'shippingDetails'?: ShippingDetail;
    'threeDSecure'?: ThreeDSecureSummary;
    /**
    * The date and time when this transaction was authorized in the payment service.  Don\'t use this field to determine whether the transaction was authorized. A `null` value doesn\'t necessarily imply that the transaction wasn\'t authorized, it can mean that the payment service doesn\'t provide this value, that it didn\'t provide it at the time the transaction was authorized or that the transaction was authorized before the introduction of this field.
    */
    'authorizedAt'?: Date | null;
    /**
    * The date and time when this transaction was captured in the payment service.  Don\'t use this field to determine whether the transaction was captured. A `null` value doesn\'t necessarily imply that the transaction wasn\'t captured, it can mean that the payment service doesn\'t provide this value, that it didn\'t provide it at the time the transaction was captured or that the transaction was captured before the introduction of this field.
    */
    'capturedAt'?: Date | null;
    /**
    * The date and time when this transaction was voided in the payment service.  Don\'t use this field to determine whether the transaction was voided. A `null` value doesn\'t necessarily imply that the transaction wasn\'t voided, it can mean that the payment service doesn\'t provide this value, that it didn\'t provide it at the time the transaction was voided or that the transaction was voided before the introduction of this field.
    */
    'voidedAt'?: Date | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "Transaction.TypeEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "Transaction.StatusEnum"
        },
        {
            "name": "intent",
            "baseName": "intent",
            "type": "Transaction.IntentEnum"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "capturedAmount",
            "baseName": "captured_amount",
            "type": "number"
        },
        {
            "name": "refundedAmount",
            "baseName": "refunded_amount",
            "type": "number"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "paymentMethod",
            "baseName": "payment_method",
            "type": "PaymentMethodSnapshot"
        },
        {
            "name": "buyer",
            "baseName": "buyer",
            "type": "BuyerSnapshot"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date"
        },
        {
            "name": "externalIdentifier",
            "baseName": "external_identifier",
            "type": "string"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "Date"
        },
        {
            "name": "paymentService",
            "baseName": "payment_service",
            "type": "PaymentServiceSnapshot"
        },
        {
            "name": "merchantInitiated",
            "baseName": "merchant_initiated",
            "type": "boolean"
        },
        {
            "name": "paymentSource",
            "baseName": "payment_source",
            "type": "Transaction.PaymentSourceEnum"
        },
        {
            "name": "isSubsequentPayment",
            "baseName": "is_subsequent_payment",
            "type": "boolean"
        },
        {
            "name": "statementDescriptor",
            "baseName": "statement_descriptor",
            "type": "StatementDescriptor"
        },
        {
            "name": "cartItems",
            "baseName": "cart_items",
            "type": "Array<CartItem>"
        },
        {
            "name": "schemeTransactionId",
            "baseName": "scheme_transaction_id",
            "type": "string"
        },
        {
            "name": "rawResponseCode",
            "baseName": "raw_response_code",
            "type": "string"
        },
        {
            "name": "rawResponseDescription",
            "baseName": "raw_response_description",
            "type": "string"
        },
        {
            "name": "avsResponseCode",
            "baseName": "avs_response_code",
            "type": "Transaction.AvsResponseCodeEnum"
        },
        {
            "name": "cvvResponseCode",
            "baseName": "cvv_response_code",
            "type": "Transaction.CvvResponseCodeEnum"
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "Transaction.MethodEnum"
        },
        {
            "name": "paymentServiceTransactionId",
            "baseName": "payment_service_transaction_id",
            "type": "string"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "shippingDetails",
            "baseName": "shipping_details",
            "type": "ShippingDetail"
        },
        {
            "name": "threeDSecure",
            "baseName": "three_d_secure",
            "type": "ThreeDSecureSummary"
        },
        {
            "name": "authorizedAt",
            "baseName": "authorized_at",
            "type": "Date"
        },
        {
            "name": "capturedAt",
            "baseName": "captured_at",
            "type": "Date"
        },
        {
            "name": "voidedAt",
            "baseName": "voided_at",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return Transaction.attributeTypeMap;
    }
}

export namespace Transaction {
    export enum TypeEnum {
        Transaction = <any> 'transaction'
    }
    export enum StatusEnum {
        Processing = <any> 'processing',
        BuyerApprovalPending = <any> 'buyer_approval_pending',
        AuthorizationSucceeded = <any> 'authorization_succeeded',
        AuthorizationFailed = <any> 'authorization_failed',
        AuthorizationDeclined = <any> 'authorization_declined',
        CapturePending = <any> 'capture_pending',
        CaptureSucceeded = <any> 'capture_succeeded',
        AuthorizationVoidPending = <any> 'authorization_void_pending',
        AuthorizationVoided = <any> 'authorization_voided'
    }
    export enum IntentEnum {
        Authorize = <any> 'authorize',
        Capture = <any> 'capture'
    }
    export enum PaymentSourceEnum {
        Ecommerce = <any> 'ecommerce',
        Moto = <any> 'moto',
        Recurring = <any> 'recurring',
        Installment = <any> 'installment',
        CardOnFile = <any> 'card_on_file'
    }
    export enum AvsResponseCodeEnum {
        NoMatch = <any> 'no_match',
        Match = <any> 'match',
        PartialMatchAddress = <any> 'partial_match_address',
        PartialMatchPostcode = <any> 'partial_match_postcode',
        Unavailable = <any> 'unavailable'
    }
    export enum CvvResponseCodeEnum {
        NoMatch = <any> 'no_match',
        Match = <any> 'match',
        Unavailable = <any> 'unavailable',
        NotProvided = <any> 'not_provided'
    }
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
