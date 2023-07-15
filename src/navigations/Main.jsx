import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import userStore from '../store/user';
import Login from '../screens/auth/Login';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
    const userIsAuth = userStore((state) => state.isAuth);
    console.log({ userIsAuth })
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
           <Stack.Screen name='Auth' component={Login} />
        </Stack.Navigator>
    );
}

export default MainNavigation