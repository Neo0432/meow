import ActionSheet from 'react-native-actions-sheet';
import {View} from 'react-native';
import {styles} from './style';
import {ActionSheetItem} from '../action-sheet-item';
import {AndroidActionSheetProps} from '../../model/types';

export function AndroidActionSheet({
  actionSheetRef,
  takePhotoAction,
  chosePhotoAction,
  deletePhotoAction,
  showActionSheet,
}: AndroidActionSheetProps) {
  return (
    <ActionSheet
      ref={actionSheetRef}
      onOpen={showActionSheet}
      containerStyle={{backgroundColor: 'transparent'}}>
      <View style={styles.actionSheetArea}>
        <View style={styles.substrate}>
          <ActionSheetItem
            text="Take a photo"
            onPress={() => {
              takePhotoAction();
              actionSheetRef.current?.hide();
            }}
          />
          <ActionSheetItem
            text="Choose from the library"
            onPress={() => {
              chosePhotoAction();
              actionSheetRef.current?.hide();
            }}
          />
          <ActionSheetItem
            text="Delete photo"
            onPress={() => {
              deletePhotoAction();
              actionSheetRef.current?.hide();
            }}
          />
        </View>
        <ActionSheetItem
          isCansel={true}
          text="Cancel"
          onPress={() => actionSheetRef.current?.hide()}
        />
      </View>
    </ActionSheet>
  );
}
