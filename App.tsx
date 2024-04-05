import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image } from 'react-native';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Hiển thị thông tin tài khoản và mật khẩu bằng một alert
    Alert.alert('Thông tin đăng nhập', `Tài khoản: ${username}\nMật khẩu: ${password}`);
  };

  return (
    <View style={[styles.container, { backgroundColor: '#ffaf4c' }]}>
        <Text style={styles.text}>Ngọc Rồng <Text style={styles.text1}>Online </Text></Text>
        <Image
          source={require('./assets/banner_nro.png')} 
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="Tên đăng nhập"
          value={username}
          onChangeText={setUsername}
        />

      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Đăng nhập</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputIcon: {
    width: '80%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  text:{
      color: 'red',
      textAlign: 'center',
      fontSize: 30,
      fontWeight:'700',
      marginBottom: 10,
  },
  text1:{
    color: '#32CD32',
    textAlign: 'center',
    fontSize: 30,
    fontWeight:'700',
    marginBottom: 10,
},
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#007bff',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
