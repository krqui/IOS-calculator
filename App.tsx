import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import CalculadoraScreen from './src/screens/CalculadoraScreen'
import { styles } from './src/theme/appTheme';
const App = () => {
  // Debo usar SafeAreaView para que no choque con la parte de arriba (el Notch) en caso de Iphones.
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar
        backgroundColor='black'
        barStyle='light-content'></StatusBar>
      <CalculadoraScreen />
    </SafeAreaView>
  )
}

export default App
