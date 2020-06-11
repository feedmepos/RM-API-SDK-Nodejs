import { RMSDKInstance } from ".";
export declare function getStores(this: RMSDKInstance, accessToken: string): import("axios").AxiosPromise<any>;
export declare function getStoreById(this: RMSDKInstance, accessToken: string, storeId: string): import("axios").AxiosPromise<any>;
export declare function createStore(this: RMSDKInstance, accessToken: string, data: object): import("axios").AxiosPromise<any>;
export declare function updateStore(this: RMSDKInstance, accessToken: string, storeId: string, data: object): import("axios").AxiosPromise<any>;
export declare function deleteStore(this: RMSDKInstance, accessToken: string, storeId: string): import("axios").AxiosPromise<any>;
//# sourceMappingURL=store.d.ts.map