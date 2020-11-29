import React from 'react'
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';

const UserGreetingBox = () => {
    return (<View style={styles.view}>
        <Text style={styles.text}>함께 해서 좋네요, 경회님</Text>
    </View>);
}

const styles = StyleSheet.create({
    view: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
    }
});

export default UserGreetingBox;