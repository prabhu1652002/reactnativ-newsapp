import React from 'react';
import { StyleSheet, Text, View, Viewv ,Platform, Image } from 'react-native';

const Card  = () => {
    return(
        <View style={styles.card} >
            <View style={styles.imageWrapper}>
                <Image source={require('../../assets/favicon.png')}
                 style={styles.image}
                />
            </View>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>Dummy text</Text>
            </View>
            <View style={styles.descriptionWrapper}>
                <Text style={styles.description}>Dummy text changed</Text>
            </View>

        </View>
    )
}

const styles= StyleSheet.create({
    title: {
        fontFamily: 'OswaldBold',
    },
    description :{
        fontFamily: '',

    },
    image:{
        height: '100%',
        width:'100%'
    },
    card:{
        backgroundColor:'white',
        height: 300,
        margin: 20,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {widht: 0, height: 2},
        shadowRadius: 8,
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
        paddingHorizontal: 15,
        
    },
    descriptionWrapper:{
        paddingHorizontal: 15,

    }
})

export default Card;