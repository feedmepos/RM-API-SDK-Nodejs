import crypto = require('crypto')
import { RMSDKInstance, RM } from '../'
import { generateSignature } from '../signature'

export function createWebPay(this: RMSDKInstance, accessToken: string, data: RM.CreateWebPayPayload) {
    const nonceStr = crypto.randomBytes(32).toString('hex')
    const timestamp = new Date().getTime().toString()
    
    return this.openApiInstance({
        url: '/payment/online',
        method: 'post',
        data,
        headers: {
            'Authorization': 'Bearer ' + accessToken,
            'X-Timestamp': timestamp,
            'X-Nonce-Str': nonceStr,
            'X-Signature': 'sha256 ' + generateSignature({
                data,
                requestUrl: this.openApiUrl + '/payment/online',
                nonceStr,
                signType: 'sha256',
                method: 'post',
                timestamp,
            }, this.privateKey)
        }
    })
}