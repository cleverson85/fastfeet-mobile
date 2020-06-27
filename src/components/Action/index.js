/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import ButtonIcon from '../ButtonIcon/index';
import { Container } from './styles';

function Action(props) {
  const { data } = props;
  const navigation = useNavigation();

  const addProblem = () => {
    navigation.navigate('Root', {
      screen: 'Entregas',
      params: {
        screen: 'Erro',
        params: { detail: data },
      },
    });
  };

  const viewProblem = () => {
    navigation.navigate('Root', {
      screen: 'Entregas',
      params: {
        screen: 'Display',
        params: { detail: data },
      },
    });
  };

  const confirmDelivery = () => {
    navigation.navigate('Root', {
      screen: 'Entregas',
      params: {
        screen: 'Confirm',
        params: { detail: data },
      },
    });
  };

  return (
    <Container>
      <ButtonIcon
        iconName="cancel"
        iconColor="#E74040"
        title="Informar Problema"
        func={addProblem.bind(this)}
      />
      <ButtonIcon
        iconName="info"
        iconColor="#E7BA40"
        title="Visualizar Problemas"
        func={viewProblem.bind(this)}
      />
      <ButtonIcon
        iconName="check-circle"
        iconColor="#7D40E7"
        title="Confirmar Entrega"
        func={confirmDelivery.bind(this)}
      />
    </Container>
  );
}

export default Action;
