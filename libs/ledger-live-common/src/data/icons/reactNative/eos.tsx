
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function eos({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path fillRule="evenodd" clipRule="evenodd" d="M12 3.03883C12.101 3.03801 12.1989 3.0852 12.2608 3.16985L16.0956 8.40935C16.1219 8.4453 16.1404 8.48636 16.1499 8.52989L18.0062 17.0071C18.0351 17.1391 17.978 17.275 17.8635 17.3468L12.1725 20.9123C12.1196 20.9454 12.0596 20.9616 11.9999 20.9611C11.9403 20.9616 11.8804 20.9454 11.8275 20.9123L6.13645 17.3468C6.02197 17.275 5.96486 17.1391 5.99375 17.0072L7.84925 8.52992C7.85878 8.48637 7.87731 8.44529 7.90364 8.40932L11.7391 3.16982C11.8011 3.08519 11.899 3.03801 12 3.03883ZM11.6773 4.33772L8.5161 8.65616L9.30547 11.1346L11.6773 6.94947V4.33772ZM12 7.67822L9.57014 11.9657L11.0957 16.7556H12.904L14.4295 11.965L12 7.67822ZM14.8595 12.7239L13.5757 16.7556H17.1444L14.8595 12.7239ZM16.5801 17.3956H13.3719L12.5723 19.9065L16.5801 17.3956ZM11.9999 19.5948L12.7002 17.3956H11.2995L11.9999 19.5948ZM10.424 16.7556L9.14012 12.7244L6.85552 16.7556H10.424ZM7.07148 15.0765L8.87545 11.8934L8.2192 9.8329L7.07148 15.0765ZM7.41983 17.3956H10.6278L11.4275 19.9065L7.41983 17.3956ZM16.9282 15.076L15.1241 11.8928L15.7801 9.83284L16.9282 15.076ZM15.4831 8.65615L14.6941 11.134L12.3226 6.94947V4.33788L15.4831 8.65615Z" fill={color} /></Svg>;
}
export default eos;