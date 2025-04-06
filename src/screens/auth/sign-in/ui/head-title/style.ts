import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 165,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 32,
  },

  title: {
    //TODO Добавить шрифт
    fontSize: 28,
    flexWrap: 'wrap',
    textAlign: 'left',
    flexShrink: 1,
  },
});
