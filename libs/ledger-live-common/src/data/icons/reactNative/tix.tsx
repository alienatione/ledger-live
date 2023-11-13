
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function tix({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path fillRule="evenodd" clipRule="evenodd" d="M4.50037 8.5395C4.50037 8.37975 4.63012 8.25 4.79062 8.25H8.55862C10.2971 8.25 11.3846 9.147 11.3846 10.4138C11.3846 10.9425 11.1431 11.4233 10.6601 11.856C11.3359 12.2408 11.6741 12.8175 11.6741 13.5863C11.6741 15.39 9.93487 15.75 8.77537 15.75H4.78987C4.71309 15.75 4.63945 15.7195 4.58516 15.6652C4.53087 15.6109 4.50037 15.5373 4.50037 15.4605V14.598C4.50037 14.4375 4.63012 14.3078 4.78987 14.3078H8.77537C9.59662 14.3078 10.0076 14.043 10.0076 13.5143C10.0076 12.9855 9.59662 12.6968 8.77537 12.6488H4.78987C4.71322 12.6488 4.63969 12.6184 4.58542 12.5642C4.53115 12.5101 4.50057 12.4367 4.50037 12.36V11.4975C4.50037 11.337 4.63012 11.2073 4.78987 11.2073H8.77537C9.35512 11.1113 9.64537 10.8713 9.64537 10.4865C9.64537 9.95775 9.35512 9.693 8.77537 9.693H4.78987C4.75179 9.693 4.71408 9.68549 4.67891 9.67089C4.64373 9.6563 4.61179 9.6349 4.58489 9.60794C4.558 9.58098 4.53669 9.54898 4.52219 9.51377C4.50768 9.47856 4.50027 9.44083 4.50037 9.40275V8.54025V8.5395ZM12.3266 8.5395C12.3266 8.37975 12.4564 8.25 12.6161 8.25H16.4569C16.6166 8.25 16.7471 8.37975 16.7471 8.5395V15.4605C16.7471 15.4986 16.7396 15.5363 16.725 15.5715C16.7104 15.6066 16.689 15.6386 16.6621 15.6655C16.6351 15.6924 16.6031 15.7137 16.5679 15.7282C16.5327 15.7427 16.4949 15.7501 16.4569 15.75H15.3694C15.2926 15.75 15.2189 15.7195 15.1647 15.6652C15.1104 15.6109 15.0799 15.5373 15.0799 15.4605V9.9825C15.08 9.94442 15.0725 9.90669 15.058 9.87148C15.0435 9.83627 15.0222 9.80427 14.9953 9.77731C14.9684 9.75035 14.9365 9.72895 14.9013 9.71436C14.8662 9.69976 14.8284 9.69225 14.7904 9.69225H12.6154C12.5386 9.69225 12.4649 9.66175 12.4107 9.60746C12.3564 9.55317 12.3259 9.47953 12.3259 9.40275L12.3266 8.5395ZM17.7604 8.25H19.2101C19.3699 8.25 19.4996 8.37975 19.4996 8.5395V9.402C19.4997 9.44008 19.4923 9.47781 19.4778 9.51302C19.4633 9.54823 19.442 9.58023 19.4151 9.60719C19.3882 9.63416 19.3562 9.65555 19.3211 9.67014C19.2859 9.68474 19.2482 9.69225 19.2101 9.69225H17.7604C17.6836 9.69225 17.6099 9.66175 17.5557 9.60746C17.5014 9.55317 17.4709 9.47953 17.4709 9.40275V8.54025C17.4709 8.37975 17.6006 8.25 17.7604 8.25Z" fill={color} /></Svg>;
}
export default tix;