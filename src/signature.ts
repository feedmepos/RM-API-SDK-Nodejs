import crypto = require('crypto');

export function sortObject(obj: any): any {
    const ordered: any = {};
    Object.keys(obj).sort().forEach((key): void => {
      ordered[key] = obj[key];
    });
    return ordered;
}

export function generateSignature(arg: {
    data: any,
    requestUrl: string,
    nonceStr: string,
    signType: string,
    method: string,
    timestamp: string,
}, privateKey: string): string {

    let signature_data = ''

    if (arg.data !== null && typeof arg.data === 'object') {
        const signature_body = sortObject(arg.data)
        const signature = Buffer.from(JSON.stringify(signature_body)).toString('base64')
        signature_data = 'data=' + signature + '&'
    }

    const full_signature = signature_data
    + 'method=' + arg.method
    + '&nonceStr=' + arg.nonceStr
    + '&requestUrl=' + arg.requestUrl
    + '&signType=' + arg.signType
    + '&timestamp=' + arg.timestamp

    return crypto
        .createSign('SHA256')
        .update(full_signature)
        .sign(privateKey, 'base64')
}