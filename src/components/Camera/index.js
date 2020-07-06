import React, { useRef, useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { RNCamera } from 'react-native-camera';

import Button from '../Button/index';
import { SendSignatureRequest } from '~/store/modules/app/actions';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '90%',

    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#999',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

function Camera(props) {
  const [foto, setFoto] = useState(false);
  const camera = useRef(RNCamera);
  const { detail } = props;
  const { deliveryMan } = detail;
  const dispatch = useDispatch();

  const takePicture = async () => {
    try {
      if (camera) {
        const options = {
          quality: 0.2,
          base64: true,
          doNotSave: true,
          pauseAfterCapture: true,
        };

        setFoto(true);
        const data = await camera.current.takePictureAsync(options);
        dispatch(
          SendSignatureRequest(data.base64, detail.id, true, deliveryMan?.id)
        );
      }
    } catch (e) {
      Alert('Não foi possível obter a imagem.');
      setFoto(false);
      dispatch(SendSignatureRequest(null, null, false, deliveryMan?.id));
    }
  };

  const resume = () => {
    camera.current.resumePreview();
    setFoto(false);
    dispatch(SendSignatureRequest(null, null, false, deliveryMan?.id));
  };

  return (
    <>
      <View style={styles.container}>
        <RNCamera
          ref={camera}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
          autoFocus="on"
          androidCameraPermissionOptions={{
            title: 'Permissão de uso câmera',
            message: 'Precisamos de permissão para ultilizar a câmera.',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancelar',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permissão de uso áudio',
            message: 'Precisamos de permissão para ultilizar a áudio.',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancelar',
          }}
        />
      </View>
      {foto ? (
        <Button
          style={{ backgroundColor: '#e7ba40', width: '100%', marginTop: 10 }}
          onPress={() => {
            resume();
          }}
        >
          Reiniciar
        </Button>
      ) : (
        <Button
          style={{ backgroundColor: '#7d4', width: '100%', marginTop: 10 }}
          onPress={() => {
            takePicture();
          }}
        >
          Foto
        </Button>
      )}
    </>
  );
}

export default Camera;
