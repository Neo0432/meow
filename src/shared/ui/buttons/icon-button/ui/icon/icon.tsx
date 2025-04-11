import {SvgForkSpoon24DpIcon} from '@shared/assets/icons/components/actions/fork-spoon-24dp-icon';
import {SvgFootprint24DpIcon} from '@shared/assets/icons/components/actions/footprint-24dp-icon';
import {SvgPill24DpIcon} from '@shared/assets/icons/components/actions/pill-24dp-icon';
import {IIconProps} from '@shared/ui/buttons/types';

interface IIconType extends IIconProps {
  icon: 'feed' | 'walk' | 'pill';
}

const icons = {
  ['feed']: ({size, color}: IIconProps) => (
    <SvgForkSpoon24DpIcon color={color} width={size} height={size} />
  ),
  ['walk']: ({size, color}: IIconProps) => (
    <SvgFootprint24DpIcon color={color} width={size} height={size} />
  ),
  ['pill']: ({size, color}: IIconProps) => (
    <SvgPill24DpIcon color={color} width={size} height={size} />
  ),
};

export function Icon({icon, color, size}: IIconType) {
  return icons[icon]({size: size, color: color});
}
