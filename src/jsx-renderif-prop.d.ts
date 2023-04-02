import "react";

declare module "react" {
    interface Attributes {
        renderIf?: boolean;
    }
}
