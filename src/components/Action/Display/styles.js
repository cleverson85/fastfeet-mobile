import styled from 'styled-components/native';

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingLeft: 0, paddingRight: 0 },
})``;

export const Label = styled.Text`
  color: #999;
  font-size: 16px;
  font-family: 'Roboto-Regular';
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  margin: 5px 0px;
`;
