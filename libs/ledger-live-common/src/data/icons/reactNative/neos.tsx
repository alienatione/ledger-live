
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function neos({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path fillRule="evenodd" clipRule="evenodd" d="M7.875 7.0185L13.9822 10.713V13.0358L9.69675 10.461V19.5H7.875V7.0185ZM16.125 16.9815L10.0178 13.287V10.965L14.3032 13.5397V4.5H16.125V16.9815Z" fill={color} /></Svg>;
}
export default neos;