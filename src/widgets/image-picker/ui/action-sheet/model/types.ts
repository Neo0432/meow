import {RefObject} from 'react';
import {ActionSheetRef} from 'react-native-actions-sheet';

export interface IOSActionSheetProps {
  takePhotoAction: () => void;
  chosePhotoAction: () => void;
  deletePhotoAction: () => void;
}

export interface ActionSheetViewProps extends IOSActionSheetProps {
  actionSheetRef: RefObject<ActionSheetRef>;
}

export interface AndroidActionSheetProps extends ActionSheetViewProps {
  showActionSheet: () => void;
}
