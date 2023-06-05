import styled from "styled-components"
import Header from '../components/Header'
import Footer from '../components/Footer'
import Habit from '../components/TodayHabit'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import { useState, useContext, useEffect } from 'react'
import DatasContext from '../components/DatasContext'

export default function Today() {

    dayjs.locale('br');
    const [today] = useState(dayjs().format('dddd, DD/MM'));

    const {dataUser, todayHabits, setTodayHabits, clicked, setClicked} = useContext(DatasContext)

    const len = todayHabits.length;
    const check = clicked.length;

    console.log(len);
    console.log(check)

    return(
        <>
            <Header data-test="header"/>
            <SCBodyToday>
                <SCContainerToday>
                    <SCData data-test="today">{today}</SCData>
                    <SCPercentage 
                    data-test="today-counter">
                       {clicked.length === 0 ? <p>Nenhum hábito concluído ainda</p> : `${Math.round(check/len*100)} dos hábitos concluídos`}
                    </SCPercentage>
                    <Habit data-test="today-habit-container"/>
                </SCContainerToday>
            </SCBodyToday>
            <Footer data-test="menu"/>
        </>
    );
}

const SCBodyToday = styled.div`
    width: 100%;
    height: 100%;

    padding-top: 70px;
    padding-bottom: 80px;
`

const SCContainerToday = styled.div`
    padding: 28px 17px;
`

const SCData = styled.p`
    color: #126BA5;

    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
`

const SCPercentage = styled.div`
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;

    color: #BABABA; //ALTERNANCIA DE COR

    margin-bottom: 18px;
`