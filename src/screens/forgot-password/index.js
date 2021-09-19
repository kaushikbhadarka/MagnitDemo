import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
} from 'react-native';
import styles from './styles';

function ForgotPassword({navigation}) {
  const [email, setEmail] = useState('');

  const onLinkPress = () => {
    if (email != '') {
      ToastAndroid.show(
        'Link has been sent to your email address',
        ToastAndroid.SHORT,
      );
      // navigation.navigate('Login');
    } else {
      alert('Please enter valid email address to generate Link');
    }
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          marginVertical: 10,
          color: '#7a42f4',
        }}>
        {
          'Please enter your email address to get link for re-setting your passeord'
        }
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        value={email}
        onChangeText={text => setEmail(text)}
      />

      <TouchableOpacity style={styles.submitButton} onPress={onLinkPress}>
        <Text style={styles.submitButtonText}> {'Send LINK'} </Text>
      </TouchableOpacity>
    </View>
  );
}

export default ForgotPassword;
