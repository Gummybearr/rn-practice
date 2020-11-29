import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';

import DoughnutChart from '../elements/DoughnutChart';

const ProgressBox = () => {
    return (<View style={styles.view}>
        <View style={styles.textProgress}>
            <Text>학습 과정</Text>
            <Text style={styles.progressHeaderText}>HSK 5급</Text>
            <View style={styles.marginTop10}>
            </View>
            <Text></Text>
            <Text>진행 현황</Text>
            <Text style={styles.largeSizeText}>541/1800</Text>
        </View>
        <View style={styles.leftMargin5}>
            <DoughnutChart/>
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

export default ProgressBox;