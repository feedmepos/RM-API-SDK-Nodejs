import { RMSDKInstance } from '.';
/**
 * Get client credential (Authentication)
 * will return null if clientId and clientSecret incorrect
 */
export declare function getClientCredentials(this: RMSDKInstance): import("axios").AxiosPromise<any>;
/**
 * Refresh token
 */
export declare function refreshToken(this: RMSDKInstance, refreshToken: string): import("axios").AxiosPromise<any>;
//# sourceMappingURL=credentials.d.ts.map