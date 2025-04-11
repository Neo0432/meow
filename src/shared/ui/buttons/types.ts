import {ColorValue, StyleProp, TextStyle, ViewStyle} from 'react-native';
import {ReactNode} from 'react';

export interface IButtonProps {
  onPress: () => void;
  disabled?: boolean;
  initialStyle?: StyleProp<ViewStyle>;
  pressedStyle?: StyleProp<ViewStyle>;
  disabledStyle?: StyleProp<ViewStyle>;
  children: ReactNode;
}

export interface IButtonWithLoadingProps extends IButtonProps {
  isLoading: boolean;
}

export interface IButtonWithTextProps extends IButtonWithLoadingProps {
  textStyle?: StyleProp<TextStyle>;
}

export interface UITextButton {
  onPress: () => void;
  disabled?: boolean;
}

export interface IconButtonProps {
  icon: 'feed' | 'walk' | 'pill';
  iconSize?: number;
  onPress: () => void;
  disabled?: boolean;
  initialColor?: ColorValue;
  pressedColor?: ColorValue;
  disabledColor?: ColorValue;
  buttonStyle?: StyleProp<ViewStyle>;
  children?: ReactNode;
}

export interface IIconProps {
  size: number;
  color: ColorValue;
}

export interface IIconRoundedButtonType extends IIconProps {
  icon: 'add';
}
