
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function brd({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M5.62518 6.77923C5.62518 6.34873 5.97918 5.99998 6.41568 5.99998H12.1067C15.4637 5.99998 16.6479 6.39598 17.4639 7.20073C17.7163 7.45703 17.9121 7.7634 18.0387 8.10006C18.1653 8.43671 18.2199 8.79617 18.1989 9.15524C18.1989 10.5435 17.4512 11.4847 15.4337 11.898C17.3822 12.2385 18.3714 13.0305 18.3714 14.6235C18.3899 14.995 18.3315 15.3664 18.1999 15.7143C18.0683 16.0622 17.8662 16.3792 17.6064 16.6455C16.8077 17.433 15.5027 18 11.9904 18H6.41568C6.20755 18.0014 6.00738 17.9201 5.85915 17.774C5.71092 17.6279 5.62677 17.4289 5.62518 17.2207V6.77923ZM9.94593 11.2507C9.94593 10.9635 10.1822 10.731 10.4732 10.731H12.3054C13.3509 10.731 14.1332 10.68 14.4954 10.305C14.5798 10.2164 14.6449 10.1113 14.6866 9.99625C14.7283 9.88123 14.7457 9.75882 14.7377 9.63674C14.7602 9.39674 14.6792 9.15824 14.5127 8.98049C14.1452 8.61899 13.3637 8.55523 12.3054 8.55523H8.89518V15.4792H12.2702C13.4192 15.4792 14.2704 15.3937 14.6679 14.9977C14.8509 14.8102 14.9454 14.5552 14.9274 14.295C14.9439 14.0302 14.8502 13.77 14.6679 13.575C14.2659 13.1797 13.4154 13.1497 12.2702 13.1497H10.4852C10.4136 13.1515 10.3425 13.1388 10.276 13.1124C10.2095 13.086 10.149 13.0464 10.0982 12.996C10.0477 12.9462 10.0081 12.8865 9.98179 12.8207C9.95546 12.7549 9.943 12.6843 9.94518 12.6135L9.94593 11.2507Z" fill={color} /></svg>;
}
export default brd;