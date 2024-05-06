import React, {Suspense, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from 'screens/Home.Screen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ReelScreen} from 'screens/Reel.Screen';
import {ProfileScreen} from 'screens/Profile.Screen';
import {SvgImage} from 'components/SvgImage';
import {colors} from 'theme/colors';
import {SearchScreen} from 'screens/Search.Screen';
import {PostScreen} from 'screens/Post.Screen';
import {Input} from 'components/Input';
import {Navbar} from 'components/Navbar';

enum ERooter {
  Home = 'Home',
  Messages = 'Messages',
  Profile = 'Profile',
  Reels = 'Reels',
  Search = 'Search',
}
const Tab = createBottomTabNavigator();

export const Navigation: React.FC = () => {
  const [value, setValue] = useState<string>('');
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 60,
          },

          headerStyle: {
            height: 40,
          },
        }}>
        <Tab.Screen
          name={ERooter.Home}
          component={HomeScreen}
          options={{
            header: () => (
              <Navbar
                rightActionType="icon"
                right1={require('../assets/vectors/heart.svg')}
                right2={require('../assets/vectors/activity.svg')}
                type="standard"
                title="INSTAGRAM"
              />
            ),
            tabBarIcon: ({focused}) => (
              <SvgImage
                source={require(`../assets/vectors/home.svg`)}
                color={focused ? colors.purple : colors.darkBlack}
              />
            ),
          }}
        />
        <Tab.Screen
          name={ERooter.Search}
          component={SearchScreen}
          options={{
            header: () => (
              <Input
                onBlur={() => (
                  <SvgImage source={require('../assets/vectors/right.svg')} />
                )}
                placeholder="Search"
                style={styles.container}
                placeholderTextColor={colors.mediumGray}
                inputStyle={styles.input}
                icon={
                  <SvgImage
                    color={colors.darkBlack}
                    source={require('../assets/vectors/search.svg')}
                  />
                }
                value={value}
                setValue={setValue}
              />
            ),
            tabBarIcon: ({focused}) => (
              <SvgImage
                source={require(`../assets/vectors/search.svg`)}
                color={focused ? colors.purple : colors.darkBlack}
              />
            ),
          }}
        />
        <Tab.Screen
          name={ERooter.Reels}
          component={PostScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <SvgImage
                source={require(`../assets/vectors/plus-square.svg`)}
                color={focused ? colors.purple : colors.darkBlack}
              />
            ),
          }}
        />
        <Tab.Screen
          name={ERooter.Messages}
          component={ReelScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <SvgImage
                source={require(`../assets/vectors/reels.svg`)}
                color={focused ? colors.purple : colors.white}
              />
            ),
          }}
        />
        <Tab.Screen
          name={ERooter.Profile}
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <Image
                style={styles.image}
                source={{
                  uri: 'https://cdn.britannica.com/73/234573-050-8EE03E16/Cristiano-Ronaldo-ceremony-rename-airport-Santa-Cruz-Madeira-Portugal-March-29-2017.jpg',
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGray,
    margin: 10,
  },
  input: {
    fontSize: 20,
    borderRadius: 30,
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 30,
  },
});
