
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function vet({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path d="m 18.75,5.25 h -1.205245 c -0.294713,0 -0.563455,0.18551 -0.691154,0.477264 l -3.167732,7.238551 -0.0033,-0.0077 -0.843726,1.928108 0.0034,0.0076 -0.843548,1.927552 -4.216267,-9.639797 h 1.202458 c 0.29484,0 0.563498,0.185509 0.691197,0.477217 l 2.752009,6.253622 0.844148,-1.928942 -2.223121,-5.048728 C 10.59892,5.905033 9.650594,5.25 8.610125,5.25 H 6.937537 5.250042 5.25 l 0.842206,1.931631 h 0.0027 L 11.15469,18.75 h 1.687495 z" fill={color} /></Svg>;
}
export default vet;