
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function qiwi({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path d="M16.5675 14.5837C16.6057 14.8845 16.5202 15.0007 16.425 15.0007C16.3297 15.0007 16.1962 14.8845 16.0537 14.652C15.9112 14.4195 15.8535 14.157 15.93 14.022C15.9772 13.9342 16.0822 13.8952 16.206 13.944C16.4535 14.0415 16.5487 14.4187 16.5675 14.5837ZM15.2347 15.2437C15.5295 15.4957 15.6157 15.786 15.4627 15.9997C15.4147 16.0559 15.3548 16.1006 15.2873 16.1307C15.2199 16.1608 15.1466 16.1755 15.0727 16.1737C14.9083 16.1754 14.749 16.1167 14.625 16.0087C14.3587 15.7762 14.2822 15.3885 14.4532 15.1755C14.4897 15.1303 14.5364 15.0944 14.5895 15.0708C14.6426 15.0472 14.7005 15.0366 14.7585 15.0397C14.9107 15.0397 15.0825 15.1072 15.2347 15.243V15.2437ZM4.875 11.1705C4.875 7.48575 7.8075 4.5 11.4255 4.5C15.0442 4.5 17.9767 7.4865 17.9767 11.1705C17.9768 12.373 17.6583 13.5541 17.0535 14.5935C17.034 14.6227 16.986 14.613 16.977 14.574C16.749 12.9352 15.768 12.0337 14.34 11.7622C14.2155 11.7427 14.1967 11.6647 14.3587 11.646C14.7967 11.607 15.4155 11.6167 15.7387 11.6752C15.7585 11.5045 15.7683 11.3327 15.768 11.1607C15.768 8.727 13.8255 6.74925 11.4352 6.74925C9.04575 6.74925 7.10325 8.727 7.10325 11.1607C7.10325 13.5952 9.04575 15.573 11.4352 15.573H11.6355C11.5675 15.1793 11.5386 14.7799 11.5492 14.3805C11.559 14.109 11.6167 14.07 11.7307 14.283C12.3307 15.3405 13.1872 16.2907 14.8635 16.668C16.2345 16.9792 17.6055 17.3377 19.0815 19.248C19.2142 19.413 19.0147 19.587 18.8625 19.4512C17.358 18.0937 15.987 17.6475 14.7397 17.6475C13.3395 17.658 12.3877 17.8425 11.4255 17.8425C7.8075 17.8425 4.875 14.8545 4.875 11.1697V11.1705Z" fill={color} /></Svg>;
}
export default qiwi;