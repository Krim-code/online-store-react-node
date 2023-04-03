import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import TypeBar from "./TypeBar";
import {Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import BrandBar from "./BrandBar";


function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <Button variant="outline-light" onClick={handleShow} className="m-2 ">
                {props.nameButton}
            </Button>

                <Offcanvas show={show} onHide={handleClose} placement={"bottom"} name={"bottom"} >
                    <Container>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title >Типы товаров</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {props.insert}
                </Offcanvas.Body>
                    </Container>
            </Offcanvas>


        </>
    );
}

const OffCanvas = observer( () => {
    return (
        <div>
            <OffCanvasExample nameButton= "Типы" insert = {<TypeBar/>}/>
            <OffCanvasExample nameButton= "Брэнды" insert = {<BrandBar/>}/>
        </div>
    );
});

export default OffCanvas;