
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function mnz({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path d="M19.1767 16.5581C19.2255 16.7554 19.029 16.8536 18.8812 16.8049H16.4227C16.275 16.8049 16.1767 16.7554 16.0777 16.7059C15.9307 16.6564 15.8325 16.4599 15.783 16.2626V16.2131L13.4715 7.68861C13.4227 7.68861 13.275 7.83636 13.2255 7.83636C13.1767 7.88511 13.0777 7.93461 13.029 7.88511C12.9307 7.83636 12.8812 7.68861 12.9307 7.58961C13.0282 7.34361 13.275 7.19511 13.521 7.14636C13.8157 7.09686 14.0617 7.09686 14.3565 7.09686H16.1767C16.3237 7.09686 16.4715 7.09686 16.6192 7.14636C16.767 7.24461 16.8157 7.44186 16.8652 7.58961C16.9627 7.93461 17.0122 8.27961 17.1112 8.62461L18.291 13.0601L18.7335 14.8339C18.8812 15.3761 19.0785 15.9679 19.176 16.5589L19.1767 16.5581ZM13.4715 16.5581C13.521 16.7554 13.3237 16.8536 13.1767 16.8049H10.7175C10.5697 16.8049 10.4715 16.7554 10.3725 16.7059C10.2255 16.6564 10.1272 16.4599 10.0777 16.2626V16.2131L7.76695 7.68861C7.71745 7.68861 7.5697 7.83636 7.52095 7.83636C7.47145 7.88511 7.3732 7.93461 7.3237 7.88511C7.2262 7.83636 7.1767 7.68861 7.2262 7.58961C7.3237 7.34361 7.5697 7.19511 7.8157 7.14636C8.1112 7.09686 8.35645 7.09686 8.65195 7.09686H10.4715C10.6192 7.09686 10.767 7.09686 10.914 7.14636C11.0617 7.24461 11.1112 7.44186 11.16 7.58961C11.2582 7.93461 11.3077 8.27961 11.406 8.62461L12.5865 13.0601L13.029 14.8339C13.1767 15.3761 13.3732 15.9679 13.4715 16.5589V16.5581ZM8.9467 14.6854L8.35645 16.5581C8.32924 16.6554 8.27159 16.7413 8.19196 16.8034C8.11232 16.8655 8.0149 16.9004 7.91395 16.9031H5.3077C5.17721 16.9027 5.05218 16.8507 4.95998 16.7583C4.86778 16.666 4.8159 16.5409 4.8157 16.4104V16.3114L6.8812 8.52561C6.9307 8.42661 7.02895 8.32836 7.1272 8.32836C7.27495 8.32836 7.3732 8.42661 7.3732 8.52561L8.9467 14.6854ZM14.7502 14.5376L14.406 15.5726C14.3565 15.6709 14.3077 15.7204 14.2095 15.7204C14.1112 15.7204 14.0617 15.6709 14.0122 15.5726L12.291 9.55986L12.636 8.32836C12.636 8.22936 12.7335 8.18061 12.8325 8.18061C12.93 8.18061 13.029 8.22936 13.029 8.32836L14.7502 14.5376Z" fill={color} /></Svg>;
}
export default mnz;