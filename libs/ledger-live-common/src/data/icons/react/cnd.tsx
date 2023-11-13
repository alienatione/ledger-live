
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function cnd({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M14.9797 8.60925L16.98 8.151L17.7548 6.87525L16.9897 5.6205L16.0103 4.944L13.998 4.5L12.7568 5.19975L10.7708 4.84575L8.04375 6.735L7.8315 8.9415L6.67425 9.4245L6.80775 11.4713L6 12.1147L6.807 14.4188L6.9285 14.6603L7.782 17.0325L9.53625 17.6535L10.8368 18.9765L12.3322 19.5L13.0087 19.305L14.082 19.1813L15.6555 18.7305L18 17.4067L17.3865 14.9827L16.206 14.5177L15.618 15.1905L13.9642 15.597L11.559 15.216L10.7828 14.3182L11.0528 13.44L9.91575 11.6407L10.872 10.4738L10.974 8.49L12.3435 7.704L13.2825 7.329L14.5575 7.55925L14.9797 8.60925Z" fill={color} /></svg>;
}
export default cnd;