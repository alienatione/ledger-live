
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function btg({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path fillRule="evenodd" clipRule="evenodd" d="M12 20.25C7.44375 20.25 3.75 16.5562 3.75 12C3.75 7.44375 7.44375 3.75 12 3.75C16.5562 3.75 20.25 7.44375 20.25 12C20.25 16.5562 16.5562 20.25 12 20.25ZM11.259 5.055C11.2605 5.71125 11.2605 6.3675 11.2605 7.02375L12.243 7.02525C12.2452 6.3525 12.2467 5.679 12.243 5.00625C11.9152 5.0175 11.586 5.03325 11.259 5.055ZM13.623 7.05525C14.487 7.1715 15.4155 7.3035 16.1033 7.88625C17.154 8.829 17.0182 10.8082 15.732 11.4915C16.5022 11.6715 17.265 12.1837 17.4548 12.993C17.7023 14.0535 17.5058 15.3255 16.653 16.0725C15.8085 16.7663 14.6655 16.8578 13.6207 16.9575C13.6252 17.571 13.6237 18.1845 13.6222 18.7995C15.8197 18.2633 17.7172 16.6283 18.5235 14.5133C19.2885 12.5617 19.1085 10.266 18.027 8.46825C17.0722 6.84825 15.4493 5.65575 13.6268 5.19975C13.6223 5.8185 13.6223 6.43725 13.6238 7.05525H13.623ZM7.0635 7.029C8.016 7.074 8.9685 7.065 9.921 7.0635C9.921 6.4845 9.92325 5.9055 9.918 5.3265C8.8515 5.67225 7.902 6.2925 7.06275 7.029H7.0635ZM5.952 8.5215C4.83225 10.4265 4.70625 12.8707 5.64 14.8755C6.44625 16.6725 8.046 18.0705 9.91875 18.6727C9.9225 18.0952 9.921 17.5162 9.921 16.9387C8.96475 16.929 8.00625 16.9642 7.05225 16.9125C7.06275 16.38 7.18725 15.8595 7.3695 15.3593C7.8375 15.3495 8.32575 15.4312 8.778 15.279C9.042 15.057 8.967 14.6902 8.9805 14.3865C8.967 12.651 8.988 10.9148 8.9715 9.17925C8.98875 8.8995 8.81325 8.59725 8.5215 8.54175C8.0415 8.4465 7.54875 8.484 7.0635 8.481C7.0065 8.091 7.0005 7.69575 6.99375 7.3005C7.00158 7.26042 7.00089 7.21913 6.99171 7.17933C6.98254 7.13953 6.96509 7.10211 6.9405 7.0695C6.666 7.59 6.2295 8.00175 5.952 8.52075V8.5215ZM11.2995 8.59725V11.1562C12.1552 11.1413 13.104 11.2358 13.8525 10.7393C14.4735 10.3335 14.4337 9.30375 13.7925 8.93925C13.044 8.49525 12.1305 8.62125 11.3003 8.59725H11.2995ZM11.2995 12.5333V15.372C12.3555 15.2865 13.5405 15.4643 14.4592 14.8275C15.1162 14.3918 15.0375 13.3132 14.3602 12.936C13.44 12.3862 12.3218 12.561 11.3003 12.5333H11.2995ZM11.2613 16.977C11.2613 17.6332 11.2598 18.2895 11.2575 18.9473C11.5995 18.9698 11.9415 18.9832 12.2835 18.9923C12.2865 18.321 12.285 17.649 12.285 16.977H11.2613Z" fill={color} /></Svg>;
}
export default btg;