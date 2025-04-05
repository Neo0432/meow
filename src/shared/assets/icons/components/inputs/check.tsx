import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
export const SvgCheck = (props: SvgProps) => (
  <Svg width={25} height={24} fill="none" {...props}>
    <Path d="M10.5 16.4L6.5 12.4L7.9 11L10.5 13.6L17.1 7L18.5 8.4L10.5 16.4Z" fill="#40B13A" />
  </Svg>
);
