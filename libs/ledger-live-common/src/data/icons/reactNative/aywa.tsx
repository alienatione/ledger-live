
      // @ts-nocheck

      import * as React from "react";
import Svg, { Path } from "react-native-svg";
interface Props {
              size: number;
              color: string;
            };
function aywa({ size, color }: Props) {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill="none"><Path d="M12 3C7.02975 3 3 7.02975 3 12C3 16.9703 7.02975 21 12 21C16.9703 21 21 16.9703 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3ZM12 20.8275C7.125 20.8275 3.1725 16.875 3.1725 12C3.1725 7.125 7.125 3.1725 12 3.1725C16.875 3.1725 20.8275 7.125 20.8275 12C20.8275 14.3412 19.8975 16.5865 18.242 18.242C16.5865 19.8975 14.3412 20.8275 12 20.8275Z" fill={color} /><Path fillRule="evenodd" clipRule="evenodd" d="M14.4675 10.125L14.445 10.0425L14.4225 9.96L14.4 9.87L14.37 9.795L14.3475 9.7125L14.3175 9.6375L14.28 9.555L14.25 9.48L14.2125 9.4125L14.175 9.3375L14.1375 9.27L14.0925 9.2025L14.055 9.1425L14.01 9.075L13.965 9.0225L13.9125 8.9625L13.8675 8.91L13.8225 8.8575L13.77 8.8125L13.7175 8.7675L13.665 8.7225L13.6125 8.685L13.5525 8.6475L13.5 8.6175L13.44 8.58L13.3875 8.5575L13.3275 8.5275L13.2675 8.505L13.2075 8.4825L13.14 8.4675L13.08 8.4525L13.02 8.4375L12.9525 8.43L12.885 8.4225L12.825 8.415H12.6225L12.555 8.4225L12.4875 8.43L12.4125 8.4375L12.345 8.4525L12.2775 8.4675L12.21 8.4825L12.135 8.505L12.0675 8.5275L11.9925 8.55L11.9175 8.58L11.85 8.61L11.775 8.6475L11.7075 8.6775L11.6325 8.715L11.5575 8.76L11.49 8.7975L11.415 8.8425L11.34 8.895L11.2725 8.94L11.1975 8.9925L11.1225 9.0525L11.0475 9.105L10.98 9.165L10.905 9.225L10.8375 9.2925L10.7625 9.36L10.6875 9.4275L10.62 9.5025L10.545 9.5775L10.4775 9.6525L10.41 9.7275L10.335 9.81L10.2675 9.8925L10.2 9.975L10.1325 10.065L10.065 10.155L9.99752 10.2525L9.90752 10.38L9.81752 10.515L9.72752 10.6575L9.64502 10.7925L9.56252 10.9425L9.48002 11.085L9.40502 11.2275L9.33002 11.3775L9.26252 11.5275L9.19502 11.6775L9.13502 11.8275L9.08252 11.9475L14.475 10.185L14.4675 10.125ZM9.60002 12.7575L14.3775 12.72L14.4 12.615L14.4225 12.51L14.445 12.405L14.4675 12.2925L14.4825 12.1875L14.505 12.0825L14.52 11.9775L14.5275 11.8725L14.5425 11.7675L14.55 11.6625L14.5575 11.565L14.565 11.46L14.5725 11.355V11.1375L9.60002 12.7575Z" fill={color} /><Path d="M12 3.42C7.26151 3.42 3.42001 7.2615 3.42001 12C3.42001 16.7385 7.26151 20.58 12 20.58C16.7385 20.58 20.58 16.7385 20.58 12C20.58 10.8733 20.3581 9.75755 19.9269 8.71657C19.4957 7.6756 18.8637 6.72975 18.067 5.93302C17.2703 5.1363 16.3244 4.5043 15.2834 4.07311C14.2425 3.64193 13.1268 3.42 12 3.42ZM16.86 12.69L16.71 13.575H15.3675L15.3225 13.725L15.24 13.95L15.1575 14.175L15.0675 14.4L15 14.625L14.9025 14.8425L14.7975 15.06L14.6925 15.2775L14.58 15.4875L14.4675 15.6975L14.3475 15.9L14.2275 16.1025L14.1 16.305L13.95 16.5L13.8825 16.5975L13.815 16.695L13.1175 15.525L13.185 15.4275L13.2525 15.33L13.3125 15.2325L13.3725 15.135L13.4325 15.0375L13.4925 14.94L13.5525 14.8425L13.605 14.745L13.6575 14.64L13.71 14.535L13.7625 14.43L13.815 14.325L13.86 14.22L13.905 14.115L13.95 14.01L13.995 13.905L14.04 13.8L14.0775 13.695V13.605L8.62501 13.65V15.0375L7.23001 16.005V13.65H6.82501L6.67501 13.7025L6.42001 12.81L7.68001 12.3975V12.3L7.73251 12.1425L7.80751 12L7.86001 11.85L7.92001 11.7L7.98001 11.55L8.04001 11.4L8.10001 11.25L8.16751 11.1L8.23501 10.95L8.30251 10.8L8.37001 10.6575L8.44501 10.515L8.52001 10.3725L8.59501 10.23L8.67001 10.0875L8.75251 9.945L8.83501 9.81L8.91751 9.675L9.00001 9.5325L9.08251 9.3975L9.17251 9.27L9.26251 9.1425L9.34501 9L9.43501 8.8725L9.52501 8.7525L9.62251 8.6325L9.75001 8.5275L9.84751 8.415L9.94501 8.3025L10.0425 8.19L10.1475 8.085L10.2525 7.98L10.3575 7.875L10.4625 7.7775L10.5675 7.68L10.6725 7.5825L10.755 7.5L10.8675 7.41L10.98 7.3275L11.0925 7.245L11.205 7.1625L11.3175 7.0875L11.43 7.02L11.5425 6.9525L11.655 6.8925L11.7675 6.8325L11.865 6.75L12 6.7125L12.105 6.6675L12.21 6.6225L12.315 6.585H14.1225L14.205 6.6225L14.2875 6.66L14.37 6.705L14.4525 6.75L14.5275 6.8025L14.6025 6.855L14.6775 6.915L14.7525 6.975L14.82 7.0425L14.8875 7.11L14.955 7.185L15.0225 7.26L15.0825 7.3425L15.1425 7.425L15.2025 7.5075L15.2625 7.5975L15.315 7.6875L15.3675 7.785L15.42 7.8825L15.465 7.9875L15.51 8.0925L15.555 8.1975L15.6 8.31L15.6375 8.4225V9.75L16.3875 9.51L16.6425 10.4025L15.6825 10.7175V11.94L15.645 12.165L15.6 12.39L15.5475 12.615V12.7125L16.86 12.69Z" fill={color} /></Svg>;
}
export default aywa;