import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {useLocation, NavLink, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {login, registration} from "../http/userAPI";
import {Context} from "../index";


const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')



    const click = async () => {
        try {
            let data;
            if(isLogin){
                data = await login(email,password)
                console.log(data)
            }else {
                data = await registration(email,password)
            }
            user.setUser(data)
            user.setIsAuth(true)

            navigate(SHOP_ROUTE)
        }
        catch (e){
            alert(e.response.data.message)
        }


    }

    return (
            <Container className="d-flex justify-content-center align-items-center text-center "
            style={{height:window.innerHeight}}
            >
                <Card style={{width:600}} className="p-5">
                        <h2 className='m-auto'>{isLogin? 'Авторизация': 'Регистрация'}</h2>
                        <Form className='d-flex flex-column'>
                            <Form.Control
                                className='mt-3 '
                                type='email'
                                placeholder={"Email"}
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <Form.Control
                                className='mt-3'
                                type="password"
                                placeholder={"Password"}
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                            <Button
                                variant={"outline-dark"}
                                className='mt-3'
                                onClick={click}
                            >
                                {isLogin ? 'Войти':'Регистрация'}
                            </Button>

                            {isLogin ? <NavLink to={REGISTRATION_ROUTE} style={{color:"black"}} className='mt-3'>Регистрация</NavLink>
                                : <NavLink to={LOGIN_ROUTE} style={{color:"black"}} className='mt-3'>Войти</NavLink>}



                        </Form>
                </Card>


            </Container>
    );
});

export default Auth;