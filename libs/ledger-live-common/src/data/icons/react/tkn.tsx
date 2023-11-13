
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function tkn({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M10.569 5.9348L13.8713 4.50005L13.8442 8.2898H18V10.9148H13.8165V15.462C13.8165 16.842 16.1565 17.0048 17.037 16.545L17.835 18.927C15.8805 20.0633 10.5413 19.7925 10.5413 15.489V5.93405H10.569V5.9348ZM7.4865 11.6183C6.66525 11.6183 6 10.8188 6 9.83255C6 8.84555 6.66525 8.04605 7.4865 8.04605C8.307 8.04605 8.97225 8.84555 8.97225 9.83255C8.97225 10.8188 8.307 11.6183 7.4865 11.6183Z" fill={color} /></svg>;
}
export default tkn;