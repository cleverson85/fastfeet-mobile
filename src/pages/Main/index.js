import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';

import api from '~/services/api';

import Header from '~/components/Header';
import Menu from '~/components/Menu';
import Order from '~/components/Order';

import { Container, List } from './styles';

const Main = ({ route, navigation }) => {
  const [orders, setOrders] = useState([]);
  const deliveryMan = useSelector((state) => state.auth.payload);

  async function handleUser(status) {
    const response = await api.get(
      `/deliveryman/${deliveryMan.id}/deliveries?status=${status}`
    );

    setOrders(response.data);
  }

  useEffect(() => {
    handleUser('P');
  }, []);

  return (
    <>
      <Container>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <Header deliveryMan={deliveryMan} />
        <Menu method={handleUser} />
        <List
          data={orders}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <Order data={item} />}
        />
      </Container>
    </>
  );
};

export default Main;
