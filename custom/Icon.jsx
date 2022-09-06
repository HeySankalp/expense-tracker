import { Pressable, StyleSheet, View } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign'

function Geticon({ name, color, size, onPress }) {

    return (
        <View style={styles.iconCon}>
            <Pressable style={({pressed})=>pressed && styles.pressed} >
                <Icon on name={name} color={color} size={size} onPress={onPress} />
            </Pressable>
        </View>
    )
}

export default Geticon

const styles = StyleSheet.create({
    iconCon:{
        marginHorizontal:10,
        padding:5
    },
    pressed:{
        opacity:0.50
    }
})
