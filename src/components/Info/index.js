import React, { useEffect, useState } from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import util from '~/util/index';

import { Label, InfoDetail, Data, DataInfo, Details } from './styles';

function Info({ data }) {
  const navigation = useNavigation();

  const handleDetail = () => {
    navigation.navigate('Detail', {
      detail: data,
    });
  };

  return (
    <InfoDetail>
      <Data>
        <Label>Data</Label>
        <DataInfo>{util.FormatDate(data.created_at)}</DataInfo>
      </Data>
      <Data>
        <Label>Cidade</Label>
        <DataInfo>{data.recipient.cidade}</DataInfo>
      </Data>
      <RectButton>
        <Details
          onPress={() => {
            handleDetail();
          }}
        >
          Ver Detalhes
        </Details>
      </RectButton>
    </InfoDetail>
  );
}

export default Info;
