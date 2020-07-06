import React, { useState } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { useDispatch } from 'react-redux';

import HeaderDetail from '~/components/HeaderDetail';
import Button from '../../Button/index';
import { SendErrorRequest } from '~/store/modules/app/actions';

import { Container } from '../../InfoDetail/styles';
import { Background } from '../styles';
import { Text } from './styles';

function Erro({ route, navigation }) {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const { detail } = route.params;

  const handleSubmit = () => {
    if (text === '') {
      Alert.alert('Nenhuma descrição de problema foi informado.');
      return;
    }

    if (text.length < 20) {
      Alert.alert('A descrição do problema deve ter mais de 20 caracteres.');
      return;
    }

    dispatch(SendErrorRequest({ order_id: detail.id, description: text }));
    navigation.goBack();
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
