declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export = classes;
}
declare module "*.png" {
  const value: string;
  export default value;
}
declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.jpeg" {
  const value: string;
  export default value;
}

declare module "*.gif" {
  const value: string;
  export default value;
}
declare module "*.svg" {
  import * as React from "react";

  const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  export default ReactComponent;
}
declare module "*.wav" {
  const value: string;
  export default value;
}

declare const __PLATFORM__: 'mobile' | 'desktop'