import React from 'react';
import { View } from 'react-native';

import HeaderDetail from '~/components/HeaderDetail';
import Button from '../../Button/index';
import { Container } from '../../InfoDetail/styles';
import { Background } from '../styles';

function Confirm() {
  return (
    <Background>
      <HeaderDetail title="Confimar entrega" />
      <View style={{ alignItems: 'center' }}>
        <Container>
          <Button
            style={{ backgroundColor: '#7D40E7', width: '100%' }}
            onPress={() => {}}
          >
            Enviar
          </Button>
        </Container>
      </View>
    </Background>
  );
}

export default Confirm;
