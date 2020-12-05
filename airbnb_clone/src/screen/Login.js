import React from 'react';
import {
  View, 
  Text, 
  ScrollView,
  KeyboardAvoidingView, 
  StyleSheet 
} from 'react-native';
import colors from '../styles/color';
import InputField from '../components/form/InputField';
import NextArrowButton from '../components/buttons/NextArrowButton';

const Login = (props) => {
  return (
    <KeyboardAvoidingView style={styles.wrapper}>
      <View style={styles.scrollViewWrapper}>
        <ScrollView style={styles.ScrollView}>
          <Text style={styles.loginHeader}>Login</Text>
          <InputField 
            labelText="EMAIL ADDRESS" 
            labelTextSize={14} 
            labelColor={colors.white} 
            textColor={colors.white} 
            borderBottomColor={colors.white} 
            inputType="email" 
            customStyle={{marginBottom:30}} 
              
          />
          <InputField 
            labelText="PASSWORD" 
            labelTextSize={14} 
            labelColor={colors.white} 
            textColor={colors.white} 
            borderBottomColor={colors.white} 
            inputType="password"  
            customStyle={{marginBottom:30}}
          />
        </ScrollView>
        <NextArrowButton/>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: colors.green01
  },
  scrollViewWrapper: {
    marginTop: 70,
    marginLeft: 30,
    marginRight: 30,
    flex: 1
  },
  avoidView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    flex:1
    },
  loginHeader: {
    fontSize: 28,
    color: colors.white,
    fontWeight: '300',
    marginBottom: 40
  }
});

export default Login