import {View, Text} from 'react-native';

import {InputFilled} from '@shared/ui/inputs/input-fiilled';
import {colors} from '@shared/styles/colors';

// export default function HomeScreen() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: 'center',
//         backgroundColor: colors.orange.orange500,
//         padding: 24,
//       }}>
//       <InputFilled
//         title={<Text style={{fontSize: 12, height: 14}}>Hello</Text>}
//         iconType={'password'}
//       />
//       <UIButtonWithText
//         isLoading={true}
//         onPress={() => {}}
//         initialStyle={{
//           backgroundColor: colors.blue.blue500,
//           width: '100%',
//           height: 54,
//         }}>
//         Hello
//       </UIButtonWithText>
//     </View>
//   );
// }

import {LoginScreen} from '@screens/auth/sign-up';
import {UIButtonWithText} from '@shared/ui/buttons/button-with-text';

export default LoginScreen;
