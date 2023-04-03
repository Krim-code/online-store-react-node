import Carousel from 'react-bootstrap/Carousel';
import {useContext} from "react";
import {Context} from "../index";


function SlidShow() {
    const {device} = useContext(Context)
    return (

        <Carousel  variant='light' interval='2000' >
            {device.slidshow.map(device=>
                <Carousel.Item key = {device.id}>
                <img
                    className="d-block w-100 "

                    src={device.img}
                    alt={device.id}
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>)}
        </Carousel>
    );
}

export default SlidShow;