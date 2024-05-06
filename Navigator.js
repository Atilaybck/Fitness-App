import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./screens/Home";
import { Edit } from "./screens/Edit";
import { Profile } from "./screens/Profile";
import Welcome from "./src/pages/Welcome";
import MemberSign from "./src/pages/MemberSign";
import MemberResult from "./src/pages/MemberResult";



const Stack = createStackNavigator();

export const Navigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen
                name="WelcomeScreen"
                component={Welcome}
            />

            <Stack.Screen
                name="MemberSignScreen"
                component={MemberSign}
            />

            <Stack.Screen
                name="MemberResultScreen"
                component={MemberResult}
            />

        </Stack.Navigator>
    )
}