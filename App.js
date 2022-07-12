import type {Node} from 'react';
import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {COLORS} from "./src/styles/colors";
import {HOME_PAGE, ABOUT_PAGE, LOCATIONS_PAGE, SCAN_PAGE} from "./src/pages/navigation";

const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle={'dark-content'}/>
      <View style={styles.background}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={HOME_PAGE.name}
            screenOptions={{headerShown: false}}
          >
            <Stack.Screen name={HOME_PAGE.name} component={HOME_PAGE.component}/>
            <Stack.Screen name={LOCATIONS_PAGE.name} component={LOCATIONS_PAGE.component}/>
            <Stack.Screen name={SCAN_PAGE.name} component={SCAN_PAGE.component}/>
            <Stack.Screen name={ABOUT_PAGE.name} component={ABOUT_PAGE.component}/>

          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: COLORS.pink,
    flex: 1,
  },
  background: {
    flex: 1,
    padding: 16,
    paddingTop: 0,
  },
});

export default App;
