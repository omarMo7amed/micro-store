export declare function publish(topic: string, data: any): void;
export declare function subscribe(topic: string, handler: (data: any) => void): void;
export declare function unsubscribe(topic: string, handler: (data: any) => void): void;
