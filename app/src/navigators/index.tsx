/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import screens from './screens';

const Stack: any = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
        <Stack.Navigator
          initialRouteName={'Home'}
          screenOptions={{
            headerShown: false,
          }}>
            {screens.map((stack, index) => {
              return (
                <Stack.Screen
                  name={stack.name}
                  component={stack.component}
                  options={stack.options ?? {}}
                  key={index}
                />
              );
            })}
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default AppNavigator;

