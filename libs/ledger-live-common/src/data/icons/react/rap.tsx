
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function rap({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M8.90214 4.85887V19.4674H6.29364V4.53262H8.90214V4.85887ZM10.7614 4.53262H12.2284C15.2614 4.53262 17.2834 6.45637 17.2834 9.19537C17.2834 11.4131 16.0759 13.1089 13.8911 13.6631L17.7064 19.4674H14.6411L9.42414 11.3801H11.9351C13.5979 11.3801 14.6411 10.6301 14.6411 9.16312C14.6411 7.69537 13.5986 6.94537 11.9351 6.94537H10.7936V4.53262H10.7614Z" fill={color} /></svg>;
}
export default rap;