import { NavigationContainer } from '@react-navigation/native';
import Home from './screen/home';
import SignIn from './screen/SignIn'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from './screen/LogIn';
import ForgotPassword from './screen/ForgotPassword';
import Welcome from './screen/Welcome';
import FitnessHome from './screen/FitnessHome';
import Fitness from './screen/Fitness';

const Stack = createNativeStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='home' component={Home} options={{ headerShown: false }} />
        <Stack.Screen
          name='signIn'
          component={SignIn}
          options={{
            title: "S'inscrire",
            headerTitleAlign: 'center',
            headerTitleStyle:{
              color: 'white'
            },
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: "#4472C4",
            }
          }} />
          <Stack.Screen
          name='logIn'
          component={LogIn}
          options={{
            title: "Connexion",
            headerTitleAlign: 'center',
            headerTitleStyle:{
              color: 'white'
            },
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: "#4472C4",
            }
          }} />
          <Stack.Screen
          name='forgotPassword'
          component={ForgotPassword}
          options={{
            title: "Mots de passe oublié",
            headerTitleAlign: 'center',
            headerTitleStyle:{
              color: 'white'
            },
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: "#4472C4",
            }
          }} />
          <Stack.Screen name='welcome' component={Welcome} options={{ headerShown: false }} />
          <Stack.Screen name='fitnessHome' component={FitnessHome} options={{ headerShown: false }} />
          <Stack.Screen name='fitness' component={Fitness}/>
      </Stack.Navigator>
    </NavigationContainer> 
  )

}
