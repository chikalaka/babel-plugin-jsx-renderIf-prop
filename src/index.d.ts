import * as React from "react";

declare module "react" {
    interface Attributes {
        renderIf?: boolean;
    }
}
