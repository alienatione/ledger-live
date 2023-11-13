
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function nlg({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path fillRule="evenodd" clipRule="evenodd" d="M19.1361 11.1037C19.2598 11.1022 19.3386 11.1187 19.3881 11.1637C19.4406 11.2117 19.4616 11.2897 19.4728 11.4119C19.8223 15.4462 16.7713 19.0927 12.7243 19.4669C8.5513 19.8532 4.9288 16.8419 4.5328 12.6569C4.1473 8.59268 7.19905 4.90568 11.2723 4.53518C13.5793 4.32518 15.5713 5.04968 17.2483 6.64718C17.2656 6.66368 17.2618 6.73268 17.2423 6.75218C16.8657 7.13584 16.4857 7.5161 16.1023 7.89293C16.0806 7.91393 16.0026 7.91093 15.9786 7.88918C14.2483 6.30368 12.2436 5.83418 10.0513 6.63293C7.8343 7.44068 6.56605 9.11317 6.3148 11.4682C5.9773 14.6549 8.38255 17.4637 11.5911 17.7059C14.4996 17.9249 17.1351 15.8662 17.6173 12.9922C17.6218 12.9637 17.5573 12.8924 17.5243 12.8924C15.7281 12.8872 13.9318 12.8887 12.1363 12.8819C12.0898 12.8819 12.0036 12.7957 12.0021 12.7484C11.9926 12.2465 11.9926 11.7444 12.0021 11.2424C12.0028 11.1974 12.0831 11.1164 12.1273 11.1157C13.3243 11.1089 17.9968 11.1194 19.1353 11.1029L19.1361 11.1037Z" fill={color} /></Svg>;
}
export default nlg;