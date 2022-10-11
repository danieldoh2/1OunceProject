import React from "react";
import {
    View,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { Home, Login, Recipe } from "../screens"
import { COLORS, icons } from "../constants"

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
            />
            <Tab.Screen
                name="Recipe"
                component={Recipe}
            />
            <Tab.Screen
                name="Account"
                component={Login}
            />
        </Tab.Navigator>
    )
}

export default Tabs;