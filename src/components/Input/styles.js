import styled from 'styled-components/native';

export const Container = styled.View`
  width: 325px;
  height: 45px;
  padding: 0 10px;
  margin-top: 60px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px #ddd;
  background: #fff;
`;

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  font: 16px 'Roboto-Regular';
  color: #999;
`;
