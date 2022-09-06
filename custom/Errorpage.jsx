import { View, StyleSheet, Text } from 'react-native';
import Getbutton from './Button';

const Errorpage = ({ message}) => {
    return (
        <View style={styles.mainCon}>
            <Text style={styles.Title}>An error occurred!</Text>
            <Text style={styles.error}>{message}</Text>
        </View>
    )
}

export default Errorpage

const styles = StyleSheet.create({
    mainCon: {
        flex: 1,
        backgroundColor: '#283a00',
        justifyContent:'center',
        alignItems:'center'
    },
    Title:{
        
        fontSize:24,
        fontWeight:'bold',
        color:'white',
        textAlign:"center"
    },
    error:{
        fontSize:18,
        fontWeight:'700',
        textAlign:'center',
        color:'white',
        marginBottom:10
    }
})