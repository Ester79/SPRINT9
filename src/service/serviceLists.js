import axios from 'axios';

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/';
const listCategory = 'list.php?c=list';


// method that get all the categories of drinks
export const getCategories = () => {
    return axios.get(`${URL}${listCategory}`)
}

















