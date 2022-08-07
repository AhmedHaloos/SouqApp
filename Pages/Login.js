import React from 'react';

import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passRegex = /(?=.*[a-z])/;

const Login = ({navigation}) => {
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <SafeAreaView>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 25, fontWeight: 'bold', margin: 30}}>
          Log in
        </Text>
      </View>

      <View>
        <Controller
          defaultValue={''}
          control={control}
          rules={{
            required: {value: true, message: 'Email is required'},
            pattern: {value: emailRegex, message: 'Email is invalid'},
          }}
          render={({field: {onChange, value}}) => (
            <TextInput
              onChangeText={onChange}
              style={[
                styles.input,
                errors.email ? {borderBottomColor: 'red'} : undefined,
              ]}
              value={value}
              placeholder=" Email"
              keyboardType="email-address"
            />
          )}
          name="email"
        />
        {errors.email && (
          <Text style={{color: 'red', alignSelf: 'center'}}>
            {errors.email.message}
          </Text>
        )}
        <Controller
          defaultValue={''}
          control={control}
          name="password"
          rules={{
            required: {value: true, message: 'Password is required'},
            minLength: {
              value: 8,
              message: 'Password must contain at least 8 character',
            },
            pattern: {
              value: passRegex,
              message: 'Password must contain 1 small letter',
            },
          }}
          render={({field: {onChange, value}}) => (
            <TextInput
              style={[
                styles.input,
                errors.password ? {borderBottomColor: 'red'} : undefined,
              ]}
              onChangeText={onChange}
              value={value}
              secureTextEntry={true}
              placeholder="Password"
              keyboardType="numeric"
            />
          )}
        />
        {errors.password && (
          <Text style={{color: 'red', alignSelf: 'center'}}>
            {errors.password.message}
          </Text>
        )}
      </View>
      <TouchableOpacity style={styles.Button} onPress={handleSubmit(onSubmit)}>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'white',
            paddingTop: 5,
          }}>
          Log In
        </Text>
      </TouchableOpacity>

      <View style={styles.Text}>
        <Text> Forgot your password ?</Text>
      </View>
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
    flex: 1,
    alignItems: 'center',
    marginTop: 25,
    // justifyContent: 'center',
  },
});

export default Login;
