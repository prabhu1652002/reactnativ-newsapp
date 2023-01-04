import { FETCH_ARTICLES } from "../actions/newsActions";
import { TOGGLE_FAVORITES } from "../actions/newsActions";

const initialState = {
    articles: [],
    favorites: []
}

export default function(state=initialState, action){

    switch(action.type){
        case FETCH_ARTICLES:
            return {
                ...state,
                articles: action.payload
            }
        case TOGGLE_FAVORITES:// add or remove favorites
            const index=state.favorites.findIndex(article => article.url === action.payload);
            if(index>=0){
                const favorites =[...state.favorites];
                favorites.splice(index,1);
                return {
                    ...state,
                    favorites
                }

            }else{
                const article = state.articles.articles.find(article => article.url===action.payload);
                return{
                    ...state,
                    favorites: state.favorites.concat(article)
                }
            }
            
    }
    return state;
}