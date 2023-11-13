
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function dew({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path d="M7.99575 17.112C8.45925 17.112 8.83575 17.4795 8.83575 17.931C8.83575 18.3833 8.45925 18.75 7.99575 18.75H6.906C6.666 18.75 6.435 18.657 6.2655 18.4913C6.18174 18.4101 6.11508 18.3131 6.06948 18.2058C6.02388 18.0985 6.00025 17.9831 6 17.8665V6.11175C6 5.883 6.093 5.664 6.25875 5.502C6.42375 5.34075 6.64875 5.25 6.8835 5.25H8.05125C8.51475 5.25 8.89125 5.61675 8.89125 6.069C8.89125 6.2865 8.802 6.49425 8.6445 6.648C8.487 6.801 8.27325 6.888 8.05125 6.888H7.7925V17.112H7.99575ZM17.1232 8.523C17.7075 9.5265 18 10.6492 18 11.8912C18 13.1332 17.7038 14.256 17.1135 15.2603C16.5233 16.2645 15.867 17.034 14.7892 17.7308C13.7992 18.3713 12.7658 18.7493 11.484 18.7493H11.0588C10.5953 18.7493 10.2188 18.3825 10.2188 17.9303C10.2188 17.478 10.5953 17.112 11.0588 17.112H11.5762C12.4837 17.112 13.143 16.7362 13.8832 16.3095C14.6227 15.8835 15.0968 15.1853 15.5258 14.4323C15.9555 13.68 16.1708 12.8392 16.1708 11.9107C16.17 10.9695 15.9525 10.1227 15.5167 9.36975C15.0925 8.62811 14.4771 8.01379 13.7347 7.59075C12.9818 7.158 12.1447 6.94125 11.2245 6.94125H11.0018C10.5383 6.94125 10.1617 6.57525 10.1617 6.123C10.1617 5.9055 10.251 5.697 10.4085 5.544C10.566 5.39025 10.779 5.304 11.0018 5.304H11.2635C12.5325 5.304 13.68 5.589 14.706 6.1605C15.7126 6.71213 16.5487 7.52926 17.1232 8.523Z" fill={color} /></Svg>;
}
export default dew;