import React, { useState, useEffect } from 'react';
import {
  StatusBar,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import { useDispatch } from 'react-redux';

import { loginRequest } from '~/store/modules/auth/actions';
import api from '~/services/api';
import Input from '~/components/Input';
import Button from '~/components/Button';
import logo from '~/assets/logo.png';

import { Container } from './styles';

const Login = ({ navigation, route }) => {
  const [id, setId] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    setId(route.params?.id);
  }, [route.params]);

  const handleSubmit = async () => {
    if (typeof id === 'undefined') {
      Alert.alert('Erro', 'ID de cadastro deve ser informado.');
      return;
    }

    const response = await api.get(`/deliveryman/${id}`);
    const { data } = response;

    if (data?.status === 401 || !data) {
      Alert.alert('Erro', 'Usuário não encontrado.');
      return;
    }

    dispatch(loginRequest(data));

    navigation.navigate('Root', {
      screen: 'Main',
    });
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7d40e7" />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Image source={logo} />

            <Input
              name="id"
              keyboardType="numeric"
              placeholder="Informe seu ID de cadastro"
              returnKeyType="send"
              value={id}
              onChangeText={(text) => setId(text)}
              onSubmitEditing={handleSubmit}
            />
            <Button
              style={{ backgroundColor: '#82bf18' }}
              onPress={() => {
                handleSubmit();
              }}
            >
              Entrar no sistema
            </Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Login;
