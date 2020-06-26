import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  margin-bottom: 10px;
  padding: 5px 5px;
  background-color: #eee;
  border-radius: 4px;
`;

export const Header = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const Title = styled.Text`
  color: #7d40e7;
  font-size: 14px;
  font-family: 'Roboto-Bold';
`;

export const InfoDetail = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const Data = styled.View``;

export const Label = styled.Text`
  color: #999;
  font-size: 12px;
  font-family: 'Roboto-Bold';
`;

export const DataInfo = styled.Text`
  color: #444;
  font-size: 14px;
  font-family: 'Roboto-Bold';
`;

export const Details = styled.Text`
  font-size: 14px;
  font-family: 'Roboto-Bold';
  color: #7d40e7;
`;
