import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import styles from './styles';

function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLoginPress = () => {
    console.log('EMAIL:----', email, '\nPASSWORD:--=', password);
    if (email || password != '') {
      navigation.navigate('SignUp');
    } else {
      alert('Email or Pasword cant be empty');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{uri: 'https://picsum.photos/200/300'}}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        value={email}
        onChangeText={text => setEmail(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        autoCapitalize="none"
        value={password}
        secureTextEntry
        onChangeText={text => setPassword(text)}
      />

      <Text
        style={{
          fontWeight: 'bold',
          textAlign: 'right',
          marginTop: 10,
          color: '#7a42f4',
        }}
        onPress={() => navigation.navigate('ForgotPassword')}>
        {'Forgot Password?'}
      </Text>

      <TouchableOpacity style={styles.submitButton} onPress={onLoginPress}>
        <Text style={styles.submitButtonText}> {'LOGIN'} </Text>
      </TouchableOpacity>

      <Text style={styles.noAccTxt}>
        {'Not having an account? '}
        <Text
          style={{textDecorationStyle: 'solid', fontWeight: 'bold'}}
          onPress={() => navigation.navigate('SignUp')}>
          {' Create One'}
        </Text>
      </Text>
    </View>
  );
}

export default Login;
