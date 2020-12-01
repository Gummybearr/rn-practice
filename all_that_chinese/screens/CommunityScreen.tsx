import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import TopNavigationBar from '../components/TopNavigationBar';

const CommunityScreen = () => {
    return (
        <View>
            <ScrollView>
            <View style={styles.view}>
                <View>
                    <TopNavigationBar/>
                </View>
            </View>
        </ScrollView>
        </View>
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

export default CommunityScreen;