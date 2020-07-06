import React, { useState, useEffect } from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import { Container, Button, IconButton, Label } from './styles';

const Footer = ({ data }) => {
  const [focus, setFocus] = useState(false);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    setPressed(false);
  }, []);

  const Focused = () => {
    setFocus(true);
    console.tron.log(pressed);
  };

  return (
    <Container
      style={{
        borderColor: '#00000026',
        borderTopWidth: 1,
        borderBottomWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
      }}
    >
      <TouchableWithoutFeedback onPress={() => Focused()}>
        <Button>
          <IconButton name="reorder" size={40} color="#999" pressed={focus} />
          <Label color="#999" pressed={focus}>
            Entregas
          </Label>
        </Button>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => Focused()}>
        <Button>
          <IconButton
            name="account-circle"
            size={40}
            color="#999"
            pressed={focus}
          />
          <Label color="#999" pressed={focus}>
            Meu Perfil
          </Label>
        </Button>
      </TouchableWithoutFeedback>
    </Container>
  );
};

export default Footer;
