
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function btcd({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path d="M12.8085 14.517C16.6185 13.3418 15.2587 9.3915 12.8085 9.2415C13.431 9.2415 13.9395 7.45875 13.9395 5.25C19.9215 5.67525 22.7317 15.5332 13.7595 18.6173C13.8172 17.817 13.4895 15.5835 12.8092 14.517H12.8085ZM4.5 13.35V9.24975H4.5075C6.67125 9.2415 8.4165 7.44975 8.409 5.25825H12.579C12.5797 9.73275 8.96625 13.35 4.5 13.35ZM9.96525 12.6075C12.4402 14.6415 12.5797 18.0667 12.5797 18.75H8.409C8.409 16.4835 6.93375 14.6498 5.10675 14.6498C8.20425 14.1503 8.835 13.6253 9.96525 12.6083V12.6075Z" fill={color} /></Svg>;
}
export default btcd;