import React from 'react';
import { Text } from 'react-native';

import { Container, Label, Rigth, Status } from './styles';

const Menu = () => {
  const focusedInput = () => {};

  const blurredInput = () => {};

  return (
    <Container>
      <Label>Entregas</Label>
      <Rigth>
        <Status onPress={() => {}}>
          <Text>Pendentes</Text>
        </Status>
        <Status onPress={() => {}}>
          <Text>Entregues</Text>
        </Status>
      </Rigth>
    </Container>
  );
};

export default Menu;
