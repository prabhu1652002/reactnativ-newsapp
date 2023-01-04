export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const ADD_FAVORITES = 'ADD_FAVORITES';

export const fetchArticles = () => {
    return  async dispatch => {
        // logic to fetch news details
        const results=await fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-12-04&sortBy=publishedAt&apiKey=a6673d4869ce4e929adbb67d5058086e')


        const resultData = await results.json(); // converting to json format

        dispatch({
            type: FETCH_ARTICLES,
            payload: resultData
        });
    }
}
