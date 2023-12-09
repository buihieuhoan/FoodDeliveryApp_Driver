import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import orders from './assets/data/orders.json'
import OrderItem from './src/components/OrderItem';
import OrdersScreen from './src/screens/OrdersScreen';
import OrderDelivery from './src/screens/OrderDelivery';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <OrderDelivery />
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingTop:40,
  },
});
