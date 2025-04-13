import {useRef} from 'react';
import {Text, View} from 'react-native';
import {Image} from 'expo-image';
import {Pressable} from 'react-native-gesture-handler';
import {ActionSheetRef} from 'react-native-actions-sheet';
import {SvgImageUploadIcon53Dp} from '@shared/assets/icons/components/uploading/image-upload/image-upload-icon-53dp';
import {ActionSheetView} from '../action-sheet';
import {
  pickPhoto,
  pickPhotoFromCam,
} from '@widgets/image-picker/lib/pick-photo';
import {IImagePickerProps} from '@widgets/image-picker/model/types';
import {styles} from './style';
import {AvatarPicker} from '@widgets/image-picker/ui/avatar-picker';

export function ImagePickerArea({
  mediaUrl,
  setImageUrl,
  isAreaDisabled,
  type,
}: IImagePickerProps) {
  const actionSheetRef = useRef<ActionSheetRef>(null);

  return (
    <>
      {type === 'post' ? (
        <Pressable
          disabled={isAreaDisabled}
          onPress={() => {
            actionSheetRef.current?.show();
          }}>
          <View style={styles.container}>
            {!mediaUrl ? (
              <View style={styles.contentPlaceholder}>
                <SvgImageUploadIcon53Dp width={53} height={53} />
                <Text style={styles.placeholderText}>
                  Upload your photo here
                </Text>
              </View>
            ) : (
              <Image
                source={mediaUrl}
                style={styles.image}
                contentFit="cover"
              />
            )}
          </View>
        </Pressable>
      ) : (
        <AvatarPicker
          onButtonPress={() => {
            actionSheetRef.current?.show();
          }}
          imageUrl={mediaUrl}
        />
      )}

      <ActionSheetView
        actionSheetRef={actionSheetRef}
        takePhotoAction={() => pickPhotoFromCam(type, setImageUrl)}
        chosePhotoAction={() => pickPhoto(type, setImageUrl)}
        deletePhotoAction={() => setImageUrl('')}
      />
    </>
  );
}
