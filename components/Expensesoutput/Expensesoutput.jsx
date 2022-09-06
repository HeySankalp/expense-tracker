import { StyleSheet, View,Text } from 'react-native'
import React from 'react'
import Expensessummery from './Expensessummery'
import Expenseslist from './Expenseslist';

const Expensesoutput = ({ expenses, periodName, fallBack }) => {
  let content;
  if (expenses.length === 0) {
    content = <Text style={styles.fallBack}>{fallBack}</Text>
  } else {
    content = <Expenseslist expenses={expenses} />
  }

  return (
    <View style={styles.expenseOutputCon}>

      <Expensessummery expenses={expenses} periodName={periodName} />
      {content}

    </View>
  )
}

export default Expensesoutput

const styles = StyleSheet.create({
  expenseOutputCon: {
    flex: 1,
    padding: 20,
    paddingBottom: 0,
    backgroundColor: '#283a00'
  },
  fallBack:{
    fontSize:18,
    textAlign:'center',
    marginVertical:40,
    color:'#b9b87b'

  }
})