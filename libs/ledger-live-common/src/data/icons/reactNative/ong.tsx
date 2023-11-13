
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function ong({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path fillRule="evenodd" clipRule="evenodd" d="M11.9824 19.9916C16.2874 19.9916 19.5484 17.1071 20.2249 13.3331H16.5521C16.0031 15.3371 14.2991 16.8041 12.0259 16.8041C9.76915 16.8041 8.0434 15.3266 7.47115 13.3331H3.77515C4.4269 17.1206 7.66015 19.9916 11.9824 19.9916Z" fill={color} /><Path d="M12.0033 7.79892C13.0501 7.79892 13.8986 6.95039 13.8986 5.90367C13.8986 4.85696 13.0501 4.00842 12.0033 4.00842C10.9566 4.00842 10.1081 4.85696 10.1081 5.90367C10.1081 6.95039 10.9566 7.79892 12.0033 7.79892Z" fill={color} /><Path fillRule="evenodd" clipRule="evenodd" d="M7.26636 13.3331V13.2956C7.26636 10.6009 9.19686 8.40112 11.9801 8.40112C14.7641 8.40112 16.7351 10.6384 16.7396 13.3331H7.26636Z" fill={color} /></Svg>;
}
export default ong;