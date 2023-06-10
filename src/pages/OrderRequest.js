import React, { useEffect, useState, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/common/NavBar';
import { filterCategory } from '../service/serviceFilters';
import { getCategories } from '../service/serviceLists';
import { AppContext } from '../components/context/provider';
import { Btn } from '../styles/styled';


const OrderRequest = () => {
    const [drinksByCategory, setDrinksByCategory] = useState([]);
    const [categorySelected, setCategorySelected] = useState('Ordinary Drink');
    const [categories, setCategories] = useState([]);
    const [state, setState] = useContext(AppContext);
    const navigate = useNavigate();

    const filteredCategory = () => {
        filterCategory(categorySelected).then(response => setDrinksByCategory(response.data.drinks))
    };

    const selectCategory = () => {
        getCategories()
            .then(response => setCategories(response.data.drinks))
    }

    const viewDetails = idDrinkValue => {
        console.log('idDrink: ', idDrinkValue)
        navigate(`/detail/${idDrinkValue}`)
    }


    useEffect(() => {
        selectCategory();
        filteredCategory()
    }, [categorySelected])


    return (
        <div>
            <NavBar />
            <div className='container mt-3 text-center'>
                <h2><b>{state.name}</b>, here you have all the drinks we can offer you! Select your favourite category!</h2>
                <Form.Select onChange={event => setCategorySelected(event.target.value)} className='mt-3'>
                    {
                        categories.map(function (item, index) {
                            return (
                                <option key={index} value={item.strCategory}  > {item.strCategory}</option>
                            )
                        })}
                </Form.Select>
                <div className='mt-5 d-flex flex-wrap justify-content-between '>
                    {drinksByCategory && drinksByCategory.map(function (item, index) {
                        return (

                            <Card key={index} style={{ width: '350px' }} className='mb-5 shadow'>
                                <Card.Img variant='top' src={item.strDrinkThumb} />
                                <Card.Body>
                                    <Card.Title>{item.strDrink}</Card.Title>
                                    <Btn className='btn  w-100' onClick={() => viewDetails(item.idDrink)}>View Details</Btn>
                                </Card.Body>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default OrderRequest


