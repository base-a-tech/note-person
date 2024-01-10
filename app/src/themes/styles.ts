import {StyleSheet, Dimensions} from 'react-native';
const screenHeight = Math.round(Dimensions.get('window').height);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    borderColor: '#C4C4C4',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    padding: 5,
    width: 317,
    height: 37,
    borderRadius: 2,
  },
  selectBox: {
    borderColor: '#C4C4C4',
    borderWidth: 1,
    padding: 5,
    width: 317,
    height: 37,
    borderRadius: 2,
  },
  btnPrimary: {
    backgroundColor: '#24A7EB',
  },
  colArea: {
    flexDirection: 'column',
  },
  body: {
    backgroundColor: '#F5F5F2',
  },
  btn: {
    height: 40,
    borderRadius: 5,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollArea: {
    height: screenHeight - 100,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  errorMessage: {
    color: 'red',
    fontSize: 12,
    marginBottom: 5,
    marginTop: 5,
  },
});

export default styles;
