import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Provider } from 'react-redux';
import { store } from './store';

import ShopScreen from './screens/ShopScreen';
import BanknoteScreen from "./screens/BanknoteScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='Список Купюр' component={ShopScreen} />
                    <Stack.Screen name='Купюр' component={BanknoteScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
