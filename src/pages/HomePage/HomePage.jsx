import styled from 'styled-components'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ThreeDots } from 'react-loader-spinner'
import { useContext } from 'react'
import DatasContext from '../components/DatasContext'

export default function HomePage(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {dataUser, setDataUser} = useContext(DatasContext)

    const logInObject = {
        email: email,
        password: password
    }

    function logIn(){

    }

    return (
        <SCHomePage>
            <SCLogo src={logo}></SCLogo>
            <form onSubmit={logIn}>
                <SCInputLogIn
                data-test="email-input"
                type="email" 
                placeholder='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}                
                />
                <SCInputLogIn
                data-test="password-input"
                type="password" 
                placeholder='senha'
                value={password}
                onChange={(e) => setPassword(e.target.value)}                
                />
                <SCSUbmitLogIn  data-test="login-btn" type="submit"/>
                <Link to='/cadastro'>
                    <SCTextLogIn data-test="signup-link">Não tem uma conta? Cadastre-se!</SCTextLogIn>
                </Link>
            </form>
        </SCHomePage>  
    );
}

const SCHomePage = styled.div`
    background-color: #FFFFFF;
    
    padding: 68px 36px 199px 36px;

    display:flex;
    justify-content: center;
    flex-wrap: wrap;
`

const SCLogo = styled.img`
    width: 180px;
    height: 178px;
    margin-bottom: 27px;
`

const SCInputLogIn = styled.input`
    width: 303px;
    height: 45px;
    margin-top: 6px;

    border: 1px solid #D4D4D4;
    border-radius: 5px;

    font-weight: 400;
    font-size: 19px;

    ::placeholder{
        color: #D4D4D4;

        font-family: 'Lexend Deca', sans-serif;
    }
`

const SCSUbmitLogIn = styled.input`
    width: 303px;
    height: 45px;
    margin-top: 6px;

    background: #52B6FF;
    border-radius: 5px;
    border: none;

    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    color: #FFFFFF;
`

const SCTextLogIn = styled.p`
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;

    margin-top: 25px;

    color: #52B6FF;
`

