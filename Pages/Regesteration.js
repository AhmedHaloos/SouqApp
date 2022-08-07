import React, {useRef, useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  Text,
  View,
  ViewComponent,
  TouchableOpacity,
  KeyboardAvoidingView,
  Touchable,
  TouchableHighlight,
  ScrollView,
} from 'react-native';

const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passRegex = /(?=.*[a-z])/;

const Registration = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm();

  passwordCurrent = watch('password');
  const onSubmit = data => console.log(data);
  return (
    <KeyboardAvoidingView
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: hp('90%'),
        marginTop: 15,
      }}
      behavior="padding">
      <ScrollView>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 10,
            marginTop: 10,
          }}>
          Registration
        </Text>
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
          defaultValue=""
          control={control}
          rules={{
            required: {value: true, message: 'User-name is required'},
          }}
          render={({field: {onChange, value}}) => (
            <TextInput
              style={[
                styles.input,
                errors.username ? {borderBottomColor: 'red'} : undefined,
              ]}
              onChangeText={onChange}
              value={value}
              placeholder="User-name"
              keyboardType="name-phone-pad"
            />
          )}
          name="username"
        />
        {errors.username && (
          <Text style={{color: 'red', alignSelf: 'center'}}>
            {errors.username.message}
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
        <Controller
          defaultValue={''}
          control={control}
          name="rePassword"
          rules={{
            required: {value: true, message: 'Re-Password is required'},
            validate: {
              value: value =>
                value === passwordCurrent || 'Password dont match',
            },
          }}
          render={({field: {onChange, value}}) => (
            <TextInput
              style={[
                styles.input,
                errors.rePassword ? {borderBottomColor: 'red'} : undefined,
              ]}
              onChangeText={onChange}
              value={value}
              secureTextEntry={true}
              placeholder="Re-Password"
              keyboardType="numeric"
            />
          )}
        />
        {errors.rePassword && (
          <Text style={{color: 'red', alignSelf: 'center'}}>
            {errors.rePassword.message}
          </Text>
        )}
        <Controller
          defaultValue={''}
          control={control}
          name="Address"
          render={({field: {onChange, value}}) => (
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              value={value}
              secureTextEntry={true}
              placeholder="Address"
              keyboardType="name-phone-pad"
            />
          )}
        />
        <TouchableOpacity
          style={styles.Button}
          onPress={handleSubmit(onSubmit)}>
          <Text style={{color: 'white', fontSize: 17, fontWeight: 'bold'}}>
            Submit
          </Text>
        </TouchableOpacity>

        <View style={{alignItems: 'center'}}>
          <Text style={{color: 'black'}}> Already have an acount ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{color: 'blue'}}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: hp('6%'),
    width: 300,
    margin: 13,
    borderWidth: 1,
    padding: 10,
    borderWidth: 0,
    borderBottomWidth: 0.4,
    borderBottomColor: 'gray',
  },
  Button: {
    backgroundColor: 'black',
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 5,
    width: 300,
    justifyContent: 'center',
  },
  Text: {
    flex: 1,
    alignItems: 'center',
    marginTop: 25,
    // justifyContent: 'center',
  },
});

export default Registration;
