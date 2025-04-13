import {Platform} from 'react-native';
import {ActionSheetViewProps} from '../../model/types';
import {useIosActionSheet} from '../ios-action-sheet';
import {AndroidActionSheet} from '../android-action-sheet';

export const ActionSheetView = ({
  actionSheetRef,
  takePhotoAction,
  chosePhotoAction,
  deletePhotoAction,
}: ActionSheetViewProps) => {
  const showActionSheet = () => {
    if (Platform.OS === 'ios') {
      useIosActionSheet({takePhotoAction, chosePhotoAction, deletePhotoAction});
    } else {
      actionSheetRef.current?.show();
    }
  };
  return (
    <AndroidActionSheet
      actionSheetRef={actionSheetRef}
      showActionSheet={showActionSheet}
      takePhotoAction={takePhotoAction}
      chosePhotoAction={chosePhotoAction}
      deletePhotoAction={deletePhotoAction}
    />
  );
};
