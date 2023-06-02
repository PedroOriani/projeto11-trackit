import styled from "styled-components"
import Header from '../components/Header'
import Footer from '../components/Footer'
import Habit from '../components/TodayHabit'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import { useState } from "react";

export default function Today() {

    dayjs.locale('br');
    const [today] = useState(dayjs().format('dddd, DD/MM'));

    const [finished, setFinisehd] = useState([]);

    return(
        <>
            <Header data-test="header"/>
            <SCBodyToday>
                <SCContainerToday>
                    <SCData data-test="today">{today}</SCData>
                    <SCPercentage data-test="today-counter">Nenhum hábito concluído ainda</SCPercentage>
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

const SCPercentage = styled.p`
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;

    color: #BABABA; //ALTERNANCIA DE COR

    margin-bottom: 18px;
`