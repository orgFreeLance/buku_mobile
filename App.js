import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './src/navigations/Main';
import { NativeBaseProvider } from 'native-base';
import theme from './src/constants/theme';
import * as SplashScreen from 'expo-splash-screen';
import { LogBox } from "react-native"
import { useFonts } from 'expo-font';
import { useCallback } from 'react';

LogBox.ignoreLogs([
  'In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.',
]);

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-Bold': require('./assets/fonts/poppins/Poppins-Bold.otf'),
    'Poppins-SemiBold': require('./assets/fonts/poppins/Poppins-SemiBold.otf'),
    'Poppins-Light': require('./assets/fonts/poppins/Poppins-Light.otf'),
    'Poppins-Medium': require('./assets/fonts/poppins/Poppins-Medium.otf'),
    'Poppins-Regular': require('./assets/fonts/poppins/Poppins-Regular.otf'),
  });
  console.log({ fontsLoaded })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  onLayoutRootView()

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </NativeBaseProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
