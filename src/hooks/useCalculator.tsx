import React, { useState, useRef } from 'react'

enum Operators {
  add, substract, multiply, divide
}

const useCalculator = () => {
  const [previousNumber, setPreviousNumber] = useState('0');
  const [number, setNumber] = useState('0');

  const lastOperation = useRef<Operators>()
  const clean = () => {
    setNumber('0');
    setPreviousNumber('0');
  }

  const buildNumber = (numberInText: string) => {

    // Do not accept double point.
    if (number.includes('.') && numberInText === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      // Decimal point.
      if (numberInText === '.') {
        setNumber(number + numberInText)

        // Evaluate if it is another zero, and there is a point.
      } else if (numberInText === '0' && number.includes('.')) {
        setNumber(number + numberInText)

        // Evaluate if it is different from zero and does not have a point.
      } else if (numberInText !== '0' && !number.includes('.')) {
        setNumber(numberInText);

        // Avoid 0000.0
      } else if (numberInText === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + numberInText)
      }
    } else {
      setNumber(number + numberInText)
    }
  }

  const positionNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number)
    }
  }

  const btnDelete = () => {
    let negative = "";
    let numberTemp = number;
    if (number.includes('-')) {

      negative = '-';
      numberTemp = number.substring(1);
      //console.log(numberTemp);
      // The substring is used to eliminate the negative symbol in case it is before the number.
    }

    if (numberTemp.length > 1) {
      //console.log(numberTemp.slice(0,-1));
      setNumber(negative + numberTemp.slice(0, -1));
      // Used to delete the last digit of the number being entered.
    } else {
      setNumber('0')
    }
  }

  const changeNumberForPrevious = () => {
    if (number.endsWith('.')) {
      setPreviousNumber(number.slice(0, -1));
    } else {
      setPreviousNumber(number)
    }
    setNumber('0');
  }

  const btnDivide = () => {
    changeNumberForPrevious();
    lastOperation.current = Operators.divide;
  }
  const btnMultiply = () => {
    changeNumberForPrevious();
    lastOperation.current = Operators.multiply;
  }
  const btnSubstract = () => {
    changeNumberForPrevious();
    lastOperation.current = Operators.substract;
  }
  const btnAddition = () => {
    changeNumberForPrevious();
    lastOperation.current = Operators.add;
  }

  const calculate = () => {
    const num1 = Number(number);
    const num2 = Number(previousNumber);
    switch (lastOperation.current) {
      case Operators.add:
        setNumber(`${num1 + num2}`)
        break;

      case Operators.substract:
        setNumber(`${num2 - num1}`)
        break;

      case Operators.multiply:
        setNumber(`${num1 * num2}`)
        break;

      case Operators.divide:
        setNumber(`${num2 / num1}`)
        break;

      default:
        break;
    }
    setPreviousNumber('0');
  }
  return {
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
  }
}

export default useCalculator
