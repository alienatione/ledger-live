
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function tnt({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path d="M10.4175 15.7522L10.536 18.375C10.536 18.375 11.9422 18.1365 13.407 18.375L13.524 15.7522H10.4175ZM8.7195 13.725C8.7195 13.725 12.8212 13.3672 15.2235 13.725L15.4575 10.8637C13.1759 10.6868 10.8841 10.6868 8.6025 10.8637L8.7195 13.725ZM19.5 6.33295C19.5 6.33295 11.6483 4.66345 4.5 6.4522L5.02725 9.73045L5.67225 8.4787C5.67225 8.4787 12.4103 7.46545 18.4447 8.4787L19.0312 9.7312L19.5 6.33295Z" fill={color} /></Svg>;
}
export default tnt;