import {SvgPlus32Dp} from '@shared/assets/icons/components/navigation/plus-32dp';
import {IIconProps, IIconRoundedButtonType} from '@shared/ui/buttons/types';
import {SvgPhotoCameraIcon24Dp} from '@shared/assets/icons/components/uploading/image-upload/photo-camera-icon-24dp';

const icons = {
  ['add']: ({size, color}: IIconProps) => (
    <SvgPlus32Dp fill={color} width={size} height={size} />
  ),
  ['camera']: ({size, color}: IIconProps) => (
    <SvgPhotoCameraIcon24Dp fill={color} width={size} height={size} />
  ),
};

export function Icon({icon, color, size}: IIconRoundedButtonType) {
  return icons[icon]({size: size, color: color});
}
