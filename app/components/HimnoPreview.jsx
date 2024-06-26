import { View, Text, Pressable } from 'react-native';
import { Link } from 'expo-router';

const HimnoPreview = ({ himno, titulo }) => {
  return (
    <Link href={`./${himno}`} asChild>
      <Pressable className="hover:bg-gray-300">
        <View className="mt-3 ml-5 w-[90%] bg-white backdrop-blur-md shadow-pronounced rounded-lg flex-row">
          <View className="h-[80px] items-center justify-center w-[80px] rounded-lg m-4 bg-bgGray">
            <Text className=" text-5xl font-himnMedium">{himno}</Text>
          </View>
          <View className="flex-1 m-auto">
            <Text className="text-[37px] leading-tight font-himnSemiBold">{titulo}</Text>
          </View>
        </View>
      </Pressable>
    </Link>
  );
};

export default HimnoPreview;
