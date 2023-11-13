
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function jpy({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path fillRule="evenodd" clipRule="evenodd" d="M13.161 13.6583V15.0668H16.9583V16.7828H13.161V18.75H10.839V16.7828H7.04175V15.0668H10.839V13.6583H7.04175V11.9423H10.17L5.625 5.25H8.439L12.039 10.9005L15.6398 5.25H18.375L13.8105 11.9423H16.9583V13.6583H13.161Z" fill={color} /></Svg>;
}
export default jpy;