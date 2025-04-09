import {ScrollView} from 'react-native';
import {PetClosedCard} from '@widgets/pet-card';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './style';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.screen}>
        <PetClosedCard />
        <PetClosedCard />
        <PetClosedCard />
        <PetClosedCard />
        <PetClosedCard />
        <PetClosedCard />
        <PetClosedCard />
        <PetClosedCard />
        <PetClosedCard />
        <PetClosedCard />
      </ScrollView>
    </SafeAreaView>
  );
}
