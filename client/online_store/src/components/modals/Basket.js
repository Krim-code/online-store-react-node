import React, {useContext, useEffect, useState} from 'react';
import {Alert, Badge, Button, Modal} from "react-bootstrap";

import {Context} from "../../index";
import {fetchBrand, fetchDevice, fetchTypes} from "../../http/deviceAPI";
import {getLocalBasket, NullLocalStorageBasket, tgSend} from "../../http/localBacket";
import {observer} from "mobx-react-lite";
import {SHOP_ROUTE} from "../../utils/consts";
import data from "bootstrap/js/src/dom/data";

const Basket = () => {

    const {basket} = useContext(Context)
    let countBasket = 0
    useEffect(()=> {
       basket.setBasket(JSON.parse(localStorage.getItem('card')) || [])
        basket.setBasketTotal(basket.basket.length)

    },[])


    const [show, setShow] = useState(false);

    const handleClose = () => {


        setShow(false);};

    const handleShow = () => {
        setShow(true);

        basket.setBasket(JSON.parse(localStorage.getItem('card')) || [])
        console.log(basket.basket)

    }
    let isEmpty = basket.basket.length === 0

    return (
        <div>
            <Button variant={'outline-light'}
                    className='m-2' onClick={handleShow}>
                Корзина
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Корзина </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {isEmpty ?
                        <div className='text-center fw-bold'>Корзина пуста <br/><span className='display-4'>&#128532;</span> </div>
                        :<>
                    {basket.basket.map(basket =>
                        <Alert  variant='info'>
                           {basket.name} Цена: <b>{basket.price}</b>
                    </Alert>)}</>}

                </Modal.Body>
                <Modal.Footer>
                    {isEmpty ?
                        <></>:
                        <>
                            <Button variant="secondary" onClick={() => {
                                NullLocalStorageBasket()
                                handleClose()
                            }}>
                                Очистить корзину
                            </Button>

                            <Button variant="primary" onClick={()=>{
                                tgSend().then(data=>alert(data.message))
                                NullLocalStorageBasket()
                                handleClose()}}>
                                Сделать заказ
                            </Button>
                        </>



                    }
                </Modal.Footer>
            </Modal>
            
        </div>
    );
};

export default Basket;