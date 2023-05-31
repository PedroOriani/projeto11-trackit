import styled from 'styled-components'

export default function Register(){
    return(
        <SCRegister>
            <SCLogo src='../src/assets/logo.png'></SCLogo>
            <form>
                <SCInputRegister type="email" placeholder='email'/>
                <SCInputRegister type="password" placeholder='senha'/>
                <SCInputRegister type="text" placeholder='nome'/>
                <SCInputRegister type="text" placeholder='foto'/>
                <SCSUbmitRegister type="submit"/>
                <SCTextResgister>Não tem uma conta? Cadastre-se!</SCTextResgister>
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
        margin-left: 11px;
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