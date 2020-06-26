import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Steps from '../Steps';
import Info from '../Info';

import { Container, Title, Header } from './styles';

const Order = ({ data }) => {
  const [detail, setData] = useState(1);

  return (
    <Container>
      <Header>
        <Icon
          name="local-shipping"
          size={24}
          color="#7D40E7"
          style={{ marginRight: 5 }}
        />
        <Title>Encomenda 01</Title>
      </Header>
      <Steps data={data} />
      <Info data={data} />
    </Container>
  );
};

export default Order;
