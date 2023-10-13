import {
  StyleSheet,
  Text,
  View,
  Modal,
  Alert,
  Pressable,
  SafeAreaView,
} from 'react-native';
import { WHITE } from '../colors';
import { useRef, useState, useEffect } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import PropTypes from 'prop-types';
import axios from 'axios';

const LightningScreen = ({ navigation }) => {
  const [input, setInput] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [serialNumber, setSerialNumber] = useState('');
  const [name, setName] = useState('');
  const nameRef = useRef(null);
  const [jsonData, setJsonData] = useState([]);

  const getLightnings = async () => {
    try {
      const value = await axios.get(
        'https://my-json-server.typicode.com/typicode/demo/posts'
      );
      setJsonData(value.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getLightnings();
  });

  const onSubmit = () => {};

  const textSubmit = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <Input
        value={input}
        onChangeText={(text) => setInput(text.trim())}
        title={'Input'}
        placeholder={'조명색깔을 무엇으로 할까요'}
        onSubmitEditing={textSubmit}
      ></Input>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.container}>
          <View style={styles.modalView}>
            <Input
              value={serialNumber}
              onChangeText={(text) => setSerialNumber(text.trim())}
              title={'serialNumber'}
              placeholder={'시리얼넘버'}
              onSubmitEditing={() => nameRef.current.focus()}
            ></Input>
            <Input
              ref={nameRef}
              value={name}
              onChangeText={(text) => setName(text.trim())}
              title={'name'}
              placeholder={'이름'}
              onSubmitEditing={onSubmit}
            />

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>추가</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>조명 추가</Text>
      </Pressable>
      <View style={styles.button}>
        {jsonData.map((v) => {
          return (
            <Button
              key={v.id}
              title={v.title}
              onPress={() => navigation.navigate('Mood')}
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
};

LightningScreen.propTypes = {
  navigation: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: WHITE,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default LightningScreen;
