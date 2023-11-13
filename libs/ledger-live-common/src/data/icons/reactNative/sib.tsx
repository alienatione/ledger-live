
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function sib({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path d="M12 3C7.02975 3 3 7.02975 3 12C3 16.9703 7.02975 21 12 21C16.9703 21 21 16.9703 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3ZM15.132 15.3953H14.766V17.4443H13.536V15.3953H11.6632V14.634H13.566V13.2585C12.5781 13.809 11.4282 13.9954 10.317 13.785C9.702 13.6387 9.08775 13.3028 8.766 12.7463C8.4603 12.2021 8.30837 11.5851 8.3265 10.9612V7.71225H9.57075V11.0782C9.6 11.8095 10.068 12.5415 10.7857 12.7612C11.7296 12.978 12.7208 12.8204 13.551 12.3218C13.551 11.2973 13.536 9.76125 13.551 7.71225H14.8095V14.6348H15.132V15.3953Z" fill={color} /></Svg>;
}
export default sib;