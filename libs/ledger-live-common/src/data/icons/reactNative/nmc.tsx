
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function nmc({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path d="M14.4457 17.625L14.4465 17.6235C14.5621 17.6258 14.6776 17.6132 14.79 17.586C15.447 17.4323 16.0028 16.8585 16.1348 16.239L18.75 6.417L16.671 6.4065L14.9565 12.8325L10.3215 6.38475L10.3185 6.38775L10.3207 6.38025L9.555 6.375V6.37575C9.43918 6.37396 9.32358 6.3863 9.21075 6.4125C8.5545 6.567 7.99875 7.14075 7.866 7.7595L5.25 17.5837L7.32975 17.5928L9.0435 11.1667L13.6785 17.6152H13.6807L14.4457 17.625ZM9.501 9.4545L9.86325 8.097L14.499 14.5463L14.1368 15.9037L9.50175 9.45375L9.501 9.4545Z" fill={color} /></Svg>;
}
export default nmc;