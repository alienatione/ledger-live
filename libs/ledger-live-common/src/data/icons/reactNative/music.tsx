
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function music({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path fillRule="evenodd" clipRule="evenodd" d="M12.0011 24C10.8309 23.9995 9.66713 23.8279 8.5466 23.4907C10.8011 23.091 12.4616 21.7695 12.4616 20.2057C12.4616 20.0243 15.1406 5.58825 15.1406 5.58825C15.1406 5.58825 19.2131 6.20625 20.6193 10.4362C20.6193 10.4362 22.4373 7.98825 20.3651 3.40575C22.5552 5.53721 23.9364 8.49045 23.9989 11.7675C23.875 5.2474 18.5508 0 12.0011 0C12.6672 0.00124423 13.332 0.0579401 13.9886 0.1695L10.9466 17.8425C9.96485 17.1998 8.5946 16.8 7.0796 16.8C4.87385 16.8 2.9711 17.6362 2.1461 18.8483C0.801349 16.8975 0.00109863 14.5455 0.00109863 12C0.00109863 18.6274 5.37368 24 12.0011 24Z" fill={color} /></Svg>;
}
export default music;