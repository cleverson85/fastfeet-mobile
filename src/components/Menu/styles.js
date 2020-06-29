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

export const Item = styled.View`
  margin: 5px;
`;

export const Status = styled.Text`
  color: #999;
  font-size: 15px;
  font-family: 'Roboto-Bold';
`;
