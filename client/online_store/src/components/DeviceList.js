import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import DeviceItem from "./DeviceItem";
import {Row} from "react-bootstrap";


const DeviceList = observer(()=> {
    const {device} = useContext(Context)
    const brands = device.brands
    return (
        <div>
            <Row  s xs={1} sm={2} md={3}  className="g-4">
                {device.devices.map(device=>
                <DeviceItem key={device.id} device = {device} brand={brands}/>
                )}
            </Row>
        </div>
    );
});

export default DeviceList;