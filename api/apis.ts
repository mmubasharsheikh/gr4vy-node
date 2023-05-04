export * from './aPILogsApi';
import { APILogsApi } from './aPILogsApi';
export * from './auditLogsApi';
import { AuditLogsApi } from './auditLogsApi';
export * from './buyersApi';
import { BuyersApi } from './buyersApi';
export * from './cardSchemeDefinitionsApi';
import { CardSchemeDefinitionsApi } from './cardSchemeDefinitionsApi';
export * from './checkoutSessionsApi';
import { CheckoutSessionsApi } from './checkoutSessionsApi';
export * from './digitalWalletsApi';
import { DigitalWalletsApi } from './digitalWalletsApi';
export * from './merchantAccountsApi';
import { MerchantAccountsApi } from './merchantAccountsApi';
export * from './paymentMethodDefinitionsApi';
import { PaymentMethodDefinitionsApi } from './paymentMethodDefinitionsApi';
export * from './paymentMethodsApi';
import { PaymentMethodsApi } from './paymentMethodsApi';
export * from './paymentOptionsApi';
import { PaymentOptionsApi } from './paymentOptionsApi';
export * from './paymentServiceDefinitionsApi';
import { PaymentServiceDefinitionsApi } from './paymentServiceDefinitionsApi';
export * from './paymentServicesApi';
import { PaymentServicesApi } from './paymentServicesApi';
export * from './reportsApi';
import { ReportsApi } from './reportsApi';
export * from './rolesApi';
import { RolesApi } from './rolesApi';
export * from './transactionsApi';
import { TransactionsApi } from './transactionsApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [APILogsApi, AuditLogsApi, BuyersApi, CardSchemeDefinitionsApi, CheckoutSessionsApi, DigitalWalletsApi, MerchantAccountsApi, PaymentMethodDefinitionsApi, PaymentMethodsApi, PaymentOptionsApi, PaymentServiceDefinitionsApi, PaymentServicesApi, ReportsApi, RolesApi, TransactionsApi];
