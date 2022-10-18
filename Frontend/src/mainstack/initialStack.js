import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Sign from '../screens/SingIn/singUp';
import LogIn from '../screens/SingIn/logIn';
import Welcome from '../screens/SingIn/index';

const stack = createNativeStackNavigator();

function InitialStack (){
    return(
        <stack.Navigator initialRouteName='Welcome' >
            <stack.Screen name='Welcome' component={Welcome} options={{headerShown:false}} />
            <stack.Screen name='Sign' component={Sign} options={{headerShown:false}} />
            <stack.Screen name='LogIn' component={LogIn}  options={{headerShown:false}}/>
        </stack.Navigator>
    )
}


export default InitialStack