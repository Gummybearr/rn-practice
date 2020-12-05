import React from 'react';
import {StyleSheet, Text, View, Image, TouchableHighlight, ScroolView} from 'react-native';

import RoundButton from '../components/buttons/RoundButton';
import colors from '../styles/color';

const LoggedOut = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.welcomeWrapper}>
        <Image
          style={styles.logo}
          source={require("../img/airbnb-logo.png")}
        />
        <Text style={styles.welcomeText}>
          Welcome to Airbnb Clone with React Native    
        </Text>
        <RoundButton
          text="Login"
          color={colors.green01}
          backgroundColor={colors.white}
        />    
        <RoundButton 
          text="Create Account" 
          color={colors.white} 
        />     
        <TouchableHighlight
          style={styles.moreOptionsButton}
          // onPress={this.onMoreOptionsPress}
        >
          <Text style={styles.moreOptionsButtonText}>More options</Text>
        </TouchableHighlight>
        <View style={styles.termsAndConditions}>
          <Text style={styles.termsText}>
            By tapping Continue, Create Account or More
          </Text>
          <Text style={styles.termsText}>{" options,"}</Text>
          <Text style={styles.termsText}>{"I agree to Airbnb's "}</Text>
          <TouchableHighlight style={styles.linkButton}>
            <Text style={styles.termsText}>Terms of Service</Text>
          </TouchableHighlight>
          <Text style={styles.termsText}>,</Text>
          <TouchableHighlight style={styles.linkButton}>
            <Text style={styles.termsText}>Payments Terms of Service</Text>
          </TouchableHighlight>
          <Text style={styles.termsText}>,</Text>
          <TouchableHighlight style={styles.linkButton}>
            <Text style={styles.termsText}>Privacy Policy</Text>
          </TouchableHighlight>
          <Text style={styles.termsText}>, and</Text>
          <TouchableHighlight style={styles.linkButton}>
            <Text style={styles.termsText}>Nondiscrimination Policy</Text>
          </TouchableHighlight>
          <Text style={styles.termsText}>.</Text>  
        </View>         
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: "flex",
    backgroundColor: colors.green01 
  },
  welcomeWrapper: {
    flex: 1,
    display: "flex",
    marginTop: 30,
    padding: 20
  },
  logo: {
    width: 50,
    height: 50,
    marginTop: 50,
    marginBottom: 40
  },
  welcomeText: {
    fontSize: 30,
    color: colors.white,
    fontWeight: "300",
    marginBottom: 40
  },
  moreOptionsButton: {
    marginTop: 10,
  },
  moreOptionsButtonText: {
    color: colors.white,
    fontSize: 16,
  },
  termsAndConditions: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: 30,
  },
  termsText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  linkButton: {
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
  },
});

export default LoggedOut;