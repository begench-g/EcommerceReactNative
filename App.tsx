import React from 'react';
import { Svg, SvgUri, Path } from 'react-native-svg';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import SplashScreen from './src/splash/SplashScreen';
import SplashLoading from './src/splash/SplashScreen2';
import WelcomeScreen from './src/welcomeScreen/welcomeScreen';
import AuthScreen from './src/Authentication/Authentication';
import HomeScreen from './src/HomeScreen1.png/HomeScreen1';
function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    // <SplashScreen/>
    // <SplashLoading/>
    // <WelcomeScreen/>
    // <AuthScreen/>
    <HomeScreen/>
  )}

const styles = StyleSheet.create({
  rec1:{

  }
})


export default App;
