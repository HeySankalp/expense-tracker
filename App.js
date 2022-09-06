import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Allexpences from './screens/Allexpences';
import Recentexpences from './screens/Recentexpences';
import Manageexpence from './screens/Manageexpence';
import Geticon from './custom/Icon';
import Icon from 'react-native-vector-icons/AntDesign';
import ExpenseContextProvider from './context/ExpenseContext';



export default function App() {

  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  function Expencesoverview() {
    return (
      <Tab.Navigator
        screenOptions={({ navigation }) => ({
          headerStyle: { backgroundColor: '#446300' },
          headerTintColor: 'white',
          tabBarStyle: { backgroundColor: '#446300' },
          tabBarInactiveBackgroundColor: '#283a00',
          tabBarActiveTintColor: '#fdfcaa',
          tabBarInactiveTintColor: '#8e8e4d',
          tabBarLabelStyle: { fontSize: 15, },
          headerRight: ({ tintColor }) => (
            <Geticon
              onPress={() => { navigation.navigate('Manageexpense') }}
              name={"pluscircleo"}
              color={tintColor}
              size={24}
            />)
        })}
      >
        <Tab.Screen name='Recentexpenses' component={Recentexpences}
          options={{
            title: 'Recent Expenses',
            tabBarLabel: "Recent Expenses",
            tabBarIcon: ({ color, size }) => <Icon name='clockcircle' color={color} size={size} />
          }} />
        <Tab.Screen name='Allexpenses' component={Allexpences}
          options={{
            title: 'All Expenses',
            tabBarIcon: ({ color, size }) => <Icon name='calendar' color={color} size={size} />,
            tabBarLabel: "All Expenses",
          }} />
      </Tab.Navigator>
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <ExpenseContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='Expensesoverview' component={Expencesoverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen name='Manageexpense' component={Manageexpence}
              options={{
                presentation: 'modal',
                headerStyle: { backgroundColor: '#446300' },
                headerTintColor: '#ffffff'
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpenseContextProvider>
    </>

  );
}
