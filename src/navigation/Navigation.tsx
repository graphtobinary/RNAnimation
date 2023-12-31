import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { isAndroid } from "@freakycoder/react-native-helpers";
import { NavigationContainer } from "@react-navigation/native";
import { isReadyRef, navigationRef } from "react-navigation-helpers";
import HomeScreen from "../screens/Home";
import Home2 from "../screens/Home2";
import DetailScreen from "../screens/Detail";
import LayoutAN from "../screens/LayoutAN";

const Stack = createStackNavigator();

const Navigation = () => {
  React.useEffect((): any => {
    return () => (isReadyRef.current = false);
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
    >
      <Stack.Navigator
        initialRouteName="home2"
        screenOptions={{
          gestureEnabled: true,
          ...(isAndroid && TransitionPresets.ModalPresentationIOS),
        }}
      >
        <Stack.Screen name="home2" component={Home2} />
        <Stack.Group
          screenOptions={{
            headerShown: false,
            presentation: "modal",
          }}
        >
          <Stack.Screen name="home" component={HomeScreen} />
        </Stack.Group>
        <Stack.Group
          screenOptions={{
            headerShown: false,
            presentation: "modal",
          }}
        >
          <Stack.Screen name="detail" component={DetailScreen} />
        </Stack.Group>
        <Stack.Group
          screenOptions={{
            headerShown: false,
            presentation: "modal",
          }}
        >
          <Stack.Screen name="layoutrn" component={LayoutAN} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;