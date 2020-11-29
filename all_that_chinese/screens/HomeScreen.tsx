import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, ScrollView } from 'react-native';

import TopNavigationBar from '../components/TopNavigationBar';
import UserGreetingBox from '../components/UserGreetingBox';
import SearchBar from '../components/SearchBar';
import ProgressBax from '../components/ProgressBox';
import HistoryBox from '../components/HistoryBox';
import NextTestDataBox from '../components/NextTestDateBox';

const HomeScreen = () => {
    return (
        <ScrollView>
            <View style={styles.view}>
                <View>
                    <TopNavigationBar/>
                </View>
                <View style={styles.elements}>
                    <UserGreetingBox/>
                </View>
                <View>
                    <SearchBar/>
                </View>
                <View style={styles.elements}>
                    <ProgressBax/>
                </View>
                <View style={styles.elements}>
                    <HistoryBox/>
                </View>
                <View style={styles.elements}>
                    <NextTestDataBox/>
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

export default HomeScreen;