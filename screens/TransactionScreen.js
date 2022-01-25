import React from 'react'
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { dummyData, COLORS, SIZES, FONTS, icons, images} from '../constants'
import { Entypo, Ionicons } from '@expo/vector-icons';
import { Icon } from 'react-native-elements';
import { AddItem, ListItem } from '../components';

const TransactionScreen = ({navigation}) => {

    function renderHeader() {
        return (
            <View 
            style={{
                width: "100%",
                height: 390,
            }}
            >

            <ImageBackground
                source={images.banner}
                resizeMode='cover'
                style={{
                    flex: 1,
                    alignItems: 'center'
                }}
            >

            {/* { title} */}
            <TouchableOpacity
                style={{
                    marginTop: SIZES.padding * 3,
                    width: "100%",
                    flexDirection:'row',
                    alignItems: "flex-start",
                    paddingHorizontal: SIZES.padding
                }}
                onPress={() => navigation.goBack()}
            >
                <Entypo name="chevron-left" size={25} color="white" />
                
                <Text
                style={{ marginLeft: SIZES.base, color: COLORS.white, ...FONTS.h3}}
                >
                    Accounts
                </Text>
            </TouchableOpacity>

            {/* { account card info} */}
            <View 
                style={styles.addContainer} 
            >
                <Image resizeMode={'contain'} style={styles.addImage} source={require('../assets/images/card.png')}/>
                <View style={styles.addText}>
                    <Text style={{ color: COLORS.white, ...FONTS.h4}}>Appetiser Premium Access</Text>
                </View>
                <View style={styles.arrow} onPress={()=>{
                }}>

                    <Entypo name="dots-three-vertical" size={19} color="white" />
                </View>
            </View>

            {/* { account card info} */}
            <View
            style={{ width: "85%",  flexDirection: "row",  justifyContent: "space-between"}}
            >
                <View
                    style={{
                        
                    }}
                >
                    <Text style={{color: COLORS.white, ...FONTS.h4}}>Available</Text>
                    <Text style={{ marginTop: SIZES.base, color: COLORS.white, ...FONTS.h2}}>${dummyData.account.balance}</Text>

                </View>
                <View
                    style={{
                        alignItems:"flex-end"
                    }}
                >
                    <Text style={{color: COLORS.white, ...FONTS.h4}}>Pending</Text>
                    <Text style={{ marginTop: SIZES.base, color: COLORS.white, ...FONTS.h2}}>${dummyData.account.pending}</Text>

                </View>
            </View>
            {/* {activity buttons} */}
            <View
                style={{ width: "85%",  flexDirection: "row",  justifyContent: "space-between", paddingTop: 15}}
            >
                <TouchableOpacity
                    style={styles.button}
                >
                    <Icon name="refresh" type="font-awesome" color={COLORS.secondary} size={15} />
                    <Text style={{ color: COLORS.secondary, ...FONTS.h3, textAlign: 'center', marginLeft: 5}}>Transfer</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} >
                    <Icon name="dollar" type="font-awesome" color={COLORS.secondary} size={15} />
                    <Text style={{ color: COLORS.secondary, ...FONTS.h3, textAlign: 'center', marginLeft: 5}}>Pay</Text>
                </TouchableOpacity>
            </View>

            </ImageBackground>
            </View>
        )
        
    }

    return (
        <View>
            {renderHeader()}
        </View>
    )
}

export default TransactionScreen

const styles = StyleSheet.create({

    container:{
        // flex:1,
        backgroundColor: 'white'
    },
    addContainer:{
        marginLeft:30,
        marginRight:10,
        marginTop:20,
        marginBottom:10,
        flexDirection:'row',
        alignItems:"center"
    },
    
    addText:{
        paddingTop:18,
        paddingBottom:18,
        flex:8,
        paddingLeft:20
    
    },

    button:{
        flexDirection: "row", 
        alignItems: 'center', 
        justifyContent:  'center',  
        paddingVertical:15, 
        width: 150, 
        borderRadius: 10, 
        backgroundColor: 'white'
    },
    
    arrow:{
        flex:1.5
    },
    
    addImage:{
        height:90,
        flex:4
    },
    doneButtonContainer:{
        marginTop:40
    },
})
