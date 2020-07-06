import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import util from '~/util/index';

import { Label, Details, Data, DataInfo, Detail } from './styles';

function Info({ data }) {
  const navigation = useNavigation();

  const handleDetail = () => {
    navigation.navigate('Root', {
      screen: 'Entregas',
      params: {
        screen: 'Detail',
        params: { detail: data },
      },
    });
  };

  return (
    <Details>
      <Data>
        <Label>Data</Label>
        <DataInfo>{util.FormatDate(data.created_at)}</DataInfo>
      </Data>
      <Data>
        <Label>Cidade</Label>
        <DataInfo>{data.recipient.cidade}</DataInfo>
      </Data>
      <RectButton>
        <Detail
          onPress={() => {
            handleDetail();
          }}
        >
          Ver Detalhes
        </Detail>
      </RectButton>
    </Details>
  );
}

export default Info;
