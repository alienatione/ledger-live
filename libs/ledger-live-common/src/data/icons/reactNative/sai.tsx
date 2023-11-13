
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function sai({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path d="M20.1124 12.0004L12.0004 3.88763L3.88763 12.0004L12.0004 14.9974L20.1124 12.0004ZM6.41063 11.3126L11.9104 5.68913C11.9104 5.68913 17.2871 11.1889 17.5136 11.2991C17.7409 11.4086 13.8154 11.2991 13.8154 11.2991L12.0004 9.44288L10.1644 11.3126H6.41063ZM12.0004 15.5681L20.1124 12.5501L12.0004 20.1124L3.88763 12.5914L12.0004 15.5689V15.5681Z" fill={color} /></Svg>;
}
export default sai;