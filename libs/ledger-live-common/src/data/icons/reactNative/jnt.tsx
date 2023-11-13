
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function jnt({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path d="M12 19.5C11.5134 19.4997 11.0358 19.369 10.617 19.1213L6.63751 16.7812C6.21375 16.5292 5.86295 16.1711 5.61966 15.7422C5.37636 15.3134 5.24896 14.8286 5.25001 14.3355V9.663C5.25011 9.17037 5.37801 8.68619 5.62121 8.25778C5.8644 7.82936 6.21457 7.47136 6.63751 7.21875L10.617 4.87875C11.0381 4.6313 11.5176 4.50057 12.006 4.5C12.4898 4.5 12.966 4.6305 13.383 4.87875L17.3625 7.2195C17.786 7.47144 18.1367 7.82929 18.38 8.25786C18.6233 8.68643 18.7508 9.17095 18.75 9.66375V14.3363C18.75 14.829 18.6222 15.3133 18.379 15.7419C18.1358 16.1705 17.7855 16.5286 17.3625 16.7812L13.383 19.1213C12.963 19.3688 12.486 19.5 12 19.5ZM9.71101 14.6782L8.97376 15.4282C9.1638 15.6252 9.39192 15.7814 9.64425 15.8874C9.89658 15.9934 10.1678 16.0469 10.4415 16.0448C11.589 16.0433 12.5205 15.0968 12.522 13.9275V13.2885C12.837 13.4738 13.1948 13.5712 13.5585 13.5705C13.8328 13.5757 14.1052 13.5242 14.3588 13.4195C14.6124 13.3147 14.8416 13.1588 15.0323 12.9615L14.2958 12.2115C14.1008 12.411 13.8353 12.5235 13.5585 12.5235C13.2813 12.5205 13.0165 12.4078 12.8222 12.21C12.628 12.0122 12.52 11.7455 12.522 11.4683V7.94625H11.4855V13.9342C11.4855 14.5185 11.0205 14.9918 10.4468 14.9918C10.3094 14.9913 10.1735 14.9634 10.0471 14.9095C9.92075 14.8557 9.80646 14.777 9.71101 14.6782Z" fill={color} /></Svg>;
}
export default jnt;