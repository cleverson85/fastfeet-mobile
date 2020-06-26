import React from 'react';
import { TouchableOpacity, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Center, Header, Title } from './styles';

function Action(props) {
  const { data } = props;
  return (
    <Container>
      <Center>
        <Icon name="highlight-off" size={30} color="#E74040" />
        <Title>Informar Problema</Title>
      </Center>
      {/* <Center>
        <TouchableOpacity onPress={() => {}}>
          <Icon name="info" size={30} color="#E7BA40" />
          <Title>Visualizar Problemas</Title>
        </TouchableOpacity>
      </Center>
      <Center>
        <TouchableOpacity onPress={() => {}}>
          <Icon name="alarm-on" size={30} color="#7D40E7" />
          <Title>Confirmar Entrega</Title>
        </TouchableOpacity>
      </Center> */}
    </Container>
  );
}

export default Action;
