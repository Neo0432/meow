import {UIButtonWithLoading} from '@shared/ui/buttons/button-with-loading';
import {Text} from 'react-native';
import {IButtonWithLoadingProps} from '@shared/ui/buttons/types';
import {PropsWithChildren} from 'react';

export function UIButtonWithText({
  children,
  ...buttonProps
}: PropsWithChildren<IButtonWithLoadingProps>) {
  return (
    <UIButtonWithLoading {...buttonProps}>
      <Text>{children}</Text>
    </UIButtonWithLoading>
  );
}
