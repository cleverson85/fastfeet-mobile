import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements';

const ButtonIcon = (props) => {
  const { iconName, iconColor, title, func } = props;
  return (
    <TouchableOpacity onPress={func}>
      <Button
        icon={{
          name: iconName,
          size: 30,
          color: iconColor,
        }}
        type="clear"
        buttonStyle={{
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          width: 100,
        }}
        title={title}
        titleStyle={{
          fontFamily: 'Roboto-Regular',
          fontSize: 12,
          color: '#999',
        }}
      />
    </TouchableOpacity>
  );
};

export default ButtonIcon;
