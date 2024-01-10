import {StyleSheet, Text, View} from 'react-native';
import {Dimensions} from 'react-native';

export type HeaderProps = {
  headerText?: string;
  [key: string]: AnalyserNode;
};

const Header = (props: HeaderProps) => {
  const screenWidth = Math.round(Dimensions.get('window').width);

  return (
    <View
      style={{
        width: screenWidth,
        ...Styles.header,
        flexDirection: 'row',
        height: 50,
        marginBottom: 25,
      }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}>
        <Text style={Styles.headerText}>{props?.headerText || ''}</Text>
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
  header: {
    backgroundColor: '#24A7EB',
    height: 55,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row-reverse',
    marginBottom: 25,
    width: '100%',
  },
  headerText: {
    fontSize: 20,
    color: '#ffffff',
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default Header;
