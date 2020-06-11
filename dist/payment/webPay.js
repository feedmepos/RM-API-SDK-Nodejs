"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crypto = require("crypto");
var signature_1 = require("../signature");
function createWebPay(accessToken, data) {
    var nonceStr = crypto.randomBytes(32).toString('hex');
    var timestamp = new Date().getTime().toString();
    return this.openApiInstance({
        url: '/payment/online',
        method: 'post',
        data: signature_1.sortObject(data),
        headers: {
            'Authorization': 'Bearer ' + accessToken,
            'X-Timestamp': timestamp,
            'X-Nonce-Str': nonceStr,
            'X-Signature': 'sha256 ' + signature_1.generateSignature({
                data: data,
                requestUrl: this.openApiUrl + '/payment/online',
                nonceStr: nonceStr,
                signType: 'sha256',
                method: 'post',
                timestamp: timestamp,
            }, this.privateKey)
        }
    });
}
exports.createWebPay = createWebPay;
//# sourceMappingURL=webPay.js.map