import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Card, Row} from "react-bootstrap";
import {Context} from "../index";

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return (
       <Row xs={4} md={5} className="g-1" >
           {device.brands.map(brand =>
               <Card
                   style={{cursor:"pointer"}}
                   key={brand.id}
                   className="p-2 m-1 text-center"
                   onClick={()=>device.setSelectedBrand(brand)}
                   border={brand.id === device.selectedBrand.id ? "dark":"light"}
               >
                   {brand.name}
               </Card>

           )}
       </Row>
    );
});

export default BrandBar;