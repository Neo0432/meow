import {StyleProp, TextStyle, ViewStyle} from 'react-native';
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
