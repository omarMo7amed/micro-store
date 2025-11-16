
    export type RemoteKeys = 'cart/MiniCart' | 'cart/Cart' | 'cart/cart';
    type PackageType<T> = T extends 'cart/cart' ? typeof import('cart/cart') :T extends 'cart/Cart' ? typeof import('cart/Cart') :T extends 'cart/MiniCart' ? typeof import('cart/MiniCart') :any;