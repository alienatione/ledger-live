
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function eqli({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M7.52048 15.3202C7.49769 15.3673 7.46212 15.4071 7.41783 15.4349C7.37353 15.4628 7.3223 15.4776 7.26998 15.4777H4.21523C4.1674 15.4774 4.12047 15.4646 4.07906 15.4407C4.03764 15.4168 4.00315 15.3825 3.97898 15.3412C3.95319 15.2995 3.93892 15.2517 3.9376 15.2027C3.93628 15.1537 3.94797 15.1052 3.97148 15.0622L9.52448 5.05272C9.62423 4.87347 9.91073 4.87347 10.0105 5.05272L14.3395 12.8362C14.3612 12.8798 14.3719 12.928 14.3705 12.9767C14.3692 13.0253 14.356 13.0729 14.332 13.1152C14.3091 13.1575 14.2748 13.1926 14.2331 13.2166C14.1914 13.2406 14.1438 13.2525 14.0957 13.251H12.8297C12.7804 13.2502 12.732 13.2367 12.6894 13.2117C12.6469 13.1868 12.6115 13.1512 12.5867 13.1085L9.77423 7.99347L6.62723 13.8097H7.82873C7.87562 13.81 7.92171 13.8219 7.96292 13.8442C8.00413 13.8666 8.03919 13.8988 8.06498 13.938C8.09004 13.9785 8.10449 14.0247 8.10698 14.0723C8.10947 14.1199 8.09992 14.1673 8.07923 14.2102L7.52123 15.3187L7.52048 15.3202ZM20.026 15.0622C20.0511 15.1047 20.0637 15.1534 20.0624 15.2028C20.0611 15.2521 20.0458 15.3001 20.0185 15.3412C19.9956 15.3834 19.9615 15.4184 19.9199 15.4424C19.8784 15.4664 19.8309 15.4783 19.783 15.477H11.4482C11.3742 15.477 11.3033 15.4476 11.2509 15.3952C11.1986 15.3429 11.1692 15.272 11.1692 15.198V14.0902C11.1692 13.9327 11.2975 13.8112 11.4482 13.8112H17.3792L14.2382 8.01522L13.6442 9.20247C13.5445 9.38847 13.237 9.38847 13.144 9.20247L12.586 8.09397C12.5683 8.05459 12.5591 8.0119 12.5591 7.96872C12.5591 7.92554 12.5683 7.88285 12.586 7.84347L13.9735 5.06097C13.9977 5.01714 14.0328 4.98027 14.0753 4.95387C14.1178 4.92748 14.1665 4.91245 14.2165 4.91022C14.267 4.91032 14.3166 4.9235 14.3605 4.94847C14.4044 4.97345 14.4411 5.00936 14.467 5.05272L20.026 15.0622ZM16.4132 16.1707L17.7932 18.675C17.8179 18.7173 17.8308 18.7655 17.8308 18.8145C17.8308 18.8635 17.8179 18.9116 17.7932 18.954C17.7704 18.9962 17.7362 19.0312 17.6947 19.0551C17.6531 19.0791 17.6057 19.0911 17.5577 19.0897H6.44048C6.39099 19.0891 6.3425 19.0757 6.29977 19.0507C6.25705 19.0257 6.22154 18.99 6.19673 18.9472C6.17308 18.9041 6.16131 18.8555 6.16263 18.8063C6.16395 18.7572 6.17831 18.7093 6.20423 18.6675L8.42873 15.0547L10.6465 11.1697C10.6967 11.0775 10.7965 11.0197 10.897 11.0272C10.9478 11.026 10.9978 11.0394 11.0411 11.0661C11.0844 11.0927 11.119 11.1313 11.1407 11.1772L11.6987 12.2865C11.7205 12.3275 11.7312 12.3734 11.7299 12.4198C11.7286 12.4662 11.7153 12.5115 11.6912 12.5512L8.87273 17.4157H15.1255L14.5457 16.4497C14.5184 16.4086 14.5032 16.3606 14.5018 16.3113C14.5005 16.2619 14.5131 16.2132 14.5382 16.1707C14.563 16.1279 14.5985 16.0922 14.6413 16.0673C14.684 16.0423 14.7325 16.0288 14.782 16.0282H16.1695C16.27 16.0282 16.363 16.0852 16.4132 16.1707Z" fill={color} /></svg>;
}
export default eqli;