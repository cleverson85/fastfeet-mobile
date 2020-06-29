import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import util from '~/util/index';
import api from '~/services/api';
import HeaderDetail from '~/components/HeaderDetail';
import { Container } from '../../InfoDetail/styles';
import { Background } from '../styles';
import { List, Label, Row } from './styles';

function Display({ route, navigation }) {
  const [issues, setIssues] = useState([]);
  const { detail } = route.params;

  useEffect(() => {
    async function handleIssues() {
      const response = await api.get(`/deliveryissues/${detail?.id}/issues`);
      setIssues(response?.data);
    }

    handleIssues();
  }, [setIssues, detail]);

  function Item({ itens }) {
    return (
      <Row>
        <Label style={{ width: 195 }}>{itens.description}</Label>
        <Label style={{ fontSize: 12 }}>
          {util.FormatDate(itens.created_at)}
        </Label>
      </Row>
    );
  }

  return (
    <Background>
      <HeaderDetail title="Visualizar problemas" />
      <View style={{ alignItems: 'center' }}>
        <Container>
          <List
            data={issues}
            keyExtractor={({ item }) => item?.id}
            renderItem={({ item }) => <Item itens={item} />}
          />
        </Container>
      </View>
    </Background>
  );
}

export default Display;
