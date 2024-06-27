import { useLayoutEffect } from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { himnos } from '../../api/himnosAPI';
import { formatTitle } from '../../utils/utils';

const HimnoDetailScreen = () => {
  const { himnoId } = useLocalSearchParams();
  const himno = himnos.find(h => h.himno.toString() === himnoId);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    if (himno) {
      navigation.setOptions({
        headerTitle: () => (
          <Text className="text-3xl mt-1 font-himnBold">
            Himno {himno.himno}
          </Text>
        ),
      });
    }
  }, [navigation, himno]);

  if (!himno) {
    return (
      <View>
        <Alert>Himno no encontrado</Alert>
      </View>
    );
  }

  const { letra } = himno;
  const versos = Object.entries(letra)
    .filter(([key]) => key !== 'coro' && key !== 'final')
    .sort(([a], [b]) => a - b);
  const coro = letra.coro ? <Text key="coro" className="ml-5 mt-4 text-2xl font-himnBold">{letra.coro}</Text> : null;
  const final = letra.final ? <Text key="final" className="ml-10 mt-4 text-2xl font-himnBold">{letra.final}</Text> : null;

  return (
    <ScrollView>
      <Text className="ml-2 mt-[40px] text-4xl font-himnBold">{formatTitle(himno.titulo)}</Text>
      {versos.map(([key, verso], index) => (
        <View key={key} className="flex-row items-start mt-5">
          <Text className="text-2xl ml-2 mr-1 font-himnMedium">{index + 1}.</Text>
          <View className="flex-1">
            {verso.split('\n').map((line, i) => (
              <Text key={i} className="text-2xl leading-7 font-himnRegular">{line}</Text>
            ))}
            {index === 0 && coro}
          </View>
        </View>
      ))}
      {final}
      <View className="mt-10"></View>
    </ScrollView>
  );
}

export default HimnoDetailScreen;
