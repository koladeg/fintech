import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { COLORS, FONTS, icons, SIZES } from '../constants'

const TransactionItem = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <Image
                    source={props.image}
                    style={{ width: 60, height: 65, borderRadius: 5, ...props.styles}}
                />
                <View style={{ marginLeft: 10}}>
                    <Text style={{textAlign:'left', marginBottom: 5, ...FONTS.h3, width: '85%'}}>{props.description}</Text>
                    <Text style={{textAlign:'left', color: COLORS.gray, ...FONTS.h4}}>{props.date}, {props.location}</Text>
                </View>
            </View>
            <View style={styles.right}>
                <Text style={{textAlign:'right', marginBottom: 5, ...FONTS.h3}}>{props.amount}</Text>
            </View>
        </View>
    )
}

export default TransactionItem

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 25
    },
    left:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        height: '100%',
        alignItems: 'center',
        flex: 2,
        paddingLeft: 10
    },
    right:{
        flex: 1,
        paddingRight: 10
    }
})
