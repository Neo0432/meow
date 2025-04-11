import {SvgPlus32Dp} from '@shared/assets/icons/components/navigation/plus-32dp';
import {IIconProps, IIconRoundedButtonType} from '@shared/ui/buttons/types';

const icons = {
  ['add']: ({size, color}: IIconProps) => (
    <SvgPlus32Dp color={color} width={size} height={size} />
  ),
};

export function Icon({icon, color, size}: IIconRoundedButtonType) {
  return icons[icon]({size: size, color: color});
}
