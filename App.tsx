import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';

import { Welcome } from './src/pages/Welcome';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold
} from '@expo-google-fonts/poppins'
import AppLoading from 'expo-app-loading';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold
  })

  if(!fontsLoaded) {
    <AppLoading/>
  }

  return (
    <ThemeProvider theme={theme}>
      <Welcome/>
    </ThemeProvider>
  );
}
