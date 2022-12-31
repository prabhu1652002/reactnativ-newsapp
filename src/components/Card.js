import React from 'react';
import { StyleSheet, Text, View ,Platform, Image } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

const Card  = ({texttitle,textcontent,src}) => {
    return(
        <View style={styles.card} >
            <View style={styles.imageWrapper}>
                <Image source={src}
                 style={styles.image}
                />
            </View>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>{texttitle}</Text>
                <MaterialIcons name="favorite-border" color="red" size={24} />
            </View>
            <View style={styles.descriptionWrapper}>
                <Text style={styles.description}>{textcontent}</Text>
            </View>

        </View> 
    )
}

const styles= StyleSheet.create({
    image:{
        height: '100%',
        width:'100%'
    },
    card:{
        backgroundColor:'lightgrey',
        height: 300,
        margin: 20,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: {width: 2, height: 2},
        shadowRadius: 15,
        elevation: 5
    },
    imageWrapper:{
        width: '100%',
        height: '60%',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    titleWrapper:{
        height:'10%',
        flexDirection:'row',
        justifyContent:"space-between",
        paddingHorizontal: 15,
        
    },
    descriptionWrapper:{
        paddingHorizontal: 15,

    }
})

export default Card;