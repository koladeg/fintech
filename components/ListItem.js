import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View,  } from 'react-native'
import { Icon } from 'react-native-elements'
import { COLORS, FONTS, icons, SIZES } from '../constants'

const ListItem = (props) => {
    return (
        <TouchableOpacity style={[styles.button, styles.shadow]}>
        
            { props.image &&
                <Image
                    source={props.image}
                    style={{ width: 60, height: 35, borderRadius: 5, ...props.styles}}
                />
            }
            
            <Text style={{ ...FONTS.h3}}>{props.text}</Text>

            <View style={{ marginLeft: SIZES.radius, flexDirection: "row",  justifyContent: "space-between"}}>
                <Text style={{ ...FONTS.h3}}>{props.price}</Text>
                <Icon name="chevron-right" type="evilicon" color= "grey" size={25} />
            </View>

        </TouchableOpacity>
    )
}

export default ListItem

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
        justifyContent: 'space-evenly',
        marginTop: SIZES.padding * 1.5,
        marginHorizontal: SIZES.padding,
        paddingVertical: SIZES.padding,
        paddingHorizontal: SIZES.radius,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radius,
    }
})
