import { StyleSheet, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './src/navigations/Main';
import { NativeBaseProvider } from 'native-base';
import theme from './src/constants/theme';
import * as SplashScreen from 'expo-splash-screen';
import { LogBox } from "react-native"
import { useFonts } from 'expo-font';
import { useCallback, useEffect } from 'react';
import billingStore from './src/store/billing';
import { navigationRef } from './src/navigations/RootNavigation';

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

  const getBills = billingStore((state) => state.getBills);

  useEffect(() => { getBills() }, []);

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
      <NavigationContainer ref={navigationRef}>
        <MainNavigation />
      </NavigationContainer>
    </NativeBaseProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#962A7E',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
