import {Text, View} from 'react-native';
import {styles} from './style';
import {useAppSelector} from '@shared/store';
import {selectUserHeader} from '@entities/user/model/selectors';
import {UserHeaderImage} from '@features/user/user-header/ui/user-header-image';

export function UserHeader() {
  const user = useAppSelector(selectUserHeader);

  return (
    <View style={styles.userHeader}>
      <Text style={styles.headerText}>{user.name || 'User Name'}</Text>
      <UserHeaderImage imageUrl={user.imageUrl} />
    </View>
  );
}
