
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function wan({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M5.25 8.3175L7.25025 9.165V13.9298L12 11.0895L16.7955 13.9298V9.165L18.75 8.3175V17.298L12 13.3118L5.25 17.298V8.3175ZM5.47725 7.95075L12 4.125L18.5685 7.95075L16.7955 8.68425L12 5.91225L7.25025 8.68425L5.47725 7.95075ZM6.8865 16.8165L8.364 15.969L12.0225 18.0878L15.636 15.969L17.1585 16.8165L12.0225 19.875L6.8865 16.8165Z" fill={color} /><path fillRule="evenodd" clipRule="evenodd" d="M5.25 8.3175L7.25025 9.165V13.9298L12 11.0895L16.7955 13.9298V9.165L18.75 8.3175V17.298L12 13.3118L5.25 17.298V8.3175ZM5.47725 7.95075L12 4.125L18.5685 7.95075L16.7955 8.68425L12 5.91225L7.25025 8.68425L5.47725 7.95075ZM6.8865 16.8165L8.364 15.969L12.0225 18.0878L15.636 15.969L17.1585 16.8165L12.0225 19.875L6.8865 16.8165Z" fill={color} /></svg>;
}
export default wan;