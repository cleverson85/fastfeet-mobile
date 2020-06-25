import React, { useRef, useState, useEffect } from 'react';
import {
  StatusBar,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { useNavigation } from '@react-navigation/native';

import { loginRequest } from '~/store/modules/auth/actions';

import api from '~/services/api';

import Input from '~/components/Input';
import Button from '~/components/Button';
import logo from '~/assets/logo.png';

import { Container } from './styles';

const Login = (props) => {
  const [id, setId] = useState(0);
  const idRef = useRef();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const idState = useSelector((state) => state.auth.id);

  useEffect(() => {
    setId(idState);
  }, [idState]);

  const handleSubmit = async () => {
    setId(id === '' ? 0 : id);
    const response = await api.get(`/deliveryman/${id}/deliveries`);
    const { data } = response;

    if (data.status === 401) {
      Alert.alert('Erro', 'Usuário não encontrado.');
      return;
    }

    dispatch(loginRequest(id));

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
              ref={idRef}
              value={id}
              onChangeText={setId}
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
