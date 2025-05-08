import React, { useEffect, useState } from 'react'
import "./LoginManager.css"
import LoginForm from './Components/LoginForm/LoginForm';
import RegisterForm from './Components/RegisterForm/RegisterForm';
import { useNavigate } from 'react-router-dom';
import { Button, Flex, Space } from '@mantine/core';
function LoginManager() {
    const [showLogin, setShowLogin] = useState(true);
    const navigate = useNavigate()

    
    return (
        <div className='login-manager-container'>
            <div className='login-manager__wrapper'>
                <div className='login-manager-node'>
                    {showLogin && <LoginForm />}
                    {!showLogin && <RegisterForm setShowLogin={setShowLogin}/>}
                </div>

                <div className='toggle-loginmanager-container'>
                    {showLogin
                        ? (
                            <React.Fragment>
                                <Flex gap={10} justify={"space-between"} direction={"column"}>
                                    <Button color="dark" onClick={() => window.location.href = "/"}>Volver al inicio</Button>

                                    <Space>
                                        <p>¿No tiene una cuenta?</p>
                                        <Button c={"white"} color='dark' onClick={() => setShowLogin(false)}>Registrarse</Button>
                                    </Space>
                                </Flex>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <Flex justify={"space-between"} gap={10} direction={"column"}>
                                    <Button color="dark" onClick={() => window.location.href = "/"}>Volver al inicio</Button>

                                    <Space>
                                        <p>¿Ya tiene una cuenta?</p>
                                        <Button c={"white"} color='dark' onClick={() => setShowLogin(true)}>Iniciar Sesión</Button>
                                    </Space>
                                </Flex>
                            </React.Fragment>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default LoginManager
