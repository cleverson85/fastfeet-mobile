import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  align-items: center;
  justify-content: center;
  width: 325px;
  height: 45px;
  border-radius: 4px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
  font-family: 'Roboto-Bold';
`;
