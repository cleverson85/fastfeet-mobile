import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Container, Label, Rigth, Status, Item } from './styles';

const styles = StyleSheet.create({
  button: {
    color: '#999',
    fontSize: 15,
    fontFamily: 'Roboto-Bold',
  },
  buttonPress: {
    color: '#7d40e7',
    fontSize: 15,
    fontFamily: 'Roboto-Bold',
    textDecorationLine: 'underline',
  },
});

const Menu = (props) => {
  const [pressA, setPressA] = useState(true);
  const [pressB, setPressB] = useState(false);

  const blurInput = (tipo) => {
    if (tipo === 'A') {
      setPressB(false);
    } else {
      setPressA(false);
    }
  };

  const focusInput = (tipo) => {
    if (tipo === 'A') {
      setPressA(true);
    } else {
      setPressB(true);
    }

    blurInput(tipo);
  };

  return (
    <Container>
      <Label>Entregas</Label>
      <Rigth>
        <Item>
          <TouchableOpacity
            onPress={() => {
              props.method('P');
              focusInput('A');
            }}
          >
            <Status style={pressA ? styles.buttonPress : styles.button}>
              Pendentes
            </Status>
          </TouchableOpacity>
        </Item>
        <Item>
          <TouchableOpacity
            onPress={() => {
              props.method('E');
              focusInput('B');
            }}
          >
            <Status style={pressB ? styles.buttonPress : styles.button}>
              Entregues
            </Status>
          </TouchableOpacity>
        </Item>
      </Rigth>
    </Container>
  );
};

export default Menu;
