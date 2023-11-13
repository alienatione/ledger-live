
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function theta({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M8.22 4.5H15.78L16.5 5.24475V18.7552L15.78 19.5H8.22L7.5 18.7552V5.24475L8.22 4.5ZM8.94 18.0098H15.06V5.99025H8.94V18.0098ZM14.2905 14.1322H12.7252V15.8295H11.3123V14.133H9.747V12.6713H14.2905V14.1322ZM14.2905 9.94575V11.4067H9.747V9.94575H11.3123V8.2485H12.7252V9.94575H14.2905Z" fill={color} /></svg>;
}
export default theta;