import { useContext, useEffect, useState } from 'react';
import Expensesoutput from '../components/Expensesoutput/Expensesoutput';
import { expenseContext } from '../context/ExpenseContext';
import Errorpage from '../custom/Errorpage';
import Loadingpage from '../custom/Loadingpage';
import { getDateBefore } from '../util/getDateBefore';
import { fetchExpense } from '../util/http';

const Recentexpences = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [error, setError]= useState()
  const expenseCxt = useContext(expenseContext)

  useEffect(() => {
    async function getExpenses(){
      try {
        const expenses = await fetchExpense();
        expenseCxt.setExpense(expenses);        
      } catch (error) {
        setError("Could not find expenses")
      }
    setIsLoading(false)
    }
    getExpenses();
  }, [])
  

  const recentExpenses = expenseCxt.expenses.filter((expense)=>{
    const today = new Date();
    const date7Dayago = getDateBefore(today,7);
    return expense.date > date7Dayago;

  })



  if(error && !isLoading){
    return <Errorpage message={error}/>
  }

  if(isLoading){
    return <Loadingpage/>
  }
  

  return (
    <Expensesoutput expenses={recentExpenses} periodName={'Last 7 Days'} fallBack="No recently registred expenses!" />
  )
}

export default Recentexpences