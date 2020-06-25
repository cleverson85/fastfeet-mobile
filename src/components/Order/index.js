import React, { useEffect, useState } from 'react';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { parseISO } from 'date-fns';
import format from 'date-fns/format';
import pt from 'date-fns/locale/pt';

import Steps from '../Steps';

import {
  Container,
  Title,
  Label,
  Info,
  Data,
  DataInfo,
  Header,
  Details,
} from './styles';

const Order = ({ data }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(index + 1);
  }, [index]);

  return (
    <Container>
      <Header>
        <Icon
          name="local-shipping"
          size={24}
          color="#7D40E7"
          style={{ marginRight: 5 }}
        />
        <Title>Encomenda {index}</Title>
      </Header>
      <Steps data={data} />
      <Info>
        <Data>
          <Label>Data</Label>
          <DataInfo>{format(parseISO(data.created_at), 'dd/MM/yyyy')}</DataInfo>
        </Data>
        <Data>
          <Label>Cidade</Label>
          <DataInfo>{data.recipient.cidade}</DataInfo>
        </Data>
        <RectButton>
          <Details>Ver Detalhes</Details>
        </RectButton>
      </Info>
    </Container>
  );
};

export default Order;
