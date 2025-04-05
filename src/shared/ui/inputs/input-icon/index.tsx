import {SvgCheck} from '@shared/assets/icons/components/inputs/check';
import {SvgVisibility} from '@shared/assets/icons/components/inputs/visibility';
import {SvgVisibilityOff} from '@shared/assets/icons/components/inputs/visibility-off';
import {Dispatch, SetStateAction} from 'react';
import {Pressable, TouchableWithoutFeedback} from 'react-native';

interface IconInputProps {
  size: number;
  type: 'check' | 'password';
  isShown?: boolean;
  setIsShown?: Dispatch<SetStateAction<boolean>>;
}

export const IconInput = ({
  size,
  type,
  isShown,
  setIsShown,
}: IconInputProps) => {
  return type === 'check' ? (
    <SvgCheck width={size} height={size} />
  ) : (
    <Pressable onPress={() => setIsShown!(prev => !prev)}>
      <EyeToggle size={size} isShown={!!isShown} />
    </Pressable>
  );
};

export function EyeToggle({isShown, size}: {isShown: boolean; size: number}) {
  return isShown ? (
    <SvgVisibility width={size} height={size} />
  ) : (
    <SvgVisibilityOff width={size} height={size} />
  );
}
