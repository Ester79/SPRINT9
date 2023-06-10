import axios from 'axios';

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/';
const filterByCategory = 'filter.php?c=';
const detailDrink = 'lookup.php?i=';



// method that filter by category
export const filterCategory = category => {
    return axios.get(`${URL}${filterByCategory}${category}`)
};

// method that get the detail drink by Id
export const getDetailDrink = id => {
    return axios.get(`${URL}${detailDrink}${id}`)
}




