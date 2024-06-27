import { Stack } from 'expo-router'
import { useFonts } from 'expo-font'

const RootLayout = () => {

  const [fontsLoaded] = useFonts({
    'MarkaziText-Regular': require('../assets/fonts/MarkaziText-Regular.ttf'),
    'MarkaziText-Bold': require('../assets/fonts/MarkaziText-Bold.ttf'),
    'MarkaziText-SemiBold': require('../assets/fonts/MarkaziText-SemiBold.ttf'),
    'MarkaziText-Medium': require('../assets/fonts/MarkaziText-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  )
}

export default RootLayout
