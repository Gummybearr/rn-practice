import React from 'react'
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';

import HamburgerBar from '../elements/HamburgerBar'

const TopNavigationBar = () => {
    return (<View style={styles.view}>
        <HamburgerBar/>
        <View style={styles.textBox}>
            <Text style={styles.text}>차이니</Text>
        </View>
    </View>);
}

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row'
    },
    textBox: {
        marginLeft: 10,
        marginTop: 3
    },
    text: {
        fontSize: 20,
    }
});

export default TopNavigationBar;