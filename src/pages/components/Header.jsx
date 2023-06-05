import styled from "styled-components"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import DatasContext from '../components/DatasContext'

export default function Header(){

    const {dataUser, setDataUser} = useContext(DatasContext)

    return(
        <SCHeader data-test="header">
            <Link to='/' style={{textDecoration: 'none'}}>
                <p>TrackIt</p>
            </Link>
            <SCDivRight>
            <SCName>{dataUser.name}</SCName>
            <SCPerfilImage data-test="avatar" src={dataUser.image}></SCPerfilImage>
            </SCDivRight>
        </SCHeader>
    );
}

const SCHeader = styled.div`
    width: 100%;
    height: 70px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0px 18px;

    position: fixed;
    z-index: 10;
    top: 0;

    background-color: #126BA5;

    font-family: 'Playball', cursive;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;

    color: #FFFFFF;

    p {
        color: #FFFFFF;
    }
`

const SCDivRight = styled.div`
    display: flex;
`

const SCName = styled.p`
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 20px;

    color: #FFFFFF;

    margin-right: 15px
`

const SCPerfilImage = styled.img`
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
    background-color: green;
`