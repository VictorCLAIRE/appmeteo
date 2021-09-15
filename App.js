import React from 'react';
import Search from "./components/Search";
import {Text, View} from "react-native";
import { TabNavigator } from "react-navigation"

const Tabs = TabNavigator({
    Search : { screen : Search},
    About : { screen: About}
})

export default function App() {
  return (
      <Tabs/>
  );
}
