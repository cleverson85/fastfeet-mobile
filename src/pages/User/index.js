import React from 'react';

import Button from '~/components/Button';

import { Container, Avatar, Info, Label, Name } from './styles';

const User = ({ data }) => {
  return (
    <Container>
      <Avatar
        source={{
          uri: 'https://api.adorable.io/avatars/149/abott@adorable.png',
        }}
      />
      <Info>
        <Label>Nome completo</Label>
        <Name>Cleverson queiroz</Name>
        <Label>Email</Label>
        <Name>cleverson85@gmail.com</Name>
        <Label>Data de cadastro</Label>
        <Name>02/03/1985</Name>
      </Info>
      <Button style={{ backgroundColor: '#E74040' }} onPress={() => {}}>
        Logout
      </Button>
    </Container>
  );
};

export default User;
