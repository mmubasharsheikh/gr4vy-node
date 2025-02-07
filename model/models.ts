import localVarRequest from 'request';

export * from './aPIKeyPairCreate';
export * from './aPIKeyPairUpdate';
export * from './accountUpdaterInquirySummary';
export * from './accountUpdaterJob';
export * from './accountUpdaterJobCreate';
export * from './address';
export * from './antiFraudDecisionErrorEvent';
export * from './antiFraudDecisionErrorEventContext';
export * from './antiFraudDecisionEvent';
export * from './antiFraudDecisionEventContext';
export * from './antiFraudDecisionSkippedEvent';
export * from './antiFraudDecisionSkippedEventContext';
export * from './antiFraudServiceCreate';
export * from './antiFraudServiceUpdate';
export * from './antiFraudServiceUpdateFields';
export * from './antiFraudTransactionStatusUpdateErrorEvent';
export * from './antiFraudTransactionStatusUpdateErrorEventContext';
export * from './antiFraudTransactionStatusUpdateEvent';
export * from './antiFraudTransactionStatusUpdateEventContext';
export * from './antiFraudWebhookEvent';
export * from './antiFraudWebhookEventContext';
export * from './apiLog';
export * from './apiLogResponseBody';
export * from './apiLogResponseBodyDetails';
export * from './apiLogs';
export * from './applePayRequest';
export * from './applePaySessionRequest';
export * from './auditLog';
export * from './auditLogResource';
export * from './auditLogUser';
export * from './auditLogs';
export * from './bINLookupRequest';
export * from './bINLookupRequestContext';
export * from './billingDetails';
export * from './billingDetailsRequest';
export * from './billingDetailsUpdateRequest';
export * from './browserInfo';
export * from './buyer';
export * from './buyerRequest';
export * from './buyerSnapshot';
export * from './buyerUpdate';
export * from './buyers';
export * from './cardDetails';
export * from './cardRequest';
export * from './cardSchemeDefinition';
export * from './cardSchemeDefinitions';
export * from './cartItem';
export * from './checkoutSession';
export * from './checkoutSessionCreateRequest';
export * from './checkoutSessionPaymentMethod';
export * from './checkoutSessionPaymentMethodDetails';
export * from './checkoutSessionRequest';
export * from './checkoutSessionUpdateRequest';
export * from './clickToPaySessionRequest';
export * from './connection';
export * from './connectionDefinition';
export * from './connectionDefinitions';
export * from './connectionOptions';
export * from './connectionOptionsAdyenCard';
export * from './connectionOptionsCybersourceAntiFraud';
export * from './connectionOptionsForterAntiFraud';
export * from './connectionOptionsForterAntiFraudAddress';
export * from './connectionOptionsForterAntiFraudBasicItemData';
export * from './connectionOptionsForterAntiFraudBeneficiaries';
export * from './connectionOptionsForterAntiFraudCartItems';
export * from './connectionOptionsForterAntiFraudComments';
export * from './connectionOptionsForterAntiFraudDeliveryDetails';
export * from './connectionOptionsForterAntiFraudPersonalDetails';
export * from './connectionOptionsForterAntiFraudPhone';
export * from './connectionOptionsForterAntiFraudTotalDiscount';
export * from './connectionOptionsForterAntiFraudTotalDiscountCouponDiscountAmount';
export * from './connectionOptionsPaypalPaypal';
export * from './connectionOptionsPaypalPaypalAdditionalData';
export * from './connections';
export * from './cryptogram';
export * from './digitalWallet';
export * from './digitalWalletApplePayTokenDecrypted';
export * from './digitalWalletApplePayTokenDecryptedContext';
export * from './digitalWalletClickToPayFields';
export * from './digitalWalletClickToPayTokenDecrypted';
export * from './digitalWalletClickToPayTokenDecryptedContext';
export * from './digitalWalletGooglePayTokenDecrypted';
export * from './digitalWalletGooglePayTokenDecryptedContext';
export * from './digitalWalletRequest';
export * from './digitalWalletUpdate';
export * from './digitalWallets';
export * from './error400BadRequest';
export * from './error400IncorrectJson';
export * from './error400InvalidCredentials';
export * from './error401Unauthorized';
export * from './error403Forbidden';
export * from './error404NotFound';
export * from './error404PendingCreation';
export * from './error409DuplicateRecord';
export * from './errorDetail';
export * from './errorGeneric';
export * from './giftCard';
export * from './giftCardBalanceNewRequest';
export * from './giftCardBalanceRequest';
export * from './giftCardBalanceStoredRequest';
export * from './giftCardBalancesRequest';
export * from './giftCardRedemption';
export * from './giftCardService';
export * from './giftCardServiceCreateRequest';
export * from './giftCardServiceCreateRequestFields';
export * from './giftCardServiceDefinition';
export * from './giftCardServiceDefinitionFields';
export * from './giftCardServiceFields';
export * from './giftCardServiceSnapshot';
export * from './giftCardServiceUpdateRequest';
export * from './giftCardServiceUpdateRequestFields';
export * from './giftCardServiceVerifyRequest';
export * from './giftCardServiceVerifyRequestFields';
export * from './giftCardSnapshot';
export * from './giftCardStoreRequest';
export * from './giftCardSummary';
export * from './giftCards';
export * from './giftCardsSummary';
export * from './googlePayRequest';
export * from './googlePayRequestAssuranceDetails';
export * from './googlePaySessionRequest';
export * from './issueCryptogramRequest';
export * from './merchantAccount';
export * from './merchantAccountCreate';
export * from './merchantAccountUpdate';
export * from './merchantAccounts';
export * from './merchantProfile';
export * from './merchantProfileScheme';
export * from './networkToken';
export * from './networkTokenRequest';
export * from './networkTokens';
export * from './paymentConnectorExternalTransactionRequest';
export * from './paymentConnectorExternalTransactionRequestContext';
export * from './paymentConnectorResponseTransactionAuthorizationFailedEvent';
export * from './paymentConnectorResponseTransactionAuthorizationFailedEventContext';
export * from './paymentConnectorResponseTransactionAuthorizationSucceededEvent';
export * from './paymentConnectorResponseTransactionAuthorizationSucceededEventContext';
export * from './paymentConnectorResponseTransactionCaptureDeclinedEvent';
export * from './paymentConnectorResponseTransactionCaptureDeclinedEventContext';
export * from './paymentConnectorResponseTransactionCaptureFailedEvent';
export * from './paymentConnectorResponseTransactionCaptureSucceededEvent';
export * from './paymentConnectorResponseTransactionCaptureSucceededEventContext';
export * from './paymentConnectorResponseTransactionDeclinedEvent';
export * from './paymentConnectorResponseTransactionDeclinedEventContext';
export * from './paymentConnectorResponseTransactionVoidDeclinedEvent';
export * from './paymentConnectorResponseTransactionVoidDeclinedEventContext';
export * from './paymentConnectorResponseTransactionVoidFailedEvent';
export * from './paymentConnectorResponseTransactionVoidFailedEventContext';
export * from './paymentConnectorResponseTransactionVoidSucceededEvent';
export * from './paymentConnectorResponseTransactionVoidSucceededEventContext';
export * from './paymentMethod';
export * from './paymentMethodDefinition';
export * from './paymentMethodDefinitions';
export * from './paymentMethodDetailsCard';
export * from './paymentMethodRequest';
export * from './paymentMethodSnapshot';
export * from './paymentMethodTokenized';
export * from './paymentMethods';
export * from './paymentMethodsTokenized';
export * from './paymentOption';
export * from './paymentOptionApprovalUI';
export * from './paymentOptionContext';
export * from './paymentOptions';
export * from './paymentOptionsRequest';
export * from './paymentService';
export * from './paymentServiceDefinition';
export * from './paymentServiceDefinitionConfiguration';
export * from './paymentServiceDefinitionSupportedFeatures';
export * from './paymentServiceDefinitions';
export * from './paymentServiceRequest';
export * from './paymentServiceRequestFields';
export * from './paymentServiceSnapshot';
export * from './paymentServiceToken';
export * from './paymentServiceTokenRequest';
export * from './paymentServiceTokens';
export * from './paymentServiceUpdate';
export * from './paymentServices';
export * from './redirectRequest';
export * from './refund';
export * from './refunds';
export * from './report';
export * from './reportCreate';
export * from './reportExecution';
export * from './reportExecutionSummary';
export * from './reportExecutionSummaryContext';
export * from './reportExecutionUrl';
export * from './reportExecutions';
export * from './reportSpec';
export * from './reportSummary';
export * from './reportUpdate';
export * from './reports';
export * from './requiredFields';
export * from './requiredFieldsAddress';
export * from './resetPasswordRequest';
export * from './role';
export * from './roleAssignment';
export * from './roleAssignmentAssignee';
export * from './roleAssignmentRequest';
export * from './roleAssignmentRequestAssignee';
export * from './roleAssignmentRequestRole';
export * from './roleAssignments';
export * from './rolePermissions';
export * from './roles';
export * from './setPasswordRequest';
export * from './shippingDetail';
export * from './shippingDetailRequest';
export * from './shippingDetailUpdateRequest';
export * from './shippingDetails';
export * from './statementDescriptor';
export * from './taxId';
export * from './threeDSecureAuthenticationRequestEvent';
export * from './threeDSecureAuthenticationRequestEventContext';
export * from './threeDSecureData';
export * from './threeDSecureDataV1';
export * from './threeDSecureDataV1AllOf';
export * from './threeDSecureDataV1V2';
export * from './threeDSecureDataV2';
export * from './threeDSecureDataV2AllOf';
export * from './threeDSecureError';
export * from './threeDSecurePreparationRequestEvent';
export * from './threeDSecurePreparationRequestEventContext';
export * from './threeDSecureRequestErrorEvent';
export * from './threeDSecureRequestErrorEventContext';
export * from './threeDSecureResultRequestEvent';
export * from './threeDSecureResultRequestEventContext';
export * from './threeDSecureSuccessEvent';
export * from './threeDSecureSuccessEventContext';
export * from './threeDSecureSummary';
export * from './threeDSecureV2';
export * from './tokenizedRequest';
export * from './transaction';
export * from './transactionCaptureRequest';
export * from './transactionCardRequest';
export * from './transactionCheckoutSessionRequest';
export * from './transactionGiftCardNewRequest';
export * from './transactionGiftCardRequest';
export * from './transactionGiftCardStoredRequest';
export * from './transactionHistoryEvent';
export * from './transactionHistoryEvents';
export * from './transactionPaymentMethodRequest';
export * from './transactionRedirectRequest';
export * from './transactionRefundRequest';
export * from './transactionRequest';
export * from './transactionStatusSummary';
export * from './transactionSummary';
export * from './transactions';
export * from './transactionsBatchCaptureRequest';
export * from './userCurrentUpdate';
export * from './userRequest';
export * from './userRole';
export * from './userUpdate';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { APIKeyPairCreate } from './aPIKeyPairCreate';
import { APIKeyPairUpdate } from './aPIKeyPairUpdate';
import { AccountUpdaterInquirySummary } from './accountUpdaterInquirySummary';
import { AccountUpdaterJob } from './accountUpdaterJob';
import { AccountUpdaterJobCreate } from './accountUpdaterJobCreate';
import { Address } from './address';
import { AntiFraudDecisionErrorEvent } from './antiFraudDecisionErrorEvent';
import { AntiFraudDecisionErrorEventContext } from './antiFraudDecisionErrorEventContext';
import { AntiFraudDecisionEvent } from './antiFraudDecisionEvent';
import { AntiFraudDecisionEventContext } from './antiFraudDecisionEventContext';
import { AntiFraudDecisionSkippedEvent } from './antiFraudDecisionSkippedEvent';
import { AntiFraudDecisionSkippedEventContext } from './antiFraudDecisionSkippedEventContext';
import { AntiFraudServiceCreate } from './antiFraudServiceCreate';
import { AntiFraudServiceUpdate } from './antiFraudServiceUpdate';
import { AntiFraudServiceUpdateFields } from './antiFraudServiceUpdateFields';
import { AntiFraudTransactionStatusUpdateErrorEvent } from './antiFraudTransactionStatusUpdateErrorEvent';
import { AntiFraudTransactionStatusUpdateErrorEventContext } from './antiFraudTransactionStatusUpdateErrorEventContext';
import { AntiFraudTransactionStatusUpdateEvent } from './antiFraudTransactionStatusUpdateEvent';
import { AntiFraudTransactionStatusUpdateEventContext } from './antiFraudTransactionStatusUpdateEventContext';
import { AntiFraudWebhookEvent } from './antiFraudWebhookEvent';
import { AntiFraudWebhookEventContext } from './antiFraudWebhookEventContext';
import { ApiLog } from './apiLog';
import { ApiLogResponseBody } from './apiLogResponseBody';
import { ApiLogResponseBodyDetails } from './apiLogResponseBodyDetails';
import { ApiLogs } from './apiLogs';
import { ApplePayRequest } from './applePayRequest';
import { ApplePaySessionRequest } from './applePaySessionRequest';
import { AuditLog } from './auditLog';
import { AuditLogResource } from './auditLogResource';
import { AuditLogUser } from './auditLogUser';
import { AuditLogs } from './auditLogs';
import { BINLookupRequest } from './bINLookupRequest';
import { BINLookupRequestContext } from './bINLookupRequestContext';
import { BillingDetails } from './billingDetails';
import { BillingDetailsRequest } from './billingDetailsRequest';
import { BillingDetailsUpdateRequest } from './billingDetailsUpdateRequest';
import { BrowserInfo } from './browserInfo';
import { Buyer } from './buyer';
import { BuyerRequest } from './buyerRequest';
import { BuyerSnapshot } from './buyerSnapshot';
import { BuyerUpdate } from './buyerUpdate';
import { Buyers } from './buyers';
import { CardDetails } from './cardDetails';
import { CardRequest } from './cardRequest';
import { CardSchemeDefinition } from './cardSchemeDefinition';
import { CardSchemeDefinitions } from './cardSchemeDefinitions';
import { CartItem } from './cartItem';
import { CheckoutSession } from './checkoutSession';
import { CheckoutSessionCreateRequest } from './checkoutSessionCreateRequest';
import { CheckoutSessionPaymentMethod } from './checkoutSessionPaymentMethod';
import { CheckoutSessionPaymentMethodDetails } from './checkoutSessionPaymentMethodDetails';
import { CheckoutSessionRequest } from './checkoutSessionRequest';
import { CheckoutSessionUpdateRequest } from './checkoutSessionUpdateRequest';
import { ClickToPaySessionRequest } from './clickToPaySessionRequest';
import { Connection } from './connection';
import { ConnectionDefinition } from './connectionDefinition';
import { ConnectionDefinitions } from './connectionDefinitions';
import { ConnectionOptions } from './connectionOptions';
import { ConnectionOptionsAdyenCard } from './connectionOptionsAdyenCard';
import { ConnectionOptionsCybersourceAntiFraud } from './connectionOptionsCybersourceAntiFraud';
import { ConnectionOptionsForterAntiFraud } from './connectionOptionsForterAntiFraud';
import { ConnectionOptionsForterAntiFraudAddress } from './connectionOptionsForterAntiFraudAddress';
import { ConnectionOptionsForterAntiFraudBasicItemData } from './connectionOptionsForterAntiFraudBasicItemData';
import { ConnectionOptionsForterAntiFraudBeneficiaries } from './connectionOptionsForterAntiFraudBeneficiaries';
import { ConnectionOptionsForterAntiFraudCartItems } from './connectionOptionsForterAntiFraudCartItems';
import { ConnectionOptionsForterAntiFraudComments } from './connectionOptionsForterAntiFraudComments';
import { ConnectionOptionsForterAntiFraudDeliveryDetails } from './connectionOptionsForterAntiFraudDeliveryDetails';
import { ConnectionOptionsForterAntiFraudPersonalDetails } from './connectionOptionsForterAntiFraudPersonalDetails';
import { ConnectionOptionsForterAntiFraudPhone } from './connectionOptionsForterAntiFraudPhone';
import { ConnectionOptionsForterAntiFraudTotalDiscount } from './connectionOptionsForterAntiFraudTotalDiscount';
import { ConnectionOptionsForterAntiFraudTotalDiscountCouponDiscountAmount } from './connectionOptionsForterAntiFraudTotalDiscountCouponDiscountAmount';
import { ConnectionOptionsPaypalPaypal } from './connectionOptionsPaypalPaypal';
import { ConnectionOptionsPaypalPaypalAdditionalData } from './connectionOptionsPaypalPaypalAdditionalData';
import { Connections } from './connections';
import { Cryptogram } from './cryptogram';
import { DigitalWallet } from './digitalWallet';
import { DigitalWalletApplePayTokenDecrypted } from './digitalWalletApplePayTokenDecrypted';
import { DigitalWalletApplePayTokenDecryptedContext } from './digitalWalletApplePayTokenDecryptedContext';
import { DigitalWalletClickToPayFields } from './digitalWalletClickToPayFields';
import { DigitalWalletClickToPayTokenDecrypted } from './digitalWalletClickToPayTokenDecrypted';
import { DigitalWalletClickToPayTokenDecryptedContext } from './digitalWalletClickToPayTokenDecryptedContext';
import { DigitalWalletGooglePayTokenDecrypted } from './digitalWalletGooglePayTokenDecrypted';
import { DigitalWalletGooglePayTokenDecryptedContext } from './digitalWalletGooglePayTokenDecryptedContext';
import { DigitalWalletRequest } from './digitalWalletRequest';
import { DigitalWalletUpdate } from './digitalWalletUpdate';
import { DigitalWallets } from './digitalWallets';
import { Error400BadRequest } from './error400BadRequest';
import { Error400IncorrectJson } from './error400IncorrectJson';
import { Error400InvalidCredentials } from './error400InvalidCredentials';
import { Error401Unauthorized } from './error401Unauthorized';
import { Error403Forbidden } from './error403Forbidden';
import { Error404NotFound } from './error404NotFound';
import { Error404PendingCreation } from './error404PendingCreation';
import { Error409DuplicateRecord } from './error409DuplicateRecord';
import { ErrorDetail } from './errorDetail';
import { ErrorGeneric } from './errorGeneric';
import { GiftCard } from './giftCard';
import { GiftCardBalanceNewRequest } from './giftCardBalanceNewRequest';
import { GiftCardBalanceRequest } from './giftCardBalanceRequest';
import { GiftCardBalanceStoredRequest } from './giftCardBalanceStoredRequest';
import { GiftCardBalancesRequest } from './giftCardBalancesRequest';
import { GiftCardRedemption } from './giftCardRedemption';
import { GiftCardService } from './giftCardService';
import { GiftCardServiceCreateRequest } from './giftCardServiceCreateRequest';
import { GiftCardServiceCreateRequestFields } from './giftCardServiceCreateRequestFields';
import { GiftCardServiceDefinition } from './giftCardServiceDefinition';
import { GiftCardServiceDefinitionFields } from './giftCardServiceDefinitionFields';
import { GiftCardServiceFields } from './giftCardServiceFields';
import { GiftCardServiceSnapshot } from './giftCardServiceSnapshot';
import { GiftCardServiceUpdateRequest } from './giftCardServiceUpdateRequest';
import { GiftCardServiceUpdateRequestFields } from './giftCardServiceUpdateRequestFields';
import { GiftCardServiceVerifyRequest } from './giftCardServiceVerifyRequest';
import { GiftCardServiceVerifyRequestFields } from './giftCardServiceVerifyRequestFields';
import { GiftCardSnapshot } from './giftCardSnapshot';
import { GiftCardStoreRequest } from './giftCardStoreRequest';
import { GiftCardSummary } from './giftCardSummary';
import { GiftCards } from './giftCards';
import { GiftCardsSummary } from './giftCardsSummary';
import { GooglePayRequest } from './googlePayRequest';
import { GooglePayRequestAssuranceDetails } from './googlePayRequestAssuranceDetails';
import { GooglePaySessionRequest } from './googlePaySessionRequest';
import { IssueCryptogramRequest } from './issueCryptogramRequest';
import { MerchantAccount } from './merchantAccount';
import { MerchantAccountCreate } from './merchantAccountCreate';
import { MerchantAccountUpdate } from './merchantAccountUpdate';
import { MerchantAccounts } from './merchantAccounts';
import { MerchantProfile } from './merchantProfile';
import { MerchantProfileScheme } from './merchantProfileScheme';
import { NetworkToken } from './networkToken';
import { NetworkTokenRequest } from './networkTokenRequest';
import { NetworkTokens } from './networkTokens';
import { PaymentConnectorExternalTransactionRequest } from './paymentConnectorExternalTransactionRequest';
import { PaymentConnectorExternalTransactionRequestContext } from './paymentConnectorExternalTransactionRequestContext';
import { PaymentConnectorResponseTransactionAuthorizationFailedEvent } from './paymentConnectorResponseTransactionAuthorizationFailedEvent';
import { PaymentConnectorResponseTransactionAuthorizationFailedEventContext } from './paymentConnectorResponseTransactionAuthorizationFailedEventContext';
import { PaymentConnectorResponseTransactionAuthorizationSucceededEvent } from './paymentConnectorResponseTransactionAuthorizationSucceededEvent';
import { PaymentConnectorResponseTransactionAuthorizationSucceededEventContext } from './paymentConnectorResponseTransactionAuthorizationSucceededEventContext';
import { PaymentConnectorResponseTransactionCaptureDeclinedEvent } from './paymentConnectorResponseTransactionCaptureDeclinedEvent';
import { PaymentConnectorResponseTransactionCaptureDeclinedEventContext } from './paymentConnectorResponseTransactionCaptureDeclinedEventContext';
import { PaymentConnectorResponseTransactionCaptureFailedEvent } from './paymentConnectorResponseTransactionCaptureFailedEvent';
import { PaymentConnectorResponseTransactionCaptureSucceededEvent } from './paymentConnectorResponseTransactionCaptureSucceededEvent';
import { PaymentConnectorResponseTransactionCaptureSucceededEventContext } from './paymentConnectorResponseTransactionCaptureSucceededEventContext';
import { PaymentConnectorResponseTransactionDeclinedEvent } from './paymentConnectorResponseTransactionDeclinedEvent';
import { PaymentConnectorResponseTransactionDeclinedEventContext } from './paymentConnectorResponseTransactionDeclinedEventContext';
import { PaymentConnectorResponseTransactionVoidDeclinedEvent } from './paymentConnectorResponseTransactionVoidDeclinedEvent';
import { PaymentConnectorResponseTransactionVoidDeclinedEventContext } from './paymentConnectorResponseTransactionVoidDeclinedEventContext';
import { PaymentConnectorResponseTransactionVoidFailedEvent } from './paymentConnectorResponseTransactionVoidFailedEvent';
import { PaymentConnectorResponseTransactionVoidFailedEventContext } from './paymentConnectorResponseTransactionVoidFailedEventContext';
import { PaymentConnectorResponseTransactionVoidSucceededEvent } from './paymentConnectorResponseTransactionVoidSucceededEvent';
import { PaymentConnectorResponseTransactionVoidSucceededEventContext } from './paymentConnectorResponseTransactionVoidSucceededEventContext';
import { PaymentMethod } from './paymentMethod';
import { PaymentMethodDefinition } from './paymentMethodDefinition';
import { PaymentMethodDefinitions } from './paymentMethodDefinitions';
import { PaymentMethodDetailsCard } from './paymentMethodDetailsCard';
import { PaymentMethodRequest } from './paymentMethodRequest';
import { PaymentMethodSnapshot } from './paymentMethodSnapshot';
import { PaymentMethodTokenized } from './paymentMethodTokenized';
import { PaymentMethods } from './paymentMethods';
import { PaymentMethodsTokenized } from './paymentMethodsTokenized';
import { PaymentOption } from './paymentOption';
import { PaymentOptionApprovalUI } from './paymentOptionApprovalUI';
import { PaymentOptionContext } from './paymentOptionContext';
import { PaymentOptions } from './paymentOptions';
import { PaymentOptionsRequest } from './paymentOptionsRequest';
import { PaymentService } from './paymentService';
import { PaymentServiceDefinition } from './paymentServiceDefinition';
import { PaymentServiceDefinitionConfiguration } from './paymentServiceDefinitionConfiguration';
import { PaymentServiceDefinitionSupportedFeatures } from './paymentServiceDefinitionSupportedFeatures';
import { PaymentServiceDefinitions } from './paymentServiceDefinitions';
import { PaymentServiceRequest } from './paymentServiceRequest';
import { PaymentServiceRequestFields } from './paymentServiceRequestFields';
import { PaymentServiceSnapshot } from './paymentServiceSnapshot';
import { PaymentServiceToken } from './paymentServiceToken';
import { PaymentServiceTokenRequest } from './paymentServiceTokenRequest';
import { PaymentServiceTokens } from './paymentServiceTokens';
import { PaymentServiceUpdate } from './paymentServiceUpdate';
import { PaymentServices } from './paymentServices';
import { RedirectRequest } from './redirectRequest';
import { Refund } from './refund';
import { Refunds } from './refunds';
import { Report } from './report';
import { ReportCreate } from './reportCreate';
import { ReportExecution } from './reportExecution';
import { ReportExecutionSummary } from './reportExecutionSummary';
import { ReportExecutionSummaryContext } from './reportExecutionSummaryContext';
import { ReportExecutionUrl } from './reportExecutionUrl';
import { ReportExecutions } from './reportExecutions';
import { ReportSpec } from './reportSpec';
import { ReportSummary } from './reportSummary';
import { ReportUpdate } from './reportUpdate';
import { Reports } from './reports';
import { RequiredFields } from './requiredFields';
import { RequiredFieldsAddress } from './requiredFieldsAddress';
import { ResetPasswordRequest } from './resetPasswordRequest';
import { Role } from './role';
import { RoleAssignment } from './roleAssignment';
import { RoleAssignmentAssignee } from './roleAssignmentAssignee';
import { RoleAssignmentRequest } from './roleAssignmentRequest';
import { RoleAssignmentRequestAssignee } from './roleAssignmentRequestAssignee';
import { RoleAssignmentRequestRole } from './roleAssignmentRequestRole';
import { RoleAssignments } from './roleAssignments';
import { RolePermissions } from './rolePermissions';
import { Roles } from './roles';
import { SetPasswordRequest } from './setPasswordRequest';
import { ShippingDetail } from './shippingDetail';
import { ShippingDetailRequest } from './shippingDetailRequest';
import { ShippingDetailUpdateRequest } from './shippingDetailUpdateRequest';
import { ShippingDetails } from './shippingDetails';
import { StatementDescriptor } from './statementDescriptor';
import { TaxId } from './taxId';
import { ThreeDSecureAuthenticationRequestEvent } from './threeDSecureAuthenticationRequestEvent';
import { ThreeDSecureAuthenticationRequestEventContext } from './threeDSecureAuthenticationRequestEventContext';
import { ThreeDSecureData } from './threeDSecureData';
import { ThreeDSecureDataV1 } from './threeDSecureDataV1';
import { ThreeDSecureDataV1AllOf } from './threeDSecureDataV1AllOf';
import { ThreeDSecureDataV1V2 } from './threeDSecureDataV1V2';
import { ThreeDSecureDataV2 } from './threeDSecureDataV2';
import { ThreeDSecureDataV2AllOf } from './threeDSecureDataV2AllOf';
import { ThreeDSecureError } from './threeDSecureError';
import { ThreeDSecurePreparationRequestEvent } from './threeDSecurePreparationRequestEvent';
import { ThreeDSecurePreparationRequestEventContext } from './threeDSecurePreparationRequestEventContext';
import { ThreeDSecureRequestErrorEvent } from './threeDSecureRequestErrorEvent';
import { ThreeDSecureRequestErrorEventContext } from './threeDSecureRequestErrorEventContext';
import { ThreeDSecureResultRequestEvent } from './threeDSecureResultRequestEvent';
import { ThreeDSecureResultRequestEventContext } from './threeDSecureResultRequestEventContext';
import { ThreeDSecureSuccessEvent } from './threeDSecureSuccessEvent';
import { ThreeDSecureSuccessEventContext } from './threeDSecureSuccessEventContext';
import { ThreeDSecureSummary } from './threeDSecureSummary';
import { ThreeDSecureV2 } from './threeDSecureV2';
import { TokenizedRequest } from './tokenizedRequest';
import { Transaction } from './transaction';
import { TransactionCaptureRequest } from './transactionCaptureRequest';
import { TransactionCardRequest } from './transactionCardRequest';
import { TransactionCheckoutSessionRequest } from './transactionCheckoutSessionRequest';
import { TransactionGiftCardNewRequest } from './transactionGiftCardNewRequest';
import { TransactionGiftCardRequest } from './transactionGiftCardRequest';
import { TransactionGiftCardStoredRequest } from './transactionGiftCardStoredRequest';
import { TransactionHistoryEvent } from './transactionHistoryEvent';
import { TransactionHistoryEvents } from './transactionHistoryEvents';
import { TransactionPaymentMethodRequest } from './transactionPaymentMethodRequest';
import { TransactionRedirectRequest } from './transactionRedirectRequest';
import { TransactionRefundRequest } from './transactionRefundRequest';
import { TransactionRequest } from './transactionRequest';
import { TransactionStatusSummary } from './transactionStatusSummary';
import { TransactionSummary } from './transactionSummary';
import { Transactions } from './transactions';
import { TransactionsBatchCaptureRequest } from './transactionsBatchCaptureRequest';
import { UserCurrentUpdate } from './userCurrentUpdate';
import { UserRequest } from './userRequest';
import { UserRole } from './userRole';
import { UserUpdate } from './userUpdate';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "APIKeyPairCreate.AlgorithmEnum": APIKeyPairCreate.AlgorithmEnum,
        "AccountUpdaterInquirySummary.TypeEnum": AccountUpdaterInquirySummary.TypeEnum,
        "AccountUpdaterJob.TypeEnum": AccountUpdaterJob.TypeEnum,
        "AntiFraudDecisionErrorEvent.TypeEnum": AntiFraudDecisionErrorEvent.TypeEnum,
        "AntiFraudDecisionErrorEvent.NameEnum": AntiFraudDecisionErrorEvent.NameEnum,
        "AntiFraudDecisionEvent.TypeEnum": AntiFraudDecisionEvent.TypeEnum,
        "AntiFraudDecisionEvent.NameEnum": AntiFraudDecisionEvent.NameEnum,
        "AntiFraudDecisionSkippedEvent.TypeEnum": AntiFraudDecisionSkippedEvent.TypeEnum,
        "AntiFraudDecisionSkippedEvent.NameEnum": AntiFraudDecisionSkippedEvent.NameEnum,
        "AntiFraudServiceCreate.AntiFraudServiceDefinitionIdEnum": AntiFraudServiceCreate.AntiFraudServiceDefinitionIdEnum,
        "AntiFraudServiceUpdate.AntiFraudServiceDefinitionIdEnum": AntiFraudServiceUpdate.AntiFraudServiceDefinitionIdEnum,
        "AntiFraudTransactionStatusUpdateErrorEvent.TypeEnum": AntiFraudTransactionStatusUpdateErrorEvent.TypeEnum,
        "AntiFraudTransactionStatusUpdateErrorEvent.NameEnum": AntiFraudTransactionStatusUpdateErrorEvent.NameEnum,
        "AntiFraudTransactionStatusUpdateEvent.TypeEnum": AntiFraudTransactionStatusUpdateEvent.TypeEnum,
        "AntiFraudTransactionStatusUpdateEvent.NameEnum": AntiFraudTransactionStatusUpdateEvent.NameEnum,
        "AntiFraudWebhookEvent.TypeEnum": AntiFraudWebhookEvent.TypeEnum,
        "AntiFraudWebhookEvent.NameEnum": AntiFraudWebhookEvent.NameEnum,
        "ApiLog.TypeEnum": ApiLog.TypeEnum,
        "ApplePayRequest.MethodEnum": ApplePayRequest.MethodEnum,
        "AuditLog.TypeEnum": AuditLog.TypeEnum,
        "AuditLog.ActionEnum": AuditLog.ActionEnum,
        "AuditLogUser.StatusEnum": AuditLogUser.StatusEnum,
        "BINLookupRequest.TypeEnum": BINLookupRequest.TypeEnum,
        "BINLookupRequest.NameEnum": BINLookupRequest.NameEnum,
        "BINLookupRequestContext.SchemeEnum": BINLookupRequestContext.SchemeEnum,
        "BINLookupRequestContext.AdditionalSchemesEnum": BINLookupRequestContext.AdditionalSchemesEnum,
        "BillingDetails.TypeEnum": BillingDetails.TypeEnum,
        "BrowserInfo.UserDeviceEnum": BrowserInfo.UserDeviceEnum,
        "Buyer.TypeEnum": Buyer.TypeEnum,
        "BuyerSnapshot.TypeEnum": BuyerSnapshot.TypeEnum,
        "CardDetails.TypeEnum": CardDetails.TypeEnum,
        "CardDetails.CardTypeEnum": CardDetails.CardTypeEnum,
        "CardDetails.SchemeEnum": CardDetails.SchemeEnum,
        "CardRequest.MethodEnum": CardRequest.MethodEnum,
        "CardSchemeDefinition.TypeEnum": CardSchemeDefinition.TypeEnum,
        "CartItem.ProductTypeEnum": CartItem.ProductTypeEnum,
        "CheckoutSession.TypeEnum": CheckoutSession.TypeEnum,
        "CheckoutSessionPaymentMethod.MethodEnum": CheckoutSessionPaymentMethod.MethodEnum,
        "CheckoutSessionPaymentMethod.SchemeEnum": CheckoutSessionPaymentMethod.SchemeEnum,
        "CheckoutSessionPaymentMethodDetails.CardTypeEnum": CheckoutSessionPaymentMethodDetails.CardTypeEnum,
        "CheckoutSessionRequest.MethodEnum": CheckoutSessionRequest.MethodEnum,
        "ConnectionDefinition.GroupEnum": ConnectionDefinition.GroupEnum,
        "ConnectionDefinition.CategoryEnum": ConnectionDefinition.CategoryEnum,
        "ConnectionOptionsForterAntiFraud.DeliveryTypeEnum": ConnectionOptionsForterAntiFraud.DeliveryTypeEnum,
        "ConnectionOptionsForterAntiFraudBasicItemData.TypeEnum": ConnectionOptionsForterAntiFraudBasicItemData.TypeEnum,
        "ConnectionOptionsForterAntiFraudDeliveryDetails.DeliveryTypeEnum": ConnectionOptionsForterAntiFraudDeliveryDetails.DeliveryTypeEnum,
        "DigitalWallet.TypeEnum": DigitalWallet.TypeEnum,
        "DigitalWallet.ProviderEnum": DigitalWallet.ProviderEnum,
        "DigitalWalletApplePayTokenDecrypted.TypeEnum": DigitalWalletApplePayTokenDecrypted.TypeEnum,
        "DigitalWalletApplePayTokenDecrypted.NameEnum": DigitalWalletApplePayTokenDecrypted.NameEnum,
        "DigitalWalletApplePayTokenDecryptedContext.TypeEnum": DigitalWalletApplePayTokenDecryptedContext.TypeEnum,
        "DigitalWalletClickToPayTokenDecrypted.TypeEnum": DigitalWalletClickToPayTokenDecrypted.TypeEnum,
        "DigitalWalletClickToPayTokenDecrypted.NameEnum": DigitalWalletClickToPayTokenDecrypted.NameEnum,
        "DigitalWalletClickToPayTokenDecryptedContext.TypeEnum": DigitalWalletClickToPayTokenDecryptedContext.TypeEnum,
        "DigitalWalletGooglePayTokenDecrypted.TypeEnum": DigitalWalletGooglePayTokenDecrypted.TypeEnum,
        "DigitalWalletGooglePayTokenDecrypted.NameEnum": DigitalWalletGooglePayTokenDecrypted.NameEnum,
        "DigitalWalletGooglePayTokenDecryptedContext.TypeEnum": DigitalWalletGooglePayTokenDecryptedContext.TypeEnum,
        "DigitalWalletRequest.ProviderEnum": DigitalWalletRequest.ProviderEnum,
        "Error400BadRequest.TypeEnum": Error400BadRequest.TypeEnum,
        "Error400BadRequest.CodeEnum": Error400BadRequest.CodeEnum,
        "Error400BadRequest.StatusEnum": Error400BadRequest.StatusEnum,
        "Error400IncorrectJson.TypeEnum": Error400IncorrectJson.TypeEnum,
        "Error400IncorrectJson.CodeEnum": Error400IncorrectJson.CodeEnum,
        "Error400IncorrectJson.StatusEnum": Error400IncorrectJson.StatusEnum,
        "Error400InvalidCredentials.TypeEnum": Error400InvalidCredentials.TypeEnum,
        "Error400InvalidCredentials.CodeEnum": Error400InvalidCredentials.CodeEnum,
        "Error400InvalidCredentials.StatusEnum": Error400InvalidCredentials.StatusEnum,
        "Error401Unauthorized.TypeEnum": Error401Unauthorized.TypeEnum,
        "Error401Unauthorized.CodeEnum": Error401Unauthorized.CodeEnum,
        "Error401Unauthorized.StatusEnum": Error401Unauthorized.StatusEnum,
        "Error401Unauthorized.MessageEnum": Error401Unauthorized.MessageEnum,
        "Error403Forbidden.TypeEnum": Error403Forbidden.TypeEnum,
        "Error403Forbidden.CodeEnum": Error403Forbidden.CodeEnum,
        "Error403Forbidden.StatusEnum": Error403Forbidden.StatusEnum,
        "Error403Forbidden.MessageEnum": Error403Forbidden.MessageEnum,
        "Error404NotFound.TypeEnum": Error404NotFound.TypeEnum,
        "Error404NotFound.CodeEnum": Error404NotFound.CodeEnum,
        "Error404NotFound.StatusEnum": Error404NotFound.StatusEnum,
        "Error404NotFound.MessageEnum": Error404NotFound.MessageEnum,
        "Error404PendingCreation.TypeEnum": Error404PendingCreation.TypeEnum,
        "Error404PendingCreation.CodeEnum": Error404PendingCreation.CodeEnum,
        "Error404PendingCreation.StatusEnum": Error404PendingCreation.StatusEnum,
        "Error404PendingCreation.MessageEnum": Error404PendingCreation.MessageEnum,
        "Error409DuplicateRecord.TypeEnum": Error409DuplicateRecord.TypeEnum,
        "Error409DuplicateRecord.CodeEnum": Error409DuplicateRecord.CodeEnum,
        "Error409DuplicateRecord.StatusEnum": Error409DuplicateRecord.StatusEnum,
        "ErrorDetail.LocationEnum": ErrorDetail.LocationEnum,
        "ErrorGeneric.TypeEnum": ErrorGeneric.TypeEnum,
        "GiftCard.TypeEnum": GiftCard.TypeEnum,
        "GiftCardRedemption.TypeEnum": GiftCardRedemption.TypeEnum,
        "GiftCardRedemption.StatusEnum": GiftCardRedemption.StatusEnum,
        "GiftCardService.TypeEnum": GiftCardService.TypeEnum,
        "GiftCardServiceDefinition.TypeEnum": GiftCardServiceDefinition.TypeEnum,
        "GiftCardServiceDefinitionFields.FormatEnum": GiftCardServiceDefinitionFields.FormatEnum,
        "GiftCardServiceSnapshot.TypeEnum": GiftCardServiceSnapshot.TypeEnum,
        "GiftCardSnapshot.TypeEnum": GiftCardSnapshot.TypeEnum,
        "GiftCardSummary.TypeEnum": GiftCardSummary.TypeEnum,
        "GooglePayRequest.MethodEnum": GooglePayRequest.MethodEnum,
        "MerchantAccount.TypeEnum": MerchantAccount.TypeEnum,
        "NetworkToken.TypeEnum": NetworkToken.TypeEnum,
        "NetworkToken.StatusEnum": NetworkToken.StatusEnum,
        "PaymentConnectorExternalTransactionRequest.TypeEnum": PaymentConnectorExternalTransactionRequest.TypeEnum,
        "PaymentConnectorExternalTransactionRequest.NameEnum": PaymentConnectorExternalTransactionRequest.NameEnum,
        "PaymentConnectorResponseTransactionAuthorizationFailedEvent.TypeEnum": PaymentConnectorResponseTransactionAuthorizationFailedEvent.TypeEnum,
        "PaymentConnectorResponseTransactionAuthorizationFailedEvent.NameEnum": PaymentConnectorResponseTransactionAuthorizationFailedEvent.NameEnum,
        "PaymentConnectorResponseTransactionAuthorizationFailedEventContext.StatusEnum": PaymentConnectorResponseTransactionAuthorizationFailedEventContext.StatusEnum,
        "PaymentConnectorResponseTransactionAuthorizationFailedEventContext.InstrumentTypeEnum": PaymentConnectorResponseTransactionAuthorizationFailedEventContext.InstrumentTypeEnum,
        "PaymentConnectorResponseTransactionAuthorizationFailedEventContext.RetryRuleEnum": PaymentConnectorResponseTransactionAuthorizationFailedEventContext.RetryRuleEnum,
        "PaymentConnectorResponseTransactionAuthorizationFailedEventContext.AvsResponseCodeEnum": PaymentConnectorResponseTransactionAuthorizationFailedEventContext.AvsResponseCodeEnum,
        "PaymentConnectorResponseTransactionAuthorizationFailedEventContext.CvvResponseCodeEnum": PaymentConnectorResponseTransactionAuthorizationFailedEventContext.CvvResponseCodeEnum,
        "PaymentConnectorResponseTransactionAuthorizationSucceededEvent.TypeEnum": PaymentConnectorResponseTransactionAuthorizationSucceededEvent.TypeEnum,
        "PaymentConnectorResponseTransactionAuthorizationSucceededEvent.NameEnum": PaymentConnectorResponseTransactionAuthorizationSucceededEvent.NameEnum,
        "PaymentConnectorResponseTransactionAuthorizationSucceededEventContext.StatusEnum": PaymentConnectorResponseTransactionAuthorizationSucceededEventContext.StatusEnum,
        "PaymentConnectorResponseTransactionAuthorizationSucceededEventContext.InstrumentTypeEnum": PaymentConnectorResponseTransactionAuthorizationSucceededEventContext.InstrumentTypeEnum,
        "PaymentConnectorResponseTransactionAuthorizationSucceededEventContext.AvsResponseCodeEnum": PaymentConnectorResponseTransactionAuthorizationSucceededEventContext.AvsResponseCodeEnum,
        "PaymentConnectorResponseTransactionAuthorizationSucceededEventContext.CvvResponseCodeEnum": PaymentConnectorResponseTransactionAuthorizationSucceededEventContext.CvvResponseCodeEnum,
        "PaymentConnectorResponseTransactionCaptureDeclinedEvent.TypeEnum": PaymentConnectorResponseTransactionCaptureDeclinedEvent.TypeEnum,
        "PaymentConnectorResponseTransactionCaptureDeclinedEvent.NameEnum": PaymentConnectorResponseTransactionCaptureDeclinedEvent.NameEnum,
        "PaymentConnectorResponseTransactionCaptureDeclinedEventContext.AvsResponseCodeEnum": PaymentConnectorResponseTransactionCaptureDeclinedEventContext.AvsResponseCodeEnum,
        "PaymentConnectorResponseTransactionCaptureDeclinedEventContext.CvvResponseCodeEnum": PaymentConnectorResponseTransactionCaptureDeclinedEventContext.CvvResponseCodeEnum,
        "PaymentConnectorResponseTransactionCaptureFailedEvent.TypeEnum": PaymentConnectorResponseTransactionCaptureFailedEvent.TypeEnum,
        "PaymentConnectorResponseTransactionCaptureFailedEvent.NameEnum": PaymentConnectorResponseTransactionCaptureFailedEvent.NameEnum,
        "PaymentConnectorResponseTransactionCaptureSucceededEvent.TypeEnum": PaymentConnectorResponseTransactionCaptureSucceededEvent.TypeEnum,
        "PaymentConnectorResponseTransactionCaptureSucceededEvent.NameEnum": PaymentConnectorResponseTransactionCaptureSucceededEvent.NameEnum,
        "PaymentConnectorResponseTransactionCaptureSucceededEventContext.StatusEnum": PaymentConnectorResponseTransactionCaptureSucceededEventContext.StatusEnum,
        "PaymentConnectorResponseTransactionCaptureSucceededEventContext.InstrumentTypeEnum": PaymentConnectorResponseTransactionCaptureSucceededEventContext.InstrumentTypeEnum,
        "PaymentConnectorResponseTransactionCaptureSucceededEventContext.AvsResponseCodeEnum": PaymentConnectorResponseTransactionCaptureSucceededEventContext.AvsResponseCodeEnum,
        "PaymentConnectorResponseTransactionCaptureSucceededEventContext.CvvResponseCodeEnum": PaymentConnectorResponseTransactionCaptureSucceededEventContext.CvvResponseCodeEnum,
        "PaymentConnectorResponseTransactionDeclinedEvent.TypeEnum": PaymentConnectorResponseTransactionDeclinedEvent.TypeEnum,
        "PaymentConnectorResponseTransactionDeclinedEvent.NameEnum": PaymentConnectorResponseTransactionDeclinedEvent.NameEnum,
        "PaymentConnectorResponseTransactionDeclinedEventContext.StatusEnum": PaymentConnectorResponseTransactionDeclinedEventContext.StatusEnum,
        "PaymentConnectorResponseTransactionDeclinedEventContext.InstrumentTypeEnum": PaymentConnectorResponseTransactionDeclinedEventContext.InstrumentTypeEnum,
        "PaymentConnectorResponseTransactionDeclinedEventContext.RetryRuleEnum": PaymentConnectorResponseTransactionDeclinedEventContext.RetryRuleEnum,
        "PaymentConnectorResponseTransactionDeclinedEventContext.AvsResponseCodeEnum": PaymentConnectorResponseTransactionDeclinedEventContext.AvsResponseCodeEnum,
        "PaymentConnectorResponseTransactionDeclinedEventContext.CvvResponseCodeEnum": PaymentConnectorResponseTransactionDeclinedEventContext.CvvResponseCodeEnum,
        "PaymentConnectorResponseTransactionVoidDeclinedEvent.TypeEnum": PaymentConnectorResponseTransactionVoidDeclinedEvent.TypeEnum,
        "PaymentConnectorResponseTransactionVoidDeclinedEvent.NameEnum": PaymentConnectorResponseTransactionVoidDeclinedEvent.NameEnum,
        "PaymentConnectorResponseTransactionVoidFailedEvent.TypeEnum": PaymentConnectorResponseTransactionVoidFailedEvent.TypeEnum,
        "PaymentConnectorResponseTransactionVoidFailedEvent.NameEnum": PaymentConnectorResponseTransactionVoidFailedEvent.NameEnum,
        "PaymentConnectorResponseTransactionVoidSucceededEvent.TypeEnum": PaymentConnectorResponseTransactionVoidSucceededEvent.TypeEnum,
        "PaymentConnectorResponseTransactionVoidSucceededEvent.NameEnum": PaymentConnectorResponseTransactionVoidSucceededEvent.NameEnum,
        "PaymentMethod.TypeEnum": PaymentMethod.TypeEnum,
        "PaymentMethod.StatusEnum": PaymentMethod.StatusEnum,
        "PaymentMethod.MethodEnum": PaymentMethod.MethodEnum,
        "PaymentMethod.ModeEnum": PaymentMethod.ModeEnum,
        "PaymentMethod.SchemeEnum": PaymentMethod.SchemeEnum,
        "PaymentMethod.ApprovalTargetEnum": PaymentMethod.ApprovalTargetEnum,
        "PaymentMethodDetailsCard.CardTypeEnum": PaymentMethodDetailsCard.CardTypeEnum,
        "PaymentMethodSnapshot.TypeEnum": PaymentMethodSnapshot.TypeEnum,
        "PaymentMethodSnapshot.MethodEnum": PaymentMethodSnapshot.MethodEnum,
        "PaymentMethodSnapshot.SchemeEnum": PaymentMethodSnapshot.SchemeEnum,
        "PaymentMethodSnapshot.ApprovalTargetEnum": PaymentMethodSnapshot.ApprovalTargetEnum,
        "PaymentMethodTokenized.TypeEnum": PaymentMethodTokenized.TypeEnum,
        "PaymentMethodTokenized.MethodEnum": PaymentMethodTokenized.MethodEnum,
        "PaymentMethodTokenized.SchemeEnum": PaymentMethodTokenized.SchemeEnum,
        "PaymentMethodTokenized.ApprovalTargetEnum": PaymentMethodTokenized.ApprovalTargetEnum,
        "PaymentOption.TypeEnum": PaymentOption.TypeEnum,
        "PaymentOption.MethodEnum": PaymentOption.MethodEnum,
        "PaymentOption.ModeEnum": PaymentOption.ModeEnum,
        "PaymentService.TypeEnum": PaymentService.TypeEnum,
        "PaymentService.MethodEnum": PaymentService.MethodEnum,
        "PaymentService.StatusEnum": PaymentService.StatusEnum,
        "PaymentServiceDefinition.TypeEnum": PaymentServiceDefinition.TypeEnum,
        "PaymentServiceDefinition.MethodEnum": PaymentServiceDefinition.MethodEnum,
        "PaymentServiceDefinition.ModeEnum": PaymentServiceDefinition.ModeEnum,
        "PaymentServiceDefinitionConfiguration.ApprovalUiTargetEnum": PaymentServiceDefinitionConfiguration.ApprovalUiTargetEnum,
        "PaymentServiceSnapshot.TypeEnum": PaymentServiceSnapshot.TypeEnum,
        "PaymentServiceSnapshot.MethodEnum": PaymentServiceSnapshot.MethodEnum,
        "PaymentServiceToken.TypeEnum": PaymentServiceToken.TypeEnum,
        "PaymentServiceToken.StatusEnum": PaymentServiceToken.StatusEnum,
        "RedirectRequest.MethodEnum": RedirectRequest.MethodEnum,
        "Refund.TypeEnum": Refund.TypeEnum,
        "Refund.StatusEnum": Refund.StatusEnum,
        "Refund.TargetTypeEnum": Refund.TargetTypeEnum,
        "Report.ScheduleEnum": Report.ScheduleEnum,
        "Report.TypeEnum": Report.TypeEnum,
        "Report.CreatorTypeEnum": Report.CreatorTypeEnum,
        "ReportCreate.ScheduleEnum": ReportCreate.ScheduleEnum,
        "ReportExecution.TypeEnum": ReportExecution.TypeEnum,
        "ReportExecution.StatusEnum": ReportExecution.StatusEnum,
        "ReportExecutionSummary.TypeEnum": ReportExecutionSummary.TypeEnum,
        "ReportExecutionSummary.StatusEnum": ReportExecutionSummary.StatusEnum,
        "ReportSpec.ModelEnum": ReportSpec.ModelEnum,
        "ReportSummary.TypeEnum": ReportSummary.TypeEnum,
        "ReportSummary.CreatorTypeEnum": ReportSummary.CreatorTypeEnum,
        "Role.TypeEnum": Role.TypeEnum,
        "RoleAssignment.TypeEnum": RoleAssignment.TypeEnum,
        "RoleAssignmentAssignee.TypeEnum": RoleAssignmentAssignee.TypeEnum,
        "RoleAssignmentRequestAssignee.TypeEnum": RoleAssignmentRequestAssignee.TypeEnum,
        "ShippingDetail.TypeEnum": ShippingDetail.TypeEnum,
        "TaxId.KindEnum": TaxId.KindEnum,
        "ThreeDSecureAuthenticationRequestEvent.TypeEnum": ThreeDSecureAuthenticationRequestEvent.TypeEnum,
        "ThreeDSecureAuthenticationRequestEvent.NameEnum": ThreeDSecureAuthenticationRequestEvent.NameEnum,
        "ThreeDSecureDataV1V2.DirectoryResponseEnum": ThreeDSecureDataV1V2.DirectoryResponseEnum,
        "ThreeDSecureDataV1V2.AuthenticationResponseEnum": ThreeDSecureDataV1V2.AuthenticationResponseEnum,
        "ThreeDSecureDataV2.DirectoryResponseEnum": ThreeDSecureDataV2.DirectoryResponseEnum,
        "ThreeDSecureDataV2.AuthenticationResponseEnum": ThreeDSecureDataV2.AuthenticationResponseEnum,
        "ThreeDSecureDataV2AllOf.AuthenticationResponseEnum": ThreeDSecureDataV2AllOf.AuthenticationResponseEnum,
        "ThreeDSecureDataV2AllOf.DirectoryResponseEnum": ThreeDSecureDataV2AllOf.DirectoryResponseEnum,
        "ThreeDSecurePreparationRequestEvent.TypeEnum": ThreeDSecurePreparationRequestEvent.TypeEnum,
        "ThreeDSecurePreparationRequestEvent.NameEnum": ThreeDSecurePreparationRequestEvent.NameEnum,
        "ThreeDSecureRequestErrorEvent.TypeEnum": ThreeDSecureRequestErrorEvent.TypeEnum,
        "ThreeDSecureRequestErrorEvent.NameEnum": ThreeDSecureRequestErrorEvent.NameEnum,
        "ThreeDSecureResultRequestEvent.TypeEnum": ThreeDSecureResultRequestEvent.TypeEnum,
        "ThreeDSecureResultRequestEvent.NameEnum": ThreeDSecureResultRequestEvent.NameEnum,
        "ThreeDSecureSuccessEvent.TypeEnum": ThreeDSecureSuccessEvent.TypeEnum,
        "ThreeDSecureSuccessEvent.NameEnum": ThreeDSecureSuccessEvent.NameEnum,
        "ThreeDSecureSuccessEventContext.MethodEnum": ThreeDSecureSuccessEventContext.MethodEnum,
        "ThreeDSecureSummary.StatusEnum": ThreeDSecureSummary.StatusEnum,
        "ThreeDSecureSummary.MethodEnum": ThreeDSecureSummary.MethodEnum,
        "ThreeDSecureV2.AuthenticationResponseEnum": ThreeDSecureV2.AuthenticationResponseEnum,
        "ThreeDSecureV2.DirectoryResponseEnum": ThreeDSecureV2.DirectoryResponseEnum,
        "TokenizedRequest.MethodEnum": TokenizedRequest.MethodEnum,
        "Transaction.TypeEnum": Transaction.TypeEnum,
        "Transaction.StatusEnum": Transaction.StatusEnum,
        "Transaction.IntentOutcomeEnum": Transaction.IntentOutcomeEnum,
        "Transaction.IntentEnum": Transaction.IntentEnum,
        "Transaction.PaymentSourceEnum": Transaction.PaymentSourceEnum,
        "Transaction.AvsResponseCodeEnum": Transaction.AvsResponseCodeEnum,
        "Transaction.CvvResponseCodeEnum": Transaction.CvvResponseCodeEnum,
        "Transaction.MethodEnum": Transaction.MethodEnum,
        "TransactionCardRequest.MethodEnum": TransactionCardRequest.MethodEnum,
        "TransactionCheckoutSessionRequest.MethodEnum": TransactionCheckoutSessionRequest.MethodEnum,
        "TransactionHistoryEvent.TypeEnum": TransactionHistoryEvent.TypeEnum,
        "TransactionHistoryEvent.NameEnum": TransactionHistoryEvent.NameEnum,
        "TransactionPaymentMethodRequest.MethodEnum": TransactionPaymentMethodRequest.MethodEnum,
        "TransactionRedirectRequest.MethodEnum": TransactionRedirectRequest.MethodEnum,
        "TransactionRefundRequest.TargetTypeEnum": TransactionRefundRequest.TargetTypeEnum,
        "TransactionRequest.IntentEnum": TransactionRequest.IntentEnum,
        "TransactionRequest.PaymentSourceEnum": TransactionRequest.PaymentSourceEnum,
        "TransactionStatusSummary.TypeEnum": TransactionStatusSummary.TypeEnum,
        "TransactionStatusSummary.StatusEnum": TransactionStatusSummary.StatusEnum,
        "TransactionSummary.TypeEnum": TransactionSummary.TypeEnum,
        "TransactionSummary.StatusEnum": TransactionSummary.StatusEnum,
        "TransactionSummary.IntentEnum": TransactionSummary.IntentEnum,
        "TransactionSummary.MethodEnum": TransactionSummary.MethodEnum,
        "UserRole.TypeEnum": UserRole.TypeEnum,
}

