import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const ScanTargetSvg = (props: SvgProps) => (
  <Svg width={289} height={289} fill="none" {...props}>
    <Path fill="transparent" d="M0 0h289v289H0z" />
    <Path
      fill="#000"
      fillOpacity={0.8}
      fillRule="evenodd"
      d="M350-143H-43v852h393v-852ZM7.488 21.472C4 28.317 4 37.278 4 55.2v178.6c0 17.922 0 26.883 3.488 33.728a32 32 0 0 0 13.984 13.984C28.317 285 37.278 285 55.2 285h178.6c17.922 0 26.883 0 33.728-3.488a32 32 0 0 0 13.984-13.984C285 260.683 285 251.722 285 233.8V55.2c0-17.922 0-26.883-3.488-33.728a32 32 0 0 0-13.984-13.984C260.683 4 251.722 4 233.8 4H55.2C37.278 4 28.317 4 21.472 7.488A32 32 0 0 0 7.488 21.472Z"
      clipRule="evenodd"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={7}
      d="M4 74.25V55.2c0-17.922 0-26.883 3.488-33.728A32 32 0 0 1 21.472 7.488C28.317 4 37.278 4 55.2 4h19.05M4 214.75v19.05c0 17.922 0 26.883 3.488 33.728a32 32 0 0 0 13.984 13.984C28.317 285 37.278 285 55.2 285h19.05m140.5 0h19.05c17.922 0 26.883 0 33.728-3.488a32 32 0 0 0 13.984-13.984C285 260.683 285 251.722 285 233.8v-19.05m0-140.5V55.2c0-17.922 0-26.883-3.488-33.728a32 32 0 0 0-13.984-13.984C260.683 4 251.722 4 233.8 4h-19.05"
    />
  </Svg>
);
export default ScanTargetSvg;
