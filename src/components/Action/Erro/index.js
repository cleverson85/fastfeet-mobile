import React from 'react';
import { View } from 'react-native';

import HeaderDetail from '~/components/HeaderDetail';
import Button from '../../Button/index';
import { Container } from '../../InfoDetail/styles';
import { Background } from '../styles';

function Erro() {
  const handleSubmit = () => {};

  return (
    <Background>
      <HeaderDetail title="Informar problema" />
      <View style={{ alignItems: 'center' }}>
        <Container>
          <Button
            style={{ backgroundColor: '#7D40E7', width: '100%' }}
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

export default Erro;
