import React, { useState, useRef } from 'react'
import { Text, View } from 'react-native'
import ButtonCalc from '../components/ButtonCalc'
import { styles } from '../theme/appTheme'
import useCalculadora from '../hooks/useCalculadora';


const CalculadoraScreen = () => {
  const {
    previousNumber,
    numero,
    limpiar,
    positionNegativo,
    btnDelete,
    btnDividir,
    armarNumero,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular
  } = useCalculadora();
  return (
    <View style={styles.calculadoraContainer}>
      <View>
        <Text style={{ color: "white", fontSize: 24 }}>This is a simple IOS calculator adapted to android devices using React Native.</Text>
      </View>
      {
        (previousNumber !== '0') && (
          <Text style={styles.smallResult}>{previousNumber}</Text>
        )
      }
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>{numero}</Text>
      <View style={styles.row}>
        <ButtonCalc texto="C" color='#9B9B9B' accion={limpiar}></ButtonCalc>
        <ButtonCalc texto="+/-" color='#9B9B9B' accion={positionNegativo}></ButtonCalc>
        <ButtonCalc texto="del" color='#9B9B9B' accion={btnDelete}></ButtonCalc>
        <ButtonCalc texto="/" color='#FF9427' accion={btnDividir}></ButtonCalc>{/*color anaranjado */}
      </View>
      <View style={styles.row}>
        <ButtonCalc texto="7" accion={armarNumero}></ButtonCalc>
        <ButtonCalc texto="8" accion={armarNumero}></ButtonCalc>
        <ButtonCalc texto="9" accion={armarNumero}></ButtonCalc>
        <ButtonCalc texto="X" color='#FF9427' accion={btnMultiplicar}></ButtonCalc>{/*color anaranjado */}
      </View>
      <View style={styles.row}>
        <ButtonCalc texto="4" accion={armarNumero}></ButtonCalc>
        <ButtonCalc texto="5" accion={armarNumero}></ButtonCalc>
        <ButtonCalc texto="6" accion={armarNumero}></ButtonCalc>
        <ButtonCalc texto="-" color='#FF9427' accion={btnRestar}></ButtonCalc>{/*color anaranjado */}
      </View>
      <View style={styles.row}>
        <ButtonCalc texto="1" accion={armarNumero}></ButtonCalc>
        <ButtonCalc texto="2" accion={armarNumero}></ButtonCalc>
        <ButtonCalc texto="3" accion={armarNumero}></ButtonCalc>
        <ButtonCalc texto="+" color='#FF9427' accion={btnSumar}></ButtonCalc>{/*color anaranjado */}
      </View>
      <View style={styles.row}>
        <ButtonCalc texto="0" ancho={true} accion={armarNumero}></ButtonCalc>
        <ButtonCalc texto="." accion={armarNumero}></ButtonCalc>
        <ButtonCalc texto="=" color='#FF9427' accion={calcular}></ButtonCalc>{/*color anaranjado */}
      </View>
    </View>
  )
}
// color anaranjado es: #FF9427
// backgroundColor:'#2D2D2D'
// color:'white',
export default CalculadoraScreen
