import { View, Text, Pressable, StyleSheet } from 'react-native';
import { dateStringify } from '../../util/date';
import { useNavigation } from '@react-navigation/native';

const Expenselistitem = ({id, description, date, amount }) => {

    const navigation = useNavigation();

    function editExpenseHandler() {
        navigation.navigate('Manageexpense',{
            expenseId: id
        })
    }

    return (
        <View style={styles.outerCon}>
        <Pressable android_ripple={{color:'#5f8701'}} onPress={editExpenseHandler} >
            <View style={styles.itemCon}>
                <View style={styles.itemConLeft} >
                    <Text style={styles.dec}>{description}</Text>
                    <Text style={styles.baseText}>{dateStringify(date)}</Text>
                </View>
                <View style={styles.amountCon} >
                    <Text style={styles.amt}>₹{amount.toFixed(2)}</Text>
                </View>
            </View>
        </Pressable>
        </View>
    )
}

export default Expenselistitem



const styles = StyleSheet.create({
    outerCon:{
        backgroundColor: '#446300',
        marginVertical: 5,
        borderRadius: 8,
        overflow:'hidden'
    },
    itemCon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal:12,
        paddingVertical: 8,
    },
    dec: {
        fontSize: 17,
        fontWeight: '800',
        color: '#fdfcaa',
        paddingVertical:2
    },
    baseText:{
        color:'#bcbb7d',
        fontSize:14,
    },
    amountCon:{
        backgroundColor:'#fdfcaa',
        paddingVertical:9,
        paddingHorizontal:8,
        borderRadius:4,
        minWidth:90,
        alignItems:'center'
    },
    amt:{
        fontSize:17
    }
})