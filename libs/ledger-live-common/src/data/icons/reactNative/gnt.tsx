
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function gnt({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path d="M14.9235 4.04553L15.8258 4.94853L14.118 6.70353C14.478 7.25103 14.6715 7.89678 14.6715 8.56278C14.6777 9.43907 14.3388 10.2826 13.728 10.911C13.2822 11.382 12.7013 11.7033 12.0653 11.8305V13.3598C12.6981 13.4905 13.2767 13.8094 13.725 14.2748C14.3376 14.9038 14.6776 15.7488 14.6715 16.6268C14.6774 17.5045 14.3374 18.3492 13.725 18.978C13.4266 19.2872 13.0689 19.533 12.6733 19.7008C12.2776 19.8686 11.8523 19.9549 11.4225 19.9545C10.9927 19.9558 10.567 19.87 10.1713 19.7021C9.77552 19.5343 9.41791 19.288 9.12004 18.978C8.50956 18.348 8.17007 17.504 8.17429 16.6268C8.17429 15.7418 8.51029 14.9025 9.11779 14.2778C9.56378 13.8071 10.1447 13.4861 10.7805 13.359V11.829C10.1477 11.6983 9.56917 11.3794 9.12079 10.914C8.50986 10.284 8.17008 9.43964 8.17429 8.56203C8.17429 7.67703 8.51029 6.83778 9.12079 6.21078C9.41918 5.90147 9.77687 5.6555 10.1725 5.48759C10.5681 5.31968 10.9935 5.23327 11.4233 5.23353C12.0683 5.23353 12.6885 5.43003 13.2195 5.79528L14.9243 4.04553H14.9235ZM11.4233 14.5883C11.1629 14.5862 10.9049 14.6377 10.6653 14.7397C10.4257 14.8416 10.2096 14.9917 10.0305 15.1808C9.65521 15.5683 9.44656 16.0873 9.44929 16.6268C9.44929 17.1705 9.65554 17.6783 10.0305 18.072C10.211 18.2593 10.4273 18.4083 10.6666 18.5101C10.9059 18.6119 11.1632 18.6644 11.4233 18.6645C11.6835 18.6665 11.9414 18.6149 12.1809 18.513C12.4204 18.4111 12.6363 18.261 12.8153 18.072C13.1904 17.6847 13.3991 17.166 13.3965 16.6268C13.3965 16.083 13.1903 15.5753 12.813 15.1785C12.6342 14.9902 12.4186 14.8406 12.1795 14.739C11.9404 14.6375 11.683 14.5862 11.4233 14.5883ZM12.813 10.0208C13.1895 9.63297 13.399 9.11303 13.3965 8.57253C13.4 8.30506 13.3504 8.03957 13.2506 7.79138C13.1508 7.54319 13.0029 7.31722 12.8153 7.12653C12.635 6.93927 12.4188 6.79029 12.1796 6.68849C11.9405 6.58668 11.6832 6.53415 11.4233 6.53403C11.1629 6.53195 10.9049 6.58347 10.6653 6.68541C10.4257 6.78734 10.2096 6.9375 10.0305 7.12653C9.65521 7.51401 9.44656 8.03308 9.44929 8.57253C9.44929 9.11628 9.65554 9.62403 10.0305 10.0178C10.211 10.2051 10.4273 10.3541 10.6666 10.4559C10.9059 10.5577 11.1632 10.6102 11.4233 10.6103C11.9565 10.6103 12.4485 10.4033 12.813 10.0208Z" fill={color} /></Svg>;
}
export default gnt;