import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Logo = () => {
    return (<View style={styles.background}>
        <Icon name='star' size={40} color='white'/>
        <Text style={styles.font}>勤奋</Text>
    </View>);
};

const styles = StyleSheet.create({
    background: {
        width: 80,
        height: 80,
        borderColor: 'white',
        borderWidth:4,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    font: {
        color: 'white',
        fontSize: 16
    }
});


export default Logo;