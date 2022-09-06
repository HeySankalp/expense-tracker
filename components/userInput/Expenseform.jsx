import { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Input from './Input'
import Getbutton from '../../custom/Button';
import { dateStringify } from '../../util/date';

const Expenseform = ({ onCancel, onSubmit, submitBtnLabel, defaultValue }) => {

  const [inputValues, setInputValues] = useState({
    amount: {
      value: defaultValue ? defaultValue.amount.toString() : "",
      isValid: true
    },
    date: {
      value: defaultValue ? dateStringify(defaultValue.date) : "",
      isValid: true
    },
    description: {
      value: defaultValue ? defaultValue.description : "",
      isValid: true
    }
  })

  function inputChangeHandler(inputIdentifier, enteredValue) {
    setInputValues((curInputValues) => {
      return {
        ...curInputValues,
        [inputIdentifier]: { value: enteredValue, isValid: true }
      };
    })
  }

  function onSubmitHandler() {
    const expenseData = {
      amount: +inputValues.amount.value,
      date: new Date(inputValues.date.value),
      description: inputValues.description.value
    };
    

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== 'Invalid Date' && dateStringify(expenseData.date).length==10;
    const descriptionIsValid = expenseData.description.trim().length > 0;


    if (!dateIsValid || !descriptionIsValid ||  !amountIsValid) {
      setInputValues((curInputs) => {
        return {
          amount: { value: curInputs.amount.value, isValid: amountIsValid },
          date: { value: curInputs.date.value, isValid: dateIsValid },
          description: { value: curInputs.description.value, isValid: descriptionIsValid }
        }
      })
      return;
    }
    onSubmit(expenseData);
  }

  const formIsInvalid =
    !inputValues.amount.isValid ||
    !inputValues.date.isValid ||
    !inputValues.description.isValid

  return (
    <View>
      <Text style={styles.title}>Your Expense</Text>

      <Input label='Amount'
        inValid={!inputValues.amount.isValid}
        textInputConfig={{
          keyboardType: 'decimal-pad',
          onChangeText: inputChangeHandler.bind(this, 'amount'),
          value: inputValues.amount.value
        }} />

      <Input label='Date'
        inValid={!inputValues.date.isValid}
        textInputConfig={{
          placeholder: 'YYYY-MM-DD',
          maxLength: 10,
          placeholderTextColor: "#71704a",
          onChangeText: inputChangeHandler.bind(this, 'date'),
          value: inputValues.date.value
        }} />

      <Input label='Description'
        inValid={!inputValues.description.isValid}
        textInputConfig={{
          multiline: true,
          onChangeText: inputChangeHandler.bind(this, 'description'),
          value: inputValues.description.value
        }} />

      {formIsInvalid &&
        <Text style={styles.inValidFooter} >* Invalid credentials</Text>
      }

      <View style={styles.btnGrp}>
        <Getbutton style={styles.btn} onPress={onCancel} mode='flat' >Cancel</Getbutton>
        <Getbutton style={styles.btn} onPress={onSubmitHandler}>{submitBtnLabel}</Getbutton>
      </View>
    </View>
  )
}

export default Expenseform

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: 'white'
  },
  btnGrp: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center"
  },
  btn: {
    marginHorizontal: 10,
  },
  inValidFooter: {
    color: '#ff3131',
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 55,
  }
})