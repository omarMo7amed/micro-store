
    export type RemoteKeys = 'pdp/Product';
    type PackageType<T> = T extends 'pdp/Product' ? typeof import('pdp/Product') :any;