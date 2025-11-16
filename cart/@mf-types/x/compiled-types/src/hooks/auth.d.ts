import { BehaviorSubject } from "rxjs";
export declare const jwt: BehaviorSubject<string | null>;
export declare const auth$: import("rxjs").Observable<string | null>;
export declare const authChannel: BroadcastChannel;
export declare const notifyAuthChange: (event: string, data: any) => void;
export declare const login: (username: string, password: string) => Promise<any>;
export declare const logout: () => void;
export declare function useAuth(): boolean;
