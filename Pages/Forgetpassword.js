import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  Text,
  View,
  ViewComponent,
  TouchableOpacity,
} from 'react-native';

const Forgetpassword = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={{fontSize: 25, fontWeight: 'bold', margin: 30}}>
          Forget a password
        </Text>
      </View>

      <View style={styles.Text}>
        <Text style={{fontSize: 23, margin: 25}}>
          Please enter your email address . You will receive your password on it{' '}
        </Text>
      </View>

      <View>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
        />
      </View>
      <TouchableOpacity style={styles.Button}>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'white',
            paddingTop: 5,
          }}>
          Send
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 300,
    margin: 25,
    borderWidth: 1,
    padding: 10,
    borderWidth: 0,
    borderBottomWidth: 1,
  },
  Button: {
    backgroundColor: 'black',
    height: 40,
    borderRadius: 10,
    // alignItems: 'center',
    marginTop: 30,
    marginLeft: 25,
    width: 300,
  },
  Text: {
    alignItems: 'center',
  },
});

export default Forgetpassword;
