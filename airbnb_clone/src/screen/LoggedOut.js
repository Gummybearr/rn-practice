import React from 'react';
import {StyleSheet, Text, View, Image, TouchableHighlight, ScroolView} from 'react-native';

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
    }
  });

export default LoggedOut;