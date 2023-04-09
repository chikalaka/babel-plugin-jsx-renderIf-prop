import * as React from 'react';

declare global {
    namespace JSX {
        interface IntrinsicAttributes {
            renderIf?: boolean;
        }
    }
}