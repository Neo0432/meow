export interface ModalScreenHeaderProps {
  title?: string;
  goBackButton?: boolean;
  onGoBack?: () => void;
  rightActionName?: string;
  onRightAction?: () => void;
  rightActionDisabled?: boolean;
}
