import {Dispatch, SetStateAction} from 'react';
import * as ImagePicker from 'expo-image-picker';

export async function pickPhoto(
  mediaType: 'avatar' | 'post',
  setAvatarUrl: Dispatch<SetStateAction<string | null>>,
) {
  const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (status !== 'granted') {
    alert('Permission to access gallery is required!');
    return;
  }

  try {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: mediaType === 'avatar' ? [1, 1] : [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setAvatarUrl(result.assets[0].uri);
    }
  } catch (e) {
    console.log(e);
  }
}

export async function pickPhotoFromCam(
  mediaType: 'avatar' | 'post',
  setAvatarUrl: Dispatch<SetStateAction<string | null>>,
) {
  const {status} = await ImagePicker.requestCameraPermissionsAsync();
  if (status !== 'granted') {
    console.log('Permission required, Camera access is needed to take photos.');
    return;
  }

  try {
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: mediaType === 'avatar' ? [1, 1] : [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setAvatarUrl(result.assets[0].uri);
    }
  } catch (e) {
    console.log(e);
  }
}
