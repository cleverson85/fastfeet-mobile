import React from 'react';
import { useSelector } from 'react-redux';

import util from '~/util/index';
import { logOutRequest } from '~/store/modules/auth/actions';
import Button from '~/components/Button';
import { Container, Avatar, Info, Label, Name } from './styles';

const User = ({ route, navigation }) => {
  const deliveryMan = useSelector((state) => state.auth.payload);

  const handleLogOut = () => {
    navigation.navigate('Login', { id: null });
  };

  return (
    <Container>
      <Avatar
        source={{
          uri: 'https://api.adorable.io/avatars/149/abott@adorable.png',
        }}
      />
      <Info>
        <Label>Nome completo</Label>
        <Name>{deliveryMan.name}</Name>
        <Label>Email</Label>
        <Name>{deliveryMan.email}</Name>
        <Label>Data de cadastro</Label>
        <Name>{util.FormatDate(deliveryMan.created_at)}</Name>
      </Info>
      <Button
        style={{ backgroundColor: '#E74040' }}
        onPress={() => {
          handleLogOut();
        }}
      >
        Logout
      </Button>
    </Container>
  );
};

export default User;
