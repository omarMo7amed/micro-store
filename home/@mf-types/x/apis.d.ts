
    export type RemoteKeys = 'x/auth' | 'x/sharedState';
    type PackageType<T> = T extends 'x/sharedState' ? typeof import('x/sharedState') :T extends 'x/auth' ? typeof import('x/auth') :any;