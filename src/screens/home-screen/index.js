import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Button,
  Modal,
} from 'react-native';

export function Home() {
  const [isVisible, setVisible] = useState(false);

  const toggleModal = () => {
    setVisible(!isVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome Press below to Open Modal</Text>
      <TouchableOpacity style={styles.button} onPress={toggleModal}>
        <Text style={styles.btnText}>Open Modal</Text>
      </TouchableOpacity>
      <Modal visible={isVisible} animationType="slide">
        <View style={{flex: 1}}>
          <Text style={styles.modalText}>Thanks for opening</Text>
          <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 10,
    backgroundColor: 'lightblue',
    borderRadius: 10,
    padding: 10,
  },
  btnText: {
    color: 'white',
  },
  text: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalText: {
    color: 'black',
    // fontWeight: '800',
  },
});
