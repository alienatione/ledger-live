
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function tyc({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><Path d="M12 12.1L15.7 10.7L15.9 10.6L16.7 9.1L13.9 10.2L12 11L8.7 9.7L7.3 9.1L8.1 10.6L8.2 10.7L12 12.1Z" fill={color} /><Path d="M12 9.2L6.1 6.9L6.9 8.3L12 10.3L17.1 8.3L17.9 6.9L12 9.2Z" fill={color} /><Path d="M12.3 17.1L13.1 16.8L13.9 12L12.3 12.7V17.1Z" fill={color} /><Path d="M10.9 16.8L11.7 17.1V12.7L10.1 12L10.9 16.8Z" fill={color} /></Svg>;
}
export default tyc;