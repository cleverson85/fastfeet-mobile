import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import util from '~/util/index';
import Action from '~/components/Action';

import {
  Container,
  Header,
  Title,
  Data,
  Label,
  DataInfo,
  Space,
} from './styles';

function InfoDetail(props) {
  const { data } = props;
  const { recipient } = data;

  return (
    <Container>
      <View>
        <Header>
          <Icon
            name="local-shipping"
            size={24}
            color="#7D40E7"
            style={{ marginRight: 5 }}
          />
          <Title>Informações da entrega</Title>
        </Header>
        <Data>
          <Label>DESTINATÁRIO</Label>
          <DataInfo>{recipient.nome}</DataInfo>
        </Data>
        <Data>
          <Label>ENDEREÇO DE ENTREGA</Label>
          <DataInfo>
            Rua {recipient.rua}, {recipient.numero}, {recipient.cidade} -{' '}
            {recipient.estado}, {util.CepMask(String(recipient.cep))}
          </DataInfo>
        </Data>
        <Data>
          <Label>PRODUTO</Label>
          <DataInfo>{data.product}</DataInfo>
        </Data>
        <Space />
        <Header>
          <Icon
            name="event"
            size={24}
            color="#7D40E7"
            style={{ marginRight: 5 }}
          />
          <Title>Situação da entrega</Title>
        </Header>
        <Data>
          <Label>STATUS</Label>
          <DataInfo>{util.GetStatus(data)}</DataInfo>
        </Data>
        <Header style={{ justifyContent: 'space-between' }}>
          <Data>
            <Label>DATA DE RETIRADA</Label>
            <DataInfo>
              {data.start_date
                ? util.FormatDate(data.start_date)
                : '-- / -- / ----'}
            </DataInfo>
          </Data>
          <Data>
            <Label>DATA DE ENTREGA</Label>
            <DataInfo>
              {data.end_date
                ? util.FormatDate(data.end_date)
                : '-- / -- / ----'}
            </DataInfo>
          </Data>
        </Header>
      </View>
      <View>
        <Action data={data} />
      </View>
    </Container>
  );
}

export default InfoDetail;
