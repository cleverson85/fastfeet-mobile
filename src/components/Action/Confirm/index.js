import React from 'react';
import { View, Alert } from 'react-native';

import Camera from '../../Camera/index';
import HeaderDetail from '~/components/HeaderDetail';
import Button from '../../Button/index';
import { Container } from '../../InfoDetail/styles';
import { Background } from '../styles';

function Confirm({ route, navigation }) {
  const handleSubmit = () => {
    fetch('http://192.168.0.6:5555/deliveryEnd', {
      method: 'POST',
      body: JSON.stringify({}),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then((res) => res.json())
      .catch((error) =>
        Alert.alert('Aviso', 'Não foi possível enviar devido a um erro.')
      )
      .then((res) =>
        Alert.alert('Aviso', 'Confirmação de entraga confirmada com sucesso.')
      )
      .then(() => navigation.goBack());
  };

  return (
    <Background>
      <HeaderDetail title="Confimar entrega" />
      <View style={{ alignItems: 'center' }}>
        <Container>
          <Camera />
          <Button
            style={{ backgroundColor: '#7D40E7', width: '100%', marginTop: 10 }}
            onPress={() => {
              handleSubmit();
            }}
          >
            Enviar
          </Button>
        </Container>
      </View>
    </Background>
  );
}

export default Confirm;
