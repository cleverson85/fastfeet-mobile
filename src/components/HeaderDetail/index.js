import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

import { Title, Header, Center } from './styles';

function HeaderDetail(props) {
  const { title } = props;
  const navigation = useNavigation();

  const handlerReturn = () => {
    navigation.goBack();
  };

  return (
    <Center>
      <TouchableOpacity
        onPress={() => {
          handlerReturn();
        }}
      >
        <Icon name="keyboard-arrow-left" size={30} color="#fff" />
      </TouchableOpacity>
      <Header>
        <Title>{title}</Title>
      </Header>
    </Center>
  );
}

export default HeaderDetail;
