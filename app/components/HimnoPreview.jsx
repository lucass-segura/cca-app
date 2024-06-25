import { View, Text } from 'react-native';

const HimnoPreview = ({himno, titulo, descripcion}) => {

  return (
    <View className="mt-6 ml-5 w-[90%] bg-white backdrop-blur-md shadow-pronounced rounded-lg flex-row">
        
      <View className="h-[80px] w-[80px] rounded-lg m-4 bg-bgGray">
        <Text className="m-auto text-3xl font-medium">{himno}</Text>
      </View>
      <View className="flex-1 m-4">
        <Text className="text-2xl font-medium leading-tight">{titulo}</Text>
        <Text className="mt-1">{descripcion}</Text>
      </View>

    </View>
  );
};

{/* <View style={tw`flex-row p-4 bg-white shadow rounded-lg`}>
<View style={tw`w-12 h-12 bg-gray-200 rounded-md justify-center items-center`}>
  <Text style={tw`text-xl font-bold`}>264</Text>
</View>
<View style={tw`ml-4 flex-1`}>
  <Text style={tw`text-lg font-bold`}>Nombre Himno</Text>
  <Text style={tw`text-gray-500`}>inicio del himno...</Text>
</View>
</View> */}

export default HimnoPreview;
