/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import * as React from 'react';
import {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {COLORS, icons, images, SIZES} from './constants';
import Home from './Home';
import Welcome from './welcome/Welcome';
import ScreenHeaderBtn from './common/header/ScreenHeaderBtn';
import Popularjobs from './popular/Popularjobs';
import Nearbyjobs from './nearby/Nearbyjobs';

function App(): JSX.Element {
  const isDark = useColorScheme() === 'dark';
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
        <Stack.Navigator>
          <Stack.Screen
            name="YourScreenName" // Replace 'YourScreenName' with your desired screen name
            component={() => (
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flex: 1, padding: SIZES.medium}}>
                  <Welcome />
                  <Popularjobs />
                  <Nearbyjobs />
                </View>
              </ScrollView>
            )}
            options={{
              headerStyle: {backgroundColor: COLORS.lightWhite},
              headerShadowVisible: false,
              headerLeft: () => (
                <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
              ),
              headerRight: () => (
                <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
              ),
              headerTitle: '',
            }}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});

export default App;
