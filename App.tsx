import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';

import { Routes } from './src/routes/';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium
} from '@expo-google-fonts/poppins'
import AppLoading from 'expo-app-loading';

export default function App() {
  let [ fontsLoaded ] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium
  })

  if(!fontsLoaded) {
    <AppLoading/>
  }

  return (
    <ThemeProvider theme={theme}>
      <Routes/>
    </ThemeProvider>
  );
}
