import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },

  logo: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: 20,
    borderRadius: 8,
  },

  input: {
    borderColor: '#7a42f4',
    padding: 10,
    borderRadius: 4,
    borderWidth: 0.4,
    marginVertical: 5,
  },

  submitButton: {
    backgroundColor: '#7a42f4',
    alignItems: 'center',
    borderRadius: 4,
    marginTop: 20,
  },

  submitButtonText: {
    color: 'white',
    padding: 16,
  },

  noAccTxt: {
    color: '#7a42f4',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default styles;
