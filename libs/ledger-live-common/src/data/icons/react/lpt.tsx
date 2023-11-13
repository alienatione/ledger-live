
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function lpt({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M10.6688 16.4906H13.2997V19.1216H10.6688V16.4906ZM10.6688 4.87839H13.2997V7.50939H10.6688V4.87839ZM16.869 4.87839H19.5V7.50939H16.869V4.87839ZM4.5 4.87839H7.131V7.50939H4.5V4.87839ZM13.7685 10.6849H16.3995V13.3159H13.7685V10.6849ZM7.56225 10.6849H10.1932V13.3159H7.56225V10.6849Z" fill={color} /></svg>;
}
export default lpt;