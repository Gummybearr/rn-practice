import React from 'react';
import {Text, View, TouchableHighlight, StyleSheet} from 'react-native';
import propTypes from "prop-types";

import colors from '../../styles/color';

const RoundButton = ( props ) => {
  const text = props.text;
  const color = props.color || colors.black;
  const backgroundColor = props.backgroundColor || 'transparent';
  return (
    <TouchableHighlight style={[{backgroundColor}, styles.wrapper]}>
      <Text style={[{color}, styles.buttonText]}>{text}</Text>
    </TouchableHighlight>
  )
}

RoundButton.propTypes = {
  text: propTypes.string.isRequired,
  textColor: propTypes.string,
  backgroundColor: propTypes.string
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 15,
    display: "flex",
    borderRadius: 40,
    borderWidth: 1,
    borderColor: colors.white
  },
  buttonText: {
    fontSize: 16,
    width: "100%",
    textAlign: "center",
  }
});

export default RoundButton;