import styled from 'styled-components'
import {BsTrash} from 'react-icons/bs'
import { useState, useContext } from 'react'
import DatasContext from '../components/DatasContext'

export default function MyHabit() {

    const days = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    const {dataUser, setDataUser, habitos, setHabitos} = useContext(DatasContext)

    const habits = habitos

    const len = habits.length;

    console.log(habits)

    return(
        habits.map((habit, i) => (
            <SCHabit data-test="habit-container" key={i}>
                <SCName data-test="habit-name">{habit.name}</SCName>
                <SCDivDays>
                    {days.map((day, i) => (
                        <SCDays 
                        data-test="habit-day" 
                        key={i}
                        >{day}</SCDays>
                    ))};
                </SCDivDays>
                <SCDelete data-test="habit-delete-btn"/>
            </SCHabit>
        ))
    );
}

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

const SCDelete = styled(BsTrash)`
    width: 15px;
    height: 17px;

    position: absolute;
    top: 11px;
    right: 10px;
`
const SCDays = styled.button`
    width: 30px;
    height: 30px;

    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;

    border: 1px solid #D5D5D5;
    border-radius: 5px;

    background: none; // fazer props para aletrnância de cor
    color: #DBDBDB; // fazer props para aletrnância de cor

    display: flex;
    justify-content: center;
    align-items: center;
`