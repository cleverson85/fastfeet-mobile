import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useDispatch } from 'react-redux';
import { logOutRequest } from '~/store/modules/auth/actions';

import { Container, Left, Info, Label, Name, Avatar } from './styles';

const Header = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { info } = props;

  const handlerLogOut = () => {
    dispatch(logOutRequest());
    navigation.navigate('Login');
  };

  return (
    <Container>
      <Left>
        <Avatar
          source={{
            uri: 'https://api.adorable.io/avatars/145/abott@adorable.png',
          }}
        />
        <Info>
          <Label>Bem vindo de volta,</Label>
          <Name>{info?.name}</Name>
        </Info>
      </Left>

      <TouchableOpacity
        onPress={() => {
          handlerLogOut();
        }}
      >
        <Icon name="exit-to-app" size={30} color="#E74040" />
      </TouchableOpacity>
    </Container>
  );
};

export default Header;
