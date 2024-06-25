import { View, Text } from 'react-native';
import { Link } from 'expo-router';
import himnos from '../api/himnosAPI'

const HimnosList = () => {

  return (
    <View className=" w-[80%] h-[350px] bg-white backdrop-blur-md shadow-pronounced rounded-lg">
      <View className="flex-row justify-between items-center">
        <Text className="mt-2 ml-3 text-2xl font-medium">Himnos</Text>
        <Link href="/#" className='mt-2 mr-3'>Ver todos</Link>
      </View>
      <View className="h-[25%] w-[25%] m-4 bg-black">

      </View>
    </View>
  );
};

export default HimnosList;
