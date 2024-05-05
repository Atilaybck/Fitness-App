import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./screens/Home";
import { Edit } from "./screens/Edit";
import { Profile } from "./screens/Profile";
import Welcome from "./src/pages/Welcome";
import MemberSign from "./src/pages/MemberSign";



const Stack = createStackNavigator();

export const Navigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="WelcomeScreen"
                component={Welcome}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="MemberSignScreen"
                component={MemberSign}
            />

        </Stack.Navigator>
    )
}