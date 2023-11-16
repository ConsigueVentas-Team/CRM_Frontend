/// <reference types="vite/client" />

declare module "@georgedoescode/generative-utils";
declare module "@svgdotjs/svg.js" {
  interface Element {
    viewbox(x: number, y: number, width: number, height: number): this;
  }
}

declare global {
  interface Window {
    tl: gsap.core.Timeline;
  }
}