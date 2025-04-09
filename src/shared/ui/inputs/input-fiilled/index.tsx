import {useState} from 'react';
import {InputBase} from '@shared/ui/inputs/input-base';
import {View} from 'react-native';
import {styles} from './style';
import {AuthInputIcon} from '@shared/ui/inputs/input-fiilled/ui/auth-input-icon';
import {InputFilledProps} from '@shared/ui/inputs/input-fiilled/model/types';

export function InputFilled({
  title,
  iconType,
  isCorrect,
  ...InputBaseProps
}: InputFilledProps) {
  const [passwordShown, setIsPasswordShown] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <View style={styles.textArea}>
        {title}
        <InputBase
          isSecure={iconType === 'password' && !passwordShown}
          style={styles.input}
          {...InputBaseProps}
        />
      </View>
      <AuthInputIcon
        iconType={iconType}
        isCorrect={isCorrect}
        passwordShown={passwordShown}
        setIsPasswordShown={setIsPasswordShown}
      />
    </View>
  );
}
