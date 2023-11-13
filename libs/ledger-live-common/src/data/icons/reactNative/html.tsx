
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function html({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path d="M12.015 12.3337V18.3285L16.4752 17.127L17.523 5.5845H12.015V10.4835L12.243 9.77325H12.84L12.015 12.3337ZM6.477 17.9767L5.25 4.5H18.75L17.523 17.9767L11.985 19.5L6.477 17.9767ZM10.3492 12.882V12.3262L8.4975 11.5883L10.35 10.8458V10.2892L7.70475 11.364V11.808L10.3492 12.882ZM16.299 11.808L13.6537 12.882V12.3262L15.5062 11.586L13.6537 10.8458V10.2892L16.299 11.364V11.808ZM12.015 12.333V10.4835L11.0273 13.5637H11.6182L12.015 12.333Z" fill={color} /></Svg>;
}
export default html;