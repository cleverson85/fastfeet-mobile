import React from 'react';
import StepIndicator from 'react-native-step-indicator';

import { Container } from './styles';

const labels = ['Aguardando Retirada', 'Retirada', 'Entregue'];
const customStyles = {
  stepIndicatorSize: 10,
  currentStepIndicatorSize: 10,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 2,
  stepStrokeCurrentColor: '#7D40E7',
  stepStrokeWidth: 2,
  stepStrokeFinishedColor: '#7D40E7',
  stepStrokeUnFinishedColor: '#7D40E7',
  separatorFinishedColor: '#7D40E7',
  separatorUnFinishedColor: '#7D40E7',
  stepIndicatorFinishedColor: '#7D40E7',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 0,
  currentStepIndicatorLabelFontSize: 0,
  stepIndicatorLabelCurrentColor: '#fff',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#444',
  labelColor: '#999',
  labelSize: 10,
  currentStepLabelColor: '#999',
  useNativeDriver: false,
};

const Steps = ({ data }) => {
  const getPosition = () => {
    let position = 1;

    if (data.start_date && !data.end_date) {
      position = 2;
    }

    if (data.start_date && data.end_date) {
      position = 3;
    }

    return position;
  };

  return (
    <Container>
      <StepIndicator
        stepCount={3}
        customStyles={customStyles}
        currentPosition={getPosition(data)}
        labels={labels}
      />
    </Container>
  );
};

export default Steps;
