import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate, useParams } from 'react-router-dom';
import NavBar from '../components/common/NavBar';
import { getDetailDrink } from '../service/serviceFilters';
import { Btn } from '../styles/styled';


const Detail = () => {

    const [detail, setDetail] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        getDetailDrink(id).then(response => setDetail(response.data.drinks[0]))
    }, [])

    return (
        <div>
            <NavBar />
            <div className='container'>
                {detail &&
                    <Card style={{ width: '400px' }} className='mt-2 p-3 shadow text-center container'>
                        <Card.Img variant="top" src={detail.strDrinkThumb} />
                        <Card.Body>
                            <Card.Title><h2><b>{detail.strDrink}</b></h2></Card.Title>
                            <Card.Text>
                                This is an {detail.strAlcoholic} {detail.strCategory} served in a {detail.strGlass}.
                            </Card.Text>
                            <Card.Text>
                                <b>How we make it: </b>  {detail.strInstructions}.
                            </Card.Text>
                        </Card.Body>
                        <Btn className='btn  w-100' onClick={() => { navigate('/order-request') }}>BACK TO LIST</Btn>
                    </Card>
                }
            </div>
        </div>
    );
}

export default Detail;

