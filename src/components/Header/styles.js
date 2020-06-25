import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const Left = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Info = styled.View`
  margin-left: 15px;
`;

export const Label = styled.Text`
  color: #666;
  font-size: 14px;
  font-family: 'Roboto-Regular';
`;

export const Name = styled.Text`
  color: #333;
  font-size: 20px;
  font-family: 'Roboto-Bold';
`;
