import styled from "styled-components"
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState, useContext, useEffect } from 'react'
import DatasContext from '../components/DatasContext'
import axios from 'axios'

export default function Historic(){

    const {dataUser} = useContext(DatasContext);

    const [historic, setHistoric] = useState([]);

    const token = {
        headers:{
          Authorization: `Bearer ${dataUser.token}`
        }
    };

    useEffect( () => {

            const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily';

            const promise = axios.get(URL, token);
    
            promise.then( resposta => setHistoric(resposta.data));    
            promise.catch( erro => alert(erro.response));       
    
      }, []);

    return(
        <>
            <Header data-test="header"/>
            <SCBodyHistoric>
                <SCContainerHistoric>
                    <SCTitle>Histórico</SCTitle>
                    <SCDescription>
                        {historic.length === 0 
                        ? <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
                        : historic.map((habit, i) => {
                            <SCHabit data-test="habit-container" key={i}>
                                <SCName data-test="habit-name">{habit[i].day}</SCName>
                            </SCHabit>
                        })}
                    </SCDescription>
                </SCContainerHistoric>
            </SCBodyHistoric>
            <Footer data-test="menu"/>
        </>
    );
}

const SCBodyHistoric = styled.div`
    padding-top: 70px;
`

const SCContainerHistoric = styled.div`
    padding: 28px 17px;
`

const SCTitle = styled.p`
    color: #126BA5;

    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
`

const SCDescription = styled.div`
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;

    color: #666666;

    margin-top: 17px;
`

const SCHabit = styled.div`
    width: 340px;
    min-height: 91px;

    padding: 13px 15px 15px 13px;

    background-color: #FFFFFF;

    border-radius: 5px;

    margin-top: 10px;
    
    position: relative;
`

const SCName = styled.div`
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;

    color: #666666;
`

const SCDivDays = styled.div`
    width: 234px;

    margin-top: 8px;

    display: flex;
    justify-content: space-between;
`

const SCDays = styled.button`
    width: 30px;
    height: 30px;

    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;

    border: 1px solid #D5D5D5;
    border-radius: 5px;

    background: ${props => props.selected}none; // fazer props para aletrnância de cor
    color: #DBDBDB; // fazer props para aletrnância de cor

    display: flex;
    justify-content: center;
    align-items: center;
`