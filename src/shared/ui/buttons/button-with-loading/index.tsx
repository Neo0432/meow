import {UIButtonBase} from '@shared/ui/buttons/button-base';
import {IButtonWithLoadingProps} from '@shared/ui/buttons/types';
import {PropsWithChildren} from 'react';

export function UIButtonWithLoading({
  isLoading,
  children,
  ...buttonProps
}: PropsWithChildren<IButtonWithLoadingProps>) {
  return (
    <UIButtonBase {...buttonProps}>{isLoading ? <></> : children}</UIButtonBase>
  );
}
