import { createContext, useReducer } from "react";


export const expenseContext = createContext({
    expenses: [],
    addExpense: ({ description, amount, date }) => { },
    updateExpense: (id, { description, amount, date }) => { },
    deleteExpense: (id) => { },
    setExpense: (expenseData) => { }
});

function expenseReducer(state, action) {
    switch (action.type) {
        case 'SET':
            const inverted = action.payload.reverse();
            return inverted;
        case 'ADD':
            return [ action.payload, ...state]
        case 'UPDATE':
            const expenseIndex = state.findIndex(
                (expense) => expense.id === action.payload.id
            );
            const expenseObj = state[expenseIndex];
            const updatedExpense = { ...expenseObj, ...action.payload.data };
            const allExpenses = [...state];
            allExpenses[expenseIndex] = updatedExpense;
            return allExpenses;
        case 'DELETE':
            return state.filter(expense => expense.id !== action.payload)
        default:
            return state
    }
}


function ExpenseContextProvider({ children }) {
    const [expenseState, dispatch] = useReducer(expenseReducer, [])

    function setExpense(expenseData) {
        dispatch({ type: "SET", payload: expenseData })
    }

    function addExpense(expenseData) {
        dispatch({ type: "ADD", payload: expenseData })
    }

    function updateExpense(id, expenseData) {
        dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } })
    }

    function deleteExpense(id) {
        dispatch({ type: "DELETE", payload: id })
    }

    const value = {
        expenses: expenseState,
        setExpense : setExpense,
        addExpense: addExpense,
        updateExpense: updateExpense,
        deleteExpense: deleteExpense
    };

    return <expenseContext.Provider value={value} >{children}</expenseContext.Provider>
}

export default ExpenseContextProvider;