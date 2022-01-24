import React from 'react'
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { dummyData, COLORS, SIZES, FONTS, icons, images} from '../constants'
import { Entypo, Ionicons } from '@expo/vector-icons';
import { Icon } from 'react-native-elements';
import { ListItem } from '../components';

const Home = () => {

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
            <View
                style={{
                    marginTop: SIZES.padding * 3,
                    width: "100%",
                    alignItems: "flex-start",
                    paddingHorizontal: SIZES.padding
                }}
            >
                <Text
                style={{ color: COLORS.white, ...FONTS.h1}}
                >
                    Accounts
                </Text>
            </View>

            {/* { account card info} */}
            <View style={styles.addContainer}>
                <Image resizeMode={'contain'} style={styles.addImage} source={require('../assets/images/card.png')}/>
                <View style={styles.addText}>
                    <Text style={{ color: COLORS.white, ...FONTS.h4}}>Appetiser Premium Access</Text>
                </View>
                <TouchableOpacity style={styles.arrow} onPress={()=>{
                }}>

                    <Entypo name="chevron-right" size={25} color="white" />
                </TouchableOpacity>
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

    function renderCards() {
        return(
            <View>
                <ListItem 
                    image={require('../assets/images/credit_card.png')} 
                    text="Appetiser Saver"
                    price="$8,183.00"
                />

                <ListItem 
                    styles={{ width: 75}}
                    image={require('../assets/images/credit_card1.png')} 
                    text="Appetiser Saver"
                    price="$8,183.00"
                />

            </View>
        )
    }
    return (
        <ScrollView>
            <View style={{ flex: 1, paddingBottom: 130}}>
                {renderHeader()}
                {renderCards()}
            </View>
        </ScrollView>
    )
}

export default Home

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
