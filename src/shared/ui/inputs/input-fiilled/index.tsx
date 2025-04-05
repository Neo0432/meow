import {ReactNode, useState} from 'react';
import {InputBase} from '@shared/ui/inputs/input-base';
import {StyleProp, View, ViewStyle} from 'react-native';
import {styles} from './style';
import {IconInput} from '../input-icon';
import {colors} from '@shared/styles/colors';

export function InputFilled({
  title,
  iconType,
  hasIcon,
}: {
  title?: ReactNode;
  iconType?: 'check' | 'password';
  hasIcon?: boolean;
  customFilled?: StyleProp<ViewStyle>;
}) {
  const [passwordShown, setIsPasswordShown] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <View style={styles.textArea}>
        {title}
        <InputBase
          isSecure={iconType === 'password' && !passwordShown}
          style={{
            color: colors.orange.orange250,
            paddingTop: -16,
            paddingLeft: -8,
            width: '100%',
            fontSize: 16,
          }}
          onBlur={() => {}}
          onFocus={() => {}}
          onChange={() => {}}
        />
      </View>
      {hasIcon && iconType && (
        <View
          style={{
            position: 'absolute',
            right: 8,
            top: 0,
            bottom: 0,
            justifyContent: 'center',
          }}>
          <IconInput
            size={24}
            type={iconType}
            isShown={passwordShown}
            setIsShown={setIsPasswordShown}
          />
        </View>
      )}
    </View>
  );
}
