import React, {useEffect} from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationContainer } from '@react-navigation/native'

import Logo from '../components/Logo';

const SplashScreen = (props: any) => {
    return (<View style={styles.background} >
        <LinearGradient 
            start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}} 
            locations={[0.0, 0.75, 1.0]}
            colors={['#020024', '#090979', '#0046a2']} 
            style={styles.linearGradient}
        >
            <Logo/>
        </LinearGradient>
    </View>);
};

const styles = StyleSheet.create({
    linearGradient: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    background: {
        width: '100%',
        height: '100%',
    },
});

export default SplashScreen;