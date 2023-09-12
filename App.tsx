import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import Theme from "@theme/index";

import { Players } from "@screens/Players";
import { Loading } from "@components/Loading";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={Theme}>
      <StatusBar
        style="light"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Players /> : <Loading />}
    </ThemeProvider>
  );
}
