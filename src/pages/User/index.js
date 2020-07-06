import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import util from '~/util/index';
import Button from '~/components/Button';
import { SendSignatureRequest } from '~/store/modules/app/actions';

import { Avatar, Container, Info, Label, Name } from './styles';

const User = ({ route, navigation }) => {
  const deliveryMan = useSelector((state) => state.auth.payload);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(SendSignatureRequest(null));
    navigation.navigate('Login', { id: null });
  };

  return (
    <Container>
      <Avatar
        source={{
          uri:
            // deliveryMan?.avatar.url ||
            'https://api.adorable.io/avatars/145/abott@adorable.png',
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
