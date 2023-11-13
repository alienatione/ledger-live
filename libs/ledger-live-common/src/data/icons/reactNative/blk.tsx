
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function blk({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path d="M16.9502 8.34765C16.9789 8.94709 16.8177 9.54028 16.4897 10.0428C16.1617 10.5454 15.6835 10.9316 15.1232 11.1467C15.1232 11.1467 15.8822 10.3967 15.847 8.4744C15.811 6.55215 14.3995 5.6019 14.3995 5.6019C14.3995 5.6019 16.915 6.16215 16.9495 8.3469L16.9502 8.34765ZM8.57724 18.6144L6.00024 18.7412V18.5004C6.00024 18.5004 7.57749 18.3377 7.57749 15.5079V8.2779C7.57749 5.8824 6.00024 5.46765 6.00024 5.46765V5.25015L8.57724 5.37615V18.6144ZM12.6962 18.7494C11.575 18.7592 9.49524 18.6024 9.49524 18.6024V5.3949C10.8662 5.37615 11.3455 5.18715 12.475 5.3499C13.6052 5.5119 14.5757 6.64065 14.8405 7.7694C15.1052 8.89815 14.8232 9.9729 14.461 10.5594C14.0987 11.1459 13.3052 11.5532 13.3052 11.5532C13.3052 11.5532 14.5052 11.9687 14.929 12.3294C15.3527 12.6909 16.174 13.6749 15.856 15.8154C15.538 17.9559 13.8167 18.7404 12.6962 18.7494ZM15.6745 18.2619C15.6745 18.2619 16.897 17.1969 16.843 15.0362C16.789 12.8754 15.6745 11.8599 15.6745 11.8599C15.6745 11.8599 17.974 12.4374 17.9995 15.0114C18.0265 17.5847 15.6745 18.2627 15.6745 18.2627V18.2619ZM13.3495 10.5114C14.173 9.41565 13.9142 7.3539 12.9167 6.6489C11.9192 5.9439 10.8692 6.2964 10.6667 6.49515C10.4627 6.6939 10.4717 11.3177 10.4717 11.3177C10.4717 11.3177 12.5252 11.6072 13.3487 10.5114H13.3495ZM13.5017 12.4802C12.7307 12.1367 10.4717 12.2267 10.4717 12.2267C10.4717 12.2267 10.4365 13.3944 10.519 15.5799C10.6015 17.7654 11.3312 17.7534 12.0902 17.7834C12.8492 17.8134 14.2967 17.7594 14.773 15.8747C15.25 13.9907 14.2727 12.8229 13.5017 12.4802Z" fill={color} /></Svg>;
}
export default blk;