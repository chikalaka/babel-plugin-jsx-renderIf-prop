import React from "react";

declare module "react" {
    interface Attributes {
        show?: boolean;
    }
}

// type AddShowProp<T> = {
//     [K in keyof T]: T[K] & { show?: boolean };
// };
//
// declare global {
//     namespace JSX {
//         interface IntrinsicElements extends AddShowProp<JSX.IntrinsicElements> {}
//     }
// }
