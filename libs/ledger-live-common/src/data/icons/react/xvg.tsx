
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function xvg({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M7.2075 7.00125L6 4.5H18L16.806 7.00125H18L11.9633 19.5L6 7.00125H7.2075ZM7.2075 7.00125L12.036 16.9988L16.806 7.00125H7.20825H7.2075Z" fill={color} /><path opacity={0.504} d="M12 17.625L6 4.5H17.9992L12 17.625Z" fill={color} /></svg>;
}
export default xvg;