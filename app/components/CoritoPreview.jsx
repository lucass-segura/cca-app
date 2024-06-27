import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

const CoritoPreview = ({ corito, titulo }) => {
  const [routing, setRouting] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    if (!routing) {
      setRouting(true);
      router.push(`../screens/corito/${corito}`);
      setTimeout(() => setRouting(false), 1000);
    }
  };

  return (
    <Pressable onPress={handleClick} disabled={routing}>
      <View className="mt-3 ml-5 w-[90%] bg-white backdrop-blur-md shadow-pronounced rounded-lg flex-row hover:bg-gray-300">
        <View className="h-[80px] items-center justify-center w-[80px] rounded-lg m-4 bg-bgGray">
          <Text className="text-5xl font-himnMedium">{corito}</Text>
        </View>
        <View className="flex-1 m-auto">
          <Text className="text-[37px] leading-tight font-himnSemiBold">{titulo}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default CoritoPreview;
