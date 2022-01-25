import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View,  } from 'react-native'
import { Icon } from 'react-native-elements'
import { COLORS, FONTS, icons, SIZES } from '../constants'

const AddItem = (props) => {
    return (
        <TouchableOpacity style={[styles.button, styles.shadow]}>

            <Icon name="add-circle-outline" type="ionicons" color= {COLORS.secondary} size={25} />
                        
            <Text style={{ color: COLORS.secondary, paddingLeft:SIZES.padding, ...FONTS.h3}}>{props.text}</Text>

        </TouchableOpacity>
    )
}

export default AddItem

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8
    },

    button : {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: SIZES.padding * 1.5,
        marginHorizontal: SIZES.padding,
        paddingVertical: SIZES.padding,
        paddingHorizontal: SIZES.padding * 2,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radius,
    }
})