let typeMap: {[index: string]: any} = {
    "APIKeyPairCreate": APIKeyPairCreate,
    "APIKeyPairUpdate": APIKeyPairUpdate,
    "AccountUpdaterInquirySummary": AccountUpdaterInquirySummary,
    "AccountUpdaterJob": AccountUpdaterJob,
    "AccountUpdaterJobCreate": AccountUpdaterJobCreate,
    "Address": Address,
    "AntiFraudDecisionErrorEvent": AntiFraudDecisionErrorEvent,
    "AntiFraudDecisionErrorEventContext": AntiFraudDecisionErrorEventContext,
    "AntiFraudDecisionEvent": AntiFraudDecisionEvent,
    "AntiFraudDecisionEventContext": AntiFraudDecisionEventContext,
    "AntiFraudDecisionSkippedEvent": AntiFraudDecisionSkippedEvent,
    "AntiFraudDecisionSkippedEventContext": AntiFraudDecisionSkippedEventContext,
    "AntiFraudServiceCreate": AntiFraudServiceCreate,
    "AntiFraudServiceUpdate": AntiFraudServiceUpdate,
    "AntiFraudServiceUpdateFields": AntiFraudServiceUpdateFields,
    "AntiFraudTransactionStatusUpdateErrorEvent": AntiFraudTransactionStatusUpdateErrorEvent,
    "AntiFraudTransactionStatusUpdateErrorEventContext": AntiFraudTransactionStatusUpdateErrorEventContext,
    "AntiFraudTransactionStatusUpdateEvent": AntiFraudTransactionStatusUpdateEvent,
    "AntiFraudTransactionStatusUpdateEventContext": AntiFraudTransactionStatusUpdateEventContext,
    "AntiFraudWebhookEvent": AntiFraudWebhookEvent,
    "AntiFraudWebhookEventContext": AntiFraudWebhookEventContext,
    "ApiLog": ApiLog,
    "ApiLogResponseBody": ApiLogResponseBody,
    "ApiLogResponseBodyDetails": ApiLogResponseBodyDetails,
    "ApiLogs": ApiLogs,
    "ApplePayRequest": ApplePayRequest,
    "ApplePaySessionRequest": ApplePaySessionRequest,
    "AuditLog": AuditLog,
    "AuditLogResource": AuditLogResource,
    "AuditLogUser": AuditLogUser,
    "AuditLogs": AuditLogs,
    "BINLookupRequest": BINLookupRequest,
    "BINLookupRequestContext": BINLookupRequestContext,
    "BillingDetails": BillingDetails,
    "BillingDetailsRequest": BillingDetailsRequest,
    "BillingDetailsUpdateRequest": BillingDetailsUpdateRequest,
    "BrowserInfo": BrowserInfo,
    "Buyer": Buyer,
    "BuyerRequest": BuyerRequest,
    "BuyerSnapshot": BuyerSnapshot,
    "BuyerUpdate": BuyerUpdate,
    "Buyers": Buyers,
    "CardDetails": CardDetails,
    "CardRequest": CardRequest,
    "CardSchemeDefinition": CardSchemeDefinition,
    "CardSchemeDefinitions": CardSchemeDefinitions,
    "CartItem": CartItem,
    "CheckoutSession": CheckoutSession,
    "CheckoutSessionCreateRequest": CheckoutSessionCreateRequest,
    "CheckoutSessionPaymentMethod": CheckoutSessionPaymentMethod,
    "CheckoutSessionPaymentMethodDetails": CheckoutSessionPaymentMethodDetails,
    "CheckoutSessionRequest": CheckoutSessionRequest,
    "CheckoutSessionUpdateRequest": CheckoutSessionUpdateRequest,
    "ClickToPaySessionRequest": ClickToPaySessionRequest,
    "Connection": Connection,
    "ConnectionDefinition": ConnectionDefinition,
    "ConnectionDefinitions": ConnectionDefinitions,
    "ConnectionOptions": ConnectionOptions,
    "ConnectionOptionsAdyenCard": ConnectionOptionsAdyenCard,
    "ConnectionOptionsCybersourceAntiFraud": ConnectionOptionsCybersourceAntiFraud,
    "ConnectionOptionsForterAntiFraud": ConnectionOptionsForterAntiFraud,
    "ConnectionOptionsForterAntiFraudAddress": ConnectionOptionsForterAntiFraudAddress,
    "ConnectionOptionsForterAntiFraudBasicItemData": ConnectionOptionsForterAntiFraudBasicItemData,
    "ConnectionOptionsForterAntiFraudBeneficiaries": ConnectionOptionsForterAntiFraudBeneficiaries,
    "ConnectionOptionsForterAntiFraudCartItems": ConnectionOptionsForterAntiFraudCartItems,
    "ConnectionOptionsForterAntiFraudComments": ConnectionOptionsForterAntiFraudComments,
    "ConnectionOptionsForterAntiFraudDeliveryDetails": ConnectionOptionsForterAntiFraudDeliveryDetails,
    "ConnectionOptionsForterAntiFraudPersonalDetails": ConnectionOptionsForterAntiFraudPersonalDetails,
    "ConnectionOptionsForterAntiFraudPhone": ConnectionOptionsForterAntiFraudPhone,
    "ConnectionOptionsForterAntiFraudTotalDiscount": ConnectionOptionsForterAntiFraudTotalDiscount,
    "ConnectionOptionsForterAntiFraudTotalDiscountCouponDiscountAmount": ConnectionOptionsForterAntiFraudTotalDiscountCouponDiscountAmount,
    "ConnectionOptionsPaypalPaypal": ConnectionOptionsPaypalPaypal,
    "ConnectionOptionsPaypalPaypalAdditionalData": ConnectionOptionsPaypalPaypalAdditionalData,
    "Connections": Connections,
    "Cryptogram": Cryptogram,
    "DigitalWallet": DigitalWallet,
    "DigitalWalletApplePayTokenDecrypted": DigitalWalletApplePayTokenDecrypted,
    "DigitalWalletApplePayTokenDecryptedContext": DigitalWalletApplePayTokenDecryptedContext,
    "DigitalWalletClickToPayFields": DigitalWalletClickToPayFields,
    "DigitalWalletClickToPayTokenDecrypted": DigitalWalletClickToPayTokenDecrypted,
    "DigitalWalletClickToPayTokenDecryptedContext": DigitalWalletClickToPayTokenDecryptedContext,
    "DigitalWalletGooglePayTokenDecrypted": DigitalWalletGooglePayTokenDecrypted,
    "DigitalWalletGooglePayTokenDecryptedContext": DigitalWalletGooglePayTokenDecryptedContext,
    "DigitalWalletRequest": DigitalWalletRequest,
    "DigitalWalletUpdate": DigitalWalletUpdate,
    "DigitalWallets": DigitalWallets,
    "Error400BadRequest": Error400BadRequest,
    "Error400IncorrectJson": Error400IncorrectJson,
    "Error400InvalidCredentials": Error400InvalidCredentials,
    "Error401Unauthorized": Error401Unauthorized,
    "Error403Forbidden": Error403Forbidden,
    "Error404NotFound": Error404NotFound,
    "Error404PendingCreation": Error404PendingCreation,
    "Error409DuplicateRecord": Error409DuplicateRecord,
    "ErrorDetail": ErrorDetail,
    "ErrorGeneric": ErrorGeneric,
    "GiftCard": GiftCard,
    "GiftCardBalanceNewRequest": GiftCardBalanceNewRequest,
    "GiftCardBalanceRequest": GiftCardBalanceRequest,
    "GiftCardBalanceStoredRequest": GiftCardBalanceStoredRequest,
    "GiftCardBalancesRequest": GiftCardBalancesRequest,
    "GiftCardRedemption": GiftCardRedemption,
    "GiftCardService": GiftCardService,
    "GiftCardServiceCreateRequest": GiftCardServiceCreateRequest,
    "GiftCardServiceCreateRequestFields": GiftCardServiceCreateRequestFields,
    "GiftCardServiceDefinition": GiftCardServiceDefinition,
    "GiftCardServiceDefinitionFields": GiftCardServiceDefinitionFields,
    "GiftCardServiceFields": GiftCardServiceFields,
    "GiftCardServiceSnapshot": GiftCardServiceSnapshot,
    "GiftCardServiceUpdateRequest": GiftCardServiceUpdateRequest,
    "GiftCardServiceUpdateRequestFields": GiftCardServiceUpdateRequestFields,
    "GiftCardServiceVerifyRequest": GiftCardServiceVerifyRequest,
    "GiftCardServiceVerifyRequestFields": GiftCardServiceVerifyRequestFields,
    "GiftCardSnapshot": GiftCardSnapshot,
    "GiftCardStoreRequest": GiftCardStoreRequest,
    "GiftCardSummary": GiftCardSummary,
    "GiftCards": GiftCards,
    "GiftCardsSummary": GiftCardsSummary,
    "GooglePayRequest": GooglePayRequest,
    "GooglePayRequestAssuranceDetails": GooglePayRequestAssuranceDetails,
    "GooglePaySessionRequest": GooglePaySessionRequest,
    "IssueCryptogramRequest": IssueCryptogramRequest,
    "MerchantAccount": MerchantAccount,
    "MerchantAccountCreate": MerchantAccountCreate,
    "MerchantAccountUpdate": MerchantAccountUpdate,
    "MerchantAccounts": MerchantAccounts,
    "MerchantProfile": MerchantProfile,
    "MerchantProfileScheme": MerchantProfileScheme,
    "NetworkToken": NetworkToken,
    "NetworkTokenRequest": NetworkTokenRequest,
    "NetworkTokens": NetworkTokens,
    "PaymentConnectorExternalTransactionRequest": PaymentConnectorExternalTransactionRequest,
    "PaymentConnectorExternalTransactionRequestContext": PaymentConnectorExternalTransactionRequestContext,
    "PaymentConnectorResponseTransactionAuthorizationFailedEvent": PaymentConnectorResponseTransactionAuthorizationFailedEvent,
    "PaymentConnectorResponseTransactionAuthorizationFailedEventContext": PaymentConnectorResponseTransactionAuthorizationFailedEventContext,
    "PaymentConnectorResponseTransactionAuthorizationSucceededEvent": PaymentConnectorResponseTransactionAuthorizationSucceededEvent,
    "PaymentConnectorResponseTransactionAuthorizationSucceededEventContext": PaymentConnectorResponseTransactionAuthorizationSucceededEventContext,
    "PaymentConnectorResponseTransactionCaptureDeclinedEvent": PaymentConnectorResponseTransactionCaptureDeclinedEvent,
    "PaymentConnectorResponseTransactionCaptureDeclinedEventContext": PaymentConnectorResponseTransactionCaptureDeclinedEventContext,
    "PaymentConnectorResponseTransactionCaptureFailedEvent": PaymentConnectorResponseTransactionCaptureFailedEvent,
    "PaymentConnectorResponseTransactionCaptureSucceededEvent": PaymentConnectorResponseTransactionCaptureSucceededEvent,
    "PaymentConnectorResponseTransactionCaptureSucceededEventContext": PaymentConnectorResponseTransactionCaptureSucceededEventContext,
    "PaymentConnectorResponseTransactionDeclinedEvent": PaymentConnectorResponseTransactionDeclinedEvent,
    "PaymentConnectorResponseTransactionDeclinedEventContext": PaymentConnectorResponseTransactionDeclinedEventContext,
    "PaymentConnectorResponseTransactionVoidDeclinedEvent": PaymentConnectorResponseTransactionVoidDeclinedEvent,
    "PaymentConnectorResponseTransactionVoidDeclinedEventContext": PaymentConnectorResponseTransactionVoidDeclinedEventContext,
    "PaymentConnectorResponseTransactionVoidFailedEvent": PaymentConnectorResponseTransactionVoidFailedEvent,
    "PaymentConnectorResponseTransactionVoidFailedEventContext": PaymentConnectorResponseTransactionVoidFailedEventContext,
    "PaymentConnectorResponseTransactionVoidSucceededEvent": PaymentConnectorResponseTransactionVoidSucceededEvent,
    "PaymentConnectorResponseTransactionVoidSucceededEventContext": PaymentConnectorResponseTransactionVoidSucceededEventContext,
    "PaymentMethod": PaymentMethod,
    "PaymentMethodDefinition": PaymentMethodDefinition,
    "PaymentMethodDefinitions": PaymentMethodDefinitions,
    "PaymentMethodDetailsCard": PaymentMethodDetailsCard,
    "PaymentMethodRequest": PaymentMethodRequest,
    "PaymentMethodSnapshot": PaymentMethodSnapshot,
    "PaymentMethodTokenized": PaymentMethodTokenized,
    "PaymentMethods": PaymentMethods,
    "PaymentMethodsTokenized": PaymentMethodsTokenized,
    "PaymentOption": PaymentOption,
    "PaymentOptionApprovalUI": PaymentOptionApprovalUI,
    "PaymentOptionContext": PaymentOptionContext,
    "PaymentOptions": PaymentOptions,
    "PaymentOptionsRequest": PaymentOptionsRequest,
    "PaymentService": PaymentService,
    "PaymentServiceDefinition": PaymentServiceDefinition,
    "PaymentServiceDefinitionConfiguration": PaymentServiceDefinitionConfiguration,
    "PaymentServiceDefinitionSupportedFeatures": PaymentServiceDefinitionSupportedFeatures,
    "PaymentServiceDefinitions": PaymentServiceDefinitions,
    "PaymentServiceRequest": PaymentServiceRequest,
    "PaymentServiceRequestFields": PaymentServiceRequestFields,
    "PaymentServiceSnapshot": PaymentServiceSnapshot,
    "PaymentServiceToken": PaymentServiceToken,
    "PaymentServiceTokenRequest": PaymentServiceTokenRequest,
    "PaymentServiceTokens": PaymentServiceTokens,
    "PaymentServiceUpdate": PaymentServiceUpdate,
    "PaymentServices": PaymentServices,
    "RedirectRequest": RedirectRequest,
    "Refund": Refund,
    "Refunds": Refunds,
    "Report": Report,
    "ReportCreate": ReportCreate,
    "ReportExecution": ReportExecution,
    "ReportExecutionSummary": ReportExecutionSummary,
    "ReportExecutionSummaryContext": ReportExecutionSummaryContext,
    "ReportExecutionUrl": ReportExecutionUrl,
    "ReportExecutions": ReportExecutions,
    "ReportSpec": ReportSpec,
    "ReportSummary": ReportSummary,
    "ReportUpdate": ReportUpdate,
    "Reports": Reports,
    "RequiredFields": RequiredFields,
    "RequiredFieldsAddress": RequiredFieldsAddress,
    "ResetPasswordRequest": ResetPasswordRequest,
    "Role": Role,
    "RoleAssignment": RoleAssignment,
    "RoleAssignmentAssignee": RoleAssignmentAssignee,
    "RoleAssignmentRequest": RoleAssignmentRequest,
    "RoleAssignmentRequestAssignee": RoleAssignmentRequestAssignee,
    "RoleAssignmentRequestRole": RoleAssignmentRequestRole,
    "RoleAssignments": RoleAssignments,
    "RolePermissions": RolePermissions,
    "Roles": Roles,
    "SetPasswordRequest": SetPasswordRequest,
    "ShippingDetail": ShippingDetail,
    "ShippingDetailRequest": ShippingDetailRequest,
    "ShippingDetailUpdateRequest": ShippingDetailUpdateRequest,
    "ShippingDetails": ShippingDetails,
    "StatementDescriptor": StatementDescriptor,
    "TaxId": TaxId,
    "ThreeDSecureAuthenticationRequestEvent": ThreeDSecureAuthenticationRequestEvent,
    "ThreeDSecureAuthenticationRequestEventContext": ThreeDSecureAuthenticationRequestEventContext,
    "ThreeDSecureData": ThreeDSecureData,
    "ThreeDSecureDataV1": ThreeDSecureDataV1,
    "ThreeDSecureDataV1AllOf": ThreeDSecureDataV1AllOf,
    "ThreeDSecureDataV1V2": ThreeDSecureDataV1V2,
    "ThreeDSecureDataV2": ThreeDSecureDataV2,
    "ThreeDSecureDataV2AllOf": ThreeDSecureDataV2AllOf,
    "ThreeDSecureError": ThreeDSecureError,
    "ThreeDSecurePreparationRequestEvent": ThreeDSecurePreparationRequestEvent,
    "ThreeDSecurePreparationRequestEventContext": ThreeDSecurePreparationRequestEventContext,
    "ThreeDSecureRequestErrorEvent": ThreeDSecureRequestErrorEvent,
    "ThreeDSecureRequestErrorEventContext": ThreeDSecureRequestErrorEventContext,
    "ThreeDSecureResultRequestEvent": ThreeDSecureResultRequestEvent,
    "ThreeDSecureResultRequestEventContext": ThreeDSecureResultRequestEventContext,
    "ThreeDSecureSuccessEvent": ThreeDSecureSuccessEvent,
    "ThreeDSecureSuccessEventContext": ThreeDSecureSuccessEventContext,
    "ThreeDSecureSummary": ThreeDSecureSummary,
    "ThreeDSecureV2": ThreeDSecureV2,
    "TokenizedRequest": TokenizedRequest,
    "Transaction": Transaction,
    "TransactionCaptureRequest": TransactionCaptureRequest,
    "TransactionCardRequest": TransactionCardRequest,
    "TransactionCheckoutSessionRequest": TransactionCheckoutSessionRequest,
    "TransactionGiftCardNewRequest": TransactionGiftCardNewRequest,
    "TransactionGiftCardRequest": TransactionGiftCardRequest,
    "TransactionGiftCardStoredRequest": TransactionGiftCardStoredRequest,
    "TransactionHistoryEvent": TransactionHistoryEvent,
    "TransactionHistoryEvents": TransactionHistoryEvents,
    "TransactionPaymentMethodRequest": TransactionPaymentMethodRequest,
    "TransactionRedirectRequest": TransactionRedirectRequest,
    "TransactionRefundRequest": TransactionRefundRequest,
    "TransactionRequest": TransactionRequest,
    "TransactionStatusSummary": TransactionStatusSummary,
    "TransactionSummary": TransactionSummary,
    "Transactions": Transactions,
    "TransactionsBatchCaptureRequest": TransactionsBatchCaptureRequest,
    "UserCurrentUpdate": UserCurrentUpdate,
    "UserRequest": UserRequest,
    "UserRole": UserRole,
    "UserUpdate": UserUpdate,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
