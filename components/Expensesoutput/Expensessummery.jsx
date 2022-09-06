import { View, Text, StyleSheet } from 'react-native'

const Expensessummery = ({ periodName, expenses }) => {

    const expensesSum = expenses.reduce((sum, expense) => {
        return sum + expense.amount
    },0)

    return (
        <View style={styles.summeryCon}>
            <Text style={styles.summeryPeriodText}>{periodName}</Text>
            <Text style={styles.summeryAmountText}>₹{expensesSum.toFixed(2)}</Text>
        </View>
    )
}

export default Expensessummery

const  styles = StyleSheet.create({
    summeryCon:{
        // flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        borderRadius:8,
        backgroundColor:'#fdfcaa',
        padding:8,
    },
    summeryAmountText:{
        fontSize:18,
        fontWeight:'900',
        color:'#446300'
    },
    summeryPeriodText:{
        fontSize:15,
        fontWeight:'700',
        color:'#637144'
    }
})