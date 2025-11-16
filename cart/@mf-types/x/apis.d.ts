
    export type RemoteKeys = 'x/auth';
    type PackageType<T> = T extends 'x/auth' ? typeof import('x/auth') :any;