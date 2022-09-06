import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Loadingpage = () => {
    return (
        <View style={styles.mainCon}>
            <ActivityIndicator />
        </View>
    )
}

export default Loadingpage

const styles = StyleSheet.create({
    mainCon: {
        flex: 1,
        backgroundColor: '#283a00',
        justifyContent:'center',
        alignItems:'center'
    }
})