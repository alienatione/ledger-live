
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function gas({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path d="M18.375 16.935L13.1325 14.4915V9.0765L18.375 7.21725V16.935ZM10.7422 19.5L5.625 17.1157V7.4685L10.7422 9.8535V19.5ZM18.2498 6.86775L18.165 6.89775L13.1325 8.6835L13.0065 8.7285L10.8742 9.4845L5.82675 7.1325L13.0065 4.5855L13.0695 4.563L13.2023 4.51575L13.2488 4.5L18.2963 6.852L18.249 6.86775H18.2498Z" fill={color} /></Svg>;
}
export default gas;