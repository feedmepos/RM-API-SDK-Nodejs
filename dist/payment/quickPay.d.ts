import { RMSDKInstance, RM } from '../';
/**
 * Quick Pay QR
 *
 * @return {Object} Transaction object("item")
 */
export declare function initQuickPay(this: RMSDKInstance, accessToken: string, data: RM.QuickPayPayload): Promise<RM.Response<RM.PaymentTransactionItem>>;
export declare function refund(this: RMSDKInstance, accessToken: string, data: RM.RefundPayload): Promise<RM.Response<RM.PaymentTransactionItem>>;
export declare function reverse(this: RMSDKInstance, accessToken: string, data: object): Promise<RM.Response<RM.PaymentTransactionItem>>;
export declare function getPaymentTransactions(this: RMSDKInstance, accessToken: string): import("axios").AxiosPromise<any>;
export declare function getPaymentTransactionById(this: RMSDKInstance, accessToken: string, Id: string): Promise<RM.Response<RM.PaymentTransactionItem>>;
export declare function getPaymentTransactionByOrderId(this: RMSDKInstance, accessToken: string, orderId: string): Promise<RM.Response<RM.PaymentTransactionItem>>;
export declare function getDailySettlementReport(this: RMSDKInstance, accessToken: string, data: object): import("axios").AxiosPromise<any>;
//# sourceMappingURL=quickPay.d.ts.map