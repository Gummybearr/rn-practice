import React from 'react'
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const SearchBar = () => {
    return (<View style={styles.view}>
        <TextInput placeholder="찾고 싶은 단어가 있으신가요?"></TextInput>
    </View>);
}

const styles = StyleSheet.create({
    view: {
        width: '100%',
        height: 50,
        // borderWidth:2,
        // borderColor: 'grey',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
});


export default SearchBar;