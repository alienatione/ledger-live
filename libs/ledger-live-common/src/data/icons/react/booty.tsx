
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function booty({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M5.82975 17.235V17.352H4.62225V15.1373L4.58475 15.2595L3.42975 14.907L4.08225 12.7725L4.00125 12.8917L3 12.2167L4.251 10.3612L4.13175 10.458L3.372 9.519L5.172 8.061L4.9425 8.1495L4.50975 7.0215L6.66 6.1965L6.40875 6.21375L6.32475 5.00925L8.57625 4.85175L8.37375 4.8045L8.64525 3.627L10.7963 4.12425L10.6605 4.04625L11.2642 3L13.1407 4.083L13.0673 4.005L13.9508 3.18075L15.4117 4.74825L15.381 4.68375L16.4662 4.15425L17.4037 6.07575L17.3955 6.02175L18.588 5.83275L18.9398 8.05275L18.9645 7.8945L20.1578 8.0835L19.8007 10.3358L19.8892 10.155L20.9753 10.6845L19.9703 12.7448L20.1165 12.5873L21 13.4115L19.4385 15.0855L19.6275 14.9767L20.2313 16.023L18.2685 17.1555L18.4657 17.1105L18.7372 18.2872L16.5682 18.7882L16.7355 18.7995L16.6508 20.0047L14.4795 19.8525L14.5905 19.8953L14.1578 21.0225L12.0787 20.2253L12.21 20.331L11.4503 21.27L9.73425 19.881L9.819 20.0062L8.81775 20.6813L7.5915 18.864L7.62825 18.9833L6.4725 19.3358L5.82975 17.235ZM5.82975 15.7995L6.58425 15.5693L7.17075 17.487L7.82325 17.0468L8.93775 18.6998L9.43575 18.0848L10.9808 19.3358L11.2575 18.6157L13.119 19.3305L13.1737 18.5505L15.1658 18.69L14.9865 17.9137L16.9403 17.4623L16.5353 16.7618L18.279 15.7552L17.6813 15.1987L19.059 13.7213L18.324 13.3635L19.2098 11.5478L18.4065 11.4202L18.7215 9.42675L17.9535 9.54825L17.6385 7.55475L16.9462 7.89225L16.0665 6.09L15.5025 6.61575L14.142 5.157L13.752 5.83125L12.03 4.83675L11.8523 5.60775L9.91425 5.16L9.9705 5.96475L7.9815 6.1035L8.2755 6.87L6.40275 7.5885L6.90675 8.211L5.334 9.4845L5.99775 9.9315L4.8645 11.6115L5.628 11.8455L5.0355 13.782H5.82975V15.7995ZM8.49975 8.41275H10.935C11.2185 8.41275 11.4998 8.433 11.7795 8.47275C12.0592 8.5125 12.3053 8.59275 12.5175 8.71275C12.7298 8.83275 12.8918 9 13.002 9.21525C13.113 9.4305 13.1438 9.717 13.0942 10.0732C13.0455 10.443 12.8993 10.7483 12.6562 10.9913C12.4132 11.2343 12.1163 11.4082 11.766 11.5125V11.5312C11.9745 11.562 12.1612 11.622 12.324 11.7113C12.4867 11.8005 12.621 11.9137 12.7252 12.0525C12.8302 12.1912 12.9037 12.3525 12.9465 12.537C12.99 12.7215 12.996 12.918 12.9653 13.1273C12.9158 13.4722 12.8025 13.7595 12.624 13.9897C12.4489 14.2179 12.2292 14.408 11.9782 14.5485C11.7188 14.6927 11.4384 14.7954 11.1473 14.853C10.8561 14.9134 10.5596 14.9443 10.2622 14.9452H7.58625L8.499 8.41275H8.49975ZM9.57 11.025H10.6125C10.7227 11.025 10.8338 11.0122 10.9448 10.9875C11.0533 10.9636 11.1575 10.9232 11.2537 10.8675C11.349 10.8123 11.431 10.7367 11.4937 10.6462C11.5582 10.554 11.5995 10.4437 11.6182 10.314C11.6395 10.2001 11.6248 10.0824 11.5763 9.97725C11.5321 9.89002 11.4633 9.81775 11.3783 9.7695C11.2848 9.71781 11.1834 9.68207 11.0782 9.66375C10.9673 9.64251 10.8545 9.63171 10.7415 9.6315H9.7635L9.57 11.025ZM9.19125 13.728H10.4835C10.5938 13.728 10.7092 13.7153 10.8285 13.6905C11.0631 13.6452 11.2721 13.5135 11.4142 13.3215C11.4914 13.2157 11.5395 13.0916 11.5538 12.9615C11.5717 12.8085 11.5507 12.684 11.4893 12.5887C11.4266 12.4921 11.3365 12.4164 11.2305 12.3713C11.1143 12.3206 10.9916 12.2865 10.866 12.27C10.7423 12.2522 10.6175 12.2429 10.4925 12.2423H9.4035L9.19125 13.7272V13.728ZM16.1362 8.517L14.6085 14.097L13.347 14.0085L14.298 8.256L16.1355 8.517H16.1362ZM14.8043 14.679L14.4075 16.65L12.7297 16.161L13.1138 14.2703L14.8043 14.6782V14.679Z" fill={color} /><path d="M5.82975 17.1V17.217H4.62225V15.0022L4.58475 15.1245L3.42975 14.772L4.08225 12.6375L4.00125 12.7567L3 12.0817L4.251 10.2262L4.13175 10.323L3.372 9.38399L5.172 7.92599L4.9425 8.01449L4.50975 6.88649L6.66 6.06149L6.40875 6.07874L6.32475 4.87424L8.57625 4.71674L8.37375 4.66949L8.64525 3.49199L10.7963 3.98924L10.6605 3.91124L11.2642 2.86499L13.1407 3.94799L13.0673 3.86999L13.9508 3.04574L15.4117 4.61324L15.381 4.54874L16.4662 4.01924L17.4037 5.94074L17.3955 5.88674L18.588 5.69774L18.9398 7.91774L18.9645 7.75949L20.1578 7.94849L19.8007 10.2007L19.8892 10.02L20.9753 10.5495L19.9703 12.6097L20.1165 12.4522L21 13.2765L19.4385 14.9505L19.6275 14.8417L20.2313 15.888L18.2685 17.0205L18.4657 16.9755L18.7372 18.1522L16.5682 18.6532L16.7355 18.6645L16.6508 19.8697L14.4795 19.7175L14.5905 19.7602L14.1578 20.8875L12.0787 20.0902L12.21 20.196L11.4503 21.135L9.73425 19.746L9.819 19.8712L8.81775 20.5462L7.5915 18.729L7.62825 18.8482L6.4725 19.2007L5.82975 17.1ZM5.82975 15.6645L6.58425 15.4342L7.17075 17.352L7.82325 16.9117L8.93775 18.5647L9.43575 17.9497L10.9808 19.2007L11.2575 18.4807L13.119 19.1955L13.1737 18.4155L15.1658 18.555L14.9865 17.7787L16.9403 17.3272L16.5353 16.6267L18.279 15.6202L17.6813 15.0637L19.059 13.5862L18.324 13.2285L19.2098 11.4127L18.4065 11.2852L18.7215 9.29174L17.9535 9.41324L17.6385 7.41974L16.9462 7.75724L16.0665 5.95499L15.5025 6.48074L14.142 5.02199L13.752 5.69624L12.03 4.70174L11.8523 5.47274L9.91425 5.02499L9.9705 5.82974L7.9815 5.96849L8.2755 6.73499L6.40275 7.45349L6.90675 8.07599L5.334 9.34949L5.99775 9.79649L4.8645 11.4765L5.628 11.7105L5.0355 13.647H5.82975V15.6645ZM8.49975 8.27774H10.935C11.2185 8.27774 11.4998 8.29799 11.7795 8.33774C12.0592 8.37749 12.3053 8.45774 12.5175 8.57774C12.7298 8.69774 12.8918 8.86499 13.002 9.08024C13.113 9.29549 13.1438 9.58199 13.0942 9.93824C13.0455 10.308 12.8993 10.6132 12.6562 10.8562C12.4132 11.0992 12.1163 11.2732 11.766 11.3775V11.3962C11.9745 11.427 12.1612 11.487 12.324 11.5762C12.4867 11.6655 12.621 11.7787 12.7252 11.9175C12.8302 12.0562 12.9037 12.2175 12.9465 12.402C12.99 12.5865 12.996 12.783 12.9653 12.9922C12.9158 13.3372 12.8025 13.6245 12.624 13.8547C12.4489 14.0829 12.2292 14.273 11.9782 14.4135C11.7188 14.5576 11.4384 14.6604 11.1473 14.718C10.8561 14.7784 10.5596 14.8093 10.2622 14.8102H7.58625L8.499 8.27774H8.49975ZM9.57 10.89H10.6125C10.7227 10.89 10.8338 10.8772 10.9448 10.8525C11.0533 10.8286 11.1575 10.7882 11.2537 10.7325C11.349 10.6773 11.431 10.6017 11.4937 10.5112C11.5582 10.419 11.5995 10.3087 11.6182 10.179C11.6395 10.0651 11.6248 9.94744 11.5763 9.84224C11.5321 9.75501 11.4633 9.68274 11.3783 9.63449C11.2848 9.5828 11.1834 9.54706 11.0782 9.52874C10.9673 9.5075 10.8545 9.4967 10.7415 9.49649H9.7635L9.57 10.89ZM9.19125 13.593H10.4835C10.5938 13.593 10.7092 13.5802 10.8285 13.5555C11.0631 13.5102 11.2721 13.3785 11.4142 13.1865C11.4914 13.0807 11.5395 12.9566 11.5538 12.8265C11.5717 12.6735 11.5507 12.549 11.4893 12.4537C11.4266 12.3571 11.3365 12.2814 11.2305 12.2362C11.1143 12.1856 10.9916 12.1515 10.866 12.135C10.7423 12.1171 10.6175 12.1079 10.4925 12.1072H9.4035L9.19125 13.5922V13.593ZM16.1362 8.38199L14.6085 13.962L13.347 13.8735L14.298 8.12099L16.1355 8.38199H16.1362ZM14.8043 14.544L14.4075 16.515L12.7297 16.026L13.1138 14.1352L14.8043 14.5432V14.544Z" fill={color} /></svg>;
}
export default booty;