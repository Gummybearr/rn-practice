import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView, StyleSheet, Button } from 'react-native';

import TopNavigationBar from '../components/TopNavigationBar';

const LearnScreen = () => {
    const [count, setCount] = useState(() => {
        return 0;
    });

    const incraseCount = () => {
        setCount(prevCount =>  prevCount+1);
    }

    return (
        <ScrollView>
            <View style={styles.view}>
                <View>
                    <TopNavigationBar/>
                </View>
                <View style={styles.elements}>
                    <Button title={'Count: ' + count} onPress={incraseCount}></Button>
                </View>
                <View style={styles.elements}>
                    <Text>React useState practice</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    view: {
        width: '100%',
        height: '100%',
        paddingTop: '8%',
        paddingLeft: '3%',
        paddingRight: '3%',
        backgroundColor: '#f6f6f6'
    },
    elements: {
        marginTop: '2%'
    }
});

export default LearnScreen;