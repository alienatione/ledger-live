
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function shift({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path opacity={0.6} d="M15.3596 11.9966L12.0056 15.3498H18.7121L15.3596 11.9966Z" fill={color} /><path opacity={0.7} d="M8.62538 11.9996L11.9794 8.64709H5.27213L8.62613 12.0003L8.62538 11.9996Z" fill={color} /><path opacity={0.4} d="M12.0057 15.3507L15.3507 12.0057L11.9907 8.64417L5.28342 15.3507L11.9899 22.0579L18.6972 15.3507H18.6957H12.0057Z" fill={color} /><path opacity={0.8} d="M12.0214 1.94214L5.31863 8.64489H11.9794L8.64488 11.9794L12.0214 15.3551L18.7279 8.64864L12.0214 1.94214Z" fill={color} /></svg>;
}
export default shift;