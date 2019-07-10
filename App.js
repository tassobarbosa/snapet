import { Navigation } from "react-native-navigation";

import AuthScreen from "./src/screens/Auth/Auth";


Navigation.registerComponent("teste3.AuthScreen", () => AuthScreen)


Navigation.startSingleScreenApp({
  screen: {
    screen: "teste3.AuthScreen",
    title: "Login"
  }
});
