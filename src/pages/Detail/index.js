import React from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import InfoDetail from '~/components/InfoDetail';
import { Container, Title, Header, Center } from './styles';

function Detail({ route, navigation }) {
  const { detail } = route.params;

  const handlerReturn = () => {
    navigation.goBack();
  };

  return (
    <>
      <StatusBar barStyle="dark-light" backgroundColor="#7d40e7" />
      <Center>
        <TouchableOpacity
          onPress={() => {
            handlerReturn();
          }}
        >
          <Icon name="keyboard-arrow-left" size={30} color="#fff" />
        </TouchableOpacity>
        <Header>
          <Title>Detalhes da encomenda</Title>
        </Header>
      </Center>
      <Container>
        <InfoDetail data={detail} />
      </Container>
    </>
  );
}

export default Detail;
