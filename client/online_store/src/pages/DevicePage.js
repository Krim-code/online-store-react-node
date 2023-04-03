import React, {useContext, useEffect, useState} from 'react';
import {Alert, Badge, Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from '../assets/star.png'
import {Context} from "../index";
import {useNavigate, useParams} from "react-router-dom";
import {fetchOneDevice} from "../http/deviceAPI";
import {insertLocalBasket} from "../http/localBacket";
import {LOGIN_ROUTE} from "../utils/consts";

const DevicePage = () => {
    const navigate = useNavigate()
    const {user} = useContext(Context)
    const [device,setDevice] = useState({info:[]})
    const {id} = useParams()
    useEffect(()=>{
        fetchOneDevice(id).then(data => setDevice(data))
    },[])
    return (
        <div style={{ marginTop: 100}}>

            <Container className="mt-3">
                <Row className='d-flex align-items-center justify-content-start'>
                    <Col md={6} className='text-center align-self-center' >
                        <h2>{device.name}</h2>
                        <Image width={300} height={300} src={process.env.REACT_APP_API_URL+device.img}/>

                    </Col>


                    <Col md={5} className='d-flex align-items-center justify-content-center mb-5 mt-lg-5 me-lg-5'>
                        <Card
                            className="d-flex flex-column align-items-center justify-content-around"
                            style={{width: 300, height: 300, fontSize: 32, border: '1px solid lightgray'}}
                        >
                            <h3>От: {device.price} руб.</h3>
                            <Row className="d-flex flex-column ">

                                {/*<div*/}
                                {/*    className="d-flex align-items-center justify-content-center"*/}
                                {/*    style={{background: `url(${bigStar}) no-repeat center center`, width:50, height: 50, backgroundSize: 'cover', fontSize:14}}*/}
                                {/*>*/}
                                {/*    {device.rating}*/}
                                {/*</div>*/}
                            </Row>

                            {user.isAuth ? <Button variant={"outline-dark"}
                                 onClick={(e) => insertLocalBasket({
                                        user: localStorage.getItem('email'),
                                        device_id:device.id,
                                        price:device.price,
                                        name: device.name})}
                            >
                                Добавить в корзину
                            </Button>:
                                <Button
                                    variant={'danger'}
                                    onClick={() => navigate(LOGIN_ROUTE)}
                                    className='m-2'>Войти или Зарегистрироваться</Button>}


                        </Card>
                    </Col>
                </Row>
                <Row className="d-flex flex-column m-3">
                    <h1 className='mb-5 text-center'>Характеристики</h1>
                    {device.info.map((info,index) =>
                        <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}} >
                            {info.title}: {info.description}
                        </Row>
                    )}
                </Row>
            </Container>
        </div>
    );
};

export default DevicePage;