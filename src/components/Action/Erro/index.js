import React, { useState } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';

import HeaderDetail from '~/components/HeaderDetail';
import Button from '../../Button/index';
import { Container } from '../../InfoDetail/styles';
import { Background } from '../styles';
import { Text } from './styles';

function Erro({ route, navigation }) {
  const [text, setText] = useState('');
  const { detail } = route.params;

  const handleSubmit = () => {
    fetch('http://192.168.0.6:5555/deliveryissues', {
      method: 'POST',
      body: JSON.stringify({ order_id: detail.id, description: text }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then((res) => res.json())
      .catch((error) =>
        Alert.alert('Aviso', 'Não foi possível enviar devido a um erro.')
      )
      .then((res) => Alert.alert('Aviso', 'Problema enviado com sucesso.'))
      .then(() => navigation.goBack());
  };

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Background>
            <HeaderDetail title="Informar problema" />
            <View style={{ alignItems: 'center' }}>
              <Container>
                <View
                  style={{
                    borderColor: '#eee',
                    borderWidth: 1,
                    padding: 5,
                    height: '89%',
                    borderRadius: 4,
                  }}
                >
                  <Text
                    underlineColorAndroid="transparent"
                    placeholder="Inclua aqui o problema que ocorreu na entrega. Clique novamente para enviar."
                    placeholderTextColor="grey"
                    numberOfLines={10}
                    multiline
                    returnKeyType="send"
                    value={text}
                    onChangeText={(t) => setText(t)}
                    onSubmitEditing={handleSubmit}
                  />
                </View>
                <Button
                  style={{ backgroundColor: '#7D40E7', width: '100%' }}
                  onPress={() => handleSubmit()}
                >
                  Enviar
                </Button>
              </Container>
            </View>
          </Background>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}

export default Erro;
