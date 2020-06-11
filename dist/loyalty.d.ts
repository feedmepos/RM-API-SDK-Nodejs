import { RMSDKInstance } from ".";
export interface ILoyaltyRewardArg {
    point: number;
    type: 'PHONENUMBER' | 'ID';
    memberId?: string;
    countryCode?: string;
    phoneNumber?: string;
}
export declare function giveLoyaltyPoint(this: RMSDKInstance, accessToken: string, data: ILoyaltyRewardArg): import("axios").AxiosPromise<any>;
//# sourceMappingURL=loyalty.d.ts.map