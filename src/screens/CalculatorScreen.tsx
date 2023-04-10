import React from 'react'
import { Text, View } from 'react-native'
import ButtonCalc from '../components/ButtonCalc'
import { styles } from '../theme/appTheme'
import useCalculator from '../hooks/useCalculator';


const CalculatorScreen = () => {
  const {
    previousNumber,
    number,
    clean,
    positionNegative,
    btnDelete,
    btnDivide,
    buildNumber,
    btnMultiply,
    btnSubstract,
    btnAddition,
    calculate
  } = useCalculator();
  return (
    <View style={styles.calculatorContainer}>
      {
        (number === "0" && previousNumber ==="0")  && (
          <View>
            <Text style={{ color: "white", fontSize: 24 }}>This is a simple IOS calculator adapted to android devices using React Native.</Text>
          </View>
        )
      }
      {
        (previousNumber !== '0') && (
          <Text style={styles.smallResult}>{previousNumber}</Text>
        )
      }
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>{number}</Text>
      <View style={styles.row}>
        <ButtonCalc text="C" color='#9B9B9B' action={clean}></ButtonCalc>
        <ButtonCalc text="+/-" color='#9B9B9B' action={positionNegative}></ButtonCalc>
        <ButtonCalc text="del" color='#9B9B9B' action={btnDelete}></ButtonCalc>
        <ButtonCalc text="/" color='#FF9427' action={btnDivide}></ButtonCalc>{/*color anaranjado */}
      </View>
      <View style={styles.row}>
        <ButtonCalc text="7" action={buildNumber}></ButtonCalc>
        <ButtonCalc text="8" action={buildNumber}></ButtonCalc>
        <ButtonCalc text="9" action={buildNumber}></ButtonCalc>
        <ButtonCalc text="X" color='#FF9427' action={btnMultiply}></ButtonCalc>{/*color anaranjado */}
      </View>
      <View style={styles.row}>
        <ButtonCalc text="4" action={buildNumber}></ButtonCalc>
        <ButtonCalc text="5" action={buildNumber}></ButtonCalc>
        <ButtonCalc text="6" action={buildNumber}></ButtonCalc>
        <ButtonCalc text="-" color='#FF9427' action={btnSubstract}></ButtonCalc>{/*color orange */}
      </View>
      <View style={styles.row}>
        <ButtonCalc text="1" action={buildNumber}></ButtonCalc>
        <ButtonCalc text="2" action={buildNumber}></ButtonCalc>
        <ButtonCalc text="3" action={buildNumber}></ButtonCalc>
        <ButtonCalc text="+" color='#FF9427' action={btnAddition}></ButtonCalc>{/*color orange */}
      </View>
      <View style={styles.row}>
        <ButtonCalc text="0" ancho={true} action={buildNumber}></ButtonCalc>
        <ButtonCalc text="." action={buildNumber}></ButtonCalc>
        <ButtonCalc text="=" color='#FF9427' action={calculate}></ButtonCalc>{/*color orange */}
      </View>
    </View>
  )
}
// orange color is: #FF9427
// backgroundColor:'#2D2D2D'
// color:'white',
export default CalculatorScreen
