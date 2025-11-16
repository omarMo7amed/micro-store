import { BehaviorSubject } from "rxjs";
export declare const cart: BehaviorSubject<null>;
export declare const cartChannel: BroadcastChannel;
export declare const notifyCartChange: (message: any) => void;
export declare const listenCartChange: (callback: (message: {
    event: string;
    data: any;
}) => void) => void;
export declare const getCart: () => Promise<any>;
export declare const addToCart: (id: number) => Promise<any>;
