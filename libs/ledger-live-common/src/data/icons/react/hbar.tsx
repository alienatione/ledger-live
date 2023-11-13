
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function hbar({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 23H18.8758V16.2153H5.12423V23H2V1H5.12423V7.62136H18.8758V1H22V23ZM5.27183 13.6773H19.0234V10.1719H5.27183V13.6773Z" fill={color} /></svg>;
}
export default hbar;