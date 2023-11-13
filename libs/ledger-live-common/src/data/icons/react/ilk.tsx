
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function ilk({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M12 3.1575C7.11672 3.1575 3.15747 7.11675 3.15747 12C3.15747 16.8833 7.11672 20.8425 12 20.8425C16.8832 20.8425 20.8425 16.8833 20.8425 12C20.8342 7.11975 16.8802 3.16575 12 3.1575ZM12 19.6575C7.77597 19.6575 4.35147 16.2338 4.34997 12.0098C4.34847 7.78575 7.77072 4.35975 11.9947 4.3575C16.2187 4.3545 19.6455 7.776 19.65 12C19.6455 16.2233 16.2232 19.6455 12 19.65V19.6575ZM8.09247 11.2125H6.66747V8.0925C6.66747 7.5075 6.94497 7.215 7.49997 7.215H10.59C10.7091 7.19481 10.8313 7.2037 10.9463 7.24092C11.0612 7.27813 11.1655 7.34255 11.2502 7.42872C11.3349 7.51488 11.3975 7.62024 11.4327 7.73581C11.4679 7.85138 11.4747 7.97375 11.4525 8.0925V11.2125H10.0425V8.4375H8.09247V11.2125ZM10.0425 12.1275H11.4675V15.8775C11.4883 15.9957 11.4805 16.1172 11.4447 16.2318C11.4088 16.3463 11.346 16.4506 11.2615 16.5358C11.177 16.6211 11.0733 16.6848 10.959 16.7216C10.8448 16.7585 10.7234 16.7673 10.605 16.7475H7.49997C7.38295 16.7614 7.26431 16.7475 7.15367 16.7069C7.04303 16.6664 6.9435 16.6003 6.86315 16.5141C6.7828 16.4279 6.72389 16.324 6.69119 16.2108C6.6585 16.0976 6.65294 15.9783 6.67497 15.8625V12.1125H10.05L10.0425 12.1275ZM15.8925 12.18H17.3325V15.93C17.3537 16.0489 17.3458 16.1712 17.3096 16.2865C17.2734 16.4017 17.2099 16.5065 17.1244 16.592C17.039 16.6774 16.9342 16.7409 16.819 16.7771C16.7037 16.8134 16.5814 16.8212 16.4625 16.8H13.335C13.2171 16.8185 13.0966 16.8086 12.9834 16.7712C12.8701 16.7337 12.7675 16.6698 12.6839 16.5848C12.6003 16.4997 12.5382 16.3959 12.5027 16.282C12.4672 16.1682 12.4594 16.0475 12.48 15.93V8.16C12.457 8.03978 12.4638 7.91577 12.4997 7.79878C12.5357 7.68179 12.5998 7.57537 12.6863 7.48883C12.7728 7.40228 12.8793 7.33823 12.9962 7.30227C13.1132 7.2663 13.2373 7.25952 13.3575 7.2825H16.4325C16.5543 7.25515 16.681 7.25865 16.8011 7.29266C16.9212 7.32667 17.031 7.39013 17.1203 7.47729C17.2097 7.56444 17.2759 7.67252 17.313 7.79174C17.35 7.91096 17.3567 8.03754 17.3325 8.16V10.41H15.8325V8.505H13.9575V12.18H15.8925Z" fill={color} /></svg>;
}
export default ilk;