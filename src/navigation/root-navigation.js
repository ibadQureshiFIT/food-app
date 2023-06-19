// In App.js in a new project
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from 'config/colors';
import * as React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LanguageScreen from 'screens/language-screen';
import LoginScreen from 'screens/login-screen';
import Notifications from 'screens/notifications';
import Signup from 'screens/signup';
import Splash from 'screens/splash';
import { horizontalAnimation } from '../utils';
import { TabBar } from './curvedtabs';
//cart side
import CartPreview from 'screens/cart-screens/cartPreview/cartPreview';
import CartProceed from 'screens/cart-screens/cart-proceed/cart-Proceed';
import AddNewPayment from 'screens/cart-screens/addNewPayment/addNewPayment';
import CartCheckout from 'screens/cart-screens/cart-checkout/cartCheckout';
import OrderNotificationCart from 'screens/cart-screens/orderNotificationCart/orderNotificationCart';
import OrderStatus from 'screens/cart-screens/orderstatus/orderstatus';
const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 0, backgroundColor: colors.primary }} />
      <StatusBar
        translucent={false}
        backgroundColor={colors.primary}
        barStyle={'light-content'}
      /> 
      <Stack.Navigator
        initialRouteName="CartPreview"
        screenOptions={horizontalAnimation}>
        <Stack.Group>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Notifications" component={Notifications} />
          <Stack.Screen name="LanguageScreen" component={LanguageScreen} />
        </Stack.Group>

        {/* cart screens */}
        <Stack.Screen name="CartPreview" component={CartPreview} />
        <Stack.Screen name="CartProceed" component={CartProceed} />
        <Stack.Screen name="AddNewPayment" component={AddNewPayment} />
        <Stack.Screen name="CartCheckout" component={CartCheckout} />
        <Stack.Screen name="OrderNotificationCart" component={OrderNotificationCart} />
        <Stack.Screen name="OrderStatus" component={OrderStatus} />

        <Stack.Screen name="TabBar" component={TabBar} />

      </Stack.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});
