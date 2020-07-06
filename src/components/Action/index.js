/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import ButtonIcon from '../ButtonIcon/index';

import { Container } from './styles';

function Action(props) {
  const navigation = useNavigation();
  const { data } = props;

  const handleAction = (screen) => {
    navigation.navigate('Root', {
      screen: 'Entregas',
      params: {
        screen,
        params: { detail: data },
      },
    });
  };

  return (
    <Container>
      <ButtonIcon
        disabled
        iconName="cancel"
        iconColor="#E74040"
        title="Informar Problema"
        method={
          !data.start_date || data.end_date
            ? null
            : handleAction.bind(this, 'Erro')
        }
      />
      <ButtonIcon
        iconName="info"
        iconColor="#E7BA40"
        title="Visualizar Problemas"
        method={handleAction.bind(this, 'Display')}
      />
      <ButtonIcon
        iconName="check-circle"
        iconColor="#7D40E7"
        title="Confirmar Entrega"
        method={
          !data.start_date || data.end_date
            ? null
            : handleAction.bind(this, 'Confirm')
        }
      />
    </Container>
  );
}

export default Action;
