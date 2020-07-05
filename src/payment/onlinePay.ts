import crypto = require('crypto')
import { RMSDKInstance, RM } from '../'
import { generateSignature, sortObject } from '../signature'

export function createOnlinePay(this: RMSDKInstance, accessToken: string, data: RM.CreateOnlinePayPayload): Promise<RM.Response<RM.OnlinePaymentItem>> {
  const nonceStr = crypto.randomBytes(32).toString('hex')
  const timestamp = new Date().getTime().toString()
  
  return this.openApiInstance({
      url: '/payment/online',
      method: 'post',
      data: sortObject(data),
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
  }).then<RM.Response<RM.OnlinePaymentItem>>(x => x.data)
}