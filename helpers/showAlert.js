import { Alert } from 'react-native';
export default (title = 'RESPONSE', data) => {
  Alert.alert(
    `${title}`,
    `${data}`,
    [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ],
    { cancelable: false }
  );
};
