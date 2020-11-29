import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';

const NextTestDataBox = () => {
    return (<View style={styles.view}>
        <View style={styles.textProgress}>
            <Text>다음 HSK 시험 일자가 없습니다</Text>
        </View>
    </View>);
}

const styles = StyleSheet.create({
    view: {
        width: '100%',
        height: 200,
        // borderWidth:2,
        // borderColor: 'grey',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    textProgress: {
        flexDirection: 'column'
    },
    progressHeaderText: {
        fontSize: 20
    },
    middleSizeText: {
        fontSize: 15
    },
    leftMargin5: {
        marginLeft: '5%'
    },
    marginTop10: {
        marginTop: 0
    },
    largeSizeText: {
        fontSize: 30
    }
});

export default NextTestDataBox;