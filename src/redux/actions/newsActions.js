export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const TOGGLE_FAVORITES = 'TOGGLE_FAVORITES';
// import

export const fetchArticles = () => {
    return  async dispatch => {
        // logic to fetch news details
        const techNews=await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=a6673d4869ce4e929adbb67d5058086e') // tech
        const bussinessNew=await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a6673d4869ce4e929adbb67d5058086e') // bussiness
        
        // const fromtime='2022-12-04';
        // const apiKey='a6673d4869ce4e929adbb67d5058086e';
        // const fetchUrl='https://newsapi.org/v2/everything?domains=wsj.com&'+'&from='+fromtime+'&apiKey='+apiKey;
        // const results=await fetch(fetchUrl)
        
        const results=bussinessNew;
        const resultData = await results.json(); // converting to json format
       
        dispatch({
            type: FETCH_ARTICLES,
            payload: resultData
        });
    }
}

export const toggleFavorites = url => {
    return {
        type:TOGGLE_FAVORITES,
        payload:url
    }
}

