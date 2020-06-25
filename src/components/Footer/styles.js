import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 80px;
  background-color: #fff;
`;

export const Button = styled.View`
  align-items: center;
  justify-content: center;
`;

export const IconButton = styled(Icon).attrs((props) => ({
  pressed: props.pressed,
  color: props.color,
}))`
  ${(props) =>
    props.pressed &&
    css`
      color: #7d40e7;
    `}
`;

export const Label = styled.Text.attrs((props) => ({
  pressed: props.pressed,
  color: props.color,
}))`
  font-size: 14px;
  font-family: 'Roboto-Regular';
  color: ${(props) => props.color};

  ${(props) =>
    props.pressed &&
    css`
      color: #7d40e7;
    `}
`;
