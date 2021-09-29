import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationContainer } from '@react-native-gesture-handler';
import './style.css';

import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Imagebackground,
  Pressable,
  onPressFunction,
  Component,
} from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
    <div>
      <h1>Vendy</h1>
      <p>Send money via social media:)</p>
    </div>
    </NavigationContainer>
  );
}
