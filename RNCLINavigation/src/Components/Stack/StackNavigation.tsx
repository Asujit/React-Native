import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import SS1 from './SS1';
import SS2 from './SS2';

export type StackParams ={
    Screen1 : undefined;
    Screen2 : {
        id : number,
        name : string
    }
}

const Stack = createStackNavigator<StackParams>();

export default function StackNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Screen1' component={SS1} options={{title:"Screen one is present"}}/>
        <Stack.Screen name='Screen2' component={SS2} options={({route}) => ({
            title : `Item ${route.params.id} & Name ${route.params.name}`
        })}/>

    </Stack.Navigator>
  )
}

