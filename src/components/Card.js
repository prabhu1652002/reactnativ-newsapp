import React from 'react';
import { StyleSheet, Text, View ,Platform, Image ,TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

const Card  = props => {
    return(
        <TouchableOpacity onPress={()=> props.navigation.navigate('NewsDetails')}>
            <View style={styles.card} >
                <View style={styles.imageWrapper}>
                    <Image 
                        source={{uri:props.image}}
                        style={styles.image}
                    />
                </View>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>
                        {props.title.length>35? props.title.slice(0,35)+'...':props.title}
                    </Text>
                    <MaterialIcons name="favorite-border" color="black" size={24} />
                </View>
                <View style={styles.descriptionWrapper}>
                    <Text style={styles.description}>
                        {props.description.length>170?props.description.slice(0,170)+'...':props.description}
                    </Text>
                </View>

            </View> 
        </TouchableOpacity>
    )
}

const styles= StyleSheet.create({
    title:{
        fontSize:17,
        fontWeight:'bold'
    },
    image:{
        height: '100%',
        width:'100%'
    },
    card:{
        backgroundColor:'lightgrey',
        height: 300,
        margin: 20,
        borderRadius: 10,
        shadowColor: 'white',
        shadowOpacity: 1,
        shadowOffset: {width: 6, height: 6},
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