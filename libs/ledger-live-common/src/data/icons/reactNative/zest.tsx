
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function zest({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path fillRule="evenodd" clipRule="evenodd" d="M17.507 6.23114C17.0803 6.12464 16.0858 6.13889 15.7805 6.55814C16.0858 6.72839 16.2988 6.99089 16.6115 6.99839C16.9243 7.00589 17.2865 6.70664 17.684 6.87764C17.5138 6.87764 16.7465 7.02014 16.697 7.25414C16.8043 7.43039 16.9333 7.59239 17.0803 7.73714C17.2798 7.90064 17.3008 7.95764 17.5993 7.79414C17.9647 7.56348 18.2403 7.21502 18.3808 6.80639C18.3808 6.59339 18.4445 6.73514 18.2885 6.55814C18.0592 6.38593 17.7907 6.27355 17.507 6.23114ZM13.4998 6.60764C14.0768 6.29982 14.7473 6.21621 15.3823 6.37289C15.3209 5.68862 15.0009 5.05349 14.4875 4.59689C15.1025 4.97939 15.5353 5.59439 15.6875 6.30164C16.0363 6.24539 16.3985 6.11039 16.7323 6.06014C16.6721 5.37998 16.3726 4.74322 15.887 4.26314C15.6523 4.04264 14.9915 3.45989 14.6143 3.45989C14.237 3.45989 13.7473 4.31264 13.6055 4.66064C13.3624 5.28148 13.3251 5.96399 13.499 6.60764H13.4998Z" fill={color} /><Path fillRule="evenodd" clipRule="evenodd" d="M13.4068 7.72289C13.2793 7.41764 13.8403 7.29689 14.0113 7.31789C14.3165 7.40789 14.5963 7.56839 14.8288 7.78664C15.2758 8.12114 16.1563 9.10889 16.8035 8.87414C17.45 8.63939 16.6828 7.49564 16.3273 7.19714C16.0368 6.92331 15.6864 6.72105 15.304 6.60647C14.9216 6.49189 14.5177 6.46815 14.1245 6.53714C13.766 6.64439 13.472 6.90464 13.322 7.24664C13.2793 7.40339 13.1233 7.72289 13.4075 7.72289H13.4068Z" fill={color} /><Path d="M16.3768 11.9859C15.9793 11.7444 15.8368 11.0334 15.5885 10.6434C15.2473 10.0959 14.75 9.64889 14.4515 9.08039C14.153 8.51189 14.1178 8.07839 13.6063 7.80839C13.4102 7.70507 13.1919 7.65107 12.9703 7.65107C12.7487 7.65107 12.5304 7.70507 12.3343 7.80839C11.699 8.09639 11.0308 8.30639 10.3445 8.43389C10.0403 8.50594 9.74139 8.59866 9.44979 8.71139C9.20641 8.84813 8.95203 8.96428 8.68929 9.05864C8.03529 9.15089 6.82779 8.34839 6.94179 9.59114C6.94179 9.81914 7.17579 9.93989 7.10454 10.2309C7.03404 10.5226 6.72129 10.7784 6.57204 11.0056C6.26556 11.5198 6.0266 12.0714 5.86104 12.6466C5.45727 13.9496 5.53554 15.3543 6.08154 16.6044C6.34404 17.2194 6.69429 17.7939 7.11879 18.3099C7.32654 18.5521 7.50879 18.8139 7.66629 19.0914C7.78629 19.4199 7.93629 19.7364 8.11404 20.0364C8.26767 20.2294 8.47179 20.3761 8.70374 20.4602C8.93569 20.5443 9.1864 20.5624 9.42804 20.5126C9.67637 20.4273 9.91476 20.3154 10.139 20.1789C10.5222 20.0265 10.9231 19.9237 11.3323 19.8729C12.8251 19.6389 14.1869 18.8837 15.176 17.7414C15.6447 17.1759 16.0082 16.5309 16.2493 15.8371C16.3894 15.4502 16.4916 15.0506 16.5545 14.6439C16.5905 14.3881 16.5125 13.7409 16.697 13.5714C16.817 13.4566 17.102 13.4289 17.1875 13.3216C17.2523 13.1805 17.3021 13.0329 17.336 12.8814C17.471 12.4621 16.6828 12.1284 16.3775 11.9859H16.3768ZM16.9168 13.0021C16.8103 13.2436 16.3918 13.3861 16.2065 13.6419C15.941 14.1211 15.5867 14.5454 15.1625 14.8921C14.7353 15.1148 14.2437 15.1813 13.7726 15.0801C13.3016 14.9789 12.8807 14.7164 12.5825 14.3379C12.268 13.9449 12.0975 13.456 12.0995 12.9526C12.0995 12.5619 12.5263 11.5809 12.0995 11.3679C11.6735 11.1549 11.4748 11.8441 11.3113 12.0789C11.0253 12.5536 10.5905 12.9206 10.0745 13.1229C9.67308 13.2588 9.24221 13.283 8.82806 13.1929C8.4139 13.1028 8.03202 12.9018 7.72329 12.6114C7.51686 12.3177 7.37954 11.981 7.32162 11.6267C7.26369 11.2724 7.28665 10.9096 7.38879 10.5654C7.39831 10.2147 7.36736 9.86418 7.29654 9.52064C7.29654 9.00914 7.74429 9.19364 8.10654 9.26489C9.00461 9.42482 9.8577 9.77629 10.6078 10.2954C11.3122 10.8806 12.157 11.2722 13.0588 11.4316C13.6625 11.4886 14.261 11.5906 14.8498 11.7376C15.1408 11.8231 15.4108 11.9649 15.695 12.0646C15.995 12.1621 16.286 12.2874 16.562 12.4411C16.754 12.5259 17.0308 12.6961 16.9243 12.9736L16.9168 13.0021Z" fill={color} /></Svg>;
}
export default zest;