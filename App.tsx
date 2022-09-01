import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';

// import { Welcome } from './src/pages/Welcome';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium
} from '@expo-google-fonts/poppins'
import AppLoading from 'expo-app-loading';
import { Home } from './src/pages/Home';

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
      {/* <Welcome/> */}
      <Home/>
    </ThemeProvider>
  );
}
