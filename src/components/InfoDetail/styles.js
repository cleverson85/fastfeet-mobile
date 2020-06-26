import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: space-between;
  margin-top: 20px;
  padding: 10px;
  height: 500px;
  width: 90%;
  border-radius: 4px;
  background-color: #fff;
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

export const Data = styled.View`
  margin: 10px 0 5px 0;
`;

export const Label = styled.Text`
  color: #999;
  font-size: 14px;
  font-family: 'Roboto-Bold';
`;

export const DataInfo = styled.Text`
  color: #666;
  font-size: 14px;
  font-family: 'Roboto-Regular';
`;

export const Space = styled.View`
  margin: 15px;
`;
