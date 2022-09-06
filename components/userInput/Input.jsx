import { View, Text, TextInput, StyleSheet } from 'react-native'

const Input = ({ label, textInputConfig, inValid }) => {


  let inputStyles = [styles.input]

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.multiline);
  }
  if (inValid) {
    inputStyles.push(styles.borderInValid)
  }

  return (
    <View style={styles.inputCon}>

      <View style={styles.lableCon}>
        <Text style={styles.inputLabel} inputText>{label}</Text>
      </View>
      <TextInput onChangeText={textInputConfig.onChangeText} style={inputStyles} {...textInputConfig} />
    </View>
  )
}

export default Input;


const styles = StyleSheet.create({
  inputCon: {
    position: 'relative',
    marginVertical: 20
  },
  lableCon: {
    alignItems: 'flex-start',
    position: 'absolute',
    top: -14,
    left: 5,
    zIndex: 2

  },
  inputLabel: {
    paddingHorizontal: 4,
    fontSize: 16,
    color: '#cac786',
    backgroundColor: '#283a00'
  },
  input: {
    borderWidth: 2,
    backgroundColor: '#283a00',
    borderColor: '#fdfcaa',
    borderRadius: 4,
    color: '#fdfcaa',
    paddingHorizontal: 15,
    paddingVertical: 5,
    fontSize: 20
  },
  multiline: {
    minHeight: 100,
    textAlignVertical: 'top'
  },
  borderInValid: {
    borderColor: 'red'
  },
  labelInValid: {
    color: 'red'
  }
})