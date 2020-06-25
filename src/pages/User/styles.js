import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;

  background-color: #fff;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 75px;
  margin-top: 100px;
`;

export const Info = styled.View`
  margin: 100px 0px;
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
