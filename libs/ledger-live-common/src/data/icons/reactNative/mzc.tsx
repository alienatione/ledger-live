
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function mzc({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path fillRule="evenodd" clipRule="evenodd" d="M12.6083 9.05009V10.4473H14.2687L13.5187 11.3083H12.4035V12.3906H13.5637L12.9952 13.2516H12.4035V15.4596L11.4488 16.7616V13.2516H10.1287L10.857 12.3906H11.4488V11.3083H9.5835L10.3335 10.4473H11.4488V8.99984C10.899 8.40509 10.1408 8.10734 9.174 8.10734C7.32 8.10734 5.853 10.0836 5.853 12.0486C5.853 13.3581 6.153 14.4696 6.7515 15.3823L5.7165 16.5853C4.90575 15.3838 4.5 14.0113 4.5 12.4678C4.5 9.07859 7.4175 7.12484 9.48075 7.12484C10.7437 7.12484 11.7112 7.65434 12.3832 8.71259C13.6687 7.83059 14.9835 7.38959 16.3275 7.38959C18.3855 7.38959 19.5 9.90209 19.5 12.3021C19.5 15.4956 17.3505 16.7286 16.566 16.8726C16.5372 16.8779 16.5074 16.8749 16.4802 16.8641C16.453 16.8532 16.4295 16.8348 16.4122 16.8111C16.4007 16.7951 16.3925 16.777 16.3882 16.7578C16.3839 16.7386 16.3835 16.7188 16.3871 16.6994C16.3907 16.6801 16.3981 16.6616 16.409 16.6453C16.4199 16.6289 16.434 16.6149 16.4505 16.6041C17.6648 15.7881 18.2715 14.5378 18.2715 12.8541C18.2715 9.17834 16.3838 8.32784 14.9963 8.32784C14.1461 8.32549 13.3146 8.57697 12.6083 9.05009Z" fill={color} /></Svg>;
}
export default mzc;