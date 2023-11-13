
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function nuls({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path d="M10.8022 14.52L12 16.098V19.5L7.5 17.5028V8.71425C7.5 8.5845 7.55775 8.46075 7.659 8.3745L8.17125 7.93575C8.2206 7.89307 8.27817 7.86097 8.34042 7.84143C8.40266 7.82189 8.46825 7.81533 8.53314 7.82215C8.59802 7.82896 8.66081 7.84902 8.71764 7.88107C8.77446 7.91313 8.8241 7.9565 8.8635 8.0085L12.9623 13.3815L15.2265 14.766V7.356L13.2255 6.35775L13.128 11.0048L12.069 9.6L12.021 4.5L16.5 6.58425V15.3323L15.4822 16.1708L12.2767 14.3805L8.71875 9.71325L8.67 16.8038L10.7888 17.889L10.8022 14.52Z" fill={color} /></Svg>;
}
export default nuls;