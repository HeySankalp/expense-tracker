import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const Getbutton = ({ onPress, children, mode, style }) => {
    return (
        <View style={[styles.mainCon, mode === 'flat' && styles.flat, style]} >
            <Pressable android_ripple={mode == 'flat' ? {color:'#446300'} : { color: '#d1cf87' }} style={({ pressed }) => pressed && styles.pressed} onPress={onPress}>
                <View style={styles.btnCon}>
                    <Text style={[styles.btnText, mode === 'flat' && styles.flatText]}>{children}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default Getbutton


const styles = StyleSheet.create({
    mainCon: {
        backgroundColor: '#fdfcaa',
        borderRadius: 20,
        overflow: 'hidden'
    },
    flat: {
        backgroundColor: 'transparent'
    },
    pressed: {
        opacity: 0.75
    },
    btnCon: {
        paddingHorizontal: 10,
        paddingVertical: 7,
        alignItems: 'center'
    },
    btnText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#588100'
    },
    flatText: {
        color: '#d8d68e'
    }
})