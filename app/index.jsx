import { StyleSheet, Text, View } from 'react-native'
import HimnosList from './components/HimnosList'

const index = () => {
  return (
    <View className="flex-1 items-center justify-center bg-bgLightGrey">
      <Text className="text-3xl">indexs</Text>
      <HimnosList/>
    </View>
  )
}

export default index
