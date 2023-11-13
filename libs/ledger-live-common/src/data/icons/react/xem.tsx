
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function xem({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M4.60838 8.21577C4.5382 7.63889 4.50189 7.0584 4.49963 6.47727C5.48402 5.91655 6.52866 5.46896 7.61363 5.14302C9.13593 4.68494 10.7208 4.46905 12.3101 4.50327C12.7361 4.51152 13.3526 4.55877 13.8206 4.60902C13.2268 4.92749 12.712 5.37515 12.3141 5.91903C11.9163 6.4629 11.6456 7.08911 11.5219 7.75152C11.4769 7.98702 11.4521 8.23152 11.4439 8.49252C11.4319 8.89452 11.3929 9.21102 11.3089 9.50727C11.12 10.175 10.7313 10.7688 10.1948 11.209C9.65843 11.6492 9.0001 11.9145 8.30838 11.9694C7.61666 12.0243 6.92472 11.8661 6.3256 11.516C5.72649 11.166 5.24893 10.6408 4.95713 10.0113C4.92414 9.93917 4.899 9.86374 4.88213 9.78627C4.76335 9.26794 4.67197 8.74372 4.60838 8.21577ZM17.0681 14.6358C16.8896 14.9133 16.7006 15.1833 16.5041 15.4495C16.5102 14.6921 16.3217 13.9457 15.9566 13.282C15.5811 12.5829 15.0254 11.9969 14.3471 11.5848L14.2796 11.5435C14.2421 11.5215 14.2049 11.499 14.1679 11.476C13.3151 10.9338 12.7954 10.1748 12.6124 9.19527C12.4536 8.34202 12.6282 7.46035 13.1003 6.73206C13.5724 6.00378 14.3059 5.4844 15.1496 5.28102C15.7646 5.13252 16.3721 5.15352 16.9774 5.34327C17.4416 5.48952 17.9111 5.68077 18.4834 5.94852C18.8134 6.10377 19.1464 6.27627 19.5004 6.47652C19.4955 7.52247 19.3819 8.56508 19.1614 9.58752C18.7765 11.3835 18.0674 13.0942 17.0689 14.6358H17.0681ZM14.7904 17.3905C13.9436 18.1975 13.0075 18.9053 12.0004 19.5003C11.7401 19.3503 11.4857 19.1904 11.2376 19.021C8.83202 17.4031 6.93624 15.1344 5.77163 12.4795C6.32644 12.8058 6.94593 13.0068 7.58663 13.0683C8.52855 13.1636 9.47664 12.9608 10.2971 12.4885C10.6915 12.2638 11.1263 12.1188 11.5766 12.0618C12.3751 11.9609 13.1835 12.1474 13.8571 12.5879C14.5306 13.0285 15.0255 13.6943 15.2531 14.4663C15.5044 15.307 15.4309 16.1328 15.0409 16.9465C15.0079 17.0155 14.9794 17.071 14.9119 17.2038L14.8789 17.269C14.8566 17.3143 14.8267 17.3555 14.7904 17.3905Z" fill={color} /></svg>;
}
export default xem;