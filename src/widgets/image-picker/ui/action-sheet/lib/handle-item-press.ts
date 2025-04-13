import {IOSActionSheetProps} from '../model/types';

export const handleAction = (
  buttonIndex: number,
  {takePhotoAction, deletePhotoAction, chosePhotoAction}: IOSActionSheetProps,
) => {
  switch (buttonIndex) {
    case 0:
      takePhotoAction();
      break;
    case 1:
      chosePhotoAction();
      break;
    case 2:
      deletePhotoAction();
      break;
    default:
      break;
  }
};
