import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Platform,
  Text,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

export const Footer = () => {
  const navigation = useNavigation<any>();

  const redirectToScreen = (screen: string) => {
    return navigation.navigate(screen);
  };

  return (
    <View
      style={{
        ...Styles.mainContainer,
        flexDirection: 'row',
      }}>
      <View style={{...Styles.bottomView, flexDirection: 'row'}}>
        <TouchableWithoutFeedback onPress={() => redirectToScreen('Home')}>
          <View>
            <Text style={{...Styles.icon, height: 40, width: 40}}>Home</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => redirectToScreen('SignUp')}>
          <View>
            <Text style={{...Styles.icon, height: 40, width: 40}}>SignUp</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  arrowNext: {
    fontSize: 35,
    marginLeft: 15,
    color: '#ffffff',
  },
  footer: {
    backgroundColor: '#24A7EB',
    height: 55,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
  },
  headerText: {
    fontSize: 20,
    color: '#ffffff',
    justifyContent: 'center',
    alignContent: 'center',
  },
  icon: {
    display: 'flex',
    height: '100%',
    width: '100%',
    marginLeft: '8.5%',
    marginRight: '8.5%',
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },

  bottomView: {
    width: '100%',
    height: 50,
    backgroundColor: '#24A7EB',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    // top: 0
  },

  textStyle: {
    color: '#fff',
    fontSize: 22,
  },
});

export default Footer;
