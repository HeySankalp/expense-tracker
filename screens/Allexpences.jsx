import { useContext } from "react";
import Expensesoutput from "../components/Expensesoutput/Expensesoutput";
import { expenseContext } from "../context/ExpenseContext";


const Allexpences = ()=>{

  const allExpenses = useContext(expenseContext)

  return (
    <Expensesoutput expenses={allExpenses.expenses} periodName={'Total'} fallBack="No registred expenses found!" />
  )
}

export default Allexpences