import {Dispatch, SetStateAction} from 'react';
import {View} from 'react-native';
import {styles} from './style';
import {InputIcon} from '@shared/ui/inputs/input-icon';
import {InputFilledProps} from '@shared/ui/inputs/input-fiilled/model/types';

export function AuthInputIcon({
  iconType,
  isCorrect,
  passwordShown,
  setIsPasswordShown,
}: {
  passwordShown?: boolean;
  setIsPasswordShown?: Dispatch<SetStateAction<boolean>>;
} & InputFilledProps) {
  return (
    iconType && (
      <View style={styles.icon}>
        <InputIcon
          size={24}
          type={iconType}
          isCorrect={isCorrect}
          isShown={passwordShown}
          setIsShown={setIsPasswordShown}
        />
      </View>
    )
  );
}
