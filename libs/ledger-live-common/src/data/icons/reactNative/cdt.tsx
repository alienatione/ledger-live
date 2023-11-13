
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function cdt({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path d="M18.75 12.0225C18.75 14.205 17.8912 16.2975 16.3605 17.841C15.6055 18.6038 14.7068 19.2095 13.7163 19.6229C12.7259 20.0364 11.6633 20.2495 10.59 20.25V18.1485C13.551 18.1575 16.0837 16.0058 16.578 13.062H13.6605C13.776 12.72 13.8352 12.3615 13.836 12C13.8313 11.6392 13.7721 11.2811 13.6605 10.938H16.578C16.077 7.998 13.548 5.85 10.59 5.8515V3.75C15.096 3.7935 18.7312 7.479 18.75 12.0225ZM13.3095 13.7917H15.6135C14.7615 16.2705 12.2595 17.7667 9.69375 17.3317C7.12875 16.8952 5.25 14.6557 5.25 12.0322C5.25 9.40875 7.12875 7.17 9.69375 6.73425C12.2595 6.29925 14.7615 7.7955 15.6135 10.2743H13.3095C13.0501 9.88003 12.7145 9.54165 12.3225 9.279C11.9641 9.04842 11.5635 8.8912 11.1439 8.81642C10.7243 8.74165 10.294 8.7508 9.878 8.84335C9.46198 8.9359 9.06842 9.11002 8.72011 9.35562C8.3718 9.60123 8.07563 9.91346 7.84875 10.2743C6.88575 11.7945 7.3275 13.8143 8.83575 14.7855C9.19415 15.0161 9.59471 15.1734 10.0143 15.2482C10.4338 15.323 10.8641 15.314 11.2801 15.2215C11.6961 15.129 12.0897 14.955 12.438 14.7094C12.7863 14.4639 13.0826 14.1517 13.3095 13.791V13.7917Z" fill={color} /></Svg>;
}
export default cdt;