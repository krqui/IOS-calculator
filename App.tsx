import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import CalculatorScreen from './src/screens/CalculatorScreen'
import { styles } from './src/theme/appTheme';
const App = () => {
  // I must use SafeAreaView so that it does not collide with the upper part (the Notch) in the case of Iphones.
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar
        backgroundColor='black'
        barStyle='light-content'></StatusBar>
      <CalculatorScreen />
    </SafeAreaView>
  )
}

export default App
