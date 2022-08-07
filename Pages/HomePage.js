import * as React from 'react';
import { Text, View } from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'


function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function CategoryScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Category</Text>
    </View>
  );
}
function MeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Me</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

export default function Home() {
  return (
    // <Text></Text>
   
      <Tab.Navigator 
      barStyle={{ backgroundColor: '#fff' }}
      >
        <Tab.Screen name="Home" component={HomeScreen} 
         options  ={{
          
          tabBarLabel : "home", 
          }}/>
        <Tab.Screen name="Categories" component={CategoryScreen} 
         options  ={{
          tabBarLabel : "Categories", 
          }}/>
        <Tab.Screen name="Me" component={MeScreen} 
        options  ={{
          tabBarLabel : "Me", 
          }} />
      </Tab.Navigator>
   
  );
}