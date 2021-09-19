import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import styles from './styles';

function SignUp({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');

  const onSignUpPress = () => {
    alert('SIGNUP');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={text => setName(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        autoCapitalize="none"
        value={number}
        keyboardType={'number-pad'}
        maxLength={10}
        onChangeText={text => setNumber(text)}
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

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        autoCapitalize="none"
        value={confirmPwd}
        onChangeText={text => setConfirmPwd(text)}
      />

      <TouchableOpacity style={styles.submitButton} onPress={onSignUpPress}>
        <Text style={styles.submitButtonText}> {'SignUp'} </Text>
      </TouchableOpacity>

      <Text style={styles.noAccTxt}>
        {'Already having an account? '}
        <Text
          style={{textDecorationStyle: 'solid', fontWeight: 'bold'}}
          onPress={() => navigation.navigate('SignUp')}>
          {' Login to account'}
        </Text>
      </Text>
    </View>
  );
}

export default SignUp;
