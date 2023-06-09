import styled from 'styled-components'
import logo from '../../assets/logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { ThreeDots } from 'react-loader-spinner'

export default function Register(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [urlImage, setUrlImage] = useState('')

    const [loading, setLoading] = useState(false)

    const threeDots = <ThreeDots />

    const navigate = useNavigate()

    function signUp(e){

        e.preventDefault();

        const registerObj = {
            email: email,
            password: password,
            name: name,
            image: urlImage
        };
        setLoading(true);

        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up';

        const promise = axios.post(URL, registerObj);

        promise.then(resposta => {
            console.log(resposta.data);
            setLoading(false);
            navigate('/');
        });

        promise.catch(erro => {
            alert(erro.response.data.message);
            setLoading(false);
        })
            
        }

    return(
        <SCRegister>
            <SCLogo src={logo}></SCLogo>
            <form onSubmit={signUp}>
                <SCInputRegister
                data-test="email-input"
                type="email" 
                placeholder='email'
                disable={loading}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <SCInputRegister
                data-test="password-input"
                type="password" 
                placeholder='senha'
                disable={loading}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <SCInputRegister
                data-test="user-name-input"
                type="text" 
                placeholder='nome'
                disable={loading}
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <SCInputRegister
                data-test="user-image-input"
                type="url" 
                placeholder='foto'
                disable={loading}
                value={urlImage}
                onChange={(e) => setUrlImage(e.target.value)}
                />
                <SCSUbmitRegister data-test="signup-btn" type="submit" value="Cadastrar" disable={loading}/>
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

const SCThreeDots = styled(ThreeDots)`
    width: 51px;
    color: #ffffff;
`