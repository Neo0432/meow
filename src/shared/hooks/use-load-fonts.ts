import {useFonts} from 'expo-font';

export function useLoadFonts() {
  const [loaded, error] = useFonts({
    Itim: require('@shared/assets/fonts/itim/Itim-Regular.ttf'),
    'Outfit-SemiBold': require('@shared/assets/fonts/outfit/Outfit-SemiBold.ttf'),
    'Outfit-Medium': require('@shared/assets/fonts/outfit/Outfit-Medium.ttf'),
    'Outfit-Regular': require('@shared/assets/fonts/outfit/Outfit-Regular.ttf'),
    'Outfit-Light': require('@shared/assets/fonts/outfit/Outfit-Light.ttf'),
    'Outfit-ExtraLight': require('@shared/assets/fonts/outfit/Outfit-ExtraLight.ttf'),
  });

  return {loaded, error};
}
