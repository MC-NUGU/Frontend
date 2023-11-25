import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
} from 'react-native';
import { WHITE } from '../colors';
import { MaterialIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SafeInputView from '../components/SafeInputView';
import { ButtonTypes } from '../components/Button';
import { useState } from 'react';
import { useMainContext } from '../contexts/MainContext';
import TextAnimation from '../components/TextAnimation';
import { BlurView } from 'expo-blur';
import { FontAwesome, Entypo, Octicons, Zocial } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

// eslint-disable-next-line react/prop-types
const HomeScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const { home_name, home_code, owner } = useMainContext();

  return (
    <SafeInputView>
      <ImageBackground
        source={require('../../assets/home_background.gif')}
        style={[
          styles.container,
          { paddingTop: insets.top, paddingBottom: insets.bottom - 26 },
        ]}
      >
        <View style={styles.top}>
          <View style={styles.topleft}>
            <View style={styles.topIcon}>
              {owner ? (
                <Octicons name="home" size={24} color="#AF6BE4" />
              ) : (
                <Zocial name="guest" size={24} color="#09B4FF" />
              )}

              {owner ? (
                <Text style={styles.homename}>{home_name}</Text>
              ) : (
                <Text style={styles.guestname}>{home_name}</Text>
              )}
            </View>
            <Text style={styles.codestyle}>초대코드 : {home_code} </Text>
          </View>
          <View style={styles.topright}>
            <View style={styles.logoutButton}>
              <Pressable
                // eslint-disable-next-line react/prop-types
                onPress={() => navigation.navigate('Room')}
                buttonType={ButtonTypes.DANGER}
              >
                <Text style={{ color: 'white' }}>방 나가기</Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View style={styles.notice}>
          <BlurView style={styles.blur} intensity={10} tint="light" />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 16, color: 'lightgrey', marginLeft: 8 }}>
              공지 :
            </Text>
            <Text
              style={{
                fontSize: 17,
                color: 'white',
                marginLeft: 8,
                fontStyle: 'italic',
              }}
            >
              Happy New Year ~~! 🎉
            </Text>
          </View>
        </View>
        <View style={styles.center}></View>
        <View style={styles.bottom}>
          <Pressable
            onPress={() => {}}
            style={({ pressed }) => [
              buttonStyles.container,
              {
                opacity: pressed ? 0.5 : 1,
              },
            ]}
          ></Pressable>
          <Pressable
            onPress={() => {}}
            style={({ pressed }) => [
              buttonStyles.container,
              {
                opacity: pressed ? 0.5 : 1,
              },
            ]}
          ></Pressable>
        </View>
      </ImageBackground>
    </SafeInputView>
  );
};

HomeScreen.propTypes = {};

const buttonStyles = StyleSheet.create({
  container: {
    width: 170,
    height: 150,
    backgroundColor: 'white',
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#D7DE92',
    shadowOpacity: 0.6,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 10,
  },
  image: {},
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: WHITE,
  },
  top: {
    flex: 3,
    width: '100%',
    borderRadius: 30,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topleft: {
    width: 250,
    //backgroundColor: 'aqua',
    marginLeft: 18,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: 18,
  },
  topIcon: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  homename: {
    fontSize: 23,
    marginLeft: 10,
    color: '#CFA3F1',
    textShadowColor: '#AF6BE4',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 8,
  },
  guestname: {
    fontSize: 23,
    marginLeft: 10,
    color: '#09B4FF',
    textShadowColor: '#09B4FF',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  topright: {
    flexDirection: '',
    // backgroundColor: 'yellow',
    alignItems: 'center',
  },
  codestyle: {
    paddingTop: 20,
    fontSize: 14,
    color: 'lightgrey',
    marginLeft: 12,
  },
  logoutButton: {
    // backgroundColor: 'white',
    marginRight: 25,
  },
  notice: {
    flex: 1,
    fontSize: 20,
    marginTop: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blur: {
    ...StyleSheet.absoluteFillObject,
  },
  center: {
    flex: 10,
  },
  bottom: {
    flex: 5,
    flexDirection: 'row',
  },
});

export default HomeScreen;
