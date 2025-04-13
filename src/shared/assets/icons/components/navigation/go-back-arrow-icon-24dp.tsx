import Svg, {G, Path, Defs, ClipPath, Rect} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
export const SvgGoBackArrowIcon24Dp = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#clip0_454_357)">
      <Path
        d="M7.825 13L13.425 18.6L12 20L4 12L12 4L13.425 5.4L7.825 11H20V13H7.825Z"
        fill="currentColor"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_454_357">
        <Rect width={16} height={16} fill="white" transform="translate(4 4)" />
      </ClipPath>
    </Defs>
  </Svg>
);
