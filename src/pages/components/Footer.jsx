import styled from "styled-components";
import { Link } from 'react-router-dom'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useState, useContext, useEffect } from 'react'
import DatasContext from '../components/DatasContext'

export default function Footer(){

    const {dataUser, todayHabits, setTodayHabits, clicked, setClicked} = useContext(DatasContext)

    const len = todayHabits.length;
    const check = clicked.length;

    const percentage = Math.round(check/len*100);

    return(
        <SCFooter data-test="menu">
            <Link to='/habitos' style={{textDecoration: 'none'}}>
                <SCTextFooter data-test="habit-link">Hábitos</SCTextFooter>
            </Link>
            <Link to='/hoje'>
                <SCPorcentage
                data-test="today-link"
                value={percentage} 
                text='Hoje'
                background
                backgroundPadding={6}
                styles={buildStyles({
                    backgroundColor: "#52B6FF",
                    textColor: "#FFFFFF",
                    pathColor: "#FFFFFF",
                    trailColor: "transparent"
                })}/>
            </Link>
            <Link to='/historico' style={{textDecoration: 'none'}}>
                <SCTextFooter data-test="history-link">Histórico</SCTextFooter>
            </Link>
        </SCFooter>
    );
}

const SCFooter = styled.div`
    width: 100%;
    height: 70px;
    background-color: #FFFFFF;

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: fixed;
    z-index: 10;
    bottom:0;

    padding: 0px 36px 0px 31px;
`

const SCTextFooter = styled.p`
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;

    color: #52B6FF;
`

const SCPorcentage = styled(CircularProgressbar)`
    width: 91px;
    height: 91px;
    
    position: fixed;
    left: 139.5px;
    bottom: 10px;

    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
`