import { AxiosInstance } from 'axios';
import { ILoyaltyRewardArg } from './loyalty';
export declare namespace RM {
    enum CurrencyType {
        MYR = "MYR"
    }
    interface Config {
        timeout?: number;
        isProduction?: boolean;
        clientId: string;
        clientSecret: string;
        privateKey: string;
    }
    interface Response<T = {}> {
        item: T;
        code: string;
        error?: Error;
    }
    interface Error {
        code: string;
        message: string;
    }
    class RMError extends Error implements RM.Error {
        code: string;
        constructor(message: string, code: string);
    }
    interface QuickPayPayload {
        authCode: string;
        order: Order;
        ipAddress: string;
        terminalId?: string;
        storeId: string;
    }
    interface Order {
        id: string;
        title: string;
        details: string;
        amount: number;
        additionalData: string;
        currencyType: CurrencyType;
    }
    interface PaymentTransactionItem {
        store: Store;
        referenceId: string;
        transactionId: string;
        order: Order;
        payee: {
            userId: string;
        };
        currencyType: CurrencyType;
        platform: string;
        method: string;
        type: string;
        status: string;
        error: string;
        createdAt: Date;
        updatedAt: Date;
    }
    interface Store {
        id: string;
        name: string;
        addressLine1: string;
        addressLine2: string;
        postCode: string;
        city: string;
        state: string;
        country: string;
        countryCode: string;
        phoneNumber: string;
        geoLocation: string;
        status: string;
        createdAt: string;
        updatedAt: string;
    }
    interface RefundPayload {
        transactionId: string;
        refund: Refund;
        reason: string;
    }
    interface Refund {
        amount: number;
        currencyType: CurrencyType;
        type: 'FULL' | 'PARTIAL';
    }
}
export interface RMSDKInstance {
    timeout: number;
    isProduction: boolean;
    clientId: string;
    clientSecret: string;
    privateKey: string;
    oauthApiVersion: string;
    oauthUrl: string;
    openApiVersion: string;
    openApiUrl: string;
    oauthInstance: AxiosInstance;
    openApiInstance: AxiosInstance;
    getClientCredentials: () => Promise<any>;
    refreshToken: (refreshToken: string) => Promise<any>;
    getMerchantProfile: (accessToken: string) => Promise<any>;
    getMerchantSubscriptions: (accessToken: string) => Promise<any>;
    getStores: (accessToken: string) => Promise<any>;
    getStoreById: (accessToken: string, storeId: string) => Promise<any>;
    createStore: (accessToken: string, data: object) => Promise<any>;
    updateStore: (accessToken: string, storeId: string, data: object) => Promise<any>;
    deleteStore: (accessToken: string, storeId: string) => Promise<any>;
    getUserProfile: (accessToken: string) => Promise<any>;
    giveLoyaltyPoint: (accessToken: string, data: ILoyaltyRewardArg) => Promise<any>;
    issueVoucher: (accessToken: string, batchKey: string) => Promise<any>;
    voidVoucher: (accessToken: string, code: string) => Promise<any>;
    getVoucherByCode: (accessToken: string, code: string) => Promise<any>;
    getVoucherBatches: (accessToken: string) => Promise<any>;
    getVoucherBatchByKey: (accessToken: string, batchKey: string) => Promise<any>;
    getWechatOauthUrl: (accessToken: string, redirectUrl: string) => Promise<any>;
    getWechatUserByCode: (accessToken: string, code: string) => Promise<any>;
    Payment: {
        timeout: number;
        isProduction: boolean;
        clientId: string;
        clientSecret: string;
        privateKey: string;
        oauthApiVersion: string;
        oauthUrl: string;
        openApiVersion: string;
        openApiUrl: string;
        oauthInstance: AxiosInstance;
        openApiInstance: AxiosInstance;
        initQuickPay: (acessToken: string, data: RM.QuickPayPayload) => Promise<RM.Response<RM.PaymentTransactionItem>>;
        refund: (acessToken: string, data: RM.RefundPayload) => Promise<RM.Response<RM.PaymentTransactionItem>>;
        reverse: (acessToken: string, data: object) => Promise<RM.Response<RM.PaymentTransactionItem>>;
        getPaymentTransactions: (acessToken: string) => Promise<any>;
        getPaymentTransactionById: (acessToken: string, Id: string) => Promise<RM.Response<RM.PaymentTransactionItem>>;
        getPaymentTransactionByOrderId: (acessToken: string, orderId: string) => Promise<RM.Response<RM.PaymentTransactionItem>>;
        getDailySettlementReport: (acessToken: string, data: object) => Promise<any>;
        createTransactionUrl: (acessToken: string, data: object) => Promise<any>;
        getTransactionUrl: (accessToken: string) => Promise<any>;
        getTransactionUrlByCode: (accessToken: string, code: string) => Promise<any>;
        getTransactionsByCode: (accessToken: string, code: string) => Promise<any>;
    };
}
export declare function RMSDK(instanceConfig?: RM.Config): RMSDKInstance;
export default RMSDK;
//# sourceMappingURL=index.d.ts.map