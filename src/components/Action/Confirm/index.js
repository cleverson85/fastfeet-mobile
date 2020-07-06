/* eslint-disable react/jsx-no-bind */
import React, { useEffect } from 'react';
import { View, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Camera from '../../Camera/index';
import HeaderDetail from '~/components/HeaderDetail';
import Button from '../../Button/index';
import {
  SendSignatureRequest,
  SendDeliveryEnd,
} from '~/store/modules/app/actions';

import { Container } from './styles';
import { Background } from '../styles';

function Confirm({ route, navigation }) {
  const dispatch = useDispatch();
  const { detail } = route.params;
  const { payload } = useSelector((state) => state.app);

  const handleSignature = () => {
    dispatch(SendSignatureRequest(null, null, false));
  };

  useEffect(() => {
    handleSignature();
  }, []);

  const handleSubmit = () => {
    dispatch(SendDeliveryEnd(payload));
    dispatch(SendSignatureRequest(null, null, false));

    navigation.navigate('Root', {
      screen: 'Entregas',
      params: {
        screen: 'Main',
      },
    });
  };

  const confirm = () => {
    Alert.alert(
      '',
      'Confirma entrega da encomenda?',
      [
        {
          text: 'Cancelar',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Confirmar',
          onPress: () => {
            handleSubmit();
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <Background>
      <HeaderDetail title="Confirmar entrega" />
      <View style={{ alignItems: 'center' }}>
        <Container>
          <Camera detail={detail} />
          {payload?.foto ? (
            <Button
              style={{
                backgroundColor: '#7D40E7',
                width: '100%',
                marginTop: 10,
              }}
              onPress={() => {
                confirm();
              }}
            >
              Enviar
            </Button>
          ) : null}
        </Container>
      </View>
    </Background>
  );
}

export default Confirm;
