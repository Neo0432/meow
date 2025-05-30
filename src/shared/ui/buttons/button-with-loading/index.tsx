import {UIButtonBase} from '@shared/ui/buttons/button-base';
import {IButtonWithLoadingProps} from '@shared/ui/buttons/types';
import {PropsWithChildren} from 'react';
import {ActivityIndicator, Text} from 'react-native';
import {typography} from '@shared/styles/typography';
import {colors} from '@shared/styles/colors';

export function UIButtonWithLoading({
  isLoading,
  children,
  ...buttonProps
}: PropsWithChildren<IButtonWithLoadingProps>) {
  return (
    <UIButtonBase {...buttonProps}>
      {isLoading ? (
        <Text
          style={{
            ...typography.h3_itim_regular_18,
            color: colors.orange.orange100,
          }}>
          <ActivityIndicator />
        </Text>
      ) : (
        children
      )}
    </UIButtonBase>
  );
}
