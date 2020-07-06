import React from 'react';
import { StatusBar } from 'react-native';

import HeaderDetail from '~/components/HeaderDetail';
import InfoDetail from '~/components/InfoDetail';

import { Container } from './styles';

function Detail({ route, navigation }) {
  const { detail } = route.params;

  return (
    <>
      <StatusBar barStyle="dark-light" backgroundColor="#7d40e7" />
      <HeaderDetail title="Detalhes da encomenda" />
      <Container>
        <InfoDetail data={detail} />
      </Container>
    </>
  );
}

export default Detail;
