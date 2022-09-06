import { FlatList, View,StyleSheet } from 'react-native'
import Expenselistitem from './Expenselistitem'

const Expenseslist = ({expenses}) => {

    function RenderExpense(itemData) {
        return <Expenselistitem {...itemData.item} />
    }

  return (
    <View style={styles.flatCon}>
    <FlatList
     data={expenses}
     renderItem={RenderExpense}
     keyExtractor={item=>item.id}
     />
    </View>
  )
}

export default Expenseslist

const  styles = StyleSheet.create({
  flatCon:{
    flex:1,
    marginVertical:4
  }
})
