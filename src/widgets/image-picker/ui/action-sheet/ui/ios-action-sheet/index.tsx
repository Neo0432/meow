import {ActionSheetIOS} from 'react-native';
import {handleAction} from '../../lib/handle-item-press';
import {IOSActionSheetProps} from '../../model/types';

export const useIosActionSheet = ({...args}: IOSActionSheetProps) => {
  ActionSheetIOS.showActionSheetWithOptions(
    {
      options: [
        'Take a photo',
        'Choose from the library',
        'Delete photo',
        'Cancel',
      ],
      destructiveButtonIndex: 2,
      cancelButtonIndex: 3,
      userInterfaceStyle: 'light',
    },
    buttonIndex => {
      handleAction(buttonIndex, {...args});
    },
  );
};
