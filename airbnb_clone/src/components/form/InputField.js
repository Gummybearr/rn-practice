import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const InputField = (props) => {

  const {
    labelText,
    labelTextSize,
    labelColor,
    textColor,
    borderBottomColor,
    inputType,
    customStyle
  } = props;
  const color = labelColor || Colors.white;
  const fontSize = labelTextSize || 14;
  const inputColor = textColor || colors.white;
  const borderBottom = borderBottomColor || "transparent";
  const [secureInput, setSecureInput] = useState(false)

  const toggleShowPassword = () => {
    setSecureInput(prevState => !prevState);
  }

  return (
    <View style={[customStyle, styles.wrapper]}>
      <View style={styles.horizontalDisplay}>
        <Text style={[{color, fontSize}, styles.label]}>
          {labelText}
        </Text>
        {
          inputType==='password'? (
            <TouchableOpacity
              onPress={toggleShowPassword}
            >
              <Text style={styles.showButtonText}>
                {secureInput?'Show':'Hide'}
              </Text>
            </TouchableOpacity>
          ):null
        }
      </View>
      <TextInput
        autoCorrect={false}
        style={[
          {color: inputColor, borderBottomColor: borderBottom},
          styles.inputFiled
        ]}
        secureTextEntry={secureInput}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex"
  },
  label: { fontWeight: "700", marginBottom: 10 },
  inputFiled: {
    borderBottomWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
  },
  horizontalDisplay: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
  showButtonText: {
    color: Colors.white,
    fontWeight: '700'
  },
});

export default InputField;