import React, { useState, useRef } from 'react'

enum Operators {
  sumar, restar, multiplicar, dividir
}

const useCalculadora = () => {
  const [previousNumber, setPreviousNumber] = useState('0');
  const [numero, setNumero] = useState('0');

  const ultimaOperacion = useRef<Operators>()
  const limpiar = () => {
    setNumero('0');
    setPreviousNumber('0');
  }

  const armarNumero = (numeroTexto: string) => {

    // No aceptar doble punto.
    if (numero.includes('.') && numeroTexto === '.') return;

    if (numero.startsWith('0') || numero.startsWith('-0')) {
      // Punto decimal
      if (numeroTexto === '.') {
        setNumero(numero + numeroTexto)

        // Evaluar si es otro cero, y hay un punto.
      } else if (numeroTexto === '0' && numero.includes('.')) {
        setNumero(numero + numeroTexto)

        // Evaluar si es diferente de cero y no tiene un punto.
      } else if (numeroTexto !== '0' && !numero.includes('.')) {
        setNumero(numeroTexto);

        // Evitar 0000.0
      } else if (numeroTexto === '0' && !numero.includes('.')) {
        setNumero(numero);
      } else {
        setNumero(numero + numeroTexto)
      }
    } else {
      setNumero(numero + numeroTexto)
    }
  }

  const positionNegativo = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero)
    }
  }

  const btnDelete = () => {
    let negativo = "";
    let numeroTemp = numero;
    if (numero.includes('-')) {

      negativo = '-';
      numeroTemp = numero.substring(1);
      //console.log(numeroTemp);
      // el substring sirve para eliminar el simbolo negativo en caso de que esté por delante del numero.
    }

    if (numeroTemp.length > 1) {
      //console.log(numeroTemp.slice(0,-1));
      setNumero(negativo + numeroTemp.slice(0, -1));
      // sirve para eliminar el ultimo digito del numero que se esta ingresando.
    } else {
      setNumero('0')
    }
  }

  const cambiarNumPorAnterior = () => {
    if (numero.endsWith('.')) {
      setPreviousNumber(numero.slice(0, -1));
    } else {
      setPreviousNumber(numero)
    }
    setNumero('0');
  }

  const btnDividir = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operators.dividir;
  }
  const btnMultiplicar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operators.multiplicar;
  }
  const btnRestar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operators.restar;
  }
  const btnSumar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operators.sumar;
  }

  const calcular = () => {
    const num1 = Number(numero);
    const num2 = Number(previousNumber);
    switch (ultimaOperacion.current) {
      case Operators.sumar:
        setNumero(`${num1 + num2}`)
        break;

      case Operators.restar:
        setNumero(`${num2 - num1}`)
        break;

      case Operators.multiplicar:
        setNumero(`${num1 * num2}`)
        break;

      case Operators.dividir:
        setNumero(`${num2 / num1}`)
        break;

      default:
        break;
    }
    setPreviousNumber('0');
  }
  return {
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
  }
}

export default useCalculadora
