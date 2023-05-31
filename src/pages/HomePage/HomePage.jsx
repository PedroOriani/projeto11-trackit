import styled from 'styled-components'

export default function HomePage(){
    return (
        <SCHomePage>
            <SCLogo src='../src/assets/logo.png'></SCLogo>
            <SCFormLogIn></SCFormLogIn>
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
`

const SCFormLogIn = styled.form`
    
`

