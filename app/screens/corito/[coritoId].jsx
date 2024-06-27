import { useLayoutEffect } from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { coritos } from '../../api/coritosAPI';
import { formatTitle } from '../../utils/utils';

const CoritoDetailScreen = () => {
  const { coritoId } = useLocalSearchParams();
  const corito = coritos.find(c => c.corito.toString() === coritoId);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    if (corito) {
      navigation.setOptions({
        headerTitle: () => (
          <Text className="text-3xl mt-1 font-himnBold">
            Corito {corito.corito}
          </Text>
        ),
      });
    }
  }, [navigation, corito]);

  if (!corito) {
    return (
      <View>
        <Alert>Corito no encontrado</Alert>
      </View>
    );
  }


  return (
    <ScrollView>
      <Text className="ml-2 mt-[40px] text-4xl font-himnBold">{formatTitle(corito.titulo)}</Text>
      <Text className="ml-5 text-2xl leading-7 font-himnRegular">{corito.coro}</Text>
    </ScrollView>
  );
}

export default CoritoDetailScreen;
