
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function zel({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path fillRule="evenodd" clipRule="evenodd" d="M3.75 12.0862L7.12125 10.1827L10.4918 12.0862V15.7215L7.12125 17.625L3.75 15.7215V12.0862ZM13.5075 12.0862L16.8787 10.1827L20.25 12.0862V15.7215L16.8787 17.625L13.5082 15.7215V12.0862H13.5075ZM13.1535 15.2438L11.9708 15.894L10.8465 15.2767V11.7975L7.7715 10.0605V8.7975L11.9708 6.375L16.1693 8.7975V10.095L13.1535 11.7975V15.2445V15.2438Z" fill={color} /></Svg>;
}
export default zel;