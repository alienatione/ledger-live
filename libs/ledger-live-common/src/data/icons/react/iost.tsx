
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function iost({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M18.375 8.25V15.75L12 19.5L5.625 15.75V8.25L12 4.5L18.375 8.25ZM11.799 12.3052L11.2065 12.6555L12.3135 13.302L12.9022 12.9548L14.4765 13.881L12.1282 15.261L7.257 12.4215L7.23675 13.8038L12.1312 16.6462L16.8337 13.881L14.0782 12.2595L14.6332 11.9318L13.5262 11.2852L12.975 11.6108L12.2025 11.1562L12.8782 10.7565L11.7712 10.1093L11.0985 10.5068L9.783 9.73275L12.1305 8.352L15.3765 10.2487L16.566 9.54525L12.1282 6.96675L7.42575 9.73275L9.9225 11.202L9.4515 11.4795L10.5585 12.1268L11.0258 11.8507L11.799 12.3052Z" fill={color} /></svg>;
}
export default iost;