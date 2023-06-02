import styled from 'styled-components'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Register(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [urlImage, setUrlImage] = useState('')

    const registerObj = {
        email: email,
        password: password,
        name: name,
        urlImage: urlImage
    }

    function signUp(){

    }

    return(
        <SCRegister>
            <SCLogo src={logo}></SCLogo>
            <form onSubmit={singUp}>
                <SCInputRegister
                data-test="email-input"
                type="email" 
                placeholder='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <SCInputRegister
                data-test="password-input"
                type="password" 
                placeholder='senha'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <SCInputRegister
                data-test="user-name-input"
                type="text" 
                placeholder='nome'
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <SCInputRegister
                data-test="user-image-input"
                type="url" 
                placeholder='foto'
                value={urlImage}
                onChange={(e) => setUrlImage(e.target.value)}
                />
                <SCSUbmitRegister data-test="signup-btn" type="submit" value='Cadastrar'/>
                <Link to ='/'>
                <SCTextResgister data-test="login-link">Já tem uma conta? Faça login!</SCTextResgister>
                </Link>
            </form>
        </SCRegister>  
    );
}

const SCRegister = styled.div`
    background-color: #FFFFFF;
    
    padding: 68px 36px 97px 36px;

    display:flex;
    justify-content: center;
    flex-wrap: wrap;
`

const SCLogo = styled.img`
    width: 180px;
    height: 178px;
    margin-bottom: 27px;
`

const SCInputRegister = styled.input`
    width: 303px;
    height: 45px;
    margin-top: 6px;

    border: 1px solid #D4D4D4;
    border-radius: 5px;

    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;


    ::placeholder{
        color: #D4D4D4;

        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;

        font-family: 'Lexend Deca', sans-serif;
    }
`

const SCSUbmitRegister = styled.input`
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

const SCTextResgister = styled.p`
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;

    margin-top: 25px;

    color: #52B6FF;
`