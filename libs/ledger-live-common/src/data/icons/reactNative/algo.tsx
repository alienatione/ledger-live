
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function algo({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path d="M8.11539 17.9685L9.84264 14.979L11.5684 12L13.2844 9.01049L13.5694 8.53649L13.6946 9.01049L14.2211 10.9785L13.6316 12L11.9059 14.979L10.1899 17.9685H12.2524L13.9789 14.979L14.8736 13.4317L15.2951 14.979L16.0946 17.9685H17.9471L17.1476 14.979L16.3474 12L16.1374 11.2312L17.4214 9.01049H15.5479L15.4841 8.78924L14.8316 6.34724L14.7476 6.03149H12.9476L12.9056 6.09449L11.2211 9.01049L9.49464 12L7.77939 14.979L6.05289 17.9685H8.11539Z" fill={color} /></Svg>;
}
export default algo;