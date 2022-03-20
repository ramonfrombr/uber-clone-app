import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import TelaInicial from './telas/TelaInicial';
import { store } from './store';



export default function App() {
  return (

	<Provider store={store}>
		<TelaInicial />
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
