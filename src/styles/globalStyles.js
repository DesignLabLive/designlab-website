import { css } from "@emotion/core"
import VariableFont from "./Inter-upright.woff2"

export const globalStyles = css`
  @font-face {
    font-family: "Avenir";
    font-weight: 400;
    font-style: normal;
    src: url("/avenir-400.woff2") format("woff2");
    font-display: swap;
  }

  body {
    font-family: "Avenir", Tahoma, Arial, Helvetica, sans-serif;
    font-size: 1em;
    line-height: 1.65;
    margin: 0;
  }
`
