
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function med({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path d="M18 9.04575V15.732L16.098 16.842V12.3795L12 14.832L7.902 12.3773V16.842L6 15.732V9.045L12 12.6488L18 9.045V9.04575ZM12.0225 17.3835L13.7775 16.3342L15.51 17.3835L12.0225 19.5L8.5365 17.3835L10.269 16.3342L12.0233 17.3835H12.0225ZM15.4875 6.6165L13.7543 7.66575L12 6.6165L10.2458 7.66575L8.51325 6.6165L12 4.5L15.4875 6.6165Z" fill={color} /></Svg>;
}
export default med;