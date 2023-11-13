
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function fjc({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M15.2295 8.84289C15.2662 8.78364 15.2992 8.70489 15.333 8.63739C16.0968 7.28488 16.4988 5.75818 16.5 4.20489C15.4237 3.58389 14.2875 3.19239 13.0515 3.05664C13.509 5.05314 14.157 6.98664 15.0937 8.80839L15.2295 8.84289ZM9.0585 8.50164L9.02475 8.49414L8.76225 8.43414V8.42964H8.7585L8.99475 7.39989C9.1695 7.43739 9.34425 7.47864 9.51825 7.52139H9.522C10.1589 6.08439 10.6555 4.58919 11.0047 3.05664C9.394 3.23452 7.86136 3.84482 6.56925 4.82289V4.82589C5.48509 5.64687 4.60081 6.70258 3.98267 7.91391C3.36454 9.12524 3.02859 10.4608 3 11.8204V12.0004C3.96067 12.5525 5.01385 12.9251 6.108 13.0999L6.11325 13.0946C7.26147 11.6768 8.24994 10.1368 9.06075 8.50239H9.0585V8.50164ZM14.6925 10.0204C14.8897 10.1254 14.9632 10.2754 15.057 10.5694C15.1867 11.0134 15.099 11.4806 15.0067 11.9194L16.095 12.1721L16.365 10.9999C17.4637 12.6911 18.6825 14.4379 20.1622 15.8089C19.8937 16.4186 19.7272 16.6316 19.332 17.1671C16.9095 16.4216 14.3295 16.0264 11.7945 16.0511L12.0112 15.1849L11.2882 15.0161C11.1757 14.9876 11.061 14.9374 10.9935 14.8384C10.9087 14.7259 10.9087 14.5774 10.9372 14.4446L11.3895 12.4781C11.6235 12.5344 11.868 12.5711 12.087 12.6754C12.1895 12.7165 12.2808 12.7812 12.3537 12.8642C12.4265 12.9472 12.4788 13.0462 12.5062 13.1531C12.5655 13.4516 12.4387 13.7381 12.3877 14.0254L13.3612 14.2504L14.1727 10.7344L14.0903 10.7066L14.0265 10.6946C14.2515 10.4584 14.448 10.2484 14.6512 9.99189L14.6932 10.0204H14.6925ZM6.1365 13.3256L6.15975 13.2934C6.34875 13.3354 6.49425 13.3196 6.68775 13.3399C7.38 13.4014 8.052 13.4149 8.74125 13.3174C8.79375 13.3099 8.84775 13.3046 8.901 13.3024L8.74125 13.9159C8.71275 14.0374 8.6595 14.1634 8.55525 14.2399C8.50371 14.2741 8.44563 14.2972 8.3847 14.3078C8.32377 14.3184 8.2613 14.3162 8.20125 14.3014C7.95375 14.2511 7.70625 14.1836 7.45575 14.1356C7.38 14.4784 7.29825 14.8219 7.2195 15.1624L8.8815 15.5471C8.814 15.8569 8.7975 15.9409 8.727 16.2476C7.34349 16.4374 5.97704 16.7355 4.64025 17.1394C4.2465 16.6046 4.07775 16.4756 3.81375 15.8651C4.65525 15.0851 5.41275 14.2174 6.1365 13.3256ZM9.99525 15.8036L10.662 15.9581L10.6395 16.0901L9.92775 16.1411L9.99525 15.8036ZM8.766 13.1194C8.81774 13.1123 8.8698 13.1077 8.922 13.1059V13.1029L9.78 9.39039C9.81375 9.22164 9.88125 9.05289 9.828 8.88414C9.8074 8.82363 9.77314 8.76868 9.72787 8.72355C9.68261 8.67842 9.62756 8.64432 9.567 8.62389L9.53925 8.61489C9.39675 8.57664 9.50625 8.60364 9.3615 8.56989C9.34575 8.56614 9.27375 8.59014 9.25725 8.58714C8.45543 10.2025 7.47641 11.7236 6.33825 13.1224C6.5265 13.1621 6.49575 13.1509 6.684 13.1704C7.37775 13.2341 8.076 13.2169 8.76525 13.1201L8.766 13.1194Z" fill={color} /><path d="M10.6725 7.78464V7.78764C10.8045 7.23039 10.9283 6.67089 11.0633 6.11439L12.1718 6.36939L11.7863 8.04339L12.45 8.19789C12.516 7.91964 12.5813 7.64064 12.645 7.36164L12.7418 6.94314L12.8385 6.52464L13.9463 6.77739C13.9313 6.85239 13.9148 6.92739 13.8983 7.00239C13.791 7.48764 13.6718 7.96839 13.5645 8.45514L14.8403 8.75214C13.9035 6.92964 13.2833 5.02464 12.8265 3.02814C12.54 2.99439 12.4193 3.00564 12.129 3.00039H11.952C11.634 3.00039 11.5163 2.99214 11.2043 3.02814C10.8533 4.56039 10.4393 6.16764 9.80176 7.60464L10.6725 7.78464ZM12.1433 9.21639L12.177 9.22389L12.1808 9.21639H12.1433Z" fill={color} /><path d="M12.1462 9.21561L11.6318 11.4461C11.9513 11.5166 12.2842 11.6336 12.6127 11.5414C12.7183 11.5081 12.8141 11.4494 12.8917 11.3704C12.9693 11.2914 13.0262 11.1945 13.0575 11.0884C13.119 10.8911 13.1497 10.6886 13.2037 10.4921L13.7467 10.6301C13.7708 10.6339 13.743 10.6481 13.7587 10.6324L13.7723 10.6219C13.9973 10.3804 14.2523 10.1156 14.4548 9.85986C14.1226 9.69371 13.7686 9.57529 13.4032 9.50811L12.1462 9.21561ZM20.2238 8.33886C19.4475 6.60336 18.3412 5.29686 16.6965 4.34436C16.695 5.89836 16.3215 7.28511 15.558 8.63886C15.5117 8.72357 15.4694 8.81041 15.4313 8.89911C15.9458 9.01161 16.2668 9.08061 16.7812 9.19611V9.20136L16.4498 10.6916C17.5463 12.3821 18.7695 14.2436 20.2463 15.6161C20.7173 14.5421 20.9737 13.3864 21 12.2134V11.7911C20.9713 10.6002 20.7075 9.42672 20.2238 8.33811V8.33886ZM3 12.1969V12.3266C3.01725 13.5259 3.27375 14.5121 3.75375 15.6116C4.55005 14.877 5.28989 14.0836 5.967 13.2379C4.87575 13.0639 3.95625 12.7519 3 12.1969ZM11.7638 16.2469L11.3865 17.8894H11.3842L10.2705 17.6344L10.5803 16.2866L9.8715 16.3369L9.609 17.4791H9.6075L8.493 17.2234C8.55 16.9699 8.6055 16.7224 8.66775 16.4726C7.341 16.6526 6.0315 16.9414 4.75275 17.3359C5.57403 18.4505 6.64111 19.3609 7.87117 19.9964C9.10123 20.6319 10.4612 20.9755 11.8455 21.0004H12.2137C13.5878 20.9649 14.9356 20.6164 16.1546 19.9814C17.3735 19.3464 18.4315 18.4416 19.248 17.3359C16.8243 16.5895 14.2997 16.2221 11.7638 16.2469Z" fill={color} /></svg>;
}
export default fjc;