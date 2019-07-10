import { Navigation } from "react-native-navigation";

import AuthScreen from "./src/screens/Auth/Auth";
import HomeScreen from "./src/screens/Home/Home";
import FoodScreen from "./src/screens/Food/Food";
import CareScreen from "./src/screens/Care/Care";
import CameraScreen from "./src/screens/Camera/Camera";
import SideDrawer from "./src/screens/SideDrawer/SideDrawer";

Navigation.registerComponent("snapet.AuthScreen", () => AuthScreen)
Navigation.registerComponent("snapet.HomeScreen", () => HomeScreen)
Navigation.registerComponent("snapet.FoodScreen", () => FoodScreen)
Navigation.registerComponent("snapet.CareScreen", () => CareScreen)
Navigation.registerComponent("snapet.CameraScreen", () => CameraScreen)
Navigation.registerComponent("snapet.SideDrawer", () => SideDrawer)

Navigation.startSingleScreenApp({
  screen: {
    screen: "snapet.AuthScreen",
    title: "Login"
  }
});
