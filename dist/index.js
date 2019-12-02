"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var credentials_1 = require("./credentials");
var quickPay_1 = require("./payment/quickPay");
var transactionQR_1 = require("./payment/transactionQR");
var merchant_1 = require("./merchant");
var user_1 = require("./user");
var store_1 = require("./store");
var loyalty_1 = require("./loyalty");
var voucher_1 = require("./voucher");
var wechat_1 = require("./wechat");
var RM;
(function (RM) {
    var RMError = /** @class */ (function (_super) {
        __extends(RMError, _super);
        function RMError(message, code) {
            var _this = _super.call(this, message) || this;
            _this.code = code;
            return _this;
        }
        return RMError;
    }(Error));
    RM.RMError = RMError;
})(RM = exports.RM || (exports.RM = {}));
function axiosFactory(url, timeout) {
    var client = axios_1.default.create({
        baseURL: url,
        timeout: timeout,
        headers: {
            'User-Agent': 'RM API Client Nodejs',
            'Content-Type': 'application/json'
        }
    });
    client.interceptors.response.use(function (response) {
        if (response && response.data && response.data.error) {
            return Promise.reject(new RM.RMError(response.data.error.message, response.data.error.code));
        }
        return response;
    }, function (error) {
        if (error.response && error.response.data && error.response.data.error) {
            return Promise.reject(new RM.RMError(error.response.data.error.message, error.response.data.error.code));
        }
        return Promise.reject(new RM.RMError('unhandled revenue monster error', 'UNKNOWN_ERROR'));
    });
    return client;
}
function RMSDK(instanceConfig) {
    var defaults = {
        timeout: 2000,
        isProduction: false,
        clientId: '',
        clientSecret: '',
        privateKey: '',
        oauthApiVersion: 'v1',
        openApiVersion: 'v3',
    };
    var config = __assign({}, defaults, instanceConfig);
    var oauthUrl = config.isProduction
        ? 'https://oauth.revenuemonster.my/' + config.oauthApiVersion
        : 'https://sb-oauth.revenuemonster.my/' + config.oauthApiVersion;
    var openApiUrl = config.isProduction
        ? 'https://open.revenuemonster.my/' + config.openApiVersion
        : 'https://sb-open.revenuemonster.my/' + config.openApiVersion;
    var oauthInstance = axiosFactory(oauthUrl, config.timeout);
    var openApiInstance = axiosFactory(openApiUrl, config.timeout);
    return {
        timeout: config.timeout,
        isProduction: config.isProduction,
        clientId: config.clientId,
        clientSecret: config.clientSecret,
        privateKey: config.privateKey,
        oauthApiVersion: config.oauthApiVersion,
        oauthUrl: oauthUrl,
        openApiVersion: config.openApiVersion,
        openApiUrl: openApiUrl,
        oauthInstance: oauthInstance,
        openApiInstance: openApiInstance,
        getClientCredentials: credentials_1.getClientCredentials,
        refreshToken: credentials_1.refreshToken,
        getMerchantProfile: merchant_1.getMerchantProfile,
        getMerchantSubscriptions: merchant_1.getMerchantSubscriptions,
        getStores: store_1.getStores,
        getStoreById: store_1.getStoreById,
        createStore: store_1.createStore,
        updateStore: store_1.updateStore,
        deleteStore: store_1.deleteStore,
        getUserProfile: user_1.getUserProfile,
        Payment: {
            timeout: config.timeout,
            isProduction: config.isProduction,
            clientId: config.clientId,
            clientSecret: config.clientSecret,
            privateKey: config.privateKey,
            oauthApiVersion: config.oauthApiVersion,
            oauthUrl: oauthUrl,
            openApiVersion: config.openApiVersion,
            openApiUrl: openApiUrl,
            oauthInstance: oauthInstance,
            openApiInstance: openApiInstance,
            initQuickPay: quickPay_1.initQuickPay,
            refund: quickPay_1.refund,
            reverse: quickPay_1.reverse,
            getPaymentTransactions: quickPay_1.getPaymentTransactions,
            getPaymentTransactionById: quickPay_1.getPaymentTransactionById,
            getPaymentTransactionByOrderId: quickPay_1.getPaymentTransactionByOrderId,
            getDailySettlementReport: quickPay_1.getDailySettlementReport,
            createTransactionUrl: transactionQR_1.createTransactionUrl,
            getTransactionUrl: transactionQR_1.getTransactionUrl,
            getTransactionUrlByCode: transactionQR_1.getTransactionUrlByCode,
            getTransactionsByCode: transactionQR_1.getTransactionsByCode,
        },
        giveLoyaltyPoint: loyalty_1.giveLoyaltyPoint,
        issueVoucher: voucher_1.issueVoucher,
        voidVoucher: voucher_1.voidVoucher,
        getVoucherByCode: voucher_1.getVoucherByCode,
        getVoucherBatches: voucher_1.getVoucherBatches,
        getVoucherBatchByKey: voucher_1.getVoucherBatchByKey,
        getWechatOauthUrl: wechat_1.getWechatOauthUrl,
        getWechatUserByCode: wechat_1.getWechatUserByCode,
    };
}
exports.RMSDK = RMSDK;
exports.default = RMSDK;
//# sourceMappingURL=index.js.map