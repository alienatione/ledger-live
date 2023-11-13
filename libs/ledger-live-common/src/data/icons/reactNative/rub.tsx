
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function rub({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path fillRule="evenodd" clipRule="evenodd" d="M7.5 11.4285H8.823V5.25H12.2333C12.8663 5.25 13.4438 5.32425 13.9658 5.47275C14.4878 5.62125 14.9348 5.84775 15.3075 6.15075C15.6803 6.45375 15.972 6.8385 16.1835 7.30275C16.3942 7.76775 16.5 8.32275 16.5 8.9685C16.5 9.61425 16.3875 10.176 16.1647 10.6537C15.954 11.1146 15.6417 11.5217 15.2512 11.8448C14.8502 12.1696 14.3877 12.4102 13.8915 12.552C13.3405 12.7111 12.7693 12.7894 12.1957 12.7845H10.3133V14.7405H13.3132V16.0192H10.3133V18.75H8.823V16.0192H7.5V14.7405H8.823V12.7845H7.5V11.4285ZM12.2325 11.4285C13.0897 11.4285 13.764 11.2253 14.2545 10.8188C14.745 10.4115 14.991 9.795 14.991 8.9685C14.991 8.14275 14.745 7.542 14.2545 7.16775C13.764 6.79275 13.0898 6.60525 12.2333 6.60525H10.3133V11.4285H12.2325Z" fill={color} /></Svg>;
}
export default rub;