
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function vrc({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M15.1987 5.25H18.75L12 18.75L5.25 5.25H8.778L12.0233 12.0848L15.1987 5.25ZM12 8.96925C11.409 8.96925 10.9297 8.47725 10.9297 7.8705C10.9297 7.26375 11.409 6.771 12 6.771C12.591 6.771 13.0703 7.26375 13.0703 7.8705C13.0703 8.47725 12.5903 8.96925 12 8.96925ZM16.8488 11.9993C17.4397 11.9993 17.919 12.492 17.9183 13.0988C17.9183 13.7063 17.4397 14.1975 16.8488 14.1975C16.2578 14.1975 15.7785 13.7055 15.7785 13.0988C15.7785 12.492 16.2578 12 16.8488 12V11.9993Z" fill={color} /></svg>;
}
export default vrc;