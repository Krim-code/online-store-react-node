import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar, NavDropdown, Offcanvas} from "react-bootstrap";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {NavLink, useLocation} from "react-router-dom";
import OffCanvas from "./OffCanvas";
import '../css/componentCss/NavBarCss.css'
import {useNavigate} from "react-router-dom";
import Basket from "./modals/Basket";

const NavBar = observer(()=>{
    const navigate = useNavigate()
    const location = useLocation()
    const isSHOP = location.pathname === SHOP_ROUTE
    const {user} = useContext(Context)
    return (

        <Navbar bg="dark" variant="dark" expand="lg" fixed={'top'} >
            <Container>
                <Navbar.Brand >
                    <NavLink to={SHOP_ROUTE} style={{textDecoration:"none"}} >
                        <h3 className='logo'>Kirin Shop</h3>
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                {user.isAuth ?
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="justify-content-end flex-lg-grow-1"
                        style={{ maxHeight: '200px' }}
                        navbarScroll
                    >
                        {isSHOP ? <OffCanvas/>: <></>}
                        <Basket/>
                        <Button
                            variant={'outline-light'}
                            className='m-2'
                            onClick={()=>navigate(ADMIN_ROUTE)}
                        >
                            Админ-панель
                        </Button>
                        <Button
                            variant={'outline-danger'}
                            className='m-2'
                            onClick={()=>{
                                user.setIsAuth(false)
                                user.setUser({})
                                navigate(LOGIN_ROUTE)} }
                        >
                            Выйти
                        </Button>
                    </Nav>
                </Navbar.Collapse>
                    :
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="justify-content-end flex-lg-grow-1 pe-lg-5"
                            style={{ maxHeight: '200px' }}
                            navbarScroll
                        >
                            {isSHOP ?<OffCanvas/>: <></>}

                            <Button variant={'outline-light'} onClick={() => navigate(LOGIN_ROUTE)} className='m-2'>Войти</Button>

                        </Nav>
                    </Navbar.Collapse>}
            </Container>
        </Navbar>
    );
});

export default NavBar;