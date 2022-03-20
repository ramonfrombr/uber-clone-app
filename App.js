import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import TelaInicial from './telas/TelaInicial';
import TelaMapa from './telas/TelaMapa';

import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaComida from './telas/TelaComida';


export default function App() {

	const Stack = createStackNavigator();



	return (

		<Provider store={store}>

			<NavigationContainer>

				<SafeAreaProvider>

					<Stack.Navigator
						screenOptions={{
							headerShown: false
						}}
					>

						<Stack.Screen
							name='TelaInicial'
							component={TelaInicial}
						/>

						<Stack.Screen
							name='TelaMapa'
							component={TelaMapa}
						/>

						<Stack.Screen
							name='TelaComida'
							component={TelaComida}
						/>
						
					</Stack.Navigator>

				</SafeAreaProvider>

			</NavigationContainer>

		</Provider>
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
