declare module 'babel-plugin-jsx-renderif-prop' {
    import * as React from 'react';

    namespace JSX {
        interface IntrinsicAttributes {
            renderIf?: boolean;
        }
    }
}