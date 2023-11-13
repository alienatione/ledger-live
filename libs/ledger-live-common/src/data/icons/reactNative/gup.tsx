
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function gup({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path d="M11.9926 9.50904L9.90458 7.40604C10.531 6.3873 11.2314 5.41594 12.0001 4.49979C12.7675 5.41201 13.4669 6.37936 14.0926 7.39404L11.9926 9.50904ZM16.2811 11.6165C16.8706 13.268 17.7353 14.9195 16.9111 16.505C16.3866 17.5052 15.5734 18.3245 14.5771 18.8563C11.8628 20.2963 8.50283 19.2388 7.07333 16.505C6.24082 14.9195 7.21058 13.1375 7.80083 11.4868C8.34158 10.2695 8.88833 9.14754 9.50933 8.06904L11.9918 10.5695L14.4886 8.05554C15.1448 9.19104 15.7118 10.3595 16.2811 11.6173V11.6165Z" fill={color} /></Svg>;
}
export default gup;