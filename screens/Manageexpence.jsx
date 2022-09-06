import { View, StyleSheet } from 'react-native'
import { useContext, useLayoutEffect, useState } from 'react';
import Geticon from '../custom/Icon';
import { expenseContext } from '../context/ExpenseContext';
import Expenseform from '../components/userInput/Expenseform';
import { deleteExpense, storeExpense, updateExpense } from '../util/http';
import Loadingpage from '../custom/Loadingpage';
import Errorpage from '../custom/Errorpage';

const Manageexpence = ({ route, navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const expenseCtx = useContext(expenseContext)
  const editExpenseId = route.params?.expenseId;
  const isEditing = !!editExpenseId;

  const itemToEdit = expenseCtx.expenses.find((expense) => expense.id === editExpenseId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense"
    })
  }, [isEditing, navigation])

  function cancelHandler() {
    navigation.goBack();
  }

  async function onSubmit(expenseData) {
    try {
      setIsLoading(true);
      if (isEditing) {
        expenseCtx.updateExpense(editExpenseId, expenseData)
        updateExpense(editExpenseId, expenseData)
      } else {
        const id = await storeExpense(expenseData);
        expenseCtx.addExpense({ ...expenseData, id: id })
      }
      navigation.goBack();
    } catch (error) {
      setError("Could not complete task!")
      setIsLoading(false)
    }
    
  }

  function deleteHandler() {
    try {
      setIsLoading(true);
      expenseCtx.deleteExpense(editExpenseId);
      deleteExpense(editExpenseId)
      navigation.goBack();
    } catch (error) {
      setError('Could not delete expense at the time');
      setIsLoading(false);
    }

  }

  

  if (!isLoading && error) {
    return <Errorpage message={error} />
  }

  if (isLoading) {
    return <Loadingpage />
  }

  return (
    <View style={styles.mainCon}>
      <Expenseform
        onSubmit={onSubmit}
        onCancel={cancelHandler}
        defaultValue={itemToEdit}
        submitBtnLabel={isEditing ? 'Update' : 'Add New'} />

      {
        isEditing &&
        (<View style={styles.deleteCon}>
          <Geticon name="delete" onPress={deleteHandler} color='#ff2929' size={26} />
        </View>)
      }
    </View>
  )
}
export default Manageexpence;

const styles = StyleSheet.create({
  mainCon: {
    flex: 1,
    padding: 20,
    backgroundColor: '#283a00',
  },
  deleteCon: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderColor: '#fdfcaa',
    alignItems: 'center'
  }
})