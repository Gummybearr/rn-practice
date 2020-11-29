import React from 'react'
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HamburgerBar = () => {
    return (<View>
        <Icon name='bars' size={30} color='grey'/>
    </View>);
}

export default HamburgerBar;