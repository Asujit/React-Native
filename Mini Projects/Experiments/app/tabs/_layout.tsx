import { Tabs } from "expo-router";

export default function _layout(){
    return(
        <Tabs>
            <Tabs.Screen name="Home" />
            <Tabs.Screen name="Cache" />
        </Tabs>
    )
}