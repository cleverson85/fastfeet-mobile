import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 20px 0px;
`;

export const Label = styled.Text`
  color: #333;
  font-size: 22px;
  font-family: 'Roboto-Bold';
`;

export const Rigth = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Status = styled(RectButton)`
  margin: 5px;
  font-size: 15px;
  font-family: 'Roboto-Bold';
  color: #999;
  text-decoration: underline;

  &:focus {
    color: #7d40e7;
  }
`;
