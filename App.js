import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './screens/Screen1'
import Screen2 from './screens/Screen2'
import Screen3 from './screens/Screen3'
import { TaskProvider } from './contextAPI/TaskContext';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <TaskProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Screen1"
            component={Screen1}
            options={{title: ''}}
          />
          <Stack.Screen
            name="Screen2"
            component={Screen2}
            options={{title: ''}}
          />
          <Stack.Screen
            name="Screen3"
            component={Screen3}
            options={{title: ''}}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    </TaskProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
