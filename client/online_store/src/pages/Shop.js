import React, {useContext, useEffect} from 'react';
import {Col, Container, Offcanvas, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import OffCanvas from "../components/OffCanvas";
import BrandBar from "../components/BrandBar";
import {observer} from "mobx-react-lite";
import DeviceList from "../components/DeviceList";
import Slideshow from "../components/Slideshow";
import {Context} from "../index";
import {fetchBrand, fetchDevice, fetchTypes} from "../http/deviceAPI";
import Pages from "../components/Pages";

const Shop = observer( () => {
    const {device} = useContext(Context)

    useEffect(()=> {
        fetchTypes().then(data => device.setTypes(data) )
        fetchBrand().then(data => device.setBrands(data) )
        fetchDevice(null,null,1,4).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)})
    },[])

    useEffect(() => {
        fetchDevice(device.SelectedType.id,device.selectedBrand.id,device.page,4).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)})
    },[device.page,device.SelectedType,device.selectedBrand,device.page])



    return (

        <div  style={{marginTop:55}}>

                <Slideshow />


            <Container className=''>
                <div className='w-100 text-center mt-5 mb-5'><h1>Shop</h1></div>
                <DeviceList/>
                <Pages/>
            </Container>
        </div>

    );
});

export default Shop;