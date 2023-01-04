import React,{useEffect} from 'react';
import { StyleSheet, Text, View ,Platform, Image,ScrollView , TouchableOpacity,FlatList} from 'react-native';
// import Header from '../components/Header';
import Card from '../components/Card';
import { useSelector,useDispatch } from 'react-redux';
import * as newsAction from '../redux/actions/newsActions'


const NewsListScreen = props => {

    const dispatch=useDispatch();
    useEffect(() =>
      {
        dispatch(newsAction.fetchArticles())   // use fetch articles function in actions folder of redux
      },[dispatch]            // dispatch as dependency
    );

    const {articles}=useSelector(state => state.news.articles);
      // console.log(articles);


    return (
        <ScrollView style={{backgroundColor:'black'}}>
          <FlatList 
              
              data={articles}
              keyExtractor={item => item.url}
              renderItem={({item}) => (
                <Card 
                  navigation={props.navigation}
                  title={item.title} 
                  image={item.urlToImage}
                  description={item.description}
                />
              )}
              />
        </ScrollView>
    )
}
const styles= StyleSheet.create({
    background:{
        backgroundColor:"black"
    }
})

export default NewsListScreen