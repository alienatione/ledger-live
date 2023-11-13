
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function nxs({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M0.770996 15.3528C1.22475 14.0298 2.09925 12.5973 3.31725 11.1828C3.10054 10.8947 2.99481 10.5383 3.01938 10.1787C3.04396 9.81907 3.1972 9.48034 3.45107 9.22446C3.70494 8.96859 4.04246 8.81269 4.40186 8.78529C4.76127 8.75789 5.11852 8.86082 5.40825 9.07525C6.37556 8.22343 7.40435 7.44407 8.48625 6.7435C13.6867 3.36625 19.1827 2.2885 21.8632 3.895C22.6355 5.34339 23.1005 6.93562 23.229 8.572C22.3635 11.4055 19.5045 14.791 15.4305 17.437C12.6202 19.2618 9.723 20.416 7.23075 20.8368C4.48407 19.852 2.18852 17.9032 0.770996 15.3528ZM3.5835 11.4565C1.8255 13.4875 1.12125 15.577 1.97325 16.8895C3.26025 18.8718 7.61325 18.3295 11.694 15.6798C15.7755 13.0293 18.0405 9.27325 16.7535 7.291C15.4657 5.30875 11.1135 5.851 7.032 8.50075C6.57975 8.79475 6.14925 9.10225 5.74425 9.4195C5.95197 9.71462 6.04633 10.0747 6.01002 10.4338C5.97372 10.7928 5.80918 11.1268 5.54658 11.3743C5.28398 11.6219 4.94094 11.7665 4.58036 11.7816C4.21979 11.7967 3.86586 11.6813 3.5835 11.4565Z" fill={color} /></svg>;
}
export default nxs;