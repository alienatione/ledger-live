
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function cro({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><Path d="M11.9999 2L3.5 7.01119V16.9888L11.9999 22L20.4997 16.9888V7.01119L11.9999 2ZM17.9894 15.5123L11.9999 19.0022L6.01032 15.5123V8.4877L11.9999 4.95302L17.9894 8.4877V15.5123Z" fill={color} /><Path d="M11.9999 4.95302V2L3.5 7.01119V16.9888L11.9999 22V19.0022L6.01032 15.5123V8.4877L11.9999 4.95302Z" fill={color} /><Path d="M11.9999 19.0022L12.0001 21.9553L20.5 16.9441L20.4997 7.01119L11.9999 2V4.95302L17.9897 8.44295V15.4676L11.9999 19.0022Z" fill={color} /><Path d="M16.0081 14.3039L12.0004 16.6305L8.03671 14.3039V9.65061L12.0004 7.32399L16.0081 9.65061V14.3039Z" fill={color} /></Svg>;
}
export default cro;