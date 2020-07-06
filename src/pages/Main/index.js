import React, { useEffect, useState } from 'react';
import { StatusBar, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import api from '~/services/api';
import { SendErrorSuccess } from '~/store/modules/app/actions';
import Header from '~/components/Header';
import Menu from '~/components/Menu';
import Order from '~/components/Order';

import { Container, List } from './styles';

const Main = ({ route, navigation }) => {
  const [orders, setOrders] = useState([]);
  const dispatch = useDispatch();
  const deliveryMan = useSelector((state) => state.auth.payload);
  const { payload } = useSelector((state) => state.app);

  async function handleUser(status) {
    const response = await api.get(
      `/deliveryman/${deliveryMan.id}/deliveries?status=${status}`
    );

    setOrders(response.data);
  }

  useEffect(() => {
    handleUser('P');

    if (payload?.message) {
      Alert.alert(payload?.message);
      dispatch(SendErrorSuccess({ message: null }));
    }
  }, [payload]);

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
