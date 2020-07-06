import React, { useState, useEffect } from 'react';
import { useNavigation, AppRegistry } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Avatar } from 'react-native-elements';
import { useDispatch } from 'react-redux';

import { SendSignatureRequest } from '~/store/modules/app/actions';

import { Container, Left, Info, Label, Name } from './styles';

const Header = (props) => {
  const [deliveryMan, setData] = useState();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleLogOut = () => {
    dispatch(SendSignatureRequest(null));
    navigation.navigate('Login', { id: null });
  };

  useEffect(() => {
    setData(props.deliveryMan);
  }, [props]);

  return (
    <Container>
      <Left>
        <Avatar
          rounded
          title={deliveryMan?.name.substring(0, 1)}
          size="medium"
          source={{
            uri:
              deliveryMan?.avatar.url ||
              'https://api.adorable.io/avatars/145/abott@adorable.png',
          }}
        />
        <Info>
          <Label>Bem vindo de volta,</Label>
          <Name>{deliveryMan?.name}</Name>
        </Info>
      </Left>

      <TouchableOpacity
        onPress={() => {
          handleLogOut();
        }}
      >
        <Icon name="exit-to-app" size={30} color="#E74040" />
      </TouchableOpacity>
    </Container>
  );
};

export default Header;
