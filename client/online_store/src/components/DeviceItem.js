import React, {useContext} from 'react';
import {Card, Col, Image} from "react-bootstrap";
import star from '../assets/star.png'
import {useNavigate} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/consts";
import {Context} from "../index";

const DeviceItem = ({device,brand}) => {

    const navigate = useNavigate()
    return (
        <Col md={3}  align={'center'} onClick={()=>navigate(DEVICE_ROUTE+'/'+device.id)}>
              <Card style={{width:200,cursor:'pointer'}} border={'light'}>

                  <Image  width={'100%'} src={process.env.REACT_APP_API_URL+device.img}/>

                  <div className='d-flex justify-content-between text-center text-black-50 align-items-center-center me-1'>


                  </div>
                  <div className='me-auto px-2 pb-2 pt-2'><h6>{device.name}</h6></div>
              </Card>
        </Col>
    );
};

export default DeviceItem;