import {Platform} from 'react-native';

export const shadows = {
  peachInput: {
    ...Platform.select({
      ios: {
        shadowColor: '#FF9A5C',
        shadowOffset: {width: 0, height: 13},
        shadowOpacity: 0.2,
        shadowRadius: 26,
      },
      android: {
        shadowColor: '#FF9A5C33',
        elevation: 5,
      },
    }),
  },
};
