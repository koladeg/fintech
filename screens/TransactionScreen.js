import React, { useState } from 'react'
import { Image, ImageBackground, ScrollView, SectionList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { dummyData, COLORS, SIZES, FONTS, icons, images} from '../constants'
import { Entypo, Ionicons, EvilIcons } from '@expo/vector-icons';
import { Icon } from 'react-native-elements';
import { AddItem, ListItem, TransactionItem } from '../components';

const TransactionScreen = ({navigation}) => {

    const [selected, setSelected] = useState(0)

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

    function renderList() {
        return(
            <View style={{ backgroundColor: COLORS.white }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    paddingTop: 30,
                    // paddingHorizontal: 40
                }}
                >
                    <TouchableOpacity
                        onPress={()=> {setSelected(0)}}
                        style={{
                            borderBottomColor: selected  == 0 ? COLORS.secondary : 'transparent',
                            borderBottomWidth: 4,
                            paddingHorizontal: 6,
                            paddingBottom: 10
                        }}
                    >
                        <Text style={{
                            fontWeight: selected  == 0 ? 'bold' : 'normal',
                            ...FONTS.h3
                        }}>Transactions</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={()=> {setSelected(1)}}
                        style={{
                            borderBottomColor: selected == 1 ? COLORS.secondary : 'transparent',
                            borderBottomWidth: 4,
                            paddingHorizontal: 6,
                        }}
                    >
                        <Text style={{
                            fontWeight: selected == 1 ? 'bold' : 'normal',
                            ...FONTS.h3
                        }}>Summary</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        // onPress={()=> {setSelected(!selected)}}
                        style={{
                            borderBottomColor: 'transparent',
                            borderBottomWidth: 4,
                            paddingHorizontal: 6,
                        }}
                    >
                        <Text style={{
                            // fontWeight: selected ? 'bold' : 'normal',
                            ...FONTS.h3
                        }}>Statements</Text>
                    </TouchableOpacity>

                </View>
                <View
                style={{
                    flexDirection: 'row',
                    height: 40,
                    alignItems: 'center',
                    marginHorizontal: SIZES.padding,
                    marginVertical: SIZES.base,
                    paddingHorizontal: SIZES.radius,
                    borderRadius: SIZES.padding,
                    backgroundColor: COLORS.lightGray1
                }}
                >
                    <EvilIcons name="search" size={35} color="grey" />

                    <TextInput 
                        style={{
                            flex: 1,
                            marginLeft: SIZES.radius,
                            ...FONTS.h2
                        }}
                        placeholder="Search"
                    />

                </View>
            </View>
        )
    }

    const DATA = [
        {
          title: "Main dishes",
          data: ["Pizza", "Burger", "Risotto"]
        },
        {
          title: "Sides",
          data: ["French Fries", "Onion Rings", "Fried Shrimps"]
        },
        {
          title: "Drinks",
          data: ["Water", "Coke", "Beer"]
        },
        {
          title: "Desserts",
          data: ["Cheese Cake", "Ice Cream"]
        }
      ];

    function renderBody() {
        return(
            <View>

                <View style={styles.container}>
                    <SectionList
                        sections={dummyData.transact}
                        renderItem={({item}) => 
                            <Text style={styles.item}>
                                <TransactionItem 
                                    image={item.image} 
                                    description={item.description}
                                    location={item.location}
                                    amount={item.amount} 
                                    date={item.date}    
                                />
                            </Text>}
                        renderSectionHeader={({section}) => 
                            (
                                <View style={styles.header}>
                                    <Text>{section.date}</Text>
                                    <Text style={{ color: COLORS.gray }}>{section.day}</Text>
                                </View>
                            )
                            }
                        keyExtractor={(item, index) => item + index}
                    />

                </View>
                
            </View>
        )
    }

    return (
        <ScrollView>
            {renderHeader()}
            {renderList()}
            {renderBody()}
        </ScrollView>
    )
}

export default TransactionScreen

const styles = StyleSheet.create({

    container:{
        // flex:1,
        backgroundColor: 'white'
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // width: '80%',
        marginHorizontal: 10,
        marginVertical: 10
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
